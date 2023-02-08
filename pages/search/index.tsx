import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import type { GetServerSideProps } from "next";
import { wrapper } from "@/store";
import { fetchSearchSuggestionAction } from "@/store/modules/home";
import { getProductSearchData } from "@/service/modules/search";
import type { IProduct } from "@/service/modules/home";
import GridView from "@/components/grid-view";
import classNames from "classnames";
import BreadCrumb from "@/components/bread-crumb";
import TabSelect from "@/components/tab-select";

interface IProps {
  children?: ReactNode;
  navbar?: any;
  products?: IProduct[];
  q?: string;
}

const Search: FC<IProps> = (props) => {
  const { products = [], q } = props;
  const [newProducts, setNewProducts] = useState<Array<any>>([...products!]);

  useEffect(() => {
    setNewProducts([...products!]);
  }, [products]);

  const links = [
    {
      name: "首页",
      link: "/",
      id: 10413,
    },
    {
      name: q,
      link: null,
      id: 10414,
    },
  ];

  const selectsData = [
    {
      id: 164331,
      sort: "default",
      name: "综合",
    },
    {
      id: 164332,
      sort: "price_asc",
      name: "价格低到高",
    },
    {
      id: 164333,
      sort: "price_desc",
      name: "价格高到低",
    },
  ];

  function handleTabItemClick(item: any) {
    if (item.sort === "default") {
      setNewProducts([...products!]);
      return;
    }
    newProducts.sort((a, b) => {
      if (item.sort === "price_asc") {
        return a.minPrice - b.minPrice;
      } else if (item.sort === "price_desc") {
        return b.minPrice - a.minPrice;
      } else {
        return 0;
      }
    });
    setNewProducts([...newProducts]);
  }

  return (
    <div className={classNames("wrapper")}>
      <BreadCrumb links={links} />
      <TabSelect selectData={selectsData} onItemClick={handleTabItemClick} />
      <GridView products={newProducts} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const { q } = context.query;
    let props: IProps = {};
    await store.dispatch(fetchSearchSuggestionAction());
    if (typeof q === "string") {
      const res = await getProductSearchData({
        limit: 60,
        offset: 0,
        key: q as string,
      });
      props.products = res.products;
      props.q = q;
    }
    return {
      props: props,
    };
  });

export default memo(Search);
Search.displayName = "Search";

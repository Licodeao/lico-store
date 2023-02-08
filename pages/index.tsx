import Slider from "@/components/slider";
import {
  getEditorRecommendData,
  getHomeBannerData,
  getHotRecommendData,
} from "@/service/modules/home";
import { wrapper } from "@/store";
import { fetchSearchSuggestionAction } from "@/store/modules/home";
import Head from "next/head";
import { memo } from "react";
import styles from "./index.module.scss";
import type {
  IBanner,
  ICategory,
  IDigital,
  IRecommend,
  IHotProduct,
  IProduct,
} from "@/service/modules/home";
import type { GetServerSideProps } from "next";
import type { FC, ReactNode } from "react";
import Category from "@/components/category";
import Recommend from "@/components/recommend";
import classNames from "classnames";
import SectionTitle from "@/components/section-title";
import GridView from "@/components/grid-view";
import DigitalPanel from "@/components/digital-panel";

interface IProps {
  children?: ReactNode;
  banners: IBanner[];
  categorys: ICategory[];
  digitalData: IDigital[];
  recommends: IRecommend[];
  editorProducts: IHotProduct[];
  hotRecommends: IProduct[];
}

const Home: FC<IProps> = (props) => {
  const {
    banners = [],
    categorys = [],
    recommends = [],
    editorProducts = [],
    hotRecommends = [],
    digitalData = [],
  } = props;
  return (
    <>
      <Head>
        <title>哩叩小店</title>
      </Head>
      <div className={styles.home}>
        <Slider banners={banners} />
        <Category category={categorys} />
        <Recommend recommend={recommends} />
        <div className={classNames("wrapper", styles.content)}>
          <SectionTitle title="编辑推荐" />
          <GridView products={editorProducts} />
          <DigitalPanel itemData={digitalData} />
          <SectionTitle title="热门商品" />
          <GridView products={hotRecommends} />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    await store.dispatch(fetchSearchSuggestionAction());
    const res = await getHomeBannerData();
    const editorResult = await getEditorRecommendData();
    const hotRecommendResult = await getHotRecommendData();
    return {
      props: {
        banners: res.data.banners || [],
        categorys: res.data.categorys || [],
        digitalData: res.data.digitalData || [],
        recommends: res.data.recommends || [],
        editorProducts: editorResult.data.hotProduct || [],
        hotRecommends: hotRecommendResult.data.allProduct || [],
      },
    };
  });

export default memo(Home);
Home.displayName = "Home";

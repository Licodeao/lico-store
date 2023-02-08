import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import type { GetServerSideProps } from "next";
import { wrapper } from "@/store";
import { fetchSearchSuggestionAction } from "@/store/modules/home";
import { getDetailInfoData, IDetailInfo } from "@/service/modules/detail";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import GridView from "@/components/grid-view";

interface IProps {
  children?: ReactNode;
  detailInfo?: IDetailInfo;
}

const Detail: FC<IProps> = (props) => {
  const { detailInfo } = props;
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.detail}>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles.banner}>
          <Link href={"/"}>
            <Image
              className={classNames("extra", styles.image)}
              src={detailInfo?.webPic!}
              alt="images"
              fill
            />
          </Link>
        </div>
        <GridView products={detailInfo?.products!} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const { id } = context.query;
    await store.dispatch(fetchSearchSuggestionAction());
    const res = await getDetailInfoData(id as string);
    return {
      props: {
        detailInfo: res.data,
      },
    };
  });

export default memo(Detail);
Detail.displayName = "Detail";

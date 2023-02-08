import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import { Row, Col } from "antd";
import { IRecommend } from "@/service/modules/home";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  children?: ReactNode;
  recommend?: IRecommend[];
}

const Recommend: FC<IProps> = (props) => {
  const { recommend } = props;
  return (
    <div className={styles.recommend}>
      <div className={classNames("wrapper", styles.content)}>
        <Row>
          {recommend?.map((item) => {
            return (
              <Col span={12} key={item.id}>
                <Link
                  href={`/detail?id=${item.id}`}
                  className={styles["recommend-item"]}
                >
                  <Image
                    src={item.picStr!}
                    className={classNames("extra", styles.image)}
                    alt="recommend"
                    width={542}
                    height={300}
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default memo(Recommend);
Recommend.displayName = "Recommend";

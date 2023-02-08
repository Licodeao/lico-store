import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import type { ICategory } from "@/service/modules/home";
import { Col, Row } from "antd";
import Image from "next/image";

interface IProps {
  children?: ReactNode;
  category?: ICategory[];
}

const Category: FC<IProps> = (props) => {
  const { category } = props;
  return (
    <div className={styles["tab-category"]}>
      <div className={classNames("wrapper", styles.content)}>
        <Row>
          {category?.map((item) => {
            return (
              <Col span={6} key={item.cid}>
                <div className={styles["category-item"]}>
                  <Image
                    src={item.picStr!}
                    className={styles.image}
                    alt="category"
                    width={48}
                    height={48}
                  />
                  <div className={styles.right}>
                    <div className={styles.title}>{item.title}</div>
                    {item.type === 1 && (
                      <div className={styles["sub-title"]}>
                        <span className={styles.count}>{item.count}</span>
                        <span className={styles.desc}>{item.desc}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default memo(Category);
Category.displayName = "Category";

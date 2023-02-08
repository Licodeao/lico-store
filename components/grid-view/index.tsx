import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import type { IHotProduct, IProduct } from "@/service/modules/home";
import styles from "./index.module.scss";
import { Row, Col } from "antd";
import GridViewItem from "../grid-view-item";

interface IProps {
  children?: ReactNode;
  products: IHotProduct[] | IProduct[];
}

const GridView: FC<IProps> = (props) => {
  const { products = [] } = props;
  return (
    <div className={styles["grid-view"]}>
      <Row>
        {products.map((item, index) => {
          return (
            <Col key={item.id} span={6}>
              <div className={styles["view-item"]}>
                <GridViewItem itemData={item} showTip={index === 0} />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default memo(GridView);
GridView.displayName = "GridView";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  children?: ReactNode;
  itemData?: any;
  showTip?: boolean;
}

const GridViewItem: FC<IProps> = (props) => {
  const { itemData, showTip } = props;
  const newProducts = itemData.products ? itemData.products : itemData;
  return (
    <div className={styles["grid-view-item"]}>
      <div className={styles["item-image"]}>
        <Image
          src={newProducts?.coverUrl!}
          alt="image"
          width={263}
          height={263}
          className={styles.image}
          priority
        />
        {showTip && (
          <div className={styles.tip}>
            <div className={styles["min-price"]}>¥{newProducts?.minPrice}</div>
            <div className={styles["original-cost"]}>
              ¥{newProducts?.originalCost}
            </div>
          </div>
        )}
      </div>
      <div className={styles["item-info"]}>
        {newProducts?.couponLabelDesc && (
          <span className={styles.label}>{newProducts?.couponLabelDesc}</span>
        )}
        <Link href="/" className={styles.name}>
          {newProducts?.name}
        </Link>
      </div>
      <div className={styles["item-price"]}>¥{newProducts?.originalCost}</div>
    </div>
  );
};

export default memo(GridViewItem);
GridViewItem.displayName = "GridViewItem";

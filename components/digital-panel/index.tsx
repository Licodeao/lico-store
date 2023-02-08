import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  children?: ReactNode;
  itemData?: any;
}

const DigitalPanel: FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <div className={styles["digital-panel"]}>
      <div className={styles["panel-left"]}>
        <div className={styles["info"]}>
          <Image
            className={styles.icon}
            src={itemData.digitalIcon}
            width={32}
            height={32}
            alt="image"
          ></Image>
          <div className={styles.name}>{itemData.name}</div>
        </div>
        <div className={styles.desc}>{itemData.desc}</div>
        <Link href={"https://licodeao.top"} className={styles["buy-now"]}>
          {itemData.buyNow}
        </Link>
      </div>
      <div className={styles["panel-right"]}>
        <Image
          className={styles.image1}
          src={itemData.picStr1}
          width={100}
          height={100}
          alt="image"
        ></Image>
        <Image
          className={styles.image2}
          src={itemData.picStr2}
          width={120}
          height={120}
          alt="image"
        ></Image>
        <i className={styles.image}></i>
      </div>
    </div>
  );
};

export default memo(DigitalPanel);
DigitalPanel.displayName = "DigitalPanel";

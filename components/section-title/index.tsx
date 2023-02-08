import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import styles from "./index.module.scss";

interface IProps {
  children?: ReactNode;
  title?: string;
}

const SectionTitle: FC<IProps> = (props) => {
  const { title } = props;
  return <div className={styles["section-title"]}>{title}</div>;
};

export default memo(SectionTitle);
SectionTitle.displayName = "SectionTitle";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Search from "../search";

interface IProps {
  children?: ReactNode;
}

const NavBar: FC<IProps> = () => {
  return (
    <div className={styles.navbar}>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles["content-left"]}>
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className={styles.logo}
              priority={true}
            />
            <span>哩叩小店</span>
          </Link>
          <h1 className={styles.title}>哩叩小店</h1>
        </div>
        <div className={styles["content-right"]}>
          <Search />
          <div className={styles["right-cart"]}>
            <Link href="/" className={styles.cart}>
              <span className={styles.count}>0</span>
            </Link>
          </div>
          <div className={styles["right-login"]}>登录</div>
        </div>
      </div>
    </div>
  );
};

export default memo(NavBar);
NavBar.displayName = "NavBar";

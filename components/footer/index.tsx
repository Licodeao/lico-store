import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import footer from "@/assets/images/footer.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

interface IProps {
  children?: ReactNode;
}

const Footer: FC<IProps> = () => {
  return (
    <div className={styles["all"]}>
      <div className={styles["main"]}>
        <div className={styles["desc"]}>
          <span>
            数据基于
            <Link href="https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi">
              开源项目
            </Link>
            , 仅用作于实践，且并未进行任何商业性质活动！
          </span>
          <span className={styles["copy"]}>
            &copy; Powered by <a href="https://licodeao.top">Licodeao</a>
          </span>
        </div>
        <Image src={footer} alt="image" className={styles["img"]} />
      </div>
    </div>
  );
};

export default memo(Footer);

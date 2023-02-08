import React, { memo, useRef } from "react";
import type { FC, ReactNode, ElementRef } from "react";
import { Carousel } from "antd";
import styles from "./index.module.scss";
import classNames from "classnames";
import type { IBanner } from "@/service/modules/home";
import Image from "next/image";

interface IProps {
  children?: ReactNode;
  banners: IBanner[];
}

const Slider: FC<IProps> = (props) => {
  const { banners } = props;
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null);

  function handlePrevClick() {
    carouselRef.current?.prev();
  }

  function handleNextClick() {
    carouselRef.current?.next();
  }

  return (
    <div className={styles["top-swiper"]}>
      <div className={classNames("wrapper", styles.content)}>
        <Carousel
          autoplay
          autoplaySpeed={3000}
          fade
          className={styles.carousel}
          ref={carouselRef}
        >
          {banners?.map((item) => {
            return (
              <div className={styles["swiper-item"]} key={item.id}>
                <div
                  className={styles["swiper-bg"]}
                  style={{
                    backgroundImage: `url(${item.backendPicStr})`,
                  }}
                ></div>
                <Image
                  className={styles.image}
                  src={item.picStr!}
                  alt="picStr"
                  width={1100}
                  height={480}
                />
              </div>
            );
          })}
        </Carousel>
      </div>

      <button className={styles.prev} onClick={handlePrevClick}>
        <span></span>
      </button>
      <button className={styles.next} onClick={handleNextClick}>
        <span></span>
      </button>
    </div>
  );
};

export default memo(Slider);
Slider.displayName = "Slider";

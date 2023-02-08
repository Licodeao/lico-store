import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import { useAppSelector } from "@/store/hooks";
import { shallowEqual } from "react-redux";
import { useRouter } from "next/router";

interface IProps {
  children?: ReactNode;
}

const Search: FC<IProps> = () => {
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [placeHolder, setPlaceHolder] = useState<string>("蓝牙耳机");
  const router = useRouter();
  const { navbar } = useAppSelector(
    (state) => ({
      navbar: state.home.navbar,
    }),
    shallowEqual
  );

  function handleInputFocus(isFocus: boolean) {
    setInputFocus(isFocus);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const inputTarget = event.target as HTMLInputElement;
      toSearch(inputTarget.value);
      setInputFocus(false);
    }
  }

  function handleSearch(name: string) {
    setPlaceHolder(name);
    toSearch(name);
  }

  function toSearch(name: string) {
    router.push({
      pathname: "/search",
      query: {
        q: name,
      },
    });
  }

  return (
    <div className={styles.search}>
      <div className={styles["search-bg"]}>
        <input
          type="text"
          placeholder={placeHolder}
          className={styles.input}
          onFocus={() => handleInputFocus(true)}
          onBlur={() => handleInputFocus(false)}
          onKeyDown={(event) => handleKeyDown(event as any)}
        />
      </div>
      <div
        className={classNames(
          styles["search-panel"],
          inputFocus ? styles.show : styles.hide
        )}
      >
        <div className={styles.shadow}></div>
        <h2>热门搜索</h2>
        <ul>
          {navbar.configKey &&
            navbar.configKey.map((item, index) => {
              return (
                <li
                  key={index}
                  onMouseDown={() => handleSearch(item[index + 1])}
                >
                  {item[index + 1]}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default memo(Search);
Search.displayName = "Search";

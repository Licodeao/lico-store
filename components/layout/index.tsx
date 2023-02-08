import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";

interface IProps {
  children?: ReactNode;
}

const Layout: FC<IProps> = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default memo(Layout);
Layout.displayName = "Layout";

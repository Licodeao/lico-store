import "antd/dist/reset.css";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { Provider } from "react-redux";
import { wrapper } from "@/store/index";

export default function App({ Component, ...rest }: AppProps) {
  const { store } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...rest.pageProps} />
      </Layout>
    </Provider>
  );
}

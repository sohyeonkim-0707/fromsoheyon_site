// 랜딩페이지
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "antd/dist/antd.css";
import "../styles/globals.css";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;

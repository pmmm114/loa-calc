import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import CommonLayout from "@src/components/client/common/CommonLayout";
import CommonHeader from "@src/components/client/common/CommonHeader";
import CommonFooter from "@src/components/client/common/CommonFooter";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("_app: ", pageProps);
  return (
    <CommonLayout>
      <CommonHeader />
      <Component {...pageProps} />
      <CommonFooter locales={pageProps.locale} />
    </CommonLayout>
  );
}

export default appWithTranslation(MyApp);

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";

import CommonLayout from "@src/components/client/common/CommonLayout";
import CommonHeader from "@src/components/client/common/CommonHeader";
import CommonFooter from "@src/components/client/common/CommonFooter";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <CommonLayout>
      {router.pathname !== "/404" && <CommonHeader />}
      <Component {...pageProps} />
      {router.pathname !== "/404" && <CommonFooter />}
    </CommonLayout>
  );
}

export default appWithTranslation(MyApp);

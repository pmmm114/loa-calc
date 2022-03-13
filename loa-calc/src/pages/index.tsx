import Head from "next/head";
import { GetStaticPropsContext, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "@src/components/client/Page/HomePage";
import SearchBarContainer from "@src/components/client/Home/SearchBarContainer";
import LogoContainer from "@src/components/client/Home/LogoContainer";
import PostContainer from "@src/components/client/Home/PostContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LoaCalc</title>
        <meta
          name="description"
          content="로스트아크에서 필요한 유용한 기능을 제공하는 페이지입니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage>
        <LogoContainer />
        <SearchBarContainer />
        <PostContainer />
      </HomePage>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        "common",
        "footer",
        "header",
      ])),
    }, // will be passed to the page component as props
  };
}

export default Home;

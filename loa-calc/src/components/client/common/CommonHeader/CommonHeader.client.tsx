import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import * as ES from "./styles";

interface IHeaderMenu {
  title: string;
}

const CommonHeader = () => {
  const { t } = useTranslation("header");
  const headerMenuArray: Array<IHeaderMenu> = t("header_menu", {
    returnObjects: true,
  });

  return (
    <>
      <ES.CommonLayoutHeader>
        <h1>LoaCalc</h1>
        <ES.CommonLayoutNavWrap>
          <ES.CommonLayoutNav>
            <ul>
              {headerMenuArray.map((item) => {
                return (
                  <ES.HeaderMenuListItem key={item.title}>
                    {item.title}
                  </ES.HeaderMenuListItem>
                );
              })}
            </ul>
          </ES.CommonLayoutNav>
        </ES.CommonLayoutNavWrap>
      </ES.CommonLayoutHeader>
    </>
  );
};

export default CommonHeader;

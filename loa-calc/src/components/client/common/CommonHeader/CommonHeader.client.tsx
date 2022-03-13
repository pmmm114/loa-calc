import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import * as ES from "./styles";

const headerMenuRouter = [
  {
    router: "/",
    description: "home",
  },
  {
    router: "/engrave",
    description: "engrave",
  },
  {
    router: "/menu2",
    description: "menu2",
  },
  {
    router: "/menu3",
    description: "menu3",
  },
  {
    router: "/menu4",
    description: "menu4",
  },
];

const CommonHeader = () => {
  const { t } = useTranslation("header");

  return (
    <>
      <ES.CommonLayoutHeader>
        <h1>LoaCalc</h1>
        <ES.CommonLayoutNav>
          <ES.HeaderMenuList>
            {headerMenuRouter.map((item) => {
              return (
                <ES.HeaderMenuListItem key={item.description}>
                  <Link href={item.router} passHref={true}>
                    <ES.HeaderMenuLink>
                      {t(`header_menu.${item.description}`, {
                        returnObjects: true,
                      })}
                    </ES.HeaderMenuLink>
                  </Link>
                </ES.HeaderMenuListItem>
              );
            })}
          </ES.HeaderMenuList>
        </ES.CommonLayoutNav>
      </ES.CommonLayoutHeader>
    </>
  );
};

export default CommonHeader;

import React from "react";
import Link from "next/link";
import * as ES from "./styles";

const CommonLayout = ({ children }: any) => {
  return (
    <ES.CommonLayout>
      <ES.CommonLayoutHeader>
        <h1>LoaCalc</h1>
        <ES.CommonLayoutNavWrap>
          <ES.CommonLayoutNav>
            <ul>
              <li>
                <Link href="/engrave">각인계산기</Link>
              </li>
            </ul>
          </ES.CommonLayoutNav>
        </ES.CommonLayoutNavWrap>
      </ES.CommonLayoutHeader>
      {children}
    </ES.CommonLayout>
  );
};

export default CommonLayout;

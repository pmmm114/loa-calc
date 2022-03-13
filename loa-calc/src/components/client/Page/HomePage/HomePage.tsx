import React, { useCallback } from "react";
import { useTranslation } from "next-i18next";
import SaerchBar from "@src/components/client/common/SearchBar";
import ListBox from "@src/components/client/common/ListBox";
import ListBoxTitle from "@src/components/client/common/ListBox/components/ListBoxTitle";
import ListBoxContent from "@src/components/client/common/ListBox/components/ListBoxContent";
import ListItem from "@src/components/client/common/ListItem";
import * as ES from "./styles";

const dummyData: Array<any> = [1, 2, 3, 4, 5];

const PageHome = (props: any) => {
  const { t } = useTranslation("common");

  const ListItemOnclick = useCallback(() => {
    console.log("click Item");
  }, []);

  const ListItemRender = () => {
    if (dummyData.length > 0) {
      return (
        <ES.ListItemWrap>
          {dummyData.map((item) => {
            return (
              <ListItem key={item} onClick={() => ListItemOnclick()}>
                {item}
              </ListItem>
            );
          })}
        </ES.ListItemWrap>
      );
    }

    return t("nodata");
  };
  return (
    <ES.HomePage>
      <ES.LogoContainer>Logo</ES.LogoContainer>
      <ES.SearchContainer>
        <SaerchBar />
      </ES.SearchContainer>
      <ES.PostContainer>
        <ES.ListBoxWrap>
          <ListBox>
            <ListBoxTitle>Title</ListBoxTitle>
            <ListBoxContent>{ListItemRender()}</ListBoxContent>
          </ListBox>
          <ListBox>
            <ListBoxTitle>Title</ListBoxTitle>
          </ListBox>
        </ES.ListBoxWrap>
      </ES.PostContainer>
    </ES.HomePage>
  );
};

export default PageHome;

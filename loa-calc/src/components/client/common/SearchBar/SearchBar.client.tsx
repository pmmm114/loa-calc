import React from "react";
import IconSearch from "@src/assets/icon/search-icon.svg";
import * as ES from "./styles";

const SearchBar = () => {
  const SearchBarOnClick = () => {
    console.log("click searchbar");
  };

  return (
    <ES.SearchBarWrap>
      <ES.SearchBar />
      <ES.SearchBarButton type="button" onClick={SearchBarOnClick}>
        <IconSearch alt="search" />
      </ES.SearchBarButton>
    </ES.SearchBarWrap>
  );
};

export default SearchBar;

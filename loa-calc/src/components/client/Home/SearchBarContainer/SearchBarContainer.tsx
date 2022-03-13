import React from "react";
import SearchBar from "@src/components/client/common/SearchBar";
import * as ES from "./styles";

// interface IPageHome {
//   children: React.ReactNode;
// }

const SearchBarContainer = () => {
  return (
    <ES.SearchBarContainer>
      <SearchBar />
    </ES.SearchBarContainer>
  );
};

export default SearchBarContainer;

import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme as emotionTheme } from "@src/variable/theme";
import * as ES from "./styles";

const CommonLayout = ({ children }: any) => {
  return (
    <ThemeProvider theme={emotionTheme}>
      <ES.CommonLayout>{children}</ES.CommonLayout>
    </ThemeProvider>
  );
};

export default CommonLayout;

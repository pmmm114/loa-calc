import React from "react";
import * as ES from "./styles";

const CommonFooter = () => {
  return (
    <>
      <ES.CommonFooter className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </ES.CommonFooter>
    </>
  );
};

export default CommonFooter;

import React from "react";
import { IindexPageGlobalProps } from "@src/types/global";

const CommonFooter = ({ locales }: IindexPageGlobalProps) => {
  return (
    <>
      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </footer>
    </>
  );
};

export default CommonFooter;

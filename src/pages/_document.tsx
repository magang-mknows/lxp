// import { link } from "fs";
import { Html, Head, Main, NextScript } from "next/document";
import { ReactElement } from "react";

export default function Document(): ReactElement {
  return (
    <Html lang="en" className="">
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

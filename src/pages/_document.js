import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="p-0 sm:p-[10px]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

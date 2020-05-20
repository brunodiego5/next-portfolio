import React from "react";
import Link from "next/link";
import Router from "next/router";
import Head from "next/head";
import nprogress from "nprogress";

import * as Styled from "./styles";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  nprogress.start();
};

Router.onRouteChangeComplete = () => nprogress.done();

Router.onRouteChangeError = () => nprogress.done();

function Layout({ children, title }) {
  return (
    <Styled.Container>
      <Head>
        <title>NextPortfolio</title>
        <script src="nprogress.js"></script>
        <link rel="stylesheet" href="nprogress.css" />
      </Head>
      <Styled.Header>
        <Link href="/">
          <Styled.Link>Home</Styled.Link>
        </Link>
        <Link href="/about">
          <Styled.Link>About</Styled.Link>
        </Link>
        <Link href="/hireme">
          <Styled.Link>Hire Me</Styled.Link>
        </Link>
      </Styled.Header>

      <h1>{title}</h1>

      {children}

      <footer>&copy; {new Date().getFullYear()}</footer>
    </Styled.Container>
  );
}

export default Layout;

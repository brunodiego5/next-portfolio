import React from "react";
import Link from "next/link";
import * as Styled from "./styles";

function Layout({ children, title }) {
  return (
    <Styled.Container>
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
        <Link href="/blog">
          <Styled.Link>Blog</Styled.Link>
        </Link>
      </Styled.Header>

      <h1>{title}</h1>

      {children}

      <footer>&copy; {new Date().getFullYear()}</footer>
    </Styled.Container>
  );
}

export default Layout;

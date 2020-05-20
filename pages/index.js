import React from "react";
import Link from "next/link";

// import { Container } from './styles';

function Index() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">
        <a>Go to about</a>
      </Link>
      <p>Welcome to the page</p>
    </div>
  );
}

export default Index;

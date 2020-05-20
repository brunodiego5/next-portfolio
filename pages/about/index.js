import React from "react";
import Link from "next/link";

// import { Container } from './styles';

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">
        <a>Go to home</a>
      </Link>
      <p>A JavaScript programmer</p>
      <img src="/static/javascript-logo.png" alt="JavaScript" height="200px" />
    </div>
  );
}

export default About;

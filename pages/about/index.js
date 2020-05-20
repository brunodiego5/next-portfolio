import React from "react";
import Link from "next/link";

import Layout from "../../components/Layout";

// import { Container } from './styles';

function About() {
  return (
    <Layout title="About">
      <p>A JavaScript programmer</p>
      <img src="/public/javascript-logo.png" alt="JavaScript" height="200px" />
    </Layout>
  );
}

export default About;

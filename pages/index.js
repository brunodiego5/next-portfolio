import React from "react";

import Layout from "../components/Layout";
import GlobalStyle from "../styles/global";

// import { Container } from './styles';

function Index() {
  return (
    <>
      <GlobalStyle />
      <Layout title="Home">
        <p>Welcome to the page</p>
      </Layout>
    </>
  );
}

export default Index;

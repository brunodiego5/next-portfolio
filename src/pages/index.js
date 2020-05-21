import React from "react";

// import { Container } from './styles';

function Index() {
  return (
    <>
      <p>Welcome to the page</p>
    </>
  );
}

Index.getInitialProps = async () => {
  return { title: "Home" };
};

export default Index;

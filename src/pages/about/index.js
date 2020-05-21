import React from "react";

// import { Container } from './styles';

function About() {
  return (
    <>
      <p>A JavaScript programmer</p>
      <img src="/images/javascript-logo.png" alt="JavaScript" height="200px" />
    </>
  );
}

About.getInitialProps = async () => {
  return { title: "About" };
};

export default About;

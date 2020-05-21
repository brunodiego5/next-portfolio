import React from "react";

// import { Container } from './styles';

function Hireme() {
  return (
    <p>
      You can hire me at{" "}
      <a href="mailto:bruno_diego5@hotmail.com">bruno_diego5@hotmail.com</a>
    </p>
  );
}

Hireme.getInitialProps = async () => {
  return { title: "Hire Me" };
};

export default Hireme;

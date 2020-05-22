import React from "react";
import PropTypes from "prop-types";

// import { Container } from './styles';

function About({ user }) {
  return (
    <>
      <p>{user.name}</p>
      <img src={user.avatar_url} alt={user.name} height="200px" />
    </>
  );
}

About.getInitialProps = async () => {
  const user = await fetch(
    "https://api.github.com/users/brunodiego5"
  ).then((response) => response.json());

  return { title: "About", user };
};

About.propTypes = {
  user: PropTypes.object,
};

export default About;

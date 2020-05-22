import React from "react";
import PropTypes from "prop-types";

import Error from "../_error";

// import { Container } from './styles';

function About({ user, statusOK }) {
  if (!statusOK) {
    return <Error message={"Could not load your user data!"} />;
  }

  return (
    <>
      <p>{user.name}</p>
      <img src={user.avatar_url} alt={user.name} height="200px" />
    </>
  );
}

About.getInitialProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/brunodiego5"
  ).catch((err) => {
    console.log(err);
  });

  const user = await response.json();
  const statusOK = response.status === 200 ? true : false;

  return { title: "About", user, statusOK };
};

About.propTypes = {
  user: PropTypes.object,
};

export default About;

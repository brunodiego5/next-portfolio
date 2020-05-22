import React from "react";

/**
 * Next.js will automatically call this page
 * on an invalid route
 */
function Error({ message }) {
  return <p>{message ? message : "Couldn't get that page, sorry!"}</p>;
}

Error.getInitialProps = () => {
  return { title: "Error!!!" };
};

export default Error;

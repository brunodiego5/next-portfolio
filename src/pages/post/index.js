import React from "react";
import { withRouter } from "next/router";

import CPost from "../../components/post";

function Post() {
  return <CPost />;
}

Post.getInitialProps = ({ query }) => {
  const { title } = query;
  return { title };
};

export default withRouter(Post);

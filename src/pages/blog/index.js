import React from "react";

import CBlog from "../../components/blog";

function Blog() {
  return <CBlog />;
}

Blog.getInitialProps = () => {
  return { title: "Blog" };
};

export default Blog;

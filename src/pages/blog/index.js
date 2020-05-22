import React from "react";
import Link from "next/link";

import * as Styled from "./styles";

const PostLink = ({ title }) => (
  <Styled.ListItem>
    <Link href={`/post?title=${title}`}>
      <Styled.ListItemLink>{title}</Styled.ListItemLink>
    </Link>
  </Styled.ListItem>
);

function Blog() {
  return (
    <Styled.Container>
      <Styled.List>
        <PostLink title="react" />
        <PostLink title="angular" />
        <PostLink title="vue" />
      </Styled.List>
    </Styled.Container>
  );
}

Blog.getInitialProps = () => {
  return { title: "Blog" };
};

export default Blog;

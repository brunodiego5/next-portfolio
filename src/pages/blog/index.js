import React from "react";
import Link from "next/link";

import * as Styled from "./styles";

const PostLink = ({ slug, title }) => (
  <Styled.ListItem>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <Styled.ListItemLink>{title}</Styled.ListItemLink>
    </Link>
  </Styled.ListItem>
);

function Blog() {
  return (
    <Styled.Container>
      <Styled.List>
        <PostLink slug="react-post" title="React Post" />
        <PostLink slug="angular-post" title="Angular Post" />
        <PostLink slug="vue-post" title="Vue Post" />
      </Styled.List>
    </Styled.Container>
  );
}

Blog.getInitialProps = () => {
  return { title: "Blog" };
};

export default Blog;

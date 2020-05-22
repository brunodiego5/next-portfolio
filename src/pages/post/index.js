import React from "react";

// import { Container } from './styles';

function Post() {
  return (
    <p>
      Quis eu nostrud duis officia ad nisi amet ullamco ex culpa id. Cupidatat
      eu laborum adipisicing nulla occaecat. Nisi ex laboris dolor aliqua mollit
      ea. Ipsum labore consectetur consequat aliqua elit officia id irure duis
      commodo ad culpa. Proident eiusmod sunt sunt amet excepteur velit nostrud
      ipsum sit anim.
    </p>
  );
}

Post.getInitialProps = (props) => {
  const { title } = props.query;
  return { title };
};

export default Post;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1em;
  font-size: 1.2rem;
  background: indigo;
`;

export const Link = styled.a`
  color: darkgray;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: lightgray;
  }
`;

export const Footer = styled.footer`
  padding: 1em;
`;

import React from "react";
import styled from "styled-components";

function Header() {
  return <Navbar>NewsApp</Navbar>;
}

export default Header;

const Navbar = styled.div`
  width: 100vw;
  height: 75px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  position: 'sticky';
  box-shadow: -2px -2px 4px rgb(255 255 255 / 7%), 2px 2px 6px rgb(0 0 0 / 80%);
`;

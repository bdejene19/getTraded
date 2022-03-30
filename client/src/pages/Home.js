import React from "react";
import styled from "styled-components";
// import Nav from "../components/Nav";
import { Navbar } from "../components/Nav/Navbar";

export const Home = () => {
  return (
    <HomeContainer>
      <Navbar></Navbar>
      {/* <Nav></Nav> */}
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%  min-height: 100vh;
`;

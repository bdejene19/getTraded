import React from "react";
import styled from "styled-components";
import { Hero } from "../components/HomeHero/Hero";
// import Nav from "../components/Nav";
import { Navbar } from "../components/Nav/Navbar";

export const Home = () => {
  return (
    <HomeContainer>
      <Navbar></Navbar>
      <Hero></Hero>
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%  min-height: 100vh;
`;

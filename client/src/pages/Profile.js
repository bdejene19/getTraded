import React from "react";
import styled from "styled-components";
import LargeProfileCard from "../components/LargeProfileCard";
import { Navbar } from "../components/Nav/Navbar";
import PreviousWork from "../components/PreviousWork";
import { SmallProfileCard } from "../components/SmallProfileCard";
import { Container } from "./Home";

export const Profile = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <ProfileInfoWrapper>
        <div className="smallCards-Container">
          <SmallProfileCard
            cardHeader="Average Work Rating"
            cardContent="4.2"
          />
          <SmallProfileCard cardHeader="Completed Jobs" cardContent="7" />
        </div>
        <div className="largeCard-Container">
          <LargeProfileCard fullName="Bemnet Dejene "></LargeProfileCard>
        </div>
      </ProfileInfoWrapper>
      <PreviousWork></PreviousWork>
    </Container>
  );
};

const ProfileInfoWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .smallCards-Container,
  .largeCard-Container {
    padding: 3em;
  }
  .smallCards-Container {
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 2em;
  }

  .largeCard-Container {
    flex: 1 1 65%;
  }
`;

import React, { useEffect } from "react";
import styled from "styled-components";
import LargeProfileCard from "../components/LargeProfileCard";
import PreviousWork from "../components/PreviousWork";
import { SmallProfileCard } from "../components/SmallProfileCard";
import { Container } from "./Home";
import { useQuery } from "@apollo/client";
import { QUERY_BUSINESS_BY_ID } from "../utils/queries";
import { useParams } from "react-router-dom";

export const Profile = () => {
  // const { businessId } = useParams();
  const { data, loading, error } = useQuery(QUERY_BUSINESS_BY_ID, {
    variables: { id: "62487b5ef45df9fb84aeed46" },
  });
  console.log(JSON.stringify(error, null, 2));
  // console.log(error);
  console.log("d: ", loading, data);

  return (
    <Container>
      {loading ? (
        <h1>...loading</h1>
      ) : (
        <ProfileInfoWrapper>
          <div className="smallCards-Container">
            <SmallProfileCard
              cardHeader="Average Work Rating"
              cardContent={data.getBusiness.avgScore}
            />
            <SmallProfileCard cardHeader="Completed Jobs" cardContent="7" />
          </div>
          <div className="largeCard-Container">
            <LargeProfileCard
              businessName={data.getBusiness.name}
              fullName={data.getBusiness.owner}
              about={data.getBusiness.description}
              previousWork={[]}
            ></LargeProfileCard>
          </div>
        </ProfileInfoWrapper>
      )}
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

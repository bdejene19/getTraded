import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Container } from "../../pages/Home";

export const ProfileData = (props) => {
  return (
    <ProfileWrapper>
      <Header>
        <h1>{props.name}</h1>
        <Button variant="contained" style={{ borderRadius: "50px" }}>
          View Business
        </Button>
      </Header>
      <h3>Business Type: {props.businessCategory}</h3>
      <p>Email: {props.email}</p>

      <ContactWrapper></ContactWrapper>
    </ProfileWrapper>
  );
};
const ProfileWrapper = styled.article`
  padding: 2em;
`;
const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  align-items: center;

  & > h1,
  button {
    flex: 1 1 5em;
  }
  button {
    max-width: 20vw;
  }
`;

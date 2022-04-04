import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../pages/Home";
import AddBusiness from "./AddBusiness";
import BusinessForm from "./BusinessForm";

export const ProfileData = (props) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  useEffect(() => {
    if (props.businessLength === 0) {
      setBtnDisabled(true);
    }
  }, []);

  return (
    <ProfileWrapper>
      <Header>
        <h1>{props.name}</h1>
        <Button
          variant="contained"
          style={{ borderRadius: "50px" }}
          id="business-btn"
          disabled={btnDisabled}
          href={`/businesses/${props.businessLink}`}
        >
          View Business
        </Button>
      </Header>
      <h3>Business Type: {props.businessCategory}</h3>
      <p>Email: {props.email}</p>

      <ContactWrapper></ContactWrapper>
      <AddBusiness></AddBusiness>
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

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddBusiness from "./AddBusiness";

export const ProfileData = (props) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [link, setLink] = useState("");
  useEffect(() => {
    if (props.business.length === 0) {
      setBtnDisabled(true);
    } else {
      const business = props.business[0];
      console.log(business);
      setCategoryName(business.category);
      setLink(business._id);
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
          href={`/businesses/${link}`}
        >
          View Business
        </Button>
      </Header>
      <h3>Business Type: {categoryName}</h3>
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

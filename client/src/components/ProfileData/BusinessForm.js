import React, { useState } from "react";
import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_BUSINESS } from "../../utils/mutations";
// import { QUERY_USER_BY_ID, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
export default function BusinessForm() {
  const [businessFormState, setBusinessFormState] = useState({
    name: "",
    category: "Electrical",
    description: "",
  });
  const [successMsg, setSuccessMsg] = useState(null);
  const { userId } = useParams();
  const [addBusiness, { error, data }] = useMutation(ADD_BUSINESS);

  const handleBusinessSubmit = async (e) => {
    e.preventDefault();

    const addBusinessMutation = await addBusiness({
      variables: {
        ...businessFormState,
        id: userId,
      },
    }).catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setBusinessFormState({
      ...businessFormState,
      [name]: value,
    });
  };

  return (
    <BusinessFormWrapper>
      <p>Fill out business info.</p>

      <div>
        <label htmlFor="businessName">Business Name:</label>

        <input
          placeholder="Business Name"
          id="businessName"
          name="name"
          value={businessFormState.name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="businessCategory">Select a business category:</label>

        <select
          placeholder="category"
          id="businessCategory"
          name="category"
          value={businessFormState.category}
          onChange={handleChange}
        >
          <option value={"Electrical"}>Electrical</option>
          <option value={"Carpentry"}>Carpentry</option>
          <option value={"Plumbing"}>Plumbing</option>
          <option value={"Landscaping"}>Landscaping</option>
        </select>
      </div>
      <div>
        <label htmlFor="businessDescription"></label>
        <textarea
          placeholder="Business Description"
          id="businessDescription"
          name="description"
          value={businessFormState.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex-row flex-end">
        <button type="submit" onClick={handleBusinessSubmit}>
          Create
        </button>
      </div>
    </BusinessFormWrapper>
  );
}

const BusinessFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 2em 0;
  row-gap: 1em;
  margin: 5em 0;
  border: solid skyblue 1px;
  box-shadow: 3px 3px 3px slategrey;
  p {
    padding: 0 1.5em;
  }
  div {
    width: 60%;
    align-self: center;
  }
  input,
  select,
  textarea {
    justify-self: center;
    width: 100%;
    padding: 0.25em;
    font-size: 1.1rem;
  }

  /* align-items: center; */
  width: 100%;
  p {
    /* padding: 1em 3.5em; */
    font-size: 1.25rem;
  }

  /* select,
  textarea {
    padding: 0.5em;
    font-weight: 600;
    width: 70%;
    align-self: center;
  } */
`;

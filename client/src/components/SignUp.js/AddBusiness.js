import React from "react";
import styled from "styled-components";

export default function AddBusiness() {
  return (
    <BusinessForm>
      <div>
        <p>Fill out business info.</p>

        <input placeholder="Business Name" id="businessName"></input>
      </div>
      <div>
        <input placeholder="Owner Name" id="ownerName"></input>
      </div>
      <div>
        <select placeholder="category" id="businessCategory">
          <option value={"Electrician"}>Electrician</option>
          <option value={"Carpentry"}>Carpentry</option>
          <option value={"Plumbing"}>Plumbing</option>
          <option value={"Landscaping"}>Landscaping</option>
        </select>
      </div>
      <div>
        <label htmlFor="businessDescription"></label>
        <textarea
          placeholder="E.g. Leaf Layout is landscaping business that provides..."
          id="businessDescription"
        ></textarea>
      </div>
    </BusinessForm>
  );
}

const BusinessForm = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: left;

  /* align-items: center; */
  width: 100%;
  p {
    padding: 1em 3.5em;
    font-size: 1.25rem;
  }

  select,
  textarea {
    padding: 0.5em;
    font-weight: 600;
    width: 70%;
    align-self: center;
  }
`;

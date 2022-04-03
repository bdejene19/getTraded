import React from 'react';
import styled from 'styled-components';

export default function LargeProfileCard(props) {
    return (
        <LargeCardWrapper>
            <h3>{props.businessName}</h3>
            <h4>{props.businessField}</h4>
            <h5>{props.fullName}</h5>
            <div className='about-section'>
                <h4>About</h4>
                <p>{props.about}</p>
            </div>
        </LargeCardWrapper>
    );
}

const LargeCardWrapper = styled.div`
    background-color: snow;
    box-shadow: 0 3px 3px 3px slategrey;
    border: solid black 1px;
    border-radius: 3px;
    height: 100%;
    padding: 1em;
`;

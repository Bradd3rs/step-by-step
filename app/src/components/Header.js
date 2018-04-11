import React from 'react';
import styled from 'styled-components';

const Header = ({ step, selected, totalSteps, showStats }) => (
    <Container>
        {
            step ? 
                showStats ? <h1>Stats</h1> : <h1>{selected.toUpperCase()} step {step} of {totalSteps}</h1>
            :
                <h1>Select brew</h1> 
        }
    </Container>
);

export default Header;

const Container = styled.header`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    color: #123427;
    padding: 10px;
    text-align: center;
    border-bottom: 3px solid #123427;

    h1 {
        font-weight: 300;
        font-size: 25px;
        letter-spacing: 1px;
    }
`;
import React from 'react';
import styled from 'styled-components';

const Header = ({ step }) => (
    <Container>
        {
            step ? 
                <h1>Step {step}</h1>
            :
                <h1>Welcome!</h1> 
        }
    </Container>
);

export default Header;

const Container = styled.header`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background: #123427;
    padding: 10px;
    color: white;
    text-align: center;

    h1 {
        font-weight: 300;
        font-size: 25px;
        letter-spacing: 1px;
    }
`;
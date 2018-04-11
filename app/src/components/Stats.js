import React from 'react';
import styled from 'styled-components';

const Stats = ({ selected }) => (
    <Container>
        <h1>CONGRATULATIONS!</h1>
        <p>You completed your {selected.toUpperCase()} brew</p>
    </Container>
);

export default Stats;

const Container = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 30px;
        font-weight: 500;
        line-height: 40px;
    }

    p {
        font-size: 20px;
    }
`;
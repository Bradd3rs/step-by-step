import React from 'react';
import styled from 'styled-components';
import Selection from './Selection';

const Screen = ({ content, step, makeSelection }) => (
    <div>
        {
            step > 0 ?
            content.map((stepIndex, i) => {

                if((step - 1) === i) {

                    return (

                        <Steps key={i}>
                            <h1>{stepIndex.title}</h1>
                            <p>{stepIndex.description}</p>
                        </Steps>
                    )
                } else {
                    return '';
                }
            })
            :
            <Selection makeSelection={makeSelection}  />
        }
    </div>
);

export default Screen;

const Steps = styled.section`
    padding: 10px;
    text-align: center;
`;
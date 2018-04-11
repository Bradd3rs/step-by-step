import React from 'react';
import styled from 'styled-components';
import Selection from './Selection';
import Stats from './Stats';

class Screen extends React.Component {
    render() {
        let content = this.props.content,
            step = this.props.step,
            makeSelection = this.props.makeSelection;
        return (
            <Container>
                {
                    step > 0 && !this.props.showStats ?
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
                        this.props.showStats ? <Stats selected={this.props.selected} /> : <Selection makeSelection={makeSelection}  />
                }
            </Container>
        )
    }
}

export default Screen;

const Steps = styled.section`
    padding: 10px;
    text-align: center;

    h1 {
        font-size: 30px;
        line-height: 40px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    p {
        font-size: 20px;
    }

    @media (min-width: 780px) {

        h1 {
            font-size: 40px;
        }
        p {
            font-size: 35px;
        }
    }
`;

const Container = styled.div`
    width: 100%;
    max-width: 600px;
`;
import React, { Component } from 'react';
import Button from './Button';
import styled from 'styled-components';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.finish = this.finish.bind(this);
  }
  nextStep() {
      this.props.nextStep();
  }
  previousStep() {
      this.props.previousStep();
  }
  finish() {
    this.props.showStats();
  }
  render() {
    return (
      <Container>
        {
          this.props.step ? 
            this.props.step === (this.props.totalSteps) ?
              <Button onClick={this.finish} text="Finish" type="finish" />
              :
              <StepButtons>
                <Button onClick={this.previousStep} text="Previous Step" type="previous" />
                <Button onClick={this.nextStep} text="Next Step" type="next" />
              </StepButtons>
            :
            <Button onClick={this.nextStep} text="Start" type="start" disabled={!this.props.selected} />
        }
      </Container>
    );
  }
}

export default Controls;

const Container = styled.section`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-around;
`;

const StepButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
import React, { Component } from 'react';
import Header from './components/Header';
import Screen from './components/Screen';
import Controls from './components/Controls';
import data from './methods/method-1';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      totalSteps: null,
      selected: null,
      content: [],
      showStats: false
    }
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.makeSelection = this.makeSelection.bind(this);
    this.showStats = this.showStats.bind(this);
  }
  componentDidMount() {
    this.setState(() => ({ content: data }));
  }
  makeSelection(selected) {
    this.setState(() => (
      { 
        selected: selected,
        totalSteps: data.length
      }
    ));
    console.log('selection', selected);
  }
  showStats() {
    this.setState(() => ({ showStats: true }));
    console.log('show stats', this.state.showStats)
  }
  nextStep() {
    if(this.state.step < this.state.totalSteps) {
      this.setState((prevState) => ({ step: prevState.step + 1 }));
    }
  }
  previousStep() {
    this.setState((prevState) => ({ step: prevState.step - 1 }));
  }
  render() {
    let step = this.state.step;
    return (
      <Container>
        <Header step={step} />
        <Screen 
          content={this.state.content} 
          step={step}
          makeSelection={this.makeSelection}  />
        <Controls 
          step={step} 
          totalSteps={this.state.totalSteps}
          nextStep={this.nextStep} 
          previousStep={this.previousStep} 
          selected={this.state.selected}
          showStats={this.showStats} />
      </Container>
    );
  }
}

export default App;

const Container = styled.section`
  position: relative;
  height: 100vh;
  max-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
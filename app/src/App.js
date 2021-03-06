import React, { Component } from 'react';
import Header from './components/Header';
import Screen from './components/Screen';
import Controls from './components/Controls';
import data from './methods/methods';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      totalSteps: null,
      selected: null,
      content: {},
      showStats: false
    }
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.makeSelection = this.makeSelection.bind(this);
    this.showStats = this.showStats.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    // let selected = this.state.selected;
    // this.setState(() => ({ content: data }));
  }
  makeSelection(selected) {
    this.setState(() => (
      { 
        selected: selected,
        totalSteps: data[selected].length,
        content: data[selected]
      }
    ));
    console.log('selection', this.state.content);
  }
  showStats() {
    this.setState(() => ({ showStats: true }));
    console.log('show stats', this.state.showStats)
  }
  reset() {
    this.setState(() => (
      { 
        showStats: false ,
        step: 0,
        selected: null
      }
    ));
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
        <Header 
          step={step} 
          selected={this.state.selected}
          showStats={this.state.showStats}
          totalSteps={this.state.totalSteps} />
        <Screen 
          content={this.state.content} 
          step={step}
          makeSelection={this.makeSelection}
          selected={this.state.selected}
          showStats={this.state.showStats}  />
        <Controls 
          step={step} 
          reset={this.reset}
          totalSteps={this.state.totalSteps}
          nextStep={this.nextStep} 
          previousStep={this.previousStep} 
          selected={this.state.selected}
          showStats={this.showStats}
          showStatsScreen={this.state.showStats} />
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
  overflow: hidden;
`;
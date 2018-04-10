import React, {Component} from 'react';
import styled from 'styled-components';

class Selection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
        this.handleSelection = this.handleSelection.bind(this);
    }
    handleSelection(selected) {
        this.setState(() => ({ selected }));
        this.props.makeSelection(selected);
    }
    render() {
        return (
            <Container>
                <div className={this.state.selected === 1 ? 'selected' : ''} onClick={() => this.handleSelection(1)}>Selection 1</div>
                <div className={this.state.selected === 2 ? 'selected' : ''} onClick={() => this.handleSelection(2)}>Selection 2</div>
            </Container>
        )
    }
}

export default Selection;

const Container = styled.div`
    padding: 10px;

    .selected {
        color: red;
    }
`;
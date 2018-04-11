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
                <div className={this.state.selected ==='ipa' ? 'selected' : ''} onClick={() => this.handleSelection('ipa')}>Selection 1</div>
                <div className={this.state.selected === 'lager' ? 'selected' : ''} onClick={() => this.handleSelection('lager')}>Selection 2</div>
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
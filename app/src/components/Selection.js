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
                <Item className={this.state.selected ==='ipa' ? 'selected' : ''} onClick={() => this.handleSelection('ipa')}>IPA</Item>
                <Item className={this.state.selected === 'lager' ? 'selected' : ''} onClick={() => this.handleSelection('lager')}>Lager</Item>
            </Container>
        )
    }
}

export default Selection;

const Container = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-around;
`;

const Item = styled.div`
    width: 50%;
    padding: 20px;
    border: 2px solid #123427;
    border-bottom-width: 3px;
    border-right-width: 3px;
    margin: 10px;
    text-align: center;
    color: inherit;
    transition: color .3, border .3s;

    &.selected {
        color: #E5722A;
        border: 2px solid #E5722A;
    }
`;
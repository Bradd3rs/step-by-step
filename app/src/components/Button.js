import React, {Component} from 'react';
import styled from 'styled-components';

class Button extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick()
    }
    render() {
        return (

            <TheButton type="button" className={this.props.type} onClick={this.handleClick} disabled={this.props.disabled} >{this.props.text}</TheButton>
        )
    }
}

export default Button;

const TheButton = styled.button`
    background: #123427;
    padding: 10px;
    border: 2px solid #123427;;
    border-radius: 3px;
    color: white;
    font-weight: 700;
    font-size: 15px;
    margin: 10px;
    outline: none;
    opacity: 1;
    transform: translateY(0);
    transition: opacity .2s linear, transform .4s linear;

    &:disabled {
    transform: translateY(5px);
    opacity: 0;
    }

    &.start,
    &.finish {
        width: 100%;
    }

    &.previous {
        background: none;
        border: 2px solid #123427;
        color: #123427;
        margin-right: 5px;
    }

    &.next {
        margin-left: 5px;
    }

    &.next, 
    &.previous {
        width: 50%;
    }

`;
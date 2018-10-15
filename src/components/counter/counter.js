import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

// style
const fadeInMove = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  } 100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Wrapper = styled.div`
  text-align: center;

  animation-name: ${fadeInMove};
  animation-duration: 0.2s;
  animation-timing-function: linear;
  ${"" /* margin-bottom: 1rem; */};
`;

const StyledCounter = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

const CounterItem = styled.span`
  margin-right: ${props => (props.last ? "0" : "1rem")};
  color: ${props => (props.current ? "#FF4500" : "#999289")};
`;

class Counter extends Component {
  render() {
    const { phase } = this.props;

    return (
      <Wrapper>
        <StyledCounter>
          <CounterItem current={phase === 0 ? true : false}>1</CounterItem>
          <CounterItem current={phase === 1 ? true : false}>•</CounterItem>
          <CounterItem current={phase === 2 ? true : false}>2</CounterItem>
          <CounterItem current={phase === 3 ? true : false}>•</CounterItem>
          <CounterItem current={phase === 4 ? true : false}>3</CounterItem>
          <CounterItem current={phase === 5 ? true : false}>•</CounterItem>
          <CounterItem current={phase === 6 ? true : false}>4</CounterItem>
          <CounterItem last current={phase === 7 ? true : false}>
            •
          </CounterItem>
        </StyledCounter>
      </Wrapper>
    );
  }
}

export default Counter;

import React, { Component } from "react";
import Countdown from "react-countdown-now";
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
  ${"" /* border: 1px solid cyan; */} width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;

  animation-name: ${fadeInMove};
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
`;

const StyledTimer = styled.span`
  font-family: "Source Code Pro", monospace;
  font-size: 4rem;
  font-weight: 700;
  color: ${props => (props.done ? "#999289" : "#ff4500")};
  letter-spacing: 2px;
`;

const Status = styled.span`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #999289;
`;

const ButtonNext = styled.span`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 1.5rem;
  color: #ffffff;
  border: none;
  border-radius: 100rem;
  cursor: pointer;

  animation-name: ${fadeInMove};
  animation-duration: 0.2s;
  animation-timing-function: ease-out;

  background-color: #ff4500;
  :hover {
    background-color: #e03d00;
  }
`;

class Timer extends Component {
  render() {
    const { phase, isCounting, onDoneCounting, onContinue } = this.props;

    let statusText;
    let timerCount;
    let nextStatusText;

    switch (phase) {
      case 0:
      case 2:
      case 4:
        statusText = "Work";
        nextStatusText = "Take a short break";
        timerCount = 1500000; // 1500000
        break;

      case 6:
        statusText = "Work";
        nextStatusText = "Take a long break";
        timerCount = 1500000; // 1500000
        break;

      case 1:
      case 3:
      case 5:
        statusText = "Short Break";
        nextStatusText = "Back to work";
        timerCount = 300000; // 300000
        break;

      case 7:
        statusText = "Long Break";
        nextStatusText = "Repeat!";
        timerCount = 900000; // 900000
        break;

      default:
        statusText = "Unknown";
        timerCount = 900000;
    }

    const renderer = ({ minutes, seconds, completed }) => {
      return (
        <StyledTimer>
          {minutes}:{seconds}
        </StyledTimer>
      );
    };

    return (
      <Wrapper>
        {isCounting ? (
          <Countdown
            date={Date.now() + timerCount}
            renderer={renderer}
            onComplete={onDoneCounting}
          />
        ) : (
          <StyledTimer done>00:00</StyledTimer>
        )}

        <Status>{statusText}</Status>

        {isCounting ? null : (
          <ButtonNext onClick={onContinue}>{nextStatusText}</ButtonNext>
        )}
      </Wrapper>
    );
  }
}

export default Timer;

import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  ${"" /* border: 1px solid green; */} width: 100%;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  border: none;
  border-bottom: 2px solid #999289;
  text-align: center;
  color: #ff4500;
  font-family: inherit;
  font-size: 1.5rem;
  outline: none;
  background-color: transparent;

  ::placeholder {
    color: #999289;
  }
`;

const fadeInMove = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  } 100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const colorChange = keyframes`
  0% {
    background-color: #ff4500;
  } 100% {
    background-color: #999289;
  }
`;

const Button = styled.button`
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
`;

const ButtonStart = styled(Button)`
  background-color: #ff4500;
  :hover {
    background-color: #e03d00;
  }
`;

const ButtonReset = styled(Button)`
  background-color: #999289;
  :hover {
    background-color: #827a71;
  }

  animation-name: ${colorChange};
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
`;

class TaskInput extends Component {
  render() {
    const {
      taskName,
      isStarted,
      onTypeTask,
      onStartTask,
      onReset
    } = this.props;

    return (
      <Wrapper>
        <Input
          disabled={isStarted}
          type="text"
          placeholder="Enter your task"
          value={taskName}
          onChange={onTypeTask}
        />

        {taskName && !isStarted ? (
          <ButtonStart onClick={onStartTask}>Start</ButtonStart>
        ) : null}

        {isStarted ? <ButtonReset onClick={onReset}>Reset</ButtonReset> : null}
      </Wrapper>
    );
  }
}

export default TaskInput;

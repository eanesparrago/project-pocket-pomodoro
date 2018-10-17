import React, { Component } from "react";
import styled from "styled-components";

import Header from "../header/header";
import TaskInput from "../task-input/task-input";
import Timer from "../timer/timer";
import Counter from "../counter/counter";

import notification from "../../audio/notification.mp3";

// styled
const Wrapper = styled.div`
  width: 20rem;
  height: 450px;
  padding: 2rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid white;
  border-radius: 1rem;
  margin-top: 5vw;

  @media (max-width: 500px) {
    width: fit-content;
    margin-top: 2rem;
    border: none;
  }
`;

const StyledFooter = styled.footer`
  margin-top: 2rem;
  text-align: center;
  line-height: 1.5;
`;
const StyledFooterLink = styled.a`
  text-decoration: none;
  color: #999289;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ##999289;
  }
`;

const audio = new Audio(notification);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: "",
      isStarted: false,
      isCounting: false,
      phase: 0
    };

    this.onTypeTask = this.onTypeTask.bind(this);
    this.onStartTask = this.onStartTask.bind(this);
    this.onDoneCounting = this.onDoneCounting.bind(this);
    this.onContinue = this.onContinue.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onTypeTask(e) {
    this.setState({ taskName: e.target.value });
  }

  onStartTask(e) {
    this.setState({ isStarted: true, isCounting: true }, () => {
      console.log(this.state.isStarted, this.state.taskName);
    });
  }

  onDoneCounting() {
    this.setState({ isCounting: false }, () => {
      console.log(this.state);
    });

    audio.play();
  }

  onContinue() {
    if (this.state.phase !== 7) {
      this.setState({ isCounting: true, phase: this.state.phase + 1 }, () => {
        console.log(this.state);
      });
    } else {
      this.setState({ isCounting: true, phase: 0 }, () => {
        console.log(this.state);
      });
    }
  }

  onReset() {
    this.setState({
      taskName: "",
      isStarted: false,
      phase: 0,
      isCounting: false
    });
  }

  render() {
    return (
      <Wrapper className="app">
        <Header />

        <TaskInput
          taskName={this.state.taskName}
          isStarted={this.state.isStarted}
          onTypeTask={this.onTypeTask}
          onStartTask={this.onStartTask}
          onReset={this.onReset}
        />

        {this.state.isStarted ? (
          <React.Fragment>
            <Counter phase={this.state.phase} />

            <Timer
              phase={this.state.phase}
              isCounting={this.state.isCounting}
              onDoneCounting={this.onDoneCounting}
              onContinue={this.onContinue}
            />
          </React.Fragment>
        ) : null}

        <StyledFooter>
          <StyledFooterLink
            href="https://github.com/LJEsp/project-pocket-pomodoro"
            target="_blank"
          >
            Made with &#9835; &mdash;&nbsp;LJEsp
          </StyledFooterLink>
        </StyledFooter>
      </Wrapper>
    );
  }
}

export default App;

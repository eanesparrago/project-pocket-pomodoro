import React, { Component } from "react";
import "./app.css";

import Header from "../header/header";
import TaskInput from "../task-input/task-input";
import Timer from "../timer/timer";
import Counter from "../counter/counter";

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
      <div className="app">
        <Header />

        <TaskInput
          taskName={this.state.taskName}
          isStarted={this.state.isStarted}
          onTypeTask={this.onTypeTask}
          onStartTask={this.onStartTask}
          onReset={this.onReset}
        />

        {this.state.isStarted ? (
          <section>
            <Counter phase={this.state.phase} />

            <Timer
              phase={this.state.phase}
              isCounting={this.state.isCounting}
              onDoneCounting={this.onDoneCounting}
              onContinue={this.onContinue}
            />
          </section>
        ) : null}
      </div>
    );
  }
}

export default App;

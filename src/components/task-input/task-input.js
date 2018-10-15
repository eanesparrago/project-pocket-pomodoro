import React, { Component } from "react";

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
      <div>
        <input
          disabled={isStarted}
          type="text"
          placeholder="Enter your task"
          value={taskName}
          onChange={onTypeTask}
        />

        {taskName && !isStarted ? (
          <button onClick={onStartTask}>Start</button>
        ) : null}

        {isStarted ? <button onClick={onReset}>Reset</button> : null}
      </div>
    );
  }
}

export default TaskInput;

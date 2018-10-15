import React, { Component } from "react";
import Countdown from "react-countdown-now";

class Timer extends Component {
  render() {
    const {
      phase,
      isCounting,
      onDoneCounting,
      onContinue
    } = this.props;

    let statusText;
    let timerCount;
    let nextStatusText;

    switch (phase) {
      case 0:
      case 2:
      case 4:
        statusText = "Work";
        nextStatusText = "Take a short break";
        timerCount = 5000; // 1500000
        break;

      case 6:
        statusText = "Work";
        nextStatusText = "Take a long break";
        timerCount = 5000; // 1500000
        break;

      case 1:
      case 3:
      case 5:
        statusText = "Short Break";
        nextStatusText = "Back to work";
        timerCount = 3000; // 300000
        break;

      case 7:
        statusText = "Long Break";
        nextStatusText = "Repeat!";
        timerCount = 10000; // 900000
        break;

      default:
        statusText = "Unknown";
        timerCount = 900000;
    }

    const renderer = ({ minutes, seconds, completed }) => {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    };

    return (
      <div>
        <div>
          {isCounting ? (
            <Countdown
              date={Date.now() + timerCount}
              renderer={renderer}
              onComplete={onDoneCounting}
            />
          ) : null}

          <span>{statusText}</span>

          {isCounting ? null : (
            <button onClick={onContinue}>{nextStatusText}</button>
          )}
        </div>
      </div>
    );
  }
}

export default Timer;

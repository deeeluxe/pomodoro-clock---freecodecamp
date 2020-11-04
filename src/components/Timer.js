import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
      isStartStopToggleOn: true
    };

    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    if (this.state.isStartStopToggleOn === true) {
      let intervalId = setInterval(this.decreaseTimer, 1000);
      this.props.buttonBlockOnPlay(true);

      this.setState({
        intervalId: intervalId,
      });
    } else {
      clearInterval(this.state.intervalId);
      this.props.buttonBlockOnPlay(false);
    }
    this.setState((prevState) => ({
      isStartStopToggleOn: !prevState.isStartStopToggleOn,
    }));
  }

  decreaseTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          this.audio.play();
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });
            this.props.onSessionToBreakSwitch(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });
            this.props.onSessionToBreakSwitch(this.state.isSession);
          }
        } else {
          this.props.decreaseTimerMinute();
          this.setState({ timerSecond: 59 });
        }
        break;
      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1,
          };
        });
        break;
    }
  }

  reset() {
    clearInterval(this.state.intervalId);
    this.audio.pause();
    this.audio.currentTime = 0;
    this.props.reset();
    this.props.buttonBlockOnPlay(false);

    this.setState({
      timerSecond: 0,
      isSession: true,
      isStartStopToggleOn: true,
    });
  }

  render() {
    return (
      <section>
        <section className="timer-container">
          <h4 id="timer-label">
            {this.state.isSession === true ? "Session" : "Break"}
          </h4>
          <p id="time-left">
            {this.props.timerMinute < 10
              ? "0" + this.props.timerMinute
              : this.props.timerMinute}
            :
            {this.state.timerSecond < 10
              ? "0" + this.state.timerSecond
              : this.state.timerSecond}
          </p>
        </section>
        <section className="timer-actions">
          <button onClick={this.handleClick} id="start_stop">
            {this.state.isStartStopToggleOn ? "Start" : "Stop"}
          </button>
          <button onClick={this.reset} id="reset">
            Reset
          </button>
        </section>
        <audio id="beep" src='https://www.fesliyanstudios.com/soundeffects-download.php?id=4434' ref={(audio) => { this.audio = audio }}></audio>
      </section>
    );
  }
}
export default Timer;

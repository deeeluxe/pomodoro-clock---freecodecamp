import React from "react";
import "../App.css";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isplay: false
    };
     
    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
    this.onIncreaseSession = this.onIncreaseSession.bind(this);
    this.onDecreaseSession = this.onDecreaseSession.bind(this);
    this.onDecreaseTimerMinute = this.onDecreaseTimerMinute.bind(this);
    this.onSessionToBreakSwitch = this.onSessionToBreakSwitch.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onButtonBlockOnPlay = this.onButtonBlockOnPlay.bind(this);
  }

  onIncreaseBreak() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1,
      };
    });
  }

  onDecreaseBreak() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1,
      };
    });
  }

  onIncreaseSession() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1,
      };
    });
  }

  onDecreaseSession() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1,
      };
    });
  }

  onReset() {
    this.setState({
      timerMinute: 25,
      sessionLength: 25,
      breakLength: 5
    });
  }

  onDecreaseTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1,
      };
    });
  }

  onSessionToBreakSwitch(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength,
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength,
      });
    }
  }

  onButtonBlockOnPlay(value) {
    this.setState({
      isPlay: value
    });
  }

  render() {
    return (
      <div className="App">
        <main>
          <h2>Pomodoro Clock Test Linus</h2>
          <section className="breakAndSessionInApp">
            <Break
              isPlay={this.state.isPlay}
              breakLength={this.state.breakLength}
              increaseBreak={this.onIncreaseBreak}
              decreaseBreak={this.onDecreaseBreak}
            />
            <Session
              isPlay={this.state.isPlay}
              sessionLength={this.state.sessionLength}
              increaseSession={this.onIncreaseSession}
              decreaseSession={this.onDecreaseSession}
            />
          </section>
          <Timer
            timerMinute={this.state.timerMinute}
            reset={this.onReset}
            breakLength={this.state.breakLength}
            decreaseTimerMinute={this.onDecreaseTimerMinute}
            onSessionToBreakSwitch={this.onSessionToBreakSwitch}
            buttonBlockOnPlay={this.onButtonBlockOnPlay}
          />
        </main>
      </div>
    );
  }
}

export default App;

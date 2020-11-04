import React from "react";

function Session(props) {
  function increaseSession() {
    if (props.sessionLength === 60) {
      return;
    }
    props.increaseSession();
  }

  function decreaseSession() {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  }

  return (
    <section>
      <h4 id="session-label">Session Length</h4>
      <section className="breakAndSessionContainer">
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={increaseSession}
          id="session-increment"
        >
          Up
        </button>
        <p id="session-length">{props.sessionLength}</p>
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={decreaseSession}
          id="session-decrement"
        >
          Down
        </button>
      </section>
    </section>
  );
}

export default Session;

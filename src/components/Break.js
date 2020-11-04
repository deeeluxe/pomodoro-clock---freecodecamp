import React from "react";

function Break(props) {
  function increaseBreak() {
    if (props.breakLength === 60) {
      return;
    }
    props.increaseBreak();
  }

  function decreaseBreak() {
    if (props.breakLength === 1) {
      return;
    }
    props.decreaseBreak();
  }

  return (
    <section>
      <h4 id="break-label">Break Length</h4>
      <section className="breakAndSessionContainer">
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={increaseBreak}
          id="break-increment"
        >
          Up
        </button>
        <p id="break-length">{props.breakLength}</p>
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={decreaseBreak}
          id="break-decrement"
        >
          Down
        </button>
      </section>
    </section>
  );
}

export default Break;

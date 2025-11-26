import React from "react";

function ChildComponent2({ onSelectedOption }) {
  return (
    <div>
      <h1>Child Component 2</h1>

      <button
        onClick={() => {
          onSelectedOption("Option 2");
        }}
      >
        Option 2
      </button>
    </div>
  );
}

export default ChildComponent2;

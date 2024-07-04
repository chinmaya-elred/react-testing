import React from "react";

function PropsFunctionTesting({ testFunction }) {
  return (
    <div>
      <h1>Functional Props Testing and Mocking</h1>
      <button onClick={testFunction}>Click</button>
    </div>
  );
}

export default PropsFunctionTesting;

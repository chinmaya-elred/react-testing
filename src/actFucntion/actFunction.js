import React, { useState } from "react";

function ActFunction() {
    const [name, setName] = useState("");
  return (
    <div>
      <h1>onChange Event Testing</h1>
      <h2>{name}</h2>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name"
      />
    </div>
  );
}

export default ActFunction;

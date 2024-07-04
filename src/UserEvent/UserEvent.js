import React, { useState } from "react";

function UserEvent() {
  const [data, setData] = useState("");
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => setData("hello")}>Click me</button>
    </div>
  );
}

export default UserEvent;

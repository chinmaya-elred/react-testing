import React, { useState } from "react";
import Logo from "./assets/images/image.png";
import "./App.css";
import Users from "./Users/user";

function App() {
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");

  const updateData = () => {
    setData1("updated data");
  };
  return (
    <div className="App">
      <p>My first React Testing APP</p>
      <p>Chinmaya Jagadev</p>
      {/* <input
        type="text"
        name="username"
        placeholder="Enter your username"
        id="userId"
        value='chinmaya'
        readOnly
      /> */}
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        id="userId"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <br />
      <button onClick={updateData}>Update data</button>
      <p>{data1}</p>
      <br /> <br /> <br /> <br /> <br />
      <img
        src={Logo}
        title="AI generated image"
        alt="error"
        height={450}
        width={900}
      />
      <Users />
    </div>
  );
}

export default App;

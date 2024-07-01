import React from "react";
import Logo from "./assets/images/image.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>My first React Testing APP</p>
      <p>Chinmaya Jagadev</p>
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        id="userId"
        value="chinmaya"
        readOnly
      />
      <br /> <br /> <br /> <br /> <br />
      <img
        src={Logo}
        title="AI generated image"
        alt="error"
        height={450}
        width={900}
      />
    </div>
  );
}

export default App;

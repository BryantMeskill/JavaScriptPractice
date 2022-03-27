import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Dane" />
      <Welcome name="Bartholomew" />
      <Welcome name="Bryant" />
    </div>
  );
}

export default App;

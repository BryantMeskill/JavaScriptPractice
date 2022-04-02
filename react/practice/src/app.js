import React from "react";
import MyComponent from "./MyComponent";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("The button has been clicked!");
  }

  render() {
    return (
      <div>
        <MyComponent title="react" onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}

export default App;

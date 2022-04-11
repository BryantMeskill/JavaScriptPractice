import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });

    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  //called right before the render method
  static getDerivedStateFromProps(props, state) {}

  //called after first render
  componentDidMount() {
    console.log("Component Did Mount");
    console.log("--------");
  }

  //let react know if render should be triggered
  shouldComponentUpdate(nextProps, nextState) {
    //if nextProps.ignoreProp exists and this.props.ignoreProp doesn't equal
    //nextProps.ignoreProp, don't re-render the component.
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("Not render");
      return false;
    }
    console.log("render");
    return true;
  }

  //called after each update
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("--------");
  }
  //called when component is taken out of DOM
  componentWillUnmount() {
    console.log("Component Did Unmount");
    console.log("--------");
  }

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default Counter;

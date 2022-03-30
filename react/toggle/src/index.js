//RENAME ME TO "index.js" AND UNCOMMENT CODE BELOW TO MAKE ME WORK!

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

//     //this binding is necessary to make 'this' work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     //modify the state, this will automatically re-call render
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="title">Press below to turn the light on or off.</h1>
//         <button className="toggle-button" onClick={this.handleClick}>
//           {this.state.isToggleOn ? "ON" : "OFF"}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Toggle />, document.getElementById("root"));

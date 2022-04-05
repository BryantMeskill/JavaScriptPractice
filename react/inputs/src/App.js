import React from "react";
//gives each task a unique id for mapping in Overview.js
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: { text: "", id: uniqid() },
      tasks: [],
    };

    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    //prevents refresh, which is default behavior
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: uniqid() },
    });
  };

  render() {
    //destructuring
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          ></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;

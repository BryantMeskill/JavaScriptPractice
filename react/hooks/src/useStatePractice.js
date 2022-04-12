//useState is your hook
import React, { useState } from "react";
//If you want to use this file, rename it to 'app.js'
const App = () => {
  //count is your actual state value
  //setCount is used for updating said value
  //useState is used to initialize the state of count to what's in parentheses
  //so the state of count is set to zero in this case
  const [count, setCount] = useState(0);

  //function that increments count by 1
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      {/* button that calls the above function to increment count
      each time the button is clicked. */}
      <button onClick={incrementCount}>IncrementCount</button>
    </div>
  );
};

export default App;

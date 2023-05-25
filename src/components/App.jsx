import React from "react";
import Login from "./Login";
import Input from "./Input";

  var userIsRegistered = false;


function App() {
  return (
    <div className="container">
      <Login condition = {userIsRegistered} />
    </div>
  );
}

export default App;

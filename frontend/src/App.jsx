import React from "react";
import Left from "./home/left/left";
import Right from "./home/right/right";
import Logout from "./home/left1/Logout";
function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Logout></Logout>
      <Left></Left>
      <Right></Right>
    </div>
  );
}

export default App;

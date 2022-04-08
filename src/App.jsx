import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log(state);

    setTimeout(() => {
      setState(!state);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello world</header>
    </div>
  );
}

export default App;

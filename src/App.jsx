import React from "react";
import Header from "../components/header";
import Meme from "../components/meme";

function App() {
  return (
    <>
      {/* Calling previous files, so it can be displayed */}
      <div>
        <Header />
        <Meme />
      </div>
    </>
  );
}

export default App;

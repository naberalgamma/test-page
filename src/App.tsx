import React from "react";
import "./App.css";
import Buttons from "./Components/Buttons/Buttons";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;

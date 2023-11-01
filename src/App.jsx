import React, { Component } from "react";
import "./App.css"
import Header from "./UI/Header";
import Main from './UI/Main';
import Footer from "./UI/Footer";

class App extends Component {
  render() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
}

export default App;

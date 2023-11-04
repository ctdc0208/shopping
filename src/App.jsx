import React, { Component } from "react";
import "./App.css"
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import { Outlet } from "react-router-dom";

class App extends Component {
  render() {
  return (
    <div className="app">
      <Header />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
}

export default App;

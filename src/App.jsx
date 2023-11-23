import React, { Component, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./App.css"
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import { Outlet } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
class App extends Component {
  render() {
  return (
    <>
    <ScrollToTop/>
      <div className="app">
        <Header />
        <div id="detail">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
}

export default App;

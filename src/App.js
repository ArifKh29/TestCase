import logo from "./logo.svg";
import "./App.css";
import Top from "./components/top";
import Home from "./containers/home";
import React, { Component } from "react";
import { render } from "@testing-library/react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Top />
        <Home />
      </div>
    );
  }
}

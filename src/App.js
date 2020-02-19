import React, { Component } from "react";
import Main from "./Component/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

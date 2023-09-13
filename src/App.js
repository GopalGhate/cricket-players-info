import React from "react";
import "./App.css";
import { Cards } from "./Cards";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route exact path={"/info"} element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
export class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "lightblue" }}>
        <header
          style={{ alignItems: "center", background: "#40674c", padding: 25, marginBottom : 30 }}
        >
          <h1 style={{ color: "lightgray" }}> Cricket players </h1>
        </header>
        <Cards></Cards>
      </div>
    );
  }
}

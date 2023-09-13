import React, { Component } from "react";
import { CardDetails } from "./Components/card";
import "./Cards.css";
import { Players } from "./players";

/*
  Parent Component.
  Renders child cards with the available data
  from JSON file
*/
export class Cards extends Component {
  render() {
    return (
      <div className="Card-flex">
        <CardDetails cards={Players} />
      </div>
    );
  }
}

import React from "react";
import { Button, Card } from "react-bootstrap";
import "../Cards.css";
import { getPlayerInformation } from "../utils.js";

export const CardDetails = (props) => {
  const { cards } = props;
  return cards.map((item, index) => {
    return (
      <div key={index} className="Card">
        <Card className="Card-width">
          <Card.Body className="Card-body">
            <Card.Img
              variant="top"
              src={item?.image}
              height={200}
              width={200}
            />
            <Card.Title>
              <p className="Card-title"> {item.name}</p>
            </Card.Title>
            <Button
              variant="primary"
              onClick={() => getPlayerInformation(item.name)}
            >
              Get more info
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });
};

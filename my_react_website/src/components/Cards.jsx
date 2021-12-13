/** @format */

import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Wedding Details</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Ceremony and Reception Info and Itenarary"
              label="Location"
              path="https://www.arkansas.com/paris/events/cameron-bluff-walk-2"
            />
            <CardItem
              src="images/img-1.jpg"
              text="Pictures"
              label="Pictures"
              path="/"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Registries"
              label="Registries"
              path="/"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src="images/img-8.jpg"
              text="Can't Make it to Arkanasas? Watch the Ceremoney Livestream!"
              label="Livestream"
              path="/"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Don't see what you're looking for? Contact Us."
              label="Contact"
              path="/contact"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Répondez S'il Vous Plaît"
              label="RSVP"
              path="/RSVP"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;

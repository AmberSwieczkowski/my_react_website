/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <section className="footer__alerts">
        <p className="footer__alerts__heading">Join the Adventure</p>
        <p className="footer__alerts__text">
          Click here to recieve alert updates. You can unsubscribe at any time.
        </p>
        <div className="input__areas">
          <form>
            <input
              type="number"
              name="number"
              placeholder="Your Number"
              className="footer__input"
            />
            <Button buttonStyle="btn__outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer__links">
        <div className="footer__link__wrapper">
          <div className="footer__link__items">
            <Link to="/">Home</Link>
            <Link to="/location">Location</Link>
            <Link to="/rsvp">RSVP</Link>
            <Link to="/">Registries</Link>
            <Link to="/pictures">Pictures</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <section className="social__media">
        <div className="social__media__wrap">
          <div className="footer__logo">
            <Link to="/" className="social__logo">
              AMBER&MARCIN
              <i className="far fa-heart"></i>
            </Link>
          </div>
          <small className="website__rights">AMBER&MARCIN © 2022</small>
          <div className="social__icons">
            <Link
              class="social__icon__link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social__icon__link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social__icon__link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social__icon__link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social__icon__link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

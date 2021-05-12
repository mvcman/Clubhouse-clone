import React from "react";
import style from "../style/Welcome.module.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1 className={style.WelcomeMessage}>Welcome page!</h1>
      <div className={style.WelcomeInfo}>
        <p>
          We'are working hard to get the clubhouse ready for you. Waiting to up
          the finishing touches, we're adding people to clubhouse and nothing
          breaks.
        </p>
        <p>
          We'are working hard to get the clubhouse ready for you. Waiting to up
          the finishing touches, we're adding people to clubhouse and nothing
          breaks.
        </p>
        <p>Pop luci, demand and supply</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/get_username"
          className="primaryBtn d-flex align-items-center mb-3"
        >
          Get your Username {""}
          {/* <img src="" alt="" /> */}
        </Link>
        <Link to="/invite">Have an invite text? Sign In</Link>
      </div>
    </div>
  );
}

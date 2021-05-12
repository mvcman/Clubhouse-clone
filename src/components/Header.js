import { Link } from "react-router-dom";
import style from "../style/Header.module.css";

export default function Header() {
  return (
    <div className={style.Header}>
      <Link exact to="/explore">
        <img src="" alt="" />
        Demo
      </Link>
      <div className={style.nav_items}>
        <Link exact to="/friends_invite">
          <img src="" alt="" />
          Demo
        </Link>
        <Link exact to="/upcoming">
          <img src="" alt="" />
          Demo
        </Link>
        <Link exact to="/activity">
          <img src="" alt="" />
          Demo
        </Link>
        <Link exact to="/profile">
          <img src="" alt="" />
          Demo
        </Link>
      </div>
    </div>
  );
}

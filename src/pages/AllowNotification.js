import style from "../style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";

export default function AllowNotification() {
  return (
    <div className={style.phoneConfirmation}>
      <div className="text-center">
        <h2 className="mb-4">OTO is confirmed</h2>
        <h3 className="mb-3">Last important step</h3>
        <p>Enable notification to know when people are talking</p>
        <div className={style.notificationContainer}>
          <div>
            <h3>"Clubhouse Would Like To Send You The Notifications"</h3>
            <p>
              Notifications may includes alert, sound and Icons so please be
              careful.
            </p>
            <div className={style.action_btn}>
              <Link exact to="/home">
                Don't allow
              </Link>
              <Link exact to="/home">
                Allow
              </Link>
              <img
                src="https://thumbs.dreamstime.com/z/one-finger-20482985.jpg"
                alt=""
                className={style.hand_icon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

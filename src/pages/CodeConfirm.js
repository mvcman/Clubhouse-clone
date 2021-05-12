import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../style/PhoneConfirmation.module.css";

export default function CodeConfirm() {
  const [otp, setOtp] = useState("");
  return (
    <div className={style.phoneConfirmation}>
      <Link exact to="/invite" className={style.backBtn}>
        <img
          src="https://www.vhv.rs/dpng/d/589-5895655_apple-back-button-icon-hd-png-download.png"
          alt=""
        />
      </Link>
      <div className="text-center">
        <h2 style={{ width: "100%", maxWidth: "300px", marginBottom: "1em" }}>
          Enter the code we just texted you
        </h2>
        <input
          type="text"
          placeholder="Enter the OTP here"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{
            width: "100%",
            border: "none",
            textAlign: "center",
            outline: "none",
          }}
        />
        <p className="mt-2">
          Did not receive it? <span>Tap to resend.</span>
        </p>
      </div>
      <Link
        exact
        to="/allow_notification"
        className="primaryBtn d-flex align-items-center"
      >
        Next{" "}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWLM1jJ04k2mzc-OXu7BayY3eDnLxoZoNsA&usqp=CAU"
          alt=""
          className="ml-1"
          style={{ width: 25, marginLeft: 10 }}
        />
      </Link>
    </div>
  );
}

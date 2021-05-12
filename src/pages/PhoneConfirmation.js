import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../style/PhoneConfirmation.module.css";
import PhoneInput from "react-phone-number-input";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmation}>
      <Link exact to="/" className={style.backBtn}>
        <img
          src="https://www.vhv.rs/dpng/d/589-5895655_apple-back-button-icon-hd-png-download.png"
          alt=""
        />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={(e) => {
          console.log(e);
          setValue(e);
        }}
      />
      <p>
        By entering your number you are aggreeing to our{" "}
        <span>terms of service and privacy policies</span> Thanks!
      </p>
      <Link
        exact
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next <img src="" alt="" className="ml-1" />
      </Link>
    </div>
  );
}

import React from "react";
import style from "./style.module.css";
import { getVerifyState } from "../../store/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const isVerify = useSelector(getVerifyState);
  console.log("isVerify :", isVerify);
  return (
    <div className={style.container}>
      {!isVerify && (
        <Link to="/api/user/login" className={style.Link}>
          login
        </Link>
      )}
      {!isVerify && (
        <Link to="/api/user/register" className={style.Link}>
          Register
        </Link>
      )}
      {isVerify && (
        <Link to="/api/contacts" className={style.Link}>
          Contacts list
        </Link>
      )}
    </div>
  );
};

export default NavBar;

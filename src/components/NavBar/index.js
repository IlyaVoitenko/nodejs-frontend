import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.container}>
      <Link to="/" className={style.Link}>
        login
      </Link>
      <Link to="/register" className={style.Link}>
        Register
      </Link>
    </div>
  );
};

export default NavBar;

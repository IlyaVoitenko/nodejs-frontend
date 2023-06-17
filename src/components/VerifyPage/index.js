import React, { useEffect } from "react";
import style from "./style.module.css";
import NavBar from "../NavBar";
import { verifyUserLoad } from "../api/user";
import { useParams } from "react-router-dom";

const VerifyPage = () => {
  const { verificationCode } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await verifyUserLoad(verificationCode);
    };
    fetchData();
  }, [verificationCode]);
  return (
    <>
      <NavBar />
      <div className={style.container}>
        <div className={style.cc}>
          <span className={style.divVerify}> &#128504;</span>
          <span className={style.textVerify}>
            Verify successfully &nbsp;
          </span>{" "}
        </div>
      </div>
    </>
  );
};

export default VerifyPage;

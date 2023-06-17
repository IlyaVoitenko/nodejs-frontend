import React from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import NavBar from "../NavBar";
import { loginUser } from "../thunk/user";
import { useForm } from "react-hook-form";
import { regexForm } from "../regexForm";
import { initialState } from "./initialState";

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch(loginUser(data));
    return reset();
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ initialState, mode: "onSubmit" });

  return (
    <div>
      <NavBar />
      <form className={style.containerForm} onSubmit={handleSubmit(onSubmit)}>
        <p>Login user</p>
        <input
          name="email"
          placeholder=" email"
          {...register("email", {
            required: "email is required",
            pattern: regexForm.emailRegex,
          })}
        />
        {errors?.email && <p>{errors?.email?.message || "Erorr"} </p>}
        <input
          name="password"
          placeholder=" password"
          {...register("password", {
            required: "password is required",
          })}
        />
        {errors?.password && <p>{errors?.password?.message || "Erorr"} </p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

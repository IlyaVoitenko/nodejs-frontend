import React from "react";
import NavBar from "../NavBar";
import style from "./style.module.css";
import { regexForm } from "../regexForm";
import { useForm } from "react-hook-form";
import { initialState } from "./installState";
import { register } from "../api/auth";

const Register = () => {
  const onSubmit = async (data) => {
    const result = await register(data);
    console.log(result);
    reset();
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
        <p>Register user</p>
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

export default Register;

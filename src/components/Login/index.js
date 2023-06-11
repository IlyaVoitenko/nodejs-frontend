import React from "react";
import { useForm } from "react-hook-form";
import { regexForm } from "../ContactForm/helpers";

const Login = () => {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm({ initialState, mode: "onSubmit" });

  return (
    <form className={style.containerForm} onSubmit={handleSubmit}>
      <input
        name="email"
        {...register("email", {
          required: true,
          pattern: regexForm.emailRegex,
        })}
      />
      <input
        name="password"
        {...register("password", {
          required: true,
        })}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;

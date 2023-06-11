import { regexForm } from "../helpers";
import style from "./style.module.css";
import initialState from "../initialState";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("favorite", isFavorite);
    for (const [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }

    reset();
  };
  const [isFavorite, setIsFavorite] = useState(false);
  const { nameRegex, emailRegex, phoneRegex } = regexForm;
  const {
    register,
    formState: { errors },
    reset,
  } = useForm({ initialState, mode: "onSubmit" });
  const { name, email, phone } = errors;

  return (
    <form
      className={style.containerForm}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <input
        className={name && "errorField"}
        {...register("name", {
          required: true,
          minLength: 2,
          maxLength: 10,
          pattern: nameRegex,
        })}
        placeholder="name"
        name="name"
      />
      <input
        className={email && "errorField"}
        {...register("email", { pattern: emailRegex })}
        placeholder="Email"
        name="email"
      />
      <input
        className={phone && "errorField"}
        {...register("phone", {
          required: true,
          pattern: phoneRegex,
        })}
        placeholder="phone"
        name="phone"
      />
      <input
        {...register("avatarUser")}
        onChange={(e) => setIsFavorite(e)}
        type="file"
        name="avatarUser"
      />
      <label htmlFor="favorite">
        Favorite
        <input
          {...register("favorite")}
          onChange={() => setIsFavorite(!isFavorite)}
          checked={isFavorite}
          type="checkbox"
          name="favorite"
          id="favorite"
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

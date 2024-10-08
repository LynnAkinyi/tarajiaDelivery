// src/App.js
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); // Hook for navigation

  const onSubmit = (data) => {
    console.log(data);
    alert("Login successful!");
    navigate("/home"); // Redirect to the home page
  };

  return (
    <>
      <p className="title"> Registration Form </p>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name")}
          placeholder="Enter your name"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Enter your email"
        />{" "}
        {errors.email && (
          <span style={{ color: "red" }}>* Email is mandatory </span>
        )}{" "}
        <input
          type="password"
          {...register("password")}
          placeholder="Enter your password"
        />
        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />{" "}
      </form>{" "}
    </>
  );
}

export default App;

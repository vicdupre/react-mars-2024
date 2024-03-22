import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(2, "Name is too short"),
  email: Yup.string().email("Email incorrect").required("Email is required"),
  password: Yup.string()

    .required("Password is required")
    .min(6, "Password is too short"),
  role: Yup.string().required("Role is required"),
});

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onBlur",
  });

  const handleSubmitAndSubmitToCrudCrud = async (values: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => {
    console.log("values", values);

    const response = await fetch(
      "https://crudcrud.com/api/45632563e08444ada4c86bbd071f705e/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    if (response.ok) {
      alert("User created successfully");
      const data = await response.json();
      console.log("data", data);
    } else {
      alert("An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitAndSubmitToCrudCrud)}>
      <div>
        <label>Name</label>
        <input {...register("name")} />
        {errors.name && <p>{errors.name?.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <p>{errors.email?.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
      </div>
      {errors.email && <p>{errors.email?.message}</p>}
      <div>
        <label>Role</label>
        <input type="text" {...register("role")} />
      </div>
      {errors.role && <p>{errors.role?.message}</p>}
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;

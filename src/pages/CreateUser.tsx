import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    ""
  });

  const handleSubmitAndSubmitToCrudCrud = async (values) => {
    console.log(values);

    /*  const response = await fetch(
      "https://crudcrud.com/api/your-unique-identifier/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      }
    ); */
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitAndSubmitToCrudCrud)}>
      <div>
        <label>Name</label>
        <input {...(register("name"), { required: true, type: "text" })} />
        {errors.name && <p>Name is required</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...(register("email"), { required: true, type: "email" })} />
        {errors.email && <p>{errors.email.message.toString()}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...(register("password"), { required: true, minLength: 6 })}
        />
      </div>
      <div>
        <label>Role</label>
        <input
          type="text"
          {...(register("role"), { required: true, type: "text" })}
        />
      </div>
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;

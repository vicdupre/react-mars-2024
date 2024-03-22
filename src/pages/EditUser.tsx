import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface User {
  _id: string;
  name: string;
  email: string;
  password: never;
  role: string;
}
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(2, "Name is too short"),
  email: Yup.string().email("Email incorrect").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short")
    .max(40, "Password is too long"),
  role: Yup.string().required("Role is required"),
});

const EditUser = () => {
  const navigate = useNavigate();
  const user = useLoaderData() as User;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: User) => {
    console.log("data", data);
    const response = await fetch(
      `https://crudcrud.com/api/45632563e08444ada4c86bbd071f705e/users/${user._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          role: data.role,
        }),
      }
    );
    if (response.ok) {
      navigate("/users");
    } else {
      alert("An error occurred");
    }
  };
  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <input {...(register("password"), { type: "password" })} />
          {errors.password && <p>{errors.password?.message}</p>}
        </div>
        <div>
          <label>Role</label>
          <input {...register("role")} />
          {errors.role && <p>{errors.role?.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditUser;

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../lib/firebase";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log("credentials", credentials);
  };

  return (
    <>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input {...register("email")} />
        <label htmlFor="password">Password</label>
        <input {...register("password")} />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;

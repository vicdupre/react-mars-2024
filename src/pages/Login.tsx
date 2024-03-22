import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../lib/firebase";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const credentials = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log("credentials", credentials);
  };

  const onGithubSignIn = async () => {
    const provider = new GithubAuthProvider();
    const credentials = await signInWithPopup(auth, provider);
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
      <button onClick={onGithubSignIn}>Sign In with Github</button>
    </>
  );
};

export default Login;

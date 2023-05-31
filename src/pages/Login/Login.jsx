/* eslint-disable no-unused-vars */
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { createUserWithGoogle, signIn, createUserWithGithub } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  console.log("Login page", location?.state?.from?.pathname);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    signIn(email, password)
      .then((currentUser) => {
        const user = currentUser?.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleCreateUserWithGoogle = (event) => {
    event.preventDefault();
    createUserWithGoogle()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error?.message;
        const email = error?.customData?.email;
        const credential = GoogleAuthProvider?.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const handleCreateUserWithGithub = (event) => {
    event.preventDefault();
    createUserWithGithub()
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error?.message;
        const email = error?.customData?.email;
        const credential = GithubAuthProvider?.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="bg-gray-100 md:w-4/12 md:px-8 pt-10 mx-auto my-10"
      >
        <h2 className="text-2xl font-bold px-5 mb-5">Login</h2>
        <p className="text-lg text-red-400 text-center">{error}</p>
        <div className="w-full  px-5">
          <input
            className="px-3 py-2  border-b-2 border-black w-full"
            type="text"
            name="email"
            placeholder=" Email"
            required
          />
        </div>
        <br />
        <div className="w-full  px-5">
          <input
            className="px-3 py-2  border-b-2 border-black mt-2 w-full"
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
          />
        </div>
        <div className="px-5 mt-5">
          <input
            className=""
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label htmlFor="vehicle1"> Accept all tram and condition</label>
        </div>
        <div className="px-5">
          <button className="px-4 py-3 bg-blue-400 text-white font-bold uppercase shadow-lg w-full mt-5">
            Login
          </button>
        </div>
        <p className="mt-5 px-5">
          Create an account?
          <span className="text-yellow-600">
            <Link to={`/register`}>Register</Link>
          </span>
        </p>
      </form>
      <div className="bg-gray-100 md:w-4/12 md:px-8 pt-5 pb-8 mx-auto -mt-10">
        <p className="px-5 text-center mt-3">
          -------------------OR-----------------------
        </p>
        <div className="px-5">
          <button
            onClick={handleCreateUserWithGoogle}
            className="flex items-center justify-center px-4 py-3 bg-blue-400 shadow-lg uppercase font-bold text-white gap-3 border-2 border-gray-400  w-full mt-5"
          >
            <span className="text-center">
              <FaGoogle></FaGoogle>
            </span>
            Google
          </button>

          <button
            onClick={handleCreateUserWithGithub}
            className="flex items-center justify-center px-4 py-3 font-bold shadow-md bg-gray-200 gap-3  w-full mt-5"
          >
            <span className="text-center">
              <FaGithub></FaGithub>
            </span>
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

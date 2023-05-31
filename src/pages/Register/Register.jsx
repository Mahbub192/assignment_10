import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");

  const { auth, createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const from = "/";

  const handelSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.profile.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    setError("");
    if (name == null || photo == null || email == null || password == null) {
      setError("Cannot submit empty email and password fields");
    }
    if (confirmPassword !== password) {
      setError("Password are not same");
      return;
    }
    if (password < 6) {
      setError("The password is less than 6 characters");
      return;
    }

    createUser(email, password)
      .then((signUser) => {
        const user = signUser.user;
        console.log(name, email, password, photo);
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });
        navigate(from);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div>
      <form
        onSubmit={handelSignIn}
        className="bg-gray-100 md:w-4/12 md:px-8 py-10 mx-auto my-10"
      >
        <h2 className="text-2xl font-bold px-5 mb-5">Register</h2>
        <p className="text-lg text-red-400 text-center">{error}</p>
        <div className="w-full  px-5">
          <input
            className="px-3 py-2  border-b-2 border-black w-full"
            type="text"
            name="name"
            placeholder=" Name"
            required
          />
        </div>
        <div className="w-full  px-5 mt-5">
          <input
            className="px-3 py-2  border-b-2 border-black w-full"
            type="email"
            name="email"
            placeholder=" Email"
            required
          />
        </div>
        <div className="w-full  px-5 mt-5">
          <input
            className="px-3 py-2  border-b-2 border-black w-full"
            type="text"
            name="profile"
            placeholder=" Profile Url"
            required
          />
        </div>
        <div className="w-full  px-5 mt-5">
          <input
            className="px-3 py-2  border-b-2 border-black mt-2 w-full"
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
          />
        </div>
        <div className="w-full  px-5 mt-5">
          <input
            className="px-3 py-2  border-b-2 border-black mt-2 w-full"
            type="password"
            name="confirmPassword"
            id=""
            placeholder="Confirm password"
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
            Register
          </button>
        </div>
        <p className="mt-5 px-5">
          Already have an account?
          <span className="text-yellow-600">
            <Link to={`/login`}>Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;

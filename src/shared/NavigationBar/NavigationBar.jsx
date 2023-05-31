import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { userProfile, logOut,loader } = useContext(AuthContext);

  if (loader) {
    return (
      <div className="h-[calc(100vh-50px)] container mx-auto text-center mt-72">
        <progress className="progress w-96"></progress>
        <p className=" text-4xl">
          Loading.........
        </p>
      </div>
    );
  }

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error?.message);
      });
  };
  return (
    <div>
      <div className="container mx-auto navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"} className="text-lg font-bold">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to={`/blog`} className="text-lg font-bold">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            {/* <p className="md:text-2xl md:pr-2 text-gray-600">
              <FaConciergeBell></FaConciergeBell>
            </p> */}
            <img className="w-14 " src="https://i.ibb.co/YfgDXS3/OE612O0.jpg" alt="" />
            <a className="btn btn-ghost normal-case md:text-xl -ml-5">Cooking Chef</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"} className="text-lg font-bold">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to={`/blog`} className="text-lg font-bold">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        {userProfile ? (
          <div className="flex gap-2 md:gap-5 navbar-end">
            <div className="avatar relative">
              <div className="w-14 rounded-full">
                <img src={userProfile?.photoURL} />
              </div>
              <div className="bg-black text-white bg-opacity-60 absolute top-0 md:font-bold opacity-0 hover:opacity-100">
                <p className="text-center py-2">{userProfile?.displayName}</p>
              </div>
            </div>
            <div className="">
              <button onClick={handleLogout} className="btn w-16 md:w-full">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to={`/login`} className="navbar-end">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;

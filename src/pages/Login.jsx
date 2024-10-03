/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInUser, signInWithGoogle } from "../firebase.js";
import Loader from "../components/Loader/Loader.jsx";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  // const handleButtonClick = () => {
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { email, password } = formData;
      console.log(email, password);
      const loggedInUser = await logInUser(email, password);
      console.log("logged in as:", loggedInUser);
    } catch (error) {
      console.error("Login failed:", error.message);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    navigate("/home");
  };

  function LoginText() {
    if (isLoading) {
      return <Loader />;
    } else {
      return "Log in";
      // return <Loader />;
    }
  }
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const user = await signInWithGoogle();
      console.log("logged in as:", user);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
    setIsLoading(false);
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello <span className="text-primaryColor">Welcome</span> Back 🙋
        </h3>
        <form className="py-4 md:py-0" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border-b bprder-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer dark:text-gray-800 dark:placeholder-gray-400"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border-b bprder-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer dark:text-gray-800 dark:placeholder-gray-400"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white  text-[18px] leading-[30px] rounded-lg px-4 py-3 flex items-center justify-center"
            >
              {LoginText()}
              {/* <Loader onClick={handleButtonClick}isLoading={isLoading} buttonText="Log in"/> */}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don't have an account ?{" "}
            <Link to="/register" className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
          <p className="border-t-2 mt-5 text-center border-primary pt-8 py-5 text-textColor">
            Continue With
          </p>
          <div className="pb-8">
            <button
              disabled={isLoading}
              onClick={handleGoogleLogin}
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 flex items-center justify-center "
            >
              {isLoading ? (
                <Loader />
              ) : (
                <span className="flex items-center justify-center gap-3">
                  <GoogleIcon /> <span className="font-bold">Google</span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;

export const GoogleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 80 80"
    >
      <path
        fill="#f78f8f"
        d="M7.134,21.949C13.741,9.941,26.294,2.5,40,2.5c9.285,0,18.177,3.438,25.099,9.693l-9.123,9.123 C51.582,17.562,45.927,15.5,40,15.5c-9.693,0-18.396,5.655-22.351,14.461L7.134,21.949z"
      ></path>
      <path
        fill="#c74343"
        d="M40,3c8.986,0,17.6,3.265,24.371,9.214l-8.425,8.425C51.514,16.996,45.889,15,40,15 c-9.68,0-18.392,5.526-22.543,14.187l-9.676-7.372C14.354,10.187,26.62,3,40,3 M40,2C25.492,2,12.892,10.135,6.49,22.088 l11.364,8.658C21.477,22.086,30.026,16,40,16c6.118,0,11.761,2.231,16,6l9.822-9.822C59.041,5.881,49.984,2,40,2L40,2z"
      ></path>
      <path
        fill="#f78f8f"
        d="M17.035,30.122C20.741,21.521,29.133,15.414,39,15.025v-12C25.241,3.391,13.355,11.264,7.291,22.698 L17.035,30.122z"
      ></path>
      <path
        fill="#ffeea3"
        d="M6.208,56.182C3.747,51.065,2.5,45.624,2.5,40c0-0.538,0.012-1.073,0.034-1.604 c0.231-5.47,1.618-10.699,4.124-15.552l10.589,8.068C16.087,33.807,15.5,36.862,15.5,40c0,2.902,0.521,5.769,1.55,8.529 L6.208,56.182z"
      ></path>
      <path
        fill="#ba9b48"
        d="M6.832,23.605l9.811,7.475C15.552,33.93,15,36.927,15,40c0,2.835,0.487,5.637,1.45,8.341 L6.407,55.43C4.145,50.538,3,45.353,3,40c0-0.526,0.011-1.059,0.033-1.583C3.253,33.22,4.53,28.243,6.832,23.605 M6.49,22.088 c-2.619,4.889-4.207,10.414-4.456,16.287C2.012,38.914,2,39.455,2,40c0,6.091,1.47,11.826,4.018,16.929l11.638-8.215 C16.6,46.01,16,43.078,16,40c0-3.281,0.662-6.406,1.854-9.254L6.49,22.088L6.49,22.088z"
      ></path>
      <path
        fill="#ffeea3"
        d="M16.801,49.317C15.643,46.437,15,43.294,15,40c0-3.51,0.729-6.848,2.035-9.878l-9.744-7.424 C4.553,27.86,3,33.748,3,40c0,5.877,1.376,11.431,3.815,16.366L16.801,49.317z"
      ></path>
      <path
        fill="#bae0bd"
        d="M40,77.5c-14.14,0-26.876-7.81-33.342-20.411l10.772-7.604C21.266,58.628,30.057,64.5,40,64.5 c5.452,0,10.594-1.752,14.898-5.071l9.991,8.563C57.997,74.128,49.181,77.5,40,77.5z"
      ></path>
      <path
        fill="#5e9c76"
        d="M17.215,50.249C21.251,59.252,30.061,65,40,65c5.427,0,10.554-1.702,14.879-4.929l9.247,7.926 C57.391,73.811,48.868,77,40,77c-13.807,0-26.257-7.547-32.697-19.754L17.215,50.249 M17.656,48.713L6.016,56.93 C12.246,69.409,25.104,78,40,78c9.898,0,18.884-3.816,25.646-10.018l-10.734-9.2C50.822,62.045,45.644,64,40,64 C29.823,64,21.146,57.655,17.656,48.713L17.656,48.713z"
      ></path>
      <path
        fill="#bae0bd"
        d="M55.696,59.453C51.405,62.92,45.946,65,40,65c-10.513,0-19.504-6.492-23.199-15.683l-9.986,7.049 C12.855,68.59,25.443,77,40,77c9.596,0,18.339-3.654,24.913-9.646L55.696,59.453z"
      ></path>
      <g>
        <path
          fill="#8bb7f0"
          d="M55.691,58.791c3.207-2.691,5.682-6.176,7.176-10.114c0.364-0.957,0.627-1.768,0.83-2.552 l0.161-0.625H40.5v-13h36.234c0.508,2.499,0.766,5.02,0.766,7.5c0,10.297-4.319,20.226-11.867,27.313L55.691,58.791z"
        ></path>
        <path
          fill="#4e7ab5"
          d="M76.323,33C76.773,35.334,77,37.684,77,40c0,10.011-4.139,19.669-11.384,26.639l-9.157-7.849 c3.056-2.69,5.421-6.102,6.877-9.936c0.371-0.977,0.64-1.805,0.846-2.605L64.504,45h-1.291H41V33H76.323 M77.14,32H40v14h23.213 c-0.221,0.855-0.503,1.684-0.813,2.5c-1.545,4.069-4.146,7.616-7.488,10.282l10.734,9.2C73.221,61.036,78,51.088,78,40 C78,37.254,77.694,34.581,77.14,32L77.14,32z"
        ></path>
      </g>
      <path
        fill="#8bb7f0"
        d="M64.496,40l-0.006,5c-1.179,5.798-4.357,10.87-8.793,14.453l9.218,7.901 C72.339,60.587,77,50.838,77,40H64.496z"
      ></path>
    </svg>
  );
};

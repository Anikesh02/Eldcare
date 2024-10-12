/* eslint-disable no-unused-vars */
import { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/elder-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { createUser, signUpWithGoogle } from "../firebase.js";
import { useUser } from "../UserContext.jsx";
import Loader from "../components/Loader/Loader";
import { GoogleIcon } from "./Login.jsx";
import GoogleSignUpModal from "../components/Modal/GoogleSignUpModal.jsx";

const Signup = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, updateUser } = useUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file);
  };

  function SignUpText() {
    if (isLoading) {
      return <Loader />;
    } else {
      return "Sign Up";
      // return <Loader />;
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { name, email, password, gender, role } = formData;
      const file = selectedFile;

      console.log(email, password);
      const loggedInUser = await createUser(
        name,
        email,
        password,
        file,
        gender,
        role
      );

      if (loggedInUser) {
        updateUser(loggedInUser);
        navigate("/home");
      } else {
        console.error("Login failed: Unable to create user");
      }
    } catch (error) {
      console.error("Error object 1:", error.message);
      alert("Error object:" + error.message);
      setIsLoading(false);

      if (error instanceof Error && error.message) {
        console.error("Login failed:", error.message);
      } else {
        console.error("Login failed: An unknown error occurred");
      }
    }
  };
  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIsLoading(false);
  };
  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box  */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* sign up form  */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer'
                  required
                />
              </div>

              <div className="col-span-2">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer'
                  required
                />
              </div>

              <div className="col-span-2">
                <input
                  type="password"
                  placeholder="Create Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer'
                  required
                />
              </div>

              <div className='col-span-2 flex items-start justify-between flex-col h-full'>
                <h6 className='text-headingColor text-[16px] inline-block font-bold leading-7'>Gender : </h6>
                <div>
                  <label className='pr-4 text-textColor text-sm'>
                    <input
                      defaultChecked={formData.gender === "male"}
                      type='radio'
                      onChange={handleInputChange}
                      name="gender"
                      value={"male"}
                      className='mr-3' />Male
                  </label>
                  <label className='pr-4 text-textColor text-sm '>
                    <input
                      type='radio'
                      defaultChecked={formData.gender === "female"}
                      name="gender"
                      onChange={handleInputChange}
                      value={"female"}
                      className='mr-3' />Female
                  </label>
                </div>
              </div>
              <div className="col-span-1">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  {" "}
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className='w-full relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer'
                    required
                  >
                    <option value="patient" selected>Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
              </div>


              <div className="col-span-1 flex items-end gap-3">
                {/* <figure className='w-full max-w-[58px] relative py-3 px-4 border border-solid peer border-gray-300 bg-gray-50 focus:bg-white focus:outline-none outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor/90 dark:bg-generalBackgroundColorDark/90 rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 cursor-pointer'>
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure> */}

                <div className="relative w-full  h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer justify-center"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  className='w-full relative py-3 px-4 border border-solid peer border-gray-300  focus:outline-none outline-none bg-primaryColor hover:bg-transparent hover:border-primaryColor text-[16px] leading-7 text-white hover:text-textColor placeholder:text-textColor/90  rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:shadow-lg dark:border-gray-600 active:scale-95 disabled:active:scale-100 '
                >
                  <SignUpText />
                </button>
              </div>

            </form>
            <div className="my-3 text-center">
              <span className="relative after:absolute after:top-1/2 after:left-[120%] after:w-[200px] after:h-[1px] after:bg-textColor before:absolute before:top-1/2 before:right-[120%] before:w-[200px] before:h-[1px] before:bg-textColor text-textColor">or</span>
            </div>
            <p className="my-5 text-textColor text-center">
              Already have an account ?{" "}
              <Link
                to="/login"
                className="text-primaryColor font-medium ml-1"
              >
                Login
              </Link>
            </p>
            <div className="pb-8">
              <button
                type="button"
                disabled={isLoading}
                onClick={openModal}
                className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 flex items-center justify-center "
              >
                {isLoading ? (
                  <Loader />
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    <GoogleIcon /> <span className="font-medium text-sm"> Continue With Google</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <GoogleSignUpModal
        isOpen={isModalOpen}
        onClose={closeModal}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </section>
  );
};

export default Signup;

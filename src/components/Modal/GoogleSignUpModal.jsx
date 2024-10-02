import { useNavigate } from "react-router-dom";
import { signUpWithGoogle } from "../../firebase";

/* eslint-disable react/prop-types */
const GoogleSignUpModal = ({ isOpen, onClose, setIsLoading }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleForm = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = e.target;
    const role = data.role.value;
    const gender = data.gender.value;
    try {
      const user = await signUpWithGoogle(gender, role);
      console.log("logged in as:", user);
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
    onclose();
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md mx-auto p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-headingColor">
            Please provide following details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>

        <form onSubmit={handleForm}>
          <div className="mb-5">
            <label className="text-headingColor font-bold text-[16px] leading-7">
              Are you a:
              <select
                name="role"
                className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none border rounded-md ml-5"
                required
              >
                <option value="doctor">Doctor</option>
                <option value="relative">Relative</option>
              </select>
            </label>
          </div>

          <div className="mb-5">
            <label className="text-headingColor font-bold text-[16px] leading-7">
              Gender:
              <select
                name="gender"
                className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none border rounded-md ml-10"
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoogleSignUpModal;

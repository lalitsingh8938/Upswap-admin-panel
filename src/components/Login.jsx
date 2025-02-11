import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./AuthContext"; // Import AuthContext

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext); // AuthContext se login function le rahe hain

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(
        "https://api.upswap.app/api/superadmin/login/",
        {
          email,
          password,
        }
      );

      if (response.data.access_token) {
        const user = response.data.user;

        // Check if the user is a superadmin
        if (user && user.is_superuser) {
          // AuthContext ka login function call karna zaroori hai
          login(response.data.access_token, user);
          localStorage.setItem("refresh_token", response.data.refresh_token);
          localStorage.setItem("user", JSON.stringify(user));

          // Success Toast
          toast.success("Login successful!");

          // Redirect user after a short delay
          // setTimeout(() => {
          navigate("/KYCRequest", { replace: true });
          // }, 1000);
        } else {
          // User is not a superadmin
          toast.error("Access denied. Only superadmins can log in.");
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Invalid credentials
        toast.error("Invalid email or password.");
      } else {
        // Other errors
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-center" autoClose={1000} />
      <div className="p-5 w-full max-w-md text-center">
        <img
          src="UPswap svg 1.png"
          className="w-52 h-20 mx-auto mb-4"
          alt="logo"
        />

        <div className="bg-white p-8 rounded-xl border-2 shadow-md">
          <p className="text-lg text-fuchsia-800 font-semibold mb-6">
            Login to upswap superadmin panel
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <label
                className="text-sm font-semibold text-gray-700 w-full sm:w-24 text-left sm:text-right"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <label
                className="text-sm font-semibold text-gray-700 w-full sm:w-24 text-left sm:text-right"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !email || !password} // Fix: Directly checking email & password
              className="w-full bg-[#FD8A2D] text-white font-semibold py-2 rounded-md hover:bg-[#e07928] transition"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState, useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AuthContext } from "./AuthContext"; // Import AuthContext

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useContext(AuthContext); // AuthContext se login function le rahe hain

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true); // Start loading

//     try {
//       const response = await axios.post(
//         "https://api.upswap.app/api/superadmin/login/",
//         {
//           email,
//           password,
//         }
//       );

//       if (response.data.access_token) {
//         // AuthContext ka login function call karna zaroori hai
//         login(response.data.access_token, response.data.user);
//         localStorage.setItem("refresh_token", response.data.refresh_token);
//         localStorage.setItem("user", JSON.stringify(response.data.user));

//         // Success Toast
//         toast.success("Login successful!");

//         // Redirect user after a short delay
//         setTimeout(() => {
//           navigate("/KYCRequest", { replace: true });
//         }, 1000);
//       }
//     } catch (error) {
//       // Error Toast
//       toast.error("Access denied. Only superadmins can log in.");
//     } finally {
//       setIsLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
//       <ToastContainer position="top-center" autoClose={1000} />
//       <div className="p-5 w-full max-w-md text-center">
//         <img
//           src="UPswap svg 1.png"
//           className="w-52 h-20 mx-auto mb-4"
//           alt="logo"
//         />

//         <div className="bg-white p-8 rounded-xl border-2 shadow-md">
//           <p className="text-lg text-fuchsia-800 font-semibold mb-6">
//             Login to upswap superadmin panel
//           </p>

//           <form onSubmit={handleLogin} className="space-y-6">
//             <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
//               <label
//                 className="text-sm font-semibold text-gray-700 w-full sm:w-24 text-left sm:text-right"
//                 htmlFor="email"
//               >
//                 Email:
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
//               <label
//                 className="text-sm font-semibold text-gray-700 w-full sm:w-24 text-left sm:text-right"
//                 htmlFor="password"
//               >
//                 Password:
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading || !email || !password} // Fix: Directly checking email & password
//               className="w-full bg-[#FD8A2D] text-white font-semibold py-2 rounded-md hover:bg-[#e07928] transition"

//             >
//               {isLoading ? "Logging in..." : "Login"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

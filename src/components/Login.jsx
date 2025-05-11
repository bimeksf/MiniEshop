import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DiApple } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import Submit from "./Submit";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { motion } from "framer-motion"; 
export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isHovered, setIsHovered] = useState(false)
 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/payment";

  function handleForm(e) {
    e.preventDefault();
    console.log("Submit form clicked");

    if (loginData.email === "test@test.com" && loginData.password === "test") {
      localStorage.setItem("loggedin", "true");
      navigate(from, { replace: true });
    } else {
      alert("Invalid email or password");
    }
  }

  function handleChange(e) {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }


  return (
    <section className="h-screen bg-gradient-to-br from-[rgba(36, 30, 30, 1)] to-[rgba(49, 30, 25, 1)  flex items-center justify-center ">
      <motion.div 
   
           initial={{opacity:0 , y:20}}
        animate={{opacity:1 , y:0}}
        transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
      
      onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      
      className="p-6 max-w-sm w-full bg-[#181818] rounded-2xl ml-4 mr-4 md:ml-0 md:mr-0 relative">




        <div className="text-center mb-12">
          <h1 className="text-white text-3xl p-2">Welcome Back</h1>
          <p className="text-[#757575]">
            Don't have an account yet?{" "}
            <span>
              <a className="text-white">Sign up</a>
            </span>
          </p>
        </div>
        {isHovered &&  <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
className="absolute left-20 top-[-80px] transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 p-4 rounded-md shadow-lg z-10 w-64 text-center"      >
          <p className="text-sm">
          Email: <span className="font-bold">test@test.com</span>  password:{""}
          <span className="font-bold">test</span>
        </p>
          
          </motion.div>}

        {location.state?.message && (
          <div className="text-red-500 mb-2">{location.state.message}</div>
        )}


        <form onSubmit={handleForm} className="flex flex-col gap-4">
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
              value={loginData.email}
              className="w-full p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#111111] rounded-md"
              placeholder="Email"
            />
            <MdOutlineEmail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#757575]"
            />
          </div>

          <div className="relative w-full">
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={handleChange}
              value={loginData.password}
              className="w-full p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#111111] rounded-md"
              placeholder="Password"
            />
            <RiLockPasswordLine
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#757575]"
            />
          </div>

          <Submit />
        </form>

        <div className="text-center text-[#757575] p-6">or</div>
        


        <div className="flex justify-evenly">
          <button className="bg-[#272425] px-6 py-2 rounded-xl hover:scale-105 hover:bg-[#3b3738] ">
            <FcGoogle className="text-xl" />
          </button>
          <button className="bg-[#272425] px-6 py-2 rounded-xl  hover:scale-105 hover:bg-[#3b3738]">
            <DiApple className="text-white text-xl" />
          </button>
          <button className="bg-[#272425] px-6 py-2 rounded-xl  hover:scale-105 hover:bg-[#3b3738]">
            <FaGithub className="text-white text-xl" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Submit from "./Submit";


export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

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
    setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className="p-4 max-w-sm mx-auto">
      {location.state?.message && (
        <div className="text-red-500 mb-2">{location.state.message}</div>
      )}

      <form onSubmit={handleForm}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
          value={loginData.email}
          className="border p-2 mb-2 w-full"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={handleChange}
          value={loginData.password}
          className="border p-2 mb-4 w-full"
        />

          <Submit/>
      </form>
    </div>
  );
}
  
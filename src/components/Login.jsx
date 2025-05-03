import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState("idle");

  const navigate = useNavigate(); 
  const location = useLocation();
  const from = location.state?.from?.pathname || "/payment";

  function handleForm(e) {
    e.preventDefault();
    console.log("clicked")
    setStatus("submitting");
    console.log("Submit form clicked");

    if (loginData.email === "test@test.com" && loginData.password === "test") {
      localStorage.setItem("loggedin", "true");
      setStatus("idle");
      navigate(from, { replace: true });
    } else {
      alert("Invalid email or password");
      setStatus("idle");
    }
  }

  function handleChange(e) {
    setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  console.log("Login component rendered");
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

        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {status === "submitting" ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
  
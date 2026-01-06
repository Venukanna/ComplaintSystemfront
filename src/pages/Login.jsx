import { useState } from "react";
import API from "../services/api";
import "./Login.css";
import BackButton from "../components/BackButton";


export default function Login() {
  const [form, setForm] = useState({ email:"", password:"" });
  
  const login = async () => {
    const res = await API.post("/api/auth/login", form);
    localStorage.setItem("user", JSON.stringify(res.data));
    alert("Login success");
  };

  return (
  <div className="login-container">
    <BackButton/>
    <div className="login-box">
      <h2 className="login-title">Login</h2>

      <input 
        placeholder="Email"
        onChange={e=>setForm({...form,email:e.target.value})}
      />

      <input 
        type="password"
        placeholder="Password"
        onChange={e=>setForm({...form,password:e.target.value})}
      />

      <button onClick={login}>Login</button>
    </div>
  </div>
);

}

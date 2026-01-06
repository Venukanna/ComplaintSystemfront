import { useState } from "react";
import API from "../services/api";
import "./Register.css";
import BackButton from "../components/BackButton";

export default function Register() {

  const [form, setForm] = useState({ fullName:"", email:"", password:"" });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/api/auth/register", form);
    alert("Registered successfully");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Register</h2>

        <input 
          placeholder="Full Name"
          onChange={e=>setForm({...form,fullName:e.target.value})}
        />

        <input 
          placeholder="Email"
          onChange={e=>setForm({...form,email:e.target.value})}
        />

        <input 
          type="password"
          placeholder="Password"
          onChange={e=>setForm({...form,password:e.target.value})}
        />

        <button onClick={submit}>Register</button>
      </div>
      <BackButton/>
    </div>
  );
}

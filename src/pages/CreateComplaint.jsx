// import { useState } from "react";
// import API from "../services/api";

// export default function CreateComplaint() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [form, setForm] = useState({ title:"", category:"", description:"" });

//   const submit = async () => {
//     await API.post("/api/complaints/create", {
//       ...form,
//       userId: user.id
//     });
//     alert("Complaint submitted");
//   };

//   return (
//     <div>
//       <h2>Create Complaint</h2>
//       <input placeholder="Title" onChange={e=>setForm({...form,title:e.target.value})} />
//       <input placeholder="Category" onChange={e=>setForm({...form,category:e.target.value})} />
//       <textarea placeholder="Description" onChange={e=>setForm({...form,description:e.target.value})}></textarea>
//       <button onClick={submit}>Submit</button>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import API from "../services/api";
import "./CreateComplaint.css";
import BackButton from "../components/BackButton";

export default function CreateComplaint() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    userId: ""
  });

  useEffect(() => {
    if (user) {
      setForm(f => ({ ...f, userId: user.id }));
    }
  }, []);

  const submit = async () => {
    if (!form.title || !form.category || !form.description || !form.userId) {
      alert("All * fields are required");
      return;
    }

    try {
      await API.post("/api/complaints/create", form);
      alert("Complaint submitted successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid User ID. Please check.");
    }
  };

  return (
    <div className="create-container">
      <div className="create-box">
        <h2 className="create-title">Create Complaint</h2>

        <label>Title *</label>
        <input
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <label>Category *</label>
        <input
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        />

        <label>Description *</label>
        <textarea
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <label>User ID *</label>
        <input
          value={form.userId}
          onChange={e => setForm({ ...form, userId: e.target.value })}
        />

        <button onClick={submit}>Submit</button>
      </div>
      <BackButton/>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import API from "../services/api";

// export default function Admin() {
//   const [complaints, setComplaints] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     API.get("/api/complaints/all")
//       .then(res => setComplaints(res.data));
//   }, []);

//   const searchByUser = async () => {
//     const res = await API.get(`/api/complaints/user/${search}`);
//     setComplaints(res.data);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Admin Panel</h2>

//       <input placeholder="Enter User ID" onChange={e => setSearch(e.target.value)} />
//       <button onClick={searchByUser}>Search</button>

//       <h3>All Complaints</h3>
//       {complaints.map(c => (
//         <div key={c.id}>
//           <b>{c.title}</b> | {c.category} | {c.status}
//         </div>
//       ))}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../services/api";
import "./Admin.css";
import BackButton from "../components/BackButton";

export default function Admin() {

  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get("/api/complaints/all")
      .then(res => setComplaints(res.data));
  }, []);

  const searchByUser = async () => {
    const res = await API.get(`/api/complaints/user/${search}`);
    setComplaints(res.data);
  };

  return (
    <div className="admin-container">
        <BackButton/>
      <div className="admin-box">

        <h2 className="admin-title">Admin Panel</h2>

        <div className="admin-search">
          <input
            placeholder="Enter User ID"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={searchByUser}>Search</button>
        </div>

        {complaints.map(c => (
          <div key={c.id} className="complaint-card">
            <p><b>User ID:</b> {c.user?.id}</p>
            <p><b>Complaint ID:</b> {c.id}</p>
            <p><b>Title:</b> {c.title}</p>
            <p><b>Category:</b> {c.category}</p>
            <p><b>Status:</b> {c.status}</p>
          </div>
        ))}

      </div>
    </div>
  );
}

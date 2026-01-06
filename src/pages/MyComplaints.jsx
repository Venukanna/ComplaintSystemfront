import { useEffect, useState } from "react";
import API from "../services/api";

export default function MyComplaints() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);

  useEffect(()=>{
    API.get(`/api/complaints/user/${user.id}`)
      .then(res => setData(res.data));
  },[]);

  return (
    <div>
      <h2>My Complaints</h2>
      {data.map(c=>(
        <div key={c.id}>
          <h4>{c.title}</h4>
          <p>{c.description}</p>
          <b>Status: {c.status}</b>
        </div>
      ))}
    </div>
  );
}

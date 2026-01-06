import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      style={{
        position: "fixed",
        top: "15px",
        left: "15px",
        padding: "8px 14px",
        borderRadius: "6px",
        background: "#6c757d",
        color: "white",
        border: "none",
        cursor: "pointer",
        zIndex: 1000
      }}
    >
      ← Back
    </button>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import aiImage from "./assets/image1.png";

function Home() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  // 📂 Handle file upload
  const handleFile = (e) => {
    const selectedFile = e.target.files[0];handleAnalyze
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // 🚀 Analyze button
  const handleAnalyze = () => {
    if (!file) {
      alert("Please upload your resume first!");
      return;
    }

    // later you can send file to backend here

    // 👉 Navigate to result page
    navigate("/result", {
      state: { fileName: file.name }
    });
  };

  return (
    <div className="page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">SkillScan AI</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/result">Result</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="container">

        {/* LEFT SIDE IMAGE */}
        <div className="left">
          <img src={aiImage} alt="AI" className="ai-img" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="right">
          <h1>Optimize Your Career with AI</h1>
          <p>Instantly analyze your resume & get feedback</p>

          {/* Upload Box */}
          <div className="upload-box">
            <input type="file" onChange={handleFile} />
            <p className="file-name">
              {file ? file.name : "Upload your resume (PDF)"}
            </p>
          </div>

          {/* Button */}
          <button className="btn" onClick={handleAnalyze}>
            Analyze Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;


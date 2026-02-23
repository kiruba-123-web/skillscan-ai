import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const fileName = location.state?.fileName || "resume.pdf";

  return (
    <div className="result-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">SkillScan AI</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/result">Result</a>
        </div>
      </nav>

      {/* MAIN */}
      <div className="result-container">

        {/* SCORE SECTION */}
        <div className="score-box">
          <h2>Score</h2>
          <div className="circle">
            <h1>85</h1>
            <p>Overall Score</p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="skills-box">
          <h3>Key Skills Matched</h3>
          <div className="skills">
            <span>Project Management</span>
            <span>Figma</span>
            <span>Data Analysis</span>
            <span>Python</span>
            <span>Leadership</span>
          </div>
        </div>

        {/* STRENGTHS */}
        <div className="grid">
          <div className="card success">
            <h3>Strengths</h3>
            <ul>
              <li>Strong Action Verbs</li>
              <li>Quantifiable Results</li>
              <li>Clear Structure</li>
              <li>Relevant Keywords</li>
            </ul>
          </div>

          {/* IMPROVEMENTS */}
          <div className="card warning">
            <h3>Opportunities for Improvement</h3>
            <ul>
              <li>Missing ATS Keywords</li>
              <li>Experience Section Too Short</li>
              <li>Add LinkedIn Profile</li>
            </ul>
          </div>
        </div>

        {/* AI INSIGHT */}
        <div className="insight">
          💡 <b>AI Insight:</b> Add specific metrics to your project achievements
        </div>

        {/* BUTTONS */}
        <div className="actions">
          <button className="download">Download Report</button>
          <button className="rescan" onClick={() => navigate("/")}>
            Re-Scan Resume
          </button>
        </div>

        <p className="file">Analyzed File: {fileName}</p>

      </div>
    </div>
  );
}

export default Result;
import aiimage from './assets/background4.jpg';
import bgimage from './assets/background1.jpg';

function Home() {
  return (
    <div className='background'>
   
      
    <div className='navtag'>
      <nav className="navbar">
        <div className="logo">SkillScan AI</div>
        <div className="nav-links">
          <a href="#home" >Home</a>
          <a href="#result">Result</a>
          </div>
          </nav>
        </div>
      
      
<div className="hero">
<div className="text">
  <h3>Optimize Your Career  with AI</h3>
  <p>Instanly Analyze your resume  & get your feedback</p>
</div>

      </div>
      <div>
        <form className='upload-box'>
          <label className='file'> Upload your resume
          <input type='file'/> 
          </label>
        </form>
       
      </div>
      <button>Analyze Resume</button>
     
      </div>
    
  );
}

export default Home;



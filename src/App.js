import logo from "../src/icons/image.jpeg";
import './App.css';
import linkedin from "../src/icons/linkedin.svg";
import github from "../src/icons/github.svg";
import insta from "../src/icons/instagram.svg";
import fb from "../src/icons/fb.svg";
import x from "../src/icons/x.svg";
import leetcode from "../src/icons/leetcode.svg";
import discord from "../src/icons/discord.svg";
import {
  BrowserRouter as Router, Routes, Route, useNavigate
} from "react-router-dom";
import Web from "../src/components/Webprojects/Web.js";
import Ml from "../src/components/MLprojects/Ml.js";
import Dl from "../src/components/DLprojects/Dl.js";
import Footer from "../src/components/Footer/Footer.js";





function Home() {
  const navigate = useNavigate();

  return (
    <div className="body">

      <div className="image">
        <img className="image_in" src={logo} alt="" />
      </div>

      <span className="text">
        <h1>@Biswajit_Rana</h1>
      </span>

      <div className="contacts">
        <div className="icons">
          <a href="https://github.com/biswajit-github-2022" target="_blank">
            <img src={github} alt="hi" />
          </a>
          <a href="https://www.linkedin.com/in/biswajit-rana/" target="_blank">
            <img src={linkedin} alt="hi" />
          </a>
          <a href="https://www.instagram.com/biswajit_0_0_/?hl=en" target="_blank">
            <img src={insta} alt="hi" />
          </a>
          <a href="https://www.facebook.com/biswajitrana13/" target="_blank">
            <img src={fb} alt="hi" />
          </a>
          <a href="https://x.com/B_R_0_0" target="_blank">
            <img src={x} alt="hi" />
          </a>
          <a href="https://leetcode.com/u/biswajit276/" target="_blank">
            <img src={leetcode} alt="hi" />
          </a>
          <a href="https://discord.com/users/757970753605075124" target="_blank">
            <img src={discord} alt="hi" />
          </a>
        </div>
      </div>


      <div class="container">
        <div class="card" onClick={() => navigate('/page1')}>
          {/* <img src="image1.jpg" alt="Image 1" class="card-image"/> */}
          <div class="card-content" >
            <h2 class="card-title">Web Dev Projects</h2>
            <p class="card-text"></p>
          </div>
        </div>
        <div class="card" onClick={() => navigate('/page2')}>
          {/* <img src="image2.jpg" alt="Image 2" class="card-image"/> */}
          <div class="card-content">
            <h2 class="card-title">Ml Projects</h2>
            <p class="card-text"></p>
          </div>
        </div>
        <div class="card" onClick={() => navigate('/page3')}>
          {/* <img src="image2.jpg" alt="Image 2" class="card-image"/> */}
          <div class="card-content">
            <h2 class="card-title">DL Projects</h2>
            <p class="card-text"></p>
          </div>
        </div>
      </div>


    </div>

  );
}




function App() {
  return (
    <Router basename="/portfolio_website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Web />} />
        <Route path="/page2" element={<Ml />} />
        <Route path="/page3" element={<Dl />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;

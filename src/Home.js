import { Helmet } from 'react-helmet';
import './css/App.css';
import './css/main.css';
import './css/colors.css';
import './css/nav.css';
import './css/anims.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import starsImage from './media/stars.png';

export default function Home() {
  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" /> 
      </Helmet>
      <header className="App-header">
        <div className="topnav">
        <li>
          <Link className="active">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/inquiries">Contact</Link>
        </li>

        </div>
        <div>
          <section className="dark">  
              <div className="box box1 card">
                <img src={starsImage} alt="John" style= {{ width: "100%" }} />
                <h1 style= {{ color:"rgb(32, 32, 32)" }}>Nicholas</h1>
                <div class="icon-container">
                  <i class="devicon-c-plain colored"></i>
                  <i class="devicon-csharp-plain colored"></i>
                  <i class="devicon-java-plain colored"></i>
                  <i class="devicon-javascript-plain colored"></i>
                  <i class="devicon-php-plain colored"></i>
                </div>
                <p>Canadian Programmer</p>
              </div>
              <p>&nbsp;</p>
              <div className="box box2 card">
                <h1 style= {{ color: "rgb(32, 32, 32)" }}>About Me</h1>
                <p className="title">Hey, I'm a Canadian Programmer who primarily works with Object-Oriented-Programming in Web/Game Development & Modding.</p>
              </div>
          </section>
          <section className="dark"></section>
        </div>
      </header>
    </div>
  );
}
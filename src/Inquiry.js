import { Helmet } from 'react-helmet';
import InquiryComponent from './InquiryComponent';
import './css/App.css';
import './css/main.css';
import './css/colors.css';
import './css/nav.css';
import './css/anims.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function Inquiry() {
    return (
      <div>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        </Helmet>
        <div className="topnav">
        <li>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link className="active" to="/inquiries">Contact</Link>
        </li>
        </div>
        <div>
          <section className="white">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h1 style={{ textAlign: 'center', color:"rgb(32, 32, 32)" }}>Inquiry Submission</h1>
            <InquiryComponent />
          </section>
        </div>
      </div>
    );
}
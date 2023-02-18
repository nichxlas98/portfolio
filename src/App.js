import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Inquiry from './Inquiry';
import Project from "./Project";

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path = "/" element={<Home/>}/>            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path = "/projects" element={<Project/>}/>              
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path = "/inquiries" element={<Inquiry/>}/>              
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          </Routes>
      </Router>
    </>
  );
}

export default App;

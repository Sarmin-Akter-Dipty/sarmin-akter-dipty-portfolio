import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Skills from './Pages/Skills/Skills';
import SkillsProjects from './Pages/SkillsProjects/SkillsProjects';
import Development from './Pages/Skills/Development';
import Tools from './Pages/Skills/Tools';





function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path="/" element={
            <Home />}>
          </Route>
          <Route path="/home" element={
            <Home />}>
          </Route>
          <Route path="/blogs" element={
            <Blogs />}>
          </Route>
          <Route path="/projects" element={
            <Projects />}>
          </Route>
          <Route path="/about" element={
            <About />}>
          </Route>
          <Route path="/contact" element={
            <Contact />}>
          </Route>
          <Route path="/skills" element={
            <Skills />}>
          </Route>
          <Route path="/design" element={
            <SkillsProjects />}>
          </Route>
          <Route path="/development" element={
            <Development />}>
          </Route>
          <Route path="/Tools" element={
            <Tools />}>
          </Route>
          {/* <Route path="/login" element={
            <Login />}>
          </Route> */}
          <Route path="*" element={
            <NotFound />}>
          </Route>
        </Routes>


      </Router>






    </div>
  );
}

export default App;

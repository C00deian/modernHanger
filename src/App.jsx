
import './App.css'

import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home.jsx'
//import Blog from './components/Pages/Blog/Blog.jsx';
import Story from './components/Pages/Story/Story.jsx';
import Contact from './components/Pages/Contact/Contact.jsx';
import Navbar from './components/common/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import  Stander from "./components/Pages/Shop/Stander.jsx"
import Personalize from './components/Pages/Shop/Personalize.jsx';
import Blog from './components/Pages/Blog/Blog.jsx';
import Marathon from './components/Utility/Marathon.jsx';
import MilesofMeals from './components/Utility/MilesofMeals.jsx';
import Nopain from './components/Utility/Nopain.jsx';
import Run from './components/Utility/Run.jsx';
import UnStoppable from './components/Utility/UnStoppable.jsx';
import Sports from './components/Utility/Sports.jsx';

function App() {


  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Personalized" element={<Personalize />} />
          <Route path="/standerd" element={<Stander />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/MoreInfo" element={<Blog />} />
          <Route path="/Marathon" element={<Marathon />} />
          <Route path="/Miles" element={<MilesofMeals />} />
          <Route path="/NoPain" element={<Nopain />} />
          <Route path="/run" element={<Run />} />
          <Route path="/UnStoppable" element={<UnStoppable />} />
          <Route path="/Sports" element={<Sports />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
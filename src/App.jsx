
import './App.css'

import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home.jsx'
//import Blog from './components/Pages/Blog/Blog.jsx';
import Story from './components/Pages/Story/Story.jsx';
import Contact from './components/Pages/Contact/Contact.jsx';
import Shop from './components/Pages/Shop/Shop.jsx'
import Navbar from './components/common/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import  Stander from "./components/Pages/Shop/Stander.jsx"


function App() {


  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/stander" element={<Stander />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
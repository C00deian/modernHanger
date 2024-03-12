import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home.jsx'
import Story from './components/Pages/Story/Story.jsx';
import Contact from './components/Pages/Contact/Contact.jsx';
import Navbar from './components/common/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import  Stander from "./components/Pages/Shop/Stander.jsx"
import Personalize from './components/Pages/Shop/Personalize.jsx';
import Blog from './components/Pages/Blog/Blog.jsx';
import Marathon from './components/Utility/Others/Marathon.jsx';
import MilesofMeals from './components/Utility/Others/MilesofMeals.jsx';
import Nopain from './components/Utility/Others/Nopain.jsx';
import Run from './components/Utility/Others/Run.jsx';
import UnStoppable from './components/Utility/Others/UnStoppable.jsx';
import Sports from './components/Utility/Others/Sports.jsx';
import Footer from './components/Pages/Footer/Footer.jsx';
import NewLetter from './components/NewLetter/NewLetter.jsx';
import Whatsap from './components/whatsapp/Whatsap.jsx';
import MiddleLast from './components/middleLast/MiddleLast.jsx';
import Airrfile from './components/Utility/Sport/Airrfile.jsx';
import Badminton from './components/Utility/Sport/Badminton.jsx';
import Baseball from './components/Utility/Sport/Baseball.jsx';
import Basketball from './components/Utility/Sport/Basketball.jsx';
import Boxing from './components/Utility/Sport/Boxing.jsx';
import ChessMaster from './components/Utility/Sport/ChessMaster.jsx';
import Cricket from './components/Utility/Sport/Cricket.jsx';
import Cycling from './components/Utility/Sport/Cycling.jsx';
import Dancer from './components/Utility/Sport/Dancer.jsx';
import Yoga from './components/Utility/Sport/Yoga.jsx';
import Academy from './components/Utility/Others/Academy.jsx';
import BodyBuild from './components/Utility/Sport/BodyBuild.jsx';
import Football from './components/Utility/Sport/Football.jsx';
function App() {


  return (
    <>
    
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Personalized"  element={<Personalize />} />
          <Route path="/Sports" element={<Stander />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/MoreInfo" element={<Blog />} />
          <Route path="/Marathon" element={<Marathon />} />
          <Route path="/Miles" element={<MilesofMeals />} />
          <Route path="/NoPain" element={<Nopain />} />
          <Route path="/run" element={<Run />} />
          <Route path="/UnStoppable" element={<UnStoppable />} />
          <Route path="/Academy" element={<Academy/>} />

          {/* Sports Route */}
          <Route path="/Sport" element={<Sports />} />
          <Route path="/Rifle" element={<Airrfile />} />
          <Route path="/Badminton" element={<Badminton />} />
          <Route path="/Baseball" element={<Baseball />} />
          <Route path="/Basketball" element={<Basketball />} />
          <Route path="/Boxing" element={<Boxing />} />
          <Route path="/Chess" element={<ChessMaster />} />
          <Route path="/Cricket" element={<Cricket />} />
          <Route path="/Cycling" element={<Cycling />} />
          <Route path="/Dancer" element={<Dancer />} />
          <Route path="/Yoga" element={<Yoga />} />
          <Route path="/Body" element={<BodyBuild />} />
          <Route path="/Football" element={<Football/>} />


        </Routes>
        <MiddleLast />
        <NewLetter></NewLetter>
        <Footer />
        <Whatsap></Whatsap>
      </Router>
    </>
  );
}

export default App
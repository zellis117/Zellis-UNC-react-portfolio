import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [title, setTitle] = useState("Zac Ellis Portfolio");
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>

      <Routes>
        <Route path='' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

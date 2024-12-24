import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  
  const toggleOrange = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#fd7e14';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Orange TextUtils';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing!';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Style your text!';
      // }, 1600);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Dark mode has been disabled", "success");
    }
  }

  const togglePink = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#ff8b96';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const toggleGreen = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#20c997';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
   <>
    {/* <Navbar title="TextUtils" aboutText="About us"/> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleOrange={toggleOrange} togglePink={togglePink} toggleGreen={toggleGreen}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About/>}>
          {/* <About /> */}
        </Route>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter text below'/>}>
          {/* <TextForm showAlert={showAlert} heading='Enter text below'/> */}
        </Route>
      </Routes>
    </div>
    </Router>
    {/* <About/> */}

   </>
   
  );
}

export default App;


import './App.css';

import Navbar from './compoments/Navbar';
import TextForms from './compoments/TextForms';
import React, { useState } from 'react';
import Alert from './compoments/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



// let name ="Sowthesh";
function App() {

  const [mode, setmode] = useState("light");
  const [modeText, setmodeText] = useState("dark");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setalert(null);

    }, 1200)

  }

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      setmodeText("dark");
      showAlert("LightMode is Enabled", "success")
      document.body.style.backgroundColor = 'white';


    }
    else {
      setmode("dark");
      setmodeText("light");
      showAlert("DarkMode is Enabled", "success")
      document.body.style.backgroundColor = '#22113d';

    }
  }

  const greenDarkMode = () => {

    setmode("dark");
    setmodeText("light");
    showAlert("GreenDarkMode is Enabled", "success")
    document.body.style.backgroundColor = '#115711';



  }
  const blueDarkMode = () => {

    setmode("dark");
    setmodeText("light");
    showAlert("BlueDarkMode is Enabled", "success")
    document.body.style.backgroundColor = '#03034e';


  }
  const redDarkMode = () => {

    setmode("dark");
    setmodeText("light");
    showAlert("RedDarkMode is Enabled", "success")
    document.body.style.backgroundColor = '#460606';
  }




  return (
    <>
      <Router>

        <Navbar title="TextTransformer" mode={mode} toggleMode={toggleMode} greenDarkMode={greenDarkMode} redDarkMode={redDarkMode} blueDarkMode={blueDarkMode} modeText={modeText} />

        <div className="container">
          <Alert alert={alert} />
        </div>

        <div className="container">

          <Routes>
            <Route exact path="/home" element={<TextForms heading="Enter your text here" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;

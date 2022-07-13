
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,      
  Routes,
  Route,
  Link
  
} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 2000)



  }



  const [modeB, setModeB] = useState('light');
  const B_mode = () => {
    if (modeB === 'light') {
      setModeB("dark");
      document.body.style.backgroundColor = 'blue';
      showAlert("Blue Mode Has Been Enabled", "success");

      document.title = "TextUtils Blue Mode"
    }
    else {
      setModeB("light");
      document.body.style.backgroundColor = 'white';

    }
  }

  const [mode, setMode] = useState('light');
  const D_mode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils Dark Mode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
      <Router>
        {/* <Navbar tittle="NavBar2 Ok" aboutThis="NewAbout"/> */}
        <Navbar mode={mode} D_mode={D_mode} B_mode={B_mode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>

            <Route path="/about" element={  <About />}>
            

            </Route>
            <Route path="/" element={   <TextForm heading="Write Something Here For Testing" mode={mode} />}>
           
            </Route>
          </Routes>
          {/* <TextForm/> */}

        </div>

      </Router>
    </>


  );

}

export default App;

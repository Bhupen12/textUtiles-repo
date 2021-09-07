import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import { Link } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }

  const toggleMode  = (cls)=>{
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor = '#051c3f';
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode enabled" , "success")
      document.title = "Text Utiles Dark Mode"
      setInterval(() => {
        document.title = "Text Utiles is amazing"
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtiles Now"
      }, 5000);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled" , "success")
      document.title = "text Utiles light Mode"
    }
  }

  return (
    <>   
    <Router>
      <Navbar title="TextUtiles" about = "About Text" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading = "Enter the text" mode={mode}></TextForm>
            </Route>
        </Switch>
        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;

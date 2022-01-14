// import logo from './logo.svg';
import React, { useState } from 'react'
// import ReactDOM from 'react-dom';
// import Message from './Components/Messsage'
import Textform from './Components/textform'
import Navbar from './Components/Navbar'
import Alert from './Components/Alert'
import About from './Components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');


  const [alert, setalert] = useState(null);


  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    }
    )
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "rgb(0,0,42)"
      showAlert("Enabled Dark Mode", "success");
      document.title = "Enabled DarkMode"
      setInterval(() => {

        document.title = "Textutils is amazing"
      }, 2000);
      setInterval(() => {

        document.title = "Install Textutills Now!"
      }, 1500);
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white ";
      showAlert("Enabled Light Mode", "success");
      document.title = "Enabled Normal Mode"

    }
  }
  return (
    <>
      <Router>
        <Navbar title='Textutilities' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Textform mode={mode} showAlert={showAlert} heading='Sai krishna' />
            </Route>

          </Switch>


        </div>
      </Router>



    </>
  );

}

// export default App;
export default App;

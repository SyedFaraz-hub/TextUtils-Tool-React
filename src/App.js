import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  //Alert
  const [alert, setAlert] = useState(null);

  let showAlert = (message, anycolor) => {
    setAlert({
      msg: message,
      type: anycolor,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toggleMode = () => {

    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Has Been Successfully Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Successfully Enabled", "success");
    }
  };

  return (
    <Router>
      <div>
        <Navbar
          title="TextUtils"
          homeTag="Home"
          mode={mode}
          togglemode={toggleMode}
        />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
            <TextForm mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

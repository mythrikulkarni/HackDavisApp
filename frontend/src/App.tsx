import React from 'react';
import logo from './logo.svg';
import Login from './pages/login';
import SignUp from './pages/SignUp';
import Default from './pages/Default';

import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Topics from './pages/Topics';
import SignUpFlow from './pages/SignUpFlow';
import NavBar from './pages/NavBar';
import TutorHomepage from './pages/TutorHomepage';
import TutorTutee from './pages/TutorTutee';

function App() {
  const [screenId, setScreenId] = React.useState(0);
  const [accessToken, setAccessToken] = React.useState("");

  const transitionScreen = (screenId: number, access_token?: string) => {
    setScreenId(screenId);
    if (access_token != undefined) {
      setAccessToken(access_token);
    } else {
        console.log("Error");
    }
  }
  if (screenId == 0) {
    return (
      <Login transitionScreen={transitionScreen} />
    )
  } else if (screenId == 1) {
    return (
      <TutorTutee access_token={accessToken} />
    )
  } else if (screenId == 2) {
    return (
      <SignUpFlow transitionOutPage={transitionScreen} />
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default App;

import React from 'react';
import axios from 'axios';

function Login() {
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const formSubmit = () => {
    let formData = new FormData();
    formData.append("step", "4");
    formData.append("email_address", emailAddress);
    formData.append("password", password);

    axios.post("http://localhost:8000/api/user_auth/", formData).then((response) => {
        console.log("Success: " + response.data.access_token);
        //clearForm();
    })
  }

  return (
    <div
      className="SignUp container"
      style={{
        width: 390, 
        height: 844, 
        position: "relative", 
        background: "white"
      }}
    >
      <div
        className="Login"
        style={{
          width: 390, 
          height: 844, 
          position: 'relative', 
          background: 'white'
        }}
      >
        <div
          style={{
            left: 30, 
            top: 226, 
            position: 'absolute', 
            color: 'black', 
            fontSize: 24, 
            fontFamily: 'Inter', 
            fontWeight: '700', 
            wordWrap: 'break-word'
          }}
        >
          Login
        </div>
        <div
          className="Rectangle79"
          style={{
            width: 165, 
            height: 88, 
            left: 113, 
            top: 69, 
            position: 'absolute', 
            background: '#D9D9D9'
          }}
        />
        <div
          className="BuzzIn"
          style={{
            left: 154, 
            top: 98, 
            position: 'absolute', 
            color: 'black', 
            fontSize: 24, 
            fontFamily: 'Inter', 
            fontWeight: '600', 
            wordWrap: 'break-word'
          }}
        >
          Buzz In
        </div>
        <input
          type="text"
          className="Frame91"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          style={{
            width: 330, 
            height: 48, 
            left: 30, 
            top: 295, 
            position: 'absolute', 
            borderRadius: 10, 
            border: '1px solid black'
          }}
        />
        <div
          className="Frame96"
          onClick={() => formSubmit()}
          style={{
            width: 330, 
            height: 47, 
            paddingLeft: 87, 
            paddingRight: 87, 
            paddingTop: 16, 
            paddingBottom: 16, 
            left: 30, 
            top: 486, 
            position: 'absolute', 
            background: '#E4E4E4', 
            borderRadius: 10, 
            overflow: 'hidden', 
            border: '1px solid', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 10, 
            display: 'inline-flex'
          }}
        >
          <div
            style={{
              color: 'black', 
              fontSize: 14, 
              fontFamily: 'Inter', 
              fontWeight: '500', 
              wordWrap: 'break-word'
            }}
          >
            Log in
          </div>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="Frame92"
          style={{
            width: 330, 
            height: 48, 
            left: 30, 
            top: 383, 
            position: 'absolute', 
            borderRadius: 10, 
            border: '1px solid black'
          }}
        />
        <div
          style={{
            left: 30, 
            top: 275, 
            position: 'absolute', 
            color: 'black', 
            fontSize: 12, 
            fontFamily: 'Inter', 
            fontWeight: '600', 
            wordWrap: 'break-word'
          }}
        >
          Email or Username
        </div>
        <div
          style={{
            left: 30, 
            top: 363, 
            position: 'absolute', 
            color: 'black', 
            fontSize: 12, 
            fontFamily: 'Inter', 
            fontWeight: '600', 
            wordWrap: 'break-word'
          }}
        >
          Password
        </div>
        <div
          style={{
            left: 30, 
            top: 441, 
            position: 'absolute', 
            color: 'black', 
            fontSize: 12, 
            fontFamily: 'Inter', 
            fontWeight: '400', 
            wordWrap: 'break-word'
          }}
        >
          Forgot your password?
        </div>
        <div
          style={{
            left: 122, 
            top: 553, 
            position: 'absolute'
          }}
        >
          <span
            style={{
              color: 'black', 
              fontSize: 12, 
              fontFamily: 'Inter', 
              fontWeight: '400', 
              wordWrap: 'break-word'
            }}
          >
            Need an account? 
          </span>
          <span
            style={{
              color: 'black', 
              fontSize: 12, 
              fontFamily: 'Inter', 
              fontWeight: '700', 
              wordWrap: 'break-word'
            }}
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

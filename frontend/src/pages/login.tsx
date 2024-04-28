import React from 'react';

function Login() {
    return (
        <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  .login-container {\n    width: 390px; \n    height: 844px; \n    position: relative; \n    background: white;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .text-style {\n    color: black; \n    font-family: 'Inter'; \n    word-wrap: break-word;\n  }\n  .rectangle {\n    background: #D9D9D9;\n  }\n  .input-frame, .button-frame {\n    width: 330px; \n    border-radius: 10px; \n    border: 1px solid black;\n  }\n  .centered-flex {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    flex-direction: column;\n    gap: 10px;\n  }\n"
    }}
  />
  <div className="login-container">
    <div
      className="Login text-style absolute"
      style={{ left: 30, top: 226, fontSize: 24, fontWeight: 700 }}
    >
      Login
    </div>
    <div
      className="Rectangle79 rectangle absolute"
      style={{ width: 165, height: 88, left: 113, top: 69 }}
    />
    <div
      className="BuzzIn text-style absolute"
      style={{ left: 154, top: 98, fontSize: 24, fontWeight: 600 }}
    >
      Buzz In
    </div>
    <div
      className="Frame91 input-frame absolute"
      style={{ height: 48, left: 30, top: 295 }}
    />
    <div
      className="Frame96 button-frame centered-flex absolute"
      style={{
        height: 47,
        padding: "16px 87px",
        left: 30,
        top: 486,
        background: "#E4E4E4"
      }}
    >
      <div
        className="LogIn text-style"
        style={{ fontSize: 14, fontWeight: 500 }}
      >
        Log in
      </div>
    </div>
    <div
      className="Frame92 input-frame absolute"
      style={{ height: 48, left: 30, top: 383 }}
    />
    <div
      className="EmailOrUsername text-style absolute"
      style={{ left: 30, top: 275, fontSize: 12, fontWeight: 600 }}
    >
      Email or Username
    </div>
    <div
      className="Password text-style absolute"
      style={{ left: 30, top: 363, fontSize: 12, fontWeight: 600 }}
    >
      Password
    </div>
    <div
      className="ForgotYourPassword text-style absolute"
      style={{ left: 30, top: 441, fontSize: 12, fontWeight: 400 }}
    >
      Forgot your password?
    </div>
    <div
      className="NeedAnAccountSignUp absolute"
      style={{ left: 122, top: 553 }}
    >
      <span
        style={{
          color: "black",
          fontSize: 12,
          fontFamily: '"Inter"',
          fontWeight: 400,
          wordWrap: "break-word"
        }}
      >
        Need an account?{" "}
      </span>
      <span
        style={{
          color: "black",
          fontSize: 12,
          fontFamily: '"Inter"',
          fontWeight: 700,
          wordWrap: "break-word"
        }}
      >
        Sign up
      </span>
    </div>
  </div>
</>
    )
}
export default Login;

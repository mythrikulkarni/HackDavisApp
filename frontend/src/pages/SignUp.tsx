import axios from 'axios';
import React from 'react';

interface IUserAuthStep1Post {
    is_success: boolean,
    user_id: number,
    message: string
}

function SignUp (props: {transitionPage: (screenId: number, userId?: number) => void}) {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setlastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const formSetFirstName = (newFirstName: string) => {
        setFirstName(newFirstName);
    }

    const formSetLastName = (newLastName: string) => {
        setlastName(newLastName);
    }

    const formSetEmail = (newEmail: string) => {
        setEmail(newEmail);
    }

    const formSetPassword = (newPassword: string) => {
        setPassword(newPassword);
    }

    const formClearForm = () => {
        setFirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
    }

    const formSubmit = () => {
        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);
        console.log("Email: " + email);
        console.log("Password: " + password);
        let formData = new FormData();
        formData.append("step", "1");
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("email", email);
        formData.append("password", password);

        axios.post("http://localhost:8000/api/user_auth/", formData).then((response) => {
            let data = response.data as IUserAuthStep1Post;
            formClearForm();
            props.transitionPage(1, data.user_id);
        }).catch((err) => {
            console.log(err);
        });

        console.log("Submit");
    }

    return (
            <div className="SignUp container"
    style={{ width: 390, height: 844, position: "relative", background: "white" }}
    >
    <div
        className="SignUp container"
        style={{
        left: 30,
        top: 226,
        position: "absolute",
        color: "black",
        fontSize: 24,
        fontFamily: "Inter",
        fontWeight: 700,
        wordWrap: "break-word"
        }}
    >
        Sign up
    </div>
    <div
        className="Rectangle79"
        style={{
        width: 165,
        height: 88,
        left: 113,
        top: 69,
        position: "absolute",
        background: "#D9D9D9"
        }}
    />
    <div
        className="BuzzIn"
        style={{
        left: 154,
        top: 98,
        position: "absolute",
        color: "black",
        fontSize: 24,
        fontFamily: "Inter",
        fontWeight: 600,
        wordWrap: "break-word"
        }}
    >
        Buzz In
    </div>
    <input type="email"
        className="Frame91"
        value={email}
        onChange={(e) => {setEmail(e.target.value); }}
        style={{
        width: 330,
        height: 48,
        left: 30,
        top: 383,
        position: "absolute",
        borderRadius: 10,
        border: "1px black solid"
        }}
    />
    <input type="text"
        value={firstName}
        onChange={(e) => { setFirstName(e.target.value); }}
        className="Frame99"
        style={{
        width: 160,
        height: 48,
        left: 30,
        top: 295,
        position: "absolute",
        borderRadius: 10,
        border: "1px black solid"
        }}
    />
    <input
        className="Frame100"
        value={lastName}
        onChange={(e) => {setlastName(e.target.value); }}
        style={{
        width: 160,
        height: 48,
        left: 200,
        top: 295,
        position: "absolute",
        borderRadius: 10,
        border: "1px black solid"
        }}
    />
    <div
        className="Frame96"
        onClick={() => {formSubmit();}}
        style={{
        width: 330,
        height: 47,
        paddingLeft: 87,
        paddingRight: 87,
        paddingTop: 16,
        paddingBottom: 16,
        left: 30,
        top: 549,
        position: "absolute",
        background: "#E4E4E4",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        display: "inline-flex"
        }}
    >
        <div
        className="SignUp"
        style={{
            color: "black",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: 500,
            wordWrap: "break-word"
        }}
        >
        Sign up
        </div>
    </div>
    <input type="password"
        className="Frame92"
        value={password}
        onChange={(e) => {setPassword(e.target.value); }}
        style={{
        width: 330,
        height: 48,
        left: 30,
        top: 471,
        position: "absolute",
        borderRadius: 10,
        border: "1px black solid"
        }}
    />
    <div
        className="Email"
        style={{
        left: 30,
        top: 363,
        position: "absolute",
        color: "black",
        fontSize: 12,
        fontFamily: "Inter",
        fontWeight: 600,
        wordWrap: "break-word"
        }}
    >
        Email
    </div>
    <div
        className="FirstName"
        style={{
        left: 30,
        top: 275,
        position: "absolute",
        color: "black",
        fontSize: 12,
        fontFamily: "Inter",
        fontWeight: 600,
        wordWrap: "break-word"
        }}
    >
        First Name
    </div>
    <div
        className="LastName"
        style={{
        left: 200,
        top: 275,
        position: "absolute",
        color: "black",
        fontSize: 12,
        fontFamily: "Inter",
        fontWeight: 600,
        wordWrap: "break-word"
        }}
    >
        Last Name
    </div>
    <div
        className="Password"
        style={{
        left: 30,
        top: 451,
        position: "absolute",
        color: "black",
        fontSize: 12,
        fontFamily: "Inter",
        fontWeight: 600,
        wordWrap: "break-word"
        }}
    >
        Password
    </div>
    <div
        className="AlreadyHaveAnAccountLogIn"
        style={{ left: 102, top: 616, position: "absolute" }}
    >
        <span
        style={{
            color: "black",
            fontSize: 12,
            fontFamily: "Inter",
            fontWeight: 400,
            wordWrap: "break-word"
        }}
        >
        Already have an account?{" "}
        </span>
        <span
        style={{
            color: "black",
            fontSize: 12,
            fontFamily: "Inter",
            fontWeight: 700,
            wordWrap: "break-word"
        }}
        >
        Log in
        </span>
    </div>
    </div>
    )
}
export default SignUp;
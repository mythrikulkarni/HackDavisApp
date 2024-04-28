import axios from 'axios';
import React from 'react';

interface IUserAuthStep1Post {
    is_success: boolean,
    user_id: number,
    message: string
}

function SignUp (props: {transitionPage: (screenId: number, userId?: number) => void,
    transitionOutPage: (screenId: number, access_token?: string) => void
}) {
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
    style={{ width: 390, height: 844, position: "relative", background: "#FAF9F6" }}
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
        position: 'absolute', 
        }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="141" height="96" viewBox="0 0 141 96" fill="none">
        <path d="M10 21C10 18.7909 11.7909 17 14 17H121C123.209 17 125 18.7909 125 21V92C125 94.2091 123.209 96 121 96H14C11.7909 96 10 94.2091 10 92V21Z" fill="#E2B11D"/>
        <path d="M10 36H125V77H10V36Z" fill="#1A1A1A"/>
        <path d="M26.7216 65V47.5455H33.4034C34.6648 47.5455 35.7131 47.7443 36.5483 48.142C37.3892 48.5341 38.017 49.071 38.4318 49.7528C38.8523 50.4347 39.0625 51.2074 39.0625 52.071C39.0625 52.7812 38.9261 53.3892 38.6534 53.8949C38.3807 54.3949 38.0142 54.8011 37.554 55.1136C37.0938 55.4261 36.5795 55.6506 36.0114 55.7869V55.9574C36.6307 55.9915 37.2244 56.1818 37.7926 56.5284C38.3665 56.8693 38.8352 57.3523 39.1989 57.9773C39.5625 58.6023 39.7443 59.358 39.7443 60.2443C39.7443 61.1477 39.5256 61.9602 39.0881 62.6818C38.6506 63.3977 37.9915 63.9631 37.1108 64.3778C36.2301 64.7926 35.1222 65 33.7869 65H26.7216ZM29.8835 62.358H33.2841C34.4318 62.358 35.2585 62.1392 35.7642 61.7017C36.2756 61.2585 36.5312 60.6903 36.5312 59.9972C36.5312 59.4801 36.4034 59.0142 36.1477 58.5994C35.892 58.179 35.5284 57.8494 35.0568 57.6108C34.5852 57.3665 34.0227 57.2443 33.3693 57.2443H29.8835V62.358ZM29.8835 54.9687H33.0114C33.5568 54.9687 34.0483 54.8693 34.4858 54.6705C34.9233 54.4659 35.267 54.179 35.517 53.8097C35.7727 53.4347 35.9006 52.9915 35.9006 52.4801C35.9006 51.804 35.6619 51.2472 35.1847 50.8097C34.7131 50.3722 34.0114 50.1534 33.0795 50.1534H29.8835V54.9687Z" fill="#E2B11D"/>
        <path d="M50.7024 59.4943V51.9091H53.7876V65H50.7962V62.6733H50.6598C50.3643 63.4062 49.8786 64.0057 49.2024 64.4716C48.532 64.9375 47.7053 65.1704 46.7223 65.1704C45.8643 65.1704 45.1058 64.9801 44.4467 64.5994C43.7933 64.2131 43.282 63.6534 42.9126 62.9205C42.5433 62.1818 42.3587 61.2898 42.3587 60.2443V51.9091H45.4439V59.767C45.4439 60.5966 45.6712 61.2557 46.1257 61.7443C46.5803 62.233 47.1768 62.4773 47.9155 62.4773C48.37 62.4773 48.8104 62.3665 49.2365 62.1449C49.6626 61.9233 50.0121 61.5937 50.2848 61.1562C50.5632 60.7131 50.7024 60.1591 50.7024 59.4943Z" fill="#E2B11D"/>
        <path d="M56.7898 65V63.0398L63.5398 54.5767V54.4659H57.0114V51.9091H67.3153V54.0142L60.8892 62.3324V62.4432H67.5369V65H56.7898Z" fill="#E2B11D"/>
        <path d="M70.2663 65V63.0398L77.0163 54.5767V54.4659H70.4879V51.9091H80.7919V54.0142L74.3658 62.3324V62.4432H81.0135V65H70.2663Z" fill="#E2B11D"/>
        <path d="M93.1648 47.5455V65H90.0028V47.5455H93.1648Z" fill="#E2B11D"/>
        <path d="M99.5376 57.3295V65H96.4524V51.9091H99.4013V54.1335H99.5547C99.8558 53.4006 100.336 52.8182 100.995 52.3864C101.66 51.9545 102.481 51.7386 103.458 51.7386C104.362 51.7386 105.148 51.9318 105.819 52.3182C106.495 52.7045 107.018 53.2642 107.387 53.9972C107.762 54.7301 107.947 55.6193 107.941 56.6648V65H104.856V57.142C104.856 56.267 104.629 55.5824 104.174 55.0881C103.725 54.5937 103.103 54.3466 102.308 54.3466C101.768 54.3466 101.288 54.4659 100.867 54.7045C100.452 54.9375 100.126 55.2756 99.8871 55.7187C99.6541 56.1619 99.5376 56.6989 99.5376 57.3295Z" fill="#E2B11D"/>
        <path d="M141 66.5C141 33.4999 125 36 125 36V77C125 77 129.5 76.6972 129.5 78.5C129.5 80.5 124 82.5 128.5 82.5C133 82.5 141 83.5 141 66.5Z" fill="#1A1A1A"/>
        <path d="M0 41C0 38.2386 2.23858 36 5 36H10C12.7614 36 15 38.2386 15 41C15 43.7614 12.7614 46 10 46H5C2.23858 46 0 43.7614 0 41Z" fill="#1A1A1A"/>
        <path d="M83 13.3168L56 13.317C56 13.317 83 -7 91.5 3.31688C91.9625 3.87822 92.4135 4.7038 92.5197 5.00001C95.5 13.317 83 13.3168 83 13.3168Z" fill="#1A1A1A"/>
        </svg>
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
            background: "white",
            borderRadius: 10,
            border: "1px #D7D7D7 solid",
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
            background: "white",
            borderRadius: 10,
            border: "1px #D7D7D7 solid",
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
            background: "white",
            borderRadius: 10,
            border: "1px #D7D7D7 solid",
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
        background: "#E2B11D",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        display: "inline-flex",
        cursor: "pointer"
        }}
    >
        <div
        className="SignUp"
        style={{
            color: "black",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: 500,
            wordWrap: "break-word",
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
            background: "white",
            borderRadius: 10,
            border: "1px #D7D7D7 solid",
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
            color: '#4E4E4E', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' 
        }}
        >
        Already have an account?{" "}
        </span>
        <span
        onClick={() => props.transitionOutPage(0, undefined)}
        style={{
            color: '#4E4E4E', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', cursor: "pointer"
        }}
        >
        Log in
        </span>
    </div>
    </div>
    )
}
export default SignUp;
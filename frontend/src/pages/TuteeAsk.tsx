import React from 'react';
import NavBar from './NavBar';

function TuteeAsk() {
    return (
            <div
    className="TuteeHomePage "
    style={{ width: 390, height: 844, position: "relative", background: "white" }}
    >
    <NavBar/>
    <div
        className="Frame139"
        style={{
        left: 30,
        top: 60,
        position: "absolute",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
        display: "inline-flex",
        }}
    >
        <div
        className="Tutee"
        style={{
            color: "black",
            fontSize: 24,
            fontFamily: "Inter",
            fontWeight: "700",
            wordWrap: "break-word",
        }}
        >
        Tutee
        </div>
        <div
        className="Group58"
        style={{ width: 64, height: 29, position: "relative" }}
        >
        <div
            className="Frame130"
            style={{
            width: 64,
            height: 29,
            left: 0,
            top: 0,
            position: "absolute",
            borderRadius: 20,
            border: "1px #C2C2C2 solid",
            }}
        />
        <div
            className="Ellipse19"
            style={{
            width: 19,
            height: 19,
            left: 40,
            top: 5,
            position: "absolute",
            background: "#DF7D36",
            borderRadius: 9999,
            }}
        />
        <div
            className="Ellipse20"
            style={{
            width: 19,
            height: 19,
            left: 5,
            top: 5,
            position: "absolute",
            borderRadius: 9999,
            border: "1px #C2C2C2 solid",
            }}
        />
        </div>
    </div>
    <div
        className="AskAQuestion"
        style={{
        left: 30,
        top: 129,
        position: "absolute",
        color: "black",
        fontSize: 18,
        fontFamily: "Inter",
        fontWeight: "500",
        wordWrap: "break-word",
        }}
    >
        Ask a question
    </div>
    <div
        className="Frame141"
        style={{
        height: 344,
        padding: 15,
        left: 30,
        right: 30,
        top: 161,
        position: "absolute",
        background: "#F6E8Bd",
        borderRadius: 10,
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 276,
        display: "inline-flex",
        }}
    >
        <div
        className="AskHere"
        style={{
            color: "#858585",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
        }}
        >
        ask here ...
        </div>
        <div
        className="200"
        style={{
            color: "#858585",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
        }}
        >
        0/200
        </div>
    </div>
    <div
        className="Frame96"
        style={{
        width: 330,
        height: 47,
        paddingLeft: 87,
        paddingRight: 87,
        paddingTop: 16,
        paddingBottom: 16,
        left: 25,
        top: 682,
        position: "absolute",
        background: "#E4E4E4",
        borderRadius: 10,
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#E2B11D",
        alignItems: "center",
        gap: 10,
        display: "inline-flex",
        }}
    >
        <div
        className="ChooseTopic"
        style={{
            color: "black",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
        }}
        >
        Choose Topic
        </div>
    </div>
    </div>
    
    )
}

export default TuteeAsk
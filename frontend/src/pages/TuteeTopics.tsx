import React from 'react';
import NavBar from './NavBar';

function TuteeTopics(props: {setScreenId: (screenId: number) => void}) {

    return (
            <div
    className="TuteeHomePage container"
    style={{ width: 390, height: 844, position: "relative", background: "white" }}
    >
    <NavBar/>
    <div
        className="ChooseTopic"
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
        Choose Topic</div>
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
            onClick={() => props.setScreenId(0)}
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
        className="Group59"
        style={{
        width: 145,
        height: 464,
        left: 30,
        top: 171,
        position: "absolute",
        }}
    >
        <input
        type="checkbox"
        className="Frame100"
        style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
            borderRadius: 5,
            border: "1px black solid",
        }}
        />
        <input
        type="checkbox"
        className="Frame101"
        style={{
            width: 24,
            height: 24,
            left: 0,
            top: 44,
            position: "absolute",
            borderRadius: 5,
            border: "1px black solid",
        }}
        />
        <input
        type="checkbox"
        className="Frame102"
        style={{
            width: 24,
            height: 24,
            left: 0,
            top: 88,
            position: "absolute",
            borderRadius: 5,
            border: "1px black solid",
        }}
        />
        <input
        type="checkbox"
        className="Frame103"
        style={{
            width: 24,
            height: 24,
            left: 0,
            top: 132,
            position: "absolute",
            borderRadius: 5,
            border: "1px black solid",
        }}
        />
        <input
        type="checkbox"
        className="Frame104"
        style={{
            width: 24,
            height: 24,
            left: 0,
            top: 176,
            position: "absolute",
            borderRadius: 5,
            border: "1px black solid",
        }}
        />
        <input
        type="checkbox"
        className="Frame105"
        style={{
            width: 24,
            height: 24,
            left: 0,
            top: 220,
            position: "absolute",
            borderRadius: 5,
            border: "1px black solid",
        }}
        />
        <input
        type="checkbox"
        className="Frame106"
        style={{
            width: 24,
            height: 24,
            left: 0,
            top: 264,
            position: "absolute",
            borderRadius: 5,
            border: "1px black solid",
        }}
        />
        <input
        type="checkbox"
        className="Frame107"
        style={{
            width: 24,
            height: 24,
            left: 0,
            top: 308,
            position: "absolute",
            borderRadius: 5,
            border: "1px black solid",
        }}
        />
        <input
        type="checkbox"
        className="Frame108"
        style={{
            width: 24,
            height: 24,
            left: 0,
            top: 352,
            position: "absolute",
            borderRadius: 5,
            border: "1px black solid",
        }}
        />
        <input
        type="checkbox"
        className="Frame109"
        style={{
            width: 24,
            height: 24,
            left: 0,
            top: 396,
            position: "absolute",
            borderRadius: 5,
            border: "1px black solid",
        }}
        />
        <input
        type="checkbox"
        className="Frame110"
        style={{
            width: 24,
            height: 24,
            left: 0,
            top: 440,
            position: "absolute",
            borderRadius: 5,
            border: "1px black solid",
        }}
        />
        <div
        className="Academics"
        style={{
            left: 38,
            top: 1,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
        }}
        >
        Academics
        </div>
        <div
        className="Technology"
        style={{
            left: 38,
            top: 45,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
        }}
        >
        Technology
        </div>
        <div
        className="Health"
        style={{
            left: 38,
            top: 89,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
        }}
        >
        Health
        </div>
        <div
        className="Fitness"
        style={{
            left: 38,
            top: 133,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
        }}
        >
        Fitness
        </div>
        <div
        className="Cooking"
        style={{
            left: 38,
            top: 177,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
        }}
        >
        Cooking
        </div>
        <div
        className="Fashion"
        style={{
            left: 38,
            top: 221,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
        }}
        >
        Fashion
        </div>
        <div
        className="Sports"
        style={{
            left: 38,
            top: 265,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
        }}
        >
        Sports
        </div>
        <div
        className="Business"
        style={{
            left: 38,
            top: 309,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
        }}
        >
        Business
        </div>
        <div
        className="ArtDesign"
        style={{
            left: 38,
            top: 353,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
        }}
        >
        Art & Design
        </div>
        <div
        className="Gaming"
        style={{
            left: 38,
            top: 397,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
        }}
        >
        Gaming
        </div>
        <div
        className="Finance"
        style={{
            left: 38,
            top: 441,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
        }}
        >
        Finance
        </div>
    </div>
    <div
        className="Frame96"
        onClick={() => props.setScreenId(3)}
        style={{
        width: 330,
        height: 47,
        paddingLeft: 87,
        paddingRight: 87,
        paddingTop: 16,
        paddingBottom: 16,
        left: 30,
        top: 682,
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
        }}
    >
        <div
        className="Post"
        style={{
            color: "black",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
        }}
        >
        Post
        </div>
    </div>
    <div
        className="Frame142"
        style={{
        width: 390,
        height: 56,
        left: 0,
        top: 580,
        position: "absolute",
        background: "white",
        boxShadow:
            "13.699999809265137px 13.699999809265137px 13.699999809265137px ",
        filter: "blur(50px)",
        }}
    />
    </div>

    )
}

export default TuteeTopics
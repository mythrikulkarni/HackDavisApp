import React from "react";

function TutorReview(props: {setScreenId: (screenId: number) => void}) {
    return (
            <div
    className="TutorReview container"
    style={{
        width: 390,
        height: 844,
        position: "relative",
        background: "#FAF9F6",
    }}
    >
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
        top: 697,
        position: "absolute",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px black solid",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        display: "inline-flex",
        cursor: "pointer"
        }}
    >
        <div
        className="RePostQuestion"
        style={{
            color: "black",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
        }}
        >
        Re-Post Question
        </div>
    </div>
    <div
        className="Frame145"
        onClick={() => props.setScreenId(0)}
        style={{
        width: 330,
        height: 47,
        paddingLeft: 87,
        paddingRight: 87,
        paddingTop: 16,
        paddingBottom: 16,
        left: 30,
        top: 635,
        position: "absolute",
        background: "#1A1A1A",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        display: "inline-flex",
        cursor: "pointer"
        }}
    >
        <div
        className="ReturnHome"
        style={{
            color: "#E9E9E9",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
        }}
        >
        Return Home
        </div>
    </div>
    <div
        className="Group62"
        style={{ width: 208, height: 35, left: 92, top: 462, position: "absolute" }}
    ></div>
    <div
        className="HowWellDidTheTutorDo"
        style={{
        left: 80,
        top: 425,
        position: "absolute",
        color: "#1A1A1A",
        fontSize: 18,
        fontFamily: "Inter",
        fontWeight: "500",
        wordWrap: "break-word",
        }}
    >
        How well did the Tutor do?
    </div>
    <div
        className="Frame144"
        style={{
        width: 330,
        paddingTop: 80,
        left: 30,
        top: 60,
        position: "absolute",
        background: "#F6E8BD",
        borderRadius: 10,
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 90,
        display: "inline-flex",
        }}
    >
        <div
        className="Frame146"
        style={{
            width: 100,
            height: 100,
            position: "relative",
            background: "#1A1A1A",
            borderRadius: 8,
            overflow: "hidden",
        }}
        >
        <div
            className="P"
            style={{
            left: 37,
            top: 26,
            position: "absolute",
            color: "white",
            fontSize: 40,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
            }}
        >
            P
        </div>
        </div>
        <div
        className="Frame151"
        style={{
            width: 330,
            height: 55,
            position: "relative",
            background: "#E2B11D",
            overflow: "hidden",
        }}
        >
        <div
            className="PatrickNelson"
            style={{
            left: 15,
            top: 18,
            position: "absolute",
            color: "#1A1A1A",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
            }}
        >
            Patrick Nelson
        </div>
        <div
            className="Frame143"
            style={{
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 8,
            paddingBottom: 8,
            left: 211,
            top: 12,
            position: "absolute",
            background: "#F6E8BD",
            borderRadius: 10,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
            cursor: "pointer",
            }}
        >
            <div
            className="AddContact"
            style={{
                color: "#1A1A1A",
                fontSize: 14,
                fontFamily: "Roboto",
                fontWeight: "400",
                wordWrap: "break-word",
            }}
            >
            Add Contact
            </div>
        </div>
        </div>
    </div>
    <input
    className="Frame160"
    style={{
        width: 330,
        height: 119,
        padding: 15,
        left: 30,
        top: 462,
        position: "absolute",
        background: "#D2D2D2",
        borderRadius: 10,
        overflow: "hidden",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
        display: "inline-flex",
        color: "#676767",
        fontSize: 14,
        fontFamily: "Inter",
        fontWeight: "400",
        wordWrap: "break-word",
    }}
    placeholder="Leave Review"
    type="text"
/>
    </div>
    )
}

export default TutorReview
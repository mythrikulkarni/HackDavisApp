import React from 'react';
import axios from 'axios';

function Default(props: {user_id: number, transitionPage: (screenId: number, userId?: number) => void,
        transitionOutPage: (screenId: number, access_token?: string) => void
}) {
  const [isTutor, setIsTutor] = React.useState(false);

  const toggleIsTutor = () => {
    setIsTutor((prevIsTutor) => {
      return !prevIsTutor;
    })
  }

  const clearForm = () => {
    setIsTutor(false);
  }

  const submitForm = () => {
    let formData = new FormData();
    formData.append("step", "3");
    formData.append("user_id", props.user_id.toString());
    if (isTutor) {
      formData.append("is_tutor", "yes");
    }

    axios.post("http://localhost:8000/api/user_auth/", formData).then((response) => {
        console.log("Success");
        clearForm();
        props.transitionOutPage(1, response.data.access_token as string);
    })
  }

  const getBackgroundColor = (option: string) => {
    if (option == "tutor") {
      if (isTutor) {
        return "#F5CE57";
      } else {
        return "#F6E8BD";
      }
    } else {
      //Tutee
      if (isTutor) {
        return "#F6E8BD";
      } else {
        return "#F5CE57";
      }
    }
  }
  return (
    <div
      className="SignUp container"
      style={{
        width: 390,
        height: 844,
        position: 'relative',
        background: "#FAF9F6"
      }}
    >
      <div
        className="SelectDefaultRole"
        style={{
          left: 30,
          top: 60,
          position: 'absolute',
          color: 'black',
          fontSize: 24,
          fontFamily: 'Inter',
          fontWeight: '700',
          wordWrap: 'break-word'
        }}
      >
        Select default role
      </div>

      <div
        className="YourDefaultRoleIsThePageYouAlwaysLoginWithRolesCanBeSwitched"
        style={{
          width: 330,
          left: 30,
          top: 94,
          position: 'absolute',
          color: "#4E4E4E",
          fontSize: 14,
          fontFamily: 'Inter',
          fontWeight: '400',
          wordWrap: 'break-word'
        }}
      >
        Your default role is the page you always login with. Roles can be switched.
      </div>

      <div
        className="Frame96"
        onClick={() => {submitForm();}}
        style={{
          width: 330,
          height: 47,
          paddingLeft: 87,
          paddingRight: 87,
          paddingTop: 16,
          paddingBottom: 16,
          left: 30,
          top: 747,
          position: 'absolute',
          background: "#E2B11D",
          borderRadius: 10,
          overflow: 'hidden',
          border: '1px solid',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          display: 'inline-flex',
          cursor:"pointer",
        }}
      >
        <div
          className="Done"
          style={{
            color: 'black',
            fontSize: 14,
            fontFamily: 'Inter',
            fontWeight: '600',
            wordWrap: 'break-word'
          }}
        >
          Done
        </div>
      </div>

      <div
        className="Frame113"
        onClick={() => {toggleIsTutor();}}
        style={{
          width: 330,
          height: 66,
          paddingTop: 22,
          paddingBottom: 22,
          paddingLeft: 24,
          paddingRight: 261,
          left: 30,
          top: 162,
          position: 'absolute',
          borderRadius: 10,
          overflow: 'hidden',
          border: '1px black solid',
          justifyContent: 'flex-start',
          alignItems: 'center',
          display: 'inline-flex',
          backgroundColor: getBackgroundColor("tutor"),
          cursor:"pointer",
        }}
      >
        <div
          className="Mentor"
          style={{
            color: 'black',
            fontSize: 18,
            fontFamily: 'Inter',
            fontWeight: '400',
            wordWrap: 'break-word'
          }}
        >
          Mentor
        </div>
      </div>

      <div
        className="Frame114"
        onClick={() => {toggleIsTutor();}}
        style={{
          width: 330,
          height: 66,
          paddingTop: 22,
          paddingBottom: 22,
          paddingLeft: 24,
          paddingRight: 257,
          left: 30,
          top: 248,
          position: 'absolute',
          borderRadius: 10,
          overflow: 'hidden',
          border: '1px black solid',
          justifyContent: 'flex-start',
          alignItems: 'center',
          display: 'inline-flex',
          backgroundColor: getBackgroundColor("tutee"),
          cursor:"pointer",
        }}
      >
        <div
          className="Mentee"
          style={{
            left: 24,
            top: 22,
            color: 'black',
            fontSize: 18,
            fontFamily: 'Inter',
            fontWeight: '400',
            wordWrap: 'break-word'
          }}
        >
          Mentee
        </div>
      </div>
    </div>
  );
}

export default Default;
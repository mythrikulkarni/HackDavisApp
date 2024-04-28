import React from "react";
import TutorHomepage from "./TutorHomepage";
import TuteeAsk from "./TuteeAsk";
import TuteeTopics from "./TuteeTopics";
import TuteeWait from "./TuteeWait";
import axios from "axios";

function TutorTutee(props: {access_token: string}) {
    const [screenId, setScreenId] = React.useState(-1);
    const [questionId, setQuestionId] = React.useState(-1);

    React.useEffect(() => {
        axios.get("http://localhost:8000/api/user_config/", {
            params: {
                access_token: props.access_token
            }

        }).then((response) => {
            if (response.data.type as string == "tutor") {
                setScreenId(0);
            } else {
                setScreenId(1);
            }
        })
    }, [])

    if (screenId == 0) {
        return <TutorHomepage setScreenId={setScreenId} />
    } else if (screenId == 1) {
        return <TuteeAsk setScreenId={setScreenId} access_token={props.access_token}
            setQuestionId={setQuestionId} />
    } else if (screenId == 2) {
        return <TuteeTopics />
    } else if (screenId == 3) {
        return <TuteeWait />
    } else {
        return <div>Loading...</div>
    }
}

export default TutorTutee;
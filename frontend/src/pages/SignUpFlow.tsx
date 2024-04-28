import React from "react";

import SignUp from "./SignUp";
import Topics from "./Topics";
import Default from "./Default";

function SignUpFlow(props: {transitionOutPage: (screenId: number, access_key?: string) => void}){
    const [screenId, setScreenId] = React.useState(0);
    const [userId, setUserId] = React.useState(-1);

    const transitionPage = (screenId: number, userId?: number) => {
        setScreenId(screenId);
        if (userId != undefined) {
            setUserId(userId);
        }
    }

    if (screenId == 0) {
        return <SignUp transitionPage={transitionPage} transitionOutPage={props.transitionOutPage} />
    } else if (screenId == 1) {
        return <Topics user_id={userId} transitionPage={transitionPage} />
    } else if (screenId == 2) {
        return <Default user_id={userId} transitionPage={transitionPage}
            transitionOutPage={props.transitionOutPage} />
    } else {
        return <div>Finished Sign Up</div>
    }
}

export default SignUpFlow;
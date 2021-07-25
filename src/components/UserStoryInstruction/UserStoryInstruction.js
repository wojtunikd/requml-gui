import React from "react";
import styles from "./UserStoryInstruction.module.css";

import { ReactComponent as ProcessGraphic } from "./process.svg";

const UserStoryInstruction = () => {
    return (
        <div className={styles.UserStoryInstruction}>
            <ProcessGraphic className={styles.UserStoryGraphic} />
            <div className={styles.UserStoryDescription}>
                <h2>What is a user story?</h2>
                <p>A user story is an informal description of a software functionality written in a natural language. The format of a user story expression is usually predefined and must be followed for all user stories. At ReqUML, we use the most common syntax: <i>As a/an (actor), I (action verb) to (functionality).</i></p>
                <p>Some requirements engineers require an additional "benefits" part of a user story expression that follows the functionality, however for the purpose of this tool and further specification analysis, providing the actor and the desired functionality should be sufficient.</p>
            </div>
        </div>
    )
}

export default UserStoryInstruction;
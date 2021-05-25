import React from "react";
import styles from "./UserStoryInstruction.module.css";

import { ReactComponent as ProcessGraphic } from "./process.svg";

const UserStoryInstruction = () => {
    return (
        <div className={styles.UserStoryInstruction}>
            <ProcessGraphic className={styles.UserStoryGraphic} />
            <div className={styles.UserStoryDescription}>
                <h2>What is a user story?</h2>
                <p>User story is...</p>
            </div>
        </div>
    )
}

export default UserStoryInstruction;
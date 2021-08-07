import React from "react";
import styles from "./WelcomeScreen.module.css";

import { ReactComponent as CollaborationGraphic } from "./new-collaboration.svg";

import LogoImage from "./logo.png";

const WelcomeScreen = () => {
    return (
        <div className={styles.WelcomeScreen}>
            <div className={styles.WelcomeTextArea}>
                <img alt="Logo" src={LogoImage} />
                <h1>ReqUML</h1>
                <h2>Automated UML Requirements Analysis</h2>
                <p>ReqUML is a modern web-based software solution for automated elicitation and analysis for system requirements based on <i>user stories</i>. Describe your software idea with user stories and generate UML class and use case diagrams automatically.</p>
                <p className={styles.CharacteristicLine}>▸ Innovative NLP techniques</p>
                <p className={styles.CharacteristicLine}>▸ Artificial neural network applied</p>
                <button className={styles.GradientButton}>Try it now</button>
            </div>
            <div className={styles.blobContainer}>
                <CollaborationGraphic />
            </div>
        </div>
    )
}

export default WelcomeScreen;
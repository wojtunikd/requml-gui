import React from "react";
import styles from "./WelcomeScreen.module.css";

import { ReactComponent as GraphIcon } from "./mindmap.svg";

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
            <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" className={styles.lgBlob}>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: "rgb(20, 125, 190)"}}></stop>
                        <stop offset="100%" style={{stopColor: "rgb(29, 39, 73)"}}></stop>
                    </linearGradient>
                </defs>
                <path id="blob" d="M389.5,297Q418,354,365,376Q312,398,260.5,427Q209,456,155.5,427.5Q102,399,65,350.5Q28,302,51.5,246.5Q75,191,95,143.5Q115,96,162.5,64Q210,32,247.5,86Q285,140,336,142.5Q387,145,374,192.5Q361,240,389.5,297Z" fill="url(#gradient)"></path>
            </svg>
        </div>
    )
}

export default WelcomeScreen;
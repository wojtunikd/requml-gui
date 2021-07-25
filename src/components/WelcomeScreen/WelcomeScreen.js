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
            <div className={styles.blobContainer}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" className={styles.lgBlob}>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: "rgb(20, 125, 190)"}}></stop>
                            <stop offset="100%" style={{stopColor: "rgb(29, 39, 73)"}}></stop>
                        </linearGradient>
                    </defs>
                    <path id="blob" fill="url(#gradient)" transform="translate(100, 100)">
                    <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="12s" 
	
	values="M63.3,-24.8C70.3,0.8,56,29.1,33.7,44.8C11.5,60.6,-18.6,63.8,-33.6,51.7C-48.6,39.5,-48.4,11.9,-40.3,-15.3C-32.2,-42.4,-16.1,-69.2,6.1,-71.2C28.2,-73.1,56.4,-50.3,63.3,-24.8Z;
	
	M53.7,-16.2C62.5,9.6,57.5,41,39.7,53.8C21.8,66.5,-9,60.7,-32.9,43.7C-56.8,26.7,-73.9,-1.4,-67.2,-24.2C-60.6,-47.1,-30.3,-64.6,-3.9,-63.3C22.5,-62,44.9,-42,53.7,-16.2Z;
	
	M63.3,-24.8C70.3,0.8,56,29.1,33.7,44.8C11.5,60.6,-18.6,63.8,-33.6,51.7C-48.6,39.5,-48.4,11.9,-40.3,-15.3C-32.2,-42.4,-16.1,-69.2,6.1,-71.2C28.2,-73.1,56.4,-50.3,63.3,-24.8Z;"/>
                    </path>
                </svg>
            </div>
        </div>
    )
}

export default WelcomeScreen;
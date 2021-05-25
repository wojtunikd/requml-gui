import React from "react";
import styles from "./InstructionStep.module.css";

const InstructionStep = props => {
    return (
        <div className={`${styles.InstructionStep} ${styles[props.backgroundShade]}`}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default InstructionStep;
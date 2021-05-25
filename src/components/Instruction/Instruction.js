import React from "react";
import styles from "./Instruction.module.css";

import InstructionStep from "../InstructionStep/InstructionStep";

const Instruction = () => {
    return (
        <div className={styles.Instruction}>
            <h2>How does it work?</h2>
            <InstructionStep 
                title="1. Prepare user stories" 
                description="Describe the requirements and functionalities of your proposed software in the format of user stories. Find out more about it below." 
                backgroundShade="BlueLight" 
            />
            <InstructionStep 
                title="2. Submit your request" 
                description="Enter up to fifty user stories to ReqUML, provide your e-mail address, pass the Captcha verification and submit your request." 
                backgroundShade="BlueLight" 
            />
            <InstructionStep 
                title="3. Receive your UML" 
                description="It may take up to a hour to analyse the requirements and generate UML diagrams. Once ready, you will receive them via email." 
                backgroundShade="BlueLight" 
            />
        </div>
    )
}

export default Instruction;
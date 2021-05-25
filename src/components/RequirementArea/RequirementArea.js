import React, { useState, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./RequirementArea.module.css";

import { TextField } from "@material-ui/core";

import RequirementList from "../RequirementList/RequirementList";

const RequirementArea = () => {
    const recaptchaRef = createRef();

	const [email, setEmail] = useState("");
	const [userStories, setUserStories] = useState([]);

    const submitRequest = async () => {
        
        if(email.length === 0) {
            return alert("Please provide your e-mail address so that we can send you the UML diagrams");
        }

        if(userStories.length === 0) return alert("Please enter at least one user story");

        for(const story of userStories) {
            if(story.role.length === 0 || story.action.length === 0) return alert("For each user story, please fill in the role and the action.");
        }

        const token = await recaptchaRef.current.getValue();

        if(!token) {
            return alert("Please pass the reCAPTCHA verification to continue with the request");
        }

        const data = JSON.stringify({ email: email, stories: JSON.stringify(userStories) });

        console.log(data);
    }

	return (
		<div className={styles.RequirementArea}>
			<h2>Analyse your software requirements {`(${userStories.length}/50)`}</h2>
			<TextField
				className={styles.UserEmail}
				name="email"
				label="Your e-mail address"
				variant="outlined"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
				required
			/>
			<RequirementList
				updateUserStories={setUserStories}
				storyField="userStories"
			/>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LcPGO8aAAAAAKLKqVSJcUkyWLrmd8aegKdOVJmJ"
            />
			<button
				className={styles.GradientButton}
				onClick={submitRequest}
			>
				Submit
			</button>
		</div>
	);
};

export default RequirementArea;

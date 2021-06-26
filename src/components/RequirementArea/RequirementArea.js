import React, { useState, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./RequirementArea.module.css";

import { TextField, CircularProgress } from "@material-ui/core";

import RequirementList from "../RequirementList/RequirementList";
import axios from "axios";

const RequirementArea = () => {
    const recaptchaRef = createRef();

	const [email, setEmail] = useState("");
	const [userStories, setUserStories] = useState([]);
    const [spinnerVisible, setSpinnerVisible] = useState(false);

    const submitRequest = async () => {

        if(email.length === 0) {
            return alert("Please provide your e-mail address so that we can send you the UML diagrams.");
        }

        if(userStories.length === 0) return alert("Please enter at least one user story.");

        for(const story of userStories) {
            if(story.role.length === 0 || story.action.length === 0 || story.verb.length === 0) return alert("For each user story, please fill in the role and the action.");
        }

        const token = await recaptchaRef.current.getValue();

        if(!token) {
            return alert("Please pass the reCAPTCHA verification to continue with the request.");
        }

        setSpinnerVisible(true);

        const data = { email: email, stories: JSON.stringify(userStories), token: token };

        axios
            .post("http://localhost:3333/api/stories", {...data})
            .then(res => {
                if(res.status === 200) {
                    setSpinnerVisible(false);
                    return alert("Success!");
                }
            })
            .catch(error => {
                setSpinnerVisible(false);
                if(error.response) {
                    return alert(error.response.data);
                }
            })
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
            <div className={styles.SubmitArea}>
                <button
                    className={styles.GradientButton}
                    onClick={submitRequest}
                >
                    Submit
                </button>
                { spinnerVisible &&
                <CircularProgress
                    size={22}
                    thickness={8}
                    value={100}
                    style={{ color: "#1D2749", margin: "0 1rem", transition: "0.2s ease-in-out" }}
                />
                }
            </div>
			
		</div>
	);
};

export default RequirementArea;

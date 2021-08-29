import React from "react";
import styles from "./RequirementLine.module.css";
import DeleteIcon from "@material-ui/icons/DeleteForeverRounded";

import { TextField, Select, FormControl, InputLabel } from "@material-ui/core";

const RequirementLine = (props) => {

	return (
		<div className={`${styles.RequirementLine} RequirementLine`}>
			<span className={styles.RoleText}>As a(n) </span>
			<TextField
				name="role"
				className={styles.RequirementRole}
				label="Role"
				variant="outlined"
				size="small"
				value={props.role}
				onChange={(event) => props.updateItem(event, props.index)}
			/>
            <FormControl variant="outlined" size="small">
                <InputLabel htmlFor="outlined-age-native-simple">Verb</InputLabel>
                <Select
                    native
                    className={styles.RequirementVerb}
                    defaultValue="want to"
                    onChange={(event) => props.updateItem(event, props.index)}
                    label="Verb"
                    inputProps={{
                        name: "verb",
                        id: "outlined-age-native-simple",
                    }}
                >
                    <option value="want to">I want to</option>
                    <option value="am able to">I am able to</option>
                    <option value="can">I can</option>
                </Select>
            </FormControl>
			<TextField
				name="action"
				className={styles.RequirementAction}
				label="Action"
				variant="outlined"
				size="small"
				value={props.action}
				onChange={(event) => props.updateItem(event, props.index)}
                style={props.index === 0 ? { marginRight: "3rem" } : {} }
			/>
			{props.canBeDeleted && (
				<DeleteIcon
					className={styles.BinIcon}
					onClick={() => props.removeItem(props.index)}
				/>
			)}
		</div>
	);
};

export default RequirementLine;

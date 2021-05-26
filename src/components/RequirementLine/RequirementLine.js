import React from "react";
import styles from "./RequirementLine.module.css";
import DeleteIcon from "@material-ui/icons/DeleteForeverRounded";

import { TextField } from "@material-ui/core";

const RequirementLine = (props) => {
	return (
		<div className={`${styles.RequirementLine} RequirementLine`}>
			<span className={styles.RoleText}>As a </span>
			<TextField
				name="role"
				className="RequirementRole"
				label="Role"
				variant="outlined"
				size="small"
				value={props.role}
				onChange={(event) => props.updateItem(event, props.index)}
			/>
			<span className={styles.ActionText}>, I </span>
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

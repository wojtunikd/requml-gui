import React, { useState } from "react";
import styles from "./RequirementList.module.css";
import AddCircleIcon from '@material-ui/icons/AddCircleRounded';

import RequirementLine from "../RequirementLine/RequirementLine";

const RequirementList = props => {
    const [inputList, setInputList] = useState([{ role: "", verb: "want to", action: "" }]);

    const appendLine = () => {
        if(inputList.length === 50) return alert("You have reached the limit of 50 user stories");
        const newInputList = [...inputList, { role: "", verb: "want to", action: "" }];
        setInputList(newInputList);
        props.updateUserStories(newInputList);
    }

    const removeLine = index => {
        const newInputList = [...inputList];
        newInputList.splice(index, 1);
        setInputList(newInputList);
        props.updateUserStories(newInputList);
    }

    const changeLineValues = (event, index) => {
        const { name, value } = event.target;
        const newInputList = [...inputList];
        newInputList[index][name] = value;
        setInputList(newInputList);
        props.updateUserStories(newInputList);
    }

    return (
        <div className={styles.RequirementList}>
            {
                inputList.map((item, i) => <RequirementLine 
                    role={item.role} 
                    verb={item.verb}
                    action={item.action} 
                    canBeDeleted={!!(inputList.length > 1 && i !== 0)} 
                    index={i}
                    key={i}
                    removeItem={removeLine}
                    updateItem={changeLineValues}
                />
            )}
            <AddCircleIcon className={styles.AddLineIcon} onClick={appendLine} />
        </div>
    )
}

export default RequirementList;
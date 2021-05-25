import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Instruction from "./components/Instruction/Instruction";
import UserStoryInstruction from "./components/UserStoryInstruction/UserStoryInstruction";
import RequirementArea from "./components/RequirementArea/RequirementArea";

import styles from "./App.module.css";

const App = () => {
    return (
        <div className={styles.App}>
            <WelcomeScreen />
            <Instruction />
            <UserStoryInstruction />
            <RequirementArea />
        </div>
    );
}

export default App;

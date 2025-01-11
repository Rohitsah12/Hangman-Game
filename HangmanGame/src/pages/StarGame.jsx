
import { Link } from "react-router-dom";
import TextInputFOrmContainer from "../components/TextInpputForm/TextInputFormContainer";

function StartGame(){
    return(
        <>
            <h1>Start Game</h1>
            {/* Your comments goes here */}
            <TextInputFOrmContainer />  
            <Link to='/play' className="text-blue-300">Play Game Link</Link>
        </>
    )
}
export default StartGame;
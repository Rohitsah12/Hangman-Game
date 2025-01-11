import { Link, useLocation } from "react-router-dom";
import MaskedText from "../MaskedText/MaskedText";

function PlayGame(){

    // const {searchParams}=useSearchParams(); //using query params

    // const {text}=useParams(); //using paths param


    const {state}=useLocation();

    // const arr=['Hello','World']
    return(
        <>
            <h1>Play Game {state.wordSelected}</h1>
            {/* {arr.map((element,idx)=> <b key={idx}>{element}</b>)} */}

            <MaskedText text={state.wordSelected} guessedLetters={[]}/>
            <Link to='/start' className="text-blue-300">start Game Link</Link>

        </>
    )
}

export default PlayGame;
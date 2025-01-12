import { Link, useLocation } from "react-router-dom";
import MaskedText from "../MaskedText/MaskedText";
import LetterButton from "../components/LetterButtons/LetterButton";
import { useState } from "react";
import HangMan from "../components/Hangman/HangMan";

function PlayGame(){

    // const {searchParams}=useSearchParams(); //using query params

    // const {text}=useParams(); //using paths param


    const {state}=useLocation();


    const [guessedLetters,setGuessedLetters] =useState([]);
    const [step,setStep]=useState(0);

    function handleLetterClick(letter){
        if(state.wordSelected.toUpperCase().includes(letter)){
            console.log('Correct');
        }
        else{
            console.log('Wrong');
            setStep(step+1);
        }
        setGuessedLetters([...guessedLetters,letter]);

    }
    //ffff
    // const arr=['Hello','World']
    return(
        <>
            <h1>Play Game</h1>
            {/* {arr.map((element,idx)=> <b key={idx}>{element}</b>)} */}


            <MaskedText text={state.wordSelected} guessedLetters={guessedLetters}/>
            <div>
                <LetterButton text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
            </div>
            <div>
                <HangMan step={step}/>
            </div>
            <Link to='/start' className="text-blue-300">start Game Link</Link>

        </>
    )
}

export default PlayGame;
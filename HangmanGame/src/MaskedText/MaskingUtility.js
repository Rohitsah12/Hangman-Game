// The word which is given as input and is expected to be guesses {originalWOrd}
//Letters which are guessed by the user already {guessedLetters}
//original word=HUMBLE
//guessed='H',"M","E";
//return "H_M_E"

export function getMaskedString(originalWord,guessedLetters){
    guessedLetters=guessedLetters.map(letter=>letter.toUpperCase());

    const guessedLetterSet= new Set(guessedLetters);

    const result=originalWord.toUpperCase().split('').map(char=>{
        if(guessedLetterSet.has(char)){
            return char;
        }
        else{
            return "_";
        }
    });//['H','_','M','_','_','E']

    return result;//"H_M_ _E"
}
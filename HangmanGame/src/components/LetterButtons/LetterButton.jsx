const alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButton({ text, guessedLetters, onLetterClick }) {
    const originalLetters = new Set(text.toUpperCase().split(""));
    const guessedLetterSet = new Set(guessedLetters);

    const buttonStyle = function (letter) {
        if (guessedLetterSet.has(letter)) {
            return originalLetters.has(letter) ? "bg-green-500" : "bg-red-500";
        }
        return "bg-blue-500"; // Default style for unguessed letters
    };

    function handleLetterClick(event){
        const characterOfTheLetter = event.target.value;
        onLetterClick?.(characterOfTheLetter);
    }   

    const buttons = alphabets.map((letter) => (
        <button
            key={`button-${letter}`}
            value={letter}
            onClick={() => onLetterClick(letter)} // Pass the clicked letter
            disabled={guessedLetterSet.has(letter)}
            className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
        >
            {letter}
        </button>
    ));

    return <>{buttons}</>;
}

export default LetterButton;

// function Button(props){
//     return (
//         <button>
//             {props.text}
//         </button>
//     );
// }
// export default Button;

import getbuttonStyling from "./getButtonStyling";

function Button({ text, onClickHandler, styleType = 'primary' ,type="button"}) {
    return (
        <button
            onClick={onClickHandler}
            className={`px-4 py-2 ${getbuttonStyling(styleType)} text-white`}
            type={type}
        >
            {text}
        </button>
    );
}


export default Button;

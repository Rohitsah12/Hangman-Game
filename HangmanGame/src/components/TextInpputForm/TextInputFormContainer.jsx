import { useState } from "react";
import TextInputForm from "./TextInpurForm";

function TextInputFOrmContainer(){

    const [inputType , setInputType ]=useState("password");

    function handlerFormSubmit(e){
        e.preventDefault();
        console.log("Form Submitted");
        
    }

    function handleTextInputChange(e){
        console.log("Text input changes");
        console.log(e.target.value);    
    }

    function handleShowHideClick(){
        console.log("Show/Hide Button Clicked");
        if(inputType==="password") setInputType("text");
        else setInputType("password");
        
    }
    return <TextInputForm 
        inputType={inputType}
        handlerFormSubmit={handlerFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
        />
}

export default TextInputFOrmContainer;
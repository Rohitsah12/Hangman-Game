import { useState } from "react";
import TextInputForm from "./TextInpurForm";
import { useNavigate } from "react-router-dom";

function TextInputFOrmContainer(){

    const [inputType , setInputType ]=useState("password");
    const [value,setValue]=useState("");


    const navigate = useNavigate(); //useNavigate is a hook that returns a navigate function

    function handlerFormSubmit(e){
        e.preventDefault();
        // console.log("Form Submitted",value);
        if(value){
            //If we had someithing valid in value then we want to go to the play page
                navigate("/play");
        }
        
    }

    function handleTextInputChange(e){
        console.log("Text input changes");
        console.log(e.target.value);    
        setValue(e.target.value);
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
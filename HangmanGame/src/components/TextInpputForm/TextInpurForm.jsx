import TextInput from "../Textinput/TextInput";
import Button from '../Button/Button';



function TextInputForm({inputType,handlerFormSubmit , handleTextInputChange,handleShowHideClick}){    //Presentation container pattern

    return (
        <form onSubmit={handlerFormSubmit}>
            <div>
                <TextInput 
                    type={inputType}
                    label="Enter a word or a phrase"
                    placeholder="Enter a word or a phrase here ..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>

            <div>
                <Button
                    styleType="warning"
                    text={inputType==="password"?"Show":"Hide"}
                    onClickHandler={handleShowHideClick}


                 />
            </div>
            <div>
                <Button 
                    styleType="primary"
                    text="Submit"
                    type="submit"
                     />


            </div>
        </form>
    )
}
export default TextInputForm;
import { React, useState, useRef, useEffect } from "react";


/*THIS IS THE CHILD COMPONENTS THAT WILL CREATE THE BUTTONS FOR THE ASNWERS&*/

//All the four answers are passed as props
const Button = (props) => {
    return(
        <div data-testid="buttonId">
            {/* Interates through the answers and creates a button for each one */}
            {props.answers.map((element) => {
                return <button key={element}>{element}</button>
            })}
        </div>
    )
}


export default Button;
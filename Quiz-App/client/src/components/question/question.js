import React from "react"

const Question = (props) => {
    

    return(
        <div>
            <br></br>
            <h1>Quiz question is: </h1>
            <h5 data-testid="question-text" dangerouslySetInnerHTML={{__html:props.question}} />
        </div>
    )
}


export default Question;
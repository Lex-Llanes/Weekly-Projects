import  { React, useState, useReducer } from "react"


const ACTION = {
    ADD_EVENT: "add-event"
}

function reducer(events, action) {
    switch(action.type){
        case ACTION.ADD_EVENT:
            return [...events, newEvent(action.payload.eventname, action.payload.eventdate, action.payload.eventdescription)]
        default:
            return events;
    }
}
//New event
function newEvent(passedEventName, passedEventDate, passedEventDescription) {
    return {id: Date.now(), eventName:passedEventName, eventDate:passedEventDate, passedeventdescription: passedEventDescription }
}



//MAIN COMPONENT
const Events = (props) => {

    //USEREDUCER
    const [events, dispatch] = useReducer(reducer, [])
    //STATES
    const [eventName, setEventName] = useState()
    const [eventDate, setEventDate] = useState()
    const [eventDescription, setDescription] = useState()


    //HANDLES SUBMIT BUTTON
    const handleEventSubmit = (event) => {
        event.preventDefault()
        dispatch({type:ACTION.ADD_EVENT, payload:{eventname: eventName, eventdate: eventDate, eventdescription: eventDescription}})
    }

    console.log(events)
    return (
        <div className="events form">
            <form onSubmit={handleEventSubmit}>
                <label for="eventName">Event Name</label>
                <br></br>
                <input
                    id="eventName"
                    type="text"
                    placeholder="Event Name"
                    value={eventName}
                    onChange={(event) => {setEventName(event.target.value)}}
                ></input>
                <br></br>

                <label for="eventDate">Event Date</label>
                <br></br>
                <input
                    id="eventDate"
                    type="text"
                    placeholder="Event Date"
                    value={eventDate}
                    onChange={(event) => {setEventDate(event.target.value)}}
                ></input>
                <br></br>

                <label for="eventDescription">Event Description</label>
                <br></br>
                <textarea
                    id="eventDescription"
                    type="text"
                    placeholder="Event Description"
                    value={eventDescription}
                    onChange={(event) => {setDescription(event.target.value)}}
                >
                </textarea>
                <br></br>

                <input type="submit"></input>
            </form>





        </div>
    )
}


export default Events;
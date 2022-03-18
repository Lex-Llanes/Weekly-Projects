import React, { useState } from 'react'

const AddEvent = (props) => {

  const [eventName, setEventName] = useState("")
  const [eventDate, setEventDate] = useState ("")
  const [eventCategory, setEventCategory] = useState("")



  const handleEventAddSubmit = async (event) => {
    //event.preventDefault()
    try {
      const body = { eventName, eventDate, eventCategory }
      const response = await fetch("http://localhost:3001/event",
        {method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(body)
        });
        console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  
  return (
    <>
        <h1>ADD EVENT FORM</h1>
        <form onSubmit={handleEventAddSubmit}>
            <input
                className="form-control"
                type="text"
                placeholder="Event Name"
                value={eventName}
                onChange={event => setEventName(event.target.value)}
            />
            <br></br>

            <input 
                className="form-control"
                type="text"
                placeholder="Event Date (mm/dd/yy)"
                value={eventDate}
                onChange={event => setEventDate(event.target.value)}
            />
            <br></br>

            <input 
                className="form-control"
                type="text"
                placeholder="Event Category"
                value={eventCategory}
                onChange={event => setEventCategory(event.target.value)}
            />
            <br></br>

          <button
            className="btn btn-success">Add</button>

        </form>
    </>

  )
}

export default AddEvent;
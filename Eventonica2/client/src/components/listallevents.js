import React, { useState, useEffect } from "react";
import EditEvent from "./editevents"


const ListAllEvents = (props) => {

    const [eventDetails, setEventDetails] = useState([])


    //Delete user
    async function deleteEvent (id) {
        try {
            const response = await fetch (`http://localhost:3001/event/${id}`,{ method: "DELETE"})
            setEventDetails(eventDetails.filter(event => event.event_id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }



    //function to get out list of users data
    async function getAllEvents(){
        const response =  await fetch("http://localhost:3001/event");
        const listOfEvents = await response.json()

        setEventDetails(listOfEvents)
    }
    //useEffect will constantly call getAllUsers() function
    useEffect(()=>{
        getAllEvents();
    }, []);

    console.log(eventDetails)

    return(
        <>

        <table className="table">
            <thead>
            <tr>
                <th>Event ID</th>
                <th>Event Name</th>
                <th>Event Date</th>
                <th>Event Categroy</th>
                <th>Edit Button</th>
                <th>Delete Button</th>
            </tr>
            </thead>
            <tbody>
            {eventDetails.map(event => (
                <tr>
                    <td>{event.event_id}</td>
                    <td>{event.event_name}</td>
                    <td>{event.event_date}</td>
                    <td>{event.event_category}</td>
                    <td> 
                        <EditEvent eventDetails={event}/> 
                    </td>
                    <button 
                        className="btn btn-danger"
                        onClick={() => deleteEvent(event.event_id)}
                    >Delete</button>
                </tr>
            ))}

            </tbody>
        </table>



        </>
    )
}


export default ListAllEvents;
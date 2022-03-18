import React, { useState } from "react";



const EditEvent = ( { eventDetails } ) => {

    const [details, setEventDetails] = useState(eventDetails.event_id)
    const [eventName,  setEventName] = useState(eventDetails.event_name)



    const handleEditButton = async (id) => {
        try {

            const body = eventName;

            const response = await fetch(`http://localhost:3001/event/${id}`, {
                method: "PUT",
                header: { "Content-Type": "appication/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.error(error.message)
        }
    }

console.log(details)
    return (
        <>
            <button 
                type="button" 
                class="btn btn-warning" 
                data-toggle="modal" 
                data-target={`#id${details}`}
            >
                Edit
            </button>


            <div id={`id${details}`} class="modal fade" role="dialog">
            <div class="modal-dialog">


                <div class="modal-content">
                <div class="modal-header">
                <h3 class="modal-title">Edit User</h3>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>

                </div>
                <div 
                    class="modal-body"
                >
                    <input
                        type="text"
                        className="form-control"
                        value={eventName}
                        onChange={event => setEventName(event.target.value)}
                    />
                </div>
                <div class="modal-footer">

                    {/* CONFIRM EDIT BUTTON */}
                    <button 
                        type="button" 
                        class="btn btn-warning" 
                        data-dismiss="modal"
                        onClick={event => handleEditButton(details)}
                    >
                        Edit
                    </button>

                    {/* CLOSE MODAL BUTTON */}
                    <button 
                        type="button" 
                        class="btn btn-danger" 
                        data-dismiss="modal"
                    >
                        Close
                    </button>
                </div>
                </div>

            </div>
            </div>
        
        </>
    )
}



export default EditEvent;
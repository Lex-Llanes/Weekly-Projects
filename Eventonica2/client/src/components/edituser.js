import React, { useState } from "react";



const EditUser = ( { userDetails }) => {

    const [details, setDetails] = useState(userDetails.id)
    const [name,  setName] = useState(userDetails.name)



    const handleEditButton = async (id) => {
        try {

            const body = name;

            const response = await fetch(`http://localhost:5000/user/${id}`, {
                method: "PUT",
                header: { "Content-Type": "appication/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.error(error.message)
        }
    }

console.log(name)
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
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div class="modal-footer">
                    <button 
                        type="button" 
                        class="btn btn-warning" 
                        data-dismiss="modal"
                        onClick={event => handleEditButton(details)}
                    >
                        Edit
                    </button>
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



export default EditUser;
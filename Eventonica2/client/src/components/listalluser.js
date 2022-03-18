import React, { useState, useEffect } from "react";
import EditUser from "./edituser"


const ListAllUsers = (props) => {

    const [userDetails, setUserDetails] = useState([])


    //Delete user
    async function deleteUser (id) {
        try {
            const response = await fetch (`http://localhost:5000/user/${id}`,{ method: "DELETE"})
            setUserDetails(userDetails.filter(user => user.id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }



    //function to get out list of users data
    async function getAllUsers(){
        const response =  await fetch("http://localhost:5000/user");
        const listOfUsers = await response.json()

        setUserDetails(listOfUsers)
    }
    //useEffect will constantly call getAllUsers() function
    useEffect(()=>{
        getAllUsers();
    }, []);

    console.log(userDetails)

    return(
        <>

        <table className="table">
            <thead>
            <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Edit Button</th>
                <th>Delete Button</th>
            </tr>
            </thead>
            <tbody>
            {userDetails.map(user => (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td> 
                        <EditUser userDetails={user}/> 
                    </td>
                    <button 
                        className="btn btn-danger"
                        onClick={() => deleteUser(user.id)}
                    >Delete</button>
                </tr>
            ))}

            </tbody>
        </table>



        </>
    )
}


export default ListAllUsers;
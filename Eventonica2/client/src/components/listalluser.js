import React, { useState, useEffect } from "react";


const ListAllUsers = (props) => {

    const [userDetails, setUserDetails] = useState([])



    async function getAllUsers(){
        const response =  await fetch("http://localhost:5000/user");
        const listOfUsers = await response.json()

        setUserDetails(listOfUsers)
    }

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
                    <td>Edit</td>
                    <button className="btn btn-danger">Delete</button>
                </tr>
            ))}

            </tbody>
        </table>



        </>
    )
}


export default ListAllUsers;
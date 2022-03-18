import React, { useState } from 'react'

const AddUser = (props) => {

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState ("")



  const handleAddUserSubmit = async (event) => {
    event.preventDefault()
    try {
      const body = { userName, userEmail }
      const response = await fetch("http://localhost:5000/user",
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
        <h1>inputUser</h1>
        <form onSubmit={handleAddUserSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Add user"
            value={userName}
            onChange={event => setUserName(event.target.value)}
          />
          <br></br>
          <input 
            className="form-control"
            type="text"
            placeholder="User Email"
            value={userEmail}
            onChange={event => setUserEmail(event.target.value)}
          />

          <button
            className="btn btn-success">Add</button>

        </form>
    </>

  )
}

export default AddUser;
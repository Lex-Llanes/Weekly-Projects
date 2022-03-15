import React, { useState } from "react"



const User = (props) => {
    const [user, setUser] = useState([]);
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userId, setUserId] = useState();

    const handleUserSubmit = (event) => {
        event.preventDefault();

        const newUser = {id: userId, name: userName, email: userEmail };
        setUser(...user, newUser);
    }


    return (
        <div>
            <form onSubmit={handleUserSubmit}>
                <label for="userName">Name</label>
                <br></br>
                <input
                    id="userName"
                    type="text"
                    value={userName}
                    placeholder="Enter Name"
                    onChange={(event) => setUserName(event.target.value)}
                >
                </input>
                <br></br>

                <label for="userEmail">Email</label>
                <br></br>
                <input
                    id="userEmail"
                    type="text"
                    value={userEmail}
                    placeholder="Enter Email"
                    onChange={(event) => setUserEmail(event.target.value)}
                >
                </input>
                <br></br>

                <label for="userId">ID</label>
                <br></br>
                <input
                    id="userId"
                    type="text"
                    value={userId}
                    placeholder="userId"
                    onChange={(event) => setUserId(event.target.value)}
                >
                </input>
            </form>
        </div>
    )
}

export default User;
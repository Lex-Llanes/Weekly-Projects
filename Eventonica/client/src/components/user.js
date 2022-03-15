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
                <input
                    type="text"
                    value={userName}
                    placeholder="Enter Name"
                    onChange={(event) => setUserName(event.target.value)}
                >
                </input>

                <input
                    type="text"
                    value={userEmail}
                    placeholder="Enter Email"
                    onChange={(event) => setUserEmail(event.target.value)}
                >
                </input>

                <input
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
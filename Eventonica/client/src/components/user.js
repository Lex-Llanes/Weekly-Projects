// import React, { useState } from "react"



// const User = (props) => {
//     const [user, setUser] = useState([
//         {id: "123", name: "fake"},
//         {id: "456", name: "real"},
//     ]);
//     const [userName, setUserName] = useState();
//     const [userEmail, setUserEmail] = useState();
//     const [userId, setUserId] = useState();

//     const handleUserSubmit = (event) => {
//         event.preventDefault();

//         //const newUser = {id: userId, name: userName, email: userEmail };
//         setUser([...user, {id: userId, name: userName, email: userEmail }]);
//     }

//     console.log(userName)
//     console.log(userEmail)
//     console.log(userId)
//     console.log(user)

//     return (
//         <div>
//             <form onSubmit={handleUserSubmit}>
//                 <label for="userName">Name</label>
//                 <br></br>
//                 <input
//                     id="userName"
//                     type="text"
//                     value={userName}
//                     placeholder="Enter Name"
//                     onChange={(event) => setUserName(event.target.value)}
//                 >
//                 </input>
//                 <br></br>

//                 <label for="userEmail">Email</label>
//                 <br></br>
//                 <input
//                     id="userEmail"
//                     type="text"
//                     value={userEmail}
//                     placeholder="Enter Email"
//                     onChange={(event) => setUserEmail(event.target.value)}
//                 >
//                 </input>
//                 <br></br>

//                 <label for="userId">ID</label>
//                 <br></br>
//                 <input
//                     id="userId"
//                     type="text"
//                     value={userId}
//                     placeholder="userId"
//                     onChange={(event) => setUserId(event.target.value)}
//                 >
//                 </input>
//                 <br></br>
//                 <br></br>

//                 <input type="submit"></input>
//             </form>
//         </div>
//     )
// }

// export default User;
















import React, { useState, useReducer } from "react"

const ACTIONS = {
    ADD_USER: "add-user"
}

function reducer (users, action) {
    switch (action.type) {
        case ACTIONS.ADD_USER:
            return [...users, newUser(action.payload.name, action.payload.email)]
        default:
            return users;
    }
}

function newUser (passedUserName, passedUserEmail){
    return {id: Date.now(), name: passedUserName, email: passedUserEmail }
}


const User = (props) => {

    const [users, dispatch] = useReducer(reducer, [])

    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userId, setUserId] = useState();

    const handleUserSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: ACTIONS.ADD_USER, payload: { name: userName, email: userEmail}})

    }

    console.log(users)
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


                <input type="submit"></input>
            </form>
        </div>
    )
}

export default User;
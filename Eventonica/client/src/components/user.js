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


//Actions used by reducer to see which switch to fire, the dispatch will pick one to send to reducer()
const ACTIONS = {
    ADD_USER: "add-user"
}


//Reducer will run a switch case depending on what action we pass it
function reducer (users, action) {
    switch (action.type) {
        case ACTIONS.ADD_USER:
            return [...users, newUser(action.payload.name, action.payload.email)]
        default:
            return users;
    }
}

//Created a function that simply handles returning the data we need for making a new user
function newUser (passedUserName, passedUserEmail){
    return {id: Date.now(), name: passedUserName, email: passedUserEmail }
}


const User = (props) => {
    /*
    Our useReducer hook
        ##users -> the variable we keep our data in
        ##dispatch -> the function responsible for calling the reducer() function
            because reducer() is outside the score of our component's function aka. const User
        ##reducer -> the function which will handle all the different functionalities we need
        ##[] -> this parameter can be anyting usually an object but because we will need to store several object
            we will set it as an array to hold all our objects
    */
    const [users, dispatch] = useReducer(reducer, [])
    

    //OUR STATES
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userId, setUserId] = useState();


    //HANDLES THE SUBMIT BUTTON - it calls dispatch so that reducer handles our functionality
    const handleUserSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: ACTIONS.ADD_USER, payload: { name: userName, email: userEmail}})
    }

    console.log(users)



    //OUR RETURN
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
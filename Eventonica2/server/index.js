const express = require("express"); 
const cors = require("cors")
const pool = require("./db")

const app = express();

//Middleware
app.use(cors())
app.use(express.json()) // --> Allows us to access the req.body


//USER ROUTES//
/*CREATE a user*/
app.post('/user', async (req, res) => {
    try {
        //Destructuring the json body { name: "" , email: ""}
        const { userName } = req.body; 
        const { userEmail } = req.body;
        const newUser = await pool.query(
            //Insert data into users table, colums name and email VALUES $1 means the first value in the upcoming array aka name
            'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *', [userName, userEmail]
        )
        res.json(newUser.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})


/*GET all users*/
app.get('/user', async (req, res) => {
    try {
        //Create a variable that calls the data we want from the database
        const allusers = await pool.query("SELECT * FROM users");
        //Then send as a response the data rows
        res.json(allusers.rows);
    } catch {

    }
})


/*GET a user*/
app.get('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE id = $1" , [id]);

        res.json(user.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})


/*UPDATE a user*/
app.put('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updateUser = await pool.query("UPDATE users SET name = $1 WHERE id = $2", [name, id])
        
        res.json("The user was updated");
    } catch (error) {
        console.error(error.message)
    }
})


/*DELETE a user*/
app.delete('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [id]);
        res.json("User was delete")
    } catch (error) {
        console.error(error.message)
    }
})











//EVENTS ROUTES//
/*CREATE a event*/
app.post('/event', async (req, res) => {
    try {
        //Destructuring the json body { name: "" , email: ""}
        const { eventName } = req.body; 
        const { eventDate } = req.body;
        const { eventCategory } = req.body;
        const newEvent = await pool.query(
            'INSERT INTO events(event_name, event_date, event_category) VALUES($1, $2, $3) RETURNING *', [eventName, eventDate, eventCategory]
        )
        res.json(newEvent.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})


/*GET all events*/
app.get('/user', async (req, res) => {
    try {
        //Create a variable that calls the data we want from the database
        const allusers = await pool.query("SELECT * FROM users");
        //Then send as a response the data rows
        res.json(allusers.rows);
    } catch {

    }
})


/*GET a event*/
app.get('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE id = $1" , [id]);

        res.json(user.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})


/*UPDATE a event*/
app.put('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updateUser = await pool.query("UPDATE users SET name = $1 WHERE id = $2", [name, id])
        
        res.json("The user was updated");
    } catch (error) {
        console.error(error.message)
    }
})


/*DELETE a event*/
app.delete('/event/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM events WHERE id = $1", [id]);
        res.json("Event was delete")
    } catch (error) {
        console.error(error.message)
    }
})












app.listen(5000, () => {
    console.log("Server is running on port 5000")
})
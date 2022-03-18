var express = require('express');
var router = express.Router();
//Importing the database connection
var db = require('../db/db-connection.js'); 

let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];

//Get users
router.get('/', async function (req, res, next) {
  try {
    const users = await db.any('SELECT * FROM users', [true]);
    res.send(users);
  } catch (event) {
    return res.status(400).json({ event });
  }
});


/* Add users listing. */

router.post('/', async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email
  };
  console.log(user);
  try {
    const createdUser = await db.one(
      'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',
      [user.name, user.email]
    );
    console.log(createdUser);
    res.send(createdUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* Delete users listing. */

//Parameterized queries use placeholders instead of directly writing the
//values into the statements. Parameterized queries increase security and performance.

router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
  const userId = req.params.id;

  try {
    await db.none("DELETE FROM users WHERE id=$1", [userId]);
    res.send({ status: "success" });
  } catch (e) {
  return res.status(400).json({ e });
  }
});
  

module.exports = router;

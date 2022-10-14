import express from 'express';
import cors from 'cors';
import db from './db/db-connection.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
//const db = import('./db/db-connection.js');

dotenv.config();
const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const CONTACTS = [

  { id: 1, name: 'Lisa Lee', email: 'lisalee@gmail.com', phoneNumber: "" },
  { id: 2, name: 'Eileen Long', email: 'elong@gmail.com', phoneNumber: "" },
  { id: 3, name: 'Andrea Rivera', email: 'andrearivera@gmail.com', phoneNumber: "" },
  { id: 4, name: 'Cristina Rodriguez', email: 'crodriguez@gmail.com', phoneNumber: ""},
  { id: 5, name: 'Paola Molina', email: 'pmolina@gmail.com', phoneNumber: "" },
];

app.get("/api/users", async (req, res) => {
    try {
      const {rows:users} = await db.query('SELECT * FROM users');
      res.json(users);
    } catch (e) {
        console.log("E", e);
      return res.status(400).json({ e });
    }
  });

// create the get request
app.get('/api/users', cors(), async (req, res) => {
  res.json(CONTACTS);
});

// create the POST request
app.post('/api/users', async (req, res) => {
  console.log("reqbody", req.body);
  const contacts = {
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
  }
  console.log(contacts);
  try {
    const createdContacts = await db.query(
      'INSERT INTO users(name, email, phonenumber) VALUES($1, $2, $3) RETURNING *',
      [contacts.name, contacts.email, contacts.phone_number]
    );
    console.log(req.body);
    res.send(createdContacts);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});


app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
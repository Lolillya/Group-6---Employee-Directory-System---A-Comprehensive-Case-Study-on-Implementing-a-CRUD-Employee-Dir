const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

//cors allows the server to use our app?
app.use(cors());
//in order the read the json object sent from app.js..
app.use(express.json());

//in logic programming, these are facts about the connection between the front end "app.js" and our backend database "db_sevida"
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "db-sample",
});

app.listen(3001, () => {
  console.log("running...");
});

//And below are the funtions and rules in requesting and sending data between front end and backend

//this functions request the data from the inputs and send it to our database...
app.post("/save", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const dept = req.body.department;
  const position = req.body.position;

  db.query(
    "INSERT INTO employees (empFirstName, empLastName, empAge, empDepartment, empPosition) VALUES (?,?,?,?,?)",
    [firstName, lastName, age, dept, position],
    (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    }
  );
});

//get request for the employee data
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      err.status(500).send("Error fetching data from MySQL");
      return;
    } else {
      return res.json(result);
    }
  });
});

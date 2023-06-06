require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

//Our Database Config
const DB_HOST = process.env.DB_HOST;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

//Connection to MySQL database


//Get all employees from the database
app.get("/employees", (req, res) => {
    db.query("SELECT * from employees", (error, data) => {
      if (error) {
        return res.json({ status: "ERROR", error });
      }
  
      return res.json(data);
    });
  });
//Add new empoyee to the database
// app.post('employees', function (req, res) {});
//Get single employee by id from the database
app.get('employees/details/:id', function (req, res) {});
//Update single employee by id from the database
app.put('employees/update/:id', function (req, res) {});
//Delete single employee by id from the database
app.delete('employees/delete/:id', function (req, res) {});
app.listen(PORT, function() {
 console.log('Restful API is running on PORT 3000');
});
app.post("employees", function (req, res) {
    let newEmployee = { ...req.body };
  
    db.query("INSERT INTO employees SET ?", newEmployee, (error, result) => {
      if (error) {
        return res.status(500).json({ status: "ERROR", error });
      }
  
      return res.json({ status: "SUCCESS" });
    });
  });
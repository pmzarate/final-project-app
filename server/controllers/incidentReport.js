const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllReports = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM incidentReport", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getReportByLocation = (req, res) => {
  // SELECT REPORTS WHERE ID = <LAT & LONG>
  let sql = "SELECT * FROM incidentReport WHERE incidentReport.id = lat & lng"

  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [req.params.id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createIncident= (req, res) => {
  // INSERT INTO INCIDENT REPORT 
  let sql = "INSERT INTO incidentReport (username, comments, lat, lng, iconmarker, dt)  VALUES (req.body.incidentReport)"
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [req.body.createIncident])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

//const updateUserById = (req, res) => {
//   // UPDATE USERS AND SET FIRST AND LAST NAME WHERE ID = <REQ PARAMS ID>
//   let sql = "UPDATE users SET first_name = ?, last_name = ? WHERE id = (req.param.id)"
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, [req.params.id])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }

// const deleteReportBy = (req, res) => {
//   // DELETE FROM USERS WHERE FIRST NAME = <REQ PARAMS FIRST_NAME>
//   let sql = "DELETE FROM users WHERE first_name = (req.param.first_name)"
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, [req.body.first_name])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//   })
// }

module.exports = {
  getAllReports,
  getReportByLocation,
  createIncident
//   updateUserById,
//   deleteUserByFirstName
}
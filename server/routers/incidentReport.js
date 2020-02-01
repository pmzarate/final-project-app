const express = require('express')
const incidentController = require('../controllers/incidentReport')
const router = express.Router()

router.get('/', incidentController.getAllReports)

router.get('/:id', incidentController.getReportByLocation)

router.post('/createIncident', incidentController.createIncident)

router.put('/:id', incidentController.createIncident)

// router.delete('/:first_name', incidentController.deleteUserByFirstName)

module.exports = router
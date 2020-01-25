const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const incidentReportRoutes = require("./routers/incidentReport");

//importing dummydata for testing server connection
//const clients = require('./clientDemographics');
const test = require("./sql/practice");

//require routes here

//calling middleware to log network activity
// const { logger } = require('./middleware');

//using express()
const app = express();
const port = process.env.PORT || 5000;

//use json format and logger middleware
app.use(bodyParser.json());
// app.use(logger);
app.use(express.static(path.join(__dirname, "atxalert/build")));

app.use(incidentReportRoutes);

// app.get('/', (req, res) => {
//     console.log('you good bro')
//     res.send(test)
// });

// app.get('/clients', (req, res) => {
//     res.send(clients)
//     console.log('sent clients array')
// })

app.listen(port, () => {
	console.log(`Web server is listening on port ${port} :D`);
});

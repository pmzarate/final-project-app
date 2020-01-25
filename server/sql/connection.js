const mysql = require("mysql");

class Connection {
	constructor() {
		if (!this.pool) {
			console.log("creating connection...");
			this.pool = mysql.createPool({
				connectionLimit: 100,
				host: "localhost",
				user: "root",
				password: "123456",
				database: "FinalProject"
			});

			return this.pool;
		}

		return this.pool;
	}
}
const instance = new Connection();

module.exports = instance;

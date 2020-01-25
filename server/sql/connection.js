const mysql = require("mysql");

class Connection {
	constructor() {
		if (!this.pool) {
			console.log("creating connection...");
			this.pool = mysql.createPool({
				connectionLimit: 100,
				host: "35.232.186.50",
				user: "root",
				password: "4DHxj3i9o6kCa6cc",
				database: "final-data"
			});

			return this.pool;
		}

		return this.pool;
	}
}
const instance = new Connection();

module.exports = instance;

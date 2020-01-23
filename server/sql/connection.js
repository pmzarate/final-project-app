const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '35.226.191.189',
        user: 'root',
        password: '123456',
        database: 'finalproject'
      })

      return this.pool
    }

    return this.pool
  }
}
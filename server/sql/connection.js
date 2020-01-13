const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '35.224.50.65',
        user: 'root',
        password: 'cI1qAqvrz4ifshKx',
        database: 'FinalProject'
      })

      return this.pool
    }

    return this.pool
  }
}
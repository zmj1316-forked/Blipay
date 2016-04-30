module.exports = {
  cookie: {
    secret: 'Wxdf3_2Pmzrxfa'
  },
  database: {
    db: 'blipay',
    username: '',
    password: '',
    dialect: 'sqlite',
    host: 'localhost',
    pool: {
      min: 0,
      max: 10,
      idle: 1000
    }
  }
};

require('dotenv').config();

const config = {
  app: {
    port: process.env.DEV_APP_PORT || 3000,
  },
  mongoDb: {
    urlDb: process.env.DB_CONN,
  },
  admin: {
    login: process.env.ADMIN_LOGIN,
    password: process.env.ADMIN_PASSWORD,
  },
  adminLord: {
    login: process.env.ADMIN_LORD_LOGIN,
    password: process.env.ADMIN_LORD_PASSWORD,
  }
}

module.exports = config;
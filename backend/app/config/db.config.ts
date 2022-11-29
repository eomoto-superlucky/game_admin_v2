module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "bingo_game_development",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

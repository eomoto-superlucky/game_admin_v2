module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    level: {
      type: Sequelize.INTEGER
    },
    experience: {
      type: Sequelize.BIGINT
    },
    keys: {
      type: Sequelize.INTEGER
    },
    coins: {
      type: Sequelize.BIGINT
    },
    credits: {
      type: Sequelize.BIGINT
    },
    games: {
      type: Sequelize.INTEGER
    },
    support: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.DATE
    },
    updated_at: {
      type: Sequelize.DATE
    },
    total_purchase: {
      type: Sequelize.INTEGER
    },
    network_purchaser: {
      type: Sequelize.TINYINT(1)
    },
    email: {
      type: Sequelize.STRING
    },
    bucket: {
      type: Sequelize.STRING(2)
    },
    exported: {
      type: Sequelize.TINYINT(1)
    },
    export_attempts: {
      type: Sequelize.INTEGER
    },
    export_unlock_date: {
      type: Sequelize.DATE
    }
  });

  return User;
};

import sequelize from "./connection.js";

const build = async () => {
  await sequelize.sync({ force: true });
};

export default build;

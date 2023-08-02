import { Sequelize } from "sequelize";
import config from "../config/environment.js";

const sequelize = new Sequelize(config.nodeEnv, { logging: true });

export default sequelize;

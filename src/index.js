import app from "./app.js";
import config from "./config/environment.js";
import sequelize from "./database/connection.js";
(async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });
    console.log("connected successfully");
    app.listen(config.port, () =>
      console.log(`Server is running on http://localhost:${config.port}`)
    );
  } catch (error) {
    console.log(`Error in connecting database ${error} `);
  }
})();

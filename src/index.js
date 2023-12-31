import app from "./app.js";
import config from "./config/environment.js";
import build from "./database/build.js";
import sequelize from "./database/connection.js";
(async () => {
  try {
    await sequelize.authenticate();

    console.log("connected successfully");

    if (process.env.BUILD) {
      build().then(() => console.log("database built successfully"));
    }

    app.listen(config.port, () =>
      console.log(`Server is running on http://localhost:${config.port}`)
    );
  } catch (error) {
    console.log(`Error in connecting database ${error} `);
  }
})();

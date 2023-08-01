import app from "./app.js";
import config from "./config/environment.js";

(async () => {
  app.listen(config.port, () =>
    console.log(`Server is running on http://localhost:${config.port}`)
  );
})();

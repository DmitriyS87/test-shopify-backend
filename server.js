/* eslint-disable no-console */
import app from "./app.js";
import AppService from "./services/appService.js";
import { sequelize } from "./core/db.js";

const port = process.env.PORT || 8080;

async function startServer() {
  try {
    sequelize
      .sync()
      .then(AppService.syncDataWithExternalServer)
      .then(() => {
        app.listen(port, () => {
          console.log(`Listening on port ${port}`);
        });
      });
  } catch (error) {
    console.error("Error staring server:", error);
  }
}

startServer();

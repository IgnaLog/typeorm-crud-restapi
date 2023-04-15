import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("DataBase connected");
    app.listen(3000);
    console.log("Server listening on port 3000");
  } catch (e) {
    console.error(e);
  }
}

main();

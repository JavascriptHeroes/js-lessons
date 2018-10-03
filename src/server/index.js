import next from "next";
import express from "express";
import bodyParser from "body-parser";

// api
import api from "./api";

const dev = process.env.NODE_ENV !== "production";

(async () => {
  try {
    const app = next({ dev, dir: "./src/client" });
    const handle = app.getRequestHandler();

    await app.prepare();
    const server = express();

    server.use(bodyParser.json());
    server.use("/api/v1", api);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("🚀 Ready on http://localhost:3000"); // eslint-disable-line no-console
    });
  } catch (err) {
    console.error(err.stack); // eslint-disable-line no-console
    process.exit(1);
  }
})();

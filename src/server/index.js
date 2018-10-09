import next from "next";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// api
import api from "./api";

// utilities
import errorHandler from "./utils/errorHandler";

const dev = process.env.NODE_ENV !== "production";

(async () => {
  try {
    const app = next({ dev, dir: "./src/client" });
    const handle = app.getRequestHandler();

    await app.prepare();
    const server = express();

    mongoose.connect(
      "mongodb://devel:jslesson1@ds225543.mlab.com:25543/jslesson",
      { useNewUrlParser: true }
    );

    server.use(bodyParser.json());
    server.use("/api/v1", api, errorHandler);

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

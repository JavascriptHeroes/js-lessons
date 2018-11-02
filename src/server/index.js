import next from "next";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import connectMongo from "connect-mongo";
import session from "express-session";

// api
import api from "./api";
import auth from "./auth";

// utilities
import errorHandler from "./utils/errorHandler";
import { authRequired, authApiRequired } from "./utils/authRequired";

const dev = process.env.NODE_ENV !== "production";

(async () => {
  try {
    const app = next({ dev, dir: "./src/client" });
    const handle = app.getRequestHandler();

    await app.prepare();
    const server = express();
    const MongoStore = connectMongo(session);

    mongoose.connect(
      "mongodb://devel:jslesson1@ds225543.mlab.com:25543/jslesson",
      { useNewUrlParser: true }
    );

    server.use(bodyParser.json());
    server.use(
      session({
        secret: "1w3q2dasdnjkq8945ppeje",
        cookie: {
          maxAge: 365 * 24 * 3600000 // year
        },
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
      })
    );

    server.use(passport.initialize());
    server.use(passport.session());

    server.use("/api/v1", authApiRequired, api, errorHandler);
    server.use("/auth/v1", auth, errorHandler);

    server.get("/app*", authRequired, (req, res) => {
      return handle(req, res);
    });

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

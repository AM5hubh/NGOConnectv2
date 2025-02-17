import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import auth from "./utils/googleauth.js"
import "./utils/googleauth.cjs";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

import session from "express-session";
import passport from "passport";

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'))
app.use(cookieParser());

//routes import

import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter); // goes to user.routes.js

import googleauthRouter from "./routes/googleauth.routes.js";
app.use(`/api/v1/googleauth`, googleauthRouter); // goes to user.routes.js
//http://localhost:8000/api/v1/users/register

export { app };

const express = require("express");
const dotenv = require('dotenv')
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')

require('./passport/githubAuth')
const app = express()
dotenv.config()

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, // Allow credentials (cookies, authorization headers)
  };


app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());


app.use(cors(corsOptions))
const userRoute = require("./routes/userR")
const exploreRoute = require("./routes/exploreR")
const AuthRoute = require("./routes/AuthR")
const connectDB = require("./db/connect");

app.get("/",(req,res)=>{
    res.send("Server is ready")
})

app.use("/api/auth",AuthRoute)
app.use("/api/user",userRoute)
app.use("/api/explore",exploreRoute)


const port = 5000
app.listen(port,()=>{
    console.log(`Server is listenenig on port ${port}`)
    connectDB()
})
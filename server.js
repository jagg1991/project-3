const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require('express-session');

const MongoDBStore = require('connect-mongodb-session')(session);

const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");



// Define middleware here

const store = new MongoDBStore({
    uri: 'mongodb+srv://dbLunarSociety:Password123@cluster0.eynmi.mongodb.net/myFirstDatabase?',
    collection: 'mySessions'
});


app.use(session({
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },

    store: store,
    resave: false,
    saveUninitialized: true
}));



// const sess = {
//     secret: "Super secret secret",
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
// };
// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Serve up static assets(usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
    });
} else {
    app.use(express.static(path.join(__dirname, 'public')));
}




// Add routes, both API and view


// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/userlist",
);

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

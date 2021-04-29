let express = require("express"),
 path = require("path"),
 routes = require('./routes'),
 mongoose= require("mongoose"),
 cors= require("cors"),
 bodyParser = require("body-parser"), 
 dataBaseConfig = require("./database/db");
 
// Connecting mongoDB

mongoose. Promise = global.Promise;
mongoose
 .connect (dataBaseConfig.db, {
 useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(
() => {
console.log("Database connected sucessfully ");
},
(error) => {
 console.log("Could not connected to database:"+error);
 }
);
// Set up express is port
const userRoute = require("./routes/user.route");


const app = express();
app.use(bodyParser.json());
app.use(
 bodyPorser.urlencoded({
extended: false,
 })
);
app.use(cors());

//Setting up static directory
 app.uselexpress.staticipath.join(_dirname, "dist/NimapTest");

// RESTFUL APIroot
app.use("/user",userRoute);

//PORT 
const port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log("Connected to port" + port);
})

// Find 404 and hand over to err0or 

app.use((req, res, next) => { next (createError(404));

});

// Index Route

app.get("/", (req, res) => {res.send("invaild endpoint")
});

app.get("/", (req, res) => {

res.sendFile(path.join(_dirname, "AngularProject/NimapTest/index.html"));
});

// error handler

app.use(function (err, req, res, next) {
console.error(err.message);

if (!err.statusCode) err.statusCode= 500;

res.status(err.statusCode).send(err.message);
});
const   express      = require("express"),
        app          = express(),
        mongoose     = require("mongoose"),
        bodyParser   = require("body-parser"),
        hbs          = require("hbs"),

        appPageRoute = require("./routes/pages/appRoutes"),
        eventRoutes  = require("./routes/api/events/eventRoutes");

// SETUP
const PORT = process.env.PORT || 3005;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/projectify"; //process.env.MONGODB_URI ||
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log(`Failed To Connect To MongoDB: \n${err}`));
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
hbs.registerPartials(__dirname + "/views/partials");


// ROUTES
app.use(appPageRoute);
app.use(eventRoutes);

//error route
app.get("*", (req, res) => {
    res.send("I'm Sorry\n\nThis Page Is Not Available");
});



// SERVER START
app.listen(PORT, () => {
    console.log(`Server has started on PORT: ${PORT}`);
});

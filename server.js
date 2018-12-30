const   express      = require("express"),
        app          = express(),
        bodyParser   = require("body-parser"),
        hbs          = require("hbs"),
        appPageRoute = require("./routes/pages/appRoutes");

// SETUP
const PORT = process.env.PORT || 3005;
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
hbs.registerPartials(__dirname + "/views/partials");


// ROUTES
app.use(appPageRoute);

//error route
app.get("*", (req, res) => {
    res.send("I'm Sorry\n\nThis Page Is Not Available");
});



// SERVER START
app.listen(PORT, () => {
    console.log(`Server has started on PORT: ${PORT}`);
});

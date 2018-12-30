const   mongoose = require("mognoose"),
        Event    = require("./eventModel");

mongoose.connect("mongodb://127.0.0.1:27017/projectify")
    .then(() => console.log("connected to mongodb successfully") )
    .catch((err) => console.log("failed to connect to mongodb") );


    Event.create({
        type: "Appointment",
        name: "UoU Bootcamp Interview",
        description: "They'll see if I'm a good fit for their program.",
        dateCreated: Date.now(),
        dateExecuting: {
            day: 14,
            month: 0,
            year: 2019,
            time: 1145,
        }
    }).then((data) => {
            console.log(data);
            mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
            mongoose.connection.close();
        });

const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/projectify")
//     .then(() => console.log("connected to mongodb successfully") )
//     .catch((err) => console.log("failed to connect to mongodb") );


const eventSchema = new mongoose.Schema({
    type: String,
    name: String,
    description: String,
    dateCreated: Date,
    dateExecuting: {
        day: Number,
        month: Number,
        year: Number,
        time: Number,
    },
});

const Event = mongoose.model("events", eventSchema);

// Event.create({
//     type: "Appointment",
//     name: "UoU Bootcamp Interview",
//     description: "They'll see if I'm a good fit for their program.",
//     dateCreated: Date.now(),
//     dateExecuting: {
//         day: 14,
//         month: 0,
//         year: 2019,
//         time: 1145,
//     }
// }).then((data) => {
//         console.log(data);
//         mongoose.connection.close();
//     })
//     .catch((err) => {
//         console.log(err);
//         mongoose.connection.close();
//     });

module.exports = Event;

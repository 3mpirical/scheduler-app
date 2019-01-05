const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/projectify")
//     .then(() => console.log("connected to mongodb successfully") )
//     .catch((err) => console.log("failed to connect to mongodb") );


const eventSchema = new mongoose.Schema({
    type: {
        type: String,
        default: "Miscellaneous",
        maxlength: 13,
    },
    name: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true,
    },
    description: {
        type: String,
        default: "",
        trim: true,
        maxLength: 300,
    },
    dateCreated: Date,
    dateExecuting: {
        day: {
            type: Number,
            required: true,
            max: 31,
            min: 1,
        },
        month: {
            type: Number,
            required: true,
            max: 11,
            min: 0,
        },
        year: {
            type: Number,
            required: true,
            max: 2099,
            min:  new Date().getFullYear(),
        },
        time: {
            type: Number,
            required: true,
            max: 2359,
            min: 0,
        },


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

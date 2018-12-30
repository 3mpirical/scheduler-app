const   mongoose = require("mongoose"),
        Event    = require("./eventModel");

mongoose.connect("mongodb://127.0.0.1:27017/projectify")
    .then(() => console.log("connected to mongodb successfully") )
    .catch((err) => console.log("failed to connect to mongodb") );

    // Adds Events To MongoDB ===============
// Event.create({
//         type: "Appointment",
//         name: "UoU Bootcamp Interview",
//         description: "They'll see if I'm a good fit for their program.",
//         dateCreated: Date.now(),
//         dateExecuting: {
//             day: 13,
//             month: 0,
//             year: 2019,
//             time: 1145,
//         }
//     }).then((data) => {
//         console.log(`Data: ${data.name} \n^^^^^created`);
//         return Event.create({
//             type: "Miscellaneous",
//             name: "Bootcamp Start",
//             description: "Today is the first day of the UoU bootcamp.",
//             dateCreated: Date.now(),
//             dateExecuting: {
//                 day: 10,
//                 month: 1,
//                 year: 2019,
//                 time: 1000,
//             }
//         });
//     })
//     .then((data) => {
//         console.log(`Data: ${data.name} \n^^^^^created`);
//         return Event.create({
//             type: "Miscellaneous",
//             name: "Birthday",
//             description: "I am now 25 years old... Time for the mid life chrisis.",
//             dateCreated: Date.now(),
//             dateExecuting: {
//                 day: 13,
//                 month: 0,
//                 year: 2019,
//                 time: 0000,
//             }
//         });
//     })
//     .then((data) => {
//         mongoose.connection.close();
//         console.log(`Data: ${data.name} \n^^^^^created`);
//     })
//     .catch((err) => {
//         console.log(err);
//         mongoose.connection.close();
//     });


    // Deletes All Events From MongoDB ===============
Event.deleteMany({})
    .then(() => {
        console.log("deleted documents");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
        mongoose.connection.close();
    });

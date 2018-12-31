const   express = require("express"),
        router = express.Router(),
        mongoose = require("mongoose");

        Event = require("../../../models/eventModel");


// CREATE
router.post("/api/events", (req, res) => {
    const newEvent = req.body;

    Event.create({
            type: newEvent.type,
            name: newEvent.name,
            description: newEvent.description,
            dateCreated: Date.now(),
            dateExecuting: {
                day: newEvent.dateExecuting.day,
                month: newEvent.dateExecuting.month,
                year: newEvent.dateExecuting.year,
                time: newEvent.dateExecuting.time,
            }
        })
        .then((eventData) => {
            console.log(`Data: ${eventData.name} \n^^^^^created`);
            res.status(200)
                .json({
                    isSuccessful: true,
                    responseText: "data added to db",
                    data: eventData,
                });
        })
        .catch((err) => {
            console.log(`Error: Event Not Created\n${err}`);
            res.status(400)
                .json({
                    isSuccessful: false,
                    responseText: "could not add data to database",
                    data: err,
                });
        });
});


// INDEX
router.get("/api/events", (req, res) => {
    Event.find({})
        .then((eventData) => {
            if(eventData) {
                console.log(`Event data found :\n${eventData}`);
                res.status(200)
                    .json({
                        isSuccessful: true,
                        responseText: "data found",
                        data: eventData,
                    });
            } else {
                console.log(`Event data not found :\n${eventData}`);
                res.status(204)
                    .json({
                        isSuccessful: true,
                        responseText: "data not found",
                        data: eventData,
                    });
            }
        })
        .catch((err) => {
            res.json({
                isSuccessful: false,
                responseText: "bad request",
                data: err,
            });
        });
});

//SHOW
router.get("/api/events/:id", (req, res) => {
    const _id = req.params.id;

    Event.findById({_id})
        .then((eventData) => {
            if(eventData) {
                console.log(`Event data found :\n${eventData}`);
                res.status(200)
                    .json({
                        isSuccessful: true,
                        responseText: "data found",
                        data: eventData,
                    });
            } else {
                console.log(`Event data not found :\n${eventData}`);
                res.status(204)
                    .json({
                        isSuccessful: true,
                        responseText: "data not found",
                        data: eventData,
                    });
            }
        })
        .catch((err) => {
            res.json({
                isSuccessful: false,
                responseText: "bad request",
                data: err,
            });
        });
});
// UPDATE
router.put("/api/events/:id", (req, res) => {
    const _id = req.params.id;
    const updatedEvent = req.body;

    Event.findByIdAndUpdate(_id, updatedEvent, {new: true})
        .then((eventData) => {
            if(eventData) {
                res.status(200)
                    .json({
                        isSuccessful: true,
                        responseText: "data updated",
                        data: eventData,
                    });
            } else {
                res.status(404)
                    .json({
                        isSuccessful: false,
                        responseText: "data not found",
                        data: eventData,
                    });
            }
        })
        .catch((err) => {
            res.status(400)
                .json({
                    isSuccessful: false,
                    responseText: "bad request",
                    data: err,
                });
        });
});

// DESTROY
router.delete("/api/events/:id/delete", (req, res) => {
    const _id = req.params.id;

    Event.findByIdAndDelete(_id)
        .then(() => {
            res.status(200)
                .json({
                    isSuccessful: true,
                    responseText: "data deleted",
                    data: null,
                });
        })
        .catch((err) => {
            res.status(400)
                .json({
                    isSuccessful: false,
                    responseText: "bad request",
                    data: err,
                });
        });
});

module.exports = router;

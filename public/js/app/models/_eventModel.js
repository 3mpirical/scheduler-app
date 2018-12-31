import { state } from "../state";
import { elements } from "../elements";
import axios from "axios";


class Event {
    constructor(newEvent){
        this.type = newEvent.type;
        this.name = newEvent.name;
        this.description = newEvent.description;
        this.dateExecuting = newEvent.dateExecuting;
    }

    static save(eventObj) {
        return new Promise((resolve, reject) => {
            axios.post("/api/events", eventObj)
                .then((eventData) => resolve(eventData.data.data))
                .catch((err) => reject(err.response.data));
        });
    }

    static findAll() {
        return new Promise((resolve, reject) => {
            axios.get("/api/events")
                .then((eventData) => resolve(eventData.data.data))
                .catch((err) => reject(err.response.data));
        });
    }

    static findById(_id) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/events/${_id}`)
                .then((eventData) => resolve(eventData.data.data))
                .catch((err) => reject(err.response.data));
        });
    }

    static findByIdAndUpdate(_id, eventObj){
        return new Promise((resolve, reject) => {
            axios.put(`/api/events/${_id}`, eventObj)
                .then((eventData) => resolve(eventData.data.data))
                .catch((err) => reject(err.response.data));
        });

    }
    static findByIdAndDelete(_id){
        return new Promise((resolve, reject) => {
            axios.delete(`/api/events/${_id}`)
                .then((eventData) => resolve(eventData.data))
                .catch((err) => reject(err.response.data));
        });
    }
}


export { Event };

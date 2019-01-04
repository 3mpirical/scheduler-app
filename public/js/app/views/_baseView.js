import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";

const baseView = {

    monthArr : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

    daysInMonth: function(month, year) {
        return new Date(year, month + 1 , 0).getDate();
    },

    getMonthsFirstDay: function(month, year) {
        return new Date(year, month, 1).getDay();
    },
};

export { baseView };

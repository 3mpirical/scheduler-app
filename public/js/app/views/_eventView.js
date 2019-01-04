import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";
import { baseView } from "./_baseView";

const { monthArr, daysInMonth, getMonthsFirstDay } = baseView;

const appendEvent = (event) => {
    const {day, month, year} = event.dateExecuting;
    const contents = document.querySelector(`.date-${day}-${month}-${year}`);
    const eventNode = document.createElement("div");
    eventNode.classList.add("event");
    eventNode.textContent = event.name;
    contents.appendChild(eventNode);
};

const appendPrevMonthEvents = (currMonth, year) => {
    return new Promise((resolve, reject) => {
        MDL.Event.findByMonth( (currMonth - 1 === -1) ? 11 : currMonth - 1)
        .then((eventData) => {
            const prevMonthDays = daysInMonth(currMonth - 1, year);
            const prevMonthDaysToDisplay = getMonthsFirstDay(currMonth, year) -1;
            const prevMonthStart = prevMonthDays - prevMonthDaysToDisplay;

            eventData.forEach((item, index, array) => {
                const day = item.dateExecuting.day;
                if(day >= prevMonthStart) {
                    appendEvent(item);
                }
            });
        })
        .catch((err) => reject(err));
    });
};


const appendCurrMonthEvents = (currMonth, year) => {
    return new Promise((resolve, reject) => {
        MDL.Event.findByMonth(currMonth)
        .then((eventData) => {
            eventData.forEach((item, index, array) => {
                appendEvent(item);
            });
        })
        .catch((err) => reject(err));
    });
};


const appendNextMonthEvents = (currMonth, year) => {
    return new Promise((resolve, reject) => {
        MDL.Event.findByMonth((currMonth + 1 === 12) ? 0 : currMonth + 1)
        .then((eventData) => {
            const currMonthDays = daysInMonth(currMonth, year);
            const prevMonthDaysToDisplay = getMonthsFirstDay(currMonth, year) -1;

            eventData.forEach((item, index, array) => {
                const day = item.dateExecuting.day;
                if(day <= (41 - currMonthDays - prevMonthDaysToDisplay) ) {
                    appendEvent(item);
                }
            });
        })
        .catch((err) => reject(err));
    });
};



const eventView = {

    getEventsAndAppend: function(month, year) {
        return new Promise((resolve, reject) => {
            Promise.all([
                appendPrevMonthEvents(month, year),
                appendCurrMonthEvents(month, year),
                appendNextMonthEvents(month, year)
            ])
            .catch((err) => reject(err));
        });
    },
};


export { eventView };

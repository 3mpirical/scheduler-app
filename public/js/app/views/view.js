import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";

// local functions==========

// Here, month 1 = January. Index does not start at 0
const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};

const getMonthsFirstDay = (month, year) => {
    return new Date(month + 1, year, 1).getDay();
};


const getCalendarArray = (month, year) => {
    // get current months total days
    const currMonthDays = daysInMonth(month, year);

    // get the total number of days in the previous month
    const prevMonthDays = daysInMonth(month - 1, year);

    //gets the number of days we want to display from previous month by subtracting the index of the first day of the week.
    const prevMonthDaysToDisplay = getMonthsFirstDay(month, year) -1;

    //finds the first day of previous month to be displayed by subtracting the total number of days in the previous month by the number of days we want to display.
    const prevMonthStart = prevMonthDays - prevMonthDaysToDisplay;

    // Builds array to append starting with the first day to display of the previous month, then all current month days, then next month's days up to a total of 42.
    const datesArr = [];

    for(let i = prevMonthStart; i <= prevMonthDays; i++ ) {
        const node = document.createElement("div");
        node.classList.add("calendar__box-content", "dark");
        node.innerHTML =`<div class="calendar__date">${i}</div>`;

        datesArr.push(node);
    }

    for(let i = 1; i <= currMonthDays; i++ ) {
        const node = document.createElement("div");
        node.classList.add("calendar__box-content");
        node.innerHTML =`<div class="calendar__date">${i}</div>`;

        datesArr.push(node);
    }

    for(let i = 1; i < (42 - currMonthDays - prevMonthDaysToDisplay); i++) {
        const node = document.createElement("div");
        node.classList.add("calendar__box-content", "dark");
        node.innerHTML =`<div class="calendar__date">${i}</div>`;

        datesArr.push(node);
    }

    return (datesArr);
};



// exported functions ==========
const VIEW = {

    printHeading: function(month, year) {
        const dateString = new Date().toDateString();

        const node = document.createElement("div");
        node.classList.add("calendar__heading-title");
        node.innerHTML =`<h2>${dateString}</h2>`;

        document.querySelector(".calendar__heading").appendChild(node);
    },

    printCalendarDays: function(month, year) {
        const datesArr = getCalendarArray(month, year);

        elements.calendarBoxes
            .forEach((item, index, arr) => {
                item.appendChild(datesArr[index]);
            });

    },
};




export { VIEW };

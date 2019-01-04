import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";
import { baseView } from "./_baseView";
import { eventView } from "./_eventView";

const { monthArr, daysInMonth, getMonthsFirstDay } = baseView;
const { getEventsAndAppend } = eventView;

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

        if(month - 1 === -1) {
            node.classList.add(
                `date-${i}-11-${year - 1}`,
                "calendar__box-content",
                "dark"
            );
            node.setAttribute("day", i);
            node.setAttribute("month", 11);
            node.setAttribute("year", year-1);
        } else {
            node.classList.add(
                `date-${i}-${month-1}-${year}`,
                "calendar__box-content",
                "dark"
            );
            node.setAttribute("day", i);
            node.setAttribute("month", month-1);
            node.setAttribute("year", year);
        }
        node.innerHTML =`<div class="calendar__date">${i}</div>`;

        datesArr.push(node);
    }

    for(let i = 1; i <= currMonthDays; i++ ) {
        const node = document.createElement("div");

        node.classList.add(`date-${i}-${month}-${year}`,"calendar__box-content");
        node.setAttribute("day", i);
        node.setAttribute("month", month);
        node.setAttribute("year", year);

        node.innerHTML =`<div class="calendar__date">${i}</div>`;

        datesArr.push(node);
    }

    for(let i = 1; i < (42 - currMonthDays - prevMonthDaysToDisplay); i++) {
        const node = document.createElement("div");

        if(month + 1 === 12) {
            node.classList.add(
                `date-${i}-0-${year+1}`,
                "calendar__box-content",
                "dark"
            );
            node.setAttribute("day", i);
            node.setAttribute("month", 0);
            node.setAttribute("year", year+1);
        } else {
            node.classList.add(
                `date-${i}-${month+1}-${year}`,
                "calendar__box-content",
                "dark"
            );
            node.setAttribute("day", i);
            node.setAttribute("month", month+1);
            node.setAttribute("year", year);
        }

        node.innerHTML =`<div class="calendar__date">${i}</div>`;

        datesArr.push(node);
    }

    return (datesArr);
};

const clearCalendarContent = () => {
    const contentNodes = elements.calendarContent();

    contentNodes.forEach((item, index, arr) => {
        item.parentNode.removeChild(item);
    });
};

// put this and event-appending promises into their own _eventView File.


// exported functions ==========
const calendarView = {

    clearCalendar: function() {
        clearCalendarContent();
    },

    printCalendarDays: function(month, year) {
        const datesArray = getCalendarArray(month, year);

        elements.calendarBoxes.forEach((item, index, arr) => {
                item.appendChild(datesArray[index]);
            });


    // refactor into three different functions and use promise.all to run concurrently
        getEventsAndAppend(month, year)
        .catch((err) => console.log(JSON.stringify(err, null, 2)));

    },

};


export { calendarView };

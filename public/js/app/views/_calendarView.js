import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";
import { baseView } from "./_baseView";

const monthArr = baseView.monthArr;

// local functions ==========
// Index starts at 0 so.... January === 0
const daysInMonth = (month, year) => {
    return new Date(year, month + 1 , 0).getDate();
};

const getMonthsFirstDay = (month, year) => {
    return new Date(year, month, 1).getDay();
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

        MDL.Event.findByMonth( (month - 1 === -1) ? 11 : month - 1)
            .then((eventData) => {
                const prevMonthDays = daysInMonth(month - 1, year);
                const prevMonthDaysToDisplay = getMonthsFirstDay(month, year) -1;
                const prevMonthStart = prevMonthDays - prevMonthDaysToDisplay;

                eventData.forEach((item, index, array) => {
                    const {day, month, year} = item.dateExecuting;
                    if(day >= prevMonthStart) {
                        const contents = document.querySelector(`.date-${day}-${month}-${year}`);
                        const eventNode = document.createElement("div");
                        eventNode.classList.add("event");
                        eventNode.textContent = item.name;
                        contents.appendChild(eventNode);
                    }
                });

                return MDL.Event.findByMonth(month);
            })
            .then((eventData) => {
                console.log(JSON.stringify(eventData, null, 2));

                eventData.forEach((item, index, array) => {
                    const {day, month, year} = item.dateExecuting;
                    const contents = document.querySelector(`.date-${day}-${month}-${year}`);
                    const eventNode = document.createElement("div");
                    eventNode.classList.add("event");
                    eventNode.textContent = item.name;
                    contents.appendChild(eventNode);
                });
                return MDL.Event.findByMonth((month + 1 === 12) ? 0 : month + 1);
            })
            .then((eventData) => {
                const currMonthDays = daysInMonth(month, year);
                const prevMonthDaysToDisplay = getMonthsFirstDay(month, year) -1;

                eventData.forEach((item, index, array) => {
                    const {day, month, year} = item.dateExecuting;
                    if(day <= (41 - currMonthDays - prevMonthDaysToDisplay) ) {
                        const contents = document.querySelector(`.date-${day}-${month}-${year}`);
                        const eventNode = document.createElement("div");
                        eventNode.classList.add("event");
                        eventNode.textContent = item.name;
                        contents.appendChild(eventNode);
                    }
                });

            })
            .catch((err) => console.log(JSON.stringify(err, null, 2)));
    },

};


export { calendarView };

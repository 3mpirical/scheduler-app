import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";

// local functions==========

// Here, month 1 = January. Index does not start at 0
const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};


const getCalendarDays = (month, year) => {
    // get current months days
    const currMonthDays = daysInMonth(month, year);
    // get prior months days (prior month end)
    const prevMonthDays = daysInMonth(month - 1, year);
    // subtract current months from 35 days (days to display from prior month).
    //    ^34 will cause 35 days to be displayed; 35 causes 36 to be displayed.
    // subtract result from prior months days (prior month start).
    const prevMonthStart = prevMonthDays - (34 - currMonthDays);

    // display result starting with prior month start, then to prior month end, then all current days.
    const datesArr = [];

    for(let i = prevMonthStart; i <= prevMonthDays; i++ ) {
        datesArr.push(i);
    }
    for(let i = 1; i <= currMonthDays; i++ ) {
        datesArr.push(i);
    }

    return (datesArr);
};



// exported functions ==========
const VIEW = {

    printHeading: function() {
        const dateString = new Date().toDateString();

        const node = document.createElement("div");
        node.classList.add("calendar__heading-title");
        node.innerHTML =`<h2>${dateString}</h2>`;

        document.querySelector(".calendar__heading").appendChild(node);
    },

    printCalendarDays: function(month, year) {
        getCalendarDays(month, year)
            .map((item, index, arr) => {
                const node = document.createElement("div");
                node.classList.add("calendar__box");
                node.innerHTML =
                `
                    <p class="calendar__date ${item}">${item}</p>
                `;

                return node;
            })
            .forEach((item, index, arr) => {
                document.querySelector(".calendar__dates-container").appendChild(item);
            });
    }

};



export { VIEW };

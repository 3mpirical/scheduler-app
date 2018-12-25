import { MDL } from "./models/model";
import { VIEW } from "./views/view";
import { state } from "./state";
import { elements } from "./elements";


const CTRL = (function(MDL, VIEW, state, elements) {




    return {

    };
} (MDL, VIEW, state, elements) );





// Month here is 1-indexed (January is 1, February is 2, etc). This is
// because we're using 0 as the day so that it returns the last day
// of the last month, so you have to add 1 to the month number
// so it returns the correct amount of days
const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};


//=============================
const currMonth = new Date().getMonth();
const currYear = new Date().getFullYear();

//prints date string
// const currStringMonth = new Date().toDateString();
// console.log(currStringMonth);

const printCalendarDays = (month, year) => {
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

    console.log(datesArr);
    return (datesArr);
};


const printHeading = () => {
    const dateString = new Date().toDateString();

    const node = document.createElement("div");
    node.classList.add("calendar__heading-title");
    node.innerHTML =`<h2>${dateString}</h2>`;

    document.querySelector(".calendar__heading").appendChild(node);
};



printHeading();


printCalendarDays(currMonth, currYear)
    .map((item, index, arr) => {
        const node = document.createElement("div");
        node.classList.add("calendar__box");
        node.innerHTML =
        `
            <p class="calendar__date ${item}">${item}</p>
        `;

        console.log(typeof node);
        return node;
    })
    .forEach((item, index, arr) => {
        document.querySelector(".calendar__dates-container").appendChild(item);
    });

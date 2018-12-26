import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";

// local functions==========
const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
            node.setAttribute("year", year - 1);
            node.setAttribute("month", 11 );
            node.setAttribute("day", i);
        } else {
            node.setAttribute("year", year);
            node.setAttribute("month", month -1);
            node.setAttribute("day", i);
        }

        node.classList.add("calendar__box-content", "dark");
        node.innerHTML =`<div class="calendar__date">${i}</div>`;

        datesArr.push(node);
    }

    for(let i = 1; i <= currMonthDays; i++ ) {
        const node = document.createElement("div");

        node.setAttribute("year", year);
        node.setAttribute("month", month);
        node.setAttribute("day", i);

        node.classList.add("calendar__box-content");
        node.innerHTML =`<div class="calendar__date">${i}</div>`;

        datesArr.push(node);
    }

    for(let i = 1; i < (42 - currMonthDays - prevMonthDaysToDisplay); i++) {
        const node = document.createElement("div");

        if(month + 1 === 12) {
            node.setAttribute("year", year + 1);
            node.setAttribute("month", 1 );
            node.setAttribute("day", i);
        } else {
            node.setAttribute("year", year);
            node.setAttribute("month", month + 1);
            node.setAttribute("day", i);
        }

        node.classList.add("calendar__box-content", "dark");
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
const VIEW = {

    printHeading: function() {
        const node = document.createElement("div");
        node.classList.add("calendar__heading-items");
        node.innerHTML =`
            <span class="calendar__heading-month">${monthArr[state.headingMonth]}</span>
            <span class="calendar__heading-year">${state.headingYear}</span>`
            ;

        elements.calendarHeading.appendChild(node);
    },

    printSelected: function() {
        // const dateString = new Date(year, month, day).toDateString();

        const node = document.createElement("div");
        node.classList.add("calendar__selected-items");
        node.innerHTML =`
            <span class="calendar__selected-day">${state.selectedDay}</span>
            <span class="calendar__selected-month">${monthArr[state.selectedMonth]}</span>
            <span class="calendar__selected-year">${state.selectedYear}</span>`
            ;

        elements.calendarSelected.appendChild(node);
    },

    printCalendarDays: function(month, year) {
        const datesArr = getCalendarArray(month, year);

        elements.calendarBoxes
            .forEach((item, index, arr) => {
                item.appendChild(datesArr[index]);
            });

    },

    clearHeading: function() {
        elements.calendarHeading.innerHTML = "";
    },

    clearSelected: function() {
        elements.calendarSelected.innerHTML = "";
    },

    clearCalendar: function() {
        this.clearHeading();
        clearCalendarContent();
    },

    initialHighlight: function() {
        //get index of todays box


        elements.calendarContent().forEach((item, index, arr) => {
            if( parseInt(item.getAttribute("day")) === state.selectedDay
                && parseInt(item.getAttribute("month")) === state.selectedMonth
                && parseInt(item.getAttribute("year")) === state.selectedYear)
                {
                console.log(item);
                state.indexOfBox = parseInt(item.parentNode.getAttribute("index"));
            }

        });

        console.log(state.indexOfBox);

        state.selectedBox = elements.calendarContent()[state.indexOfBox];
        state.selectedBox.classList.add("highlight");
    },

    updateHighlight: (event) => {
        state.indexOfBox = parseInt(event.target.parentNode.getAttribute("index"));

        try {
            state.selectedBox.classList.remove("highlight");
        }  catch(err) {
            console.log("first box selected");
        }

        state.selectedBox = elements.calendarContent()[state.indexOfBox];
        state.selectedBox.classList.add("highlight");
    },
};




export { VIEW };

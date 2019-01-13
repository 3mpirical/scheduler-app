import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";
import { baseView } from "./_baseView";

const monthArr = baseView.monthArr;


const eventPaneView = {

    toggleEventPaneUp: function() {
        elements.calendar.classList.add("opacity-none");
        elements.calendarClearfix.classList.add("collapsed");
        elements.togglePaneBtn.classList.add("button-rotate-180");
    },

    toggleEventPaneDown: function() {
        elements.calendar.classList.remove("opacity-none");
        elements.calendarClearfix.classList.remove("collapsed");
        elements.togglePaneBtn.classList.remove("button-rotate-180");
        elements.newForm.container.classList.remove("display-flex");
    },

    addNewEventPane: function() {
        elements.newForm.container.classList.add("display-flex");
    },

    clearSelectedHeader: function() {
        elements.eventPaneHeader.innerHTML = "";
    },

    printSelectedHeader: function() {

        elements.eventPaneHeader.innerHTML = `
            <span class="calendar__selected-day">${state.selectedDay}</span>
            <span class="calendar__selected-month">${monthArr[state.selectedMonth]}</span>
            <span class="calendar__selected-year">${state.selectedYear}</span>`
            ;
    },

    printSelectedEvents: function() {
        const {selectedDay, selectedMonth, selectedYear} = state;
        MDL.Event.findByDayMonthYear(selectedDay, selectedMonth, selectedYear)
        .then((none) => console.log("executed"))
        .catch((err) => console.log(err));
    }

};



export { eventPaneView };

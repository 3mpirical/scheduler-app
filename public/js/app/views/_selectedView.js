import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";
import { baseView } from "./_baseView";

const monthArr = baseView.monthArr;


const selectedView = {

    clearSelected: function() {
        elements.calendarSelected.innerHTML = "";
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

};


export { selectedView };

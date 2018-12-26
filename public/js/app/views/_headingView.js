import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";
import { baseView } from "./_baseView";

const monthArr = baseView.monthArr;


const headingView = {
    
    clearHeading: function() {
        elements.calendarHeading.innerHTML = "";
    },

    printHeading: function() {
        const node = document.createElement("div");
        node.classList.add("calendar__heading-items");
        node.innerHTML =`
            <span class="calendar__heading-month">${monthArr[state.headingMonth]}</span>
            <span class="calendar__heading-year">${state.headingYear}</span>`
            ;

        elements.calendarHeading.appendChild(node);
    },
};


export { headingView };

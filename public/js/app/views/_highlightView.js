import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";

const highlightView = {

    highlightSelected: function() {
        const contentArr = elements.calendarContent();

        contentArr.forEach((item, index, arr) => {
            if  (parseInt(item.getAttribute("day")) === state.selectedDay
                && parseInt(item.getAttribute("month")) === state.selectedMonth
                && parseInt(item.getAttribute("year")) === state.selectedYear)
                {
                state.indexOfBox = parseInt(item.parentNode.getAttribute("index"));
                state.selectedBox = contentArr[state.indexOfBox];
                state.selectedBox.classList.add("highlight");
            }
        });
    },

    updateHighlight: (event) => {
        //remove highlight
        state.selectedBox.classList.remove("highlight");
        //get new index of selected box
        state.indexOfBox = parseInt(event.target.parentNode.getAttribute("index"));
        //add new highlight
        state.selectedBox = elements.calendarContent()[state.indexOfBox];
        state.selectedBox.classList.add("highlight");
    },
};

export { highlightView };

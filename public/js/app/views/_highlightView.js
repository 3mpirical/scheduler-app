import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";

const highlightView = {
    
    initialHighlight: function() {
        elements.calendarContent().forEach((item, index, arr) => {
            if( parseInt(item.getAttribute("day")) === state.selectedDay
                && parseInt(item.getAttribute("month")) === state.selectedMonth
                && parseInt(item.getAttribute("year")) === state.selectedYear)
                {
                console.log(item);
                state.indexOfBox = parseInt(item.parentNode.getAttribute("index"));
            }

        });

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

export { highlightView };

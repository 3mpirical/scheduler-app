import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";

const highlightView = {

    highlightSelected: function() {
        const {selectedDay, selectedMonth, selectedYear} = state;

        state.selectedBox = document.querySelector(`.date-${selectedDay}-${selectedMonth}-${selectedYear}`);

        if(state.selectedBox) state.selectedBox.classList.add("highlight");

    },

    updateHighlight: (event) => {
        const {selectedDay, selectedMonth, selectedYear} = state;

        //remove highlight from previous box
        if(state.selectedBox) state.selectedBox.classList.remove("highlight");

        //set newly selected box
        state.selectedBox = document.querySelector(`.date-${selectedDay}-${selectedMonth}-${selectedYear}`);

        //add new highlight
        state.selectedBox.classList.add("highlight");
    },
};

export { highlightView };

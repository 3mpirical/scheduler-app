import { MDL } from "./models/model";
import { VIEW } from "./views/view";
import { state } from "./state";
import { elements } from "./elements";


const CTRL = (function(MDL, VIEW, state, elements) {

    const initializeCalendar = () => {
        state.currMonth = new Date().getMonth();
        state.currYear = new Date().getFullYear();
        VIEW.printHeading();
        VIEW.printCalendarDays(state.currMonth, state.currYear);
    };


    return {
        initializeCalendar,
    };
} (MDL, VIEW, state, elements) );



// APPLICATION EXECUTION ============================

CTRL.initializeCalendar();

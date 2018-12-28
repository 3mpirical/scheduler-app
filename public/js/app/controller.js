import { MDL } from "./models/model";
import { VIEW } from "./views/view";
import { state } from "./state";
import { elements } from "./elements";


const CTRL = (function(MDL, VIEW, state, elements) {

    const initializeCalendar = () => {
        state.headingMonth =  new Date().getMonth();
        state.headingYear  =  new Date().getFullYear();
        state.selectedDay = new Date().getDate();
        state.selectedMonth = state.headingMonth;
        state.selectedYear = state.headingYear;
        VIEW.printHeading();
        VIEW.printSelected();
        VIEW.printCalendarDays(state.headingMonth, state.headingYear);
        VIEW.initialHighlight();
    };

const decrementCalendarMonth = () => {
    if(state.headingMonth - 1 === -1) {
        state.headingMonth = 11;
        state.headingYear -= 1 ;
    } else {
        state.headingMonth -=  1;
    }
    VIEW.clearHeading();
    VIEW.clearSelected();
    VIEW.clearCalendar();
    VIEW.printHeading();
    VIEW.printCalendarDays(state.headingMonth, state.headingYear);
};
const incrementCalendarMonth = () => {
    if(state.headingMonth + 1 === 12) {
        state.headingMonth = 0;
        state.headingYear += 1;
    } else {
        state.headingMonth +=  1;
    }
    VIEW.clearHeading();
    VIEW.clearSelected();
    VIEW.clearCalendar();
    VIEW.printHeading();
    VIEW.printCalendarDays(state.headingMonth, state.headingYear);
};

const updateSelectedBox = (event) => {
    state.selectedDay = event.target.getAttribute("day");
    state.selectedMonth = event.target.getAttribute("month");
    state.selectedYear = event.target.getAttribute("year");
    VIEW.updateHighlight(event);
    VIEW.clearSelected();
    VIEW.printSelected();
};


    return {
        initializeCalendar,
        decrementCalendarMonth,
        incrementCalendarMonth,
        updateSelectedBox,
    };
} (MDL, VIEW, state, elements) );



// APPLICATION EXECUTION ============================

CTRL.initializeCalendar();

elements.prevMonthButt.addEventListener("click", (event) => {
    CTRL.decrementCalendarMonth();
});

elements.nextMonthButt.addEventListener("click", (event) => {
    CTRL.incrementCalendarMonth();
});

elements.calendarContainer.addEventListener("click", (event) => {
    if(event.target.matches(".calendar__box-content")) {
        CTRL.updateSelectedBox(event);
    }
});

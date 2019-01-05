import { MDL } from "./models/model";
import { VIEW } from "./views/view";
import { state } from "./state";
import { elements } from "./elements";
import hammerjs from "hammerjs";



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
        VIEW.highlightSelected();
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
    VIEW.highlightSelected();
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
    VIEW.highlightSelected();
};

const updateSelectedBox = (event) => {
    state.selectedDay = parseInt(event.target.getAttribute("day"));
    state.selectedMonth = parseInt(event.target.getAttribute("month"));
    state.selectedYear = parseInt(event.target.getAttribute("year"));
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



//decrement calendar month
elements.prevMonthButt.addEventListener("click", (event) => {
    CTRL.decrementCalendarMonth();
});

const decrementSwipe = new Hammer(elements.calendarContainer);
decrementSwipe.on("swiperight", (event) => {
    CTRL.decrementCalendarMonth();
});



//increment calendar month
elements.nextMonthButt.addEventListener("click", (event) => {
    CTRL.incrementCalendarMonth();
});

const incrementSwipe = new Hammer(elements.calendarContainer);
incrementSwipe.on("swipeleft", (event) => {
    CTRL.incrementCalendarMonth();
});



//update selected box on content click/touch
elements.calendarContainer.addEventListener("click", (event) => {
    if(event.target.matches(".calendar__box-content")) {
        CTRL.updateSelectedBox(event);
    }
});


elements.newEventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
});

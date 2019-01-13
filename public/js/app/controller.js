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

const createEventAndReset = (event) => {
    const {type, name, description, day, month, year, time} = elements.newForm;
    console.log(type);

    MDL.Event.save({
        type: type.value,
        name: name.value,
        description: description.value,
        dateExecuting: {
            day: day.value,
            month: month.value - 1,
            year: year.value,
            time: time.value,
        },
    })
    .then((eventData) => {
        VIEW.clearCalendar();
        VIEW.printCalendarDays(state.headingMonth, state.headingYear);
        VIEW.highlightSelected();
    })
    .catch((err) => console.log(err));
};

    return {
        initializeCalendar,
        decrementCalendarMonth,
        incrementCalendarMonth,
        updateSelectedBox,
        createEventAndReset,
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



//form submit to add new event
elements.newForm.container.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`Event: \n${event}`);
    CTRL.createEventAndReset(event);
});



//toggle event pane up/down button click
elements.togglePaneBtn.addEventListener("click", (event) => {
    if(document.querySelector(".collapsed")) {
        elements.calendar.classList.remove("opacity-none");
        elements.calendarClearfix.classList.remove("collapsed");
        elements.togglePaneBtn.classList.remove("button-rotate-180");
        elements.newForm.container.classList.remove("display-flex");
    } else {
        elements.calendar.classList.add("opacity-none");
        elements.calendarClearfix.classList.add("collapsed");
        elements.togglePaneBtn.classList.add("button-rotate-180");
    }
});



//toggle New Event Pane
elements.newEventBtn.addEventListener("click", (event) => {
    if(!document.querySelector(".collapsed")) {
        elements.calendar.classList.add("opacity-none");
        elements.calendarClearfix.classList.add("collapsed");
        elements.togglePaneBtn.classList.add("button-rotate-180");
    }

    elements.newForm.container.classList.add("display-flex");
});

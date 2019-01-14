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
        VIEW.printCalendarDays(state.headingMonth, state.headingYear);
        VIEW.highlightSelected();
    };

    const initializeEventPane = () => {
        VIEW.printSelectedHeader();
        VIEW.printSelectedEvents();
    };

    const decrementCalendarMonth = () => {
        if(state.headingMonth - 1 === -1) {
            state.headingMonth = 11;
            state.headingYear -= 1 ;
        } else {
            state.headingMonth -=  1;
        }

        VIEW.clearHeading();
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
        VIEW.clearSelectedHeader();
        VIEW.printSelectedHeader();
        VIEW.clearSelectedEvents();
        VIEW.printSelectedEvents();
    };

    const createEventAndReset = (event) => {
        const {type, name, description, day, month, year, time} = elements.newForm;

        MDL.Event.save({
            type: (type.value === "")? undefined : type.value,
            name: name.value,
            description: description.value,
            dateExecuting: {
                day: day.value,
                month: month.value - 1,
                year: year.value,
                time: (type.time === "")? undefined : type.time,
            },
        })
        .then((eventData) => {
            VIEW.clearCalendar();
            VIEW.printCalendarDays(state.headingMonth, state.headingYear);
            VIEW.highlightSelected();
            VIEW.clearSelectedEvents();
            VIEW.printSelectedEvents();
            type.value = "";
            name.value = "";
            description.value = "";
            day.value = "";
            month.value = "";
            year.value = "";
            time.value = "";
        })
        .catch((err) => console.log(err));
    };

    const editEventAndReset = (event) => {
        const {type, name, description, day, month, year, time} = elements.newForm;

        MDL.Event.findByIdAndUpdate(state.selectedId, {
            type: (type.value === "")? undefined : type.value,
            name: name.value,
            description: description.value,
            dateExecuting: {
                day: day.value,
                month: month.value - 1,
                year: year.value,
                time: (type.time === "")? undefined : type.time,
            },
        })
        .then((eventData) => {
            VIEW.clearCalendar();
            VIEW.printCalendarDays(state.headingMonth, state.headingYear);
            VIEW.highlightSelected();
            VIEW.clearSelectedEvents();
            VIEW.printSelectedEvents();
            type.value = "";
            name.value = "";
            description.value = "";
            day.value = "";
            month.value = "";
            year.value = "";
            time.value = "";
            VIEW.toggleEventPaneDown();
            VIEW.printSelectedHeader();
        })
        .catch((err) => console.log(err));
    };

    const toggleEventPane = () => {
        if(state.calIsCollapsed()) {
            VIEW.toggleEventPaneDown();
            VIEW.printSelectedHeader();
        } else {
            VIEW.toggleEventPaneUp();
        }
    };

    const toggleNewEvent = () => {
        const {day, month, year, time} = elements.newForm;
        day.value = state.selectedDay;
        month.value = state.selectedMonth + 1;
        year.value = state.selectedYear;

        if(!state.calIsCollapsed()){
            VIEW.toggleEventPaneUp();
            setTimeout(() => {
                VIEW.hideSelectedEvents();
                VIEW.addNewEventPane();
                elements.eventPaneHeader.innerHTML = "Create";
                elements.newForm.name.focus();
            }, 750);
        } else {
            VIEW.hideSelectedEvents();
            VIEW.addNewEventPane();
            elements.eventPaneHeader.innerHTML = "Create";
            elements.newForm.name.focus();
        }
    };

    const deleteEventAndUpdateView = (event) => {
        const _id = event.target.parentNode.parentNode.getAttribute("_id");

        MDL.Event.findByIdAndDelete(_id)
        .then((eventData) => {
            console.log(JSON.stringify(eventData, null, 2))
            VIEW.clearCalendar();
            VIEW.clearSelectedEvents();
            VIEW.printCalendarDays(state.headingMonth, state.headingYear);
            VIEW.printSelectedEvents();
        })
        .catch((err) => console.log(JSON.stringify(err, null, 2)))
    };

    return {
        initializeCalendar,
        initializeEventPane,
        decrementCalendarMonth,
        incrementCalendarMonth,
        updateSelectedBox,
        createEventAndReset,
        editEventAndReset,
        toggleEventPane,
        toggleNewEvent,
        deleteEventAndUpdateView,
    };
} (MDL, VIEW, state, elements) );



// APPLICATION EXECUTION ============================

CTRL.initializeCalendar();
CTRL.initializeEventPane();



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
    // console.log(`Event: \n${event}`);
    if(elements.eventPaneHeader.textContent === "Create") CTRL.createEventAndReset(event);
    if(elements.eventPaneHeader.textContent === "Edit")
    CTRL.editEventAndReset(event);
});



//toggle event pane up/down button click
elements.togglePaneBtn.addEventListener("click", (event) => {
    CTRL.toggleEventPane();
});



//toggle New Event Pane
elements.newEventBtn.addEventListener("click", (event) => {
    CTRL.toggleNewEvent();
});

//show full event on touch
//---------refactor this as a checkbox hack?
elements.eventIndex.addEventListener("click", (event) => {
    if (event.target.matches(".event-index__event-container")) {
        event.target.classList.toggle("full-height");
    } else if(event.target.matches(".event-index__left")
    || event.target.matches(".event-index__event-name")
    || event.target.matches(".event-index__description")) {
        event.target.parentNode.classList.toggle("full-height");
    } else if(event.target.matches(".event-index__bottom__delete")) {
        CTRL.deleteEventAndUpdateView(event);
    } else if(event.target.matches(".event-index__bottom__edit")) {
        const {type, name, description, day, month, year, time} = elements.newForm;
        const _id = event.target.parentNode.parentNode.getAttribute("_id");
        state.selectedId = _id;

        MDL.Event.findById(_id)
        .then((eventData) => {
            console.log(JSON.stringify(eventData, null, 2));
            type.value = eventData.type;
            name.value = eventData.name;
            description.value = eventData.description;
            day.value = eventData.dateExecuting.day;
            month.value = eventData.dateExecuting.month + 1;
            year.value = eventData.dateExecuting.year;
            time.value = eventData.dateExecuting.time;

            if(!state.calIsCollapsed()){
                VIEW.toggleEventPaneUp();
                setTimeout(() => {
                    VIEW.hideSelectedEvents();
                    VIEW.addNewEventPane();
                    elements.eventPaneHeader.innerHTML = "Edit";
                    elements.newForm.name.focus();
                }, 750);
            } else {
                VIEW.hideSelectedEvents();
                VIEW.addNewEventPane();
                elements.eventPaneHeader.innerHTML = "Edit";
                elements.newForm.name.focus();
            }
        })
        .catch((err) => console.log(JSON.stringify(err, null, 2)))
    }
});

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
        // console.log(state.headingMonth, state.headingYear)
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

// const event1 = new MDL.Event({
//     type: "Pesonal",
// 	name: "College Graduation",
//     description: "I did it, and I'm not even dead yet.",
// 	dateExecuting: {
// 		day: 31,
// 		month: 4,
// 		year: 2019,
// 		time: 1100
// 	}
// });
// const event2 = new MDL.Event({
//     type: "Holiday",
// 	name: "Earth Day",
//     description: "Time to celebrate the planet",
// 	dateExecuting: {
// 		day: 4,
// 		month: 3,
// 		year: 2019,
// 		time: 0
// 	}
// });

// MDL.Event.save(event1)
//     .then((eventData) => {
//         console.log(`${JSON.stringify(eventData, null, 2)}\n^^^^^Event Saved`);
//     })
//     .catch((err) => {
//         console.log(`Error: Failed To Save Event\n${err}`);
//     });

// MDL.Event.findAll()
//     .then((eventData) => {
//         console.log(`Event Data Found\n${JSON.stringify(eventData, null, 2)}`);
//     })
//     .catch((err) => {
//         console.log(`Error: Data Not Found\n${err}`);
//     });

// MDL.Event.findById("5c29aff230a171c29d0b13ae")
//     .then((eventData) => {
//         console.log(`Event Data Found\n${JSON.stringify(eventData, null, 2)}`);
//     })
//     .catch((err) => {
//         console.log(`Error: Data Not Found\n${err}`);
//     });

// MDL.Event.findByIdAndUpdate("5c29aff230a171c29d0b13ae", event1)
//     .then((eventData) => {
//         console.log(`Event Data Found\n${JSON.stringify(eventData, null, 2)}`);
//     })
//     .catch((err) => {
//         console.log(`Error: ${JSON.stringify(err, null, 2)}`);
//     });
// MDL.Event.findByIdAndDelete("5c294873e03ec5a91b31cc7b")
//     .then((eventData) => {
//         console.log(`Event Data Deleted\n${JSON.stringify(eventData, null, 2)}`);
//         return MDL.Event.findAll();
//     })
//     .then((eventData) => {
//         console.log(`All Data Found:\n${eventData}`);
//     })
//     .catch((err) => {
//         console.log(`Error: ${JSON.stringify(err, null, 2)}`);
//     });

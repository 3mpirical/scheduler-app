import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";
import { baseView } from "./_baseView";

const monthArr = baseView.monthArr;


const eventPaneView = {

    toggleEventPaneUp: function() {
        elements.calendar.classList.add("opacity-none");
        elements.calendarClearfix.classList.add("collapsed");
        elements.togglePaneBtn.classList.add("button-rotate-180");
    },

    toggleEventPaneDown: function() {
        elements.newForm.container.classList.remove("display-flex");
        elements.eventIndex.classList.add("display-flex");
        elements.calendar.classList.remove("opacity-none");
        elements.calendarClearfix.classList.remove("collapsed");
        elements.togglePaneBtn.classList.remove("button-rotate-180");
    },

    addNewEventPane: function() {
        elements.newForm.container.classList.add("display-flex");
    },

    clearSelectedHeader: function() {
        elements.eventPaneHeader.innerHTML = "";
    },

    printSelectedHeader: function() {

        elements.eventPaneHeader.innerHTML = `
            <span class="calendar__selected-day">${state.selectedDay}</span>
            <span class="calendar__selected-month">${monthArr[state.selectedMonth]}</span>
            <span class="calendar__selected-year">${state.selectedYear}</span>`
            ;
    },

    hideSelectedEvents: function() {
        elements.eventIndex.classList.remove("display-flex");
    },

    showSelectedEvents: function() {
        elements.eventIndex.classList.add("display-flex");
    },

    clearSelectedEvents: function() {
        elements.eventIndex.innerHTML = "";
    },

    printSelectedEvents: function() {
        const {selectedDay, selectedMonth, selectedYear} = state;
        MDL.Event.findByDayMonthYear(selectedDay, selectedMonth, selectedYear)
        .then((eventData) => {
            eventData.map((item, index, arr) => {
                const node = document.createElement("div");
                node.classList.add("event-index__event-container");
                node.innerHTML = `
                <p class="event-index__left">
                    ${item.type}<br>Time : ${item.dateExecuting.time}
                </p>

                <div class="event-index__event-name">${item.name}</div>

                <hr>

                <div class="event-index__description">
                    ${item.description}
                </div>

                <div class="event-index__bottom">
                    <img class="event-index__bottom__edit" src="./img/pencil.svg" alt="edit with pencil icon"></img>
                    <img class="event-index__bottom__delete" src="./img/trash-can.svg" alt="delete with trash can icon"></img>
                </div>

                `;
                return node;
            })
            .forEach((item, index, arr) => {
                elements.eventIndex.appendChild(item);
            });
        })
        .catch((err) => console.log(err));
    }

};



export { eventPaneView };

const elements = {
    calendarHeading: document.querySelector(".calendar__heading"),
    calendarSelected: document.querySelector(".calendar__selected"),

    calendarContainer: document.querySelector(".calendar__dates-container"),
    calendarBoxes: [...document.querySelectorAll(".calendar__box")],

    prevMonthButt: document.querySelector(".previous-month"),
    nextMonthButt: document.querySelector(".next-month"),

    calendarContent: () => {
            return [...document.querySelectorAll(".calendar__box-content")];
    },

    newEventForm: document.querySelector(".event-form"),

};

export { elements };

const elements = {
    calendar: document.querySelector(".calendar"),
    calendarClearfix: document.querySelector(".calendar-clearfix"),
    calendarHeading: document.querySelector(".calendar__heading"),
    calendarSelected: document.querySelector(".calendar__selected"),

    calendarContainer: document.querySelector(".calendar__dates-container"),
    calendarBoxes: [...document.querySelectorAll(".calendar__box")],

    prevMonthButt: document.querySelector(".previous-month"),
    nextMonthButt: document.querySelector(".next-month"),

    calendarContent: () => {
            return [...document.querySelectorAll(".calendar__box-content")];
    },

    togglePaneBtn: document.querySelector(".event-controls__size-toggle"),
    newEventBtn: document.querySelector(".event-controls__new-event"),

    newForm: {
        container: document.querySelector(".event-form"),
        type: document.querySelector(".event-form__type"),
        name: document.querySelector(".event-form__name"),
        description: document.querySelector(".event-form__description"),
        day: document.querySelector(".event-form__day"),
        month: document.querySelector(".event-form__month"),
        year: document.querySelector(".event-form__year"),
        time: document.querySelector(".event-form__time"),
    },

};

export { elements };

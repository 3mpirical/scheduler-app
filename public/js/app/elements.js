const elements = {
    calendarHeading: document.querySelector(".calendar__heading"),

    calendarSelected: document.querySelector(".calendar__selected"),
    calSelectedDay: document.querySelector(".calendar__selected-day"),
    calSelectedMonth: document.querySelector(".calendar__selected-month"),
    calSelectedYear: document.querySelector(".calendar__selected-year"),

    calendarContainer: document.querySelector(".calendar__dates-container"),
    calendarBoxes: [...document.querySelectorAll(".calendar__box")],

    prevMonthButt: document.querySelector(".previous-month"),
    nextMonthButt: document.querySelector(".next-month"),

    calendarContent: () => {
            return [...document.querySelectorAll(".calendar__box-content")];
    },
};

export { elements };

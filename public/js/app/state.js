const state = {
    headingMonth: null,
    headingYear: null,

    selectedDay: null,
    selectedMonth: null,
    selectedYear: null,

    selectedBox: null,
    indexOfBox: null,

    selectedId: null,

    calIsCollapsed: () => {
        return document.querySelector(".collapsed")? true : false;
    },
};

export { state };

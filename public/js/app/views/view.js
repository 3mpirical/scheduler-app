import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";

import { calendarView } from "./_calendarView";
import { headingView } from "./_headingView";
import { highlightView } from "./_highlightView";
import { eventPaneView } from "./_eventPaneView";


const VIEW = {

    ...calendarView,

    ...headingView,

    ...highlightView,

    ...eventPaneView,

};




export { VIEW };

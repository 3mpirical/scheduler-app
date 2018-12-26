import { MDL } from "../models/model";
import { state } from "../state";
import { elements } from "../elements";

import { calendarView } from "./_calendarView";
import { headingView } from "./_headingView";
import { selectedView } from "./_selectedView";
import { highlightView } from "./_highlightView";


const VIEW = {

    ...calendarView,

    ...headingView,

    ...selectedView,

    ...highlightView,

};




export { VIEW };

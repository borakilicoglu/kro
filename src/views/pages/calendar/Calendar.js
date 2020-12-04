import React, { useEffect } from "react";
import * as moment from "moment";

import { events, weekdaysShort } from "../../../@fake-db/calendar/calendar";

import CalendarHeader from "./CalendarHeader";
import CalendarSidebar from "./CalendarSidebar";
import CalendarMonthly from "./CalendarMonthly";

export default function Calendar() {
  // Set calendar mode
  const [mode, setMode] = React.useState(1);
  // Set calendar filter
  const [filter, setFilter] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });
  // Set calendar currentDate
  const [currentDate, setCurrentDate] = React.useState();

  const changeFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.checked });
  };

  const changeMode = (event) => {
    setMode(event.target.value);
  };

  const prev = () => {
    setCurrentDate(
      moment(currentDate).subtract(1, "months").format("MM-DD-YYYY")
    );
  };
  const next = () => {
    setCurrentDate(moment(currentDate).add(1, "months").format("MM-DD-YYYY"));
  };
  const reset = () => {
    setCurrentDate(moment(new Date()).utc().format("MM-DD-YYYY"));
  };

  useEffect(() => {
    console.log(moment(new Date()).utc().format("MM-DD-YYYY"));
    setCurrentDate(moment(new Date()).utc().format("MM-DD-YYYY"));
    return () => {};
  }, []);

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap flex-auto w-full h-full bg-white">
        <CalendarSidebar filter={filter} changeFilter={changeFilter} />
        <div className="w-3/4 min-h-full">
          <div className="flex flex-col h-full">
            <CalendarHeader
              prev={prev}
              next={next}
              reset={reset}
              mode={mode}
              currentDate={currentDate}
              changeMode={changeMode}
            />
            {mode === 1 && (
              <CalendarMonthly
                events={events}
                weekdaysShort={weekdaysShort}
                currentDate={currentDate}
              />
            )}
            {mode === 2 && <div className="">{}</div>}
            {mode === 3 && <div className="">{}</div>}
            {mode === 4 && <div className="">{}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

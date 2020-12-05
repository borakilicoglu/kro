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
  // Set calendar current month
  const [current, setCurrent] = React.useState();

  const changeFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.checked });
  };

  const changeMode = (event) => {
    setMode(event.target.value);
  };

  const prev = () => {
    setCurrent(moment(current).subtract(1, "months").startOf("month"));
  };
  const next = () => {
    setCurrent(moment(current).add(1, "months").startOf("month"));
  };
  const reset = () => {
    setCurrent(moment());
  };

  useEffect(() => {
    setCurrent(moment());
    return () => {};
  }, []);

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap flex-auto w-full h-full bg-white">
        <CalendarSidebar filter={filter} changeFilter={changeFilter} />
        <div className="w-3/4 min-h-full">
          <div className="flex flex-col h-full">
            {current && (
              <CalendarHeader
                prev={prev}
                next={next}
                reset={reset}
                date={current}
                mode={mode}
                changeMode={changeMode}
              />
            )}
            {current && mode === 1 && (
              <CalendarMonthly
                events={events}
                currentMonth={current}
                weekdaysShort={weekdaysShort}
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

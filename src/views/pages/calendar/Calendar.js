import React from "react";
import _ from "lodash";
import * as moment from "moment";

import { events, shortWeekdays } from "../../../@fake-db/calendar/calendar";

import CalendarHeader from "./CalendarHeader";
import CalendarSidebar from "./CalendarSidebar";

const isFirstDay = (day) => day === currentMonthDates[0].format("ddd");
const firstDayOfTheCurrentMonth = () => shortWeekdays.findIndex(isFirstDay);

const currentMonthDates = new Array(moment().daysInMonth())
  .fill(null)
  .map((x, i) => moment().startOf("month").add(i, "days"));

const prevMonthDates = new Array(moment().subtract(1, "month").daysInMonth())
  .fill(null)
  .map((x, i) => moment().subtract(1, "month").startOf("month").add(i, "days"));

const nextMonthDates = new Array(moment().add(1, "month").daysInMonth())
  .fill(null)
  .map((x, i) => moment().add(1, "month").startOf("month").add(i, "days"));

const program = (date) => {
  let data = events.filter((event) => {
    let end = parseInt(moment(event.end).format("DD"));
    let start = parseInt(moment(event.start).format("DD"));
    let endOfTheYear = moment(event.end).format("YYYY");
    return (
      start === date || (end === date && endOfTheYear !== 9999 && end !== 31)
    );
  });
  return (
    data &&
    data.map((item, index) => (
      <div
        key={index}
        className={
          "m-2 rounded-md text-white text-xs mb-1 p-1 " +
          (item.type === "personal" ? "bg-teal-600" : "") +
          (item.type === "work" ? "bg-indigo-600" : "") +
          (item.type === "appointment" ? "bg-pink-600" : "")
        }
      >
        <p className="truncate">
          {moment(item.start).format("h:mm")} {item.title}
        </p>
      </div>
    ))
  );
};

const header = shortWeekdays.map((day, index) => (
  <span
    className="uppercase text-xs font-normal pt-2 text-gray-700 border-r flex-1 text-center items-center"
    key={index}
  >
    {day}
  </span>
));

const compositeDays = [
  ..._.takeRight(prevMonthDates, firstDayOfTheCurrentMonth()),
  ...currentMonthDates,
  ..._.slice(
    nextMonthDates,
    0,
    35 - (currentMonthDates.length + firstDayOfTheCurrentMonth())
  ),
];

const calendar = (
  <>
    <div className="flex w-full justify-around items-center flex-row">
      {header}
    </div>
    <div className="grid grid-cols-7 gap-0 text-center h-full">
      {compositeDays &&
        compositeDays.map((day, index) => (
          <div className="border-b border-r" key={index}>
            <span
              className={
                "rounded-full w-6 h-6 leading-6 text-xs mt-1 m-auto block text-center " +
                (moment().format("L") === day.format("L")
                  ? "bg-indigo-600 text-white"
                  : null)
              }
            >
              {day._d.getDate()}
            </span>
            {program(day._d.getDate())}
          </div>
        ))}
    </div>
  </>
);

export default function Calendar() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [filtered, setFilter] = React.useState(1);

  const filterCalendar = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap flex-auto w-full h-full bg-white">
        <CalendarSidebar state={state} handleChange={handleChange} />
        <div className="w-3/4 min-h-full">
          <div className="flex flex-col h-full">
            <CalendarHeader
              filtered={filtered}
              filterCalendar={filterCalendar}
            />
            {filtered === 1 && calendar}
            {filtered === 2 && <div className="">{}</div>}
            {filtered === 3 && <div className="">{}</div>}
            {filtered === 4 && <div className="">{}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import _ from "lodash";
import * as moment from "moment";

const Event = ({ date, events }) => {
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

const CalendarMonthly = ({ events, weekdaysShort, currentDate }) => {
  useEffect(() => {
    return () => {};
  }, [currentDate]);

  const currentMonthDates = new Array(moment(currentDate).daysInMonth())
    .fill(null)
    .map((x, i) => moment().startOf("month").add(i, "days"));

  const prevMonthDates = new Array(
    moment(currentDate).subtract(1, "month").daysInMonth()
  )
    .fill(null)
    .map((x, i) =>
      moment().subtract(1, "month").startOf("month").add(i, "days")
    );

  const nextMonthDates = new Array(
    moment(currentDate).add(1, "month").daysInMonth()
  )
    .fill(null)
    .map((x, i) => moment().add(1, "month").startOf("month").add(i, "days"));

  const isFirstDay = (day) => day === currentMonthDates[0].format("ddd");

  const compositeDays = [
    ..._.takeRight(prevMonthDates, weekdaysShort.findIndex(isFirstDay)),
    ...currentMonthDates,
    ..._.slice(
      nextMonthDates,
      0,
      35 - (currentMonthDates.length + weekdaysShort.findIndex(isFirstDay))
    ),
  ];
  return (
    <>
      <div className="flex w-full justify-around items-center flex-row">
        {weekdaysShort.map((day, index) => (
          <span
            className="uppercase text-xs font-normal pt-2 text-gray-700 border-r flex-1 text-center items-center"
            key={index}
          >
            {day}
          </span>
        ))}
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
              <Event date={day._d.getDate()} events={events} />
            </div>
          ))}
      </div>
    </>
  );
};

export default CalendarMonthly;

import React from "react";
import _ from "lodash";
// import { Line } from "rc-progress";
// import AccountBalance from "../../@nucleo/components/chart/AccountBalance";

export default function Calendar() {
  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap w-full min-h-screen bg-white">
        <div className="w-1/4 border-r">
          <h2 className="p-8 text-3xl font-bold">Calendar</h2>
          <p className="px-8 text-lg">Calendars</p>
        </div>
        <div className="w-3/4"></div>
      </div>
    </div>
  );
}

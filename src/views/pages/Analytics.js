import React from "react";
import _ from "lodash";
import PageHeader from "../../@nucleo/components/page-header/PageHeader";
import UniqueVisitor from "../../@nucleo/components/chart/UniqueVisitor";
import PieChart from "../../@nucleo/components/chart/PieChart";

export default function Analytics() {
  return (
    <div className="flex flex-col flex-auto w-full p-8 xs:p-2">
      <div className="flex flex-wrap w-full">
        <PageHeader
          title="Analytics dashboard"
          desc="Monitor key metrics, check reporting and review insights"
        />
        {_.times(6, (i) => (
          <div
            className="flex flex-auto w-1/3 min-w-80 h-50 p-4 theme-dark bg-transparent"
            key={i}
          >
            <div className="flex flex-col flex-auto p-6 pb-4 bg-white shadow-md rounded overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="font-bold text-md text-gray-600 uppercase tracking-wider">
                    UNIQUE VISITORS
                  </div>
                  <div className="text-xs text-hint font-medium">
                    Number of unique visitors
                  </div>
                </div>
                <div className="-mr-2">
                  <button
                    aria-haspopup="true"
                    mat-button=""
                    className="mat-focus-indicator mat-menu-trigger h-8 min-h-8 px-2 mat-button mat-button-base"
                  >
                    <span className="mat-button-wrapper">
                      <span className="font-medium text-xs text-hint">
                        30 days
                      </span>
                    </span>
                    <div
                      matripple=""
                      className="mat-ripple mat-button-ripple"
                    ></div>
                    <div className="mat-button-focus-overlay"></div>
                  </button>
                </div>
              </div>
              <div className="flex items-center h-20 mt-auto">
                <div className="flex flex-col">
                  <div className="font-semibold text-4xl tracking-tighter leading-tight text-gray-700">
                    17,663
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-6"
                      x="240"
                      y="1968"
                      viewBox="0 0 24 24"
                      fill="#f05252"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z"></path>
                    </svg>
                    <div className="font-medium text-xs ml-2 text-secondary leading-none whitespace-no-wrap">
                      <span className="text-red-500">2%</span> less purchase
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-auto h-full ml-6">
                  <UniqueVisitor />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col w-full mt-10 mb-3 px-4">
          <h3 className="m-0 text-2xl font-semibold">
            Audience &amp; Behavior
          </h3>
          <div className="text-secondary tracking-tight">
            Demographic properties and general behaviors of the users
          </div>
        </div>
        {_.times(6, (i) => (
          <div
            className="flex flex-auto w-1/3 min-w-80 h-50 p-4 theme-dark bg-transparent"
            key={i}
          >
            <div className="flex flex-col flex-auto p-6 pb-4 bg-white shadow-md rounded overflow-hidden">
              <PieChart></PieChart>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

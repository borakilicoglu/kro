import React from "react";
import _ from "lodash";
import AccountBalance from "../../@nucleo/components/chart/AccountBalance";
import PageHeader from "../../@nucleo/components/page-header/PageHeader";

export default function Finance() {
  return (
    <div className="flex flex-col flex-auto w-full p-8 xs:p-2">
      <div className="flex flex-wrap w-full">
        <PageHeader />

        <div className="flex flex-wrap w-1/2 lt-xl:w-full">
          <div className="flex flex-auto w-full min-w-80 p-4 lt-xl:w-1/2">
            <div className="relative flex flex-col flex-auto p-6 pr-3 pb-3 bg-white border-green rounded border-l-4 shadow-md overflow-hidden">
              <div className="absolute bottom-0 right-0 w-24 h-24 -m-6 opacity-25">
                <svg
                  className="text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fit=""
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="font-bold text-md text-secondary uppercase tracking-wider">
                    Previous Statement
                  </div>
                  <div className="text-green-600 font-medium text-xs">
                    Paid on May 25, 2020
                  </div>
                </div>
                <div className="ml-auto">
                  <button>
                    <svg
                      className="w-6"
                      x="480"
                      y="1200"
                      viewBox="0 0 24 24"
                      fit=""
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-row flex-wrap mt-4 -mx-6">
                <div className="flex flex-col mx-6 my-3 xs:w-full">
                  <div className="font-semibold text-xs text-hint uppercase tracking-wider leading-none">
                    Card Limit
                  </div>
                  <div className="mt-2 font-medium text-2xl leading-none">
                    $34,500.00
                  </div>
                </div>
                <div className="flex flex-col mx-6 my-3 xs:w-full">
                  <div className="font-semibold text-xs text-hint uppercase tracking-wider leading-none">
                    Spent
                  </div>
                  <div className="mt-2 font-medium text-2xl leading-none">
                    $27,221.21
                  </div>
                </div>
                <div className="flex flex-col mx-6 my-3 xs:w-full">
                  <div className="font-semibold text-xs text-hint uppercase tracking-wider leading-none">
                    Minimum
                  </div>
                  <div className="mt-2 font-medium text-2xl leading-none">
                    $7,331.94
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-auto w-full min-w-80 p-4 lt-xl:w-1/2">
            <div className="relative flex flex-col flex-auto p-6 pr-3 pb-3 bg-white border-red rounded border-l-4 shadow-md overflow-hidden">
              <div className="absolute bottom-0 right-0 w-24 h-24 -m-6 opacity-25">
                <svg
                  className="text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fit=""
                  height="100%"
                  width="100%"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="font-bold text-md text-secondary uppercase tracking-wider">
                    Previous Statement
                  </div>
                  <div className="text-red-600 font-medium text-xs">
                    Must be paid before June 26, 2020
                  </div>
                </div>
                <div className="ml-auto">
                  <button>
                    <svg
                      className="w-6"
                      x="480"
                      y="1200"
                      viewBox="0 0 24 24"
                      fit=""
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-row flex-wrap mt-4 -mx-6">
                <div className="flex flex-col mx-6 my-3 xs:w-full">
                  <div className="font-semibold text-xs text-hint uppercase tracking-wider leading-none">
                    Card Limit
                  </div>
                  <div className="mt-2 font-medium text-2xl leading-none">
                    $34,500.00
                  </div>
                </div>
                <div className="flex flex-col mx-6 my-3 xs:w-full">
                  <div className="font-semibold text-xs text-hint uppercase tracking-wider leading-none">
                    Spent
                  </div>
                  <div className="mt-2 font-medium text-2xl leading-none">
                    $27,221.21
                  </div>
                </div>
                <div className="flex flex-col mx-6 my-3 xs:w-full">
                  <div className="font-semibold text-xs text-hint uppercase tracking-wider leading-none">
                    Minimum
                  </div>
                  <div className="mt-2 font-medium text-2xl leading-none">
                    $7,331.94
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-auto w-1/2 min-w-80 h-90 p-4">
          <div className="flex flex-col flex-auto bg-white shadow-md rounded overflow-hidden">
            <div className="flex flex-col p-6 pr-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="font-bold text-md text-secondary uppercase tracking-wider mr-4">
                    Account Balance
                  </div>
                  <div className="text-xs text-hint font-medium">
                    Monthly balance growth and avg. monthly income
                  </div>
                </div>
                <div>
                  <button
                    aria-haspopup="true"
                    mat-button=""
                    className="mat-focus-indicator mat-menu-trigger h-8 min-h-8 px-2 mat-button mat-button-base"
                    ng-reflect-menu="[object Object]"
                  >
                    <span className="mat-button-wrapper">
                      <span className="font-medium text-xs text-hint">
                        12 months
                      </span>
                    </span>
                    <div
                      matripple=""
                      className="mat-ripple mat-button-ripple"
                      ng-reflect-disabled="false"
                      ng-reflect-centered="false"
                      ng-reflect-trigger="[object HTMLButtonElement]"
                    ></div>
                    <div className="mat-button-focus-overlay"></div>
                  </button>
                  <mat-menu className="ng-tns-c58-8"></mat-menu>
                </div>
              </div>
              <div className="flex items-start mt-6 mr-2">
                <div className="flex flex-col">
                  <div className="font-semibold text-4xl tracking-tighter lt-md:text-3xl">
                    38.33%
                  </div>
                  <div className="font-medium text-xs text-secondary leading-none">
                    Average Monthly Growth
                  </div>
                </div>
                <div className="flex flex-col ml-16 lt-md:ml-8">
                  <div className="font-semibold text-4xl tracking-tighter lt-md:text-3xl">
                    $45,332.00
                  </div>
                  <div className="font-medium text-xs text-secondary leading-none">
                    Average Monthly Income
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-auto">
              <div className="flex-auto w-full h-full">
                <AccountBalance />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-auto w-2/3 p-4 overflow-hidden lt-xl:w-full">
          <div className="flex flex-col flex-auto bg-white shadow-md rounded overflow-hidden">
            <div className="p-6">
              <div className="font-bold text-md text-secondary uppercase tracking-wider">
                Recent transactions
              </div>
              <div className="text-xs text-hint font-medium">
                1 pending, 4 completed
              </div>
            </div>
            <div className="overflow-auto">
              <table className="table-auto text-xs">
                <thead className="text-gray-600">
                  <tr className="bg-gray-100 border-b border-t text-left">
                    <th className="w-1/4 py-4 px-6">Transaction ID</th>
                    <th className="w-1/4 py-4 px-6">Date</th>
                    <th className="w-1/4 py-4 px-6">Name</th>
                    <th className="w-1/4 py-4 px-6">Amount</th>
                    <th className="w-1/4 py-4 px-6">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {_.times(5, (i) => (
                    <tr className="border-b">
                      <td className="text-gray-600 py-4 px-6">528651571NT</td>
                      <td className="py-4 px-6">Oct 08, 2019 </td>
                      <td className="py-4 px-6">Morgan Page</td>
                      <td className="py-4 px-6">$1,358.75</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center font-semibold text-xs px-2 rounded-full tracking-wide uppercase bg-green-200 text-green-900">
                          <span className="w-2 h-2 rounded-full mr-2 bg-green-600"></span>
                          <span className="pr-2px leading-relaxed whitespace-no-wrap">
                            completed
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b">
                    <td className="text-gray-600 py-4 px-6">528651571NT</td>
                    <td className="py-4 px-6">Oct 08, 2019 </td>
                    <td className="py-4 px-6">Morgan Page</td>
                    <td className="py-4 px-6">$1,358.75</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center font-semibold text-xs px-2 rounded-full tracking-wide uppercase bg-red-200 text-red-900">
                        <span className="w-2 h-2 rounded-full mr-2 bg-red-600"></span>
                        <span className="pr-2px leading-relaxed whitespace-no-wrap">
                          pending
                        </span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-4 py-4">
              <button className="bg-white hover:bg-indigo-100 text-indigo-700 font-normal py-2 px-4 rounded">
                See all transactions
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-auto w-1/3 min-w-80 p-4 lt-xl:w-full">
          <div className="flex flex-col flex-auto p-6 bg-white rounded shadow-md">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="font-bold text-md text-secondary uppercase tracking-wider">
                  Budget
                </div>
                <div className="text-hint text-xs font-medium">
                  Monthly budget summary
                </div>
              </div>
              <div className="ml-auto">
                <button>
                  <svg
                    className="w-6"
                    x="480"
                    y="1200"
                    viewBox="0 0 24 24"
                    fit=""
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="my-4">
                Last month; you had <strong>223</strong> expense transactions,
                <strong>12</strong> savings entries and <strong>4</strong>
                bills.
              </div>
              <div className="flex items-center my-4">
                <div className="flex items-center justify-center w-14 h-14 rounded red-100">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fit=""
                    height="100%"
                    width="100%"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-auto ml-4 leading-none">
                  <div className="font-semibold text-xs text-hint uppercase tracking-wider">
                    Expenses
                  </div>
                  <div className="mt-2 font-medium text-2xl">$11,763.34</div>

                  <svg
                    width="100%"
                    height="4"
                    focusable="false"
                    className="mat-progress-bar-background mat-progress-bar-element"
                  >
                    <defs>
                      <pattern
                        x="4"
                        y="0"
                        width="8"
                        height="4"
                        patternUnits="userSpaceOnUse"
                        id="mat-progress-bar-0"
                      >
                        <circle cx="2" cy="2" r="2"></circle>
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url('/dashboards/finance#mat-progress-bar-0')"
                    ></rect>
                  </svg>
                  <div className="mat-progress-bar-buffer mat-progress-bar-element"></div>
                  <div
                    className="mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element"
                    style={{ transform: "scaleX(0.588167)" }}
                  ></div>
                  <div className="mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"></div>
                </div>
                <div className="flex items-end justify-end min-w-18 mt-auto ml-6">
                  <div className="text-lg leading-none">2.6%</div>

                  <svg
                    x="672"
                    y="96"
                    viewBox="0 0 24 24"
                    fit=""
                    height="100%"
                    width="100%"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import _ from "lodash";
import { Line } from "rc-progress";
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
                <div className="flex items-center justify-center rounded bg-red-200 py-4 px-4">
                  <svg
                    className="w-6 text-red-900"
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-auto ml-4 leading-none">
                  <div className="font-semibold text-xs text-hint uppercase tracking-wider">
                    Expenses
                  </div>
                  <div className="mt-2 mb-3 font-medium text-xl">
                    $11,763.34
                  </div>

                  <Line
                    percent="17"
                    strokeWidth="4"
                    strokeColor="#c81e1e"
                    trailColor="#fed7d7"
                    trailWidth="4"
                  />
                </div>
                <div className="flex items-end justify-end w-16 mt-auto ml-6">
                  <div className="text-lg leading-none">2.6%</div>
                  <svg
                    className="w-4"
                    x="672"
                    y="96"
                    viewBox="0 0 24 24"
                    fit=""
                    fill="#3F83F8"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center my-4">
                <div className="flex items-center justify-center rounded bg-indigo-200 py-4 px-4">
                  <svg
                    className="w-6 text-indigo-900"
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
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-auto ml-4 leading-none">
                  <div className="font-semibold text-xs text-hint uppercase tracking-wider">
                    Savings
                  </div>
                  <div className="mt-2 mb-3 font-medium text-xl">
                    $10,974.12
                  </div>

                  <Line
                    percent="6"
                    strokeWidth="4"
                    strokeColor="#5850ec"
                    trailColor="#c3dafe"
                    trailWidth="4"
                  />
                </div>
                <div className="flex items-end justify-end w-16 mt-auto ml-6">
                  <div className="text-lg leading-none">12.7%</div>
                  <svg
                    className="w-4"
                    x="672"
                    y="96"
                    viewBox="0 0 24 24"
                    fit=""
                    fill="#3F83F8"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center my-4">
                <div className="flex items-center justify-center rounded bg-teal-200 py-4 px-4">
                  <svg
                    className="w-6 text-indigo-900"
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-auto ml-4 leading-none">
                  <div className="font-semibold text-xs text-hint uppercase tracking-wider">
                    Bills
                  </div>
                  <div className="mt-2 mb-3 font-medium text-xl">$1,789.22</div>

                  <Line
                    percent="100"
                    strokeWidth="4"
                    strokeColor="#5850ec"
                    trailColor="#c3dafe"
                    trailWidth="4"
                  />
                </div>
                <div className="flex items-end justify-end w-16 mt-auto ml-6">
                  <div className="text-lg leading-none">105.7%</div>
                  <svg
                    className="w-4"
                    x="672"
                    y="96"
                    viewBox="0 0 24 24"
                    fit=""
                    fill="#3F83F8"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="text-xs text-hint">
              Exceeded your personal limit on <strong>bills</strong>! Be careful
              next month.
            </div>
            <div className="flex items-center mt-auto">
              <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded inline-flex items-center">
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Download Summary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

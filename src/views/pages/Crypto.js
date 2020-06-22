import React from "react";
import _ from "lodash";
// import { Line } from "rc-progress";
// import AccountBalance from "../../@nucleo/components/chart/AccountBalance";

export default function Analytics() {
  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap w-full min-h-screen bg-white">
        <div className="w-1/4 border-r">
          <div className="overflow-hidden h-auto">
            {_.times(6, (i) => (
              <div
                className="flex flex-0 items-center px-4 py-5 border-b ng-star-inserted"
                key={i}
              >
                <div className="flex flex-col flex-auto pr-6">
                  <div className="flex items-baseline">
                    <div className="mr-1 font-medium text-xs text-secondary">
                      Ethereum
                    </div>
                    <div className="font-medium text-sm text-hint uppercase tracking-wider">
                      (ETH)
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="min-w-20 font-mono text-2xl tracking-tighter leading-none">
                      $170.46
                    </div>
                    <svg
                      className="w-6"
                      x="816"
                      y="96"
                      viewBox="0 0 24 24"
                      fit=""
                      fill="#0e9f6e"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path d="M7 14l5-5 5 5H7z"></path>
                    </svg>
                    <div className="font-mono font-medium text-sm leading-none text-green-500">
                      2.35%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex flex-wrap items-center px-6 py-3 border-b xs:pl-4">
            <button className="mr-6 md:hidden mat-icon-button mat-button-base">
              <svg
                className="w-6"
                x="672"
                y="1152"
                viewBox="0 0 24 24"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
              <div
                matripple=""
                className="mat-ripple mat-button-ripple mat-button-ripple-round"
              ></div>
              <div className="mat-button-focus-overlay"></div>
            </button>
            <div className="flex flex-col flex-auto my-3 mr-6">
              <div className="flex items-center">
                <div className="font-medium text-2xl text-secondary mr-2">
                  Bitcoin
                </div>
                <div className="font-medium text-lg text-hint tracking-wider">
                  (BTC)
                </div>
              </div>
              <div className="flex items-center mt-1">
                <div className="mr-2 font-mono text-3xl leading-none tracking-tight">
                  $8,878.48
                </div>
                <svg
                  className="w-6"
                  x="816"
                  y="96"
                  viewBox="0 0 24 24"
                  fit=""
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path d="M7 14l5-5 5 5H7z"></path>
                </svg>

                <div className="font-mono font-medium text-lg leading-none text-green">
                  0.17%
                </div>
              </div>
            </div>
            <div className="flex items-center my-3 xs:hidden">
              <div className="p-4 leading-none border border-r-0">
                <div className="font-bold text-xs text-hint uppercase tracking-wider">
                  Market Cap
                </div>
                <div className="mt-2 font-mono text-xl">$148.75B</div>
              </div>
              <div className="p-4 leading-none border border-r-0">
                <div className="font-bold text-xs text-hint uppercase tracking-wider">
                  Volume
                </div>
                <div className="mt-2 font-mono text-xl">$22.90B</div>
              </div>
              <div className="p-4 leading-none border border-r-0">
                <div className="font-bold text-xs text-hint uppercase tracking-wider">
                  Supply
                </div>
                <div className="mt-2 font-mono text-xl">18.17M</div>
              </div>
              <div className="p-4 leading-none border">
                <div className="font-bold text-xs text-hint uppercase tracking-wider">
                  All Time High
                </div>
                <div className="mt-2 font-mono text-xl">$19,891.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

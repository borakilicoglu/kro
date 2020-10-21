import React from "react";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: "-500",
        }}
        viewBox="0 0 1531 891"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 182c144.327 47.973 534.462 219.712 440.509 369.87C346.555 702.028 79.877 662.846 0 638V182z"
          fill="#a4cafe"
          style={{ opacity: ".1" }}
        ></path>
        <path
          d="M1405 848c-424.366 158.009-437-164-437-272s102-425 563-576v769c-21.333 29.333-63.333 55.667-126 79z"
          fill="#a4cafe"
          style={{ opacity: ".1" }}
        ></path>
        <path
          d="M1531 162c-122.914-17.284-377.96 33.191-543.433 206.414C822.095 541.636 797.342 648.75 835.842 731.622c38.5 82.871 198.243 134.841 400.555 92.053C1438.71 780.886 1492.752 775.894 1531 768V162z"
          fill="#a4cafe"
          style={{ opacity: ".1" }}
        ></path>
      </svg>
      <div className="flex flex-col">
        <h3 className="text-3xl font-bold mt-16 mb-12">
          Welcome! How can we help you today?
        </h3>
        <input
          class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow"
          type="text"
          placeholder="Enter a question, topic or keyword"
        />
        <h5 className="text-black font-semibold text-center mt-16 text-xl">
          ... or choose a category to quickly find the help you need
        </h5>
        <div class="grid grid-cols-3 gap-8 mt-16">
          <div className="h-64 w-64 bg-white rounded-md shadow text-center">
            <DescriptionTwoToneIcon
              style={{ fontSize: "32px", color: "#4C51BF" }}
            ></DescriptionTwoToneIcon>
            <h5 className="font-bold">FAQs</h5>
            <p className="">Frequently asked questions and answers</p>
          </div>
          <div className="h-64 w-64 bg-white rounded-md shadow text-center">
            <h5 className="font-bold">Guides</h5>
            <p className="">Articles and resources to guide you</p>
          </div>
          <div className="h-64 w-64 bg-white rounded-md shadow text-center">
            <h5 className="font-bold">Support</h5>
            <p className="">Contact us for more detailed support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

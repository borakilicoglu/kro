import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";
import LibraryBooksTwoToneIcon from "@material-ui/icons/LibraryBooksTwoTone";
import HelpTwoToneIcon from "@material-ui/icons/HelpTwoTone";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { getFaqs } from "../../../redux/actions/helpcenter/index.js";

const Accordion = withStyles({
  root: {
    border: "0px",
    borderRadius: "0.50rem !important",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(getFaqs());
    return () => {};
  }, []);

  const { faqs } = useSelector((state) => state.helpcenter);

  useEffect(() => {
    setData(faqs);
    return () => {};
  }, [faqs]);

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
      <div className="flex flex-col justify-center align-items">
        <h3 className="text-3xl font-bold mt-16 mb-12 text-center">
          Welcome! How can we help you today?
        </h3>
        <input
          className="appearance-none block m-auto w-3/4 bg-white text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow"
          type="text"
          placeholder="Enter a question, topic or keyword"
        />
        <h5 className="text-black font-semibold text-center mt-16 text-xl">
          ... or choose a category to quickly find the help you need
        </h5>
        <div className="grid grid-cols-3 gap-8 mt-16 m-auto">
          <div className="h-64 w-64 bg-white rounded-md shadow text-center p-12">
            <DescriptionTwoToneIcon
              style={{ fontSize: "58px", color: "#4C51BF" }}
            ></DescriptionTwoToneIcon>
            <h5 className="font-bold pt-6">FAQs</h5>
            <p className="text-gray-600">
              Frequently asked questions and answers
            </p>
          </div>
          <div className="h-64 w-64 bg-white rounded-md shadow text-center p-12">
            <LibraryBooksTwoToneIcon
              style={{ fontSize: "58px", color: "#4C51BF" }}
            ></LibraryBooksTwoToneIcon>
            <h5 className="font-bold pt-6">Guides</h5>
            <p className="text-gray-600">Articles and resources to guide you</p>
          </div>
          <div className="h-64 w-64 bg-white rounded-md shadow text-center p-12">
            <HelpTwoToneIcon
              style={{ fontSize: "58px", color: "#4C51BF" }}
            ></HelpTwoToneIcon>
            <h5 className="font-bold pt-6">Support</h5>
            <p className="text-gray-600">
              Contact us for more detailed support
            </p>
          </div>
        </div>
        <div className="m-auto w-3/4">
          <h3 className="text-3xl font-bold mt-24 text-center">
            Most frequently asked questions
          </h3>
          <h5 className="text-gray-500 font-normal text-center text-md">
            Here are the most frequently asked questions you may check before
            getting started
          </h5>
          <div className="mt-12 mb-16">
            {data.length > 0 &&
              data
                .filter(
                  (faq) =>
                    faq.categoryId == "28924eab-97cc-465a-ba21-f232bb95843f"
                )
                .map((faq, index) => (
                  <Accordion
                    key={index}
                    className="my-6"
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography className="w-full p-1">
                        {faq.question}
                      </Typography>
                      {/* <Typography className={classes.secondaryHeading}>
                        I am an accordion
                      </Typography> */}
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-gray-600">
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

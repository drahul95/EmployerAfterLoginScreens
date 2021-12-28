import React from "react";
import "./Dashboard.scss";
import { Typography, Box, Button, Tabs, Tab } from "@material-ui/core";
import PropTypes from "prop-types";
import StackImages from "../../images/stackimage.png";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Calendar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box component="div" className="calendar_cont">
      <Box component="div">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="calendar_div"
        >
          <Tab label="Day" {...a11yProps(0)} />
          <Tab label="Week" {...a11yProps(1)} />
          <Tab label="Month" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box component="div" className="day_div">
          <Box component="div" className="daydatediv dis_flex">
            <Box component="div" className="datearea">
              <Typography variant="span" className="datetext">
                17, Tue, June
              </Typography>
              <Typography variant="span" className="yeartext block">
                2020
              </Typography>
            </Box>
            <Box
              component="div"
              className="arrowdiv mt-2 marginautoright dis_flex"
            >
              <Button className="triangle-left me-3"></Button>
              <Button className="triangle-right"></Button>
            </Box>
          </Box>
          <Box component="div" className="schedulediv">
            <Typography variant="span" className="title">
              Today's Schedule
            </Typography>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightbluecolor border16">
                <Typography variant="span" className="time darkcolortext">
                  10.00 <br />
                  AM
                </Typography>
              </Box>
              <Box
                component="div"
                className="roundsdiv lightbluecolor border16"
              >
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkcolortext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightyellow border16">
                <Typography variant="span" className="time darkyellowtext">
                  02.00 <br />
                  PM
                </Typography>
              </Box>
              <Box component="div" className="roundsdiv lightyellow border16">
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkyellowtext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightbluecolor border16">
                <Typography variant="span" className="time darkcolortext">
                  10.00 <br />
                  AM
                </Typography>
              </Box>
              <Box
                component="div"
                className="roundsdiv lightbluecolor border16"
              >
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkcolortext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightyellow border16">
                <Typography variant="span" className="time darkyellowtext">
                  02.00 <br />
                  PM
                </Typography>
              </Box>
              <Box component="div" className="roundsdiv lightyellow border16">
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkyellowtext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box component="div" className="day_div">
          <Box component="div" className="daydatediv dis_flex">
            <Box component="div" className="datearea">
              <Typography variant="span" className="datetext">
                17, Tue, June
              </Typography>
              <Typography variant="span" className="yeartext block">
                2020
              </Typography>
            </Box>
            <Box
              component="div"
              className="arrowdiv mt-2 marginautoright dis_flex"
            >
              <Button className="triangle-left me-3"></Button>
              <Button className="triangle-right"></Button>
            </Box>
          </Box>
          <Box component="div" className="schedulediv">
            <Typography variant="span" className="title">
              Today's Schedule
            </Typography>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightbluecolor border16">
                <Typography variant="span" className="time darkcolortext">
                  10.00 <br />
                  AM
                </Typography>
              </Box>
              <Box
                component="div"
                className="roundsdiv lightbluecolor border16"
              >
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkcolortext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightyellow border16">
                <Typography variant="span" className="time darkyellowtext">
                  02.00 <br />
                  PM
                </Typography>
              </Box>
              <Box component="div" className="roundsdiv lightyellow border16">
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkyellowtext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightbluecolor border16">
                <Typography variant="span" className="time darkcolortext">
                  10.00 <br />
                  AM
                </Typography>
              </Box>
              <Box
                component="div"
                className="roundsdiv lightbluecolor border16"
              >
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkcolortext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightyellow border16">
                <Typography variant="span" className="time darkyellowtext">
                  02.00 <br />
                  PM
                </Typography>
              </Box>
              <Box component="div" className="roundsdiv lightyellow border16">
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkyellowtext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box component="div" className="day_div">
          <Box component="div" className="daydatediv dis_flex">
            <Box component="div" className="datearea">
              <Typography variant="span" className="datetext">
                17, Tue, June
              </Typography>
              <Typography variant="span" className="yeartext block">
                2020
              </Typography>
            </Box>
            <Box
              component="div"
              className="arrowdiv mt-2 marginautoright dis_flex"
            >
              <Button className="triangle-left me-3"></Button>
              <Button className="triangle-right"></Button>
            </Box>
          </Box>
          <Box component="div" className="schedulediv">
            <Typography variant="span" className="title">
              Schedule's on 17th
            </Typography>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightbluecolor border16">
                <Typography variant="span" className="time darkcolortext">
                  10.00 <br />
                  AM
                </Typography>
              </Box>
              <Box
                component="div"
                className="roundsdiv lightbluecolor border16"
              >
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkcolortext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightyellow border16">
                <Typography variant="span" className="time darkyellowtext">
                  02.00 <br />
                  PM
                </Typography>
              </Box>
              <Box component="div" className="roundsdiv lightyellow border16">
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkyellowtext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightbluecolor border16">
                <Typography variant="span" className="time darkcolortext">
                  10.00 <br />
                  AM
                </Typography>
              </Box>
              <Box
                component="div"
                className="roundsdiv lightbluecolor border16"
              >
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkcolortext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="schcont dis_flex">
              <Box component="div" className="timediv lightyellow border16">
                <Typography variant="span" className="time darkyellowtext">
                  02.00 <br />
                  PM
                </Typography>
              </Box>
              <Box component="div" className="roundsdiv lightyellow border16">
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Interview Rounds
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  MCQ, Face to Face
                </Typography>
                <Typography
                  variant="span"
                  className="roundstext block font16 mb-2"
                >
                  Primary Chemistry Teacher
                </Typography>
                <Box component="div" className="candi dis_flex">
                  <Box component="div" className="candiimagesstack">
                    <img src={BASE_URL + StackImages} alt="" />
                  </Box>
                  <Typography
                    variant="span"
                    className="roundstext_candi mt-2 ms-2 font14 darkyellowtext"
                  >
                    20 Candidates Attending
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
export default Calendar;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

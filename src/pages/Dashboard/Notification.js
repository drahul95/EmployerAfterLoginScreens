import React from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  AppBar,
  Tabs,
  Tab,
  InputAdornment,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import SchoolSMLIMG from "../../images/profile_schl.png";
import Calendar from "./Calendar";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function Notification() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Box component="div" className="notifidiv">
      <Box component="div" className="notificont">
        <AppBar position="static" className="notifihead">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Notifications" href="/drafts" {...a11yProps(0)} />
            <LinkTab label="Calendar" href="/trash" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className="tabroot">
          <Box component="div" className="fullwidth_100percent">
            <Autocomplete
              debug
              id="combo-box-demo"
              className="BlueSelectDropdown fullwidth_100percent"
              options={search}
              getOptionLabel={(option) => option.name}
              classes={{
                paper: "BlueAutoCompletePaper",
              }}
              renderInput={(params) => {
                params.inputProps.className = "noborderinput_caret";
                params.InputProps.className = "noBeforeAfter";
                params.InputProps.placeholder = "Search";
                params.InputProps.endAdornment = null;
                params.InputProps.startAdornment = (
                  <>
                    <InputAdornment position="start">
                      {<SearchIcon className="left-3" />}
                    </InputAdornment>
                    {params.InputProps.startAdornment}
                  </>
                );
                return <TextField {...params} />;
              }}
            />
          </Box>
          <Box component="div" className="impdiv dis_flex">
            <Button className="transparentbtn noborder top-1">
              <FilterIcon />
              <Typography variant="span" className="numb">
                4
              </Typography>
            </Button>
            <Box component="div" className="marginautoright dis_flex">
              <Typography
                className="spantitle me-3 font14 top-1"
                variant="span"
              >
                Show only Important
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      checked={checked}
                      onChange={toggleChecked}
                    />
                  }
                />
              </FormGroup>
            </Box>
          </Box>
          <Box component="div" className="newmsgarea">
            <Typography variant="span" className="newmsgspan">
              New
            </Typography>
            <Box component="div" className="newmsglist dis_flex">
              <Box component="div" className="imgarea">
                <img src={BASE_URL + SchoolSMLIMG} alt="" />
                <Typography variant="span" className="newdot"></Typography>
              </Box>
              <Box component="div" className="namearea">
                <Typography variant="span" className="name">
                  Candidates Invited
                </Typography>
                <Typography variant="span" className="msg">
                  You have Invited Rajesh for Chemistry Teacher
                </Typography>
              </Box>
              <Box component="div" className="mindiv">
                <Typography variant="span" className="minspan">
                  1 Minute ago
                </Typography>
              </Box>
            </Box>

            <Box component="div" className="oldmsglist dis_flex">
              <Box component="div" className="imgarea">
                <img src={BASE_URL + SchoolSMLIMG} alt="" />
              </Box>
              <Box component="div" className="namearea">
                <Typography variant="span" className="name">
                  Candidates Invited
                </Typography>
                <Typography variant="span" className="msg">
                  You have Invited Rajesh for Chemistry Teacher
                </Typography>
              </Box>
              <Box component="div" className="mindiv">
                <Typography variant="span" className="minspan">
                  1 Minute ago
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box component="div" className="newmsgarea">
            <Typography variant="span" className="newmsgspan">
              Earlier
            </Typography>

            <Box component="div" className="oldmsglist dis_flex">
              <Box component="div" className="imgarea">
                <img src={BASE_URL + SchoolSMLIMG} alt="" />
              </Box>
              <Box component="div" className="namearea">
                <Typography variant="span" className="name">
                  Candidates Invited
                </Typography>
                <Typography variant="span" className="msg">
                  You have Invited Rajesh for Chemistry Teacher
                </Typography>
              </Box>
              <Box component="div" className="mindiv">
                <Typography variant="span" className="minspan">
                  1 Minute ago
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="oldmsglist dis_flex">
              <Box component="div" className="imgarea">
                <img src={BASE_URL + SchoolSMLIMG} alt="" />
              </Box>
              <Box component="div" className="namearea">
                <Typography variant="span" className="name">
                  Candidates Invited
                </Typography>
                <Typography variant="span" className="msg">
                  You have Invited Rajesh for Chemistry Teacher
                </Typography>
              </Box>
              <Box component="div" className="mindiv">
                <Typography variant="span" className="minspan">
                  1 Minute ago
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="oldmsglist dis_flex">
              <Box component="div" className="imgarea">
                <img src={BASE_URL + SchoolSMLIMG} alt="" />
              </Box>
              <Box component="div" className="namearea">
                <Typography variant="span" className="name">
                  Candidates Invited
                </Typography>
                <Typography variant="span" className="msg">
                  You have Invited Rajesh for Chemistry Teacher
                </Typography>
              </Box>
              <Box component="div" className="mindiv">
                <Typography variant="span" className="minspan">
                  1 Minute ago
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="oldmsglist dis_flex">
              <Box component="div" className="imgarea">
                <img src={BASE_URL + SchoolSMLIMG} alt="" />
              </Box>
              <Box component="div" className="namearea">
                <Typography variant="span" className="name">
                  Candidates Invited
                </Typography>
                <Typography variant="span" className="msg">
                  You have Invited Rajesh for Chemistry Teacher
                </Typography>
              </Box>
              <Box component="div" className="mindiv">
                <Typography variant="span" className="minspan">
                  1 Minute ago
                </Typography>
              </Box>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Calendar />
        </TabPanel>
      </Box>
    </Box>
  );
}
export default Notification;
const search = [
  { name: "Prashant", id: 1 },
  { name: "Vivek", id: 2 },
  { name: "Soumali", id: 3 },
  { name: "Soumak", id: 4 },
  { name: "Soumya", id: 5 },
  { name: "andugundutandapani", id: 6 },
];
const FilterIcon = () => {
  return (
    <svg
      className="filter_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(0 -0.355)">
        <rect class="a" width="24" height="24" transform="translate(0 0.355)" />
        <g transform="translate(1.801 3.607)">
          <path
            class="b"
            d="M0,3.444A3.444,3.444,0,1,1,3.444,6.888,3.444,3.444,0,0,1,0,3.444ZM12.054,5.165a1.722,1.722,0,1,1,0-3.444h6.888a1.722,1.722,0,0,1,0,3.444Z"
          />
          <path
            class="b"
            d="M13.776,3.444A3.444,3.444,0,1,1,17.22,6.888,3.444,3.444,0,0,1,13.776,3.444ZM1.723,5.165a1.722,1.722,0,1,1,0-3.444H8.61a1.722,1.722,0,0,1,0,3.444Z"
            transform="translate(0 10.332)"
          />
        </g>
      </g>
    </svg>
  );
};

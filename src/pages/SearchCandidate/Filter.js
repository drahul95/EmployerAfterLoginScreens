import React from "react";
import "./SearchCandidate.scss";
import {
  Typography,
  Box,
  Button,
  TextField,
  Link,
  Checkbox,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Slider from "@material-ui/core/Slider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      root: {
        width: "90%",
        transform: "translateX(-50%)",
        left: "50%",
      },
      thumb: {
        color: "#295698",
        width: 26,
        height: 26,
        border: "6px solid #fff",
        marginTop: -10,
      },
      track: {
        color: "#295698",
        height: 8,
        borderRadius: 20,
      },
      rail: {
        color: "#E7F1FD",
        height: 8,
        borderRadius: 20,
      },
      mark: {
        display: "none",
      },
      markLabel: {
        color: "#295698",
        background: "#E7F1FD",
        padding: "2px 5px",
        marginTop: "5px",
        borderRadius: "8px",
        fontSize: "12px",
      },
    },
  },
});

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 30,
    label: "30",
  },
];

function valuetext(value) {
  return `${value}`;
}

const BlueCheckBox = withStyles({
  root: {
    // color: green[400],
    "&$checked": {
      color: "#2a5798",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Filter() {
  return (
    <Box component="div" className="filtercomponent">
      <Box component="div" className="filterdiv">
        <Box component="div" className="filterarea">
          <Box component="div">
            <FilterIcon />
            <Typography variant="span" className="font16 fontweight700">
              Filters
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box component="div" className="applyfilterdiv">
        <Box component="div" className="dis_flex">
          <Box component="div">
            <Typography
              variant="span"
              className="font18 fontweight500 darkcolortext"
            >
              Apply Filter(14)
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="span" className="font14 darkcolortext">
              Reset Filter
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box component="div" className="filterdivsingleinput">
        <Typography
          variant="span"
          className="font16 fontweight700 block mb-3 blackcolortext"
        >
          Institution Type (1)
        </Typography>
        <Autocomplete
          id="combo-box-demo"
          className="BlueSelectDropdown"
          options={coaching}
          getOptionLabel={(option) => option.name}
          classes={{
            paper: "BlueAutoCompletePaper",
          }}
          renderInput={(params) => {
            params.inputProps.className = "noborderinput";
            params.InputProps.className = "noBeforeAfter";
            params.InputProps.placeholder = "Select";
            return (
              <TextField
                disabled
                inputStyle={{ cursor: "none" }}
                {...params}
                onKeyPress={(e) => e.preventDefault()}
              />
            );
          }}
        />
      </Box>
      <Box component="div" className="filterdivtwoinputs">
        <Typography
          variant="span"
          className="font16 fontweight700 block mb-3 blackcolortext"
        >
          Job Category
        </Typography>
        <Box component="div" className="dis_flex">
          <Button className="darkbluecolor whitecolortext me-2 border8 fullwidth_100percent">
            Academic
          </Button>
          <Button className="lightbluecolor border8 fullwidth_100percent">
            Admin
          </Button>
        </Box>
      </Box>
      <Box component="div" className="filterdivsingleinput">
        <Typography
          variant="span"
          className="font16 fontweight700 block mb-3 blackcolortext"
        >
          Post (1)
        </Typography>
        <Autocomplete
          id="combo-box-demo"
          className="BlueSelectDropdown"
          options={teacher}
          getOptionLabel={(option) => option.name}
          classes={{
            paper: "BlueAutoCompletePaper",
          }}
          renderInput={(params) => {
            params.inputProps.className = "noborderinput";
            params.InputProps.className = "noBeforeAfter";
            params.InputProps.placeholder = "Select";
            return (
              <TextField
                disabled
                inputStyle={{ cursor: "none" }}
                {...params}
                onKeyPress={(e) => e.preventDefault()}
              />
            );
          }}
        />
      </Box>
      <Box component="div" className="filterdivsingleinput">
        <Typography
          variant="span"
          className="font16 fontweight700 block mb-3 blackcolortext"
        >
          Subject (1)
        </Typography>
        <Autocomplete
          id="combo-box-demo"
          className="BlueSelectDropdown"
          options={subject}
          getOptionLabel={(option) => option.name}
          classes={{
            paper: "BlueAutoCompletePaper",
          }}
          renderInput={(params) => {
            params.inputProps.className = "noborderinput";
            params.InputProps.className = "noBeforeAfter";
            params.InputProps.placeholder = "Select";
            return (
              <TextField
                disabled
                inputStyle={{ cursor: "none" }}
                {...params}
                onKeyPress={(e) => e.preventDefault()}
              />
            );
          }}
        />
      </Box>
      <Box component="div" className="filterdivcheckboxlist">
        <Typography
          variant="span"
          className="font16 fontweight700 block mb-3 blackcolortext"
        >
          Location (2)
        </Typography>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Kolkata"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Delhi"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Mumbai"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Bangalore"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Hyderabad"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Chennai"
          />
        </Box>
        <Box component="div">
          <Link>View All</Link>
        </Box>
      </Box>
      <Box component="div" className="filterdivslider">
        <Typography
          variant="span"
          className="font16 fontweight700 block mb-3 blackcolortext"
        >
          Minimum Experience Required
        </Typography>
        <ThemeProvider theme={muiTheme}>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={1}
            max={30}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </ThemeProvider>
      </Box>
      <Box component="div" className="filterdivtwoinputs">
        <Typography
          variant="span"
          className="font16 fontweight700 block mb-3 blackcolortext"
        >
          Maximum Salary to be Offered
        </Typography>
        <Box component="div" className="dis_flex">
          <Autocomplete
            id="combo-box-demo"
            className="BlueSelectDropdown me-3"
            options={lakhs}
            getOptionLabel={(option) => option.name}
            classes={{
              paper: "BlueAutoCompletePaper",
            }}
            renderInput={(params) => {
              params.inputProps.className = "noborderinput";
              params.InputProps.className = "noBeforeAfter";
              params.InputProps.placeholder = "Select";
              return (
                <TextField
                  disabled
                  inputStyle={{ cursor: "none" }}
                  {...params}
                  onKeyPress={(e) => e.preventDefault()}
                />
              );
            }}
          />
          <Autocomplete
            id="combo-box-demo"
            className="BlueSelectDropdown"
            options={thousand}
            getOptionLabel={(option) => option.name}
            classes={{
              paper: "BlueAutoCompletePaper",
            }}
            renderInput={(params) => {
              params.inputProps.className = "noborderinput";
              params.InputProps.className = "noBeforeAfter";
              params.InputProps.placeholder = "Select";
              return (
                <TextField
                  disabled
                  inputStyle={{ cursor: "none" }}
                  {...params}
                  onKeyPress={(e) => e.preventDefault()}
                />
              );
            }}
          />
        </Box>
      </Box>
      <Box component="div" className="filterdivcheckboxlist">
        <Typography
          variant="span"
          className="font16 fontweight700 block mb-3 blackcolortext"
        >
          Skills Required (2)
        </Typography>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Reasoning"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Problem Solving"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Aptitude"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Communication"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Creativity"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Aptitude"
          />
        </Box>
        <Box component="div">
          <Link>View All</Link>
        </Box>
      </Box>
      <Box component="div" className="filterdivsingleinput">
        <Typography
          variant="span"
          className="font16 fontweight700 block mb-3 blackcolortext"
        >
          Maximum Notice Period (1)
        </Typography>
        <Autocomplete
          id="combo-box-demo"
          className="BlueSelectDropdown"
          options={notice}
          getOptionLabel={(option) => option.name}
          classes={{
            paper: "BlueAutoCompletePaper",
          }}
          renderInput={(params) => {
            params.inputProps.className = "noborderinput";
            params.InputProps.className = "noBeforeAfter";
            params.InputProps.placeholder = "Select";
            return (
              <TextField
                disabled
                inputStyle={{ cursor: "none" }}
                {...params}
                onKeyPress={(e) => e.preventDefault()}
              />
            );
          }}
        />
      </Box>
      <Box component="div" className="filterdivcheckboxlist">
        <Typography
          variant="span"
          className="font16 fontweight700 block mb-3 blackcolortext"
        >
          Employment Type (1)
        </Typography>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Full Time / Permanent"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Internship"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Part Time"
          />
        </Box>
        <Box component="div">
          <FormControlLabel
            control={<BlueCheckBox name="checkedG" />}
            label="Leave Vacancy"
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Filter;

const FilterIcon = () => {
  return (
    <svg
      className="filter_icon me-3 top-2"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(0 -0.355)">
        <rect
          className="a"
          width="24"
          height="24"
          transform="translate(0 0.355)"
        />
        <g transform="translate(1.801 3.607)">
          <path
            className="b"
            d="M0,3.444A3.444,3.444,0,1,1,3.444,6.888,3.444,3.444,0,0,1,0,3.444ZM12.054,5.165a1.722,1.722,0,1,1,0-3.444h6.888a1.722,1.722,0,0,1,0,3.444Z"
          />
          <path
            className="b"
            d="M13.776,3.444A3.444,3.444,0,1,1,17.22,6.888,3.444,3.444,0,0,1,13.776,3.444ZM1.723,5.165a1.722,1.722,0,1,1,0-3.444H8.61a1.722,1.722,0,0,1,0,3.444Z"
            transform="translate(0 10.332)"
          />
        </g>
      </g>
    </svg>
  );
};
const coaching = [
  { name: "Coaching Institution", id: 1 },
  { name: "non-academic", id: 2 },
];
const teacher = [
  { name: "Chemistry Teacher", id: 1 },
  { name: "Maths Teacher", id: 2 },
  { name: "Physics Teacher", id: 3 },
  { name: "Bio Teacher", id: 4 },
];
const subject = [
  { name: "Chemistry", id: 1 },
  { name: "Physics", id: 2 },
  { name: "Maths", id: 3 },
];
const lakhs = [
  { name: "1 Lakh", id: 1 },
  { name: "2 Lakh", id: 2 },
  { name: "3 Lakh", id: 3 },
  { name: "4 Lakh", id: 4 },
  { name: "5 Lakh", id: 5 },
  { name: "6 Lakh", id: 6 },
];

const thousand = [
  { name: "10 Thousand", id: 1 },
  { name: "20 Thousand", id: 2 },
  { name: "30 Thousand", id: 3 },
  { name: "40 Thousand", id: 4 },
  { name: "50 Thousand", id: 5 },
  { name: "60 Thousand", id: 6 },
];

const notice = [
  { name: "Immediate", id: 1 },
  { name: "7 Days", id: 2 },
  { name: "14 Days", id: 3 },
  { name: "30 Days", id: 4 },
  { name: "60 Days", id: 5 },
  { name: "90 Days", id: 6 },
];

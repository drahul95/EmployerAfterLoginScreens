import React from "react";
import "./ApplicationReceived.scss";
import {
  Typography,
  Box,
  Button,
  List,
  ListItem,
  Modal,
  Fade,
  Backdrop,
  Checkbox,
  TextField,
  Tooltip,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Autocomplete from "@material-ui/lab/Autocomplete";
import RepostJobPost from "./RepostJobPost/RepostJobPost";
import StackImages from "../../images/stackimage.png";
import { withStyles, makeStyles } from "@material-ui/core/styles";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

function ApplicationSavedBoxListRepost() {
  const [selectedValueLooking1, setSelectedValueLooking1] = React.useState("a");

  const handleChangeLooking1 = (event) => {
    setSelectedValueLooking1(event.target.value);
  };

  const [openmodalRepostjobPost, setOpenModalRepostjobPost] =
    React.useState(false);

  const handleRepostjobPostOpen = () => {
    setOpenModalRepostjobPost(true);
  };

  const handleRepostjobPostClose = () => {
    setOpenModalRepostjobPost(false);
  };

  const [openmodalEditJobPost, setOpenModalEditJobPost] = React.useState(false);

  const handleEditJobPostOpen = () => {
    setOpenModalEditJobPost(true);
  };

  const handleEditJobPostClose = () => {
    setOpenModalEditJobPost(false);
  };

  return (
    <Box
      component="div"
      className="listdiv whitebg_shadow_border16 pt-4 pb-4 pe-4 ps-4 mb-2"
    >
      <Box component="div" className="headtitle">
        <Typography variant="span" className="title font16 darkcolortext block">
          Primary and Upper Primary School Math and Chemistry Teacher
        </Typography>
      </Box>
      <Typography
        variant="span"
        className="subtitle font14 blackcolortext mt-2 block"
      >
        Santhidam Bedania Nursery School
      </Typography>
      <Typography
        variant="span"
        className="jdtitle font12 blackcolortext mt-2 block"
      >
        JID986742130
      </Typography>
      <List className="commonul">
        <ListItem>
          <ListItemIcon>
            <SalaryIcon />
          </ListItemIcon>
          <ListItemText className="bolddiv">6.5 LPA Max</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <YearsIcon />
          </ListItemIcon>
          <ListItemText>3 Years Min</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationIcon />
          </ListItemIcon>
          <ListItemText>Kolkata</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BagIcon />
          </ListItemIcon>
          <ListItemText>Full Time / Permanent</ListItemText>
        </ListItem>
      </List>
      <Box component="div" className="dis_flex candsuggdiv">
        <Box component="div" className="imagestack me-2">
          <img src={BASE_URL + StackImages} alt="" />
        </Box>
        <Typography
          variant="span"
          className="candititle mt-2 mb-3 darkcolortext"
        >
          20 Candidates Suggestions
        </Typography>
      </Box>
      <Box component="div" className="dis_flex">
        <Box component="div" className="">
          <Typography
            variant="span"
            className="heading font14 fontweight700 redcolortext block mb-2"
          >
            Job Expired On
          </Typography>
          <Typography
            variant="span"
            className="subheading font14 blackcolortext block"
          >
            25th, June 2021
          </Typography>
        </Box>
        <Box component="div" className="marginautoright">
          <Typography
            variant="span"
            className="heading font14 fontweight700 blackcolortext block mb-2"
          >
            Visible Till
          </Typography>
          <Typography
            variant="span"
            className="subheading blackcolortext font14 block text-center"
          >
            25th, June 2021
          </Typography>
        </Box>
        <Box component="div" className="marginautoright">
          <Button
            component="div"
            className="repostbtn dis_flex"
            onClick={handleRepostjobPostOpen}
          >
            <Box component="div" className="statusbox">
              <Typography variant="span">Repost</Typography>
            </Box>
          </Button>
        </Box>
        <LightTooltip
          className="infoarea"
          title="Click on Repost to Post a Job with content similar to that of this Job Post"
          placement="top-end"
        >
          <Button className="infodiv2" startIcon={<InfoIcon />}></Button>
        </LightTooltip>
      </Box>
      {/* Repost the Job Post Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalRepostjobPost}
        onClose={handleRepostjobPostClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalRepostjobPost}>
          <Box component="div" className="modalcontsmall px-20 text-center">
            <RepostIcon />
            <Box component="div" className="maincontjobpost">
              <Typography
                variant="span"
                className="font16 block text-center line-height-1-5 mt-3 mb-2"
              >
                Are you sure you want
                <br /> to Repost this Job Post?
              </Typography>
              <Box component="div" className="buttonareadiv dis_flex">
                <Button
                  className="border8 lightbluecolor blackcolortext me-3"
                  onClick={(e) => {
                    handleRepostjobPostClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  No
                </Button>
                <Button
                  className="border8 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleRepostjobPostClose();
                    handleEditJobPostOpen();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Yes
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit Job Ppost Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalEditJobPost}
        onClose={handleEditJobPostClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalEditJobPost}>
          <Box component="div" className="postjobmodal">
            <Box component="div" className="dis_flex">
              <Typography variant="span" className="fontweight700 font18">
                Repost A Job
              </Typography>
              <Box component="div" className="marginautoright dis_flex">
                <Box component="div" className="ticksdiv">
                  <Box component="div" id="tick1" className="activeticks">
                    <Box component="div" className="roundcircle">
                      <WhiteTick />
                    </Box>
                  </Box>
                  <Box component="div" id="tick2" className="activeticks">
                    <Box component="div" className="roundcircle">
                      <WhiteTick />
                    </Box>
                  </Box>
                  <Box component="div" id="tick3" className="activeticks">
                    <Box component="div" className="roundcircle">
                      <WhiteTick />
                    </Box>
                  </Box>
                  <Box component="div" id="tick4" className="activeticks">
                    <Box component="div" className="roundcircle">
                      <WhiteTick />
                    </Box>
                  </Box>
                  <Box component="div" id="tick5" className="activeticks">
                    <Box component="div" className="roundcircle">
                      <WhiteTick />
                    </Box>
                  </Box>
                </Box>
                <Button
                  className="btn-close ms-3"
                  onClick={(e) => {
                    handleEditJobPostClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <ClosegreyBtn />
                </Button>
              </Box>
            </Box>
            <Box component="div" className="postajobmodaldiv">
              <Box component="div" className="hiringfordiv">
                <Box component="div" className="dis_flex align-items-center">
                  <Typography
                    variant="span"
                    className="label mb-2 block font14"
                  >
                    Hiring for
                  </Typography>
                  <LightTooltip
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing."
                    placement="right-start"
                    className="infodiv2"
                  >
                    <Button>
                      <InfoIcon />
                    </Button>
                  </LightTooltip>
                </Box>
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
              <Box component="div" className="radioinputarea">
                <Box component="div">
                  <Radio
                    checked={selectedValueLooking1 === "d"}
                    onChange={handleChangeLooking1}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "D" }}
                  />
                  <Typography variant="span" className="font14 mt-1 me-2">
                    Looking for People within my Domain
                  </Typography>
                </Box>
                <Box component="div">
                  <Radio
                    checked={selectedValueLooking1 === "e"}
                    onChange={handleChangeLooking1}
                    value="e"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "E" }}
                  />
                  <Typography variant="span" className="font14 mt-1 me-2">
                    Looking at Entire Database
                  </Typography>
                </Box>
                <Box component="div" className="marginautoright infoicon">
                  <LightTooltip
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing."
                    placement="top-end"
                    className="infodiv"
                  >
                    <Button>
                      <InfoIcon />
                    </Button>
                  </LightTooltip>
                </Box>
              </Box>
              <Box component="div" className="jobcategory mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Job Category
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={JobCat}
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
              <Box component="div" className="candidateslooking mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Candidates Looking to Work in
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
              <Box component="div" className="boarddiv mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Board
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={Board}
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
              <Box component="div" className="level mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Level
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={Level}
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
              <Box component="div" className="subject mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Subject
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={Subject}
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
              <Box component="div" className="role mt-3 none">
                <Typography variant="span" className="label mb-2 block font14">
                  Role
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
              <Box component="div" className="edtechdiv mt-3 none">
                <Typography variant="span" className="label mb-2 block font14">
                  Types of EdTech Company
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
              <Box component="div" className="edtechdiv mt-3 none">
                <Typography variant="span" className="label mb-2 block font14">
                  Type of coaching institute
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
              <Box component="div" className="checkboxarea mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Suggested Job Title
                </Typography>
                <TextField
                  fullWidth
                  classes={{ root: "textfieldnormal_grey" }}
                  id="standard-normal"
                  value="Primary and Upper Primary School Math and Chemistry Teacher"
                  disabled
                />
                <input
                  type="checkbox"
                  className="customcheckbox top-1"
                  id="customjoobtitle"
                />
                <label for="customjoobtitle" className="font14 text-center">
                  I want a custom job title
                </label>
                <TextField
                  fullWidth
                  className="mt-3 none"
                  classes={{ root: "textfieldnormal" }}
                  id="standard-normal"
                />
              </Box>
            </Box>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button
                className="fullwidth_100percent pt-3 pb-3 border16 darkbluecolor whitecolortext "
                onClick={(e) => {
                  handleEditJobPostClose();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
export default ApplicationSavedBoxListRepost;

const coaching = [
  { name: "DPS School, Darjeeling", id: 1 },
  { name: "DPS School, Siliguri", id: 2 },
  { name: "DPS School, Durgapur", id: 3 },
];

const JobCat = [
  { name: "Academic", id: 1 },
  { name: "Non-Academic", id: 2 },
];

const Board = [
  { name: "CBSE", id: 1 },
  { name: "ICSE", id: 2 },
];

const Subject = [
  { name: "Physics", id: 1 },
  { name: "Maths", id: 2 },
  { name: "Chemistry", id: 3 },
  { name: "Biology", id: 4 },
];

const Level = [
  { name: "Doctorate", id: 1 },
  { name: "Post Graduate", id: 2 },
  { name: "Graduate", id: 3 },
  { name: "12th", id: 4 },
  { name: "10th", id: 5 },
];

const WhiteTick = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.131"
      height="12.935"
      viewBox="0 0 18.131 12.935"
    >
      <path
        id="_2561355_check_icon"
        data-name="2561355_check_icon"
        d="M19.3,6,8.782,16.521,4,11.738"
        transform="translate(-2.586 -4.586)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
};

const RepostIcon = () => {
  return (
    <svg
      id="Group_694"
      data-name="Group 694"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g
        id="Rectangle_454"
        data-name="Rectangle 454"
        fill="#fff"
        stroke="#707070"
        stroke-width="1"
        opacity="0"
      >
        <rect width="40" height="40" stroke="none" />
        <rect x="0.5" y="0.5" width="39" height="39" fill="none" />
      </g>
      <g
        id="Group_7135"
        data-name="Group 7135"
        transform="translate(-1674 -814)"
      >
        <g id="progress-arrows" transform="translate(1677 817)">
          <path
            id="Path_4031"
            data-name="Path 4031"
            d="M7.455,30.2a.6.6,0,0,1-.42-.169L.171,23.151a.585.585,0,0,1,0-.825l6.864-6.891a.588.588,0,0,1,.64-.126.577.577,0,0,1,.361.542v4.261h18.81a.946.946,0,0,0,.945-.942v-4.8a.6.6,0,0,1,.168-.416l4.593-4.611a.588.588,0,0,1,1,.416V20.189c0,3.724-1.968,5.69-5.689,5.69H8.037V29.62a.575.575,0,0,1-.361.536A.594.594,0,0,1,7.455,30.2Z"
            transform="translate(0 3.112)"
            fill="#f6b333"
          />
          <path
            id="Path_4032"
            data-name="Path 4032"
            d="M1.342,21.5a.595.595,0,0,1-.588-.587V10.49C.754,6.765,2.718,4.8,6.443,4.8H26.281V1.051a.6.6,0,0,1,.361-.543.589.589,0,0,1,.642.13l6.861,6.877a.587.587,0,0,1,0,.829L27.284,15.23a.576.576,0,0,1-.64.128.585.585,0,0,1-.361-.544V10.562H7.46a.94.94,0,0,0-.937.944v4.8a.591.591,0,0,1-.175.418l-4.6,4.606A.567.567,0,0,1,1.342,21.5Z"
            transform="translate(0.309 -0.464)"
            fill="#f6b333"
          />
        </g>
      </g>
    </svg>
  );
};

const ClosegreyBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g
        id="Group_371"
        data-name="Group 371"
        transform="translate(-331.639 -94.639)"
      >
        <g id="octicon:x-24" transform="translate(331.639 94.639)">
          <path
            id="Vector"
            d="M.27.293a.923.923,0,0,1,1.3,0L7.988,6.7,14.4.293a.921.921,0,1,1,1.3,1.3L9.291,8l6.416,6.406a.921.921,0,1,1-1.3,1.3L7.988,9.3,1.572,15.707a.921.921,0,0,1-1.3-1.3L6.685,8,.27,1.594a.919.919,0,0,1,0-1.3Z"
            transform="translate(0 0)"
            fill="#1c1b1b"
          />
        </g>
      </g>
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <path
        id="_293683_info_icon"
        data-name="293683_info_icon"
        d="M7,0A7,7,0,1,1,0,7,7,7,0,0,1,7,0M8.313,6.563H5.688v4.813H8.313ZM7,2.625A1.313,1.313,0,1,0,8.313,3.938,1.312,1.312,0,0,0,7,2.625"
        fill="#2a5798"
      />
    </svg>
  );
};

const YearsIcon = () => {
  return (
    <svg
      className="years_orange me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <defs></defs>
      <path
        class="a"
        d="M5.047,0l-5,10,5,10a10,10,0,0,0,0-20Z"
        transform="translate(4.953)"
      />
      <path
        class="a"
        d="M0,10A10.033,10.033,0,0,0,10,20V0A10.033,10.033,0,0,0,0,10Z"
      />
      <path
        class="b"
        d="M3.7-.322l-4,8,4,8a8.276,8.276,0,0,0,8-8A8.276,8.276,0,0,0,3.7-.322Z"
        transform="translate(6.301 2.322)"
      />
      <path
        class="b"
        d="M-.322,7.678a8.276,8.276,0,0,0,8,8v-16A8.276,8.276,0,0,0-.322,7.678Z"
        transform="translate(2.322 2.322)"
      />
      <path
        class="c"
        d="M2.769,1.816l-2-2h-1l1,2,1,1Z"
        transform="translate(9.231 9.184)"
      />
      <path
        class="c"
        d="M1.143.139l-1,1,4,4v-2Z"
        transform="translate(5.857 5.861)"
      />
      <path
        class="c"
        d="M3.753.153l-3,3-1,2h1l4-4Z"
        transform="translate(9.247 5.847)"
      />
      <path
        class="c"
        d="M-.35,1.816l1,1,1-1v-2Z"
        transform="translate(8.35 9.184)"
      />
      <path
        class="c"
        d="M1.386.482h-1v1h1Z"
        transform="translate(9.614 3.518)"
      />
      <path
        class="c"
        d="M-.417.482h1v1h-1Z"
        transform="translate(9.417 3.518)"
      />
      <path
        class="c"
        d="M1.386-.321h-1v1h1Z"
        transform="translate(9.614 15.321)"
      />
      <path
        class="c"
        d="M-.417-.321h1v1h-1Z"
        transform="translate(9.417 15.321)"
      />
      <path
        class="c"
        d="M0,0H1.161V1.161H0Z"
        transform="translate(3.518 10.58) rotate(-90)"
      />
      <path
        class="c"
        d="M0,0H1.161V1.161H0Z"
        transform="translate(15.321 10.58) rotate(-90)"
      />
    </svg>
  );
};

const SalaryIcon = () => {
  return (
    <svg
      className="salary_orange me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <defs></defs>
      <path
        class="a"
        d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
        transform="translate(0)"
      />
      <circle
        class="b"
        cx="7.474"
        cy="7.474"
        r="7.474"
        transform="translate(2.526 2.526)"
      />
      <path
        class="c"
        d="M162.307,131.529H161.4a2.624,2.624,0,0,0-.49-.981h1.4a.49.49,0,1,0,0-.981h-4.757a.49.49,0,1,0,0,.981h1.373a1.717,1.717,0,0,1,1.471.981h-2.844a.49.49,0,1,0,0,.981h2.844a2.085,2.085,0,0,1-.392.687,1.643,1.643,0,0,1-1.079.539h-1.373a.46.46,0,0,0-.343.809l3.408,3.212a.588.588,0,0,0,.343.123.49.49,0,0,0,.343-.147.441.441,0,0,0,0-.662l-2.526-2.354h.147a2.6,2.6,0,0,0,1.79-.834,2.82,2.82,0,0,0,.687-1.373h.907a.49.49,0,0,0,0-.981Z"
        transform="translate(-149.928 -123.735)"
      />
    </svg>
  );
};

const BagIcon = () => {
  return (
    <svg
      className="bag_orange me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      viewBox="0 0 20 16"
    >
      <defs></defs>
      <g transform="translate(0 7)">
        <path
          class="a"
          d="M17.9,9.177H1.988A2.349,2.349,0,0,1,0,7.177v-7l9.942,2,9.942-2v7a2.349,2.349,0,0,1-1.988,2Z"
          transform="translate(0 -0.177)"
        />
      </g>
      <g transform="translate(6.943 0)">
        <path
          class="a"
          d="M4.939,3.646h-4a1.543,1.543,0,0,1-1-1v-1c0-.7.3-2,1-2h4c.7,0,1,1.3,1,2v1A1.543,1.543,0,0,1,4.939,3.646Zm-4-1h4v-1c0-.05.05,0,0,0h-4c-.05,0,0-.05,0,0v1Z"
          transform="translate(0.061 0.354)"
        />
      </g>
      <g transform="translate(0 2.856)">
        <path
          class="b"
          d="M9.942,7.293c-.047,0,.046.012,0,0L0,4.293v-4c0-.324.673,0,.994,0h17.9c.322,0,.994-.324.994,0v4c0,.269.259-.065,0,0l-9.942,3c-.046.012.047,0,0,0Z"
          transform="translate(0 -0.149)"
        />
      </g>
      <path
        class="c"
        d="M4.939-.414h-4a1.543,1.543,0,0,0-1,1v2a1.543,1.543,0,0,0,1,1h4a1.543,1.543,0,0,0,1-1v-2A1.543,1.543,0,0,0,4.939-.414Z"
        transform="translate(7.003 7.414)"
      />
    </svg>
  );
};

const LocationIcon = () => {
  return (
    <svg
      className="location_orange me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      viewBox="0 0 16 20"
    >
      <defs></defs>
      <path
        class="a"
        d="M7.718,0a8.212,8.212,0,0,0-8,7.987,7.823,7.823,0,0,0,1,3.994,23.462,23.462,0,0,0,3,3.994,34.531,34.531,0,0,0,4,3.994c.053.041-.063,0,0,0s-.053.041,0,0a34.524,34.524,0,0,0,4-3.994,23.467,23.467,0,0,0,3-3.994,7.823,7.823,0,0,0,1-3.994A8.212,8.212,0,0,0,7.718,0Zm0,4.992a3.271,3.271,0,0,1,3,3,3.517,3.517,0,0,1-3,3.239,3.517,3.517,0,0,1-3-3.239A3.271,3.271,0,0,1,7.718,4.992Z"
        transform="translate(0.282 0.014)"
      />
      <path
        class="b"
        d="M.857,0c-.29,0-.719-.031-1,0a8.173,8.173,0,0,1,7,7.987,7.823,7.823,0,0,1-1,3.994,23.462,23.462,0,0,1-3,3.994,25.433,25.433,0,0,1-3,3c.4.345.972.977,1,1,.053.041-.063,0,0,0s-.053.041,0,0a34.524,34.524,0,0,0,4-3.994,23.467,23.467,0,0,0,3-3.994,7.823,7.823,0,0,0,1-3.994A8.212,8.212,0,0,0,.857,0Z"
        transform="translate(7.143 0.014)"
      />
    </svg>
  );
};

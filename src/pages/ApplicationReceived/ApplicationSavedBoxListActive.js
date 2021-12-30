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
  Tooltip,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import PauseJobPost from "./PauseJobPost/PauseJobPost";
import StackImages from "../../images/stackimage.png";
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

function ApplicationSavedBoxListActive() {
  const [openactivatemodal, setOpenactivatemodal] = React.useState(false);

  const handleOpenactivatemodal = () => {
    setOpenactivatemodal(true);
  };

  const handleCloseactivatemodal = () => {
    setOpenactivatemodal(false);
  };

  const [openmodalPausejobPost, setOpenModalPausejobPost] = React.useState(false);

  const handlePausejobPostOpen = (e) => {
    setOpenModalPausejobPost(true);
    e.stopPropagation();
  };

  const handlePausejobPostClose = (e) => {
    setOpenModalPausejobPost(false);
    e.stopPropagation();
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
        <Box component="div" className="editbtn">
          <Button
            variant="button"
            startIcon={<EditIcon />}
            className="darkbluecolor whitecolortext border8"
          ></Button>
        </Box>
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
          20 Applicants Received
        </Typography>
      </Box>
      <Box component="div" className="dis_flex">
        <Box component="div" className="">
          <Typography
            variant="span"
            className="heading font14 fontweight700 blackcolortext block mb-2"
          >
            Job Posted On
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
            className="heading font14 redcolortext fontweight700 block mb-2"
          >
            Posting Expires on
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
            className="activebtn dis_flex"
            onClick={handlePausejobPostOpen}
          >
            <Box component="div" className="greenbox">
              <PauseIcon />
            </Box>
            <Box component="div" className="statusbox">
              <Typography variant="span">Active</Typography>
            </Box>
          </Button>
        </Box>
        <LightTooltip
          className="infoarea"
          title="Click on pause"
          placement="top-end"
        >
          <Button className="infodiv2" startIcon={<InfoIcon />}></Button>
        </LightTooltip>
      </Box>
      {/* Pausing the Job Post Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalPausejobPost}
        onClose={handlePausejobPostClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalPausejobPost}>
          <PauseJobPost />
        </Fade>
      </Modal>
    </Box>
  );
}
export default ApplicationSavedBoxListActive;

const EditIcon = () => {
  return (
    <svg
      className="editwhiteicon"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 32 32"
    >
      <defs></defs>
      <g transform="translate(-182.692 -388.692)">
        <g class="a" transform="translate(182.692 388.692)">
          <rect class="c" width="32" height="32" />
          <rect class="d" x="0.5" y="0.5" width="31" height="31" />
        </g>
        <g transform="translate(182.692 388.694)">
          <g transform="translate(0 0)">
            <path
              class="b"
              d="M22.257,1.61A5.508,5.508,0,0,1,30.3,9.123l-.257.277L11.035,28.413a3.96,3.96,0,0,1-1.431.914l-.327.1L1.252,31.621A.99.99,0,0,1,.006,30.562L.037,30.4,2.226,22.38a3.922,3.922,0,0,1,.788-1.5l.232-.253L22.257,1.61Zm-1.7,4.5L4.645,22.022a1.979,1.979,0,0,0-.426.635l-.083.243L2.4,29.254l6.357-1.732a1.979,1.979,0,0,0,.473-.2l.212-.143.194-.168L25.545,11.1,20.555,6.113Zm8.093-3.1a3.529,3.529,0,0,0-4.754-.218l-.237.218-1.7,1.7L26.942,9.7,28.648,8a3.529,3.529,0,0,0,.218-4.754l-.218-.238Z"
              transform="translate(0 0)"
            />
          </g>
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

const PauseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12.822"
      height="12.822"
      viewBox="0 0 12.822 12.822"
    >
      <path
        id="pause"
        d="M4.121,43.822H1.374A1.374,1.374,0,0,1,0,42.448V32.374A1.374,1.374,0,0,1,1.374,31H4.121A1.374,1.374,0,0,1,5.5,32.374V42.448A1.374,1.374,0,0,1,4.121,43.822Zm8.7-1.374V32.374A1.374,1.374,0,0,0,11.448,31H8.7a1.374,1.374,0,0,0-1.374,1.374V42.448A1.374,1.374,0,0,0,8.7,43.822h2.748A1.374,1.374,0,0,0,12.822,42.448Z"
        transform="translate(0 -31)"
        fill="rgba(255,255,255,0.9)"
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
const ProfileBlueIcon = () => {
  return (
    <svg
      className="profile_blue"
      xmlns="http://www.w3.org/2000/svg"
      width="17.379"
      height="20.833"
      viewBox="0 0 17.379 20.833"
    >
      <defs></defs>
      <path
        class="a"
        d="M536.725,535.445a5.01,5.01,0,0,0,2.31-.75,8.932,8.932,0,0,0,.766-.5,1.789,1.789,0,0,1,1.464-.293,3.9,3.9,0,0,1,2.918,2.16,8.836,8.836,0,0,1,.881,2.914,13.919,13.919,0,0,1,.126,2.29,3.34,3.34,0,0,1-2.747,3.288,1.387,1.387,0,0,0-.429.081h-.081a.22.22,0,0,0-.2,0h-5.373a.431.431,0,0,1-.066-.311q0-4.263,0-8.525c0-.335,0-.335.334-.342A.25.25,0,0,0,536.725,535.445Z"
        transform="translate(-527.815 -523.803)"
      />
      <path
        class="a"
        d="M378.6,535.389c-.011.007-.022.019-.034.021-.332.059-.332.058-.332.408q0,4.381,0,8.762h-5.413c-.273-.095-.562-.119-.837-.21a3.252,3.252,0,0,1-2.255-2.836,11.066,11.066,0,0,1,.663-4.848,4.339,4.339,0,0,1,1.99-2.431,4.146,4.146,0,0,1,1.837-.451,1.109,1.109,0,0,1,.63.2c.331.211.66.427.995.633a4.883,4.883,0,0,0,2.272.745C378.279,535.4,378.442,535.388,378.6,535.389Z"
        transform="translate(-369.694 -523.748)"
      />
      <path
        class="a"
        d="M643.2,744.754a.137.137,0,0,1,.2,0Z"
        transform="translate(-629.285 -723.921)"
      />
      <path
        class="a"
        d="M536.317,336.132a4.817,4.817,0,0,1,3.807,1.723,4.567,4.567,0,0,1,1.127,2.259,5.057,5.057,0,0,1-3.9,5.954,2.784,2.784,0,0,1-.663.073c-.419.055-.438.041-.438-.362q0-4.649,0-9.3C536.25,336.362,536.224,336.234,536.317,336.132Z"
        transform="translate(-527.773 -336.131)"
      />
      <path
        class="a"
        d="M444.242,336.123q0,4.9,0,9.809c0,.147.033.219.191.2a1.16,1.16,0,0,1,.183,0,2.523,2.523,0,0,1-.965-.019,4.572,4.572,0,0,1-2.446-1,4.943,4.943,0,0,1-1.935-3.437,5.022,5.022,0,0,1,2.983-5.153A4.577,4.577,0,0,1,444.242,336.123Z"
        transform="translate(-435.698 -336.122)"
      />
    </svg>
  );
};
const BagBlueIcon = () => {
  return (
    <svg
      className="bag_blue"
      xmlns="http://www.w3.org/2000/svg"
      width="20.138"
      height="17.709"
      viewBox="0 0 20.138 17.709"
    >
      <defs></defs>
      <g transform="translate(-335.996 -360.654)">
        <path
          class="a"
          d="M356.134,424v13.019a.411.411,0,0,0-.028.073,1.754,1.754,0,0,1-1.792,1.5q-8.248.005-16.5-.006a1.969,1.969,0,0,1-.813-.182,1.73,1.73,0,0,1-1.01-1.7q0-6.242,0-12.484v-.163a.345.345,0,0,1,.089.156l1.994,5.976a1.787,1.787,0,0,0,1.843,1.326h3.193c0,.192,0,.361,0,.53a.6.6,0,0,0,.648.649q2.3,0,4.6,0a.6.6,0,0,0,.651-.646c0-.174,0-.348,0-.533h3.17a1.79,1.79,0,0,0,1.87-1.342q1-3,2-6C356.077,424.115,356.108,424.058,356.134,424Z"
          transform="translate(0 -60.231)"
        />
        <path
          class="a"
          d="M356.937,363.024h4.926a6.619,6.619,0,0,1,0-.768,1.728,1.728,0,0,1,1.745-1.589q2.359-.025,4.719,0a1.76,1.76,0,0,1,1.773,1.777c.005.183,0,.366,0,.568h4.926l-.073.222-2.1,6.314a.657.657,0,0,1-.763.553h-3.167c0-.194,0-.375,0-.556a.587.587,0,0,0-.615-.622q-2.33-.005-4.66,0a.59.59,0,0,0-.623.634c0,.175,0,.351,0,.545h-.151q-1.544,0-3.087,0a.6.6,0,0,1-.656-.453q-1.093-3.267-2.179-6.536A.785.785,0,0,1,356.937,363.024Zm11.99-.011c0-.173,0-.323,0-.473a.611.611,0,0,0-.7-.7H365.7c-.681,0-1.362,0-2.043,0a.55.55,0,0,0-.594.439,4.717,4.717,0,0,0-.008.732Z"
          transform="translate(-19.911)"
        />
        <path
          class="a"
          d="M508.618,554.219H505.1v-1.158h3.513Z"
          transform="translate(-160.795 -182.947)"
        />
      </g>
    </svg>
  );
};
const DeActivateIcon = () => {
  return (
    <svg
      className="deactivateicon"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <defs></defs>
      <path
        class="a"
        d="M2.346,22.346a20,20,0,1,1,20,20A20.025,20.025,0,0,1,2.346,22.346Z"
        transform="translate(-2.346 -2.346)"
      />
      <g transform="translate(5.447 5.447)">
        <path
          class="b"
          d="M14.553,0A14.553,14.553,0,1,0,29.105,14.553,14.569,14.569,0,0,0,14.553,0Zm0,0"
        />
        <path
          class="c"
          d="M166.663,164.93a1.226,1.226,0,1,1-1.733,1.733l-3.683-3.683-3.683,3.683a1.226,1.226,0,0,1-1.733-1.733l3.683-3.683-3.683-3.683a1.226,1.226,0,0,1,1.733-1.733l3.683,3.683,3.683-3.683a1.226,1.226,0,0,1,1.733,1.733l-3.683,3.683Zm0,0"
          transform="translate(-146.694 -146.694)"
        />
      </g>
    </svg>
  );
};
import React from "react";
import "./CandidateSuggestions.scss";
import {
  Typography,
  Box,
  MenuItem,
  Button,
  Grid,
  TextField,
  AppBar,
  List,
  ListItem,
  Menu,
  Fade,
  Toolbar,
  Drawer,
  Divider,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddIcon from "@material-ui/icons/Add";
import SchoolSMLIMG from "../../images/profile_schl.png";
import SuggBG from "../../images/candidatesug_bg.svg";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import CandidateSuggestionsEmpty from "./CandidateSuggestionsEmpty";
import CandidateSuggestionsBoxList from "./CandidateSuggestionsBoxList";
import CandidateSuggestionsList from "./CandidateSuggestionsList";
import CandidateBoxDropdown from "./CandidateBoxDropdown";
import JIElogo from "../../images/JIE_logo.svg";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function CandidateSuggestions() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const [open, setOpen] = React.useState(false);
  //   const [valueOtherDet, setValueOtherDet] = React.useState(0);
  //   const [iscandidat, setIscandidat] = React.useState(null);
  //   const [value, setValue] = React.useState(0);

  //   const handleChangeOtherDetTab = (event, newValueOtherDet) => {
  //     setValueOtherDet(newValueOtherDet);
  //   };

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  //   const [openInvite, setOpenInvite] = React.useState(false);

  //   const handleOpenInvite = () => {
  //     setOpenInvite(true);
  //   };

  //   const handleCloseInvite = () => {
  //     setOpenInvite(false);
  //   };

  //   const [openSave, setOpenSave] = React.useState(false);

  //   const handleOpenSave = () => {
  //     setOpenSave(true);
  //   };

  //   const handleCloseSave = () => {
  //     setOpenSave(false);
  //   };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{ background: "#fff" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="#000"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Box component="div" className="navarea">
            <Box component="div" className="logoarea"></Box>
            <Box component="ul" className="navbar" justifyContent="center">
              <MenuItem>
                <Box component="span" className="navactive">
                  Home
                </Box>
              </MenuItem>
              <MenuItem>
                <Box component="span">About Us</Box>
              </MenuItem>
              <MenuItem>
                <Box component="span">Contact Us</Box>
              </MenuItem>
              <MenuItem>
                <Box component="span">FAQ's</Box>
              </MenuItem>
              <MenuItem>
                <Box component="span">Services</Box>
              </MenuItem>
              <MenuItem>
                <Button className="darkbluecolor whitecolortext border8">
                  Search Candidate
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  className="darkcolortext border8 lightbluecolorbtn"
                  startIcon={<AddIcon />}
                >
                  Post New Job
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  className="profilebtn"
                  aria-controls="fade-menu"
                  aria-haspopup="true"
                  aria-expanded={openmenu ? "true" : undefined}
                  onClick={handleClick}
                >
                  <img src={BASE_URL + SchoolSMLIMG} alt="" className="me-1" />
                  <Typography variant="span">Kolkata High School</Typography>
                </Button>
                <Menu
                  id="fade-menu"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={openmenu}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  className="extendedmenu"
                >
                  <MenuItem onClick={handleClose}>
                    <ProfileMenu /> Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <LogoutIcon /> Logout
                  </MenuItem>
                </Menu>
              </MenuItem>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <img src={BASE_URL + JIElogo} alt="" className="mainlogo" />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className="drawer_ul">
          <ListItem>
            <ListItemIcon>
              <ProfileDrawer />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TeamDrawer />
            </ListItemIcon>
            <ListItemText>Team</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SchedDrwaer />
            </ListItemIcon>
            <ListItemText>Schedules</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TestDrawer />
            </ListItemIcon>
            <ListItemText>Test Paper</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SchedDrwaer />
            </ListItemIcon>
            <ListItemText>Schedules</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TemplateDrawer />
            </ListItemIcon>
            <ListItemText>Template</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FeddbackDrawer />
            </ListItemIcon>
            <ListItemText>Feedback</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BlogDrawer />
            </ListItemIcon>
            <ListItemText>Blogs</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SettingDrawer />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className="bodygey">
        <div className={classes.toolbar} />
        <Box className="pagecontentarea candidatesuggestionscontent">
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={12}>
              <Grid container direction="row" justifyContent="space-between">
                <Grid item lg={7} md={12}>
                  <Typography variant="span" className="pagetitle">
                    Candidates Suggestions
                  </Typography>
                  <Box
                    component="div"
                    className="dis_flex fullwidth_100percent"
                  >
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
                </Grid>
                <Grid item lg={5}>
                  <img
                    src={BASE_URL + SuggBG}
                    alt=""
                    className="align-right bg_img"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {/* <CandidateBoxDropdown /> */}
            </Grid>
            <Grid item xs={12} className="empty mb-4 pt-4 pb-4">
              {/* <CandidateSuggestionsEmpty /> */}

              {/* <Box component="div" className="listarea">
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item lg={4} md={4} xs={12}>
                    <CandidateSuggestionsBoxList />
                  </Grid>
                  <Grid item lg={4} md={4} xs={12}>
                    <CandidateSuggestionsBoxList />
                  </Grid>
                  <Grid item lg={4} md={4} xs={12}>
                    <CandidateSuggestionsBoxList />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item lg={4} md={4} xs={12}>
                    <CandidateSuggestionsBoxList />
                  </Grid>
                  <Grid item lg={4} md={4} xs={12}>
                    <CandidateSuggestionsBoxList />
                  </Grid>
                  <Grid item lg={4} md={4} xs={12}>
                    <CandidateSuggestionsBoxList />
                  </Grid>
                </Grid>
              </Box> */}

              <CandidateSuggestionsList />
            </Grid>
          </Grid>
        </Box>
      </main>
    </div>
  );
}
export default CandidateSuggestions;
const search = [
  { name: "Prashant", id: 1 },
  { name: "Vivek", id: 2 },
  { name: "Soumali", id: 3 },
  { name: "Soumak", id: 4 },
  { name: "Soumya", id: 5 },
  { name: "andugundutandapani", id: 6 },
];
const ProfileDrawer = () => {
  return (
    <svg
      className="profile_drawer"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="12"
      viewBox="0 0 16 12"
    >
      <defs></defs>
      <g transform="translate(-348.75 -394.441)">
        <path
          class="a"
          d="M364.75,395.643v9.6a.236.236,0,0,0-.02.041,1.4,1.4,0,0,1-1.515,1.158H352.659c-.833,0-1.666,0-2.5,0a1.406,1.406,0,0,1-1.339-.949c-.028-.082-.048-.166-.071-.249v-9.6a.275.275,0,0,0,.019-.041,1.409,1.409,0,0,1,1.547-1.159h10.15c.958,0,1.916-.007,2.873,0a1.358,1.358,0,0,1,1.285.82A2.926,2.926,0,0,1,364.75,395.643Zm-14.125,4.8a4.219,4.219,0,1,0,4.22-4.156A4.206,4.206,0,0,0,350.625,400.446Zm10.824-3.234c-.317,0-.634,0-.951,0a.462.462,0,1,0,0,.922q.936,0,1.871,0a.463.463,0,1,0,0-.922C362.062,397.211,361.756,397.212,361.449,397.212Zm-.01,2.768c.307,0,.613,0,.92,0a.464.464,0,1,0,0-.922q-.928,0-1.856,0a.463.463,0,1,0,0,.922C360.816,399.982,361.127,399.98,361.439,399.98Zm0,1.846c.317,0,.634,0,.951,0a.461.461,0,1,0,0-.921q-.943,0-1.887,0a.462.462,0,1,0,0,.922C360.812,401.828,361.124,401.826,361.436,401.826Zm0,1.846c.307,0,.613,0,.92,0a.465.465,0,1,0,0-.922q-.92,0-1.84,0a.464.464,0,1,0,0,.922C360.819,403.673,361.125,403.672,361.432,403.672Z"
          transform="translate(0 0)"
        />
        <path
          class="a"
          d="M422.473,467.315a3.473,3.473,0,0,0-1.333-1.13,1.941,1.941,0,0,0,.452-1.712,1.906,1.906,0,0,0-.754-1.157,1.95,1.95,0,0,0-2.606,2.871,3.477,3.477,0,0,0-1.323,1.119,3.343,3.343,0,0,1,.274-4.245,3.4,3.4,0,0,1,5.291,4.255Z"
          transform="translate(-64.79 -64.864)"
        />
        <path
          class="a"
          d="M450.821,575.806a3.3,3.3,0,0,1-4.2-.005,2.449,2.449,0,0,1,4.2.005Z"
          transform="translate(-93.85 -172.861)"
        />
        <path
          class="a"
          d="M474.459,507.988a.975.975,0,1,1-.967-.978A.978.978,0,0,1,474.459,507.988Z"
          transform="translate(-118.631 -108)"
        />
      </g>
    </svg>
  );
};

const TeamDrawer = () => {
  return (
    <svg
      className="team_drawer"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
      viewBox="0 0 16 14"
    >
      <defs></defs>
      <g transform="translate(-385.744 -408.728)">
        <path
          class="a"
          d="M619.116,534.968a3.826,3.826,0,0,1-2.2,1.072c0-.175.011-.335,0-.493-.049-.574-.077-1.152-.168-1.72a3.35,3.35,0,0,0-1.246-2.246c-.238-.181-.5-.326-.743-.48a5.512,5.512,0,0,0,.694-.153,3.192,3.192,0,0,0,.5-.283c.043-.025.1-.065.137-.057a7.054,7.054,0,0,1,1.625.467,2.072,2.072,0,0,1,1.229,1.6c.072.391.095.79.138,1.186.013.122.021.245.032.368Z"
          transform="translate(-217.372 -115.441)"
        />
        <path
          class="a"
          d="M445.88,550.053a12.121,12.121,0,0,1-3.2-.342,4.37,4.37,0,0,1-1.712-.825c-.048-.04-.092-.085-.138-.128a.681.681,0,0,1-.235-.579,18.267,18.267,0,0,1,.171-2.369,3.1,3.1,0,0,1,.558-1.382,2.848,2.848,0,0,1,1.437-.936c.433-.139.877-.24,1.319-.347a.236.236,0,0,1,.187.053,2,2,0,0,0,1.476.507,1.907,1.907,0,0,0,1.356-.54.155.155,0,0,1,.124-.027,7.5,7.5,0,0,1,1.93.6,2.576,2.576,0,0,1,1.382,1.9,11.388,11.388,0,0,1,.183,1.961c.007.194,0,.39.02.582a.65.65,0,0,1-.22.569,3.341,3.341,0,0,1-1.049.681,7.9,7.9,0,0,1-2.516.57C446.524,550.034,446.1,550.042,445.88,550.053Z"
          transform="translate(-51.92 -127.325)"
        />
        <path
          class="a"
          d="M487.977,412.012a5.76,5.76,0,0,1,.214-1.63,2.177,2.177,0,0,1,1.885-1.594,4.547,4.547,0,0,1,1.577.02,2.126,2.126,0,0,1,1.8,1.648,5.288,5.288,0,0,1-.014,3.015,3.016,3.016,0,0,1-1.606,1.914,2.335,2.335,0,0,1-2.663-.411,3.52,3.52,0,0,1-1.175-2.46c-.008-.086-.012-.172-.014-.259S487.977,412.092,487.977,412.012Z"
          transform="translate(-97.066 0)"
        />
        <path
          class="a"
          d="M427.347,421.543a5.984,5.984,0,0,0,.212,5.193,1.708,1.708,0,0,1-.858.3,2.1,2.1,0,0,1-1.979-1.053,2.909,2.909,0,0,1-.486-1.488,4.963,4.963,0,0,1,.163-1.7,1.744,1.744,0,0,1,1.468-1.288A3.58,3.58,0,0,1,427.347,421.543Z"
          transform="translate(-36.427 -12.038)"
        />
        <path
          class="a"
          d="M595.668,421.536a3.512,3.512,0,0,1,1.761.033,1.606,1.606,0,0,1,1.142,1.1,4.115,4.115,0,0,1-.037,2.85,2.316,2.316,0,0,1-1.562,1.456,1.885,1.885,0,0,1-1.519-.236A5.977,5.977,0,0,0,595.668,421.536Z"
          transform="translate(-199.098 -12.033)"
        />
        <path
          class="a"
          d="M390.12,531.143a3.622,3.622,0,0,0-1.235.92,3.771,3.771,0,0,0-.8,1.965c-.072.55-.1,1.106-.141,1.659-.009.118-.012.236-.018.371a5.255,5.255,0,0,1-1.191-.358,2.632,2.632,0,0,1-.857-.568.424.424,0,0,1-.132-.331,12.961,12.961,0,0,1,.174-2.142,2.221,2.221,0,0,1,1.67-1.733c.38-.117.772-.2,1.16-.288a.165.165,0,0,1,.13.027,1.7,1.7,0,0,0,1.091.428c.048,0,.1.011.144.019C390.116,531.114,390.117,531.13,390.12,531.143Z"
          transform="translate(0 -115.469)"
        />
      </g>
    </svg>
  );
};

const SchedDrwaer = () => {
  return (
    <svg
      className="sched_drawer"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
      viewBox="0 0 16 14"
    >
      <defs></defs>
      <g transform="translate(-348.75 -372.005)">
        <path
          class="a"
          d="M348.75,469.216c.106-.127.2-.26.318-.38a8.584,8.584,0,0,0,1.742-2.8,11.108,11.108,0,0,0,.757-3.622c0-.052.009-.1.014-.165h13.16c-.029.374-.048.74-.089,1.1a11.437,11.437,0,0,1-1.4,4.441,8.34,8.34,0,0,1-1.358,1.8.72.72,0,0,1-.544.221q-5.991-.006-11.983,0a.592.592,0,0,1-.614-.351Z"
          transform="translate(0 -86.567)"
        />
        <path
          class="a"
          d="M430.282,578.4a.607.607,0,0,1-.635.351q-6.028-.009-12.055,0c-.433,0-.6-.165-.6-.6s0-.85,0-1.293h.2q4.828,0,9.657,0a1.627,1.627,0,0,0,1.193-.476,9.9,9.9,0,0,0,2.113-3.111c.04-.09.086-.177.129-.266Z"
          transform="translate(-65.532 -192.743)"
        />
        <path
          class="a"
          d="M430.27,374.846H416.995a1.064,1.064,0,0,1-.013-.112c0-.426,0-.852,0-1.278a.469.469,0,0,1,.5-.5c.715,0,1.43,0,2.146,0h.192c0-.155,0-.3,0-.445a.474.474,0,1,1,.946,0c0,.141,0,.283,0,.434h2.367c0-.148,0-.293,0-.439a.473.473,0,1,1,.946-.006c0,.146,0,.292,0,.447h2.4c0-.14,0-.285,0-.43a.474.474,0,1,1,.946,0c0,.137,0,.273,0,.435h.17c.684,0,1.367.01,2.051,0a.584.584,0,0,1,.62.352Z"
          transform="translate(-65.52)"
        />
      </g>
    </svg>
  );
};

const TestDrawer = () => {
  return (
    <svg
      className="test_drawer"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      viewBox="0 0 12 16"
    >
      <defs></defs>
      <g transform="translate(-384.787 -336.135)">
        <path
          class="a"
          d="M395.556,398.068h-9.538a2.907,2.907,0,0,1-.435-.142,1.4,1.4,0,0,1-.8-1.35q0-4.544,0-9.087c0-.692,0-1.384,0-2.077a1.43,1.43,0,0,1,.519-1.149,1.822,1.822,0,0,1,1.366-.307c-.008.07-.014.132-.023.192a1.406,1.406,0,0,0,1.376,1.67q2.76.018,5.521,0a1.363,1.363,0,0,0,1.377-1.266,5.325,5.325,0,0,0,0-.6,2.163,2.163,0,0,1,1.066.137,1.4,1.4,0,0,1,.791,1.338q0,2.428,0,4.856,0,3.146,0,6.292a1.37,1.37,0,0,1-.576,1.211A3.555,3.555,0,0,1,395.556,398.068Zm-2.926-2.692c.207.213.393.406.58.6a.451.451,0,0,0,.447.145.466.466,0,0,0,.222-.785c-.189-.2-.394-.391-.6-.591.042-.048.064-.076.088-.1.176-.182.36-.357.528-.546a.457.457,0,0,0-.016-.635.447.447,0,0,0-.626-.023c-.067.057-.126.122-.188.184l-.445.45c-.205-.214-.388-.419-.585-.608a.455.455,0,0,0-.776.219.473.473,0,0,0,.149.466l.577.579c-.2.2-.386.38-.566.565a.476.476,0,0,0-.034.7.458.458,0,0,0,.683-.04C392.254,395.773,392.43,395.584,392.629,395.376Zm.015-6.945a.355.355,0,0,1-.037-.022c-.179-.179-.356-.36-.535-.538a.46.46,0,0,0-.683-.04.476.476,0,0,0,.034.7q.416.428.837.85a.466.466,0,0,0,.749,0q.643-.65,1.283-1.3a.971.971,0,0,0,.083-.092.464.464,0,1,0-.721-.585C393.32,387.745,392.983,388.087,392.645,388.432Zm-.02,2.832c-.106-.115-.192-.212-.281-.3s-.189-.191-.283-.287a.459.459,0,0,0-.445-.152.468.468,0,0,0-.224.794c.279.3.57.584.857.874a.472.472,0,0,0,.771-.005q.632-.639,1.261-1.281a1.117,1.117,0,0,0,.094-.1.464.464,0,1,0-.722-.584C393.319,390.557,392.983,390.9,392.625,391.263Zm-4.15-2.629c.3,0,.595,0,.892,0a.469.469,0,1,0-.006-.936q-.884,0-1.769,0a.469.469,0,1,0,.006.936C387.89,388.636,388.182,388.634,388.475,388.634Zm.014,3.28c.292,0,.584,0,.877,0a.469.469,0,1,0,0-.936q-.884,0-1.769,0a.469.469,0,1,0,0,.936C387.894,391.916,388.191,391.914,388.489,391.914Zm-.025,3.28c.3,0,.595,0,.892,0a.469.469,0,1,0,0-.936q-.877,0-1.753,0a.469.469,0,1,0,0,.936C387.89,395.2,388.177,395.194,388.464,395.194Z"
          transform="translate(0 -45.933)"
        />
        <path
          class="a"
          d="M460.032,338.958c-.845,0-1.691-.018-2.536.007-.54.016-.732-.3-.585-.834a1.363,1.363,0,0,1,1.32-1.058c.136,0,.272-.006.408,0a.142.142,0,0,0,.157-.1,1.3,1.3,0,0,1,1.167-.833,1.237,1.237,0,0,1,1.227.7.381.381,0,0,0,.429.241,1.405,1.405,0,0,1,1.579,1.411.458.458,0,0,1-.5.471Q461.367,338.96,460.032,338.958Z"
          transform="translate(-69.245)"
        />
      </g>
    </svg>
  );
};

const TemplateDrawer = () => {
  return (
    <svg
      className="tem_drawer"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <defs></defs>
      <g transform="translate(-348.75 -348.75)">
        <path
          class="a"
          d="M363.531,472.5H349.969a1.573,1.573,0,0,1-.881-.509,1.772,1.772,0,0,1-.338-.735V461.25h16v10.009c-.011.039-.024.078-.033.117a1.427,1.427,0,0,1-.779.985A3.281,3.281,0,0,1,363.531,472.5Zm-6.793-6.092h4.638a.476.476,0,0,0,.529-.529q0-1.336,0-2.672a.476.476,0,0,0-.53-.529h-9.245a.478.478,0,0,0-.537.537q0,1.313,0,2.625c0,.4.172.568.569.568Zm-2.332,4.662h2.279a.476.476,0,0,0,.533-.526q0-1.336,0-2.671a.478.478,0,0,0-.541-.533h-4.543a.478.478,0,0,0-.54.533q0,1.328,0,2.655a.481.481,0,0,0,.549.541Zm5.625,0c.458,0,.916,0,1.374,0a.467.467,0,0,0,.5-.495q0-1.366,0-2.733a.469.469,0,0,0-.509-.5q-1.366,0-2.732,0a.469.469,0,0,0-.508.5q0,1.359,0,2.717a.472.472,0,0,0,.517.51C359.126,471.073,359.579,471.072,360.032,471.072Z"
          transform="translate(0 -107.752)"
        />
        <path
          class="a"
          d="M348.75,352.549v-2.564c.012-.045.025-.09.036-.135a1.376,1.376,0,0,1,.675-.906,3.7,3.7,0,0,1,.507-.193h13.563a.854.854,0,0,0,.088.029,1.385,1.385,0,0,1,1.019.846,3.359,3.359,0,0,1,.112.359v2.564Zm3.31-2.374a.474.474,0,1,0,.471.468A.476.476,0,0,0,352.06,350.175Zm1.883,0a.474.474,0,1,0,.463.476A.476.476,0,0,0,353.943,350.175Zm1.867.949a.474.474,0,1,0-.466-.473A.477.477,0,0,0,355.81,351.124Z"
          transform="translate(0)"
        />
        <path
          class="a"
          d="M448.126,518.514v1.88h-8.32v-1.88Z"
          transform="translate(-87.213 -162.702)"
        />
        <path
          class="a"
          d="M443.465,631.025V632.9h-3.784v-1.879Z"
          transform="translate(-87.157 -270.568)"
        />
        <path
          class="a"
          d="M599.181,631.018V632.9H597.3v-1.879Z"
          transform="translate(-238.212 -270.562)"
        />
      </g>
    </svg>
  );
};
const FeddbackDrawer = () => {
  return (
    <svg
      className="feedback_drawer"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <defs></defs>
      <g transform="translate(-508 -570)">
        <g transform="translate(508 570)">
          <rect
            class="a"
            width="15.674"
            height="15.674"
            transform="translate(0)"
          />
          <g transform="translate(0)">
            <path
              class="b"
              d="M14,0H2A2,2,0,0,0,0,2v9a2,2,0,0,0,2,2H3v2.5a.5.5,0,0,0,.288.453A.507.507,0,0,0,3.5,16a.5.5,0,0,0,.32-.116L7.281,13H14a2,2,0,0,0,2-2V2A2,2,0,0,0,14,0Z"
            />
          </g>
        </g>
        <path
          class="c"
          d="M11.075,4.86,8.714,4.49,7.659,2.179a.309.309,0,0,0-.135-.146.289.289,0,0,0-.4.146L6.069,4.49,3.708,4.86a.29.29,0,0,0-.17.093.34.34,0,0,0,.006.455l1.708,1.8-.4,2.54a.345.345,0,0,0,.017.175.319.319,0,0,0,.1.139.284.284,0,0,0,.153.06.279.279,0,0,0,.16-.036l2.112-1.2,2.112,1.2a.276.276,0,0,0,.189.032.319.319,0,0,0,.243-.371l-.4-2.54,1.708-1.8a.331.331,0,0,0,.086-.184A.317.317,0,0,0,11.075,4.86Z"
          transform="translate(508.608 570.031)"
        />
      </g>
    </svg>
  );
};
const BlogDrawer = () => {
  return (
    <svg
      className="blog_drawer"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <defs></defs>
      <g transform="translate(-335.233 -335.326)">
        <path
          class="a"
          d="M351.892,456.8v10.02a.483.483,0,0,0-.025.073,1.392,1.392,0,0,1-.495.855,1.669,1.669,0,0,1-.73.321h-13.5c-.009-.005-.017-.014-.026-.016a1.443,1.443,0,0,1-1.227-1.506c.01-3.187,0-6.375,0-9.562V456.8Zm-11.324,5.65h2.28a.482.482,0,0,0,.546-.547q0-1.795,0-3.589a.482.482,0,0,0-.548-.545h-4.53a.482.482,0,0,0-.546.547q0,1.795,0,3.589a.482.482,0,0,0,.548.545Zm3.326,1.873h5.514a1.678,1.678,0,0,0,.187,0,.465.465,0,0,0,.376-.66.506.506,0,0,0-.516-.274q-5.561,0-11.121,0a1.267,1.267,0,0,0-.14,0,.466.466,0,0,0,0,.928,1.756,1.756,0,0,0,.187,0Zm-.016,1.873h5.529a1.687,1.687,0,0,0,.187,0,.465.465,0,0,0,.376-.66.506.506,0,0,0-.516-.274q-5.561,0-11.121,0a1.28,1.28,0,0,0-.14,0,.466.466,0,0,0,0,.928,1.725,1.725,0,0,0,.187,0Zm3.3-6.555q-1.164,0-2.327,0a.478.478,0,0,0-.482.3.47.47,0,0,0,.483.635q1.843,0,3.686,0c.333,0,.666,0,1,0a.468.468,0,1,0-.016-.934C348.736,459.638,347.955,459.641,347.174,459.641Zm0,1.873q-1.164,0-2.327,0a.477.477,0,0,0-.482.3.47.47,0,0,0,.483.635q1.843,0,3.686,0c.333,0,.666,0,1,0a.468.468,0,1,0-.016-.934C348.736,461.511,347.955,461.513,347.174,461.513Z"
          transform="translate(-0.659 -116.742)"
        />
        <path
          class="a"
          d="M351.943,337.246v2.538H335.96a.446.446,0,0,1-.012-.063c0-.773-.01-1.545.006-2.318a1.512,1.512,0,0,1,.14-.6,1.377,1.377,0,0,1,1.349-.809H350.45a1.439,1.439,0,0,1,1.189.544A1.721,1.721,0,0,1,351.943,337.246Zm-13.185,1.092a.467.467,0,1,0-.463.473A.473.473,0,0,0,338.758,338.338Zm1.875.011a.468.468,0,1,0-.475.462A.473.473,0,0,0,340.632,338.349Zm1.406-.476a.469.469,0,1,0,.468.468A.473.473,0,0,0,342.038,337.873Z"
          transform="translate(-0.71 -0.666)"
        />
        <path
          class="a"
          d="M412.064,505.887v2.8h-3.74v-2.8Z"
          transform="translate(-70.265 -163.928)"
        />
      </g>
    </svg>
  );
};
const SettingDrawer = () => {
  return (
    <svg
      className="setting_drawer"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <defs></defs>
      <path
        class="a"
        d="M11.658,241.636a9.335,9.335,0,0,0-1.864-.207,9.448,9.448,0,0,0-1.881.207.65.65,0,0,0-.338.189.6.6,0,0,0-.16.343l-.145,1.252a1.112,1.112,0,0,1-.186.495,1.164,1.164,0,0,1-.4.361,1.215,1.215,0,0,1-.525.152,1.241,1.241,0,0,1-.54-.091l-1.2-.5a.66.66,0,0,0-.386-.039.642.642,0,0,0-.339.182,7.969,7.969,0,0,0-1.884,3.111.594.594,0,0,0,0,.375.617.617,0,0,0,.229.3l1.062.749a1.15,1.15,0,0,1,.355.4,1.091,1.091,0,0,1,0,1.023,1.151,1.151,0,0,1-.355.4l-1.062.751a.621.621,0,0,0-.229.3.592.592,0,0,0,0,.374A7.972,7.972,0,0,0,3.7,254.886a.649.649,0,0,0,.339.183.668.668,0,0,0,.387-.039l1.2-.506a1.233,1.233,0,0,1,.538-.093,1.22,1.22,0,0,1,.524.15,1.134,1.134,0,0,1,.583.854l.145,1.252a.6.6,0,0,0,.157.339.642.642,0,0,0,.332.191,8.462,8.462,0,0,0,3.765,0,.642.642,0,0,0,.332-.191.6.6,0,0,0,.157-.339l.145-1.254a1.1,1.1,0,0,1,.183-.5,1.17,1.17,0,0,1,.4-.362,1.23,1.23,0,0,1,1.065-.056l1.2.506a.66.66,0,0,0,.387.039.642.642,0,0,0,.339-.182,7.973,7.973,0,0,0,1.883-3.112.59.59,0,0,0,0-.374.617.617,0,0,0-.229-.3l-1.061-.75a1.151,1.151,0,0,1-.355-.4,1.091,1.091,0,0,1,0-1.023,1.149,1.149,0,0,1,.354-.4l1.061-.751a.616.616,0,0,0,.228-.3.589.589,0,0,0,0-.373,7.971,7.971,0,0,0-1.884-3.112.649.649,0,0,0-.339-.182.668.668,0,0,0-.387.039l-1.2.5a1.214,1.214,0,0,1-1.262-.2,1.118,1.118,0,0,1-.385-.721l-.146-1.254a.6.6,0,0,0-.159-.342.647.647,0,0,0-.337-.189ZM9.785,252.1a2.844,2.844,0,0,1-1.968-.781,2.588,2.588,0,0,1,0-3.771,2.868,2.868,0,0,1,3.935,0,2.588,2.588,0,0,1,0,3.771A2.844,2.844,0,0,1,9.785,252.1Z"
        transform="translate(-1.785 -241.429)"
      />
    </svg>
  );
};
const ProfileMenu = () => {
  return (
    <svg
      className="profilemenu me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(16490 -15203)">
        <g class="a" transform="translate(-16490 15203)">
          <rect class="c" width="24" height="24" />
          <rect class="d" x="0.5" y="0.5" width="23" height="23" />
        </g>
        <g transform="translate(-16821.389 14871.507)">
          <path
            class="b"
            d="M351.9,343.653v.938c-.01.055-.021.11-.029.165-.038.289-.06.58-.115.866A8,8,0,0,1,345.28,352c-.3.052-.606.083-.91.123h-.937c-.046-.009-.091-.02-.136-.027-.436-.068-.88-.1-1.308-.207a8.009,8.009,0,0,1-5.946-9.264A8.011,8.011,0,0,1,345,336.2a7.636,7.636,0,0,1,4.165,1.9,7.834,7.834,0,0,1,2.608,4.641C351.829,343.045,351.859,343.35,351.9,343.653Zm-9.934,1.375a3.282,3.282,0,1,1,3.877,0A6.168,6.168,0,0,1,349.5,348.4a7.052,7.052,0,1,0-11.2,0A6.171,6.171,0,0,1,341.966,345.027Zm1.988,6.162c.124-.007.306-.016.488-.03a6.93,6.93,0,0,0,4.281-1.892.179.179,0,0,0,.042-.155,5.157,5.157,0,0,0-9.726-.012.137.137,0,0,0,.042.174A7.085,7.085,0,0,0,343.953,351.19Zm-.059-6.475a2.344,2.344,0,1,0-2.335-2.355A2.351,2.351,0,0,0,343.894,344.715Z"
            transform="translate(-0.511 -0.631)"
          />
        </g>
      </g>
    </svg>
  );
};

const LogoutIcon = () => {
  return (
    <svg
      className="logouticon me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(16510 -15214)">
        <g class="a" transform="translate(-16510 15214)">
          <rect class="c" width="24" height="24" />
          <rect class="d" x="0.5" y="0.5" width="23" height="23" />
        </g>
        <g transform="translate(-16854.75 14869.25)">
          <path
            class="b"
            d="M358.029,348.75c.095.026.191.049.284.078a1.635,1.635,0,0,1,1.164,1.527c.014,1.125.007,2.25,0,3.374a.333.333,0,0,1-.337.354.337.337,0,0,1-.329-.365q0-1.6,0-3.2a1.014,1.014,0,0,0-1.1-1.1h-5.294l-.008.031c.144.049.288.1.433.148.541.179,1.083.355,1.623.537a1.328,1.328,0,0,1,.99,1.373q0,4.445,0,8.889,0,.773,0,1.547c0,.041,0,.082.008.138.055,0,.1.009.155.009q1.054,0,2.107,0A1.012,1.012,0,0,0,358.816,361q0-1.578,0-3.156a.668.668,0,0,1,.027-.214.319.319,0,0,1,.348-.209.325.325,0,0,1,.287.287,1.334,1.334,0,0,1,.005.156q0,1.562,0,3.125a1.671,1.671,0,0,1-1.775,1.761h-2.251c0,.187,0,.363,0,.538a1.333,1.333,0,0,1-1.116,1.443c-.009,0-.016.012-.024.019h-.409l-1.125-.374-3.076-1.018a1.338,1.338,0,0,1-.861-.784c-.039-.095-.065-.2-.1-.293V349.875a1.336,1.336,0,0,1,.473-.8,5.1,5.1,0,0,1,.659-.329Zm-3.24,8.663q0-2.96,0-5.92a.673.673,0,0,0-.519-.726q-1.956-.651-3.914-1.3a.669.669,0,0,0-.937.671q0,5.936,0,11.871a.671.671,0,0,0,.515.714q1.979.658,3.961,1.311a.736.736,0,0,0,.307.036.668.668,0,0,0,.588-.711Q354.79,360.388,354.79,357.413Z"
          />
          <path
            class="b"
            d="M564.138,447.977c-.085.09-.168.182-.256.27q-1.222,1.224-2.446,2.445a.907.907,0,0,1-.141.124.325.325,0,0,1-.428-.059.332.332,0,0,1-.016-.42,1.263,1.263,0,0,1,.118-.126l1.867-1.868c.04-.04.078-.081.146-.153h-5.747a1.026,1.026,0,0,1-.234-.02.328.328,0,0,1,0-.635,1.019,1.019,0,0,1,.234-.02h5.746c-.059-.064-.094-.1-.132-.141-.637-.638-1.277-1.272-1.909-1.915a.52.52,0,0,1-.151-.294.325.325,0,0,1,.492-.283.726.726,0,0,1,.143.121q1.3,1.293,2.592,2.588c.043.043.081.092.121.137Z"
            transform="translate(-199.388 -92.098)"
          />
        </g>
      </g>
    </svg>
  );
};

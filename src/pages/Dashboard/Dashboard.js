import React from "react";
import "./Dashboard.scss";
import {
  Typography,
  Box,
  MenuItem,
  Button,
  Grid,
  TextField,
  AppBar,
  Tabs,
  Tab,
  List,
  ListItem,
  Toolbar,
  Modal,
  Backdrop,
  Fade,
  Drawer,
  Divider,
  Popover,
  Link,
  Menu,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import SchoolSMLIMG from "../../images/profile_schl.png";
// import PersonIcon from "@material-ui/icons/Person";
// import PersonalProfileImg from "../../images/personalprofile.png";
// import ChatIcon from "@material-ui/icons/Chat";
import CloseIcon from "@material-ui/icons/Close";
import ChatIcon from "@material-ui/icons/Chat";
import ProfileDP from "../../images/profiledp.png";
import PropTypes from "prop-types";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import SuggestedCandidatesSection from "./SuggestedCandidates/SuggestedCandidatesSection";
import CandidateDetailsPopper from "../CandidateDetailsPopper/CandidateDeatilsPopper";
import JIElogo from "../../images/JIE_logo.svg";
import Notification from "./Notification";
import UnlockedCandidateCard from "../UnlockedCandidateCard/UnlockedCandidateCard";
import LockedCandidateCard from "../LockedCandidateCard/LockedCandidateCard";
import LockedCandidateDetailsPopper from "../LockedCandidateDetailsPopper/LockedCandidateDeatilsPopper";

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

function Dashboard() {
  const [iscandidat, setIscandidat] = React.useState(null);
  const [iscandidatlocked, setIscandidatlocked] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const [open] = React.useState(false);

  const [openTask, setOpenTask] = React.useState(false);

  const handleOpenTask = () => {
    setOpenTask(true);
  };

  const handleCloseTasks = () => {
    setOpenTask(false);
  };

  // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openInvite, setOpenInvite] = React.useState(false);

  const handleOpenInvite = () => {
    setOpenInvite(true);
  };

  const handleCloseInvite = () => {
    setOpenInvite(false);
  };

  const [openSave, setOpenSave] = React.useState(false);

  const handleOpenSave = () => {
    setOpenSave(true);
  };

  const handleCloseSave = () => {
    setOpenSave(false);
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
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid item lg={9} md={12} xs={12}>
            <Box component="div" className="dashboard_srcharea">
              <Box component="div" className="srchdiv">
                <Box component="div" className="srchinput">
                  <Box component="div" className="srchsvgdiv">
                    <SrchIcon />
                  </Box>
                  <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    classes={{
                      clearIndicator: "SrchBtn",
                      input: "inputtext",
                    }}
                    fullWidth
                    options={jobTitle.map((option) => option.name)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        margin="normal"
                        placeholder="Job Title or Keywords"
                        className="srcharea_inputdiv"
                      />
                    )}
                  />
                </Box>
                <Box component="div" className="locateinput">
                  <Box component="div" className="locatesvgdiv">
                    <LocateIcon />
                  </Box>
                  <Autocomplete
                    id="free-solo-demo multiple-limit-tags"
                    multiple
                    limitTags={2}
                    classes={{
                      clearIndicator: "SrchBtn",
                      popupIndicator: "popbtn",
                      input: "inputtext",
                    }}
                    fullWidth
                    options={location.map((option) => option.name)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        margin="normal"
                        placeholder="Work Location"
                        className="srcharea_inputdiv"
                      />
                    )}
                  />
                </Box>
                <Box component="div" className="srchbutton">
                  <Button className="darkbluecolor whitecolortext border16">
                    Search
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="recentdiv">
              <Typography className="spantitle" variant="span">
                Recent Searches
              </Typography>
              <Box component="div" className="recentbtndiv">
                <List>
                  <ListItem>
                    <Button startIcon={<RecentIcon />}>Recent Searches</Button>
                  </ListItem>
                  <ListItem>
                    <Button startIcon={<RecentIcon />}>Recent Searches</Button>
                  </ListItem>
                  <ListItem>
                    <Button startIcon={<RecentIcon />}>Recent Searches</Button>
                  </ListItem>
                  <ListItem>
                    <Button startIcon={<RecentIcon />}>Recent Searches</Button>
                  </ListItem>
                  <ListItem>
                    <Button startIcon={<RecentIcon />}>Recent Searches</Button>
                  </ListItem>
                  <ListItem>
                    <Button startIcon={<RecentIcon />}>Recent Searches</Button>
                  </ListItem>
                  <ListItem>
                    <Button startIcon={<RecentIcon />}>Recent Searches</Button>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box component="div" className="profilecompletiondiv">
              <Box component="div" className="profilecont">
                <Box component="div" className="profileimgprogressli">
                  <CircularProgress
                    variant="determinate"
                    value={20}
                    style={{ width: "57px", height: "57px" }}
                  />
                  <img src={BASE_URL + SchoolSMLIMG} alt="Person" />
                </Box>
                <Box component="div" className="profilemid">
                  <Box component="div" className="profiletitle">
                    <Typography className="spantitle" variant="span">
                      Profile Completion
                    </Typography>
                    <Button className="bellbtn">
                      <BellIcon />
                    </Button>
                  </Box>
                  <Box component="div" className="profilesubtext">
                    <Typography className="spansubtext" variant="span">
                      Please complete profile now to attract the best candidates
                      with guided navigation.
                    </Typography>
                  </Box>
                </Box>
                <Button className="darkbluecolor whitecolortext border8 marginautoright">
                  <EditWhiteIcon />
                </Button>
              </Box>
            </Box>
            <Box component="div" className="jobsbardiv">
              <Box component="div" className="jobcontdiv">
                <Box component="div" className="jobhead">
                  <PostIcon />
                </Box>
                <Box component="div" className="jobmid">
                  <Typography variant="span">
                    Jobs Posted &amp;
                    <br /> Application Received
                  </Typography>
                </Box>
                <Box component="div" className="jobbot">
                  <Typography variant="span">20</Typography>
                </Box>
              </Box>
              <Box component="div" className="jobcontdiv">
                <Box component="div" className="jobhead">
                  <BookMark />
                </Box>
                <Box component="div" className="jobmid">
                  <Typography variant="span">
                    Candidates <br /> Saved
                  </Typography>
                </Box>
                <Box component="div" className="jobbot">
                  <Typography variant="span">20</Typography>
                </Box>
              </Box>
              <Box component="div" className="jobcontdiv">
                <Box component="div" className="jobhead">
                  <InviteIcon />
                </Box>
                <Box component="div" className="jobmid">
                  <Typography variant="span">
                    Candidates <br /> Invited
                  </Typography>
                </Box>
                <Box component="div" className="jobbot">
                  <Typography variant="span">20</Typography>
                </Box>
              </Box>
              <Box component="div" className="jobcontdiv">
                <Box component="div" className="jobhead">
                  <FlagIcon />
                </Box>
                <Box component="div" className="jobmid">
                  <Typography variant="span">
                    Candidates <br /> Shortlisted
                  </Typography>
                </Box>
                <Box component="div" className="jobbot">
                  <Typography variant="span">20</Typography>
                </Box>
              </Box>
              <Box component="div" className="jobcontdiv">
                <Box component="div" className="jobhead">
                  <SelectedIcon />
                </Box>
                <Box component="div" className="jobmid">
                  <Typography variant="span">
                    Candidates <br /> Selected
                  </Typography>
                </Box>
                <Box component="div" className="jobbot">
                  <Typography variant="span">20</Typography>
                </Box>
              </Box>
              <Box component="div" className="jobcontdiv">
                <Box component="div" className="jobhead">
                  <HoldIconOrg />
                </Box>
                <Box component="div" className="jobmid">
                  <Typography variant="span">
                    Candidates <br /> On Hold
                  </Typography>
                </Box>
                <Box component="div" className="jobbot">
                  <Typography variant="span">20</Typography>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="jobpostdiv">
              <Typography variant="span" className="jobposttitle">
                Incomplete Job Postings
              </Typography>
              <Box component="div" className="jobpostarea">
                <Box component="div" className="jobpostcont">
                  <Box component="div" className="tophead">
                    <Typography variant="span">
                      Primary Maths Teacher for all primary classes
                    </Typography>
                    <Button className="darkbluecolor whitecolortext border8 marginautoright">
                      <EditWhiteIconSmall />
                    </Button>
                  </Box>
                  <Typography variant="span" className="lasteditspan">
                    Last Edited
                  </Typography>
                  <Typography variant="span" className="timespan">
                    20 Aug 2020, 2:00 PM
                  </Typography>
                </Box>
                <Box component="div" className="jobpostcont">
                  <Box component="div" className="tophead">
                    <Typography variant="span">
                      Primary Maths Teacher for all primary classes
                    </Typography>
                    <Button className="darkbluecolor whitecolortext border8 marginautoright">
                      <EditWhiteIconSmall />
                    </Button>
                  </Box>
                  <Typography variant="span" className="lasteditspan">
                    Last Edited
                  </Typography>
                  <Typography variant="span" className="timespan">
                    20 Aug 2020, 2:00 PM
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="sugcanddivarea">
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                spacing={2}
              >
                <Grid item lg={12} md={12} xs={12}>
                  <Box component="div" className="sugcandidiv">
                    <Box component="div" className="sugheaddiv">
                      <Box component="div" className="sugheadtext">
                        <Typography variant="span" className="sugtitle mb-1">
                          Suggested Candidates
                        </Typography>
                        <Typography variant="span" className="font14 block">
                          For my Job Posts
                        </Typography>
                      </Box>
                      <Box
                        component="div"
                        className="marginautoright autocompdiv"
                      >
                        <Autocomplete
                          id="combo-box-demo"
                          className="WhiteSelectDropdown"
                          options={experience}
                          getOptionLabel={(option) => option.name}
                          renderInput={(params) => {
                            params.inputProps.className = "noborderinput";
                            params.InputProps.className = "noBeforeAfter";
                            params.InputProps.placeholder = "Institution";
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
                    <Box component="div" className="sugscrolltabs2">
                      <Box
                        component="div"
                        className="dis_flex "
                        justifyContent="space-between"
                      >
                        <Button className="buttonTab selected">
                          Upper Primary and Upper Primary School Maths Teacher
                          (50)
                        </Button>
                        <Button className="buttonTab">
                          Primary and Upper Primary School Maths Teacher (50)
                        </Button>
                        <Button className="buttonTab viewbtn">View All</Button>
                      </Box>
                      {/* Unlock Candidate Area */}
                      <Box
                        component="div"
                        className="sugscrolltabs"
                        // onClick={(e) => setIscandidat(e.target)}
                      >
                        <UnlockedCandidateCard
                          unlockcandidatepopper={(e) => setIscandidat(e.target)}
                        />
                      </Box>

                      {/* Lock Candidate Area */}
                      <Box
                        component="div"
                        className="sugscrolltabs"
                        // onClick={(e) => setIscandidat(e.target)}
                      >
                        <LockedCandidateCard
                          lockedcandidatepopper={(e) =>
                            setIscandidatlocked(e.target)
                          }
                        />
                      </Box>
                      <Popover
                        id="userProfile"
                        open={Boolean(iscandidat)}
                        anchorEl={iscandidat}
                        onClose={(e) => setIscandidat(null)}
                        classes={{ paper: "personaldetailsparentdiv" }}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'center',
                          horizontal: 'left',
                        }}
                      >
                        <CandidateDetailsPopper />
                      </Popover>
                      <Popover
                        id="userProfile"
                        open={Boolean(iscandidatlocked)}
                        anchorEl={iscandidatlocked}
                        onClose={(e) => setIscandidatlocked(null)}
                        classes={{ paper: "personaldetailsparentdiv" }}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'center',
                          horizontal: 'left',
                        }}
                      >
                        <LockedCandidateDetailsPopper />
                      </Popover>
                      {/* No Data */}
                      {/* <Box component="div" className="NoDataCandidates mt-3 text-center block">
                        <NoDataCandi/>
                        <Typography variant="span" className="font18 fontweight500 mt-3 block">Please post a job to receive candidate suggestions</Typography>
                        <Button className="darkbluecolor whitecolortext border8 mt-3">
                          Post A Job
                        </Button>
                      </Box> */}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={3} md={12} xs={12}>
            <Box component="div" className="notifibox">
              <Notification />
            </Box>

            <Box
              component="div"
              className="mytaskdiv whitebg pt-3 pb-3 border16"
            >
              <Box
                component="div"
                className="myboxhead dis_flex pe-3 pb-3 ps-3"
              >
                <Typography className="spantitle" variant="span">
                  My Task (2)
                </Typography>
                <Box component="div" className="adddiv marginautoright">
                  <Link className="font14">View all</Link>
                  <Button
                    className="transparentbtn noborder"
                    onClick={handleOpenTask}
                  >
                    <AddCircleOutlineIcon className="ms-3 top-1" />
                  </Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={openTask}
                    onClose={handleCloseTasks}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={openTask}>
                      <div className="modalcont emailmodal">
                        <Box component="div" className="dis_flex titleheading">
                          <Typography variant="h6">Create Task</Typography>
                          <Button
                            className="marginautoright transparentbtn noborder"
                            onClick={handleCloseTasks}
                          >
                            <CloseIcon />
                          </Button>
                        </Box>
                        <Box component="div" className="midbody">
                          <TextField
                            fullWidth
                            classes={{ root: "textfieldnormal" }}
                            id="standard-normal"
                            placeholder="Task"
                          />
                        </Box>
                        <Box
                          component="div"
                          className="jdarea fullwidth_100percent"
                        >
                          <Grid
                            directive="row"
                            container
                            justifyContent="space-between"
                            spacing={2}
                          >
                            <Grid item lg={6} md={12} xs={12} className="mt-3">
                              <Typography
                                variant="span"
                                className="label font14"
                              >
                                Date
                              </Typography>
                              <Box component="div" className="jddivcont">
                                <input
                                  type="date"
                                  placeholder="Select Date"
                                  className="nomralinput fullwidth_100percent"
                                  data-date-inline-picker="true"
                                />
                              </Box>
                            </Grid>
                            <Grid item lg={2} md={4} xs={12} className="mt-3">
                              <Typography
                                variant="span"
                                className="label font14"
                              >
                                Hours
                              </Typography>
                              <Box component="div" className="jddivcont">
                                <input
                                  type="number"
                                  min="0"
                                  max="24"
                                  className="nomralinput fullwidth_100percent"
                                />
                              </Box>
                            </Grid>
                            <Grid item lg={2} md={4} xs={12} className="mt-3">
                              <Typography
                                variant="span"
                                className="label font14"
                              >
                                Minutes
                              </Typography>
                              <Box component="div" className="jddivcont">
                                <input
                                  type="number"
                                  min="0"
                                  max="60"
                                  className="nomralinput fullwidth_100percent"
                                />
                              </Box>
                            </Grid>
                            <Grid
                              item
                              lg={2}
                              md={4}
                              xs={12}
                              className="ampmdiv"
                            >
                              <Box component="div" className="jddivcont">
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown fullwidth_100percent"
                                  options={zone}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                    option: "BlueOptions",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Select Zone";
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
                            </Grid>
                          </Grid>

                          <Button className="fullwidth_100percent mt-2 darkbluecolor invitebtn">
                            Done
                          </Button>
                        </Box>
                      </div>
                    </Fade>
                  </Modal>
                </Box>
              </Box>
              <Box component="div" className="taskdivcont ps-3 pe-3">
                <Box
                  component="div"
                  className="taskrow whitebg_shadow_border16"
                >
                  <Box component="div" className="taskname dis_flex">
                    <Typography variant="span" className="heading">
                      Schedule Interview for Barry Alan
                    </Typography>
                    <EditBlckIcon />
                  </Box>
                  <Box component="div" className="taskcont dis_flex">
                    <Typography variant="span" className="day">
                      Today
                    </Typography>
                    <Typography variant="span" className="time">
                      2:00 PM
                    </Typography>
                    <Typography
                      variant="span"
                      className="status marginautoright"
                    >
                      Done
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
export default Dashboard;

const zone = [
  { name: "AM", id: 1 },
  { name: "PM", id: 2 },
];

const jobTitle = [
  { name: "Chemistry", id: 1 },
  { name: "Maths", id: 2 },
];
const location = [
  { name: "Mumbai", id: 1 },
  { name: "Kolkata", id: 2 },
  { name: "Delhi", id: 3 },
  { name: "Chennai", id: 4 },
  { name: "Bangalore", id: 5 },
  { name: "Karnataka", id: 6 },
  { name: "Kerala", id: 7 },
  { name: "Andra Pradesh", id: 8 },
  { name: "Gujarat", id: 9 },
];

const SrchIcon = () => {
  return (
    <svg
      className="srchicon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <path
        class="a"
        d="M9.665,0a9.666,9.666,0,0,1,7.507,15.758L23.7,22.291A1,1,0,0,1,22.4,23.8l-.112-.1-6.535-6.533A9.666,9.666,0,1,1,9.665,0Zm0,2a7.666,7.666,0,1,0,5.421,2.245A7.667,7.667,0,0,0,9.665,2Z"
        transform="translate(0)"
      />
    </svg>
  );
};

const NoDataCandi = () => {
  return (
    <svg
      id="OBJECTS"
      xmlns="http://www.w3.org/2000/svg"
      width="366.535"
      height="319.438"
      viewBox="0 0 366.535 319.438"
    >
      <defs>
        <clipPath id="clip-path">
          <circle
            id="Ellipse_129"
            data-name="Ellipse 129"
            cx="25.488"
            cy="25.488"
            r="25.488"
            transform="translate(0 50.899) rotate(-86.84)"
            fill="none"
          />
        </clipPath>
        <clipPath id="clip-path-2">
          <circle
            id="Ellipse_133"
            data-name="Ellipse 133"
            cx="21.942"
            cy="21.942"
            r="21.942"
            fill="none"
          />
        </clipPath>
      </defs>
      <path
        id="Path_3802"
        data-name="Path 3802"
        d="M263.118,89.633S231,96.448,224.194,131.485s20.437,59.362,59.362,58.392c0,0,54.486,1.949,71.044,36.986s58.4,25.3,69.1-9.734-3.9-90.5-49.637-110.948S293.289,83.8,263.118,89.633Z"
        transform="translate(-60.511 -86.766)"
        fill="#fff4e9"
      />
      <path
        id="Path_3803"
        data-name="Path 3803"
        d="M59.867,282.579s20.437-36.016,75.911-25.3S207.809,315.667,253.54,314.7s102.184-19.467,124.569,8.755,3.9,84.675-64.229,80.777-69.1-30.17-107.06-20.437-61.31,30.17-117.763,11.682S44.288,305.934,59.867,282.579Z"
        transform="translate(-47.036 -99.66)"
        fill="#fff4e9"
      />
      <path
        id="Path_3804"
        data-name="Path 3804"
        d="M57.07,427.071c0,2.327,22.441,4.211,50.118,4.211s50.118-1.847,50.118-4.211-22.441-4.211-50.118-4.211S57.07,424.744,57.07,427.071Z"
        transform="translate(-47.804 -112.482)"
        fill="#fff4e9"
      />
      <path
        id="Path_3805"
        data-name="Path 3805"
        d="M110.766,188.012h-18.1a2.586,2.586,0,0,1-2.586-2.586h0a2.6,2.6,0,0,1,2.586-2.586h18.1Z"
        transform="translate(-50.329 -94.117)"
        fill="#18436d"
      />
      <path
        id="Path_3806"
        data-name="Path 3806"
        d="M75.024,185.51h25.553v7.3H75.024a3.694,3.694,0,0,1-3.694-3.694h0A3.694,3.694,0,0,1,75.024,185.51Z"
        transform="translate(-48.895 -94.321)"
        fill="#2a5798"
      />
      <path
        id="Path_3807"
        data-name="Path 3807"
        d="M99.964,185.51h25.544v7.3H99.964a3.694,3.694,0,0,1-3.694-3.694h0A3.694,3.694,0,0,1,99.964,185.51Z"
        transform="translate(-50.803 -94.321)"
        fill="#9be0ef"
      />
      <path
        id="Path_3808"
        data-name="Path 3808"
        d="M102.727,189.2a2.373,2.373,0,1,1-2.364-2.373,2.373,2.373,0,0,1,2.364,2.373Z"
        transform="translate(-50.934 -94.422)"
        fill="#4295ef"
      />
      <path
        id="Path_3809"
        data-name="Path 3809"
        d="M77.416,197.133l1.136-3.925L75.643,190.3a1.958,1.958,0,0,1-.379-2.235l1.995-4.091,8.431-.323,2.106,2.17-2.77.646-1.136,4.71a8.949,8.949,0,0,1,.646,1.939c0,.489-1.3,5.679-1.3,5.679Z"
        transform="translate(-49.181 -94.179)"
        fill="#ffbe9d"
      />
      <path
        id="Path_3810"
        data-name="Path 3810"
        d="M75.15,189.64l7.462,1.782,3.084-.97,1.136,2.6-2.272.48-5.033.332Z"
        transform="translate(-49.187 -94.637)"
        fill="#aa6550"
      />
      <path
        id="Path_3811"
        data-name="Path 3811"
        d="M88.461,185.776l-2.106-2.106-2.595,1.459"
        transform="translate(-49.846 -94.181)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3812"
        data-name="Path 3812"
        d="M86.073,183.67l-5.19.323-.813.646"
        transform="translate(-49.563 -94.181)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3813"
        data-name="Path 3813"
        d="M83.23,191.356l3.084-.923s1.782-1.949,2.918-1.625a1.7,1.7,0,0,1,1.3,1.1L87.45,192.99,83.4,194.283Z"
        transform="translate(-49.805 -94.571)"
        fill="#ffbe9d"
      />
      <path
        id="Path_3814"
        data-name="Path 3814"
        d="M84.071,185.156l-6.806-1.136-2.115,5.19,3.408,4.054"
        transform="translate(-49.187 -94.207)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3815"
        data-name="Path 3815"
        d="M90.616,189.9s-1.219-1.459-2.318-1.1a4.507,4.507,0,0,0-1.9,1.588l-2.106.36"
        transform="translate(-49.886 -94.569)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3816"
        data-name="Path 3816"
        d="M75.33,201.2l1.949-4.544a13.206,13.206,0,0,1,6.806,1.792l-1.459,4.534Z"
        transform="translate(-49.201 -95.174)"
        fill="#dee0e8"
      />
      <path
        id="Path_3817"
        data-name="Path 3817"
        d="M129.32,412.523s-1.062-2.272-5.015-1.672-4.405,1.367-4.858,3.343-1.847,4.1-2.77,4.562-4.257,2.77-6.991,3.186-3.038,2.124-2.429,2.891,10.934,1.367,13.215,1.062c0,0,7.748-.157,9.567-.766S129.468,413.29,129.32,412.523Z"
        transform="translate(-51.624 -111.555)"
        fill="#f6b333"
      />
      <path
        id="Path_3818"
        data-name="Path 3818"
        d="M107.89,412.523s-1.062-2.272-5.015-1.672-4.405,1.367-4.858,3.343-1.847,4.1-2.77,4.562-4.257,2.77-6.991,3.186-3.038,2.124-2.429,2.891S96.762,426.2,99.043,425.9c0,0,7.748-.157,9.567-.766S108.038,413.29,107.89,412.523Z"
        transform="translate(-49.984 -111.555)"
        fill="#f6b333"
      />
      <path
        id="Path_3819"
        data-name="Path 3819"
        d="M133.8,350.679a7.471,7.471,0,0,0-5.486-8.395c-6.649-2.115-7.905.924-9.918,6.7s1.7,59.916,1.7,59.916,8.1.185,10.057-.979c0,0,5.412-35.951,5.005-44.706S133.8,350.679,133.8,350.679Z"
        transform="translate(-52.45 -106.265)"
        fill="#18436d"
      />
      <path
        id="Path_3820"
        data-name="Path 3820"
        d="M108.859,176.758s-4.488,1.145-7.037,8.044-.85,21.563.85,23.29,6.852,1.071,14-1.293c7.554-2.493,10.1-10.343,11.46-15.524C130.709,181.357,122.084,171.152,108.859,176.758Z"
        transform="translate(-51.128 -93.53)"
        fill="#ffbe9d"
      />
      <path
        id="Path_3821"
        data-name="Path 3821"
        d="M125.587,217.01l-3.694-13.058s-7.3-2.133-11.848,2.77l-1.515,2.124v8.505a48.76,48.76,0,0,0,17.057-.342Z"
        transform="translate(-51.741 -95.697)"
        fill="#ffbe9d"
      />
      <path
        id="Path_3822"
        data-name="Path 3822"
        d="M136.153,293.955a120.359,120.359,0,0,1,0,34.169c-2.77,18.22-8.2,20.049-13.215,20.049s-6.381-14.582-7.3-20.963-4.553-28.249,2.281-33.246S132.533,288.488,136.153,293.955Z"
        transform="translate(-52.149 -102.319)"
        fill="#18436d"
      />
      <path
        id="Path_3823"
        data-name="Path 3823"
        d="M115.223,315.4s5.467-14.582-4.1-20.963-16.854-5.467-19.135,5.015-2.77,46.479.452,53.775S107.022,349.136,115.223,315.4Z"
        transform="translate(-50.335 -102.349)"
        fill="#18436d"
      />
      <path
        id="Path_3824"
        data-name="Path 3824"
        d="M127.227,217.7s-1.025-3.583-1.93-3.888-12.153-1.515-18.23,2.133c-2.77,2.124-2.429,3.639-2.429,3.639S122.776,216.113,127.227,217.7Z"
        transform="translate(-51.442 -96.453)"
        fill="#dee0e8"
      />
      <path
        id="Path_3825"
        data-name="Path 3825"
        d="M88.772,243.51s-3.26,41.058-2.346,56.859c1.21,3.038,26.559,3.869,30.817,3.565s18.183-3.306,18.47-4.22-2.65-41.391-2.041-45.648,2.429-25.211,1.847-28.249-3.343-8.81-9.115-10.029c0,0-18.83-1.21-32.2,4.562a133.5,133.5,0,0,0-16.392,3.943s3.408-17.278,5.107-22.385c0,0-4.617-3.408-9.235-2.189,0,0-8.505,19.347-10.214,36.376a3.694,3.694,0,0,0,3.168,4.017C73.922,241.2,88.772,243.51,88.772,243.51Z"
        transform="translate(-48.292 -95.388)"
        fill="#2a5798"
      />
      <path
        id="Path_3826"
        data-name="Path 3826"
        d="M106.633,351.833a7.48,7.48,0,0,0-6.381-7.739c-6.834-1.367-7.748,1.847-9.115,7.739s6.741,57.589,6.741,57.589,8.939.517,10.768-.85c0,0,2.087-35.776.72-44.429S106.633,351.833,106.633,351.833Z"
        transform="translate(-50.398 -106.431)"
        fill="#18436d"
      />
      <path
        id="Path_3827"
        data-name="Path 3827"
        d="M118.355,313.77s-6.381,20.511-11.165,30.53"
        transform="translate(-51.639 -104.135)"
        fill="none"
        stroke="#3f77bc"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3828"
        data-name="Path 3828"
        d="M104.569,351.188a8.081,8.081,0,0,0-7.739,0"
        transform="translate(-50.846 -106.923)"
        fill="none"
        stroke="#3f77bc"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3829"
        data-name="Path 3829"
        d="M105.283,353.964s-3.186-1.847-8.653,2.05"
        transform="translate(-50.831 -107.177)"
        fill="none"
        stroke="#3f77bc"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3830"
        data-name="Path 3830"
        d="M131.181,348.231s-2.5-2.281-8.2.231"
        transform="translate(-52.847 -106.699)"
        fill="none"
        stroke="#3f77bc"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3831"
        data-name="Path 3831"
        d="M129.3,350.731a6.852,6.852,0,0,0-7.065.924"
        transform="translate(-52.79 -106.918)"
        fill="none"
        stroke="#3f77bc"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <line
        id="Line_139"
        data-name="Line 139"
        x2="1.367"
        y2="46.47"
        transform="translate(68.083 247.461)"
        fill="none"
        stroke="#3f77bc"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3832"
        data-name="Path 3832"
        d="M99.756,312.387s-5.162,3.038-7.286-1.847"
        transform="translate(-50.512 -103.888)"
        fill="none"
        stroke="#3f77bc"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3833"
        data-name="Path 3833"
        d="M94.61,313.2s-2.429,18.83-1.847,31.288"
        transform="translate(-50.528 -104.091)"
        fill="none"
        stroke="#3f77bc"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3834"
        data-name="Path 3834"
        d="M97.07,224s9.567,5.015,3.2,16.623"
        transform="translate(-50.864 -97.266)"
        fill="none"
        stroke="#3f77bc"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3835"
        data-name="Path 3835"
        d="M111.175,207.56s-1.588,4.1-6.945,3.417"
        transform="translate(-51.412 -96.008)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3836"
        data-name="Path 3836"
        d="M104.08,179.732s-2.6,3.574-2.77,5.679,3.251,4.22,3.694,5.541-.323,4.054.166,4.867a5.707,5.707,0,0,1,.646,1.782l.166,2.77,1.782.323s1.782-5.024,3.084-5.347,2.595,1.939,3.075,3.075,1.949,4.22,1.949,4.22,5.679,1.459,6.815,1.136,6.326-10.546,6.464-15.7-3.4-10.38-7.129-12.005S111.052,172.926,104.08,179.732Z"
        transform="translate(-51.188 -93.493)"
        fill="#2a383d"
      />
      <path
        id="Path_3837"
        data-name="Path 3837"
        d="M107.013,198.658s.646-2.77,3.02-1.505-.434,7.979-2.373,7.545S106.588,199.757,107.013,198.658Z"
        transform="translate(-51.582 -95.187)"
        fill="#ffbe9d"
      />
      <path
        id="Path_3838"
        data-name="Path 3838"
        d="M105.19,178.559s-.166-4.387,5.024-7.628,13.631,1.625,14.776,4.22,4.7,6,5.347,9.4-1.616,11.848-4.054,14.12c-.813.646-.813-1.136-.813-1.136a13.364,13.364,0,0,1-2.6,2.263c-.923.489-2.595-2.918-2.595-2.918a6.576,6.576,0,0,1-1.939,1.949c-1.136.646-1.625-3.888-1.625-3.888s-.979-4.867-2.918-7.139S106.16,180.821,105.19,178.559Z"
        transform="translate(-51.485 -93.123)"
        fill="#263238"
      />
      <path
        id="Path_3839"
        data-name="Path 3839"
        d="M132.348,229c0,1.459-5.836,30.66-4.867,34.557s5.356,31.629,5.356,31.629"
        transform="translate(-53.183 -97.649)"
        fill="none"
        stroke="#3f77bc"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3840"
        data-name="Path 3840"
        d="M74.27,234.765c3.9-3.168,3.9-6.575,3.9-6.575a7.658,7.658,0,0,1,.73,5.116"
        transform="translate(-49.12 -97.587)"
        fill="none"
        stroke="#3f77bc"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3841"
        data-name="Path 3841"
        d="M114.5,181a122.252,122.252,0,0,1,9.078,8.764"
        transform="translate(-52.198 -93.976)"
        fill="none"
        stroke="#2a383d"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3842"
        data-name="Path 3842"
        d="M121.87,187.28s1.3-4.387,7.3-5.19"
        transform="translate(-52.762 -94.06)"
        fill="none"
        stroke="#2a383d"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3843"
        data-name="Path 3843"
        d="M118.468,184.9s-2.272.157-2.918,3.4"
        transform="translate(-52.278 -94.275)"
        fill="none"
        stroke="#2a383d"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <rect
        id="Rectangle_1912"
        data-name="Rectangle 1912"
        width="139.169"
        height="78.829"
        rx="10.54"
        transform="translate(113.066 72.941)"
        fill="#bfd9ff"
      />
      <rect
        id="Rectangle_1913"
        data-name="Rectangle 1913"
        width="158.636"
        height="89.855"
        rx="12.01"
        transform="translate(103.342 67.427)"
        fill="#f6b333"
      />
      <circle
        id="Ellipse_127"
        data-name="Ellipse 127"
        cx="25.488"
        cy="25.488"
        r="25.488"
        transform="translate(197.459 136.526) rotate(-86.84)"
        fill="#fff"
      />
      <g
        id="Group_6966"
        data-name="Group 6966"
        transform="translate(197.459 85.627)"
        clip-path="url(#clip-path)"
      >
        <circle
          id="Ellipse_128"
          data-name="Ellipse 128"
          cx="12.144"
          cy="12.144"
          r="12.144"
          transform="translate(14.919 12.885)"
          fill="#7e2d2c"
        />
        <path
          id="Path_3844"
          data-name="Path 3844"
          d="M308.794,238.556a20.575,20.575,0,0,0-41.1,0Z"
          transform="translate(-261.378 -182.507)"
          fill="#2a5798"
        />
        <path
          id="Path_3845"
          data-name="Path 3845"
          d="M296.055,221.778a6.668,6.668,0,1,1-6.668-6.668A6.668,6.668,0,0,1,296.055,221.778Z"
          transform="translate(-262.528 -182.213)"
          fill="#ff7657"
        />
        <path
          id="Path_3846"
          data-name="Path 3846"
          d="M304.449,209.5a2.724,2.724,0,1,1-2.724-2.724,2.724,2.724,0,0,1,2.724,2.724Z"
          transform="translate(-263.774 -181.575)"
          fill="#ff7657"
        />
        <path
          id="Path_3847"
          data-name="Path 3847"
          d="M279.879,209.5a2.724,2.724,0,1,1-2.724-2.724,2.724,2.724,0,0,1,2.724,2.724Z"
          transform="translate(-261.894 -181.575)"
          fill="#ff7657"
        />
        <path
          id="Path_3848"
          data-name="Path 3848"
          d="M299.747,208.839a10.759,10.759,0,1,1-10.759-10.759A10.759,10.759,0,0,1,299.747,208.839Z"
          transform="translate(-262.185 -180.91)"
          fill="#ff9677"
        />
        <path
          id="Path_3849"
          data-name="Path 3849"
          d="M300.714,204.915c-1.21,3.537-6.132,5.051-11.017,3.4s-7.859-5.873-6.658-9.41,6.132-5.051,11.017-3.389S301.914,201.387,300.714,204.915Z"
          transform="translate(-262.532 -180.662)"
          fill="#7e2d2c"
        />
      </g>
      <path
        id="Path_3850"
        data-name="Path 3850"
        d="M238.731,246.122h-56.12a8.912,8.912,0,0,1-8.921-8.921h0a8.921,8.921,0,0,1,8.921-8.921h56.12a8.921,8.921,0,0,1,8.921,8.921h0a8.912,8.912,0,0,1-8.921,8.921Z"
        transform="translate(-56.727 -97.594)"
        fill="#fff"
      />
      <path
        id="Path_3851"
        data-name="Path 3851"
        d="M187.668,239.9l-2.133,1.117a.277.277,0,0,1-.4-.286l.406-2.364a.249.249,0,0,0-.074-.24l-1.718-1.681a.268.268,0,0,1,.148-.462l2.383-.351a.277.277,0,0,0,.2-.148l1.062-2.161a.277.277,0,0,1,.489,0l1.062,2.161a.259.259,0,0,0,.2.148l2.383.351a.268.268,0,0,1,.148.462l-1.718,1.681a.249.249,0,0,0-.074.24l.4,2.364a.268.268,0,0,1-.388.286l-2.133-1.117A.3.3,0,0,0,187.668,239.9Z"
        transform="translate(-57.49 -97.969)"
        fill="#ffa402"
      />
      <path
        id="Path_3852"
        data-name="Path 3852"
        d="M200.519,239.9l-2.133,1.117a.268.268,0,0,1-.388-.286l.406-2.364a.277.277,0,0,0-.083-.24l-1.718-1.681a.268.268,0,0,1,.148-.462l2.383-.351a.259.259,0,0,0,.2-.148l1.062-2.161a.277.277,0,0,1,.489,0l1.062,2.161a.277.277,0,0,0,.212.148l2.373.351a.268.268,0,0,1,.148.462l-1.718,1.681a.249.249,0,0,0-.074.24l.406,2.364a.277.277,0,0,1-.4.286l-2.133-1.117a.3.3,0,0,0-.249,0Z"
        transform="translate(-58.473 -97.969)"
        fill="#ffa402"
      />
      <path
        id="Path_3853"
        data-name="Path 3853"
        d="M213.349,239.9l-2.124,1.117a.268.268,0,0,1-.4-.286l.406-2.364a.277.277,0,0,0-.083-.24l-1.718-1.681a.268.268,0,0,1,.148-.462l2.383-.351a.259.259,0,0,0,.2-.148l1.062-2.161a.277.277,0,0,1,.489,0l1.062,2.161a.277.277,0,0,0,.212.148l2.373.351a.277.277,0,0,1,.157.462L215.8,238.13a.249.249,0,0,0-.074.24l.406,2.364a.268.268,0,0,1-.4.286l-2.087-1.117A.3.3,0,0,0,213.349,239.9Z"
        transform="translate(-59.455 -97.969)"
        fill="#ffa402"
      />
      <path
        id="Path_3854"
        data-name="Path 3854"
        d="M226.179,239.9l-2.124,1.117a.268.268,0,0,1-.4-.286l.406-2.364a.277.277,0,0,0-.083-.24l-1.718-1.681a.268.268,0,0,1,.148-.462l2.383-.351a.259.259,0,0,0,.2-.148l1.062-2.161a.277.277,0,0,1,.489,0l1.071,2.161a.249.249,0,0,0,.2.148l2.373.351a.268.268,0,0,1,.157.462l-1.727,1.681a.249.249,0,0,0-.074.24l.406,2.364a.268.268,0,0,1-.4.286l-2.124-1.117A.314.314,0,0,0,226.179,239.9Z"
        transform="translate(-60.437 -97.969)"
        fill="#ffa402"
      />
      <path
        id="Path_3855"
        data-name="Path 3855"
        d="M239.008,239.9l-2.124,1.117a.268.268,0,0,1-.4-.286l.406-2.364a.259.259,0,0,0-.083-.24l-1.718-1.681a.268.268,0,0,1,.148-.462l2.383-.351a.249.249,0,0,0,.2-.148l1.062-2.161a.277.277,0,0,1,.489,0l1.071,2.161a.249.249,0,0,0,.2.148l2.373.351a.268.268,0,0,1,.157.462l-1.718,1.681a.277.277,0,0,0-.074.24l.406,2.364a.268.268,0,0,1-.4.286l-2.124-1.117A.314.314,0,0,0,239.008,239.9Z"
        transform="translate(-61.418 -97.969)"
        fill="#c2d4d9"
      />
      <line
        id="Line_140"
        data-name="Line 140"
        x2="40.873"
        transform="translate(122.477 95.003)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4.22"
      />
      <line
        id="Line_141"
        data-name="Line 141"
        x2="52.232"
        transform="translate(122.477 118.681)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4.22"
      />
      <line
        id="Line_142"
        data-name="Line 142"
        x2="17.842"
        transform="translate(122.477 106.352)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4.22"
      />
      <line
        id="Line_143"
        data-name="Line 143"
        x2="36.339"
        transform="translate(150.052 106.352)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4.22"
      />
      <line
        id="Line_144"
        data-name="Line 144"
        x2="25.063"
        transform="translate(217.937 79.507)"
        fill="none"
        stroke="#ffdeb3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4.22"
      />
      <line
        id="Line_145"
        data-name="Line 145"
        x2="44.771"
        transform="translate(131.564 67.344)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.05"
      />
      <line
        id="Line_146"
        data-name="Line 146"
        x2="16.3"
        transform="translate(192.144 67.344)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.05"
      />
      <line
        id="Line_147"
        data-name="Line 147"
        x2="50.607"
        transform="translate(187.037 157.126)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.05"
      />
      <line
        id="Line_148"
        data-name="Line 148"
        y2="10.712"
        transform="translate(261.655 96.296)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.05"
      />
      <line
        id="Line_149"
        data-name="Line 149"
        y2="31.463"
        transform="translate(103.342 109.28)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.05"
      />
      <rect
        id="Rectangle_1914"
        data-name="Rectangle 1914"
        width="119.822"
        height="67.867"
        rx="9.07"
        transform="translate(122.744 170.553)"
        fill="#bfd9ff"
      />
      <rect
        id="Rectangle_1915"
        data-name="Rectangle 1915"
        width="136.574"
        height="77.36"
        rx="10.34"
        transform="translate(114.368 165.806)"
        fill="#f6b333"
      />
      <path
        id="Path_3856"
        data-name="Path 3856"
        d="M180,359v22.45a8.376,8.376,0,0,0,8.376,8.376H291.345a8.376,8.376,0,0,0,8.376-8.376V359Z"
        transform="translate(-57.209 -107.596)"
        fill="#f6b333"
      />
      <path
        id="Path_3857"
        data-name="Path 3857"
        d="M305.218,149.5v-22.45a8.367,8.367,0,0,0-8.367-8.367H183.466a8.376,8.376,0,0,0-8.376,8.367V149.5Z"
        transform="translate(-56.834 -89.208)"
        fill="#f6b333"
      />
      <circle
        id="Ellipse_130"
        data-name="Ellipse 130"
        cx="21.942"
        cy="21.942"
        r="21.942"
        transform="translate(196.586 182.651)"
        fill="#fff"
      />
      <g
        id="Group_6967"
        data-name="Group 6967"
        transform="translate(196.586 182.651)"
        clip-path="url(#clip-path-2)"
      >
        <circle
          id="Ellipse_131"
          data-name="Ellipse 131"
          cx="10.454"
          cy="10.454"
          r="10.454"
          transform="translate(7.331 20.369) rotate(-45)"
          fill="#f6b333"
        />
        <path
          id="Path_3858"
          data-name="Path 3858"
          d="M299.9,334.129a17.712,17.712,0,0,0-35.388,0Z"
          transform="translate(-260.262 -287.05)"
          fill="#2a5798"
        />
        <path
          id="Path_3859"
          data-name="Path 3859"
          d="M288.938,319.685a5.744,5.744,0,1,1-5.744-5.735A5.744,5.744,0,0,1,288.938,319.685Z"
          transform="translate(-261.252 -286.799)"
          fill="#b78851"
        />
        <path
          id="Path_3860"
          data-name="Path 3860"
          d="M296.151,309.116a2.346,2.346,0,1,1-2.336-2.336A2.345,2.345,0,0,1,296.151,309.116Z"
          transform="translate(-262.324 -286.251)"
          fill="#ffdeb3"
        />
        <path
          id="Path_3861"
          data-name="Path 3861"
          d="M275,309.116a2.346,2.346,0,1,1-2.336-2.336A2.345,2.345,0,0,1,275,309.116Z"
          transform="translate(-260.706 -286.251)"
          fill="#ffdeb3"
        />
        <circle
          id="Ellipse_132"
          data-name="Ellipse 132"
          cx="9.253"
          cy="9.253"
          r="9.253"
          transform="translate(10.753 16.002) rotate(-13.34)"
          fill="#ffdeb3"
        />
        <path
          id="Path_3862"
          data-name="Path 3862"
          d="M292.94,305.172c-1.034,3.048-5.282,4.35-9.484,2.918s-6.769-5.051-5.735-8.09,5.282-4.35,9.484-2.918S293.974,302.133,292.94,305.172Z"
          transform="translate(-261.255 -285.465)"
          fill="#f6b333"
        />
      </g>
      <path
        id="Path_3863"
        data-name="Path 3863"
        d="M239.58,340.648H191.263a7.683,7.683,0,0,1-7.683-7.683h0a7.683,7.683,0,0,1,7.683-7.674H239.58a7.683,7.683,0,0,1,7.683,7.674h0A7.683,7.683,0,0,1,239.58,340.648Z"
        transform="translate(-57.483 -105.016)"
        fill="#ffdeb3"
      />
      <path
        id="Path_3864"
        data-name="Path 3864"
        d="M195.633,335.3l-1.847.924a.24.24,0,0,1-.342-.249l.351-2.041a.212.212,0,0,0-.065-.2l-1.487-1.45a.231.231,0,0,1,.139-.4l2.041-.3a.277.277,0,0,0,.185-.129l.923-1.847a.231.231,0,0,1,.416,0l.923,1.847a.24.24,0,0,0,.175.129l2.041.3a.231.231,0,0,1,.138.4l-1.487,1.45a.212.212,0,0,0-.065.2l.351,2.041a.24.24,0,0,1-.342.249l-1.847-.924A.222.222,0,0,0,195.633,335.3Z"
        transform="translate(-58.141 -105.337)"
        fill="#fff"
      />
      <path
        id="Path_3865"
        data-name="Path 3865"
        d="M206.713,335.3l-1.847.923a.24.24,0,0,1-.342-.249l.351-2.041a.24.24,0,0,0-.065-.2l-1.487-1.45a.231.231,0,0,1,.129-.4l2.05-.3a.258.258,0,0,0,.175-.129l.923-1.847a.24.24,0,0,1,.425,0l.923,1.847a.277.277,0,0,0,.176.129l2.05.3a.231.231,0,0,1,.129.4l-1.478,1.45a.249.249,0,0,0-.074.2l.351,2.041a.231.231,0,0,1-.342.249l-1.847-.923A.231.231,0,0,0,206.713,335.3Z"
        transform="translate(-58.989 -105.337)"
        fill="#fff"
      />
      <path
        id="Path_3866"
        data-name="Path 3866"
        d="M217.713,335.3l-1.847.923a.231.231,0,0,1-.342-.249l.351-2.041a.249.249,0,0,0-.074-.2l-1.478-1.45a.231.231,0,0,1,.129-.4l2.05-.3a.277.277,0,0,0,.175-.129l.923-1.847a.24.24,0,0,1,.425,0l.924,1.847a.277.277,0,0,0,.175.129l2.05.3a.231.231,0,0,1,.129.4l-1.487,1.45a.24.24,0,0,0-.065.2l.351,2.041a.231.231,0,0,1-.342.249l-1.847-.923A.231.231,0,0,0,217.713,335.3Z"
        transform="translate(-59.83 -105.337)"
        fill="#fff"
      />
      <path
        id="Path_3867"
        data-name="Path 3867"
        d="M228.774,335.3l-1.847.924a.24.24,0,0,1-.342-.249l.351-2.041a.212.212,0,0,0-.065-.2l-1.478-1.45a.231.231,0,0,1,.129-.4l2.041-.3a.277.277,0,0,0,.185-.129l.923-1.847a.231.231,0,0,1,.416,0l.923,1.847a.24.24,0,0,0,.175.129l2.05.3a.231.231,0,0,1,.129.4l-1.487,1.45a.212.212,0,0,0-.065.2l.351,2.041a.24.24,0,0,1-.342.249l-1.847-.924a.222.222,0,0,0-.2,0Z"
        transform="translate(-60.677 -105.337)"
        fill="#fff"
      />
      <path
        id="Path_3868"
        data-name="Path 3868"
        d="M239.813,335.3l-1.847.923a.24.24,0,0,1-.342-.249l.351-2.041a.24.24,0,0,0-.065-.2l-1.487-1.45a.231.231,0,0,1,.129-.4l2.05-.3a.258.258,0,0,0,.175-.129l.923-1.847a.24.24,0,0,1,.425,0l.923,1.847a.277.277,0,0,0,.176.129l2.05.3a.231.231,0,0,1,.129.4l-1.478,1.45a.212.212,0,0,0-.065.2l.342,2.041a.231.231,0,0,1-.342.249l-1.847-.923A.231.231,0,0,0,239.813,335.3Z"
        transform="translate(-61.521 -105.337)"
        fill="#fff"
      />
      <line
        id="Line_150"
        data-name="Line 150"
        x2="35.194"
        transform="translate(130.843 189.549)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3.63"
      />
      <line
        id="Line_151"
        data-name="Line 151"
        x2="44.974"
        transform="translate(130.843 209.94)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3.63"
      />
      <line
        id="Line_152"
        data-name="Line 152"
        x2="15.367"
        transform="translate(130.843 199.32)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3.63"
      />
      <line
        id="Line_153"
        data-name="Line 153"
        x2="31.278"
        transform="translate(154.586 199.32)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3.63"
      />
      <line
        id="Line_154"
        data-name="Line 154"
        x2="21.573"
        transform="translate(213.034 176.214)"
        fill="none"
        stroke="#ffdeb3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4.22"
      />
      <line
        id="Line_155"
        data-name="Line 155"
        y1="8.764"
        transform="translate(91.66 101.162)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.05"
      />
      <line
        id="Line_156"
        data-name="Line 156"
        y1="23.844"
        transform="translate(91.66 71.481)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.05"
      />
      <path
        id="Path_3869"
        data-name="Path 3869"
        d="M148.991,157.27a2.77,2.77,0,1,1-2.77-2.77A2.77,2.77,0,0,1,148.991,157.27Z"
        transform="translate(-54.413 -91.949)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.05"
      />
      <rect
        id="Rectangle_1916"
        data-name="Rectangle 1916"
        width="10.38"
        height="10.38"
        transform="translate(245.106 220.227)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.05"
      />
      <rect
        id="Rectangle_1917"
        data-name="Rectangle 1917"
        width="6.492"
        height="6.492"
        transform="translate(253.538 242.28)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.05"
      />
      <line
        id="Line_157"
        data-name="Line 157"
        x2="84.674"
        transform="translate(122.8 251.367)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.05"
      />
      <path
        id="Path_3870"
        data-name="Path 3870"
        d="M404.14,208.1s4.7,2.595,9.567-3.888c-.166-1.625-7.3-4.377-7.3-4.377Z"
        transform="translate(-74.359 -95.417)"
        fill="#ff7759"
      />
      <path
        id="Path_3871"
        data-name="Path 3871"
        d="M407.942,190.86l5.319,14.73-5.5,3.463L402.17,193.5Z"
        transform="translate(-74.209 -94.731)"
        fill="#2b4177"
      />
      <path
        id="Path_3872"
        data-name="Path 3872"
        d="M425.812,178.029l-4.553,4.821-4.959-7.877,6.307-2.022Z"
        transform="translate(-75.29 -93.36)"
        fill="#f55b51"
      />
      <path
        id="Path_3873"
        data-name="Path 3873"
        d="M417.208,178.4l-1.108-1.967-.194.12-5.449-7.748-16.826,21.222-3,1.893.249.406,2.4,3.8.249.406,3-1.893,26.412-6.012-4.636-8.265.194-.12Z"
        transform="translate(-73.326 -93.043)"
        fill="#f55b51"
      />
      <path
        id="Path_3874"
        data-name="Path 3874"
        d="M426.835,190.7h0a2.142,2.142,0,0,1-2.955-.665l-13.908-22.071a2.143,2.143,0,0,1,.665-2.955h0a2.152,2.152,0,0,1,2.955.674l13.926,22.071a2.133,2.133,0,0,1-.683,2.946Z"
        transform="translate(-74.78 -92.728)"
        fill="#2b4177"
      />
      <path
        id="Path_3875"
        data-name="Path 3875"
        d="M397.259,205.319a13.7,13.7,0,0,0-.923,2.835c-.1.923-2.549,23.54-2.549,23.54l-15.7-9.937-4.617,13.612s21.009,7.822,26.781,8.459a3.888,3.888,0,0,0,4.442-1.847c.351-.286-1.45-34.742-1.45-34.742S402.126,202.585,397.259,205.319Z"
        transform="translate(-72.013 -95.771)"
        fill="#ffbe9d"
      />
      <path
        id="Path_3876"
        data-name="Path 3876"
        d="M372.277,218.09l21.083,13.954-4.534,16.54-18.47-13.945S367.087,225.875,372.277,218.09Z"
        transform="translate(-71.697 -96.814)"
        fill="#4aa890"
      />
      <ellipse
        id="Ellipse_134"
        data-name="Ellipse 134"
        cx="50.718"
        cy="4.257"
        rx="50.718"
        ry="4.257"
        transform="translate(256.89 310.923)"
        fill="#fff4e9"
      />
      <path
        id="Path_3877"
        data-name="Path 3877"
        d="M353.275,421.687s5.679,5.938,8,7.222c-.517,1.034-8.773,1.034-11.867-.508a16.6,16.6,0,0,1-5.421-5.162l.259,3.869h-1.552a53.408,53.408,0,0,1-1.551-6.714c0-1.293,1.551-3.094,1.551-3.094Z"
        transform="translate(-69.539 -112.056)"
        fill="#2b4177"
      />
      <path
        id="Path_3878"
        data-name="Path 3878"
        d="M355.32,338.705l-5.679,69.686-6.7-.517s-7.748-51.106-4.617-68.652S355.32,338.705,355.32,338.705Z"
        transform="translate(-69.266 -105.475)"
        fill="#ff8d68"
      />
      <path
        id="Path_3879"
        data-name="Path 3879"
        d="M350.03,414.74s2.069,5.421,4.9,8.007-4.387,2.577-7.48,0-3.352-4.137-4.387-4.617.259-3.869.259-3.869Z"
        transform="translate(-69.656 -111.824)"
        fill="#ff8d68"
      />
      <path
        id="Path_3880"
        data-name="Path 3880"
        d="M403.74,420.57s6.594,4.894,9.1,5.772c-.332,1.108-8.468,2.5-11.784,1.5a16.652,16.652,0,0,1-6.215-4.174l.924,3.777-1.524.259a53.991,53.991,0,0,1-2.66-6.354c-.222-1.274,1.007-3.315,1.007-3.315Z"
        transform="translate(-73.396 -112.112)"
        fill="#2b4177"
      />
      <path
        id="Path_3881"
        data-name="Path 3881"
        d="M391.9,338.352,398.046,408l-6.7.619S375.1,359.556,375.19,341.732,391.9,338.352,391.9,338.352Z"
        transform="translate(-72.144 -105.593)"
        fill="#ff8d68"
      />
      <path
        id="Path_3882"
        data-name="Path 3882"
        d="M399.365,414.23s2.946,5,6.178,7.065-3.888,3.278-7.388,1.256-4-3.5-5.107-3.842-.4-3.86-.4-3.86Z"
        transform="translate(-73.463 -111.822)"
        fill="#ff8d68"
      />
      <path
        id="Path_3883"
        data-name="Path 3883"
        d="M381.4,274.333l.332,8.007a90.124,90.124,0,0,1,6.815,23.013c1.616,12.005,2.263,36.016,2.263,36.016l3.574,43.469s-7.139,2.6-12.975.97c0,0-7.139-24.325-9.087-32.765s-1.625-24.6-1.625-24.6l-5.837-22.709s-8.431,33.089-8.755,37.623-4.22,43.155-4.22,43.155a24.251,24.251,0,0,1-12.329-.323s-3.888-35.037-3.565-54.486c.646-14.6,1.616-22.062,1.616-22.062s-2.918-7.462.979-21.739c3.565-8.108,5.836-10.057,5.836-10.057l2.133-4.433Z"
        transform="translate(-69.143 -101.047)"
        fill="#2b4177"
      />
      <path
        id="Path_3884"
        data-name="Path 3884"
        d="M353.9,214.23s-11.793,6.788-14.508,11.082S328.55,252.6,328.55,252.6s9.106,3.3,17.038,3.3c0,0-.776,7.388-1.551,9.678s1.939,3.288,1.939,3.288,19.005,5.181,33.116,2.106c0,0,1.736-.388,1.736-1.164s-.194-2.715-.194-2.715,1.358-13.16,1.745-15.487,4.617-8.644,4.257-11.156-6.972-14.2-6.972-14.2-4.451-5.227-6.381-6.575S365.9,216.5,365.9,216.5Z"
        transform="translate(-68.576 -96.519)"
        fill="#4aa890"
      />
      <path
        id="Path_3885"
        data-name="Path 3885"
        d="M369.365,208.887c0,.3-1.117,6.871,2.521,11.525s-10.712,4.544-14.046-.3c-3.029-4.35-2.77-5.051-2.77-5.051s2.429-7.887,1.718-13.04C357.027,197.361,369.568,200.187,369.365,208.887Z"
        transform="translate(-70.604 -95.414)"
        fill="#ffbe9d"
      />
      <line
        id="Line_158"
        data-name="Line 158"
        x1="5.938"
        y2="21.166"
        transform="translate(278.573 137.215)"
        fill="none"
        stroke="#318a7c"
        stroke-miterlimit="10"
        stroke-width="0.79"
      />
      <path
        id="Path_3886"
        data-name="Path 3886"
        d="M358.619,236.68a13.991,13.991,0,0,1-5.809,6.769"
        transform="translate(-70.432 -98.237)"
        fill="none"
        stroke="#318a7c"
        stroke-miterlimit="10"
        stroke-width="0.79"
      />
      <path
        id="Path_3887"
        data-name="Path 3887"
        d="M351.183,230.749a7.139,7.139,0,0,0-6.963-5.809"
        transform="translate(-69.775 -97.338)"
        fill="none"
        stroke="#318a7c"
        stroke-miterlimit="10"
        stroke-width="0.79"
      />
      <path
        id="Path_3888"
        data-name="Path 3888"
        d="M384.43,228.71s6.326,10.389,6.261,12.846-4.128,9.42-4.128,9.42l-5.033,13.16"
        transform="translate(-72.629 -97.627)"
        fill="none"
        stroke="#318a7c"
        stroke-miterlimit="10"
        stroke-width="0.79"
      />
      <line
        id="Line_159"
        data-name="Line 159"
        x1="6.778"
        y1="7.748"
        transform="translate(283.154 166.508)"
        fill="none"
        stroke="#318a7c"
        stroke-miterlimit="10"
        stroke-width="0.79"
      />
      <path
        id="Path_3889"
        data-name="Path 3889"
        d="M359,293.569s3.223,3.546,4.193,4.322,7.554,1.358,7.554,1.358,2.9,4.839,3.694,4.617.582-.776.582-.776.194-8.708-.388-9.678-10.066-3.694-10.066-3.694l-1.164-1.358L359,293.569"
        transform="translate(-70.906 -102.191)"
        fill="#ffbe9d"
      />
      <path
        id="Path_3890"
        data-name="Path 3890"
        d="M331.359,256.73c-.259.776-2.327,6.843-3.352,9.937s22.164,19.393,25.8,22.164l2.817,2.318,4.387-5.162L340.65,265.632l2.974-6.7Z"
        transform="translate(-68.532 -99.771)"
        fill="#ffbe9d"
      />
      <line
        id="Line_160"
        data-name="Line 160"
        x1="1.228"
        y1="5.421"
        transform="translate(302.316 196.318)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <line
        id="Line_161"
        data-name="Line 161"
        x1="1.422"
        y1="3.094"
        transform="translate(302.833 193.742)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3891"
        data-name="Path 3891"
        d="M375.619,293.9l.517,10.454h-1.681l-2.706-4.645"
        transform="translate(-71.881 -102.615)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3892"
        data-name="Path 3892"
        d="M348.025,184.135s.573-4.894-4.073-5.005-8.081,7.942-4.553,10.916c2.77,2.613,4.34,1.164,4.34,1.164s-1.219,4.026-.259,5.661c.6.554.656-3.583,2.429-5.541S348.025,184.135,348.025,184.135Z"
        transform="translate(-69.295 -93.833)"
        fill="#263238"
      />
      <path
        id="Path_3893"
        data-name="Path 3893"
        d="M363.743,179.291s4.313.277,7.822,6.16,4.479,19.587,3.223,21.462-6.1,2.152-13.04,1.219c-7.332-.988-11.026-7.739-13.15-12.245C344.534,187.3,350.722,176.428,363.743,179.291Z"
        transform="translate(-70.015 -93.81)"
        fill="#ffbe9d"
      />
      <path
        id="Path_3894"
        data-name="Path 3894"
        d="M369.3,210.652a12.2,12.2,0,0,1-8.4-4.2"
        transform="translate(-71.051 -95.924)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.75"
      />
      <path
        id="Path_3895"
        data-name="Path 3895"
        d="M363.317,202.317a2.383,2.383,0,1,0,1.9-2.77A2.383,2.383,0,0,0,363.317,202.317Z"
        transform="translate(-71.233 -95.392)"
        fill="#aa6550"
      />
      <path
        id="Path_3896"
        data-name="Path 3896"
        d="M367.619,198.133a.582.582,0,1,0,.462-.674A.582.582,0,0,0,367.619,198.133Z"
        transform="translate(-71.564 -95.235)"
        fill="#024470"
      />
      <path
        id="Path_3897"
        data-name="Path 3897"
        d="M374.279,196.883a.582.582,0,0,0,1.145-.212.572.572,0,0,0-.674-.462.582.582,0,0,0-.471.674Z"
        transform="translate(-72.074 -95.139)"
        fill="#024470"
      />
      <path
        id="Path_3898"
        data-name="Path 3898"
        d="M352.223,179.741s13.021-5.412,21.73,3.2c5.07,6.806-1.487,9.678-2.891,10.112s.083-2.161.083-2.161a20.408,20.408,0,0,1-8.478,4.063c-4.941.924-.49-1.727-.49-1.727a37.275,37.275,0,0,1-4.442,1.847c-.923.185,1.551,5.652,1.311,7.019-.4,1.394-4.1-5.172-4.1-5.172l-.212,4.165.646,4.331s-6.464-3.417-8.653-7.453S343.256,184.728,352.223,179.741Z"
        transform="translate(-69.845 -93.751)"
        fill="#263238"
      />
      <path
        id="Path_3899"
        data-name="Path 3899"
        d="M356.778,199.3s-2-2.235-3.352-1.025,2.207,6.464,4.313,6.187S358.015,200.57,356.778,199.3Z"
        transform="translate(-70.456 -95.27)"
        fill="#aa6550"
      />
      <path
        id="Path_3900"
        data-name="Path 3900"
        d="M355.934,212.8s4.534,8.755,13.3,8.755c1.459-1.616.157-5.19.157-5.19s5.033,3.408,5.033,7.628c0,0,4.377,4.22,6.16,7.3-.323,1.136-3.888,1.459-3.888,1.459s3.084,7.462,2.595,13.954c0,0-2.106,1.293-6.815.813,0,0,1.57-22.745-2.918-21.24-.49.157-5.679,0-11.359-2.918s-5.347-8.117-5.347-8.117.813-4.867,3.408-4.867Z"
        transform="translate(-70.435 -96.223)"
        fill="#2b4177"
      />
      <path
        id="Path_3901"
        data-name="Path 3901"
        d="M372.472,199.61s2.429,1.579,2.189,2.77-1.708.609-1.708.609S372.1,200.22,372.472,199.61Z"
        transform="translate(-71.929 -95.4)"
        fill="#aa6550"
      />
      <path
        id="Path_3902"
        data-name="Path 3902"
        d="M375.248,204.22a16.7,16.7,0,0,1-4.377,1.09c-1.219.249.97,2.189,2.918,1.459A2.133,2.133,0,0,0,375.248,204.22Z"
        transform="translate(-71.787 -95.753)"
        fill="#fff"
      />
      <path
        id="Path_3903"
        data-name="Path 3903"
        d="M410,194.7s4.377-.73,5.356-.24-.249,9-.249,9l-3.888,1.7Z"
        transform="translate(-74.808 -94.993)"
        fill="#ffbe9d"
      />
      <path
        id="Path_3904"
        data-name="Path 3904"
        d="M398.45,206.494a20.9,20.9,0,0,1,1.912-4.516,37.022,37.022,0,0,0,2.429-5.661s6.27-2.429,7.277-3.694a4.543,4.543,0,0,1,1.616-1.413,3.2,3.2,0,0,1-.6,3.842c-1.847,1.616-3.435,2.835-3.435,2.835a31.874,31.874,0,0,1-.406,6.871,5.947,5.947,0,0,1-2.429,3.306Z"
        transform="translate(-73.924 -94.757)"
        fill="#ffbe9d"
      />
      <path
        id="Path_3905"
        data-name="Path 3905"
        d="M410.677,196.44l-2.429,1.893-1.828-.471"
        transform="translate(-74.534 -95.158)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3906"
        data-name="Path 3906"
        d="M410.15,197.1l1.1,8.274,3.888-1.7"
        transform="translate(-74.819 -95.208)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <line
        id="Line_162"
        data-name="Line 162"
        y1="2.438"
        x2="3.528"
        transform="translate(336.06 106.149)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <line
        id="Line_163"
        data-name="Line 163"
        y1="2.309"
        x2="3.768"
        transform="translate(335.7 103.6)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <line
        id="Line_164"
        data-name="Line 164"
        y1="1.949"
        x2="3.158"
        transform="translate(335.7 101.042)"
        fill="none"
        stroke="#aa6550"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3907"
        data-name="Path 3907"
        d="M362.68,283.08a42.167,42.167,0,0,0,17.2.646"
        transform="translate(-71.187 -101.787)"
        fill="none"
        stroke="#2b3257"
        stroke-miterlimit="10"
        stroke-width="0.79"
      />
      <path
        id="Path_3908"
        data-name="Path 3908"
        d="M346,187.864s1.219-8.311,11.673-9.734"
        transform="translate(-69.911 -93.757)"
        fill="none"
        stroke="#2a383d"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3909"
        data-name="Path 3909"
        d="M350,190.881s.97-4.137,6.566-8.311"
        transform="translate(-70.217 -94.096)"
        fill="none"
        stroke="#2a383d"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3910"
        data-name="Path 3910"
        d="M346.248,185.528s0-1.939-3.408-2.918"
        transform="translate(-69.669 -94.099)"
        fill="none"
        stroke="#2a383d"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3911"
        data-name="Path 3911"
        d="M345.721,192.36s-.97,5.6,2.927,9"
        transform="translate(-69.881 -94.845)"
        fill="none"
        stroke="#2a383d"
        stroke-miterlimit="10"
        stroke-width="0.74"
      />
      <path
        id="Path_3912"
        data-name="Path 3912"
        d="M346.691,141.591a3.251,3.251,0,1,1-3.251-3.241,3.251,3.251,0,0,1,3.251,3.241Z"
        transform="translate(-69.466 -90.713)"
        fill="#d38e2a"
      />
      <path
        id="Path_3913"
        data-name="Path 3913"
        d="M413.463,277.891a3.241,3.241,0,1,1-3.241-3.241A3.242,3.242,0,0,1,413.463,277.891Z"
        transform="translate(-74.577 -101.142)"
        fill="#ffdeb3"
      />
      <path
        id="Path_3914"
        data-name="Path 3914"
        d="M167,372.391a3.241,3.241,0,1,1-3.241-3.241A3.241,3.241,0,0,1,167,372.391Z"
        transform="translate(-55.719 -108.372)"
        fill="#f6b333"
      />
      <path
        id="Path_3915"
        data-name="Path 3915"
        d="M172.092,386.266a1.136,1.136,0,1,1-1.127-1.136,1.136,1.136,0,0,1,1.127,1.136Z"
        transform="translate(-56.431 -109.595)"
        fill="#f6b333"
      />
      <path
        id="Path_3916"
        data-name="Path 3916"
        d="M339.541,166.412a5.541,5.541,0,1,1,5.541-5.541A5.541,5.541,0,0,1,339.541,166.412Z"
        transform="translate(-68.993 -92.012)"
        fill="#d38e2a"
      />
      <line
        id="Line_165"
        data-name="Line 165"
        transform="translate(167.57 18.436)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3.16"
      />
      <line
        id="Line_166"
        data-name="Line 166"
        x2="27.372"
        transform="translate(173.656 18.436)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3.16"
        stroke-dasharray="0 6.59"
      />
      <line
        id="Line_167"
        data-name="Line 167"
        transform="translate(204.067 18.436)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3.16"
      />
      <line
        id="Line_168"
        data-name="Line 168"
        x2="28.222"
        transform="translate(224.993 268.073)"
        fill="none"
        stroke="#d38e2a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3.16"
        stroke-dasharray="0 6.32"
      />
      <circle
        id="Ellipse_135"
        data-name="Ellipse 135"
        cx="15.09"
        cy="15.09"
        r="15.09"
        transform="translate(120.437 31.581) rotate(-45)"
        fill="#2a5798"
      />
      <path
        id="Path_3917"
        data-name="Path 3917"
        d="M194.24,121.677l4.377,4.377,8.515-8.515"
        transform="translate(-58.299 -89.121)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4.22"
      />
    </svg>
  );
};
const LocateIcon = () => {
  return (
    <svg
      className="locateicon"
      xmlns="http://www.w3.org/2000/svg"
      width="19.513"
      height="25.047"
      viewBox="0 0 19.513 23.047"
    >
      <defs></defs>
      <path
        class="a"
        d="M41.73,24a2.467,2.467,0,0,1-1.187-.684c-1.415-1.276-2.862-2.517-4.153-3.923a17.5,17.5,0,0,1-3.277-4.751,9.312,9.312,0,0,1,1.052-9.786A9.094,9.094,0,0,1,40,1.149a9.481,9.481,0,0,1,9.291,3.144A9.47,9.47,0,0,1,50.81,14.619a17.931,17.931,0,0,1-3.259,4.736c-1.382,1.507-2.937,2.83-4.454,4.193A2.151,2.151,0,0,1,42.18,24Z"
        transform="translate(-32.191 -0.948)"
      />
      <path
        class="b"
        d="M64.838,24.72a8.284,8.284,0,0,1,7.047,4.037A7.9,7.9,0,0,1,73.011,34.4,9.273,9.273,0,0,1,71.9,37.414a20.951,20.951,0,0,1-3.9,4.824c-.957.921-1.963,1.787-2.95,2.675-.235.212-.366.228-.569.046a56.658,56.658,0,0,1-4.538-4.3A16.538,16.538,0,0,1,57.2,36.678a7.976,7.976,0,0,1,.353-7.859A8.179,8.179,0,0,1,63.1,24.893a6.78,6.78,0,0,1,.755-.116C64.147,24.749,64.441,24.742,64.838,24.72Z"
        transform="translate(-54.97 -23.382)"
      />
      <path
        class="a"
        d="M138.059,95.553a4.292,4.292,0,1,1-4.277-4.3A4.311,4.311,0,0,1,138.059,95.553Z"
        transform="translate(-124 -86.168)"
      />
      <path
        class="b"
        d="M159.192,118.247a2.946,2.946,0,1,1-2.945-2.947,2.963,2.963,0,0,1,2.945,2.947Z"
        transform="translate(-146.484 -108.864)"
      />
    </svg>
  );
};
const RecentIcon = () => {
  return (
    <svg
      className="recenticon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <defs></defs>
      <g transform="translate(-285 -285)">
        <path
          class="a"
          d="M285,287.344c.036-.013.034-.05.046-.076a.62.62,0,0,1,.6-.389q1.2,0,2.406,0a.618.618,0,0,1,.652.632q.012,1.226,0,2.453a.623.623,0,1,1-1.246-.023c0-.249,0-.5,0-.788-.054.074-.088.116-.117.161a6.749,6.749,0,0,0,10.062,8.788,6.289,6.289,0,0,0,2.263-4.1,6.584,6.584,0,0,0-2.206-6.057,6.718,6.718,0,0,0-4.4-1.693.626.626,0,0,1-.211-1.232.11.11,0,0,0,.025-.018h.563a.041.041,0,0,0,.063,0h.125a8.007,8.007,0,0,1,6.542,4.348,7.742,7.742,0,0,1,.8,2.549c.019.148.008.3.036.446v.094c-.019.017-.015.04-.016.063s0,.045.016.063v.531a.32.32,0,0,0,0,.219v.156a.04.04,0,0,0,0,.063v.125a8.492,8.492,0,0,1-.141,1.061,8.049,8.049,0,0,1-1.671,3.415,7.987,7.987,0,0,1-5.055,2.827c-.158.021-.32.008-.477.041h-.094a.041.041,0,0,0-.062,0h-.125a.169.169,0,0,0-.156,0h-.437a.239.239,0,0,0-.188,0H292.5a.041.041,0,0,0-.062,0h-.125a9.606,9.606,0,0,1-1-.135,8.093,8.093,0,0,1-5.488-4.227,7.764,7.764,0,0,1-.789-2.536c-.019-.148-.008-.3-.036-.446v-.125c.019-.017.015-.04.016-.063s0-.045-.016-.062v-.594a.239.239,0,0,0,0-.187v-.094a.071.071,0,0,0,0-.094v-.125c.043-.307.052-.618.116-.924a8.1,8.1,0,0,1,1.331-3.054.4.4,0,0,0,.027-.038c.019-.034.068-.062.039-.108s-.067-.021-.1-.021c-.26,0-.52,0-.781,0a.688.688,0,0,1-.444-.165.552.552,0,0,1-.187-.347Z"
          transform="translate(0 0)"
        />
        <path
          class="a"
          d="M795.851,544.214a.176.176,0,0,1,0-.214Z"
          transform="translate(-494.851 -250.904)"
        />
        <path
          class="a"
          d="M285,529a.137.137,0,0,1,0,.183Z"
          transform="translate(0 -236.373)"
        />
        <path
          class="a"
          d="M528,795.9a.139.139,0,0,1,.183,0Z"
          transform="translate(-235.404 -494.9)"
        />
        <path
          class="a"
          d="M548,795.949a.1.1,0,0,1,.153,0Z"
          transform="translate(-254.779 -494.949)"
        />
        <path
          class="a"
          d="M285,523c.046.031.038.061,0,.092Z"
          transform="translate(0 -230.562)"
        />
        <path
          class="a"
          d="M555.061,285c-.02.038-.041.033-.061,0Z"
          transform="translate(-261.562)"
        />
        <path
          class="a"
          d="M796.091,523.06c0-.025-.007-.05.026-.06v.061C796.108,523.075,796.1,523.075,796.091,523.06Z"
          transform="translate(-495.117 -230.562)"
        />
        <path
          class="a"
          d="M796.089,524.956h.026v.061C796.087,525.006,796.085,524.982,796.089,524.956Z"
          transform="translate(-495.115 -232.457)"
        />
        <path
          class="a"
          d="M285,554a.051.051,0,0,1,.026.062c-.009.013-.018.012-.026,0Z"
          transform="translate(0 -260.593)"
        />
        <path
          class="a"
          d="M285,556h.026c0,.025,0,.05-.026.06Z"
          transform="translate(0 -262.53)"
        />
        <path
          class="a"
          d="M796.127,556.061c-.039-.02-.034-.041,0-.061Z"
          transform="translate(-495.127 -262.53)"
        />
        <path
          class="a"
          d="M523,796.105c.02-.04.041-.035.061,0Z"
          transform="translate(-230.562 -495.105)"
        />
        <path
          class="a"
          d="M557,796.105c.02-.035.041-.04.061,0Z"
          transform="translate(-263.499 -495.105)"
        />
        <path
          class="a"
          d="M520.986,366.73c0-.8,0-1.6,0-2.395a.6.6,0,0,1,.412-.581.61.61,0,0,1,.673.194.675.675,0,0,1,.136.442q0,1.96,0,3.921c0,.212,0,.212.219.212q1.381,0,2.761,0a.584.584,0,0,1,.561.351.578.578,0,0,1-.069.632.572.572,0,0,1-.474.237q-1.808,0-3.615,0a.6.6,0,0,1-.6-.631C520.984,368.316,520.986,367.523,520.986,366.73Z"
          transform="translate(-228.534 -76.225)"
        />
      </g>
    </svg>
  );
};

const BellIcon = () => {
  return (
    <svg
      className="bellicon"
      xmlns="http://www.w3.org/2000/svg"
      width="14.971"
      height="14.721"
      viewBox="0 0 14.971 14.721"
    >
      <defs></defs>
      <path
        class="a"
        d="M2.745,2.146A.25.25,0,0,1,2.5,1.9V1.5a1,1,0,1,0-2,0v.4a.25.25,0,1,1-.5,0V1.5a1.5,1.5,0,1,1,2.994,0v.4A.25.25,0,0,1,2.745,2.146Z"
        transform="translate(5.988)"
      />
      <path
        class="a"
        d="M.25,1.209A.25.25,0,0,1,.069.787a7.588,7.588,0,0,1,.8-.73A.25.25,0,1,1,1.181.45a7.074,7.074,0,0,0-.751.682.25.25,0,0,1-.181.077Z"
        transform="translate(1.58 0.726)"
      />
      <path
        class="a"
        d="M.249,2.308a.25.25,0,0,1-.235-.334A7.472,7.472,0,0,1,1,.1a.25.25,0,0,1,.4.293A6.966,6.966,0,0,0,.484,2.143a.25.25,0,0,1-.235.165Z"
        transform="translate(0 2.183)"
      />
      <path
        class="a"
        d="M.249,2.789a.25.25,0,0,1-.229-.349A6.553,6.553,0,0,1,1.792.066a.25.25,0,1,1,.322.381A6.049,6.049,0,0,0,.478,2.639a.25.25,0,0,1-.228.15Z"
        transform="translate(1.094 1.649)"
      />
      <path
        class="a"
        d="M1.032,1.209a.25.25,0,0,1-.181-.077A7.074,7.074,0,0,0,.1.45.25.25,0,1,1,.409.057a7.588,7.588,0,0,1,.8.73.25.25,0,0,1-.181.422Z"
        transform="translate(12.109 0.726)"
      />
      <path
        class="a"
        d="M1.206,2.308a.25.25,0,0,1-.235-.165A6.966,6.966,0,0,0,.048.4.25.25,0,0,1,.452.1,7.472,7.472,0,0,1,1.44,1.974a.25.25,0,0,1-.235.334Z"
        transform="translate(13.516 2.183)"
      />
      <path
        class="a"
        d="M1.96,2.787a.25.25,0,0,1-.229-.15A6.049,6.049,0,0,0,.095.445.25.25,0,1,1,.416.064,6.553,6.553,0,0,1,2.188,2.437a.25.25,0,0,1-.229.349Z"
        transform="translate(11.668 1.651)"
      />
      <path
        class="b"
        d="M0,9.482V5.24a5.24,5.24,0,1,1,10.48,0V9.482"
        transform="translate(2.246 1.747)"
      />
      <path
        class="c"
        d="M.25.647A.25.25,0,0,1,.162.164a4.449,4.449,0,0,1,.5-.155A.25.25,0,1,1,.779.493a4,4,0,0,0-.44.138A.245.245,0,0,1,.25.647Z"
        transform="translate(5.738 2.62)"
      />
      <path
        class="c"
        d="M.25,3.743A.25.25,0,0,1,0,3.493,4.485,4.485,0,0,1,1.6.059.25.25,0,1,1,1.922.44,3.986,3.986,0,0,0,.5,3.493a.25.25,0,0,1-.25.25Z"
        transform="translate(2.994 3.493)"
      />
      <path
        class="d"
        d="M9.981,0h1.5a1,1,0,0,1,0,2H1A1,1,0,0,1,1,0Z"
        transform="translate(1.247 11.228)"
      />
      <path
        class="e"
        d="M0,0A1.5,1.5,0,0,0,1.5,1.5,1.5,1.5,0,0,0,2.994,0Z"
        transform="translate(5.988 13.224)"
      />
      <path
        class="a"
        d="M.749.5H.25a.25.25,0,0,1,0-.5h.5a.25.25,0,0,1,0,.5Z"
        transform="translate(10.979 9.981)"
      />
      <path
        class="a"
        d="M3.743.5H.25a.25.25,0,0,1,0-.5H3.743a.25.25,0,0,1,0,.5Z"
        transform="translate(6.238 9.981)"
      />
    </svg>
  );
};
const EditWhiteIcon = () => {
  return (
    <svg
      className="editwhiteicon"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
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
const EditWhiteIconSmall = () => {
  return (
    <svg
      className="editwhiteicon"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const experience = [
  { name: "2 Years", id: 1 },
  { name: "3 Years", id: 2 },
  { name: "4 Years", id: 3 },
  { name: "5 Years", id: 4 },
];

const InviteIconCand = () => {
  return (
    <svg
      className="inviteiconcand"
      xmlns="http://www.w3.org/2000/svg"
      width="19.747"
      height="20.767"
      viewBox="0 0 19.747 20.767"
    >
      <defs></defs>
      <g transform="translate(-389.188 -381.759)">
        <path
          class="a"
          d="M407.584,524.973H390.548a1.7,1.7,0,0,1-1.359-1.891c.026-3.353.01-6.706.01-10.059v-.263c.093.065.148.1.2.141q4,2.988,8.014,5.971a3.19,3.19,0,0,0,.966.489,2.544,2.544,0,0,0,2.347-.477q3.992-2.989,7.989-5.971c.061-.046.125-.089.217-.154v2.272q0,4.117,0,8.233a1.7,1.7,0,0,1-.423,1.21A1.822,1.822,0,0,1,407.584,524.973Z"
          transform="translate(0 -122.448)"
        />
        <path
          class="a"
          d="M434.106,412.057h13.83v.224q0,3.538,0,7.076a.364.364,0,0,1-.168.332q-2.824,2.1-5.641,4.2a1.634,1.634,0,0,1-2.173,0q-2.854-2.123-5.708-4.246a.313.313,0,0,1-.156-.278q.008-3.569,0-7.137C434.1,412.175,434.1,412.122,434.106,412.057Zm6.954,6.78c-1.06,0-2.121,0-3.181,0a.57.57,0,0,0-.469.192.469.469,0,0,0-.085.529.561.561,0,0,0,.557.33q3.161,0,6.322,0a.725.725,0,0,0,.293-.06.507.507,0,0,0,.292-.566.534.534,0,0,0-.548-.418Q442.65,418.835,441.06,418.837Zm-1.868-1.572c.459,0,.918,0,1.378,0a.52.52,0,1,0,.01-1.036q-1.368-.008-2.735,0a.52.52,0,1,0,.01,1.036C438.3,417.268,438.746,417.265,439.192,417.265Z"
          transform="translate(-41.973 -28.32)"
        />
        <path
          class="a"
          d="M662.278,478.118v-2.572l1.635,1.359Z"
          transform="translate(-255.259 -87.664)"
        />
        <path
          class="a"
          d="M519.319,382.677H516.07a2.231,2.231,0,0,1,1.6-.918C518.375,381.763,518.808,382.241,519.319,382.677Z"
          transform="translate(-118.597 0)"
        />
        <path
          class="a"
          d="M393.7,477.6l1.581-1.311v2.485Z"
          transform="translate(-4.218 -88.357)"
        />
      </g>
    </svg>
  );
};

const SaveIcon = () => {
  return (
    <svg
      className="saveeicon"
      xmlns="http://www.w3.org/2000/svg"
      width="15.969"
      height="21.291"
      viewBox="0 0 15.969 21.291"
    >
      <defs></defs>
      <g transform="translate(-4.8 -2.4)">
        <g transform="translate(4.8 2.4)">
          <path
            class="a"
            d="M0,3.327A3.327,3.327,0,0,1,3.327,0h9.315a3.327,3.327,0,0,1,3.327,3.327v17.3a.665.665,0,0,1-1.057.538L7.984,16.126,1.057,21.164A.665.665,0,0,1,0,20.626Zm3.327-2a2,2,0,0,0-2,2V19.32l6.262-4.554a.665.665,0,0,1,.782,0l6.262,4.554V3.327a2,2,0,0,0-2-2Z"
          />
        </g>
      </g>
    </svg>
  );
};

const RuppeeSymbol = () => {
  return (
    <svg
      className="rupee_symbol"
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
        class="a"
        d="M162.307,131.529H161.4a2.624,2.624,0,0,0-.49-.981h1.4a.49.49,0,1,0,0-.981h-4.757a.49.49,0,1,0,0,.981h1.373a1.717,1.717,0,0,1,1.471.981h-2.844a.49.49,0,1,0,0,.981h2.844a2.085,2.085,0,0,1-.392.687,1.643,1.643,0,0,1-1.079.539h-1.373a.46.46,0,0,0-.343.809l3.408,3.212a.588.588,0,0,0,.343.123.49.49,0,0,0,.343-.147.441.441,0,0,0,0-.662l-2.526-2.354h.147a2.6,2.6,0,0,0,1.79-.834,2.82,2.82,0,0,0,.687-1.373h.907a.49.49,0,0,0,0-.981Z"
        transform="translate(-149.928 -123.735)"
      />
    </svg>
  );
};

const ExpSymbol = () => {
  return (
    <svg
      className="exp_symbol"
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
        class="a"
        d="M2.769,1.816l-2-2h-1l1,2,1,1Z"
        transform="translate(9.231 9.184)"
      />
      <path
        class="a"
        d="M1.143.139l-1,1,4,4v-2Z"
        transform="translate(5.857 5.861)"
      />
      <path
        class="a"
        d="M3.753.153l-3,3-1,2h1l4-4Z"
        transform="translate(9.247 5.847)"
      />
      <path
        class="a"
        d="M-.35,1.816l1,1,1-1v-2Z"
        transform="translate(8.35 9.184)"
      />
      <path
        class="a"
        d="M1.386.482h-1v1h1Z"
        transform="translate(9.614 3.518)"
      />
      <path
        class="a"
        d="M-.417.482h1v1h-1Z"
        transform="translate(9.417 3.518)"
      />
      <path
        class="a"
        d="M1.386-.321h-1v1h1Z"
        transform="translate(9.614 15.321)"
      />
      <path
        class="a"
        d="M-.417-.321h1v1h-1Z"
        transform="translate(9.417 15.321)"
      />
      <path
        class="a"
        d="M0,0H1.161V1.161H0Z"
        transform="translate(3.518 10.58) rotate(-90)"
      />
      <path
        class="a"
        d="M0,0H1.161V1.161H0Z"
        transform="translate(15.321 10.58) rotate(-90)"
      />
    </svg>
  );
};

const NoticeSymbol = () => {
  return (
    <svg
      className="notice_symbol"
      xmlns="http://www.w3.org/2000/svg"
      width="17.069"
      height="18.369"
      viewBox="0 0 17.069 18.369"
    >
      <defs></defs>
      <path
        class="a"
        d="M408.629,492.36H396.61a1.738,1.738,0,0,1-1.236-.6,1.912,1.912,0,0,1-.542-1.329q0-4.287,0-8.574a.982.982,0,0,1,.014-.232c.054-.133.126-.047.18-.007.207.152.4.317.6.478,1.616,1.308,3.241,2.6,4.856,3.914a2.005,2.005,0,0,0,2.645,0q1.7-1.372,3.406-2.742c.75-.6,1.5-1.209,2.247-1.81.446-.374.9-.739,1.358-1.1.063-.05.139-.145.211,0a.894.894,0,0,1,.016.232q0,4.9,0,9.8a2.041,2.041,0,0,1-1.289,1.879C408.934,492.326,408.777,492.316,408.629,492.36Z"
        transform="translate(-393.302 -473.991)"
      />
      <path
        class="b"
        d="M364.507,467.87c-.127-.045-.255-.086-.381-.134a1.94,1.94,0,0,1-1.269-1.8c-.011-1.589,0-3.177-.005-4.766q0-2.616,0-5.232a.3.3,0,0,1,.128-.269c.466-.362.924-.735,1.385-1.1a.3.3,0,0,1,.057.233c0,.313,0,.625,0,.938,0,.446-.011.893.015,1.339,0,2.965,0,5.929,0,8.894a1.887,1.887,0,0,0,.928,1.6,2.958,2.958,0,0,0,.792.3Z"
        transform="translate(-362.85 -449.501)"
      />
      <path
        class="b"
        d="M498.8,349.79c.239-.2.479-.388.716-.586a2.58,2.58,0,0,1,.967-.454h.646a2.588,2.588,0,0,1,.954.444c.242.2.487.4.731.6a.3.3,0,0,1-.236.058q-1.771,0-3.542,0A.3.3,0,0,1,498.8,349.79Z"
        transform="translate(-492.301 -348.75)"
      />
      <path
        class="c"
        d="M394.545,480.324a.211.211,0,0,1-.072-.153c.006-.391.007-.782.01-1.173a1.049,1.049,0,0,1,.41.272c.9.725,1.8,1.444,2.694,2.169.79.639,1.585,1.27,2.37,1.915a2.476,2.476,0,0,0,1.227.628,1.9,1.9,0,0,0,1.47-.373c.618-.471,1.214-.969,1.82-1.455q1.083-.87,2.164-1.743.838-.674,1.678-1.346c.051-.041.122-.157.192-.008.033.342.01.684.013,1.025a.35.35,0,0,1-.051.168l-3.554,2.861c-.739.595-1.467,1.2-2.218,1.781a2.026,2.026,0,0,1-2.561-.07c-1.016-.831-2.044-1.647-3.066-2.47l-2.466-1.988A.651.651,0,0,0,394.545,480.324Z"
        transform="translate(-392.96 -472.753)"
      />
      <path
        class="b"
        d="M574.193,647.313c0,.234-.2.362-.39.236-.232-.154-.444-.337-.662-.511-.649-.519-1.3-1.041-1.946-1.559-.172-.137-.225-.266-.148-.407a.268.268,0,0,1,.422-.1c.566.452,1.128.909,1.693,1.363.277.223.559.442.834.667C574.094,647.089,574.219,647.16,574.193,647.313Z"
        transform="translate(-561.055 -630.744)"
      />
      <path
        class="b"
        d="M443.946,647.4c-.026-.13.065-.2.148-.264q1.094-.884,2.19-1.765c.111-.089.226-.174.335-.265.163-.137.329-.141.439,0s.074.312-.1.448c-.306.245-.609.492-.915.737q-.806.646-1.613,1.289c-.12.1-.249.173-.4.044A.222.222,0,0,1,443.946,647.4Z"
        transform="translate(-440.063 -630.825)"
      />
      <path
        class="b"
        d="M683.259,454.815q-.006-.626-.012-1.251c-.068-.1-.037-.206-.045-.31a1.986,1.986,0,0,0-.1-.809.227.227,0,0,1-.022-.172c.055-.009.088.029.125.058l1.512,1.212a.091.091,0,0,1,.044.09,5.025,5.025,0,0,0-.632.48C683.831,454.338,683.548,454.58,683.259,454.815Z"
        transform="translate(-667.75 -447.319)"
      />
      <path
        class="d"
        d="M408.463,375.28q0,.164,0,.329-1.015.815-2.03,1.63c-.708.571-1.412,1.147-2.12,1.718-.55.444-1.089.906-1.659,1.324a1.991,1.991,0,0,1-2.453-.079c-.567-.461-1.146-.908-1.717-1.365s-1.119-.9-1.679-1.356l-2.317-1.872q0-.592-.01-1.183,0-1.282,0-2.564a1.419,1.419,0,0,1,1.106-1.4,2.079,2.079,0,0,1,.476-.059q1.7,0,3.407,0h4.014a1.715,1.715,0,0,1,.54.036.108.108,0,0,1-.1.034c.023.008-.021,0-.005,0a.983.983,0,0,1,.651.941c.016.466,0,.932,0,1.4a1.4,1.4,0,0,0,1.481,1.486c.46,0,.92,0,1.381,0a1.087,1.087,0,0,1,.931.547A.9.9,0,0,1,408.463,375.28Z"
        transform="translate(-392.966 -369.363)"
      />
      <path
        class="c"
        d="M593.538,376.081a1.064,1.064,0,0,0-.518-.789.885.885,0,0,0-.473-.14c-.49,0-.98,0-1.47,0a1.439,1.439,0,0,1-1.476-1.482c0-.43-.013-.861,0-1.291a1.077,1.077,0,0,0-.752-1.129c.068,0,.1-.007.139-.008s.072,0,.107,0a1.385,1.385,0,0,1,.9.388c1.062,1.045,2.111,2.1,3.163,3.158a1.184,1.184,0,0,1,.208.332A1.769,1.769,0,0,1,593.538,376.081Z"
        transform="translate(-578.041 -370.165)"
      />
      <path
        class="e"
        d="M523.969,406.731c-.021.555.031,1.112-.026,1.666a.844.844,0,0,1-.87.76.86.86,0,0,1-.862-.752,4.531,4.531,0,0,1-.018-.626q0-1.255,0-2.51a.9.9,0,0,1,.662-.967.861.861,0,0,1,1.088.728C524,405.6,523.948,406.164,523.969,406.731Z"
        transform="translate(-514.568 -401.614)"
      />
      <path
        class="e"
        d="M523.206,524.095a.872.872,0,0,1,.885.865.881.881,0,1,1-1.762.008A.873.873,0,0,1,523.206,524.095Z"
        transform="translate(-514.7 -515.707)"
      />
    </svg>
  );
};

const EmploySymbol = () => {
  return (
    <svg
      className="emp_symbol"
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
          class="b"
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

const EduSymbol = () => {
  return (
    <svg
      className="edu_symbol"
      xmlns="http://www.w3.org/2000/svg"
      width="18.248"
      height="15.478"
      viewBox="0 0 18.248 15.478"
    >
      <defs></defs>
      <g transform="translate(-353.416 -382.255)">
        <path
          class="a"
          d="M356.876,387.695c-.082-.078-.2-.073-.291-.141.046-.076.127-.08.2-.093,1.629-.278,3.258-.561,4.889-.829.2,0,.388.044.583.062a3.563,3.563,0,0,0,1.472-.18,1.118,1.118,0,0,0,.429-.247.314.314,0,0,0,.012-.5,1.129,1.129,0,0,0-.541-.3,3.722,3.722,0,0,0-2.378.073,3.356,3.356,0,0,0-.461.3c-.871.179-1.749.317-2.624.476q-1.47.266-2.941.522a1.01,1.01,0,0,0-.289.084.288.288,0,0,1-.224-.016c-.294-.11-.588-.219-.88-.331a.563.563,0,0,1-.418-.415v-.321a1.149,1.149,0,0,1,.66-.436q4.087-1.541,8.17-3.091a.785.785,0,0,1,.586,0q4.2,1.592,8.4,3.176a.529.529,0,0,1,.244.918,1.048,1.048,0,0,1-.3.15l-2.8,1.058a.4.4,0,0,0-.174.083,1.382,1.382,0,0,1-.453.2c-1.636.623-3.275,1.238-4.912,1.861a.832.832,0,0,1-.622-.005q-2.563-.975-5.129-1.941A.56.56,0,0,1,356.876,387.695Z"
          transform="translate(0 0)"
        />
        <path
          class="b"
          d="M353.416,629.056a12.222,12.222,0,0,0,.247-1.21c.151-.76.291-1.522.436-2.283.1-.014.153.055.218.1a1.194,1.194,0,0,0,1.471-.021c.056-.042.107-.1.189-.082l.612,3.214c0,.012,0,.024,0,.035.066.367.066.363-.312.354a.171.171,0,0,1-.164-.1c-.1-.17-.2-.338-.3-.506-.005-.008-.02-.011-.037-.02-.095.163-.2.323-.283.491a.215.215,0,0,1-.235.14c-.2-.017-.437.069-.593-.032s-.212-.318-.313-.485l-.081-.138c-.1.17-.2.319-.276.48a.26.26,0,0,1-.3.175,2.1,2.1,0,0,0-.285,0Z"
          transform="translate(0 -231.452)"
        />
        <path
          class="c"
          d="M419.143,493.9c.394.108.768.274,1.149.417q1.538.577,3.073,1.162c.4.151.8.3,1.2.454a.67.67,0,0,0,.5,0l3.871-1.463,1.411-.535a1.157,1.157,0,0,1,.136-.034,13.92,13.92,0,0,1,.249,3.239,3.441,3.441,0,0,1-.125.7,1.487,1.487,0,0,1-.73.837,6.4,6.4,0,0,1-2.241.818,14.382,14.382,0,0,1-6.022-.082,5.782,5.782,0,0,1-2.023-.842,1.545,1.545,0,0,1-.658-1.147,9.706,9.706,0,0,1,.052-2.4C419.022,494.653,419.087,494.279,419.143,493.9Z"
          transform="translate(-62.267 -106.209)"
        />
        <path
          class="c"
          d="M377.388,461.356q.16-2.462.319-4.924c0-.065,0-.13,0-.2.094-.162.27-.121.408-.147.782-.149,1.566-.281,2.35-.419l2.734-.481.4-.07c0,.406.1.535.5.7a1.018,1.018,0,0,1,.386.165c-.451.081-.9.165-1.353.243-.737.127-1.476.25-2.213.377-.511.088-1.022.178-1.533.268-.129.02-.257.038-.386.061-.3.053-.3.054-.32.369q-.132,2.051-.268,4.1a.154.154,0,0,1-.152.006,1.3,1.3,0,0,0-.761-.03A.113.113,0,0,1,377.388,461.356Z"
          transform="translate(-22.804 -69.315)"
        />
        <path
          class="a"
          d="M361.536,581.707a1.481,1.481,0,0,1,1.028.044,1.415,1.415,0,0,1,.611.694,1.24,1.24,0,0,1-.192,1.241.757.757,0,0,0-.053.091,1.32,1.32,0,0,1-1.878,0,2.584,2.584,0,0,1-.253-.445,1.261,1.261,0,0,1,.614-1.558Z"
          transform="translate(-6.952 -189.666)"
        />
        <path
          class="b"
          d="M504.767,445.375a1.942,1.942,0,0,1-.741-.312.4.4,0,0,1-.145-.55,1.794,1.794,0,0,1,1.13-.495,3.9,3.9,0,0,1,1.568.069,1.592,1.592,0,0,1,.671.312.383.383,0,0,1-.013.655,1.724,1.724,0,0,1-.694.307A4,4,0,0,1,504.767,445.375Z"
          transform="translate(-143.082 -58.709)"
        />
      </g>
    </svg>
  );
};

const LocSymbol = () => {
  return (
    <svg
      className="loc_symbol"
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

const InviteIcon = () => {
  return (
    <svg
      className="inviteicon"
      xmlns="http://www.w3.org/2000/svg"
      width="31.398"
      height="31.355"
      viewBox="0 0 31.398 31.355"
    >
      <defs>
        <style></style>
      </defs>
      <g transform="translate(0 0)">
        <g transform="translate(0 0)">
          <path
            class="a"
            d="M13.556,20.584H.145C-.008,20.467.006,20.3,0,20.136,0,19.463,0,18.79,0,18.117V11.633a3.85,3.85,0,0,1,.024-.612.351.351,0,0,1,.19-.262A13.049,13.049,0,0,0,2.265,9.331c2.64-1.957,5.262-3.937,7.907-5.888.459-.328.9-.689,1.356-1.022C12.6,1.632,13.641.808,14.739.057A.357.357,0,0,1,14.846,0a1.232,1.232,0,0,1,.978.984V18.376a2.5,2.5,0,0,1-1.28,1.948A3.211,3.211,0,0,1,13.556,20.584Z"
            transform="translate(15.574 10.771)"
          />
          <path
            class="a"
            d="M15.72,10.863v9.677H2.247a3.389,3.389,0,0,1-1.088-.367,2.666,2.666,0,0,1-1.151-2.36c.011-4.487,0-8.974,0-13.463,0-1,.03-2-.01-3A1.325,1.325,0,0,1,.838,0a.733.733,0,0,1,.529.18c1.2.857,2.355,1.761,3.541,2.635a7.522,7.522,0,0,0,.778.578c2.47,1.85,4.949,3.687,7.418,5.539.652.489,1.308.973,1.96,1.461a3.646,3.646,0,0,0,.558.315.3.3,0,0,1,.1.151Z"
            transform="translate(0 10.814)"
          />
          <path
            class="b"
            d="M.162,0H9.285a.889.889,0,0,1,.977,1q.007,3.215.007,6.43a.971.971,0,0,1,.138.553v5.766a.97.97,0,0,1-.134.554L5.965,17.528Q3.5,19.373,1.037,21.211a2.178,2.178,0,0,1-.876.468l-.133-.054C0,19.453.017,17.281.02,15.11a.659.659,0,0,1,.041-.269c.047-.176.214-.207.348-.266a.768.768,0,0,0,.517-.723A.771.771,0,0,0,.4,13.1c-.125-.054-.279-.084-.332-.244a4.624,4.624,0,0,1,.039-1.785.739.739,0,0,1,.578-.13c1.538,0,3.076,0,4.614,0a2.526,2.526,0,0,0,.488-.023.76.76,0,0,0,.006-1.5A2.426,2.426,0,0,0,5.3,9.4H.691A.766.766,0,0,1,.11,9.269a.514.514,0,0,1-.087-.318A5.309,5.309,0,0,1,.1,7.414c.16-.173.374-.139.573-.139,1.531-.005,3.062,0,4.593,0a3.552,3.552,0,0,0,.459-.013.763.763,0,0,0,.01-1.521,3.306,3.306,0,0,0-.459-.015H.682A.735.735,0,0,1,.1,5.6a.772.772,0,0,1-.09-.442Q.006,2.822.014.489C.019.305,0,.123.162,0Z"
            transform="translate(15.559 0.002)"
          />
          <path
            class="c"
            d="M0,6.874V0L4.616,3.426.987,6.155C.658,6.4.328,6.635,0,6.874Z"
            transform="translate(25.832 7.428)"
          />
          <path
            class="b"
            d="M10.249,14.76v6.491c0,.135.048.3-.13.372a.759.759,0,0,1-.493-.217Q4.915,17.9.205,14.379a.689.689,0,0,1-.066-.064A.97.97,0,0,1,0,13.761V7.983a.978.978,0,0,1,.138-.555q0-3.139.007-6.277C.147.323.465,0,1.284,0h8.969V5.568l-.028.048a.745.745,0,0,1-.528.095c-1.539,0-3.077,0-4.616,0a2.313,2.313,0,0,0-.459.023.761.761,0,0,0,0,1.5,2.313,2.313,0,0,0,.459.023H9.7a.745.745,0,0,1,.528.095l.028.048V9.24l-.028.048a.745.745,0,0,1-.528.095c-1.539,0-3.077,0-4.616,0a2.313,2.313,0,0,0-.459.023.761.761,0,0,0,0,1.5,2.313,2.313,0,0,0,.459.023H9.7a.745.745,0,0,1,.528.095l.028.048v1.837l-.028.048a.75.75,0,0,1-.529.095c-1.531,0-3.062,0-4.593,0a2.417,2.417,0,0,0-.459.021.76.76,0,0,0,0,1.5A2.418,2.418,0,0,0,5.1,14.6H9.7a.747.747,0,0,1,.529.095Z"
            transform="translate(5.469 0)"
          />
          <path
            class="c"
            d="M4.637,0V6.89L.223,3.61,0,3.449,3.452.864C3.843.572,4.241.288,4.637,0Z"
            transform="translate(0.971 7.429)"
          />
          <path
            class="a"
            d="M.15,0H5.625a.886.886,0,0,1,.864.521.879.879,0,0,1-.115.979.953.953,0,0,1-.812.341q-2.707-.005-5.413,0v0a.355.355,0,0,1-.137-.292Q-.012.921.012.3A.355.355,0,0,1,.149.005Z"
            transform="translate(15.568 5.571)"
          />
          <path
            class="a"
            d="M.15,0H5.625a.886.886,0,0,1,.864.521.879.879,0,0,1-.115.979.953.953,0,0,1-.812.341q-2.707-.005-5.413,0v0a.355.355,0,0,1-.137-.292Q-.012.921.012.3A.355.355,0,0,1,.149.005Z"
            transform="translate(15.568 9.245)"
          />
          <path
            class="a"
            d="M.149,0a.909.909,0,0,1,.919.935.906.906,0,0,1-.919.9v0a.354.354,0,0,1-.137-.292Q-.012.92.012.3A.354.354,0,0,1,.149,0Z"
            transform="translate(15.57 12.92)"
          />
          <path
            class="a"
            d="M6.431,0V1.835H.988A.908.908,0,0,1,0,.9.908.908,0,0,1,.988,0Q3.709,0,6.431,0Z"
            transform="translate(9.29 5.572)"
          />
          <path
            class="a"
            d="M6.431,0V1.835H.988A.908.908,0,0,1,0,.9.908.908,0,0,1,.988,0Q3.709,0,6.431,0Z"
            transform="translate(9.29 9.246)"
          />
          <path
            class="a"
            d="M6.431,0v1.83H.991A.92.92,0,1,1,.991,0Q3.711,0,6.431,0Z"
            transform="translate(9.29 12.921)"
          />
        </g>
      </g>
    </svg>
  );
};
const BookMark = () => {
  return (
    <svg
      className="bookmarkicon"
      xmlns="http://www.w3.org/2000/svg"
      width="20.945"
      height="29.921"
      viewBox="0 0 20.945 29.921"
    >
      <defs></defs>
      <g transform="translate(0 0)">
        <path
          class="a"
          d="M17.727,0H4.279A4.322,4.322,0,0,0,0,4.364V29.3a.624.624,0,0,0,.378.576.6.6,0,0,0,.234.047.605.605,0,0,0,.433-.182l6.9-7.049c2.7,2.719,6.425,6.483,6.824,6.947a.6.6,0,0,0,.847.174.621.621,0,0,0,.227-.283.388.388,0,0,0,.048-.231V3.117a1.852,1.852,0,0,1,1.834-1.87.617.617,0,0,0,.611-.623A.617.617,0,0,0,17.727,0Z"
          transform="translate(0 0)"
        />
        <path
          class="b"
          d="M2.606,0A2.606,2.606,0,0,1,5.213,2.606V4.561a.652.652,0,0,1-.652.652H0V2.606A2.606,2.606,0,0,1,2.606,0Z"
          transform="translate(15.732 0)"
        />
      </g>
    </svg>
  );
};
const PostIcon = () => {
  return (
    <svg
      className="posticon"
      xmlns="http://www.w3.org/2000/svg"
      width="28.461"
      height="31.623"
      viewBox="0 0 28.461 31.623"
    >
      <defs></defs>
      <path
        class="a"
        d="M367.365,348.75h22.917a1.1,1.1,0,0,1,.717,1.176q-.013,8.1-.005,16.192v.371H382.5c-.814,0-1.149.334-1.149,1.146q0,4.11,0,8.219v.372H367.876c-.854,0-1.176-.324-1.176-1.182q0-12.527-.008-25.055A1.2,1.2,0,0,1,367.365,348.75Zm17.707,8.561a2.96,2.96,0,0,0-.422-3.891,2.822,2.822,0,0,0-3.535-.206,2.942,2.942,0,0,0-.675,4.094,4.17,4.17,0,0,0-1.908,2.8,15.3,15.3,0,0,0-.1,2.229.937.937,0,0,0,1.058,1.075q1.868,0,3.737,0c.962,0,1.924,0,2.886,0a.868.868,0,0,0,.945-.769,14.867,14.867,0,0,0-.038-2.294A4.22,4.22,0,0,0,385.072,357.311ZM374.93,367.345c1.114,0,2.229,0,3.343,0a.908.908,0,0,0,.993-.922.92.92,0,0,0-1-.917c-.628,0-1.256,0-1.884,0q-2.37,0-4.741,0a.913.913,0,0,0-.99.684.9.9,0,0,0,.909,1.153C372.681,367.351,373.806,367.345,374.93,367.345Zm0,3.942c1.124,0,2.249.008,3.373,0a.91.91,0,0,0,.9-1.246.936.936,0,0,0-1-.59q-3.267,0-6.533,0a1.73,1.73,0,0,0-.272.02.916.916,0,0,0,.216,1.817C372.719,371.291,373.823,371.288,374.927,371.287Zm-1.426-9.719c-.637,0-1.274,0-1.911,0a.92.92,0,1,0,.008,1.837q1.88.009,3.761,0a.92.92,0,1,0-.007-1.837C374.734,361.565,374.118,361.569,373.5,361.569Zm-.03-3.937v-.005c-.627,0-1.254-.006-1.88,0a.918.918,0,1,0-.024,1.833c1.274.014,2.547.008,3.821,0a.89.89,0,0,0,.8-.416.9.9,0,0,0-.715-1.409C374.806,357.61,374.138,357.632,373.471,357.632Zm0-2.122v0c.627,0,1.254.005,1.88,0a.918.918,0,1,0,.029-1.834c-1.274-.013-2.547-.007-3.821,0a.889.889,0,0,0-.766.365.919.919,0,0,0-.09.956.809.809,0,0,0,.766.508C372.14,355.517,372.808,355.509,373.475,355.509Z"
        transform="translate(-366.692 -348.75)"
      />
      <path
        class="a"
        d="M415.609,424.457a1.064,1.064,0,0,1-.715-1.177c.017-.293,0-.588,0-.92h.387c3.677,0,7.354-.006,11.031,0a3.1,3.1,0,0,0,2.338-.972q3.745-3.811,7.52-7.592a3.1,3.1,0,0,0,.941-2.307q-.011-7.039,0-14.078V397a12.617,12.617,0,0,1,1.322.01.875.875,0,0,1,.756.869c.007.112,0,.225,0,.337q0,12.5.008,25a1.2,1.2,0,0,1-.673,1.24Z"
        transform="translate(-410.739 -392.834)"
      />
      <path
        class="a"
        d="M577.848,588.4l-7.586,7.586V588.4Z"
        transform="translate(-553.922 -569.113)"
      />
      <path
        class="a"
        d="M533.933,470.734a2.721,2.721,0,0,1,1.3-2.861,2.534,2.534,0,0,1,2.832.088,2.7,2.7,0,0,1,1.133,2.773Z"
        transform="translate(-520.399 -457.754)"
      />
      <path
        class="a"
        d="M554.216,420.619a1.1,1.1,0,0,1-1.109,1.1,1.108,1.108,0,0,1-1.1-1.089,1.093,1.093,0,0,1,1.1-1.116A1.081,1.081,0,0,1,554.216,420.619Z"
        transform="translate(-536.925 -413.708)"
      />
    </svg>
  );
};
const FlagIcon = () => {
  return (
    <svg
      className="flagicon"
      xmlns="http://www.w3.org/2000/svg"
      width="28.413"
      height="29.908"
      viewBox="0 0 28.413 29.908"
    >
      <defs></defs>
      <path
        class="a"
        d="M417.393,363.884a4.322,4.322,0,0,1-1.711,2.163,7.346,7.346,0,0,1-4.1,1.592,24.557,24.557,0,0,1-5.031-.212,25.523,25.523,0,0,0-4.785-.223,7.539,7.539,0,0,0-5.212,2.477,1.379,1.379,0,0,1-.113.1c-.127-.492-.25-.963-.369-1.434q-1.71-6.764-3.419-13.528a.5.5,0,0,0-.035-.114c-.213-.395-.064-.646.221-.929a7.417,7.417,0,0,1,4.193-2.116,18.109,18.109,0,0,1,4.647.03,34.244,34.244,0,0,0,5.63.339,7.681,7.681,0,0,0,5.962-3.221.161.161,0,0,0,.014-.055h.274a2.379,2.379,0,0,1,.091.519c-.014.321-.067.64-.108.959a79.329,79.329,0,0,1-1.56,8.612.735.735,0,0,0,.223.772,23.278,23.278,0,0,0,4.856,3.7c.137.078.226.261.337.4Z"
        transform="translate(-388.981 -348.75)"
      />
      <path
        class="a"
        d="M356.014,439.6a1.466,1.466,0,0,1-.79-1.065q-3.173-11.41-6.366-22.815a2.8,2.8,0,0,0-.108-.274V414.9c.027-.064.056-.127.082-.191a1.344,1.344,0,0,1,1.367-.848,1.25,1.25,0,0,1,1.157.949q.88,3.109,1.746,6.222,2.349,8.406,4.695,16.812a3.2,3.2,0,0,1,.1.41,1.021,1.021,0,0,1-.714,1.153l-.563.191Z"
        transform="translate(-348.75 -409.687)"
      />
    </svg>
  );
};
const SelectedIcon = () => {
  return (
    <svg
      className="selectedicon"
      xmlns="http://www.w3.org/2000/svg"
      width="30.734"
      height="26.385"
      viewBox="0 0 30.734 26.385"
    >
      <defs></defs>
      <path
        class="a"
        d="M348.75,646.945a1.708,1.708,0,0,0,.06-.194A3.533,3.533,0,0,1,351.179,644a.407.407,0,0,1,.278.009,4.545,4.545,0,0,0,3.616.009.52.52,0,0,1,.361.007,3.484,3.484,0,0,1,2.341,3.156c.035.556.006,1.115.006,1.716h-.391q-4.127,0-8.253,0c-.129,0-.258.016-.387.025Z"
        transform="translate(-348.75 -622.541)"
      />
      <path
        class="a"
        d="M628.688,648.962c-.129-.009-.258-.025-.386-.025q-4.126,0-8.251,0h-.41a10.126,10.126,0,0,1,.142-2.482,3.534,3.534,0,0,1,2.275-2.41.45.45,0,0,1,.306.009,4.542,4.542,0,0,0,3.615,0,.481.481,0,0,1,.334.005,3.514,3.514,0,0,1,2.325,2.817,1.261,1.261,0,0,0,.051.168Z"
        transform="translate(-597.954 -622.577)"
      />
      <path
        class="a"
        d="M468.582,388.637a6.278,6.278,0,1,1,6.276-6.29A6.3,6.3,0,0,1,468.582,388.637Zm-3.182-6.014,2.542,2.546,3.84-3.839-1.233-1.224-2.643,2.662-1.318-1.332Z"
        transform="translate(-453.213 -376.081)"
      />
      <path
        class="a"
        d="M493.3,648.886h-9.03a8.006,8.006,0,0,1,.252-2.831,3.6,3.6,0,0,1,2.182-2.048.413.413,0,0,1,.278.015,4.539,4.539,0,0,0,3.613,0,.5.5,0,0,1,.334,0,3.521,3.521,0,0,1,2.369,3.349C493.313,647.871,493.3,648.37,493.3,648.886Z"
        transform="translate(-473.422 -622.547)"
      />
      <path
        class="a"
        d="M509.682,564.38a2.7,2.7,0,1,1,2.713-2.667A2.7,2.7,0,0,1,509.682,564.38Z"
        transform="translate(-494.326 -544.335)"
      />
      <path
        class="a"
        d="M645.232,564.371a2.7,2.7,0,0,1,0-5.409,2.7,2.7,0,1,1,0,5.409Z"
        transform="translate(-619.028 -544.326)"
      />
      <path
        class="a"
        d="M376.817,561.674a2.7,2.7,0,1,1-5.406-.011,2.7,2.7,0,0,1,5.406.011Z"
        transform="translate(-369.597 -544.331)"
      />
    </svg>
  );
};
const HoldIconOrg = () => {
  return (
    <svg
      className="holdicon"
      xmlns="http://www.w3.org/2000/svg"
      width="30.535"
      height="30.535"
      viewBox="0 0 30.535 30.535"
    >
      <defs></defs>
      <path
        class="a"
        d="M26.063,4.472A15.268,15.268,0,0,0,4.472,26.064,15.268,15.268,0,1,0,26.063,4.472Zm-.981.981a13.789,13.789,0,0,1,4.065,9.814H26A10.746,10.746,0,0,0,15.268,4.534c-.351,0-.7.018-1.041.051V1.426q.517-.038,1.041-.038A13.789,13.789,0,0,1,25.082,5.453Zm-9.814,19.16a9.346,9.346,0,1,1,9.346-9.346A9.356,9.356,0,0,1,15.268,24.613Z"
        transform="translate(0)"
      />
    </svg>
  );
};

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

const EditBlckIcon = () => {
  return (
    <svg
      className="edit_blck_icon marginautoright"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16.001"
      viewBox="0 0 16 16.001"
    >
      <defs></defs>
      <g transform="translate(-182.692 -388.692)">
        <g class="a" transform="translate(182.692 388.692)">
          <rect class="c" width="16" height="16" />
          <rect class="d" x="0.5" y="0.5" width="15" height="15" />
        </g>
        <g transform="translate(182.692 388.693)">
          <g transform="translate(0 0)">
            <path
              class="b"
              d="M11.249.814a2.784,2.784,0,0,1,4.067,3.8l-.13.14L5.578,14.36a2,2,0,0,1-.723.462l-.165.053L.633,15.982A.5.5,0,0,1,0,15.447l.016-.08,1.106-4.055a1.982,1.982,0,0,1,.4-.76l.117-.128L11.249.814Zm-.86,2.276L2.348,11.13a1,1,0,0,0-.215.321l-.042.123-.877,3.211,3.213-.875a1,1,0,0,0,.239-.1l.107-.072.1-.085L12.911,5.61,10.389,3.089Zm4.09-1.569a1.784,1.784,0,0,0-2.4-.11l-.12.11-.86.86L13.617,4.9l.862-.86a1.784,1.784,0,0,0,.11-2.4l-.11-.12Z"
              transform="translate(0 0)"
            />
          </g>
        </g>
      </g>
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

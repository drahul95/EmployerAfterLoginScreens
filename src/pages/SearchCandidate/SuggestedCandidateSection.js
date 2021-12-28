import React from "react";
import "./SearchCandidate.scss";
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
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  Checkbox,
  Popover,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextareaAutosize,
  InputAdornment,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ChatIcon from "@material-ui/icons/Chat";
import PersonIcon from "@material-ui/icons/Person";
import BigSchlImg from "../../images/Big_schl.png";
import AddIcon from "@material-ui/icons/Add";
import ProfileDP from "../../images/profiledp.png";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CandidateDetailsPopper from "../CandidateDetailsPopper/CandidateDeatilsPopper";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function SuggestedCandidateSection() {
  const BlueRadio = withStyles({
    root: {
      color: "#2a5798",
      "&$checked": {
        color: "#2a5798",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  const [expanded, setExpanded] = React.useState("panel1", "panel2");

  const handleChangeaccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [openmodalposting, setOpenModalposting] = React.useState(false);

  const handlepostingOpen = () => {
    setOpenModalposting(true);
  };

  const handlepostingClose = () => {
    setOpenModalposting(false);
  };

  const [openmodalposting2, setOpenModalposting2] = React.useState(false);

  const handlepostingOpen2 = () => {
    setOpenModalposting2(true);
  };

  const handlepostingClose2 = () => {
    setOpenModalposting2(false);
  };

  const [openmodallater, setOpenModallater] = React.useState(false);

  const handleSaveLatereOpen = () => {
    setOpenModallater(true);
  };

  const handleSaveLaterClose = () => {
    setOpenModallater(false);
  };

  const [openmodallater2, setOpenModallater2] = React.useState(false);

  const handleSaveLatereOpen2 = () => {
    setOpenModallater2(true);
  };

  const handleSaveLaterClose2 = () => {
    setOpenModallater2(false);
  };
  const [openmodalsuccess, setOpenModalsuccess] = React.useState(false);

  const handleSuccessOpen = () => {
    setOpenModalsuccess(true);
  };

  const handleSuccessClose = () => {
    setOpenModalsuccess(false);
  };

  const [open] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const [selectedValue] = React.useState("a");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openJobPosting, setOpenJobPosting] = React.useState(false);

  const handleJobPosting = () => {
    setOpenJobPosting(true);
  };

  const handleCloseJobPosting = () => {
    setOpenJobPosting(false);
  };

  const [openJobPosting2, setOpenJobPosting2] = React.useState(false);

  const handleJobPosting2 = () => {
    setOpenJobPosting2(true);
  };

  const handleCloseJobPosting2 = () => {
    setOpenJobPosting2(false);
  };

  const [openInvite, setOpenInvite] = React.useState(false);

  const handleOpenInvite = () => {
    setOpenInvite(true);
  };

  const handleCloseInvite = () => {
    setOpenInvite(false);
  };

  const [openInvite2, setOpenInvite2] = React.useState(false);

  const handleOpenInvite2 = () => {
    setOpenInvite2(true);
  };

  const handleCloseInvite2 = () => {
    setOpenInvite2(false);
  };

  const [openNextModal, setOpenNextModal] = React.useState(false);

  const handleOpenNextModal = () => {
    setOpenNextModal(true);
  };

  const handleCloseNextModal = () => {
    setOpenNextModal(false);
  };

  const [openSaveModal, setOpenSaveModal] = React.useState(false);

  const handleOpenSaveModal = () => {
    setOpenSaveModal(true);
  };

  const handleCloseSaveModal = () => {
    setOpenSaveModal(false);
  };

  const [openProfileModal, setOpenProfileModal] = React.useState(false);

  const handleOpenProfileModal = () => {
    setOpenProfileModal(true);
  };

  const handleCloseProfileModal = () => {
    setOpenProfileModal(false);
  };

  const [openProfileModal2, setOpenProfileModal2] = React.useState(false);

  const handleOpenProfileModal2 = () => {
    setOpenProfileModal2(true);
  };

  const handleCloseProfileModal2 = () => {
    setOpenProfileModal2(false);
  };

  const [openSave, setOpenSave] = React.useState(false);

  const handleOpenSave = () => {
    setOpenSave(true);
  };

  const handleCloseSave = () => {
    setOpenSave(false);
  };

  const [openSave2, setOpenSave2] = React.useState(false);

  const handleOpenSave2 = () => {
    setOpenSave2(true);
  };

  const handleCloseSave2 = () => {
    setOpenSave2(false);
  };

  const [opendownload, setOpendownload] = React.useState(false);
  const anchorRefdownload = React.useRef(null);

  const handleToggledownload = () => {
    setOpendownload((prevOpen) => !prevOpen);
  };

  const handleClosedownload = (event) => {
    if (
      anchorRefdownload.current &&
      anchorRefdownload.current.contains(event.target)
    ) {
      return;
    }

    setOpendownload(false);
  };

  function handleListKeyDowndownload(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpendownload(false);
    }
  }

  const [opendownload2, setOpendownload2] = React.useState(false);
  const anchorRefdownload2 = React.useRef(null);

  const handleToggledownload2 = () => {
    setOpendownload2((prevOpen) => !prevOpen);
  };

  const handleClosedownload2 = (event) => {
    if (
      anchorRefdownload.current &&
      anchorRefdownload.current.contains(event.target)
    ) {
      return;
    }

    setOpendownload2(false);
  };

  function handleListKeyDowndownload2(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpendownload2(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const [openmodal, setOpenModal] = React.useState(false);

  const handleTemplateOpen = () => {
    setOpenModal(true);
  };

  const handleTemplateClose = () => {
    setOpenModal(false);
  };

  const [openmodaltemplate2, setOpenModalTemplate2] = React.useState(false);

  const handleTemplate2Open2 = () => {
    setOpenModalTemplate2(true);
  };

  const handleTemplate2Close2 = () => {
    setOpenModalTemplate2(false);
  };
  const [iscandidat, setIscandidat] = React.useState(null);
  return (
    <Box component="div" className="sugcandidiv">
      <Box component="div" className="sugheaddiv">
        <Box component="div" className="sugheadtext">
          <Typography variant="span" className="sugtitle">
            Suggested Candidates
          </Typography>
        </Box>
        <Box component="div" className="marginautoright autocompdiv">
          <Box component="div" className="sortdiv">
            <SortIcon />
            <Typography
              variant="span"
              className="sortspan blackcolortext font12"
            >
              Sort By
            </Typography>
          </Box>
          <Autocomplete
            id="combo-box-demo"
            className="WhiteSelectDropdown"
            options={experience}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => {
              params.inputProps.className = "noborderinput";
              params.InputProps.className = "noBeforeAfter";
              params.InputProps.placeholder = "Default";
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
      <Box component="div" className="dis_flex mt-3">
        <Box component="div" className="top-2">
          <CloseIcon className="top-2" />
          <Typography variant="span" className="ms-2">
            2 Selected
          </Typography>
        </Box>
        <Box component="div" className="marginautoright buttondiv">
          <Button
            className="darkbluecolor whitecolortext border8"
            endIcon={<ArrowWhite />}
            ref={anchorRefdownload2}
            aria-controls={opendownload2 ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggledownload2}
          >
            <DownloadWhite />
          </Button>
          <Popper
            open={opendownload2}
            anchorEl={anchorRefdownload2.current}
            role={undefined}
            transition
            disablePortal
            className="downloadtoggle"
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
                className="downloadmenu"
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClosedownload2}>
                    <MenuList
                      autoFocusItem={opendownload}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDowndownload2}
                    >
                      <MenuItem onClick={handleClosedownload2}>
                        Download Resume
                      </MenuItem>

                      <MenuItem onClick={handleOpenProfileModal2}>
                        Download Profile
                      </MenuItem>
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className="modal"
                        open={openProfileModal2}
                        onClose={handleCloseProfileModal2}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={openProfileModal2}>
                          <div className="modalcontsmall">
                            <DownloadOrange />
                            <Typography variant="h6">
                              Are you sure you want to download the selected
                              profiles?
                            </Typography>
                            <Box
                              component="div"
                              className="button_confirm_area"
                            >
                              <Button
                                className="lightbluecolor border8"
                                onClick={handleCloseProfileModal2}
                              >
                                No
                              </Button>
                              <Button className="darkbluecolor whitecolortext border8">
                                Yes
                              </Button>
                            </Box>
                          </div>
                        </Fade>
                      </Modal>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Button
            startIcon={<InviteIconCand />}
            className="darkbluecolor whitecolortext border8"
            onClick={handleOpenInvite2}
          >
            Invite
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="modal"
            open={openInvite2}
            onClose={handleCloseInvite2}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openInvite2}>
              <div className="modalcontmid">
                <Box component="div" className="dis_flex titleheading">
                  <Typography variant="h6">
                    Are you sure you want to invite the candidate(s)?
                  </Typography>
                  <Button
                    className="marginautoright transparentbtn noborder"
                    onClick={handleCloseInvite2}
                  >
                    <CloseIcon />
                  </Button>
                </Box>
                <Box component="div" className="midbody">
                  <Typography variant="span" className="label font14">
                    An Existing Job Posting
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    className="BlueSelectDropdown mt-2"
                    options={coaching}
                    getOptionLabel={(option) => option.name}
                    classes={{
                      paper: "BlueAutoCompletePaper",
                    }}
                    renderInput={(params) => {
                      params.inputProps.className = "noborderinput";
                      params.InputProps.className = "noBeforeAfter";
                      params.InputProps.placeholder =
                        "Select an Existing Job Posting";
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
                <Box component="div" className="button_confirm_area">
                  <Button
                    className="darkbluecolor whitecolortext border8 pe-4 pt-2 ps-4 pb-2"
                    onClick={handleOpenNextModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    Next
                  </Button>

                  {/* After hitting Next Modal window */}

                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={openNextModal}
                    onClose={handleCloseNextModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={openNextModal}>
                      <div className="modalcont emailmodal">
                        <Box component="div" className="dis_flex titleheading">
                          <Typography variant="h6">Emails</Typography>
                          <Button
                            className="marginautoright transparentbtn noborder"
                            onClick={handleCloseNextModal}
                          >
                            <CloseIcon />
                          </Button>
                        </Box>
                        <Box component="div" className="midbody">
                          <Typography variant="span" className="label font14">
                            For
                          </Typography>
                          <Autocomplete
                            id="free-solo-demo multiple-limit-tags"
                            multiple
                            limitTags={5}
                            classes={{
                              clearIndicator: "SrchBtn",
                              popupIndicator: "popbtn",
                              input: "inputtext",
                            }}
                            fullWidth
                            options={People.map((option) => option.name)}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                margin="normal"
                                placeholder="Enter Candidates Name"
                                className="BlueAutoComplete"
                              />
                            )}
                          />
                        </Box>
                        <Box
                          component="div"
                          className="jdarea fullwidth_100percent"
                        >
                          <Typography variant="span" className="label font14">
                            Select Template
                          </Typography>
                          <Box component="div" className="jddivcont">
                            <Autocomplete
                              id="combo-box-demo"
                              className="BlueSelectDropdown"
                              options={experience}
                              getOptionLabel={(option) => option.name}
                              classes={{
                                paper: "BlueAutoCompletePaper",
                              }}
                              renderInput={(params) => {
                                params.inputProps.className = "noborderinput";
                                params.InputProps.className = "noBeforeAfter";
                                params.InputProps.placeholder =
                                  "Search Subjects Description";
                                return (
                                  <TextField
                                    disabled
                                    inputStyle={{
                                      cursor: "none",
                                    }}
                                    {...params}
                                    onKeyPress={(e) => e.preventDefault()}
                                  />
                                );
                              }}
                            />
                            <Button
                              className="marginautoright darkbluecolor templatebtn"
                              onClick={handleTemplateOpen}
                            >
                              Save as Template
                            </Button>
                            <Modal
                              aria-labelledby="transition-modal-title"
                              aria-describedby="transition-modal-description"
                              className="modal"
                              open={openmodal}
                              onClose={handleTemplateClose}
                              closeAfterTransition
                              BackdropComponent={Backdrop}
                              BackdropProps={{
                                timeout: 500,
                              }}
                            >
                              <Fade in={openmodal}>
                                <Box component="div" className="modalcont">
                                  <Typography
                                    variant="h6"
                                    id="transition-modal-title"
                                    className="fontweight700"
                                  >
                                    Save as Template
                                  </Typography>
                                  <Typography
                                    id="transition-modal-description"
                                    className="mb-2"
                                  >
                                    Title
                                  </Typography>
                                  <TextField
                                    fullWidth
                                    classes={{
                                      root: "textfieldnormal",
                                    }}
                                    id="standard-normal"
                                    placeholder="Title of the Template"
                                  />
                                  <Button className="fullwidth_100percent drkbluebtn">
                                    Save
                                  </Button>
                                </Box>
                              </Fade>
                            </Modal>
                          </Box>
                          <Box component="div" className="messagebox">
                            <TextareaAutosize
                              minRows={6}
                              className="textareablue fullwidth_100percent"
                              id="standard-normal"
                              placeholder="Type your Job Description"
                            />
                          </Box>
                          <Button
                            className="float_right mt-2 darkbluecolor invitebtn"
                            startIcon={<InviteIconCand />}
                          >
                            Send Invitation
                          </Button>
                        </Box>
                      </div>
                    </Fade>
                  </Modal>

                  {/* End After hitting Next Modal window */}
                </Box>
                <Box component="div" className="button_confirm_area">
                  <Typography variant="span" className="label font14">
                    Or
                  </Typography>
                </Box>
                <Box component="div" className="button_confirm_area">
                  <Button
                    className="darkbluecolor whitecolortext border8 pe-4 pt-2 ps-4 pb-2"
                    onClick={handleJobPosting}
                  >
                    Create Job Posting
                  </Button>
                  {/* After hitting Create Job Posting Modal */}
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={openJobPosting}
                    onClose={handleCloseJobPosting}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={openJobPosting}>
                      <div className="modalcont JobPostingModal">
                        <Box
                          component="div"
                          className="dis_flex titleheading"
                          onClick={handleCloseJobPosting}
                        >
                          <Typography variant="h6">
                            New Job Posting and Invites
                          </Typography>
                          <Button className="marginautoright transparentbtn noborder">
                            <CloseIcon />
                          </Button>
                        </Box>
                        <Box component="div" className="formdiv">
                          <AppBar position="static" className="appbar">
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              aria-label="simple tabs example"
                              className="appbartab"
                            >
                              <Tab
                                label="I want to hire from own domain"
                                {...a11yProps(0)}
                                className="appbar_btn"
                              />
                              <Tab
                                label="I want to hire from others domain"
                                {...a11yProps(1)}
                                className="appbar_btn apppbar_btn_disabled"
                                disabled
                              />
                            </Tabs>
                          </AppBar>
                          <TabPanel
                            value={value}
                            index={0}
                            className="appbar_tabpanel"
                          >
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Hiring for
                                </Typography>
                                <TextField
                                  disabled
                                  fullWidth
                                  classes={{
                                    root: "textfielddisabled",
                                  }}
                                  id="standard-disabled"
                                  placeholder="Suggested Job Title"
                                  value="AICT College"
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Job Category
                                </Typography>
                                <TextField
                                  disabled
                                  fullWidth
                                  classes={{
                                    root: "textfielddisabled",
                                  }}
                                  id="standard-disabled"
                                  placeholder="Suggested Job Title"
                                  value="Academic"
                                />
                              </Grid>
                            </Grid>
                            <Box component="div" className="row">
                              <BlueRadio
                                checked={selectedValue === "a"}
                                onChange={handleChange}
                                value="a"
                                name="radio-button-demo"
                                inputProps={{
                                  "aria-label": "c",
                                }}
                                className="radio_custom"
                              />
                              <Typography
                                variant="span"
                                className="radio_label"
                              >
                                For Group
                                <Typography
                                  variant="span"
                                  className="radio_label_normal"
                                >
                                  (if you want to post a job for group)
                                </Typography>
                              </Typography>
                            </Box>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Type of College/University
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
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder = "State";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Subject
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={jobcategory}
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
                                      "Select Subject";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Suggested Job Title
                                </Typography>
                                <TextField
                                  disabled
                                  fullWidth
                                  classes={{
                                    root: "textfielddisabled",
                                  }}
                                  id="standard-disabled"
                                  placeholder="Suggested Job Title"
                                  value="Class XI and XII Biology Teacher for Medical and Engineering Coaching Institute"
                                />
                              </Grid>
                            </Grid>
                            <Box component="div" className="row">
                              <BlueRadio
                                checked={selectedValue === "a"}
                                onChange={handleChange}
                                value="a"
                                name="radio-button-demo"
                                inputProps={{
                                  "aria-label": "c",
                                }}
                                className="radio_custom"
                              />
                              <Typography
                                variant="span"
                                className="radio_label"
                              >
                                I want a custom job title
                              </Typography>
                            </Box>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Custom Job Title
                                </Typography>
                                <TextField
                                  fullWidth
                                  classes={{
                                    root: "textfieldnormal",
                                  }}
                                  id="standard-normal"
                                  placeholder="Custom Job Title"
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Minimum Work Experience Required
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Minimum Work Experience Required";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Maximum Salary To Be Offered
                                </Typography>
                                <TextField
                                  fullWidth
                                  classes={{
                                    root: "textfieldnormal_w_icon",
                                  }}
                                  id="standard-normal"
                                  placeholder="Maximum Salary To Be Offered"
                                  InputProps={{
                                    endAdornment: (
                                      <InputAdornment>
                                        <Typography className="paicon fontweight700">
                                          P.A
                                        </Typography>
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={2}
                            >
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Employment Type
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Select Employment Type";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Maximum Notice Period
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Maximum Notice Period";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Education Required
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={jobcategory}
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
                                      "Select Education Required";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Box
                              component="div"
                              className="location-accordion common-accordion"
                            >
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="accordion-header"
                                >
                                  <Typography className="">Location</Typography>
                                  <Button className="transparentbtn noborder marginautoright mt-1">
                                    <RemoveRedIcon />
                                  </Button>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Box
                                    component="div"
                                    className="fullwidth_100percent"
                                  >
                                    <Grid
                                      container
                                      direction="row"
                                      justifyContent="space-between"
                                      spacing={3}
                                    >
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          Country
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={experience}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
                                          classes={{
                                            paper: "BlueAutoCompletePaper",
                                          }}
                                          renderInput={(params) => {
                                            params.inputProps.className =
                                              "noborderinput";
                                            params.InputProps.className =
                                              "noBeforeAfter";
                                            params.InputProps.placeholder =
                                              "Country";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          State
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={jobcategory}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
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
                                              "State";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                    </Grid>

                                    <Grid
                                      container
                                      direction="row"
                                      justifyContent="space-between"
                                      spacing={3}
                                    >
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          City
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={experience}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
                                          classes={{
                                            paper: "BlueAutoCompletePaper",
                                          }}
                                          renderInput={(params) => {
                                            params.inputProps.className =
                                              "noborderinput";
                                            params.InputProps.className =
                                              "noBeforeAfter";
                                            params.InputProps.placeholder =
                                              "City";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          No. Of Vacancies Available
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          classes={{
                                            root: "textfieldnormal",
                                          }}
                                          id="standard-normal"
                                          placeholder="No. Of Vacancies Available"
                                        />
                                      </Grid>
                                    </Grid>
                                    <Box component="div" className="row">
                                      <BlueRadio
                                        checked={selectedValue === "a"}
                                        onChange={handleChange}
                                        value="a"
                                        name="radio-button-demo"
                                        inputProps={{
                                          "aria-label": "c",
                                        }}
                                        className="radio_custom"
                                      />
                                      <Typography
                                        variant="span"
                                        className="radio_label"
                                      >
                                        Set As Default
                                      </Typography>
                                    </Box>
                                    <Box component="div" className="buttonarea">
                                      <Button
                                        className="fullwidth_100percent lightbtnwithicon locationbtn"
                                        startIcon={<AddIcon />}
                                      >
                                        Add Locations
                                      </Button>
                                    </Box>
                                  </Box>
                                </AccordionDetails>
                              </Accordion>
                            </Box>

                            <Box component="div" className="skillsdiv">
                              <Accordion
                                square
                                expanded={expanded === "panel1"}
                                onChange={handleChangeaccordion("panel1")}
                                className="withoutarrow-accordion skills-accordion"
                              >
                                <AccordionSummary
                                  aria-controls="panel1d-content"
                                  id="panel1d-header"
                                >
                                  <Typography>Skills</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Autocomplete
                                    multiple
                                    id="checkboxes-tags-demo"
                                    options={top100Films}
                                    className="fullwidth_100percent BlueDropDown"
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.title}
                                    renderOption={(option, { selected }) => (
                                      <React.Fragment>
                                        <Checkbox
                                          icon={icon}
                                          checkedIcon={checkedIcon}
                                          style={{
                                            marginRight: 8,
                                          }}
                                          checked={selected}
                                          classes={{
                                            root: "bluecheckbox",
                                          }}
                                        />
                                        {option.title}
                                      </React.Fragment>
                                    )}
                                    style={{ width: 500 }}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        placeholder="Search Skills"
                                      />
                                    )}
                                  />
                                </AccordionDetails>
                              </Accordion>
                            </Box>

                            <Box component="div" className="jddiv">
                              <Accordion
                                square
                                expanded={expanded === "panel1"}
                                onChange={handleChangeaccordion("panel1")}
                                className="withoutarrow-accordion skills-accordion"
                              >
                                <AccordionSummary
                                  aria-controls="panel2d-content"
                                  id="panel2d-header"
                                >
                                  <Typography>Job Description</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Box
                                    component="div"
                                    className="jdarea fullwidth_100percent"
                                  >
                                    <Box component="div" className="jddivcont">
                                      <Autocomplete
                                        id="combo-box-demo"
                                        className="BlueSelectDropdown"
                                        options={experience}
                                        getOptionLabel={(option) => option.name}
                                        classes={{
                                          paper: "BlueAutoCompletePaper",
                                        }}
                                        renderInput={(params) => {
                                          params.inputProps.className =
                                            "noborderinput";
                                          params.InputProps.className =
                                            "noBeforeAfter";
                                          params.InputProps.placeholder =
                                            "Search Subjects Description";
                                          return (
                                            <TextField
                                              disabled
                                              inputStyle={{
                                                cursor: "none",
                                              }}
                                              {...params}
                                              onKeyPress={(e) =>
                                                e.preventDefault()
                                              }
                                            />
                                          );
                                        }}
                                      />
                                      <Button
                                        className="marginautoright darkbluecolor templatebtn"
                                        onClick={handleTemplateOpen}
                                      >
                                        Save as Template
                                      </Button>
                                      <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className="modal"
                                        open={openmodal}
                                        onClose={handleTemplateClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                          timeout: 500,
                                        }}
                                      >
                                        <Fade in={openmodal}>
                                          <Box
                                            component="div"
                                            className="modalcont"
                                          >
                                            <Typography
                                              variant="h6"
                                              id="transition-modal-title"
                                              className="fontweight700"
                                            >
                                              Save as Template
                                            </Typography>
                                            <Typography
                                              id="transition-modal-description"
                                              className="mb-2"
                                            >
                                              Title
                                            </Typography>
                                            <TextField
                                              fullWidth
                                              classes={{
                                                root: "textfieldnormal",
                                              }}
                                              id="standard-normal"
                                              placeholder="Title of the Template"
                                            />
                                            <Button className="fullwidth_100percent drkbluebtn">
                                              Save
                                            </Button>
                                          </Box>
                                        </Fade>
                                      </Modal>
                                    </Box>
                                    <Box component="div" className="messagebox">
                                      <TextareaAutosize
                                        minRows={6}
                                        className="textareablue fullwidth_100percent"
                                        id="standard-normal"
                                        placeholder="Type your Job Description"
                                      />
                                    </Box>
                                  </Box>
                                </AccordionDetails>
                              </Accordion>
                            </Box>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={2}
                              className="buttonrow"
                            >
                              <Grid item lg={4} md={4} xs={12}>
                                <Button
                                  className="fullwidth_100percent viewbtn"
                                  startIcon={<EyeIcon />}
                                  onClick={handlepostingOpen}
                                >
                                  Preview Job Posting
                                </Button>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal jobdescriptionmodal"
                                  open={openmodalposting}
                                  onClose={handlepostingClose}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodalposting}>
                                    <Box component="div" className="modalcont">
                                      <Box
                                        component="div"
                                        className="topmodalcont"
                                      >
                                        <Typography
                                          className="heading_title"
                                          variant="span"
                                        >
                                          Job Description
                                        </Typography>
                                        <Button
                                          onClick={handlepostingClose}
                                          className="closearea"
                                        >
                                          <CloseIcon />
                                        </Button>
                                      </Box>
                                      <Box component="div" className="maindiv">
                                        <Box
                                          component="div"
                                          className="maincont"
                                        >
                                          <Box
                                            component="div"
                                            className="imgarea"
                                          >
                                            <img
                                              src={BASE_URL + BigSchlImg}
                                              alt=""
                                            />
                                            <JdBg />
                                          </Box>
                                          <Box
                                            component="div"
                                            className="title"
                                          >
                                            <Typography
                                              variant="span"
                                              className="schoolname"
                                            >
                                              DPS School
                                            </Typography>
                                            <Typography
                                              variant="span"
                                              className="titleheading"
                                            >
                                              Primary School Teacher
                                            </Typography>
                                          </Box>
                                          <Box
                                            component="div"
                                            className="iconreq"
                                          >
                                            <List>
                                              <ListItem>
                                                <YearsIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  3 Years Min.
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <SalaryIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan fontweight700"
                                                >
                                                  6.5 LPA Max.
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <BagIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  Full Time / Permanent
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <LocationIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  Kolkata, West Bengal
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <VacanciesIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  5 Vacancies
                                                </Typography>
                                              </ListItem>
                                            </List>
                                          </Box>
                                          <Box
                                            component="div"
                                            className="details"
                                          >
                                            <Typography
                                              variant="span"
                                              className="subhead"
                                            >
                                              Employment Details
                                            </Typography>
                                            <List className="empdetul">
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Roles
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  School Chemistry Teacher
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Level
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  Class X - XII
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Subject
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  Chemistry
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Education Requirements
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  B.Sc / B.Ed
                                                </Typography>
                                              </ListItem>
                                            </List>
                                            <Box
                                              component="div"
                                              className="details"
                                            >
                                              <Typography
                                                variant="span"
                                                className="subhead"
                                              >
                                                Job Description
                                              </Typography>
                                              <Typography
                                                variant="span"
                                                className="subsubtext"
                                              >
                                                Lorem ipsum dolor sit amet,
                                                consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor
                                                invidunt ut labore et dolore
                                                magna aliquyam erat, sed diam
                                                voluptua. At vero eos et accusam
                                                et justo duo dolores et ea
                                                rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem
                                              </Typography>
                                            </Box>
                                            <Box
                                              component="div"
                                              className="skillscont"
                                            >
                                              <Typography
                                                variant="span"
                                                className="subhead"
                                              >
                                                Skills Required
                                              </Typography>
                                              <List>
                                                <ListItem className="skilltag">
                                                  Reasoning
                                                </ListItem>
                                                <ListItem className="skilltag">
                                                  Apitutde
                                                </ListItem>
                                                <ListItem className="skilltag">
                                                  Problem Solving
                                                </ListItem>
                                              </List>
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Fade>
                                </Modal>
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Button
                                  className="fullwidth_100percent savebtn"
                                  onClick={handleSaveLatereOpen}
                                >
                                  Save for Later
                                </Button>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal"
                                  open={openmodallater}
                                  onClose={handleSaveLaterClose}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodallater}>
                                    <Box component="div" className="modalcont">
                                      <Typography
                                        variant="h6"
                                        id="transition-modal-title"
                                        className="fontweight700"
                                      >
                                        Save for Later
                                      </Typography>
                                      <Typography
                                        id="transition-modal-description"
                                        className="mb-2"
                                      >
                                        Job Title
                                      </Typography>
                                      <TextField
                                        fullWidth
                                        classes={{
                                          root: "textfieldnormal",
                                        }}
                                        id="standard-normal"
                                        placeholder="Job Title"
                                      />
                                      <Button
                                        className="fullwidth_100percent drkbluebtn"
                                        onClick={(e) => {
                                          handleSuccessOpen();
                                          handleSaveLaterClose();
                                        }}
                                        onClose={handleSaveLaterClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                          timeout: 500,
                                        }}
                                      >
                                        Save
                                      </Button>
                                    </Box>
                                  </Fade>
                                </Modal>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal"
                                  open={openmodalsuccess}
                                  onClose={handleSuccessClose}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodalsuccess}>
                                    <Box component="div" className="modalcont">
                                      <Box
                                        component="div"
                                        className="successimg"
                                      >
                                        <SuccessIcon />
                                      </Box>
                                      <Typography
                                        id="transition-modal-description"
                                        className="mb-2 text-center fontweight700 font20 block"
                                      >
                                        New Job Posting is successfully saved
                                        for later.
                                      </Typography>
                                    </Box>
                                  </Fade>
                                </Modal>
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Button className="fullwidth_100percent postbtn">
                                  Post Job
                                </Button>
                              </Grid>
                            </Grid>
                          </TabPanel>
                          <TabPanel
                            value={value}
                            index={1}
                            className="appbar_tabpanel"
                          >
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Candidates Looking To Work In
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
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Select Candidates Looking To Work In";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Job Category
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={jobcategory}
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
                                      "Select Job Category";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Type of Coaching Institute
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
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Select Type of Coaching Institute";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Level
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={jobcategory}
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
                                      "Select Level";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Level
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
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Select Level";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Suggested Job Title
                                </Typography>
                                <TextField
                                  disabled
                                  fullWidth
                                  classes={{
                                    root: "textfielddisabled",
                                  }}
                                  id="standard-disabled"
                                  placeholder="Suggested Job Title"
                                />
                              </Grid>
                            </Grid>
                            <Box component="div" className="row">
                              <BlueRadio
                                checked={selectedValue === "a"}
                                onChange={handleChange}
                                value="a"
                                name="radio-button-demo"
                                inputProps={{
                                  "aria-label": "c",
                                }}
                                className="radio_custom"
                              />
                              <Typography
                                variant="span"
                                className="radio_label"
                              >
                                I want a custom job title
                              </Typography>
                            </Box>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Custom Job Title
                                </Typography>
                                <TextField
                                  fullWidth
                                  classes={{
                                    root: "textfieldnormal",
                                  }}
                                  id="standard-normal"
                                  placeholder="Custom Job Title"
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Minimum Work Experience Required
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Minimum Work Experience Required";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Maximum Salary To Be Offered
                                </Typography>
                                <TextField
                                  fullWidth
                                  classes={{
                                    root: "textfieldnormal_w_icon",
                                  }}
                                  id="standard-normal"
                                  placeholder="Maximum Salary To Be Offered"
                                  InputProps={{
                                    endAdornment: (
                                      <InputAdornment>
                                        <Typography className="paicon fontweight700">
                                          P.A
                                        </Typography>
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={2}
                            >
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Employment Type
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Select Employment Type";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Maximum Notice Period
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Maximum Notice Period";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Education Required
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={jobcategory}
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
                                      "Select Education Required";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Box
                              component="div"
                              className="location-accordion common-accordion"
                            >
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="accordion-header"
                                >
                                  <Typography className="">Location</Typography>
                                  <Button className="transparentbtn noborder marginautoright mt-1">
                                    <RemoveRedIcon />
                                  </Button>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Box
                                    component="div"
                                    className="fullwidth_100percent"
                                  >
                                    <Grid
                                      container
                                      direction="row"
                                      justifyContent="space-between"
                                      spacing={3}
                                    >
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          Country
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={experience}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
                                          classes={{
                                            paper: "BlueAutoCompletePaper",
                                          }}
                                          renderInput={(params) => {
                                            params.inputProps.className =
                                              "noborderinput";
                                            params.InputProps.className =
                                              "noBeforeAfter";
                                            params.InputProps.placeholder =
                                              "Country";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          State
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={jobcategory}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
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
                                              "State";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                    </Grid>

                                    <Grid
                                      container
                                      direction="row"
                                      justifyContent="space-between"
                                      spacing={3}
                                    >
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          City
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={experience}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
                                          classes={{
                                            paper: "BlueAutoCompletePaper",
                                          }}
                                          renderInput={(params) => {
                                            params.inputProps.className =
                                              "noborderinput";
                                            params.InputProps.className =
                                              "noBeforeAfter";
                                            params.InputProps.placeholder =
                                              "City";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          No. Of Vacancies Available
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          classes={{
                                            root: "textfieldnormal",
                                          }}
                                          id="standard-normal"
                                          placeholder="No. Of Vacancies Available"
                                        />
                                      </Grid>
                                    </Grid>
                                    <Box component="div" className="row">
                                      <BlueRadio
                                        checked={selectedValue === "a"}
                                        onChange={handleChange}
                                        value="a"
                                        name="radio-button-demo"
                                        inputProps={{
                                          "aria-label": "c",
                                        }}
                                        className="radio_custom"
                                      />
                                      <Typography
                                        variant="span"
                                        className="radio_label"
                                      >
                                        Set As Default
                                      </Typography>
                                    </Box>
                                    <Box component="div" className="buttonarea">
                                      <Button
                                        className="fullwidth_100percent lightbtnwithicon locationbtn"
                                        startIcon={<AddIcon />}
                                      >
                                        Add Locations
                                      </Button>
                                    </Box>
                                  </Box>
                                </AccordionDetails>
                              </Accordion>
                            </Box>

                            <Box component="div" className="skillsdiv">
                              <Accordion
                                square
                                expanded={expanded === "panel1"}
                                onChange={handleChangeaccordion("panel1")}
                                className="withoutarrow-accordion skills-accordion"
                              >
                                <AccordionSummary
                                  aria-controls="panel1d-content"
                                  id="panel1d-header"
                                >
                                  <Typography>Skills</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Autocomplete
                                    multiple
                                    id="checkboxes-tags-demo"
                                    options={top100Films}
                                    className="fullwidth_100percent BlueDropDown"
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.title}
                                    renderOption={(option, { selected }) => (
                                      <React.Fragment>
                                        <Checkbox
                                          icon={icon}
                                          checkedIcon={checkedIcon}
                                          style={{
                                            marginRight: 8,
                                          }}
                                          checked={selected}
                                          classes={{
                                            root: "bluecheckbox",
                                          }}
                                        />
                                        {option.title}
                                      </React.Fragment>
                                    )}
                                    style={{ width: 500 }}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        placeholder="Search Skills"
                                      />
                                    )}
                                  />
                                </AccordionDetails>
                              </Accordion>
                            </Box>

                            <Box component="div" className="jddiv">
                              <Accordion
                                square
                                expanded={expanded === "panel1"}
                                onChange={handleChangeaccordion("panel1")}
                                className="withoutarrow-accordion skills-accordion"
                              >
                                <AccordionSummary
                                  aria-controls="panel2d-content"
                                  id="panel2d-header"
                                >
                                  <Typography>Job Description</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Box
                                    component="div"
                                    className="jdarea fullwidth_100percent"
                                  >
                                    <Box component="div" className="jddivcont">
                                      <Autocomplete
                                        id="combo-box-demo"
                                        className="BlueSelectDropdown"
                                        options={experience}
                                        getOptionLabel={(option) => option.name}
                                        classes={{
                                          paper: "BlueAutoCompletePaper",
                                        }}
                                        renderInput={(params) => {
                                          params.inputProps.className =
                                            "noborderinput";
                                          params.InputProps.className =
                                            "noBeforeAfter";
                                          params.InputProps.placeholder =
                                            "Search Subjects Description";
                                          return (
                                            <TextField
                                              disabled
                                              inputStyle={{
                                                cursor: "none",
                                              }}
                                              {...params}
                                              onKeyPress={(e) =>
                                                e.preventDefault()
                                              }
                                            />
                                          );
                                        }}
                                      />
                                      <Button
                                        className="marginautoright darkbluecolor templatebtn"
                                        onClick={handleTemplateOpen}
                                      >
                                        Save as Template
                                      </Button>
                                      <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className="modal"
                                        open={openmodal}
                                        onClose={handleTemplateClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                          timeout: 500,
                                        }}
                                      >
                                        <Fade in={openmodal}>
                                          <Box
                                            component="div"
                                            className="modalcont"
                                          >
                                            <Typography
                                              variant="h6"
                                              id="transition-modal-title"
                                              className="fontweight700"
                                            >
                                              Save as Template
                                            </Typography>
                                            <Typography
                                              id="transition-modal-description"
                                              className="mb-2"
                                            >
                                              Title
                                            </Typography>
                                            <TextField
                                              fullWidth
                                              classes={{
                                                root: "textfieldnormal",
                                              }}
                                              id="standard-normal"
                                              placeholder="Title of the Template"
                                            />
                                            <Button className="fullwidth_100percent drkbluebtn">
                                              Save
                                            </Button>
                                          </Box>
                                        </Fade>
                                      </Modal>
                                    </Box>
                                    <Box component="div" className="messagebox">
                                      <TextareaAutosize
                                        minRows={6}
                                        className="textareablue fullwidth_100percent"
                                        id="standard-normal"
                                        placeholder="Type your Job Description"
                                      />
                                    </Box>
                                  </Box>
                                </AccordionDetails>
                              </Accordion>
                            </Box>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={2}
                              className="buttonrow"
                            >
                              <Grid item lg={4} md={4} xs={12}>
                                <Button
                                  className="fullwidth_100percent viewbtn"
                                  startIcon={<EyeIcon />}
                                  onClick={handlepostingOpen}
                                >
                                  Preview Job Posting
                                </Button>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal jobdescriptionmodal"
                                  open={openmodalposting}
                                  onClose={handlepostingClose}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodalposting}>
                                    <Box component="div" className="modalcont">
                                      <Box
                                        component="div"
                                        className="topmodalcont"
                                      >
                                        <Typography
                                          className="heading_title"
                                          variant="span"
                                        >
                                          Job Description
                                        </Typography>
                                        <Button
                                          onClick={handlepostingClose}
                                          className="closearea"
                                        >
                                          <CloseIcon />
                                        </Button>
                                      </Box>
                                      <Box component="div" className="maindiv">
                                        <Box
                                          component="div"
                                          className="maincont"
                                        >
                                          <Box
                                            component="div"
                                            className="imgarea"
                                          >
                                            <img
                                              src={BASE_URL + BigSchlImg}
                                              alt=""
                                            />
                                            <JdBg />
                                          </Box>
                                          <Box
                                            component="div"
                                            className="title"
                                          >
                                            <Typography
                                              variant="span"
                                              className="schoolname"
                                            >
                                              DPS School
                                            </Typography>
                                            <Typography
                                              variant="span"
                                              className="titleheading"
                                            >
                                              Primary School Teacher
                                            </Typography>
                                          </Box>
                                          <Box
                                            component="div"
                                            className="iconreq"
                                          >
                                            <List>
                                              <ListItem>
                                                <YearsIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  3 Years Min.
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <SalaryIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan fontweight700"
                                                >
                                                  6.5 LPA Max.
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <BagIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  Full Time / Permanent
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <LocationIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  Kolkata, West Bengal
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <VacanciesIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  5 Vacancies
                                                </Typography>
                                              </ListItem>
                                            </List>
                                          </Box>
                                          <Box
                                            component="div"
                                            className="details"
                                          >
                                            <Typography
                                              variant="span"
                                              className="subhead"
                                            >
                                              Employment Details
                                            </Typography>
                                            <List className="empdetul">
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Roles
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  School Chemistry Teacher
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Level
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  Class X - XII
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Subject
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  Chemistry
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Education Requirements
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  B.Sc / B.Ed
                                                </Typography>
                                              </ListItem>
                                            </List>
                                            <Box
                                              component="div"
                                              className="details"
                                            >
                                              <Typography
                                                variant="span"
                                                className="subhead"
                                              >
                                                Job Description
                                              </Typography>
                                              <Typography
                                                variant="span"
                                                className="subsubtext"
                                              >
                                                Lorem ipsum dolor sit amet,
                                                consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor
                                                invidunt ut labore et dolore
                                                magna aliquyam erat, sed diam
                                                voluptua. At vero eos et accusam
                                                et justo duo dolores et ea
                                                rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem
                                              </Typography>
                                            </Box>
                                            <Box
                                              component="div"
                                              className="skillscont"
                                            >
                                              <Typography
                                                variant="span"
                                                className="subhead"
                                              >
                                                Skills Required
                                              </Typography>
                                              <List>
                                                <ListItem className="skilltag">
                                                  Reasoning
                                                </ListItem>
                                                <ListItem className="skilltag">
                                                  Apitutde
                                                </ListItem>
                                                <ListItem className="skilltag">
                                                  Problem Solving
                                                </ListItem>
                                              </List>
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Fade>
                                </Modal>
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Button
                                  className="fullwidth_100percent savebtn"
                                  onClick={handleSaveLatereOpen}
                                >
                                  Save for Later
                                </Button>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal"
                                  open={openmodallater}
                                  onClose={handleSaveLaterClose}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodallater}>
                                    <Box component="div" className="modalcont">
                                      <Typography
                                        variant="h6"
                                        id="transition-modal-title"
                                        className="fontweight700"
                                      >
                                        Save for Later
                                      </Typography>
                                      <Typography
                                        id="transition-modal-description"
                                        className="mb-2"
                                      >
                                        Job Title
                                      </Typography>
                                      <TextField
                                        fullWidth
                                        classes={{
                                          root: "textfieldnormal",
                                        }}
                                        id="standard-normal"
                                        placeholder="Job Title"
                                      />
                                      <Button
                                        className="fullwidth_100percent drkbluebtn"
                                        onClick={(e) => {
                                          handleSuccessOpen();
                                          handleSaveLaterClose();
                                        }}
                                        onClose={handleSaveLaterClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                          timeout: 500,
                                        }}
                                      >
                                        Save
                                      </Button>
                                    </Box>
                                  </Fade>
                                </Modal>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal"
                                  open={openmodalsuccess}
                                  onClose={handleSuccessClose}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodalsuccess}>
                                    <Box component="div" className="modalcont">
                                      <Box
                                        component="div"
                                        className="successimg"
                                      >
                                        <SuccessIcon />
                                      </Box>
                                      <Typography
                                        id="transition-modal-description"
                                        className="mb-2 text-center fontweight700 font20 block"
                                      >
                                        New Job Posting is successfully saved
                                        for later.
                                      </Typography>
                                    </Box>
                                  </Fade>
                                </Modal>
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Button className="fullwidth_100percent postbtn">
                                  Create Job and Send Invites
                                </Button>
                              </Grid>
                            </Grid>
                          </TabPanel>
                        </Box>
                      </div>
                    </Fade>
                  </Modal>
                  {/* End of After hitting Create Job Posting Modal */}
                </Box>
              </div>
            </Fade>
          </Modal>
          <Button
            startIcon={<SaveIcon />}
            className="lightbluecolor border8"
            onClick={handleOpenSave2}
          >
            Save
          </Button>
          {/* Mod window after hit on save (Multiple candidates save) */}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="modal"
            open={openSave2}
            onClose={handleCloseSave2}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openSave2}>
              <div className="modalcontmid">
                <Box component="div" className="dis_flex titleheading">
                  <Typography variant="h6">
                    Are you sure you want to save the candidate(s)?
                  </Typography>
                  <Button
                    className="marginautoright transparentbtn noborder"
                    onClick={handleCloseSave2}
                  >
                    <CloseIcon />
                  </Button>
                </Box>
                <Box component="div" className="midbody">
                  <Typography variant="span" className="label font14">
                    An Existing Job Posting
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    className="BlueSelectDropdown mt-2"
                    options={coaching}
                    getOptionLabel={(option) => option.name}
                    classes={{
                      paper: "BlueAutoCompletePaper",
                    }}
                    renderInput={(params) => {
                      params.inputProps.className = "noborderinput";
                      params.InputProps.className = "noBeforeAfter";
                      params.InputProps.placeholder =
                        "Select an Existing Job Posting";
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
                <Box component="div" className="button_confirm_area">
                  <Button
                    className="darkbluecolor whitecolortext border8 pe-4 pt-2 ps-4 pb-2"
                    onClick={handleOpenSaveModal}
                  >
                    Save
                  </Button>

                  {/* After hitting Next Modal window */}

                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={openSaveModal}
                    onClose={handleCloseSaveModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={openSaveModal}>
                      <div className="modalcontsmall">
                        <BookMark />
                        <Typography variant="h6">
                          Are you sure you want to Save the selected
                          candidate(s) profile?
                        </Typography>
                        <Box component="div" className="button_confirm_area">
                          <Button
                            className="lightbluecolor border8"
                            onClick={handleCloseSaveModal}
                          >
                            No
                          </Button>
                          <Button className="darkbluecolor whitecolortext border8">
                            Yes
                          </Button>
                        </Box>
                      </div>
                    </Fade>
                  </Modal>

                  {/* End After hitting Next Modal window */}
                </Box>
                <Box component="div" className="button_confirm_area">
                  <Typography variant="span" className="label font14">
                    Or
                  </Typography>
                </Box>
                <Box component="div" className="button_confirm_area">
                  <Button
                    className="darkbluecolor whitecolortext border8 pe-4 pt-2 ps-4 pb-2"
                    onClick={handleJobPosting2}
                  >
                    Create New Job Posting
                  </Button>
                  {/* After hitting Create Job Posting Modal */}
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={openJobPosting2}
                    onClose={handleCloseJobPosting2}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={openJobPosting2}>
                      <div className="modalcont JobPostingModal">
                        <Box component="div" className="dis_flex titleheading">
                          <Typography variant="h6">
                            New Job Posting and Invites
                          </Typography>
                          <Button
                            className="marginautoright transparentbtn noborder"
                            onClick={handleCloseJobPosting2}
                          >
                            <CloseIcon />
                          </Button>
                        </Box>
                        <Box component="div" className="formdiv">
                          <AppBar position="static" className="appbar">
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              aria-label="simple tabs example"
                              className="appbartab"
                            >
                              <Tab
                                label="I want to hire from own domain"
                                {...a11yProps(0)}
                                className="appbar_btn"
                              />
                              <Tab
                                label="I want to hire from others domain"
                                {...a11yProps(1)}
                                className="appbar_btn apppbar_btn_disabled"
                                disabled
                              />
                            </Tabs>
                          </AppBar>
                          <TabPanel
                            value={value}
                            index={0}
                            className="appbar_tabpanel"
                          >
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Hiring for
                                </Typography>
                                <TextField
                                  disabled
                                  fullWidth
                                  classes={{
                                    root: "textfielddisabled",
                                  }}
                                  id="standard-disabled"
                                  placeholder="Suggested Job Title"
                                  value="AICT College"
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Job Category
                                </Typography>
                                <TextField
                                  disabled
                                  fullWidth
                                  classes={{
                                    root: "textfielddisabled",
                                  }}
                                  id="standard-disabled"
                                  placeholder="Suggested Job Title"
                                  value="Academic"
                                />
                              </Grid>
                            </Grid>
                            <Box component="div" className="row">
                              <BlueRadio
                                checked={selectedValue === "a"}
                                onChange={handleChange}
                                value="a"
                                name="radio-button-demo"
                                inputProps={{
                                  "aria-label": "c",
                                }}
                                className="radio_custom"
                              />
                              <Typography
                                variant="span"
                                className="radio_label"
                              >
                                For Group
                                <Typography
                                  variant="span"
                                  className="radio_label_normal"
                                >
                                  (if you want to post a job for group)
                                </Typography>
                              </Typography>
                            </Box>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Type of College/University
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
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder = "State";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Subject
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={jobcategory}
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
                                      "Select Subject";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Suggested Job Title
                                </Typography>
                                <TextField
                                  disabled
                                  fullWidth
                                  classes={{
                                    root: "textfielddisabled",
                                  }}
                                  id="standard-disabled"
                                  placeholder="Suggested Job Title"
                                  value="Class XI and XII Biology Teacher for Medical and Engineering Coaching Institute"
                                />
                              </Grid>
                            </Grid>
                            <Box component="div" className="row">
                              <BlueRadio
                                checked={selectedValue === "a"}
                                onChange={handleChange}
                                value="a"
                                name="radio-button-demo"
                                inputProps={{
                                  "aria-label": "c",
                                }}
                                className="radio_custom"
                              />
                              <Typography
                                variant="span"
                                className="radio_label"
                              >
                                I want a custom job title
                              </Typography>
                            </Box>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Custom Job Title
                                </Typography>
                                <TextField
                                  fullWidth
                                  classes={{
                                    root: "textfieldnormal",
                                  }}
                                  id="standard-normal"
                                  placeholder="Custom Job Title"
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Minimum Work Experience Required
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Minimum Work Experience Required";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Maximum Salary To Be Offered
                                </Typography>
                                <TextField
                                  fullWidth
                                  classes={{
                                    root: "textfieldnormal_w_icon",
                                  }}
                                  id="standard-normal"
                                  placeholder="Maximum Salary To Be Offered"
                                  InputProps={{
                                    endAdornment: (
                                      <InputAdornment>
                                        <Typography className="paicon fontweight700">
                                          P.A
                                        </Typography>
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={2}
                            >
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Employment Type
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Select Employment Type";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Maximum Notice Period
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Maximum Notice Period";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Education Required
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={jobcategory}
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
                                      "Select Education Required";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Box
                              component="div"
                              className="location-accordion common-accordion"
                            >
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="accordion-header"
                                >
                                  <Typography className="">Location</Typography>
                                  <Button className="transparentbtn noborder marginautoright mt-1">
                                    <RemoveRedIcon />
                                  </Button>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Box
                                    component="div"
                                    className="fullwidth_100percent"
                                  >
                                    <Grid
                                      container
                                      direction="row"
                                      justifyContent="space-between"
                                      spacing={3}
                                    >
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          Country
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={experience}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
                                          classes={{
                                            paper: "BlueAutoCompletePaper",
                                          }}
                                          renderInput={(params) => {
                                            params.inputProps.className =
                                              "noborderinput";
                                            params.InputProps.className =
                                              "noBeforeAfter";
                                            params.InputProps.placeholder =
                                              "Country";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          State
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={jobcategory}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
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
                                              "State";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                    </Grid>

                                    <Grid
                                      container
                                      direction="row"
                                      justifyContent="space-between"
                                      spacing={3}
                                    >
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          City
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={experience}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
                                          classes={{
                                            paper: "BlueAutoCompletePaper",
                                          }}
                                          renderInput={(params) => {
                                            params.inputProps.className =
                                              "noborderinput";
                                            params.InputProps.className =
                                              "noBeforeAfter";
                                            params.InputProps.placeholder =
                                              "City";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          No. Of Vacancies Available
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          classes={{
                                            root: "textfieldnormal",
                                          }}
                                          id="standard-normal"
                                          placeholder="No. Of Vacancies Available"
                                        />
                                      </Grid>
                                    </Grid>
                                    <Box component="div" className="row">
                                      <BlueRadio
                                        checked={selectedValue === "a"}
                                        onChange={handleChange}
                                        value="a"
                                        name="radio-button-demo"
                                        inputProps={{
                                          "aria-label": "c",
                                        }}
                                        className="radio_custom"
                                      />
                                      <Typography
                                        variant="span"
                                        className="radio_label"
                                      >
                                        Set As Default
                                      </Typography>
                                    </Box>
                                    <Box component="div" className="buttonarea">
                                      <Button
                                        className="fullwidth_100percent lightbtnwithicon locationbtn"
                                        startIcon={<AddIcon />}
                                      >
                                        Add Locations
                                      </Button>
                                    </Box>
                                  </Box>
                                </AccordionDetails>
                              </Accordion>
                            </Box>

                            <Box component="div" className="skillsdiv">
                              <Accordion
                                square
                                expanded={expanded === "panel1"}
                                onChange={handleChangeaccordion("panel1")}
                                className="withoutarrow-accordion skills-accordion"
                              >
                                <AccordionSummary
                                  aria-controls="panel1d-content"
                                  id="panel1d-header"
                                >
                                  <Typography>Skills</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Autocomplete
                                    multiple
                                    id="checkboxes-tags-demo"
                                    options={top100Films}
                                    className="fullwidth_100percent BlueDropDown"
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.title}
                                    renderOption={(option, { selected }) => (
                                      <React.Fragment>
                                        <Checkbox
                                          icon={icon}
                                          checkedIcon={checkedIcon}
                                          style={{
                                            marginRight: 8,
                                          }}
                                          checked={selected}
                                          classes={{
                                            root: "bluecheckbox",
                                          }}
                                        />
                                        {option.title}
                                      </React.Fragment>
                                    )}
                                    style={{ width: 500 }}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        placeholder="Search Skills"
                                      />
                                    )}
                                  />
                                </AccordionDetails>
                              </Accordion>
                            </Box>

                            <Box component="div" className="jddiv">
                              <Accordion
                                square
                                expanded={expanded === "panel1"}
                                onChange={handleChangeaccordion("panel1")}
                                className="withoutarrow-accordion skills-accordion"
                              >
                                <AccordionSummary
                                  aria-controls="panel2d-content"
                                  id="panel2d-header"
                                >
                                  <Typography>Job Description</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Box
                                    component="div"
                                    className="jdarea fullwidth_100percent"
                                  >
                                    <Box component="div" className="jddivcont">
                                      <Autocomplete
                                        id="combo-box-demo"
                                        className="BlueSelectDropdown"
                                        options={experience}
                                        getOptionLabel={(option) => option.name}
                                        classes={{
                                          paper: "BlueAutoCompletePaper",
                                        }}
                                        renderInput={(params) => {
                                          params.inputProps.className =
                                            "noborderinput";
                                          params.InputProps.className =
                                            "noBeforeAfter";
                                          params.InputProps.placeholder =
                                            "Search Subjects Description";
                                          return (
                                            <TextField
                                              disabled
                                              inputStyle={{
                                                cursor: "none",
                                              }}
                                              {...params}
                                              onKeyPress={(e) =>
                                                e.preventDefault()
                                              }
                                            />
                                          );
                                        }}
                                      />
                                      <Button
                                        className="marginautoright darkbluecolor templatebtn"
                                        onClick={handleTemplate2Open2}
                                      >
                                        Save as Template
                                      </Button>
                                      <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className="modal"
                                        open={openmodaltemplate2}
                                        onClose={handleTemplate2Close2}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                          timeout: 500,
                                        }}
                                      >
                                        <Fade in={openmodaltemplate2}>
                                          <Box
                                            component="div"
                                            className="modalcont"
                                          >
                                            <Typography
                                              variant="h6"
                                              id="transition-modal-title"
                                              className="fontweight700"
                                            >
                                              Save as Template
                                            </Typography>
                                            <Typography
                                              id="transition-modal-description"
                                              className="mb-2"
                                            >
                                              Title
                                            </Typography>
                                            <TextField
                                              fullWidth
                                              classes={{
                                                root: "textfieldnormal",
                                              }}
                                              id="standard-normal"
                                              placeholder="Title of the Template"
                                            />
                                            <Button className="fullwidth_100percent drkbluebtn">
                                              Save
                                            </Button>
                                          </Box>
                                        </Fade>
                                      </Modal>
                                    </Box>
                                    <Box component="div" className="messagebox">
                                      <TextareaAutosize
                                        minRows={6}
                                        className="textareablue fullwidth_100percent"
                                        id="standard-normal"
                                        placeholder="Type your Job Description"
                                      />
                                    </Box>
                                  </Box>
                                </AccordionDetails>
                              </Accordion>
                            </Box>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={2}
                              className="buttonrow"
                            >
                              <Grid item lg={4} md={4} xs={12}>
                                <Button
                                  className="fullwidth_100percent viewbtn"
                                  startIcon={<EyeIcon />}
                                  onClick={handlepostingOpen2}
                                >
                                  Preview Job Posting
                                </Button>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal jobdescriptionmodal"
                                  open={openmodalposting2}
                                  onClose={handlepostingClose2}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodalposting2}>
                                    <Box component="div" className="modalcont">
                                      <Box
                                        component="div"
                                        className="topmodalcont"
                                      >
                                        <Typography
                                          className="heading_title"
                                          variant="span"
                                        >
                                          Job Description
                                        </Typography>
                                        <Button
                                          onClick={handlepostingClose2}
                                          className="closearea"
                                        >
                                          <CloseIcon />
                                        </Button>
                                      </Box>
                                      <Box component="div" className="maindiv">
                                        <Box
                                          component="div"
                                          className="maincont"
                                        >
                                          <Box
                                            component="div"
                                            className="imgarea"
                                          >
                                            <img
                                              src={BASE_URL + BigSchlImg}
                                              alt=""
                                            />
                                            <JdBg />
                                          </Box>
                                          <Box
                                            component="div"
                                            className="title"
                                          >
                                            <Typography
                                              variant="span"
                                              className="schoolname"
                                            >
                                              DPS School
                                            </Typography>
                                            <Typography
                                              variant="span"
                                              className="titleheading"
                                            >
                                              Primary School Teacher
                                            </Typography>
                                          </Box>
                                          <Box
                                            component="div"
                                            className="iconreq"
                                          >
                                            <List>
                                              <ListItem>
                                                <YearsIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  3 Years Min.
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <SalaryIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan fontweight700"
                                                >
                                                  6.5 LPA Max.
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <BagIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  Full Time / Permanent
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <LocationIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  Kolkata, West Bengal
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <VacanciesIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  5 Vacancies
                                                </Typography>
                                              </ListItem>
                                            </List>
                                          </Box>
                                          <Box
                                            component="div"
                                            className="details"
                                          >
                                            <Typography
                                              variant="span"
                                              className="subhead"
                                            >
                                              Employment Details
                                            </Typography>
                                            <List className="empdetul">
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Roles
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  School Chemistry Teacher
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Level
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  Class X - XII
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Subject
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  Chemistry
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Education Requirements
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  B.Sc / B.Ed
                                                </Typography>
                                              </ListItem>
                                            </List>
                                            <Box
                                              component="div"
                                              className="details"
                                            >
                                              <Typography
                                                variant="span"
                                                className="subhead"
                                              >
                                                Job Description
                                              </Typography>
                                              <Typography
                                                variant="span"
                                                className="subsubtext"
                                              >
                                                Lorem ipsum dolor sit amet,
                                                consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor
                                                invidunt ut labore et dolore
                                                magna aliquyam erat, sed diam
                                                voluptua. At vero eos et accusam
                                                et justo duo dolores et ea
                                                rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem
                                              </Typography>
                                            </Box>
                                            <Box
                                              component="div"
                                              className="skillscont"
                                            >
                                              <Typography
                                                variant="span"
                                                className="subhead"
                                              >
                                                Skills Required
                                              </Typography>
                                              <List>
                                                <ListItem className="skilltag">
                                                  Reasoning
                                                </ListItem>
                                                <ListItem className="skilltag">
                                                  Apitutde
                                                </ListItem>
                                                <ListItem className="skilltag">
                                                  Problem Solving
                                                </ListItem>
                                              </List>
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Fade>
                                </Modal>
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Button
                                  className="fullwidth_100percent savebtn"
                                  onClick={handleSaveLatereOpen2}
                                >
                                  Save for Later
                                </Button>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal"
                                  open={openmodallater2}
                                  onClose={handleSaveLaterClose2}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodallater2}>
                                    <Box component="div" className="modalcont">
                                      <Typography
                                        variant="h6"
                                        id="transition-modal-title"
                                        className="fontweight700"
                                      >
                                        Save for Later
                                      </Typography>
                                      <Typography
                                        id="transition-modal-description"
                                        className="mb-2"
                                      >
                                        Job Title
                                      </Typography>
                                      <TextField
                                        fullWidth
                                        classes={{
                                          root: "textfieldnormal",
                                        }}
                                        id="standard-normal"
                                        placeholder="Job Title"
                                      />
                                      <Button
                                        className="fullwidth_100percent drkbluebtn"
                                        onClick={(e) => {
                                          handleSuccessOpen();
                                          handleSaveLaterClose2();
                                        }}
                                        onClose={handleSaveLaterClose2}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                          timeout: 500,
                                        }}
                                      >
                                        Save
                                      </Button>
                                    </Box>
                                  </Fade>
                                </Modal>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal"
                                  open={openmodalsuccess}
                                  onClose={handleSuccessClose}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodalsuccess}>
                                    <Box component="div" className="modalcont">
                                      <Box
                                        component="div"
                                        className="successimg"
                                      >
                                        <SuccessIcon />
                                      </Box>
                                      <Typography
                                        id="transition-modal-description"
                                        className="mb-2 text-center fontweight700 font20 block"
                                      >
                                        New Job Posting is successfully saved
                                        for later.
                                      </Typography>
                                    </Box>
                                  </Fade>
                                </Modal>
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Button className="fullwidth_100percent postbtn">
                                  Create Job and Save Profiles
                                </Button>
                              </Grid>
                            </Grid>
                          </TabPanel>
                          <TabPanel
                            value={value}
                            index={1}
                            className="appbar_tabpanel"
                          >
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Candidates Looking To Work In
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
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Select Candidates Looking To Work In";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Job Category
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={jobcategory}
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
                                      "Select Job Category";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Type of Coaching Institute
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
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Select Type of Coaching Institute";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Level
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={jobcategory}
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
                                      "Select Level";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Level
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
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Select Level";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Suggested Job Title
                                </Typography>
                                <TextField
                                  disabled
                                  fullWidth
                                  classes={{
                                    root: "textfielddisabled",
                                  }}
                                  id="standard-disabled"
                                  placeholder="Suggested Job Title"
                                />
                              </Grid>
                            </Grid>
                            <Box component="div" className="row">
                              <BlueRadio
                                checked={selectedValue === "a"}
                                onChange={handleChange}
                                value="a"
                                name="radio-button-demo"
                                inputProps={{
                                  "aria-label": "c",
                                }}
                                className="radio_custom"
                              />
                              <Typography
                                variant="span"
                                className="radio_label"
                              >
                                I want a custom job title
                              </Typography>
                            </Box>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Custom Job Title
                                </Typography>
                                <TextField
                                  fullWidth
                                  classes={{
                                    root: "textfieldnormal",
                                  }}
                                  id="standard-normal"
                                  placeholder="Custom Job Title"
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={3}
                            >
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Minimum Work Experience Required
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Minimum Work Experience Required";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={6} md={6} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Maximum Salary To Be Offered
                                </Typography>
                                <TextField
                                  fullWidth
                                  classes={{
                                    root: "textfieldnormal_w_icon",
                                  }}
                                  id="standard-normal"
                                  placeholder="Maximum Salary To Be Offered"
                                  InputProps={{
                                    endAdornment: (
                                      <InputAdornment>
                                        <Typography className="paicon fontweight700">
                                          P.A
                                        </Typography>
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={2}
                            >
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Employment Type
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Select Employment Type";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Maximum Notice Period
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={experience}
                                  getOptionLabel={(option) => option.name}
                                  classes={{
                                    paper: "BlueAutoCompletePaper",
                                  }}
                                  renderInput={(params) => {
                                    params.inputProps.className =
                                      "noborderinput";
                                    params.InputProps.className =
                                      "noBeforeAfter";
                                    params.InputProps.placeholder =
                                      "Maximum Notice Period";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Typography
                                  variant="span"
                                  className="label font14"
                                >
                                  Education Required
                                </Typography>
                                <Autocomplete
                                  id="combo-box-demo"
                                  className="BlueSelectDropdown"
                                  options={jobcategory}
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
                                      "Select Education Required";
                                    return (
                                      <TextField
                                        disabled
                                        inputStyle={{
                                          cursor: "none",
                                        }}
                                        {...params}
                                        onKeyPress={(e) => e.preventDefault()}
                                      />
                                    );
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Box
                              component="div"
                              className="location-accordion common-accordion"
                            >
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="accordion-header"
                                >
                                  <Typography className="">Location</Typography>
                                  <Button className="transparentbtn noborder marginautoright mt-1">
                                    <RemoveRedIcon />
                                  </Button>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Box
                                    component="div"
                                    className="fullwidth_100percent"
                                  >
                                    <Grid
                                      container
                                      direction="row"
                                      justifyContent="space-between"
                                      spacing={3}
                                    >
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          Country
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={experience}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
                                          classes={{
                                            paper: "BlueAutoCompletePaper",
                                          }}
                                          renderInput={(params) => {
                                            params.inputProps.className =
                                              "noborderinput";
                                            params.InputProps.className =
                                              "noBeforeAfter";
                                            params.InputProps.placeholder =
                                              "Country";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          State
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={jobcategory}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
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
                                              "State";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                    </Grid>

                                    <Grid
                                      container
                                      direction="row"
                                      justifyContent="space-between"
                                      spacing={3}
                                    >
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          City
                                        </Typography>
                                        <Autocomplete
                                          id="combo-box-demo"
                                          className="BlueSelectDropdown"
                                          options={experience}
                                          getOptionLabel={(option) =>
                                            option.name
                                          }
                                          classes={{
                                            paper: "BlueAutoCompletePaper",
                                          }}
                                          renderInput={(params) => {
                                            params.inputProps.className =
                                              "noborderinput";
                                            params.InputProps.className =
                                              "noBeforeAfter";
                                            params.InputProps.placeholder =
                                              "City";
                                            return (
                                              <TextField
                                                disabled
                                                inputStyle={{
                                                  cursor: "none",
                                                }}
                                                {...params}
                                                onKeyPress={(e) =>
                                                  e.preventDefault()
                                                }
                                              />
                                            );
                                          }}
                                        />
                                      </Grid>
                                      <Grid item lg={6} md={6} xs={12}>
                                        <Typography
                                          variant="span"
                                          className="label font14"
                                        >
                                          No. Of Vacancies Available
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          classes={{
                                            root: "textfieldnormal",
                                          }}
                                          id="standard-normal"
                                          placeholder="No. Of Vacancies Available"
                                        />
                                      </Grid>
                                    </Grid>
                                    <Box component="div" className="row">
                                      <BlueRadio
                                        checked={selectedValue === "a"}
                                        onChange={handleChange}
                                        value="a"
                                        name="radio-button-demo"
                                        inputProps={{
                                          "aria-label": "c",
                                        }}
                                        className="radio_custom"
                                      />
                                      <Typography
                                        variant="span"
                                        className="radio_label"
                                      >
                                        Set As Default
                                      </Typography>
                                    </Box>
                                    <Box component="div" className="buttonarea">
                                      <Button
                                        className="fullwidth_100percent lightbtnwithicon locationbtn"
                                        startIcon={<AddIcon />}
                                      >
                                        Add Locations
                                      </Button>
                                    </Box>
                                  </Box>
                                </AccordionDetails>
                              </Accordion>
                            </Box>

                            <Box component="div" className="skillsdiv">
                              <Accordion
                                square
                                expanded={expanded === "panel1"}
                                onChange={handleChangeaccordion("panel1")}
                                className="withoutarrow-accordion skills-accordion"
                              >
                                <AccordionSummary
                                  aria-controls="panel1d-content"
                                  id="panel1d-header"
                                >
                                  <Typography>Skills</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Autocomplete
                                    multiple
                                    id="checkboxes-tags-demo"
                                    options={top100Films}
                                    className="fullwidth_100percent BlueDropDown"
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.title}
                                    renderOption={(option, { selected }) => (
                                      <React.Fragment>
                                        <Checkbox
                                          icon={icon}
                                          checkedIcon={checkedIcon}
                                          style={{
                                            marginRight: 8,
                                          }}
                                          checked={selected}
                                          classes={{
                                            root: "bluecheckbox",
                                          }}
                                        />
                                        {option.title}
                                      </React.Fragment>
                                    )}
                                    style={{ width: 500 }}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        placeholder="Search Skills"
                                      />
                                    )}
                                  />
                                </AccordionDetails>
                              </Accordion>
                            </Box>

                            <Box component="div" className="jddiv">
                              <Accordion
                                square
                                expanded={expanded === "panel1"}
                                onChange={handleChangeaccordion("panel1")}
                                className="withoutarrow-accordion skills-accordion"
                              >
                                <AccordionSummary
                                  aria-controls="panel2d-content"
                                  id="panel2d-header"
                                >
                                  <Typography>Job Description</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Box
                                    component="div"
                                    className="jdarea fullwidth_100percent"
                                  >
                                    <Box component="div" className="jddivcont">
                                      <Autocomplete
                                        id="combo-box-demo"
                                        className="BlueSelectDropdown"
                                        options={experience}
                                        getOptionLabel={(option) => option.name}
                                        classes={{
                                          paper: "BlueAutoCompletePaper",
                                        }}
                                        renderInput={(params) => {
                                          params.inputProps.className =
                                            "noborderinput";
                                          params.InputProps.className =
                                            "noBeforeAfter";
                                          params.InputProps.placeholder =
                                            "Search Subjects Description";
                                          return (
                                            <TextField
                                              disabled
                                              inputStyle={{
                                                cursor: "none",
                                              }}
                                              {...params}
                                              onKeyPress={(e) =>
                                                e.preventDefault()
                                              }
                                            />
                                          );
                                        }}
                                      />
                                      <Button
                                        className="marginautoright darkbluecolor templatebtn"
                                        onClick={handleTemplateOpen}
                                      >
                                        Save as Template
                                      </Button>
                                      <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className="modal"
                                        open={openmodal}
                                        onClose={handleTemplateClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                          timeout: 500,
                                        }}
                                      >
                                        <Fade in={openmodal}>
                                          <Box
                                            component="div"
                                            className="modalcont"
                                          >
                                            <Typography
                                              variant="h6"
                                              id="transition-modal-title"
                                              className="fontweight700"
                                            >
                                              Save as Template
                                            </Typography>
                                            <Typography
                                              id="transition-modal-description"
                                              className="mb-2"
                                            >
                                              Title
                                            </Typography>
                                            <TextField
                                              fullWidth
                                              classes={{
                                                root: "textfieldnormal",
                                              }}
                                              id="standard-normal"
                                              placeholder="Title of the Template"
                                            />
                                            <Button className="fullwidth_100percent drkbluebtn">
                                              Save
                                            </Button>
                                          </Box>
                                        </Fade>
                                      </Modal>
                                    </Box>
                                    <Box component="div" className="messagebox">
                                      <TextareaAutosize
                                        minRows={6}
                                        className="textareablue fullwidth_100percent"
                                        id="standard-normal"
                                        placeholder="Type your Job Description"
                                      />
                                    </Box>
                                  </Box>
                                </AccordionDetails>
                              </Accordion>
                            </Box>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                              spacing={2}
                              className="buttonrow"
                            >
                              <Grid item lg={4} md={4} xs={12}>
                                <Button
                                  className="fullwidth_100percent viewbtn"
                                  startIcon={<EyeIcon />}
                                  onClick={handlepostingOpen}
                                >
                                  Preview Job Posting
                                </Button>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal jobdescriptionmodal"
                                  open={openmodalposting}
                                  onClose={handlepostingClose}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodalposting}>
                                    <Box component="div" className="modalcont">
                                      <Box
                                        component="div"
                                        className="topmodalcont"
                                      >
                                        <Typography
                                          className="heading_title"
                                          variant="span"
                                        >
                                          Job Description
                                        </Typography>
                                        <Button
                                          onClick={handlepostingClose}
                                          className="closearea"
                                        >
                                          <CloseIcon />
                                        </Button>
                                      </Box>
                                      <Box component="div" className="maindiv">
                                        <Box
                                          component="div"
                                          className="maincont"
                                        >
                                          <Box
                                            component="div"
                                            className="imgarea"
                                          >
                                            <img
                                              src={BASE_URL + BigSchlImg}
                                              alt=""
                                            />
                                            <JdBg />
                                          </Box>
                                          <Box
                                            component="div"
                                            className="title"
                                          >
                                            <Typography
                                              variant="span"
                                              className="schoolname"
                                            >
                                              DPS School
                                            </Typography>
                                            <Typography
                                              variant="span"
                                              className="titleheading"
                                            >
                                              Primary School Teacher
                                            </Typography>
                                          </Box>
                                          <Box
                                            component="div"
                                            className="iconreq"
                                          >
                                            <List>
                                              <ListItem>
                                                <YearsIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  3 Years Min.
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <SalaryIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan fontweight700"
                                                >
                                                  6.5 LPA Max.
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <BagIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  Full Time / Permanent
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <LocationIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  Kolkata, West Bengal
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <VacanciesIcon />
                                                <Typography
                                                  variant="span"
                                                  className="iconspan"
                                                >
                                                  5 Vacancies
                                                </Typography>
                                              </ListItem>
                                            </List>
                                          </Box>
                                          <Box
                                            component="div"
                                            className="details"
                                          >
                                            <Typography
                                              variant="span"
                                              className="subhead"
                                            >
                                              Employment Details
                                            </Typography>
                                            <List className="empdetul">
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Roles
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  School Chemistry Teacher
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Level
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  Class X - XII
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Subject
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  Chemistry
                                                </Typography>
                                              </ListItem>
                                              <ListItem>
                                                <Typography
                                                  variant="span"
                                                  className="subsubhead"
                                                >
                                                  Education Requirements
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  className="subsubtext"
                                                >
                                                  B.Sc / B.Ed
                                                </Typography>
                                              </ListItem>
                                            </List>
                                            <Box
                                              component="div"
                                              className="details"
                                            >
                                              <Typography
                                                variant="span"
                                                className="subhead"
                                              >
                                                Job Description
                                              </Typography>
                                              <Typography
                                                variant="span"
                                                className="subsubtext"
                                              >
                                                Lorem ipsum dolor sit amet,
                                                consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor
                                                invidunt ut labore et dolore
                                                magna aliquyam erat, sed diam
                                                voluptua. At vero eos et accusam
                                                et justo duo dolores et ea
                                                rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem ipsum dolor
                                                sit amet. Lorem ipsum dolor sit
                                                amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et
                                                dolore magna aliquyam erat, sed
                                                diam voluptua. At vero eos et
                                                accusam et justo duo dolores et
                                                ea rebum. Stet clita kasd
                                                gubergren, no sea takimata
                                                sanctus est Lorem
                                              </Typography>
                                            </Box>
                                            <Box
                                              component="div"
                                              className="skillscont"
                                            >
                                              <Typography
                                                variant="span"
                                                className="subhead"
                                              >
                                                Skills Required
                                              </Typography>
                                              <List>
                                                <ListItem className="skilltag">
                                                  Reasoning
                                                </ListItem>
                                                <ListItem className="skilltag">
                                                  Apitutde
                                                </ListItem>
                                                <ListItem className="skilltag">
                                                  Problem Solving
                                                </ListItem>
                                              </List>
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Fade>
                                </Modal>
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Button
                                  className="fullwidth_100percent savebtn"
                                  onClick={handleSaveLatereOpen}
                                >
                                  Save for Later
                                </Button>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal"
                                  open={openmodallater}
                                  onClose={handleSaveLaterClose}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodallater}>
                                    <Box component="div" className="modalcont">
                                      <Typography
                                        variant="h6"
                                        id="transition-modal-title"
                                        className="fontweight700"
                                      >
                                        Save for Later
                                      </Typography>
                                      <Typography
                                        id="transition-modal-description"
                                        className="mb-2"
                                      >
                                        Job Title
                                      </Typography>
                                      <TextField
                                        fullWidth
                                        classes={{
                                          root: "textfieldnormal",
                                        }}
                                        id="standard-normal"
                                        placeholder="Job Title"
                                      />
                                      <Button
                                        className="fullwidth_100percent drkbluebtn"
                                        onClick={(e) => {
                                          handleSuccessOpen();
                                          handleSaveLaterClose();
                                        }}
                                        onClose={handleSaveLaterClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                          timeout: 500,
                                        }}
                                      >
                                        Save
                                      </Button>
                                    </Box>
                                  </Fade>
                                </Modal>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className="modal"
                                  open={openmodalsuccess}
                                  onClose={handleSuccessClose}
                                  closeAfterTransition
                                  BackdropComponent={Backdrop}
                                  BackdropProps={{
                                    timeout: 500,
                                  }}
                                >
                                  <Fade in={openmodalsuccess}>
                                    <Box component="div" className="modalcont">
                                      <Box
                                        component="div"
                                        className="successimg"
                                      >
                                        <SuccessIcon />
                                      </Box>
                                      <Typography
                                        id="transition-modal-description"
                                        className="mb-2 text-center fontweight700 font20 block"
                                      >
                                        New Job Posting is successfully saved
                                        for later.
                                      </Typography>
                                    </Box>
                                  </Fade>
                                </Modal>
                              </Grid>
                              <Grid item lg={4} md={4} xs={12}>
                                <Button className="fullwidth_100percent postbtn">
                                  Post Job
                                </Button>
                              </Grid>
                            </Grid>
                          </TabPanel>
                        </Box>
                      </div>
                    </Fade>
                  </Modal>
                  {/* End of After hitting Create Job Posting Modal */}
                </Box>
              </div>
            </Fade>
          </Modal>
          {/* End of Mod after hit save button (multple candidates save ) */}
        </Box>
      </Box>
      <Box component="div" className="sugscrolltabs">
        <AppBar position="static" color="default" className="tabsbar">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              label="Chemistry Teacher (50)"
              {...a11yProps(0)}
              className="buttonTab"
            />
            <Tab
              label="Maths Teacher (10)"
              {...a11yProps(1)}
              className="buttonTab"
            />
            <Tab
              label="Physics Teacher (20)"
              {...a11yProps(2)}
              className="buttonTab"
            />
            <Tab
              label="English Teacher (15)"
              {...a11yProps(3)}
              className="buttonTab"
            />
            <Tab
              label="Biology Teacher (50)"
              {...a11yProps(4)}
              className="buttonTab"
            />
            <Tab
              label="Computer Teacher (50)"
              {...a11yProps(5)}
              className="buttonTab"
            />
            <Tab
              label="Sanskrit Teacher (50)"
              {...a11yProps(6)}
              className="buttonTab"
            />
            <Tab
              label="IT Teacher (50)"
              {...a11yProps(6)}
              className="buttonTab"
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className="tabpaneldiv">
          <Box
            component="div"
            className="canddiv"
            variant="contained"
            color="primary"
            onClick={(e) => setIscandidat(e.target)}
          >
            <Box component="div" className="topdiv">
              <Box component="div" className="cont">
                <Box component="div">
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checkedIcon={<CircleCheckedFilled />}
                  />
                </Box>
                <Box component="div" className="imgarea">
                  <img src={BASE_URL + ProfileDP} alt="" />
                  <Box component="div" className="grncircle"></Box>
                </Box>
                <Box component="div" className="canddet">
                  <Typography variant="span" className="name">
                    Dinah Drake
                  </Typography>
                  <Typography variant="span" className="prof">
                    Chemistry Teacher - ABS School
                  </Typography>
                  <Typography variant="span" className="loc">
                    Kolkata, West Bengal
                  </Typography>
                  <Typography variant="span" className="grnactv">
                    Active now
                  </Typography>
                </Box>
                <Box component="div" className="marginautoright buttondiv">
                  <Button
                    className="darkbluecolor whitecolortext border8"
                    endIcon={<ArrowWhite />}
                    ref={anchorRefdownload}
                    aria-controls={opendownload ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggledownload}
                  >
                    <DownloadWhite />
                  </Button>
                  <Popper
                    open={opendownload}
                    anchorEl={anchorRefdownload.current}
                    role={undefined}
                    transition
                    disablePortal
                    className="downloadtoggle"
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom"
                              ? "center top"
                              : "center bottom",
                        }}
                        className="downloadmenu"
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClosedownload}>
                            <MenuList
                              autoFocusItem={opendownload}
                              id="menu-list-grow"
                              onKeyDown={handleListKeyDowndownload}
                            >
                              <MenuItem onClick={handleClosedownload}>
                                Download Resume
                              </MenuItem>

                              <MenuItem onClick={handleOpenProfileModal}>
                                Download Profile
                              </MenuItem>
                              <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className="modal"
                                open={openProfileModal}
                                onClose={handleCloseProfileModal}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                  timeout: 500,
                                }}
                              >
                                <Fade in={openProfileModal}>
                                  <div className="modalcontsmall">
                                    <DownloadOrange />
                                    <Typography variant="h6">
                                      Are you sure you want to download the
                                      selected candidate?
                                    </Typography>
                                    <Box
                                      component="div"
                                      className="button_confirm_area"
                                    >
                                      <Button
                                        className="lightbluecolor border8"
                                        onClick={handleCloseProfileModal}
                                      >
                                        No
                                      </Button>
                                      <Button className="darkbluecolor whitecolortext border8">
                                        Yes
                                      </Button>
                                    </Box>
                                  </div>
                                </Fade>
                              </Modal>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                  <Button
                    startIcon={<InviteIconCand />}
                    className="darkbluecolor whitecolortext border8"
                    onClick={handleOpenInvite}
                  >
                    Invite
                  </Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={openInvite}
                    onClose={handleCloseInvite}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={openInvite}>
                      <div className="modalcontsmall">
                        <InviteIcon />
                        <Typography variant="h6">
                          Are you sure you want to Invite the selected
                          candidate?
                        </Typography>
                        <Box component="div" className="button_confirm_area">
                          <Button
                            className="lightbluecolor border8"
                            onClick={handleCloseInvite}
                          >
                            No
                          </Button>
                          <Button className="darkbluecolor whitecolortext border8">
                            Yes
                          </Button>
                        </Box>
                      </div>
                    </Fade>
                  </Modal>
                  <Button
                    startIcon={<SaveIcon />}
                    className="lightbluecolor border8"
                    onClick={handleOpenSave}
                  >
                    Save
                  </Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={openSave}
                    onClose={handleCloseSave}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={openSave}>
                      <div className="modalcontsmall">
                        <BookMark />
                        <Typography variant="h6">
                          Are you sure you want to Save the selected candidate?
                        </Typography>
                        <Box component="div" className="button_confirm_area">
                          <Button
                            className="lightbluecolor border8"
                            onClick={handleCloseSave}
                          >
                            No
                          </Button>
                          <Button className="darkbluecolor whitecolortext border8">
                            Yes
                          </Button>
                        </Box>
                      </div>
                    </Fade>
                  </Modal>
                </Box>
              </Box>
            </Box>
            <Box component="div" className="middiv">
              <Box component="div" className="midcont">
                <RuppeeSymbol />
                <Typography variant="span" className="title ms-2 me-2">
                  Min. Expected Salary
                </Typography>
                <Typography variant="span" className="text">
                  6.5 LPA Min.
                </Typography>
              </Box>
              <Box component="div" className="midcont">
                <ExpSymbol />
                <Typography variant="span" className="title ms-2 me-2">
                  Relevant Experience
                </Typography>
                <Typography variant="span" className="text">
                  3 Years
                </Typography>
              </Box>
              <Box component="div" className="midcont">
                <NoticeSymbol />
                <Typography variant="span" className="title ms-2 me-2">
                  Notice Period
                </Typography>
                <Typography variant="span" className="text">
                  Join in 45 Days
                </Typography>
              </Box>
              <Box component="div" className="midcont">
                <EmploySymbol />
                <Typography variant="span" className="title ms-2 me-2">
                  Employment Type
                </Typography>
                <Typography variant="span" className="text">
                  Full Time / Permanent
                </Typography>
              </Box>
              <Box component="div" className="midcont">
                <EduSymbol />
                <Typography variant="span" className="title ms-2 me-2">
                  Highest Education
                </Typography>
                <Typography variant="span" className="text">
                  B.Sc Chemistry
                </Typography>
              </Box>
              <Box component="div" className="midcont">
                <LocSymbol />
                <Typography variant="span" className="title ms-2 me-2">
                  Preferred Locations
                </Typography>
                <Typography variant="span" className="text">
                  Kolkata, Mumbai, Delhi
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="botdiv">
              <Box component="div" className="botbuttondiv">
                <Button className="lightbluecolor blackcolortext">
                  Reasoning
                </Button>
                <Button className="lightbluecolor blackcolortext">
                  Aptitude
                </Button>
                <Button className="lightbluecolor blackcolortext">
                  Problem Solving
                </Button>
                <Button className="lightbluecolor blackcolortext">
                  Reasoning
                </Button>
                <Button className="lightbluecolor blackcolortext">
                  Aptitude
                </Button>
                <Button className="lightbluecolor blackcolortext">
                  Reasoning
                </Button>
                <Button className="lightbluecolor blackcolortext">
                  Reasoning
                </Button>
              </Box>
              <Box component="div" className="optdiv">
                <Box component="div" className="chatdiv">
                  <Button
                    className="darkbluecolor whitecolortext border8"
                    startIcon={<PersonIcon />}
                  >
                    Show Contact
                  </Button>
                  <Button
                    className="darkbluecolor whitecolortext border8"
                    startIcon={<ChatIcon />}
                  >
                    Chat
                  </Button>
                </Box>
                <Button className="marginautoright greenmathcbutton">
                  65% Match
                </Button>
              </Box>
            </Box>
          </Box>
          <Popover
            id="userProfile"
            open={Boolean(iscandidat)}
            anchorEl={iscandidat}
            onClose={(e) => setIscandidat(null)}
            classes={{ paper: "personaldetailsparentdiv" }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <CandidateDetailsPopper />
          </Popover>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={7}>
          Item Eight
        </TabPanel>
      </Box>
    </Box>
  );
}

export default SuggestedCandidateSection;
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

const coaching = [
  { name: "Aptech Institute", id: 1 },
  { name: "SVM Institute", id: 2 },
];

const jobcategory = [
  { name: "Academic", id: 1 },
  { name: "Non-Academic", id: 2 },
];

const experience = [
  { name: "2 Years", id: 1 },
  { name: "3 Years", id: 2 },
  { name: "4 Years", id: 3 },
  { name: "5 Years", id: 4 },
];

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

const VacanciesIcon = () => {
  return (
    <svg
      className="vac_orange me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <defs></defs>
      <g transform="translate(-348.687 -348.667)">
        <path
          class="a"
          d="M368.684,358.667q0,4.918,0,9.837c0,.128-.018.163-.157.163q-9.838-.007-19.676,0c-.147,0-.167-.038-.167-.172q.006-9.827,0-19.655c0-.134.019-.173.167-.173q9.828.008,19.656,0c.152,0,.177.04.177.182Q368.68,353.758,368.684,358.667Z"
          transform="translate(0)"
        />
        <path
          class="b"
          d="M480.712,426.791l-1.781-.009c-.4,0-.565-.127-.645-.523q-.721-3.57-1.432-7.143a1.11,1.11,0,0,1,1.14-1.38q3.81-.005,7.62,0a1.109,1.109,0,0,1,1.14,1.38q-.7,3.559-1.425,7.115c-.087.433-.242.55-.681.552l-1.751.009a.352.352,0,0,1-.268.084q-.824.01-1.648,0A.352.352,0,0,1,480.712,426.791Z"
          transform="translate(-123.118 -68.599)"
        />
        <path
          class="b"
          d="M478.486,542.538a6.042,6.042,0,0,0,1.065.028c.559.009,1.12.028,1.677,0a1.243,1.243,0,0,1,1.375.864.444.444,0,0,1-.036.606,1.179,1.179,0,0,1-1.219.792c-.993-.011-1.986.009-2.979.016a1.064,1.064,0,0,1-.534.047,7.233,7.233,0,0,1-1.391-.047c-1.012-.007-2.025-.02-3.037-.019a1.126,1.126,0,0,1-.98-.459,2.813,2.813,0,0,1-.181-.331.446.446,0,0,1-.036-.606,1.257,1.257,0,0,1,1.375-.865c.809.033,1.62.009,2.429.007a.666.666,0,0,0,.313-.029,1.617,1.617,0,0,1,.651-.038A9.41,9.41,0,0,1,478.486,542.538Z"
          transform="translate(-118.72 -183.691)"
        />
        <path
          class="c"
          d="M485.409,609.331c1.208.31,2.414.628,3.625.925a.438.438,0,0,1,.393.5,1.87,1.87,0,0,0,.037.719.983.983,0,0,1-.626,0,2.688,2.688,0,0,0,.028-.52c.013-.134-.048-.188-.17-.219-1.172-.3-2.343-.594-3.513-.9-.153-.04-.18,0-.178.139,0,.484,0,.969,0,1.453a.426.426,0,0,1-.534,0c0-.484-.005-.969,0-1.454,0-.144-.031-.182-.183-.142-1.169.309-2.339.61-3.51.911-.12.031-.184.087-.171.221a1.926,1.926,0,0,0,.036.518,1.251,1.251,0,0,1-.661.007,1.452,1.452,0,0,0,.06-.765.406.406,0,0,1,.343-.456c1.228-.309,2.454-.626,3.681-.941A1.117,1.117,0,0,1,485.409,609.331Z"
          transform="translate(-126.025 -245.161)"
        />
        <path
          class="d"
          d="M529.223,638.949l.534,0c.566.291.8.692.682,1.174a.975.975,0,1,1-1.421-1.07C529.085,639.019,529.154,638.985,529.223,638.949Z"
          transform="translate(-170.779 -272.682)"
        />
        <path
          class="d"
          d="M585.906,639.005a.986.986,0,0,1,.626,0,.948.948,0,0,1,.652,1.039.973.973,0,0,1-1.923.03A.943.943,0,0,1,585.906,639.005Z"
          transform="translate(-223.116 -272.687)"
        />
        <path
          class="d"
          d="M472.389,639.02a1,1,0,0,1,.661-.007.943.943,0,0,1,.628,1.1.974.974,0,0,1-1.909-.015A.957.957,0,0,1,472.389,639.02Z"
          transform="translate(-118.412 -272.691)"
        />
        <path
          class="b"
          d="M443.105,512.66c-.7-.039-.712.128-.7-.759.006-.686,0-.686.682-.686.311,0,.622.007.932,0,.264-.007.371.119.366.371,0,.223,0,.447,0,.67,0,.327-.067.388-.393.4a.594.594,0,0,0-.286.034A.875.875,0,0,1,443.105,512.66Z"
          transform="translate(-91.326 -154.837)"
        />
        <path
          class="b"
          d="M614.322,512.689a1.508,1.508,0,0,0-.2-.033c-.46-.017-.481-.038-.481-.513,0-1.049-.079-.915.918-.922.252,0,.5,0,.757,0a.269.269,0,0,1,.3.306c0,.253-.01.505,0,.757.014.282-.117.389-.386.372-.106-.007-.213.006-.32.01A.874.874,0,0,1,614.322,512.689Z"
          transform="translate(-249.324 -154.843)"
        />
        <path
          class="e"
          d="M531.06,588.016a1.709,1.709,0,0,0-1.345,0c0-.562-.009-1.124.019-1.684.011-.221-.163-.165-.248-.24a.217.217,0,0,1,.152-.077,12.179,12.179,0,0,1,1.45,0,.217.217,0,0,1,.152.077c-.082.061-.2.061-.2.229C531.063,586.883,531.056,587.45,531.06,588.016Z"
          transform="translate(-171.676 -223.823)"
        />
        <path
          class="c"
          d="M530,573.453h-1.754c-.113-.047-.105-.148-.1-.242,0-.3.007-.592.011-.889a13.767,13.767,0,0,1,1.942,0c0,.3.009.593.011.889C530.1,573.306,530.109,573.406,530,573.453Z"
          transform="translate(-170.432 -211.18)"
        />
        <path
          class="c"
          d="M451.451,529.555a1.374,1.374,0,0,1,.6.023q0,.491,0,.983c0,.647.261.907.911.915.067,0,.135,0,.2.006a1.728,1.728,0,0,0,.037.606,3.443,3.443,0,0,1-.639-.03,1.326,1.326,0,0,1-1.105-1.309C451.448,530.352,451.452,529.953,451.451,529.555Z"
          transform="translate(-99.687 -171.742)"
        />
        <path
          class="c"
          d="M608.747,529.58a1.386,1.386,0,0,1,.6-.023q0,.539,0,1.078a1.359,1.359,0,0,1-1.455,1.457c-.1,0-.194,0-.291,0a1.7,1.7,0,0,0,.036-.606c.963-.032,1.114-.188,1.114-1.152C608.745,530.081,608.746,529.83,608.747,529.58Z"
          transform="translate(-243.733 -171.744)"
        />
        <path
          class="f"
          d="M528.9,534.768a13.038,13.038,0,0,1-2.178,0q0-.354,0-.708H528.9Q528.9,534.414,528.9,534.768Z"
          transform="translate(-169.122 -175.913)"
        />
      </g>
    </svg>
  );
};

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

const SortIcon = () => {
  return (
    <svg
      className="sort_icon me-3 top-3"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(-1487 -417)">
        <rect
          class="a"
          width="24"
          height="24"
          transform="translate(1487 417)"
        />
        <g transform="translate(1485.397 413.888)">
          <g transform="translate(2.067 5.499)">
            <path
              class="b"
              d="M4.774,18.352a.919.919,0,0,1-.233.618.746.746,0,0,1-1.125,0,.919.919,0,0,1-.233-.618V2.985l-1.823,2a.8.8,0,0,1-.258.19.735.735,0,0,1-.3.067.762.762,0,0,1-.563-.256.937.937,0,0,1,0-1.237L3.415.258,3.427.246A.743.743,0,0,1,4.54.256l3.182,3.5a.884.884,0,0,1,.173.284.954.954,0,0,1,0,.669.885.885,0,0,1-.172.284.8.8,0,0,1-.258.19.73.73,0,0,1-.609,0A.8.8,0,0,1,6.6,4.989l-1.823-2Zm6.364-16.6a.761.761,0,0,1-.563-.256.919.919,0,0,1-.233-.618.919.919,0,0,1,.233-.618A.761.761,0,0,1,11.138,0h1.591a.761.761,0,0,1,.563.256.919.919,0,0,1,.233.618.919.919,0,0,1-.233.618.761.761,0,0,1-.563.256Zm0,5.243a.761.761,0,0,1-.563-.256.936.936,0,0,1,0-1.236.761.761,0,0,1,.563-.256h4.773a.761.761,0,0,1,.563.256.936.936,0,0,1,0,1.236.761.761,0,0,1-.563.256Zm0,5.243a.761.761,0,0,1-.563-.256.936.936,0,0,1,0-1.236.761.761,0,0,1,.563-.256h7.955a.761.761,0,0,1,.563.256.936.936,0,0,1,0,1.236.761.761,0,0,1-.563.256Zm-.8,4.369a.919.919,0,0,0,.233.618.761.761,0,0,0,.563.256H22.276a.761.761,0,0,0,.563-.256.936.936,0,0,0,0-1.236.761.761,0,0,0-.563-.256H11.138a.761.761,0,0,0-.563.256A.919.919,0,0,0,10.343,16.6Z"
              transform="translate(0 0)"
            />
          </g>
        </g>
      </g>
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
const DownloadOrange = () => {
  return (
    <svg
      className="download-orange"
      xmlns="http://www.w3.org/2000/svg"
      width="28.141"
      height="38.067"
      viewBox="0 0 27.141 35.067"
    >
      <defs></defs>
      <path
        class="a"
        d="M346.943,284.5H361.97c.006.137.017.273.017.41,0,1.784,0,3.568,0,5.352a5.031,5.031,0,0,0,.093,1.022,3.859,3.859,0,0,0,3.841,3.093c1.715.012,3.431,0,5.146,0h.4v.475q0,10.48,0,20.961c0,.171,0,.343-.012.514a3.389,3.389,0,0,1-3.394,3.232q-10.154.011-20.309,0a3.4,3.4,0,0,1-3.422-3.419q-.008-14.151,0-28.3a3.164,3.164,0,0,1,1.263-2.62A9.1,9.1,0,0,1,346.943,284.5Zm11.808,22.548-.1-.06v-.408q0-4.872,0-9.743a2.749,2.749,0,0,0-.029-.443.724.724,0,0,0-.724-.641.74.74,0,0,0-.721.654,2.622,2.622,0,0,0-.013.376q0,4.94,0,9.88v.429c-.144-.148-.224-.228-.3-.31q-1.835-1.971-3.671-3.941a2.116,2.116,0,0,0-.328-.3.581.581,0,0,0-.734-.029,1.033,1.033,0,0,0-.369.634,1.09,1.09,0,0,0,.31.682c1.7,1.843,3.407,3.671,5.116,5.5.513.549.918.541,1.44-.019l4.328-4.642c.281-.3.565-.6.841-.9a.753.753,0,1,0-1.076-1.027c-.04.041-.078.083-.117.125q-1.823,1.958-3.646,3.917C358.879,306.867,358.818,306.962,358.751,307.051Zm-.858,7.586h7.37c.672,0,1.027-.255,1.029-.736s-.35-.744-1.02-.744q-7.37,0-14.74,0a2.142,2.142,0,0,0-.443.034.724.724,0,0,0-.444,1.106.857.857,0,0,0,.809.341Q354.173,314.633,357.893,314.636Z"
        transform="translate(-344.334 -284.503)"
      />
      <path
        class="b"
        d="M629.7,308.163c-1.663,0-3.241.037-4.816-.012a2.287,2.287,0,0,1-2.12-2.3c-.039-1.611-.011-3.223-.01-4.834,0-.018.018-.036.049-.093Z"
        transform="translate(-603.599 -299.797)"
      />
    </svg>
  );
};
const DownloadWhite = () => {
  return (
    <svg
      className="download-white"
      xmlns="http://www.w3.org/2000/svg"
      width="17.141"
      height="25.067"
      viewBox="0 0 27.141 35.067"
    >
      <defs></defs>
      <path
        class="a"
        d="M346.943,284.5H361.97c.006.137.017.273.017.41,0,1.784,0,3.568,0,5.352a5.031,5.031,0,0,0,.093,1.022,3.859,3.859,0,0,0,3.841,3.093c1.715.012,3.431,0,5.146,0h.4v.475q0,10.48,0,20.961c0,.171,0,.343-.012.514a3.389,3.389,0,0,1-3.394,3.232q-10.154.011-20.309,0a3.4,3.4,0,0,1-3.422-3.419q-.008-14.151,0-28.3a3.164,3.164,0,0,1,1.263-2.62A9.1,9.1,0,0,1,346.943,284.5Zm11.808,22.548-.1-.06v-.408q0-4.872,0-9.743a2.749,2.749,0,0,0-.029-.443.724.724,0,0,0-.724-.641.74.74,0,0,0-.721.654,2.622,2.622,0,0,0-.013.376q0,4.94,0,9.88v.429c-.144-.148-.224-.228-.3-.31q-1.835-1.971-3.671-3.941a2.116,2.116,0,0,0-.328-.3.581.581,0,0,0-.734-.029,1.033,1.033,0,0,0-.369.634,1.09,1.09,0,0,0,.31.682c1.7,1.843,3.407,3.671,5.116,5.5.513.549.918.541,1.44-.019l4.328-4.642c.281-.3.565-.6.841-.9a.753.753,0,1,0-1.076-1.027c-.04.041-.078.083-.117.125q-1.823,1.958-3.646,3.917C358.879,306.867,358.818,306.962,358.751,307.051Zm-.858,7.586h7.37c.672,0,1.027-.255,1.029-.736s-.35-.744-1.02-.744q-7.37,0-14.74,0a2.142,2.142,0,0,0-.443.034.724.724,0,0,0-.444,1.106.857.857,0,0,0,.809.341Q354.173,314.633,357.893,314.636Z"
        transform="translate(-344.334 -284.503)"
      />
      <path
        class="b"
        d="M629.7,308.163c-1.663,0-3.241.037-4.816-.012a2.287,2.287,0,0,1-2.12-2.3c-.039-1.611-.011-3.223-.01-4.834,0-.018.018-.036.049-.093Z"
        transform="translate(-603.599 -299.797)"
      />
    </svg>
  );
};
const ArrowWhite = () => {
  return (
    <svg
      className="arrow-white ms-1"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="5"
      viewBox="0 0 16 9.796"
    >
      <defs></defs>
      <g transform="translate(16) rotate(90)">
        <path
          class="a"
          d="M14.656,0H1.346A1.419,1.419,0,0,0,.4,2.4L7.05,9.382a1.293,1.293,0,0,0,1.9,0L15.6,2.4A1.416,1.416,0,0,0,14.656,0Z"
          transform="matrix(0, -1, 1, 0, 0, 16)"
        />
      </g>
    </svg>
  );
};

const People = [
  { name: "Prashant", id: 1 },
  { name: "Vivek", id: 2 },
  { name: "Soumali", id: 3 },
  { name: "Soumak", id: 4 },
  { name: "Soumya", id: 5 },
  { name: "andugundutandapani", id: 6 },
];
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];

const EyeIcon = () => {
  return (
    <svg
      className="eyeicon"
      xmlns="http://www.w3.org/2000/svg"
      width="21.122"
      height="14.081"
      viewBox="0 0 21.122 14.081"
    >
      <defs></defs>
      <path
        class="a"
        d="M10.561,0A10.942,10.942,0,0,0,.111,6.723L0,7.041l.11.318a10.945,10.945,0,0,0,10.451,6.723,10.942,10.942,0,0,0,10.45-6.723l.111-.318-.11-.318A10.945,10.945,0,0,0,10.561,0Zm0,11.064a4.12,4.12,0,0,1-4.2-4.023,4.12,4.12,0,0,1,4.2-4.023,4.12,4.12,0,0,1,4.2,4.023A4.12,4.12,0,0,1,10.561,11.064Z"
      />
      <path
        class="a"
        d="M2.347,0A2.379,2.379,0,0,0,0,2.347,2.379,2.379,0,0,0,2.347,4.694,2.379,2.379,0,0,0,4.694,2.347,2.379,2.379,0,0,0,2.347,0Z"
        transform="translate(8.214 4.694)"
      />
    </svg>
  );
};
const JdBg = () => {
  return (
    <svg
      className="jd_bgimg"
      xmlns="http://www.w3.org/2000/svg"
      width="237.828"
      height="164.436"
      viewBox="0 0 237.828 164.436"
    >
      <defs></defs>
      <path
        class="a"
        d="M0,0S33.659,52.81,24.231,100.853"
        transform="translate(203.071 46.058)"
      />
      <path
        class="b"
        d="M1.679,0,0,24.614l71.6,1.679L67.678,4.478Z"
        transform="translate(68.717 115.774)"
      />
      <path
        class="b"
        d="M0,0,3.294,21.738H56L52.05,0Z"
        transform="translate(80.692 139.026)"
      />
      <path
        class="c"
        d="M30.206,0s2.239,10.607-1.679,13.424C23.977,16.676,14.543,17.9,7.272,27.407A36.488,36.488,0,0,0,0,47.542l16.776,8.391v11.2l45.869-3.948v-11.2s7.831-7.272,11.2-12.3c0,0-1.52-13.2-20.035-19.287A5.663,5.663,0,0,1,50.1,16.511l.265-5.356Z"
        transform="translate(67.598 74.389)"
      />
      <path
        class="d"
        d="M46.142,39.545S33.455,48.266,31.7,43.452,44.7,34.937,44.7,34.937s-3.377-15.91-11.2-22.522c0,0-5.893,11.473-11.644,9.876S31.127,8.538,31.127,8.538s-9.464-9.546-19.3-8.45S-2.355,16.434,1.263,25.232c0,0,7.961-3.724,13.07-1.179s-11.108,5.7-11.108,5.7-.766,7.207,4.213,16.01c0,0,8.8-4.979,12.145-4.543s-9.14,10.2-9.14,10.2,7.778,14.749,23.748,20.053C34.191,71.472,46.7,56.269,46.142,39.545ZM22.53,57.365c-.265-1.367,1.426-2.121,1.426-2.121,1.632.389,1.3,1.585,1.137,2.186s-2.292,1.3-2.557-.065Z"
        transform="translate(191.668 31.922)"
      />
      <path
        class="e"
        d="M0,0S2.834,10.489,19.1,8.78a4.361,4.361,0,0,1-.813-2c0-.884.159-3.459.159-3.459Z"
        transform="translate(99.401 83.906)"
      />
      <path
        class="c"
        d="M6.819,17.959s-.56-3.353-3.353-3.353S-1.007,20.2.667,24.671,5.7,25.791,5.7,25.791s0,7.831,5.592,11.2,13.983,2.8,18.456-6.152,2.887-20.2-1.679-26.287C23.035-2.164,13.524.075,11.291,1.749S6.259,5.1,6.819,17.959Z"
        transform="translate(92.106 49.689)"
      />
      <path
        class="f"
        d="M3.93,2.325a2.44,2.44,0,0,0-.619-1.6A1.656,1.656,0,0,0,1,.3C-.318,1.176-.684,7.01,2.115,7.01s0-2.8,1.12-3.359a1.379,1.379,0,0,0,.7-1.326Z"
        transform="translate(94.015 66.79)"
      />
      <path
        class="b"
        d="M24.649,0S27.4,10.059,37.472,12.852s15.215-4.184,15.439-8.8c0,0,7.737,2.8,11.408,5.445s8.951,7.272,10.607,14.543c0,0-6.152,7.831-11.744,12.3v11.2L17.336,53.682V40.259L0,31.868s1.12-13.983,6.152-20.7C12.917,2.139,24.649,0,24.649,0Z"
        transform="translate(67.044 90.058)"
      />
      <path
        class="c"
        d="M0,1.457S0,24.391.56,29.983s3.913,11.2,8.951,12.3,21.8-3.353,25.168-4.473,15.663-5.592,15.663-5.592S48.1,25.511,43.63,23.272c0,0-3.913.56-12.3,1.679s-8.951.56-13.983,1.12l-1.12-17.9S10.065-4.135,0,1.457Z"
        transform="translate(68.164 115.437)"
      />
      <path
        class="b"
        d="M0,15.1s4.172,8.556,17.743,8.2l1.833-11.55L11.184,0,6.152.56l-4.4,4.249Z"
        transform="translate(67.044 106.835)"
      />
      <path
        class="c"
        d="M4.278,11.121a2.145,2.145,0,0,1,.23-.035l.118-.047C9.1,9.6,13.754,8.959,18.326,7.928c-.13-3.536-.684-6.977-2.1-7.543C13.424-.735,0,.945,0,.945l.56,11.2Z"
        transform="translate(111.229 137.757)"
      />
      <path
        class="g"
        d="M0,0S5.032,7.272,6.712,9.511a17.34,17.34,0,0,1,2.8,6.152c0,.56-3.353,0-5.592-3.353-2.357-3.536-2.8-2.8-2.8-2.8Z"
        transform="translate(128.004 138.708)"
      />
      <path
        class="h"
        d="M.046,43.435,12.856.719A1.014,1.014,0,0,1,13.829,0h59.4A1.014,1.014,0,0,1,74.2,1.308L61.948,41.785a1.014,1.014,0,0,1-.972.719L1.036,44.749a1.014,1.014,0,0,1-.99-1.314Z"
        transform="translate(120.527 110.182)"
      />
      <path
        class="i"
        d="M2.015,0h83V2.239H0V2A2,2,0,0,1,2.015,0Z"
        transform="translate(98.923 154.371)"
      />
      <path
        class="h"
        d="M2.015,0H23.506V2.239H0V2A2,2,0,0,1,2.015,0Z"
        transform="translate(98.923 154.371)"
      />
      <path
        class="h"
        d="M.53,0,2.169,1.632l-1.615.79L0,.742Z"
        transform="translate(194.008 110.559)"
      />
      <path
        class="d"
        d="M.046,41.19,12.291.719A1.014,1.014,0,0,1,13.263,0h59.4a1.014,1.014,0,0,1,.972,1.308L61.389,41.785a1.014,1.014,0,0,1-.972.719H1.012A1.014,1.014,0,0,1,.046,41.19Z"
        transform="translate(122.767 111.867)"
      />
      <path
        class="j"
        d="M6.706,3.076A3.223,3.223,0,0,1,3.353,6.152,3.223,3.223,0,0,1,0,3.076,3.223,3.223,0,0,1,3.353,0,3.223,3.223,0,0,1,6.706,3.076Z"
        transform="matrix(0.314, -0.949, 0.949, 0.314, 157.32, 136.458)"
      />
      <path
        class="k"
        d="M0,0S3.229,15.616,20.33,15.616c15.321,0,14.231-11.974,14.231-11.974"
        transform="translate(88.205 91.567)"
      />
      <path
        class="k"
        d="M0,0S7.767,3.671,7.177,17.224l-.589,15.91"
        transform="translate(78.376 97.023)"
      />
      <path
        class="k"
        d="M0,0A28.09,28.09,0,0,1,2.3,13.453"
        transform="translate(129.754 99.009)"
      />
      <path
        class="l"
        d="M4.125,0,0,5.3,4.125,3.536Z"
        transform="translate(81.133 138.119)"
      />
      <path
        class="d"
        d="M0,0H203.587V7.831H0Z"
        transform="translate(22.855 156.604)"
      />
      <path
        class="m"
        d="M0,0H29.086V40.271H0Z"
        transform="translate(140.873 27.967)"
      />
      <path
        class="d"
        d="M0,0H29.086V40.271H0Z"
        transform="translate(150.378 37.472)"
      />
      <path
        class="m"
        d="M0,0H29.086V40.271H0Z"
        transform="translate(159.889 46.982)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 50.895)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 54.743)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 58.597)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 62.445)"
      />
      <path
        class="n"
        d="M0,0H12.864V1.65H0Z"
        transform="translate(162.683 66.293)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 70.141)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 73.989)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 77.836)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 81.69)"
      />
      <path
        class="m"
        d="M3.754,0H29.817a3.748,3.748,0,0,1,3.748,3.748V22.369H3.754A3.748,3.748,0,0,1,0,18.609V3.748A3.748,3.748,0,0,1,3.754,0Z"
        transform="translate(55.853 12.304)"
      />
      <path
        class="j"
        d="M2.982,1.491A1.491,1.491,0,1,1,1.491,0,1.491,1.491,0,0,1,2.982,1.491Z"
        transform="translate(65.925 22.557)"
      />
      <path
        class="j"
        d="M2.982,1.491A1.491,1.491,0,1,1,1.491,0,1.491,1.491,0,0,1,2.982,1.491Z"
        transform="translate(71.146 22.557)"
      />
      <path
        class="j"
        d="M2.982,1.491A1.491,1.491,0,1,1,1.491,0,1.491,1.491,0,0,1,2.982,1.491Z"
        transform="translate(76.366 22.557)"
      />
      <path
        class="m"
        d="M12.2,0V11.349L0,6.317Z"
        transform="translate(77.215 28.362)"
      />
      <path
        class="d"
        d="M0,0H30.2V19.039H0Z"
        transform="translate(38.517 60.671)"
      />
      <path
        class="m"
        d="M0,0,14.443,8.539,30.2,0Z"
        transform="translate(38.517 60.671)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(190.089)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(201.281)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(212.465)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(223.649)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(234.839)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(190.089 7.271)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(201.281 7.271)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(212.465 7.271)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(223.649 7.271)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(234.839 7.271)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(190.089 14.543)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(201.281 14.543)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(212.465 14.543)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(223.649 14.543)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(234.839 14.543)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(190.089 21.815)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(201.281 21.815)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(212.465 21.815)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(223.649 21.815)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(234.839 21.815)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(190.089 29.086)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(201.281 29.086)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(212.465 29.086)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(223.649 29.086)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(234.839 29.086)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(0 121.491)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(11.184 121.491)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(22.37 121.491)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(33.559 121.491)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(44.744 121.491)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(0 128.763)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(11.184 128.763)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(22.37 128.763)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(33.559 128.763)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(44.744 128.763)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(0 136.034)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(11.184 136.034)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(22.37 136.034)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(33.559 136.034)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(44.744 136.034)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(0 143.306)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(11.184 143.306)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(22.37 143.306)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(33.559 143.306)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(44.744 143.306)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(0 150.577)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(11.184 150.577)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(22.37 150.577)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(33.559 150.577)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(44.744 150.577)"
      />
      <path
        class="o"
        d="M17.057,7.551a.5.5,0,0,0-.18.128.546.546,0,0,0-.114.2.575.575,0,0,0-.026.23.566.566,0,0,0,.067.22A14.571,14.571,0,0,1,18.423,12.5s1.125.853-3.035,1.693S1.653,16.41.2,20.1c-1.416,3.6,4.862,12.926,10.447,5.857a.507.507,0,0,1,.182-.146.473.473,0,0,1,.442.019.515.515,0,0,1,.17.161c.812,1.246,2.975,3.861,6.192,2.5a5.07,5.07,0,0,0,3.455-4.742.567.567,0,0,1,.051-.232.53.53,0,0,1,.14-.185.486.486,0,0,1,.2-.1.467.467,0,0,1,.222,0,5.6,5.6,0,0,0,6.888-3.048c1.517-3.173.7-5.053-.076-5.991a.55.55,0,0,1-.116-.243.572.572,0,0,1,.011-.273.542.542,0,0,1,.135-.232.491.491,0,0,1,.224-.13c1-.274,2.3-1.1,2.279-3.57-.028-3.411-3.591-3.289-4.609-3.184a.472.472,0,0,1-.24-.037.506.506,0,0,1-.2-.153C25.181,5.3,21.464.74,17.259.005a.474.474,0,0,0-.246.028.506.506,0,0,0-.2.149A.556.556,0,0,0,16.7.418a.579.579,0,0,0,0,.265l1.58,5.788a.573.573,0,0,1-.038.394.515.515,0,0,1-.279.26Z"
        transform="matrix(-0.883, -0.47, 0.47, -0.883, 115.42, 76.254)"
      />
    </svg>
  );
};
const SuccessIcon = () => {
  return (
    <svg
      className="successicon"
      xmlns="http://www.w3.org/2000/svg"
      width="99"
      height="99"
      viewBox="0 0 99 99"
    >
      <defs></defs>
      <circle
        class="a"
        cx="49.5"
        cy="49.5"
        r="49.5"
        transform="translate(0 0)"
      />
      <path
        class="b"
        d="M188.8,194.161l25.453,25.453a49.467,49.467,0,0,0,36.7-47.782v-1.405L230.961,152Z"
        transform="translate(-151.948 -122.331)"
      />
      <g transform="translate(16.63 24.438)">
        <path
          class="c"
          d="M119.319,221.227a5.846,5.846,0,0,1,0,8.12l-4.528,4.528a5.846,5.846,0,0,1-8.12,0L86.84,213.888a5.846,5.846,0,0,1,0-8.12l4.528-4.528a5.846,5.846,0,0,1,8.12,0Z"
          transform="translate(-85.2 -185.078)"
        />
        <path
          class="c"
          d="M200.393,126.84a5.846,5.846,0,0,1,8.12,0l4.528,4.528a5.846,5.846,0,0,1,0,8.12l-34.353,34.2a5.846,5.846,0,0,1-8.12,0l-4.528-4.528a5.846,5.846,0,0,1,0-8.12Z"
          transform="translate(-148.941 -125.2)"
        />
      </g>
    </svg>
  );
};
const RemoveRedIcon = () => {
  return (
    <svg
      className="red_icon_red"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g class="a">
        <rect class="d" width="24" height="24" />
        <rect class="e" x="0.5" y="0.5" width="23" height="23" />
      </g>
      <g transform="translate(1.752 1.751)">
        <path
          class="b"
          d="M285,295.89v-1.281c.048-.355.085-.713.145-1.066a10.276,10.276,0,0,1,8.338-8.385c.373-.066.75-.106,1.125-.157h1.281c.349.046.7.079,1.047.139a10.286,10.286,0,0,1,8.4,8.345c.066.373.106.75.157,1.125v1.281c-.031.25-.058.5-.094.751a10.288,10.288,0,0,1-8.371,8.7c-.379.069-.762.107-1.144.159h-1.281c-.25-.031-.5-.058-.75-.093a10.289,10.289,0,0,1-8.7-8.37C285.091,296.656,285.052,296.271,285,295.89Zm19.03-.643a8.782,8.782,0,1,0-8.779,8.783A8.784,8.784,0,0,0,304.03,295.247Z"
          transform="translate(-285 -285)"
        />
        <path
          class="c"
          d="M435.648,434.633a1.981,1.981,0,0,1,.157-.214q1.477-1.481,2.957-2.959a.731.731,0,0,1,1.258.414.76.76,0,0,1-.263.66q-1.461,1.455-2.918,2.914a1.867,1.867,0,0,1-.186.143c.078.083.125.136.175.187q1.465,1.465,2.931,2.929a.756.756,0,0,1,.261.661.731.731,0,0,1-1.26.41L435.8,436.82c-.051-.051-.1-.1-.165-.158-.059.056-.113.1-.164.155q-1.465,1.465-2.93,2.93a.742.742,0,0,1-.721.245.726.726,0,0,1-.4-1.192c.043-.05.092-.1.14-.143l2.873-2.874c.051-.051.1-.1.155-.164-.058-.061-.106-.114-.157-.165q-1.472-1.472-2.945-2.944a.719.719,0,0,1-.209-.784.7.7,0,0,1,.6-.492.754.754,0,0,1,.661.259q1.441,1.447,2.886,2.889C435.492,434.445,435.545,434.514,435.648,434.633Z"
          transform="translate(-425.385 -425.371)"
        />
      </g>
    </svg>
  );
};

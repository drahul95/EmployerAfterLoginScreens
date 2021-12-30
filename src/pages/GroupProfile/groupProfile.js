import React from "react";
import "./groupProfile.scss";
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
  Container,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Modal,
  Backdrop,
  Fade,
  Menu,
  IconButton,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddIcon from "@material-ui/icons/Add";
import SchoolSMLIMG from "../../images/profile_schl.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import PersonIcon from "@material-ui/icons/Person";
// import PersonalProfileImg from "../../images/personalprofile.png";
// import ChatIcon from "@material-ui/icons/Chat";
import PropTypes from "prop-types";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { withStyles } from "@material-ui/core/styles";
import GroupImg from "../../images/groupimg.png";
// import MinimizeIcon from "@material-ui/icons/Minimize";

require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;
function PostAJob() {
  const EditGroupName = () => {
    const GroupNameNonEdit = document.querySelector(".groupnamenoneditable ");
    const GroupNameEdit = document.querySelector(".gourpeditable");
    if (GroupNameNonEdit.style.display === "block") {
      GroupNameNonEdit.style.display = "block";
      GroupNameEdit.style.display = "none";
    } else {
      GroupNameNonEdit.style.display = "none";
      GroupNameEdit.style.display = "block";
    }
  };

  const DescpHeight = () => {
    const GroupDescp = document.querySelector(".group_bottomdiv2");
    if (GroupDescp.clientHeight === 115) {
      GroupDescp.style.height = "auto";
      const ClickBtn = (document.querySelector(".morebtn").innerHTML = "Less");
    } else {
      GroupDescp.style.height = "115px";
      const ClickBtn = (document.querySelector(".morebtn").innerHTML = "More");
    }
  };

  const EditedGroupText = () => {
    const GroupNameNonEdit = document.querySelector(".groupnamenoneditable ");
    const GroupNameEdit = document.querySelector(".gourpeditable");
    if (GroupNameEdit.style.display === "none") {
      GroupNameNonEdit.style.display = "none";
      GroupNameEdit.style.display = "block";
    } else {
      GroupNameNonEdit.style.display = "block";
      GroupNameEdit.style.display = "none";
    }
  };
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const BlueRadio = withStyles({
    root: {
      color: "#2a5798",
      "&$checked": {
        color: "#2a5798",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChangeaccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openmodal, setOpenModal] = React.useState(false);

  const handleTemplateOpen = () => {
    setOpenModal(true);
  };

  const handleTemplateClose = () => {
    setOpenModal(false);
  };

  const [openmodalEditInstituiionName, setOpenModalEditInstituiionName] =
    React.useState(false);

  const handleEditInstituiionNameOpen = () => {
    setOpenModalEditInstituiionName(true);
  };

  const handleEditInstituiionNameClose = () => {
    setOpenModalEditInstituiionName(false);
  };

  const [openmodalEditGrpName, setOpenModalEditGrpName] = React.useState(false);

  const handleEditGrpNameOpen = () => {
    setOpenModalEditGrpName(true);
  };

  const handleEditGrpNameClose = () => {
    setOpenModalEditGrpName(false);
  };

  const [
    openmodalEditContactPersonNameDesignation,
    setOpenModalEditContactPersonNameDesignation,
  ] = React.useState(false);

  const handleEditContactPersonNameDesignationOpen = () => {
    setOpenModalEditContactPersonNameDesignation(true);
  };

  const handleEditContactPersonNameDesignationClose = () => {
    setOpenModalEditContactPersonNameDesignation(false);
  };

  const [openmodalAddContactPerson, setOpenModalAddContactPerson] =
    React.useState(false);

  const handleAddContactPersonOpen = () => {
    setOpenModalAddContactPerson(true);
  };

  const handleAddContactPersonClose = () => {
    setOpenModalAddContactPerson(false);
  };

  const [openmodalConfirmEmailID, setOpenModalConfirmEmailID] =
    React.useState(false);

  const handleConfirmEmailIDOpen = () => {
    setOpenModalConfirmEmailID(true);
  };

  const handleConfirmEmailIDClose = () => {
    setOpenModalConfirmEmailID(false);
  };

  const [openmodalAddInstitute, setOpenModalAddInstitute] =
    React.useState(false);

  const handleAddInstituteOpen = () => {
    setOpenModalAddInstitute(true);
  };

  const handleAddInstituteClose = () => {
    setOpenModalAddInstitute(false);
  };

  const [openmodalChangeImage, setOpenModalChangeImage] = React.useState(false);

  const handleChangeImageOpen = () => {
    setOpenModalChangeImage(true);
  };

  const handleChangeImageClose = () => {
    setOpenModalChangeImage(false);
  };

  const [openmodalPreview, setOpenModalPreview] = React.useState(false);

  const handlePreviewOpen = () => {
    setOpenModalPreview(true);
  };

  const handlePreviewClose = () => {
    setOpenModalPreview(false);
  };

  const [openmodalInstitute, setOpenModalInstitute] = React.useState(false);

  const handleInstituteOpen = () => {
    setOpenModalInstitute(true);
  };

  const handleInstituteClose = () => {
    setOpenModalInstitute(false);
  };

  const [openmodalConfirmPhone, setOpenModalConfirmPhone] =
    React.useState(false);

  const handleConfirmPhoneOpen = () => {
    setOpenModalConfirmPhone(true);
  };

  const handleConfirmPhoneClose = () => {
    setOpenModalConfirmPhone(false);
  };

  const [openmodalOTPEmailID, setOpenModalOTPEmailID] = React.useState(false);

  const handleOTPEmailIDOpen = () => {
    setOpenModalOTPEmailID(true);
  };

  const handleOTPEmailIDClose = () => {
    setOpenModalOTPEmailID(false);
  };

  const [openmodalOTPPhone, setOpenModalOTPPhone] = React.useState(false);

  const handleOTPPhoneOpen = () => {
    setOpenModalOTPPhone(true);
  };

  const handleOTPPhoneClose = () => {
    setOpenModalOTPPhone(false);
  };

  const [openmodalOTPEmailID2, setOpenModalOTPEmailID2] = React.useState(false);

  const handleOTPEmailID2Open = () => {
    setOpenModalOTPEmailID2(true);
  };

  const handleOTPEmailID2Close = () => {
    setOpenModalOTPEmailID2(false);
  };

  const [openmodalOTPPhone2, setOpenModalOTPPhone2] = React.useState(false);

  const handleOTPPhone2Open = () => {
    setOpenModalOTPPhone2(true);
  };

  const handleOTPPhone2Close = () => {
    setOpenModalOTPPhone2(false);
  };

  const [openmodalSuccessMsg, setOpenModalSuccessMsg] = React.useState(false);

  const handleSuccessMsgOpen = () => {
    setOpenModalSuccessMsg(true);
  };

  const handleSuccessMsgClose = () => {
    setOpenModalSuccessMsg(false);
  };

  const [openmodalSuccessMsgPhone, setOpenModalSuccessMsgPhone] =
    React.useState(false);

  const handleSuccessMsgPhoneOpen = () => {
    setOpenModalSuccessMsgPhone(true);
  };

  const handleSuccessMsgPhoneClose = () => {
    setOpenModalSuccessMsgPhone(false);
  };

  const [openmodalNewEmailID, setOpenModalNewEmailID] = React.useState(false);

  const handleNewEmailIDOpen = () => {
    setOpenModalNewEmailID(true);
  };

  const handleNewEmailIDClose = () => {
    setOpenModalNewEmailID(false);
  };

  const [openmodalNewPhone, setOpenModalNewPhone] = React.useState(false);

  const handleNewPhoneOpen = () => {
    setOpenModalNewPhone(true);
  };

  const handleNewPhoneClose = () => {
    setOpenModalNewPhone(false);
  };

  const [openmodalEditGroup, setOpenModalEditGroup] = React.useState(false);

  const handleEditGroupOpen = () => {
    setOpenModalEditGroup(true);
  };

  const handleEditGroupClose = () => {
    setOpenModalEditGroup(false);
  };

  const [openmodalImpInfo, setOpenModalImpInfo] = React.useState(false);

  const handleImpInfoOpen = () => {
    setOpenModalImpInfo(true);
  };

  const handleImpInfoClose = () => {
    setOpenModalImpInfo(false);
  };

  const [openmodalGrpName, setOpenModalGrpName] = React.useState(false);

  const handleGrpNameOpen = () => {
    setOpenModalGrpName(true);
  };

  const handleGrpNameClose = () => {
    setOpenModalGrpName(false);
  };

  const [openmodalDelTab, setOpenModalDelTab] = React.useState(false);

  const handleDelTabOpen = () => {
    setOpenModalDelTab(true);
  };

  const handleDelTabClose = () => {
    setOpenModalDelTab(false);
  };

  const OpenSelectDiv = () => {
    const SelectOptions = document.querySelector(".selectdiv");
    if (SelectOptions.style.display === "block") {
      SelectOptions.style.display = "none";
    } else {
      SelectOptions.style.display = "block";
    }
  };

  const OpenSelectDiv2 = () => {
    const SelectOptions = document.querySelector(".selectdiv2");
    if (SelectOptions.style.display === "block") {
      SelectOptions.style.display = "none";
    } else {
      SelectOptions.style.display = "block";
    }
  };

  const [anchorEldotsMenu, setAnchorEldotsMenu] = React.useState(null);
  const opendotsMenu = Boolean(anchorEldotsMenu);

  const handleClickdotsMenu = (event) => {
    setAnchorEldotsMenu(event.currentTarget);
    event.stopPropagation();
  };

  const handleClosedotsMenu = (e) => {
    setAnchorEldotsMenu(null);
  };

  return (
    <>
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
      <Box className="pagecontentarea groupprofile">
        <Container maxWidth="xl">
          <Grid container direction="row" justifyContent="space-between">
            <Grid item lg={4} md={12} xs={12} className="groupandcontarea">
              <Box component="div" className="group_detailsdiv">
                <Box component="div" className="groupbox">
                  <Box component="div" className="groupheader">
                    <GroupProfile />
                    <Typography variant="h4">Group Profile Details</Typography>
                    <Typography variant="span" className="marginautoright">
                      Last Edited : 12th, Aug 2021
                    </Typography>
                  </Box>
                </Box>
                <Box component="div" className="groupbottomtarea">
                  <Box component="div" className="group_bottomdiv">
                    <Box component="div" className="img">
                      <Typography variant="span">UG</Typography>
                    </Box>
                    <Typography variant="span" className="groupname">
                      UBC Groups
                    </Typography>
                    <Button
                      className="marginautoright"
                      onClick={handleEditGroupOpen}
                    >
                      <EditIcon />
                    </Button>
                  </Box>
                  <Box component="div" className="group_bottomdiv">
                    <WWWIcon />
                    <Typography variant="span" className="mt-1 font14">
                      ubcgroups.edu
                    </Typography>
                  </Box>
                  <Box component="div" className="group_bottomdiv2">
                    <Typography
                      variant="span"
                      className="font16 fontweight700 mb-2 block"
                    >
                      Group Description
                    </Typography>
                    <Typography
                      variant="span"
                      className="font14 line-height-1-5"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren
                    </Typography>
                  </Box>
                  <Box component="div" className="text-center">
                    <Button
                      className="transparentbtn noborder mt-1 morebtn"
                      onClick={DescpHeight}
                    >
                      More
                    </Button>
                  </Box>
                  <Button
                    startIcon={<PlusIcon className="mt-2" />}
                    onClick={handleEditGroupOpen}
                    className="dis_none"
                  >
                    Add Incomplete Details
                  </Button>
                </Box>
              </Box>

              <Box component="div" className="contact_detailsdiv">
                <Box component="div" className="contactbox">
                  <Box component="div" className="contactheader">
                    <ContactIcon />
                    <Typography variant="h4">Contact Person Details</Typography>
                    <Typography variant="span" className="marginautoright">
                      Last Edited : 12th, Aug 2021
                    </Typography>
                  </Box>
                </Box>
                <Box component="div" className="contactbottomtarea">
                  <Box component="div" className="contact_bottomdiv">
                    <Box component="div" className="img">
                      <Typography variant="span">RS</Typography>
                    </Box>
                    <Typography variant="span" className="groupname block mt-1">
                      Roshni Sharma
                      <Typography
                        variant="span"
                        className="font14 mt-1 block darkcolortext"
                      >
                        Human Resource
                      </Typography>
                    </Typography>

                    <Button
                      className="marginautoright"
                      onClick={handleEditContactPersonNameDesignationOpen}
                    >
                      <EditIcon />
                    </Button>
                  </Box>
                  <Box component="div" className="contact_bottomdiv">
                    <EmailIcon />
                    <Typography variant="span" className="contactname">
                      roshini.varma@gmail.com
                    </Typography>
                    <Button
                      className="marginautoright"
                      onClick={handleConfirmEmailIDOpen}
                    >
                      <EditIcon />
                    </Button>
                  </Box>
                  <Box component="div" className="contact_bottomdiv">
                    <TeleIcon />
                    <Typography variant="span" className="contactname">
                      8754764392
                    </Typography>
                    <Button
                      className="marginautoright"
                      onClick={handleConfirmPhoneOpen}
                    >
                      <EditIcon />
                    </Button>
                  </Box>
                  <Button
                    startIcon={<PlusIconNoCircle />}
                    onClick={handleAddContactPersonOpen}
                    className="mt-3"
                  >
                    Add Incomplete Details
                  </Button>
                </Box>
              </Box>
              <Button
                className="addbutton"
                startIcon={<PlusIconNoCircle />}
                onClick={handleAddInstituteOpen}
              >
                Add Institution
              </Button>
              <Button
                className="addbutton-mob"
                onClick={handleAddInstituteOpen}
              >
                <PlusIconWhite />
              </Button>
            </Grid>
            <Grid item lg={8} md={12} xs={12}>
              <Box
                component="div"
                className="schoolname-accordion common-accordion"
              >
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChangeaccordion("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="accordion-header"
                  >
                    <Box component="div">
                      <Typography variant="span" className="tabnumber">
                        01
                      </Typography>
                    </Box>
                    <Box component="div" className="titleareabox">
                      <Typography variant="span" className="titleheader">
                        DPS College of Engineering &amp; Management School
                      </Typography>
                      <Typography variant="span" className="statusredtext">
                        <Box component="div" className="statusred"></Box>{" "}
                        Incomplete
                      </Typography>
                    </Box>

                    <Box
                      component="div"
                      className="marginautoright dis_flex mt-2 editarea"
                    >
                      <Box component="div" className="me-2 edittimediv">
                        <Typography className="font14 edittext">
                          Last Edited : 12th, Aug 2021
                        </Typography>
                      </Box>
                      <Box component="div" className="webbuttonsarea">
                        <Button
                          className="transparentbtn noborder mt-1"
                          onClick={handlePreviewOpen}
                        >
                          <EyeViewIcon />
                        </Button>
                        <Button
                          className="transparentbtn noborder mt-1"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <EditIcon />
                        </Button>
                        <Button
                          className="transparentbtn noborder mt-1"
                          onClick={handleDelTabOpen}
                        >
                          <RemoveRedIcon />
                        </Button>
                      </Box>
                      <Box component="div" className="mobdots">
                        <IconButton
                          aria-label="more"
                          aria-controls="long-menu"
                          aria-haspopup="true"
                          className="mobdostbtn"
                          onClick={handleClickdotsMenu}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          anchorEl={anchorEldotsMenu}
                          keepMounted
                          open={opendotsMenu}
                          onClose={handleClosedotsMenu}
                          PaperProps={{
                            style: {
                              width: "auto",
                            },
                          }}
                        >
                          <MenuItem>
                            <Button
                              className="transparentbtn noborder mt-1"
                              onClick={(e) => {
                                handlePreviewOpen();
                                handleClosedotsMenu();
                              }}
                            >
                              <EyeViewIcon />
                            </Button>
                          </MenuItem>
                          <MenuItem onClick={handleClosedotsMenu}>
                            <Button className="transparentbtn noborder mt-1">
                              <EditIcon />
                            </Button>
                          </MenuItem>
                          <MenuItem>
                            <Button
                              className="transparentbtn noborder mt-1"
                              onClick={(e) => {
                                handleDelTabOpen();
                                handleClosedotsMenu();
                              }}
                            >
                              <RemoveRedIcon />
                            </Button>
                          </MenuItem>
                        </Menu>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box component="div" className="fullwidth_100percent">
                      <Box component="div" className="topheader">
                        <Box component="div" className="collegepic">
                          <Collegepic />
                        </Box>
                        <Box component="div" className="CollegeTitle">
                          <Typography component="h4">
                            DPS College of Engineering and Management Institute
                          </Typography>
                          <Typography component="span">
                            College / University
                          </Typography>
                        </Box>
                      </Box>
                      <Box component="div" className="detailsarea">
                        <Box component="div" className="detailsdiv">
                          <Ownership />
                          <Box component="div">
                            <Typography
                              component="span"
                              className="font14 block mb-2"
                            >
                              Type of Ownership
                            </Typography>
                            <Typography component="span" className="font16">
                              Parent company of a brand
                            </Typography>
                          </Box>
                        </Box>
                        <Box component="div" className="detailsdiv">
                          <Brand />
                          <Box component="div">
                            <Typography
                              component="span"
                              className="font14 block mb-2"
                            >
                              Name of the Brand
                            </Typography>
                            <Typography component="span" className="font16">
                              DPS Group
                            </Typography>
                          </Box>
                        </Box>
                        <Box component="div" className="detailsdiv">
                          <Employees />
                          <Box component="div">
                            <Typography
                              component="span"
                              className="font14 block mb-2"
                            >
                              Current Employees Strength
                            </Typography>
                            <Typography component="span" className="font16">
                              500
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box component="div" className="detailsareasingle">
                        <Box component="div" className="detailsdiv">
                          <Courses />
                          <Box component="div" className="divarea">
                            <Typography
                              component="span"
                              className="font14 block mb-2"
                            >
                              Courses Offered
                            </Typography>
                            <Box className="multilist">
                              <Box component="div" className="confirmed">
                                <Typography variant="span">
                                  Bachelor's Of Science
                                </Typography>
                              </Box>
                              <Box component="div" className="pending">
                                <Typography variant="span">
                                  Bachelors of Business Administration
                                </Typography>
                                <Typography
                                  variant="span"
                                  className="pendingtext"
                                >
                                  Pending for approval
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box component="div" className="detailsarea">
                        <Box component="div" className="detailsdiv">
                          <Globe />
                          <Box component="div" className="detailscont">
                            <Typography
                              variant="span"
                              className="font14 block mb-2"
                            >
                              Country
                            </Typography>
                            <Typography component="span" className="font16">
                              India
                            </Typography>
                          </Box>
                        </Box>
                        <Box component="div" className="detailsdiv">
                          <City />
                          <Box component="div" className="detailscont">
                            <Typography
                              component="span"
                              className="font14 block mb-2"
                            >
                              City
                            </Typography>
                            <Typography component="span" className="font16">
                              Kolkata
                            </Typography>
                          </Box>
                        </Box>
                        <Box component="div" className="detailsdiv">
                          <PinCode />
                          <Box component="div" className="detailscont">
                            <Typography
                              component="span"
                              className="font14 block mb-2"
                            >
                              Pincode
                            </Typography>
                            <Typography component="span" className="font16">
                              700001
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box component="div" className="detailsareasingle">
                        <Box component="div" className="detailsdiv">
                          <Address />
                          <Box component="div" className="detailscont">
                            <Typography
                              component="span"
                              className="font14 block mb-2"
                            >
                              Address
                            </Typography>
                            <Typography component="span" className="font16">
                              BN Block, Sector V, Bidhannagar, Kolkata, West
                              Bengal 700091, India
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box component="div" className="detailsareasingle">
                        <Box component="div" className="detailsdiv">
                          <URL />
                          <Box component="div" className="detailscont">
                            <Typography
                              component="span"
                              className="font14 block mb-2"
                            >
                              Institution Website URL
                            </Typography>
                            <Typography component="span" className="font16">
                              https://www.dpskolkata.com/
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box component="div" className="detailsareasingle">
                        <Box component="div" className="detailsdiv">
                          <Description />
                          <Box component="div" className="detailscont">
                            <Typography
                              component="span"
                              className="font14 block mb-2"
                            >
                              Brief Institution Description
                            </Typography>
                            <Typography component="span" className="font16">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita kasd gubergren, no
                              se taki mata sanctus est Lorem ipsum dolor sit
                              amet. Lorem ipsum dolor sit amet, consetetur
                              sadipscing elitr, sed diam nonumy eirmod tempor
                              invidunt ut labore et dolore magna aliquyam erat,
                              sed diam voluptua. At vero eos et accusam et justo
                              duo dolores.
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box component="div" className="detailsarea">
                        <Box component="div" className="detailsdiv">
                          <Branches />
                          <Box component="div" className="detailscont">
                            <Typography
                              component="span"
                              className="font14 block mb-2"
                            >
                              No. Of Branches
                            </Typography>
                            <Typography component="span" className="font16">
                              3
                            </Typography>
                          </Box>
                        </Box>
                        <Box component="div" className="detailsdiv">
                          <Students />
                          <Box component="div" className="detailscont">
                            <Typography
                              component="span"
                              className="font14 block mb-2"
                            >
                              Current Students Strength
                            </Typography>
                            <Typography component="span" className="font16">
                              1000
                            </Typography>
                          </Box>
                        </Box>
                        <Box component="div" className="detailsdiv"></Box>
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChangeaccordion("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="accordion-header"
                  >
                    <Box component="div">
                      <Typography variant="span" className="tabnumber">
                        02
                      </Typography>
                    </Box>
                    <Box component="div" className="titleareabox">
                      <Typography variant="span" className="titleheadervetting">
                        Saltlake School
                      </Typography>
                    </Box>

                    <Box
                      component="div"
                      className="marginautoright dis_flex mt-2"
                    >
                      <Box component="div">
                        <Typography
                          component="span"
                          className="darkcolortext vettingmsg font12 mt-1 pe-3"
                        >
                          <HourGlass />
                          This institution category is under vetting!
                        </Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box component="div" className="fullwidth_100percent">
                      <Box component="div" className="topheader">
                        <Box component="div" className="collegepic">
                          <Collegepic />
                        </Box>
                        <Box component="div" className="CollegeTitle">
                          <Typography component="h4">
                            Saltlake School
                          </Typography>
                          <Typography component="span" className="block">
                            School
                          </Typography>
                          <Typography component="span" className="block">
                            Board of Secondary Education, Odisha
                          </Typography>
                          <Typography
                            component="span"
                            className="darkcolortext vettingmsg"
                          >
                            <HourGlass />
                            Under vetting!
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChangeaccordion("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="accordion-header"
                  >
                    <Box component="div">
                      <Typography variant="span" className="tabnumber">
                        03
                      </Typography>
                    </Box>
                    <Box component="div" className="titleareabox">
                      <Typography variant="span" className="titleheader">
                        EuroKids Preschool at CK Block
                      </Typography>
                      <Typography variant="span" className="statusredtext">
                        <Box component="div" className="statusred"></Box>{" "}
                        Incomplete
                      </Typography>
                    </Box>

                    <Box
                      component="div"
                      className="marginautoright dis_flex mt-2 editareabox "
                    >
                      <Box component="div" className="webbuttonsarea">
                        <Button
                          className="transparentbtn noborder mt-1"
                          onClick={handlePreviewOpen}
                        >
                          <EyeViewIcon />
                        </Button>
                        <Button
                          className="transparentbtn noborder mt-1"
                          onClick={handleDelTabOpen}
                        >
                          <RemoveRedIcon />
                        </Button>
                      </Box>
                      <Box component="div" className="mobdots">
                        <IconButton
                          aria-label="more"
                          aria-controls="long-menu"
                          aria-haspopup="true"
                          className="mobdostbtn"
                          onClick={handleClickdotsMenu}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          anchorEl={anchorEldotsMenu}
                          keepMounted
                          open={opendotsMenu}
                          onClose={handleClosedotsMenu}
                          PaperProps={{
                            style: {
                              width: "auto",
                            },
                          }}
                        >
                          <MenuItem>
                            <Button
                              className="transparentbtn noborder mt-1"
                              onClick={(e) => {
                                handlePreviewOpen();
                                handleClosedotsMenu();
                              }}
                            >
                              <EyeViewIcon />
                            </Button>
                          </MenuItem>
                          <MenuItem onClick={handleClosedotsMenu}>
                            <Button className="transparentbtn noborder mt-1">
                              <EditIcon />
                            </Button>
                          </MenuItem>
                          <MenuItem>
                            <Button
                              className="transparentbtn noborder mt-1"
                              onClick={(e) => {
                                handleDelTabOpen();
                                handleClosedotsMenu();
                              }}
                            >
                              <RemoveRedIcon />
                            </Button>
                          </MenuItem>
                        </Menu>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box component="div" className="fullwidth_100percent">
                      <Typography
                        variant="span"
                        className="block text-center darkcolortext"
                      >
                        <ImpNote />
                        Important Information
                      </Typography>
                      <Box component="div" className="topheader">
                        <Box component="div" className="imgarea">
                          <Collegepic />
                          <Button
                            className="darkbluecolor whitecolortext"
                            onClick={handleChangeImageOpen}
                          >
                            <EditWhiteIcon />
                          </Button>
                        </Box>
                      </Box>
                      <form action="">
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Grid item lg={6} md={6}>
                            <label className="font12 mt-3 mb-2 block">
                              Name of Institution
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalf me-2"
                            >
                              <Typography
                                variant="span"
                                className="font14 top-2"
                              >
                                EuroKids Preschool at CK Block
                              </Typography>
                              <Button
                                className="marginautoright editbutton"
                                onClick={handleTemplateOpen}
                              >
                                <EditIcon />
                              </Button>
                            </Box>
                          </Grid>
                          <Grid item lg={6} md={6}>
                            <label className="font12 mt-3 mb-2 ms-2 block">
                              Type of institution
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalfdisabled ms-2"
                            >
                              <input
                                type="text"
                                disabled
                                placeholder="Institution"
                              />
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                          className="buttonselectionarea"
                        >
                          <Grid item lg={4} md={4}>
                            <Box component="div" className="me-2">
                              <Button className="darkbluecolor whitecolortext border8 mt-3 fullwidth_100percent pt-3 pb-3">
                                Parent Company of a Brand
                              </Button>
                            </Box>
                          </Grid>
                          <Grid item lg={4} md={4}>
                            <Box component="div" className="ms-2">
                              <Button className="lightbluecolor blackcolortext border8 mt-3 fullwidth_100percent pt-3 pb-3">
                                Franchisee of a Brand
                              </Button>
                            </Box>
                          </Grid>
                          <Grid item lg={4} md={4}>
                            <Box component="div" className="ms-4">
                              <Button className="lightbluecolor blackcolortext border8 mt-3 fullwidth_100percent pt-3 pb-3">
                                Not part of a Brand
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Grid item xs={12}>
                            <label className="font12 mt-3 mb-2 block">
                              Name of the Brand
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalf"
                            >
                              <input
                                type="text"
                                placeholder="Enter Brand name"
                              />
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Grid item lg={6} md={6}>
                            <label className="font12 mt-3 mb-2 block">
                              Current Employees Strength
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalf me-2"
                            >
                              <input
                                type="text"
                                placeholder="Enter your number of Employees"
                              />
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Grid item xs={12} className="p-rel">
                            <label className="font12 mt-3 mb-2 block">
                              Courses Offered
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalfcursesselect"
                              onClick={OpenSelectDiv}
                            >
                              <Box
                                component="div"
                                className="selectcorsesdiv dis_flex"
                              >
                                <Box
                                  component="div"
                                  className="selectedcourses"
                                >
                                  <Typography
                                    variant="span"
                                    className="me-2 font14 whitecolortext"
                                  >
                                    Bachelor's Of Science
                                  </Typography>
                                  <Button className="close-btn">
                                    <CloseBtn />
                                  </Button>
                                </Box>
                                <Box
                                  component="div"
                                  className="selectedcourses"
                                >
                                  <Typography
                                    variant="span"
                                    className="me-2 font14 whitecolortext"
                                  >
                                    Bachelor's Of Science
                                  </Typography>
                                  <Button className="close-btn">
                                    <CloseBtn />
                                  </Button>
                                </Box>
                                <Box
                                  component="div"
                                  className="selectedcourses"
                                >
                                  <Typography
                                    variant="span"
                                    className="me-2 font14 whitecolortext"
                                  >
                                    Bachelor's Of Science
                                  </Typography>
                                  <Button className="close-btn">
                                    <CloseBtn />
                                  </Button>
                                </Box>
                                <Box
                                  component="div"
                                  className="selectedcourses"
                                >
                                  <Typography
                                    variant="span"
                                    className="me-2 font14 whitecolortext"
                                  >
                                    +10 more
                                  </Typography>
                                  <Button className="close-btn">
                                    <CloseBtn />
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                            <Box component="div" className="selectdiv">
                              <Box
                                component="div"
                                className="inputselectsearch dis_flex"
                              >
                                <SrchIcon />
                                <input type="text" placeholder="Search" />
                              </Box>
                              <Box
                                component="div"
                                className="dis_flex addbtnsrch"
                              >
                                <Typography
                                  variant="span"
                                  className="font14 darkcolortext"
                                >
                                  <AddCourseIcon />
                                  Bachelor of Arts
                                </Typography>
                              </Box>
                              <Box component="div" className="listcourses">
                                <ul>
                                  <li>
                                    <a href="javascript:void(0)">
                                      Bachelors of Business Administration
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)">
                                      Bachelors of Science
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)">
                                      Bachelors Of Science Physics
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)">
                                      Bachelors of Science Biology
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)">
                                      Bachelors of Science Biology
                                    </a>
                                  </li>
                                </ul>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Grid item lg={6} md={6}>
                            <label className="font12 mt-3 mb-2 block">
                              Country
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalfdisabled me-2"
                            >
                              <input
                                type="text"
                                disabled
                                defaultValue="India"
                              />
                            </Box>
                          </Grid>
                          <Grid item lg={6} md={6} className="p-rel">
                            <label className="font12 mt-3 mb-2 ms-2 block">
                              City
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalf ms-2"
                              onClick={OpenSelectDiv2}
                            >
                              <input type="text" placeholder="City" />
                            </Box>
                            <Box component="div" className="selectdiv2 ms-2">
                              <Box
                                component="div"
                                className="inputselectsearch dis_flex"
                              >
                                <SrchIcon />
                                <input type="text" placeholder="Search" />
                              </Box>
                              <Box component="div" className="listcourses">
                                <ul>
                                  <li>
                                    <a href="javascript:void(0)">Kolkata</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)">Mumbai</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)">Delhi</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)">Chennai</a>
                                  </li>
                                </ul>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Grid item xs={12}>
                            <label className="font12 mt-3 mb-2 block">
                              Address
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalf"
                            >
                              <input type="text" placeholder="Address" />
                            </Box>
                            <Typography
                              variant="span"
                              className="text-right font12 mt-1 block"
                            >
                              50/100 Characters remaining
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Grid item lg={6} md={6}>
                            <label className="font12 mt-3 mb-2 block">
                              Pincode
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalf me-2"
                            >
                              <input type="text" placeholder="Pincode" />
                            </Box>
                          </Grid>
                        </Grid>
                        <Typography
                          variant="span"
                          className="block text-center mt-4 darkcolortext"
                        >
                          <AddNote />
                          Additional Information
                        </Typography>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Grid item xs={12}>
                            <label className="font12 mt-3 mb-2 block">
                              URL link
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalflinkdiv me-2"
                            >
                              <Box component="div" className="httpsdiv">
                                <Typography variant="span" className="font14">
                                  https://
                                </Typography>
                              </Box>
                              <input
                                type="text"
                                placeholder="URL"
                                defaultValue="www.example.com"
                              />
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Grid item xs={12}>
                            <label className="font12 mt-3 mb-2 block">
                              Brief Description
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalftextarea"
                            >
                              <textarea
                                placeholder="Tell us something you would want the employees to know!"
                                name=""
                                id=""
                                cols="30"
                                rows="5"
                              ></textarea>
                            </Box>
                            <Typography
                              variant="span"
                              className="text-right font12 mt-1 block"
                            >
                              50/100 Characters remaining
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Grid item lg={6} md={6}>
                            <label className="font12 mt-3 mb-2 block">
                              Students Strength
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalf me-2"
                            >
                              <input
                                type="text"
                                placeholder="Enter your number of students"
                              />
                            </Box>
                          </Grid>
                          <Grid item lg={6} md={6}>
                            <label className="font12 mt-3 mb-2 ms-2 block">
                              No. Of Branches
                            </label>
                            <Box
                              component="div"
                              className="dis_flex inputboxhalf ms-2"
                            >
                              <input
                                type="text"
                                placeholder="Enter your number of branches"
                              />
                            </Box>
                          </Grid>
                        </Grid>
                        <Button
                          className="darkbluecolor whitecolortext border8 mt-3 fullwidth_100percent pt-3 pb-3"
                          onClick={handleImpInfoOpen}
                        >
                          Save
                        </Button>
                      </form>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Modal institution warning */}
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
          <Box component="div" className="warningmodal">
            <Box component="div" className="text-center">
              <Institution />
            </Box>
            <Typography
              variant="span"
              id="transition-modal-description"
              className="mb-3 mt-2 font14 text-center block"
            >
              Are you sure you want to change the institution name? We will have
              to notify all the candidates who have saved/applied to/invited
              to/under process for jobs associated with this institution.
            </Typography>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button className="fullwidth_100percent lightbluecolor blackcolortext me-3">
                No
              </Button>
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext ms-3"
                onClick={(e) => {
                  handleEditInstituiionNameOpen();
                  handleTemplateClose();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Yes
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit Institution Name Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalEditInstituiionName}
        onClose={handleEditInstituiionNameClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalEditInstituiionName}>
          <Box component="div" className="editmediummodal">
            <Box component="div" className="dis_flex">
              <Typography variant="span" className="fontweight700 font18">
                Edit Name of the Institution
              </Typography>
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleEditInstituiionNameClose();
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
            <Box component="div">
              <label className="font12 mt-4 mb-2 block">
                Name of the Institution
              </label>
              <input
                type="text"
                className="blueinputarea fullwidth_100percent"
              />
            </Box>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext"
                onClick={(e) => {
                  handleEditInstituiionNameClose();
                }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Modal Important Information warning */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalImpInfo}
        onClose={handleImpInfoClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalImpInfo}>
          <Box component="div" className="warningmodal">
            <Box component="div" className="text-center">
              <Institution />
            </Box>
            <Typography
              variant="span"
              id="transition-modal-description"
              className="mb-3 mt-2 font14 text-center block"
            >
              Important information still missing for this Institution, do you
              want to update the profile as it is?
            </Typography>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button className="fullwidth_100percent lightbluecolor blackcolortext me-3">
                No
              </Button>
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext ms-3"
                onClick={(e) => {
                  handleImpInfoClose();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Yes
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Modal Delete tab */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalDelTab}
        onClose={handleDelTabClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalDelTab}>
          <Box component="div" className="warningmodal">
            <Box component="div" className="text-center">
              <RemoveRedIconBig />
            </Box>
            <Typography
              variant="span"
              id="transition-modal-description"
              className="mb-3 mt-2 font14 text-center block"
            >
              Are you sure you want to delete the institution? We will have to
              notify all the candidates who have saved/applied to/invited
              to/under process for jobs associated with this institution.
            </Typography>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button className="fullwidth_100percent lightbluecolor blackcolortext me-3">
                No
              </Button>
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext ms-3"
                onClick={(e) => {
                  handleDelTabClose();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Yes
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Modal Edit Group Details*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalEditGroup}
        onClose={handleEditGroupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalEditGroup}>
          <Box component="div" className="editmodal">
            <Box component="div" className="dis_flex">
              <Typography variant="span" className="fontweight500 font18">
                Edit Group Profile Details
              </Typography>
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleEditGroupClose();
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
            <Box component="div" className="mt-3 mb-3">
              <Box component="div" className="topheader">
                <Box component="div" className="imgarea">
                  <img src={BASE_URL + GroupImg} alt="" />
                  <Button
                    className="darkbluecolor whitecolortext"
                    onClick={(e) => {
                      handleEditGroupClose();
                      handleChangeImageOpen();
                    }}
                  >
                    <EditWhiteIcon />
                  </Button>
                </Box>
              </Box>
              <form action="">
                <Grid container direction="row" justifyContent="space-between">
                  <Grid item xs={12}>
                    <label className="font12 mt-3 mb-2 block">Group Name</label>
                    <Box component="div" className="dis_flex inputboxhalf">
                      <Typography variant="span" className="font14 top-2">
                        UBC Groups
                      </Typography>
                      <Button
                        className="marginautoright editbutton"
                        onClick={(e) => {
                          handleEditGroupClose();
                          handleGrpNameOpen();
                        }}
                      >
                        <EditIcon />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="space-between">
                  <Grid item xs={12}>
                    <label className="font12 mt-3 mb-2 block">
                      Year Founded
                    </label>
                    <Box component="div" className="dis_flex inputboxhalf">
                      <input type="text" defaultValue="2000" />
                    </Box>
                  </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="space-between">
                  <Grid item xs={12}>
                    <label className="font12 mt-3 mb-2 block">
                      Group Website URL
                    </label>
                    <Box
                      component="div"
                      className="dis_flex inputboxhalflinkdiv"
                    >
                      <Box component="div" className="httpsdiv">
                        <Typography variant="span" className="font14">
                          https://
                        </Typography>
                      </Box>
                      <input
                        type="text"
                        placeholder="URL"
                        defaultValue="www.example.com"
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="space-between">
                  <Grid item xs={12}>
                    <label className="font12 mt-3 mb-2 block">
                      Group Description
                    </label>
                    <Box
                      component="div"
                      className="dis_flex inputboxhalftextarea"
                    >
                      <textarea
                        placeholder="Tell us something about your Group"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                      ></textarea>
                    </Box>
                    <Typography
                      variant="span"
                      className="text-right font12 mt-1 block"
                    >
                      0/800 Characters remaining
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Box>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext"
                onClick={(e) => {
                  handleEditGroupClose();
                }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Modal Group name warning */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalGrpName}
        onClose={handleGrpNameClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalGrpName}>
          <Box component="div" className="warningmodal">
            <Box component="div" className="text-center">
              <Institution />
            </Box>
            <Typography
              variant="span"
              id="transition-modal-description"
              className="mb-3 mt-2 font14 text-center block"
            >
              Are you sure you want to change the group name? We will have to
              notify all the candidates who have saved/applied to/invited
              to/under process for jobs associated with this group.
            </Typography>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button className="fullwidth_100percent lightbluecolor blackcolortext me-3">
                No
              </Button>
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext ms-3"
                onClick={(e) => {
                  handleGrpNameClose();
                  handleEditGrpNameOpen();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Yes
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit Group Name Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalEditGrpName}
        onClose={handleEditGrpNameClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalEditGrpName}>
          <Box component="div" className="editmediummodal">
            <Box component="div" className="dis_flex">
              <Typography variant="span" className="fontweight700 font18">
                Edit Group Name
              </Typography>
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleEditGrpNameClose();
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
            <Box component="div">
              <label className="font12 mt-4 mb-2 block">Group Name</label>
              <input
                type="text"
                className="blueinputarea fullwidth_100percent"
              />
            </Box>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext"
                onClick={(e) => {
                  handleEditGrpNameClose();
                }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit Contact Person Details Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalEditContactPersonNameDesignation}
        onClose={handleEditContactPersonNameDesignationClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalEditContactPersonNameDesignation}>
          <Box component="div" className="editmediummodal">
            <Box component="div" className="dis_flex">
              <Typography variant="span" className="fontweight700 font18">
                Edit Contact Person Details
              </Typography>
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleEditContactPersonNameDesignationClose();
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
            <Box component="div">
              <label className="font12 mt-4 mb-2 block">
                Contact Person Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="blueinputarea fullwidth_100percent"
              />
            </Box>
            <Box component="div">
              <label className="font12 mb-2 block">Designation</label>
              <input
                type="text"
                defaultValue="Human Resources"
                className="blueinputarea fullwidth_100percent"
              />
            </Box>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext"
                onClick={(e) => {
                  handleEditContactPersonNameDesignationClose();
                }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit Confirmation Email Id Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalConfirmEmailID}
        onClose={handleConfirmEmailIDClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalConfirmEmailID}>
          <Box component="div" className="warningmodal">
            <Box component="div" className="text-center">
              <EmailIconBig />
            </Box>
            <Typography
              variant="span"
              id="transition-modal-description"
              className="mb-3 mt-2 font14 text-center block"
            >
              Are you sure you want to
              <br /> edit your Email Id?
            </Typography>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button className="fullwidth_100percent lightbluecolor blackcolortext me-3 ms-3">
                No
              </Button>
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext ms-3 me-3"
                onClick={(e) => {
                  handleConfirmEmailIDClose();
                  handleOTPEmailIDOpen();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Yes
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit OTP Email Id Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalOTPEmailID}
        onClose={handleOTPEmailIDClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalOTPEmailID}>
          <Box component="div" className="editmediummodal2">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleOTPEmailIDClose();
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
            <Box component="div" className="text-center">
              <Typography
                variant="span"
                className="font18 block text-center mt-1 mb-4"
              >
                Edit your Email ID
              </Typography>
            </Box>
            <Box component="div" className="">
              <label className="font12 mb-2 block">
                Enter OTP sent to your existing email ID and Phone Number
              </label>
              <Box component="div" className="otp-div dis_flex">
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
              </Box>
            </Box>
            <Box component="div" className="mb-2">
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext"
                onClick={(e) => {
                  handleOTPEmailIDClose();
                  handleNewEmailIDOpen();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Verify
              </Button>
            </Box>
            <Box component="div" className="mb-2 text-center">
              <Button className="darkcolortext transparentbtn noborder">
                Resend OTP
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* New Email Id Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalNewEmailID}
        onClose={handleNewEmailIDClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalNewEmailID}>
          <Box component="div" className="editmediummodal2">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleNewEmailIDClose();
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
            <Box component="div" className="text-center">
              <Typography
                variant="span"
                className="font18 block text-center mt-1 mb-4"
              >
                Edit your Email ID
              </Typography>
            </Box>
            <Box component="div" className="">
              <label className="font12 mb-2 block">
                Enter your new Email Id to get verified
              </label>
              <input
                type="text"
                className="blueinputarea fullwidth_100percent"
              />
            </Box>
            <Box component="div" className="mb-2">
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext"
                onClick={(e) => {
                  handleNewEmailIDClose();
                  handleOTPEmailID2Open();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Get Verification Code
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* New Email Id OTP Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalOTPEmailID2}
        onClose={handleOTPEmailID2Close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalOTPEmailID2}>
          <Box component="div" className="editmediummodal2">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleOTPEmailID2Close();
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
            <Box component="div" className="text-center">
              <Typography
                variant="span"
                className="font18 block text-center mt-1 mb-4"
              >
                Edit your Email ID
              </Typography>
            </Box>
            <Box component="div" className="">
              <label className="font12 mb-2 block">
                Enter OTP sent to sh***@gmail.com
              </label>
              <Box component="div" className="otp-div dis_flex">
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
              </Box>
            </Box>
            <Box component="div" className="mb-2">
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext"
                onClick={(e) => {
                  handleOTPEmailID2Close();
                  handleSuccessMsgOpen();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Verify
              </Button>
            </Box>
            <Box component="div" className="mb-2 text-center">
              <Button className="darkcolortext transparentbtn noborder">
                Resend OTP
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Success Message Email Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalSuccessMsg}
        onClose={handleSuccessMsgClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalSuccessMsg}>
          <Box component="div" className="editmodal">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleSuccessMsgClose();
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
            <Box component="div" className="text-center">
              <SuccessIcon />
            </Box>
            <Box component="div" className="text-center">
              <Typography
                variant="span"
                className="font22 fontweight700 mt-2 mb-4 block"
              >
                Your Email ID has been changed successfully
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit Confirmation Phone Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalConfirmPhone}
        onClose={handleConfirmPhoneClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalConfirmPhone}>
          <Box component="div" className="warningmodal">
            <Box component="div" className="text-center">
              <TeleIconBIG />
            </Box>
            <Typography
              variant="span"
              id="transition-modal-description"
              className="mb-3 mt-2 font14 text-center block"
            >
              Are you sure you want to
              <br /> edit your Phone Number?
            </Typography>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button className="fullwidth_100percent lightbluecolor blackcolortext me-3 ms-3">
                No
              </Button>
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext ms-3 me-3"
                onClick={(e) => {
                  handleConfirmPhoneClose();
                  handleOTPPhoneOpen();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Yes
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit OTP Phone Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalOTPPhone}
        onClose={handleOTPPhoneClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalOTPPhone}>
          <Box component="div" className="editmediummodal2">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleOTPPhoneClose();
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
            <Box component="div" className="text-center">
              <Typography
                variant="span"
                className="font18 block text-center mt-1 mb-4"
              >
                Edit your Phone Number
              </Typography>
            </Box>
            <Box component="div" className="">
              <label className="font12 mb-2 block">
                Enter OTP sent to your existing email ID and Phone Number
              </label>
              <Box component="div" className="otp-div dis_flex">
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
              </Box>
            </Box>
            <Box component="div" className="mb-2">
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext"
                onClick={(e) => {
                  handleOTPPhoneClose();
                  handleNewPhoneOpen();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Verify
              </Button>
            </Box>
            <Box component="div" className="mb-2 text-center">
              <Button className="darkcolortext transparentbtn noborder">
                Resend OTP
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* New Phone Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalNewPhone}
        onClose={handleNewPhoneClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalNewPhone}>
          <Box component="div" className="editmediummodal2">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleNewPhoneClose();
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
            <Box component="div" className="text-center">
              <Typography
                variant="span"
                className="font18 block text-center mt-1 mb-4"
              >
                Edit your Phone Number
              </Typography>
            </Box>
            <Box component="div" className="">
              <label className="font12 mb-2 block">
                Enter your new Phone Number to get verified
              </label>
              <Box component="div" className="dis_flex">
                <Box component="div" className="countrycodeboxdisabled">
                  <Typography>+91</Typography>
                </Box>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="blueinputarea fullwidth_100percent"
                />
              </Box>
            </Box>
            <Box component="div" className="mb-2">
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext"
                onClick={(e) => {
                  handleNewPhoneClose();
                  handleOTPPhone2Open();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Get Verification Code
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* New Phone Number OTP Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalOTPPhone2}
        onClose={handleOTPPhone2Close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalOTPPhone2}>
          <Box component="div" className="editmediummodal2">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleOTPPhone2Close();
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
            <Box component="div" className="text-center">
              <Typography
                variant="span"
                className="font18 block text-center mt-1 mb-4"
              >
                Edit your Phone Number
              </Typography>
            </Box>
            <Box component="div" className="">
              <label className="font12 mb-2 block">
                Enter OTP sent to +91 9876***10
              </label>
              <Box component="div" className="otp-div dis_flex">
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="lightbluecolor blcktxtclr font14"
                />
              </Box>
            </Box>
            <Box component="div" className="mb-2">
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext"
                onClick={(e) => {
                  handleOTPPhone2Close();
                  handleSuccessMsgPhoneOpen();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Verify
              </Button>
            </Box>
            <Box component="div" className="mb-2 text-center">
              <Button className="darkcolortext transparentbtn noborder">
                Resend OTP
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Success Message Phone Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalSuccessMsgPhone}
        onClose={handleSuccessMsgPhoneClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalSuccessMsgPhone}>
          <Box component="div" className="editmodal">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleSuccessMsgPhoneClose();
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
            <Box component="div" className="text-center">
              <SuccessIcon />
            </Box>
            <Box component="div" className="text-center">
              <Typography
                variant="span"
                className="font22 fontweight700 mt-2 mb-4 block"
              >
                Your Phone Number has been changed successfully
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* ADD Contact Person Details Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalAddContactPerson}
        onClose={handleAddContactPersonClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalAddContactPerson}>
          <Box component="div" className="editmediummodal">
            <Box component="div" className="dis_flex">
              <Typography variant="span" className="fontweight700 font18">
                Add Contact Person Details
              </Typography>
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleAddContactPersonClose();
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
            <Box component="div">
              <label className="font12 mt-4 mb-2 block">
                Contact Person Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="blueinputarea fullwidth_100percent"
              />
            </Box>
            <Box component="div">
              <label className="font12 mb-2 block">Designation</label>
              <input
                type="text"
                placeholder="Enter Designation"
                className="blueinputarea fullwidth_100percent"
              />
            </Box>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext"
                onClick={(e) => {
                  handleAddContactPersonClose();
                }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Add Institute Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalAddInstitute}
        onClose={handleAddInstituteClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalAddInstitute}>
          <Box component="div" className="warningmodal">
            <Box component="div" className="text-center">
              <Institution />
            </Box>
            <Typography
              variant="span"
              id="transition-modal-description"
              className="mb-3 mt-2 font14 text-center block"
            >
              Are you sure you want to add another
              <br /> Institute?
            </Typography>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button className="fullwidth_100percent lightbluecolor blackcolortext me-3 ms-3">
                No
              </Button>
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext ms-3 me-3"
                onClick={(e) => {
                  handleAddInstituteClose();
                  handleInstituteOpen();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Yes
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Institute Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalInstitute}
        onClose={handleInstituteClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalInstitute}>
          <Box component="div" className="editmediummodal2">
            <Box component="div" className="text-center">
              <Institutionsml />
              <Typography variant="span" className="me-2">
                Institution Details
              </Typography>
            </Box>
            <Box component="div">
              <Typography
                variant="h4"
                className="bold blcktxtclr groupnamenoneditable pt-3 font14 text-center"
              >
                Legal Entity name goes here
              </Typography>
              <Box
                component="div"
                className="fullwidth_100percent gourpeditable"
              >
                <form action="" className="pt-3 dis_flex instutionform">
                  <Box component="div">
                    <input
                      type="text"
                      placeholder=""
                      defaultValue="Type Group name here"
                      name="groupname"
                      className="example1 bold_500 font14"
                    />
                    <Button
                      type="button"
                      className="transaparent_btn nobrder editbtn"
                      onClick={EditedGroupText}
                    >
                      <Tick />
                    </Button>
                  </Box>
                  <Box component="div" className="tooltipdiv">
                    <Typography variant="span" className="text">
                      <InfoIcon />
                      <Box component="div" className="tooltiphover">
                        <Typography variant="span">
                          Add your group name to continue adding more
                          institution
                        </Typography>
                      </Box>
                    </Typography>
                  </Box>
                </form>
              </Box>
            </Box>
            <Box component="div" className="institutionbox mt-3 ms-3 me-3">
              <Box component="div">
                <Box component="div" className="dis_flex">
                  <label className="font12 mt-2 mb-2 block">
                    Institution Name
                  </label>
                </Box>
                <input
                  type="text"
                  placeholder="Institution name"
                  className="blueinputarea fullwidth_100percent"
                />
              </Box>
              <Box component="div">
                <Box component="div" className="dis_flex">
                  <label className="font12 mt-2 mb-2 block">
                    Institution Type
                  </label>
                  <Box component="div" className="tooltipdiv">
                    <Typography variant="span" className="text">
                      <InfoIcon />
                      <Box component="div" className="tooltiphover">
                        <Typography variant="span">
                          You cannot change the type of institution later so
                          please ensure the selection made is accurate.
                        </Typography>
                      </Box>
                    </Typography>
                  </Box>
                </Box>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown_withcursor mb-2"
                  options={InstiType}
                  getOptionLabel={(option) => option.name}
                  classes={{
                    paper: "autocomplatepapar",
                  }}
                  renderInput={(params) => {
                    params.inputProps.className =
                      "noborderinput font14 bold_500";
                    params.InputProps.className = "noBeforeAfter";
                    params.inputProps.id = "InstituteTypeID";
                    params.InputProps.placeholder = "Select";
                    return <TextField {...params} />;
                  }}
                />
              </Box>
              <Box component="div" className="dis_none">
                <Box component="div" className="dis_flex">
                  <label className="font12 mt-2 mb-2 block">Board</label>
                </Box>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown_withcursor mb-2"
                  options={Board}
                  getOptionLabel={(option) => option.name}
                  classes={{
                    paper: "autocomplatepapar",
                  }}
                  renderInput={(params) => {
                    params.inputProps.className =
                      "noborderinput font14 bold_500";
                    params.InputProps.className = "noBeforeAfter";
                    params.inputProps.id = "InstituteTypeID";
                    params.InputProps.placeholder = "Select";
                    return <TextField {...params} />;
                  }}
                />
              </Box>
              <Box component="div" className="dis_none">
                <Box component="div">
                  <Box component="div" className="dis_flex">
                    <label className="font12 mt-2 mb-2 block">
                      Type of Coaching Institute
                    </label>
                  </Box>
                  <Autocomplete
                    id="combo-box-demo"
                    className="BlueSelectDropdown_withcursor mb-2"
                    options={CoachingType}
                    getOptionLabel={(option) => option.name}
                    classes={{
                      paper: "autocomplatepapar",
                    }}
                    renderInput={(params) => {
                      params.inputProps.className =
                        "noborderinput font14 bold_500";
                      params.InputProps.className = "noBeforeAfter";
                      params.inputProps.id = "InstituteTypeID";
                      params.InputProps.placeholder = "Select";
                      return <TextField {...params} />;
                    }}
                  />
                </Box>
                <Box component="div">
                  <Box component="div" className="dis_flex">
                    <label className="font12 mt-2 mb-2 block">Exam Type</label>
                  </Box>
                  <Autocomplete
                    id="combo-box-demo"
                    className="BlueSelectDropdown_withcursor mb-2"
                    options={ExamType}
                    getOptionLabel={(option) => option.name}
                    classes={{
                      paper: "autocomplatepapar",
                    }}
                    renderInput={(params) => {
                      params.inputProps.className =
                        "noborderinput font14 bold_500";
                      params.InputProps.className = "noBeforeAfter";
                      params.inputProps.id = "InstituteTypeID";
                      params.InputProps.placeholder = "Select";
                      return <TextField {...params} />;
                    }}
                  />
                </Box>
              </Box>
              <Box component="div" className="dis_flex">
                <input
                  class="form-check-input me-2 customcheckbox"
                  type="checkbox"
                  value=""
                  id="others"
                />
                <label
                  class="form-check-label mb-0 mt-2 blcktxtclr bold_500 font12"
                  for="others"
                >
                  Others
                </label>
                <Box component="div" className="tooltipdiv">
                  <Typography variant="span" className="text">
                    <InfoIcon />
                    <Box component="div" className="tooltiphover">
                      <Typography variant="span">
                        Please select others if desired option not in the list
                      </Typography>
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext ms-3 me-3"
                onClick={(e) => {
                  handleInstituteClose();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Image Change Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalChangeImage}
        onClose={handleChangeImageClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalChangeImage}>
          <Box component="div" className="editmediummodal">
            <Box component="div" className="dis_flex">
              <Typography variant="span" className="fontweight700 font18">
                Preview
              </Typography>
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleChangeImageOpen();
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
            <Box component="div" className="text-center rel-pos">
              <ProfilePreview />
              <Button className="imageeditbtn whitecolortext">
                <EditWhiteIcon />
              </Button>
            </Box>
            <Box
              component="div"
              className="dis_flex"
              justifyContent="space-between"
            >
              <Button
                className="fullwidth_100percent darkbluecolor whitecolortext "
                onClick={(e) => {
                  handleChangeImageClose();
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Preview Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalPreview}
        onClose={handlePreviewClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalPreview}>
          <Box component="div" className="previewmodal">
            <Box component="div" className="dis_flex mb-2 mt-1">
              <EyeViewIcon />
              <Typography variant="span" className="fontweight700 mt-1 font18">
                Preview Mode
              </Typography>
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handlePreviewClose();
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
            <Box component="div" className="pt-2">
              <Box component="div" className="fullwidth_100percent">
                <Box component="div" className="topheader">
                  <Box component="div" className="collegepic">
                    <Collegepic />
                  </Box>
                  <Box component="div" className="CollegeTitle">
                    <Typography component="h4">
                      DPS College of Engineering and Management Institute
                    </Typography>
                    <Typography component="span">
                      College / University
                    </Typography>
                  </Box>
                </Box>
                <Box component="div" className="detailsarea">
                  <Box component="div" className="detailsdiv">
                    <Ownership />
                    <Box component="div">
                      <Typography
                        component="span"
                        className="font14 block mb-2"
                      >
                        Type of Ownership
                      </Typography>
                      <Typography component="span" className="font16">
                        Parent company of a brand
                      </Typography>
                    </Box>
                  </Box>
                  <Box component="div" className="detailsdiv">
                    <Brand />
                    <Box component="div">
                      <Typography
                        component="span"
                        className="font14 block mb-2"
                      >
                        Name of the Brand
                      </Typography>
                      <Typography component="span" className="font16">
                        DPS Group
                      </Typography>
                    </Box>
                  </Box>
                  <Box component="div" className="detailsdiv">
                    <Employees />
                    <Box component="div">
                      <Typography
                        component="span"
                        className="font14 block mb-2"
                      >
                        Current Employees Strength
                      </Typography>
                      <Typography component="span" className="font16">
                        500
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="detailsareasingle">
                  <Box component="div" className="detailsdiv">
                    <Courses />
                    <Box component="div">
                      <Typography
                        component="span"
                        className="font14 block mb-2"
                      >
                        Courses Offered
                      </Typography>
                      <Box className="multilist">
                        <Typography variant="span" className="confirmed">
                          Bachelor's Of Science
                        </Typography>
                        <Typography variant="span" className="pending">
                          Bachelors of Business Administration
                          <Typography variant="span" className="pendingtext">
                            Pending for approval
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="detailsarea">
                  <Box component="div" className="detailsdiv">
                    <Globe />
                    <Box component="div">
                      <Typography variant="span" className="font14 block mb-2">
                        Country
                      </Typography>
                      <Typography component="span" className="font16">
                        India
                      </Typography>
                    </Box>
                  </Box>
                  <Box component="div" className="detailsdiv">
                    <City />
                    <Box component="div">
                      <Typography
                        component="span"
                        className="font14 block mb-2"
                      >
                        City
                      </Typography>
                      <Typography component="span" className="font16">
                        Kolkata
                      </Typography>
                    </Box>
                  </Box>
                  <Box component="div" className="detailsdiv">
                    <PinCode />
                    <Box component="div">
                      <Typography
                        component="span"
                        className="font14 block mb-2"
                      >
                        Pincode
                      </Typography>
                      <Typography component="span" className="font16">
                        700001
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="detailsareasingle">
                  <Box component="div" className="detailsdiv">
                    <Address />
                    <Box component="div">
                      <Typography
                        component="span"
                        className="font14 block mb-2"
                      >
                        Address
                      </Typography>
                      <Typography component="span" className="font16">
                        BN Block, Sector V, Bidhannagar, Kolkata, West Bengal
                        700091, India
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="detailsareasingle">
                  <Box component="div" className="detailsdiv">
                    <URL />
                    <Box component="div">
                      <Typography
                        component="span"
                        className="font14 block mb-2"
                      >
                        Institution Website URL
                      </Typography>
                      <Typography component="span" className="font16">
                        https://www.dpskolkata.com/
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="detailsareasingle">
                  <Box component="div" className="detailsdiv">
                    <Description />
                    <Box component="div">
                      <Typography
                        component="span"
                        className="font14 block mb-2"
                      >
                        Brief Institution Description
                      </Typography>
                      <Typography component="span" className="font16">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no se taki mata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo
                        dolores.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box component="div" className="detailsarea">
                  <Box component="div" className="detailsdiv">
                    <Branches />
                    <Box component="div">
                      <Typography
                        component="span"
                        className="font14 block mb-2"
                      >
                        No. Of Branches
                      </Typography>
                      <Typography component="span" className="font16">
                        3
                      </Typography>
                    </Box>
                  </Box>
                  <Box component="div" className="detailsdiv">
                    <Students />
                    <Box component="div">
                      <Typography
                        component="span"
                        className="font14 block mb-2"
                      >
                        Current Students Strength
                      </Typography>
                      <Typography component="span" className="font16">
                        1000
                      </Typography>
                    </Box>
                  </Box>
                  <Box component="div" className="detailsdiv"></Box>
                </Box>
              </Box>
              <AppBar position="static" className="previewtab">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  className="appbartab"
                >
                  <Tab
                    label="Group Details"
                    {...a11yProps(0)}
                    className="appbar_btn"
                  />
                  <Tab
                    label="Contact Person Details"
                    {...a11yProps(1)}
                    className="appbar_btn"
                  />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0} className="appbar_tabpanel">
                <Box component="div" className="dis_flex">
                  <img src={BASE_URL + GroupImg} alt="" />
                  <Typography
                    variant="span"
                    className="blackcolortext ms-3 font18"
                  >
                    UBC Groups
                    <Typography
                      variant="span"
                      className="darkcolortext mt-2 font14 block"
                    >
                      Founded 2000
                    </Typography>
                  </Typography>
                </Box>
                <Box component="div" className="dis_flex mt-4">
                  <WWWIcon />
                  <Typography
                    variant="span"
                    className="blackcolortext font14 top-1"
                  >
                    ubcgroups.edu
                  </Typography>
                </Box>
                <Box component="div" className="fullwidth_100percent mt-3">
                  <Typography
                    variant="span"
                    className="blackcolortext mb-2 block font16 fontweight700"
                  >
                    Group Description
                  </Typography>
                  <Typography className="blackcolortext font14 line-height-1-5">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren
                  </Typography>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1} className="appbar_tabpanel">
                <Box component="div" className="contactbottomtarea">
                  <Box component="div" className="contact_bottomdiv">
                    <Box component="div" className="img">
                      <Typography variant="span">RS</Typography>
                    </Box>
                    <Typography variant="span" className="groupname block mt-1">
                      Roshni Sharma
                      <Typography
                        variant="span"
                        className="font14 mt-1 block darkcolortext"
                      >
                        Human Resource
                      </Typography>
                    </Typography>
                  </Box>
                  <Box component="div" className="contact_bottomdiv">
                    <EmailIcon />
                    <Typography variant="span" className="contactname">
                      roshini.varma@gmail.com
                    </Typography>
                  </Box>
                  <Box component="div" className="contact_bottomdiv">
                    <TeleIcon />
                    <Typography variant="span" className="contactname">
                      8754764392
                    </Typography>
                  </Box>
                </Box>
              </TabPanel>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default PostAJob;

const WWWIcon = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g
        id="world-wide-web_1"
        data-name="world-wide-web 1"
        transform="translate(-2 -2)"
      >
        <g id="Group_174" data-name="Group 174" transform="translate(2 2)">
          <g id="Group" transform="translate(12.663 1.473)">
            <g id="Group-2" data-name="Group">
              <path
                id="Vector"
                d="M2.962,2.924A5.451,5.451,0,0,0,0,0V4.957c1.291-.018,2.552-.094,3.738-.224A12.517,12.517,0,0,0,2.962,2.924Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g id="Group-3" data-name="Group" transform="translate(12.65 7.44)">
            <g id="Group-4" data-name="Group">
              <path
                id="Vector-2"
                data-name="Vector"
                d="M4.144,0A40.533,40.533,0,0,1,0,.263V3.9H4.654A19.307,19.307,0,0,0,4.144,0Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g id="Group-5" data-name="Group" transform="translate(6.696 7.408)">
            <g id="Group-6" data-name="Group">
              <path
                id="Vector-3"
                data-name="Vector"
                d="M.518,0A19.291,19.291,0,0,0,0,3.932H4.654V.291A39.906,39.906,0,0,1,.518,0Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g id="Group-7" data-name="Group" transform="translate(7.609 1.473)">
            <g id="Group-8" data-name="Group">
              <path
                id="Vector-4"
                data-name="Vector"
                d="M.766,2.924A12.483,12.483,0,0,0,0,4.7c1.176.139,2.433.224,3.728.25V0A5.45,5.45,0,0,0,.766,2.924Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g id="Group-9" data-name="Group" transform="translate(6.699 12.65)">
            <g id="Group-10" data-name="Group">
              <path
                id="Vector-5"
                data-name="Vector"
                d="M0,0A18.7,18.7,0,0,0,.72,4.61a38.733,38.733,0,0,1,3.931-.315V0Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g
            id="Group-11"
            data-name="Group"
            transform="translate(18.068 6.061)"
          >
            <g id="Group-12" data-name="Group">
              <path
                id="Vector-6"
                data-name="Vector"
                d="M4.379,0C3.632.3,3.333.417,3.236.459L3.352.422c.024-.008-.254.1-.116.037A22.859,22.859,0,0,1,0,1.2,20.869,20.869,0,0,1,.519,5.3H5.932A12.144,12.144,0,0,0,4.379,0Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g id="Group-13" data-name="Group" transform="translate(0 12.626)">
            <g id="Group-14" data-name="Group">
              <path
                id="Vector-7"
                data-name="Vector"
                d="M5.415,0H0A12.13,12.13,0,0,0,2.1,6.18a8.358,8.358,0,0,1,1.441-.66,17.58,17.58,0,0,1,2.6-.68A20.318,20.318,0,0,1,5.415,0Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g id="Group-15" data-name="Group" transform="translate(0 6.004)">
            <g id="Group-16" data-name="Group">
              <path
                id="Vector-8"
                data-name="Vector"
                d="M2.616.395C2.475.347,2.07.2,1.586,0A12.142,12.142,0,0,0,0,5.357H5.413a20.846,20.846,0,0,1,.529-4.143A21.288,21.288,0,0,1,2.616.395Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g id="Group-17" data-name="Group" transform="translate(2.388)">
            <g id="Group-18" data-name="Group">
              <path
                id="Vector-9"
                data-name="Vector"
                d="M1.177,3.564A12.423,12.423,0,0,0,0,4.925c.219.088.451.174.692.257l.007,0a20.136,20.136,0,0,0,3.244.787,14.1,14.1,0,0,1,.943-2.249C6.006,1.615,7.488.291,9.116,0A12.153,12.153,0,0,0,1.177,3.564Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g id="Group-19" data-name="Group" transform="translate(2.992 18.71)">
            <g id="Group-20" data-name="Group">
              <path
                id="Vector-10"
                data-name="Vector"
                d="M4.281,1.483A13.449,13.449,0,0,1,3.61,0,16.545,16.545,0,0,0,1.034.659,7.307,7.307,0,0,0,0,1.112q.275.314.572.613A12.153,12.153,0,0,0,8.512,5.29C6.883,5,5.4,3.591,4.281,1.483Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g id="Group-21" data-name="Group" transform="translate(12.497)">
            <g id="Group-22" data-name="Group">
              <path
                id="Vector-11"
                data-name="Vector"
                d="M7.939,3.565A12.153,12.153,0,0,0,0,0C1.628.291,3.11,1.615,4.23,3.723a14.13,14.13,0,0,1,.957,2.292,21.455,21.455,0,0,0,3.277-.749c.1-.039.266-.112.691-.286A12.41,12.41,0,0,0,7.939,3.565Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g
            id="Group-23"
            data-name="Group"
            transform="translate(12.497 18.495)"
          >
            <g id="Group-24" data-name="Group">
              <path
                id="Vector-12"
                data-name="Vector"
                d="M4.983,0A13.643,13.643,0,0,1,4.23,1.7C3.11,3.807,1.628,5.214,0,5.5A12.153,12.153,0,0,0,7.939,1.94a12.441,12.441,0,0,0,1-1.132A23.767,23.767,0,0,0,4.983,0Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g
            id="Group-25"
            data-name="Group"
            transform="translate(7.888 18.228)"
          >
            <g id="Group-26" data-name="Group">
              <path
                id="Vector-13"
                data-name="Vector"
                d="M0,.261Q.223.8.483,1.291A5.648,5.648,0,0,0,3.445,4.3V0C2.218.04,1.062.128,0,.261Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g
            id="Group-27"
            data-name="Group"
            transform="translate(17.919 12.636)"
          >
            <g id="Group-28" data-name="Group">
              <path
                id="Vector-14"
                data-name="Vector"
                d="M.665,0A20.475,20.475,0,0,1,0,4.609a23.633,23.633,0,0,1,4.368.963A12.139,12.139,0,0,0,6.081,0H.665Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g
            id="Group-29"
            data-name="Group"
            transform="translate(12.65 12.653)"
          >
            <g id="Group-30" data-name="Group">
              <path
                id="Vector-15"
                data-name="Vector"
                d="M0,0V4.27H.119c1.325,0,2.625.061,3.86.176A18.826,18.826,0,0,0,4.651,0Z"
                fill="#f8b432"
              />
            </g>
          </g>
          <g
            id="Group-31"
            data-name="Group"
            transform="translate(12.666 18.203)"
          >
            <g id="Group-32" data-name="Group">
              <path
                id="Vector-16"
                data-name="Vector"
                d="M.119,0H0V4.324A5.649,5.649,0,0,0,2.962,1.317,11.935,11.935,0,0,0,3.505.138C2.419.048,1.281,0,.119,0Z"
                fill="#f8b432"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const ProfilePreview = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="298"
      height="298"
      viewBox="0 0 298 298"
    >
      <g
        id="Group_4599"
        data-name="Group 4599"
        transform="translate(-926.856 -417.088)"
      >
        <circle
          id="Ellipse_67"
          data-name="Ellipse 67"
          cx="149"
          cy="149"
          r="149"
          transform="translate(926.856 417.088)"
          fill="#e7f1fd"
        />
        <g id="XMLID_8_" transform="translate(920.611 423.989)" opacity="0.6">
          <path
            id="XMLID_149_"
            d="M154.75,64.1,80.5,102.8v19.75H230.144V102.785Zm.676,43.7a10.612,10.612,0,1,1,10.612-10.612A10.623,10.623,0,0,1,155.426,107.8Z"
            transform="translate(0 0)"
            fill="#2a5798"
          />
          <path
            id="XMLID_137_"
            d="M239.942,546.1v10.4H95.5V546.1h11.358V471.9h10.4v74.2h26.686V471.9h10.4v74.2h26.686V471.9h10.4v74.2h26.686V471.9h10.4v74.2Z"
            transform="translate(-12.399 -337.088)"
            fill="#2a5798"
          />
        </g>
      </g>
    </svg>
  );
};

const Tick = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.828"
      height="13.414"
      viewBox="0 0 18.828 13.414"
    >
      <path
        id="_3325079_check_icon"
        data-name="3325079_check_icon"
        d="M20,6,9,17,4,12"
        transform="translate(-2.586 -4.586)"
        fill="none"
        stroke="#2a5798"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
};

const Board = [
  { name: "Maharashtra Board", id: 1 },
  { name: "West Bengal Board", id: 2 },
];
const CoachingType = [
  { name: "Management", id: 1 },
  { name: "Civil Services", id: 2 },
];
const ExamType = [
  { name: "Indian", id: 1 },
  { name: "Foreign", id: 2 },
];

const InfoIcon = () => {
  return (
    <svg
      className="me-2"
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
const InstiType = [
  { name: "Coaching Institute", id: 1 },
  { name: "College/University", id: 2 },
  { name: "Edtech", id: 3 },
  { name: "Pre School", id: 4 },
  { name: "School", id: 5 },
];
const Institution = () => {
  return (
    <svg
      className="me-2"
      id="XMLID_8_"
      xmlns="http://www.w3.org/2000/svg"
      width="33.041"
      height="31.838"
      viewBox="0 0 21.041 21.838"
    >
      <path
        id="XMLID_149_"
        d="M90.94,64.1,80.5,69.542v2.777h21.041V69.539Zm.1,6.144a1.492,1.492,0,1,1,1.492-1.492A1.494,1.494,0,0,1,91.035,70.244Z"
        transform="translate(-80.5 -64.1)"
        fill="#f4b947"
      />
      <path
        id="XMLID_137_"
        d="M115.81,482.333V483.8H95.5v-1.463h1.6V471.9H98.56v10.433h3.752V471.9h1.463v10.433h3.752V471.9h1.463v10.433h3.752V471.9h1.463v10.433Z"
        transform="translate(-95.5 -461.957)"
        fill="#f4b947"
      />
    </svg>
  );
};
const Institutionsml = () => {
  return (
    <svg
      className="me-2 top-1"
      id="XMLID_8_"
      xmlns="http://www.w3.org/2000/svg"
      width="22.041"
      height="19.838"
      viewBox="0 0 21.041 21.838"
    >
      <path
        id="XMLID_149_"
        d="M90.94,64.1,80.5,69.542v2.777h21.041V69.539Zm.1,6.144a1.492,1.492,0,1,1,1.492-1.492A1.494,1.494,0,0,1,91.035,70.244Z"
        transform="translate(-80.5 -64.1)"
        fill="#f4b947"
      />
      <path
        id="XMLID_137_"
        d="M115.81,482.333V483.8H95.5v-1.463h1.6V471.9H98.56v10.433h3.752V471.9h1.463v10.433h3.752V471.9h1.463v10.433h3.752V471.9h1.463v10.433Z"
        transform="translate(-95.5 -461.957)"
        fill="#f4b947"
      />
    </svg>
  );
};

const AddCourseIcon = () => {
  return (
    <svg
      className="me-2"
      id="Group_371"
      data-name="Group 371"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        id="Ellipse_67"
        data-name="Ellipse 67"
        d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
        fill="#2a5798"
      />
      <g id="octicon:x-24" transform="translate(10 5.214) rotate(45)">
        <path
          id="Vector"
          d="M.114.124a.39.39,0,0,1,.551,0l2.714,2.71L6.093.124a.39.39,0,1,1,.551.55L3.93,3.384l2.714,2.71a.39.39,0,1,1-.551.55L3.379,3.934.665,6.644a.39.39,0,0,1-.551-.55l2.714-2.71L.114.674a.389.389,0,0,1,0-.55Z"
          transform="translate(0 0)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

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

const CloseBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 10.974 10.974"
    >
      <path
        id="Path_82"
        data-name="Path 82"
        d="M20.974,11.109,19.865,10l-4.378,4.378L11.109,10,10,11.109l4.378,4.378L10,19.865l1.109,1.109L15.487,16.6l4.378,4.378,1.109-1.109L16.6,15.487Z"
        transform="translate(-10 -10)"
        fill="#2A5798"
      />
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

const AddNote = () => {
  return (
    <svg
      className="me-2 top-2"
      xmlns="http://www.w3.org/2000/svg"
      width="23.119"
      height="28"
      viewBox="0 0 23.119 28"
    >
      <g id="add" transform="translate(0 0)">
        <path
          id="Path_3687"
          data-name="Path 3687"
          d="M354.781,15.881l2.948.005-2.948-2.948Zm0,0"
          transform="translate(-335.379 -12.23)"
          fill="#f6b333"
        />
        <path
          id="Path_3688"
          data-name="Path 3688"
          d="M67.575,5.309a.83.83,0,0,1-.828-.83V0H52.67a.83.83,0,0,0-.83.83V15.621a7.307,7.307,0,0,1,4.238-.419.829.829,0,0,1,.743-1.2h10a.83.83,0,1,1,0,1.66H57.547A7.3,7.3,0,0,1,61.185,25.6H71.294a.83.83,0,0,0,.83-.83V5.317Zm-3.747,3a.83.83,0,0,1-.83.83H56.821a.83.83,0,0,1,0-1.66H63A.83.83,0,0,1,63.828,8.3ZM66.816,12.4h-10a.83.83,0,1,1,0-1.66h10a.83.83,0,1,1,0,1.66Zm0,0"
          transform="translate(-49.005)"
          fill="#f6b333"
        />
        <path
          id="Path_3689"
          data-name="Path 3689"
          d="M11.28,311.382a5.64,5.64,0,1,0-5.64,5.64A5.646,5.646,0,0,0,11.28,311.382Zm-4.017.83H6.47V313a.83.83,0,1,1-1.66,0v-.793H4.017a.83.83,0,0,1,0-1.66H4.81v-.793a.83.83,0,1,1,1.66,0v.793h.793a.83.83,0,0,1,0,1.66Zm0,0"
          transform="translate(0 -289.022)"
          fill="#f6b333"
        />
      </g>
    </svg>
  );
};

const ImpNote = () => {
  return (
    <svg
      className="me-2 top-2"
      xmlns="http://www.w3.org/2000/svg"
      width="27.902"
      height="28.347"
      viewBox="0 0 27.902 28.347"
    >
      <g id="add-file" transform="translate(-0.377 0)">
        <path
          id="Path_3701"
          data-name="Path 3701"
          d="M34.4,29.869a5.357,5.357,0,1,0,5.539,5.353A5.455,5.455,0,0,0,34.4,29.869Zm2.662,5.947H35v2.069a.594.594,0,0,1-1.187,0V35.816H31.74a.594.594,0,1,1,0-1.188h2.069V32.56a.594.594,0,1,1,1.187,0v2.069h2.069a.594.594,0,1,1,0,1.188Z"
          transform="translate(-11.663 -12.229)"
          fill="#f6b333"
        />
        <path
          id="Path_3702"
          data-name="Path 3702"
          d="M24.759,9.214l-12-3.32a.594.594,0,0,0-.317,1.145l12,3.32a.617.617,0,0,0,.159.021.594.594,0,0,0,.158-1.166Z"
          transform="translate(-4.761 -2.405)"
          fill="#f6b333"
        />
        <path
          id="Path_3703"
          data-name="Path 3703"
          d="M23.034,14.138l-12-3.32a.593.593,0,1,0-.317,1.144l12,3.32a.615.615,0,0,0,.159.021.593.593,0,0,0,.158-1.165Z"
          transform="translate(-4.055 -4.42)"
          fill="#f6b333"
        />
        <path
          id="Path_3704"
          data-name="Path 3704"
          d="M22.74,16.453a6.871,6.871,0,0,1,1.7.219v-4.85a.148.148,0,0,0-.148-.149H21.843l1.836-6.186a.594.594,0,0,0-.41-.74L6.185.021a.594.594,0,0,0-.727.4L2.675,9.737c0,.007,0,.014,0,.021H.525a.148.148,0,0,0-.148.148v14.42a.148.148,0,0,0,.148.148H16.194a6.366,6.366,0,0,1-.181-1.482,6.644,6.644,0,0,1,6.727-6.541ZM9.7,9.784a.151.151,0,0,0-.084-.026H3.907L6.429,1.321,22.368,5.73l-1.758,5.922c0,.007,0,.013,0,.02H12.454Z"
          transform="translate(0 0)"
          fill="#f6b333"
        />
      </g>
    </svg>
  );
};

const HourGlass = () => {
  return (
    <svg
      className="me-2 top-1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16.333"
      viewBox="0 0 14 16.333"
    >
      <path
        id="_1608367_half_hourglass_icon"
        data-name="1608367_half_hourglass_icon"
        d="M140.833,1.167a8.832,8.832,0,0,1-.971,4.206,7.446,7.446,0,0,1-2.429,2.794,7.446,7.446,0,0,1,2.429,2.794,8.832,8.832,0,0,1,.971,4.206h.875a.281.281,0,0,1,.292.292v.583a.281.281,0,0,1-.292.292H128.292a.281.281,0,0,1-.292-.292v-.583a.281.281,0,0,1,.292-.292h.875a8.832,8.832,0,0,1,.971-4.206,7.446,7.446,0,0,1,2.429-2.794,7.446,7.446,0,0,1-2.429-2.794,8.832,8.832,0,0,1-.971-4.206h-.875A.281.281,0,0,1,128,.875V.292A.281.281,0,0,1,128.292,0h13.417A.281.281,0,0,1,142,.292V.875a.281.281,0,0,1-.292.292Zm-1.167,0h-9.333a8.017,8.017,0,0,0,.775,3.5h7.784A8.017,8.017,0,0,0,139.667,1.167Zm-.52,11.083a6.888,6.888,0,0,0-1.326-2.2,4.956,4.956,0,0,0-1.773-1.3h-2.1a4.956,4.956,0,0,0-1.773,1.3,6.888,6.888,0,0,0-1.326,2.2Z"
        transform="translate(-128)"
        fill="#f8b432"
      />
    </svg>
  );
};

const TeleIconBIG = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
    >
      <g id="Group_756" data-name="Group 756" transform="translate(-217 -454)">
        <g
          id="Rectangle_482"
          data-name="Rectangle 482"
          transform="translate(217 454)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="24" height="24" stroke="none" />
          <rect x="0.5" y="0.5" width="23" height="23" fill="none" />
        </g>
        <g
          id="telephone_1"
          data-name="telephone 1"
          transform="translate(215.737 452.736)"
        >
          <path
            id="Vector"
            d="M4.418,0H1.941A1.929,1.929,0,0,0,0,1.862V3.1a.614.614,0,0,0,.619.621H5.657A.614.614,0,0,0,6.277,3.1V1.862A1.857,1.857,0,0,0,4.418,0Z"
            transform="translate(10.125 8.848)"
            fill="#d48e07"
          />
          <path
            id="Vector-2"
            data-name="Vector"
            d="M6.223,1.862A1.866,1.866,0,0,1,4.356,3.723H1.867A1.866,1.866,0,0,1,0,1.862V.621A.621.621,0,0,1,.622,0H5.6a.621.621,0,0,1,.622.621Z"
            transform="translate(2.625 7.625)"
            fill="#d48e07"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M6.223,1.862A1.866,1.866,0,0,1,4.356,3.723H1.867A1.866,1.866,0,0,1,0,1.862V.621A.621.621,0,0,1,.622,0H5.6a.621.621,0,0,1,.622.621Z"
            transform="translate(17.678 7.625)"
            fill="#d48e07"
          />
          <path
            id="Vector-4"
            data-name="Vector"
            d="M18.593,8.737,15.356.923A1.853,1.853,0,0,0,13.743,0H5.087a1.877,1.877,0,0,0-1.65,1l-3.2,7.74A3.2,3.2,0,0,0,0,9.935v.748a1.87,1.87,0,0,0,1.875,1.871H16.955a1.87,1.87,0,0,0,1.875-1.871V9.935A3.2,3.2,0,0,0,18.593,8.737Z"
            transform="translate(3.848 11.349)"
            fill="#f8b432"
          />
          <path
            id="Vector-5"
            data-name="Vector"
            d="M15.667,0H5.61A5.614,5.614,0,0,0,0,5.6v.622H6.233V5.6a.617.617,0,0,1,.623-.622H14.42a.617.617,0,0,1,.623.622v.622h6.233V5.6A5.614,5.614,0,0,0,15.667,0Z"
            transform="translate(2.625 2.625)"
            fill="#f8b432"
          />
          <path
            id="Vector-6"
            data-name="Vector"
            d="M3.75,0A3.75,3.75,0,1,0,7.5,3.75,3.761,3.761,0,0,0,3.75,0Z"
            transform="translate(9.54 13.902)"
            fill="#f7fafb"
          />
          <path
            id="Vector-7"
            data-name="Vector"
            d="M1.25,0A1.25,1.25,0,1,0,2.5,1.25,1.254,1.254,0,0,0,1.25,0Z"
            transform="translate(12.04 16.402)"
            fill="#d48e07"
          />
        </g>
      </g>
    </svg>
  );
};

const TeleIcon = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g id="Group_756" data-name="Group 756" transform="translate(-217 -454)">
        <g
          id="Rectangle_482"
          data-name="Rectangle 482"
          transform="translate(217 454)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="24" height="24" stroke="none" />
          <rect x="0.5" y="0.5" width="23" height="23" fill="none" />
        </g>
        <g
          id="telephone_1"
          data-name="telephone 1"
          transform="translate(215.737 452.736)"
        >
          <path
            id="Vector"
            d="M4.418,0H1.941A1.929,1.929,0,0,0,0,1.862V3.1a.614.614,0,0,0,.619.621H5.657A.614.614,0,0,0,6.277,3.1V1.862A1.857,1.857,0,0,0,4.418,0Z"
            transform="translate(10.125 8.848)"
            fill="#d48e07"
          />
          <path
            id="Vector-2"
            data-name="Vector"
            d="M6.223,1.862A1.866,1.866,0,0,1,4.356,3.723H1.867A1.866,1.866,0,0,1,0,1.862V.621A.621.621,0,0,1,.622,0H5.6a.621.621,0,0,1,.622.621Z"
            transform="translate(2.625 7.625)"
            fill="#d48e07"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M6.223,1.862A1.866,1.866,0,0,1,4.356,3.723H1.867A1.866,1.866,0,0,1,0,1.862V.621A.621.621,0,0,1,.622,0H5.6a.621.621,0,0,1,.622.621Z"
            transform="translate(17.678 7.625)"
            fill="#d48e07"
          />
          <path
            id="Vector-4"
            data-name="Vector"
            d="M18.593,8.737,15.356.923A1.853,1.853,0,0,0,13.743,0H5.087a1.877,1.877,0,0,0-1.65,1l-3.2,7.74A3.2,3.2,0,0,0,0,9.935v.748a1.87,1.87,0,0,0,1.875,1.871H16.955a1.87,1.87,0,0,0,1.875-1.871V9.935A3.2,3.2,0,0,0,18.593,8.737Z"
            transform="translate(3.848 11.349)"
            fill="#f8b432"
          />
          <path
            id="Vector-5"
            data-name="Vector"
            d="M15.667,0H5.61A5.614,5.614,0,0,0,0,5.6v.622H6.233V5.6a.617.617,0,0,1,.623-.622H14.42a.617.617,0,0,1,.623.622v.622h6.233V5.6A5.614,5.614,0,0,0,15.667,0Z"
            transform="translate(2.625 2.625)"
            fill="#f8b432"
          />
          <path
            id="Vector-6"
            data-name="Vector"
            d="M3.75,0A3.75,3.75,0,1,0,7.5,3.75,3.761,3.761,0,0,0,3.75,0Z"
            transform="translate(9.54 13.902)"
            fill="#f7fafb"
          />
          <path
            id="Vector-7"
            data-name="Vector"
            d="M1.25,0A1.25,1.25,0,1,0,2.5,1.25,1.254,1.254,0,0,0,1.25,0Z"
            transform="translate(12.04 16.402)"
            fill="#d48e07"
          />
        </g>
      </g>
    </svg>
  );
};

const EmailIconBig = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
    >
      <g id="Group_755" data-name="Group 755" transform="translate(-217 -410)">
        <g
          id="Rectangle_481"
          data-name="Rectangle 481"
          transform="translate(217 410)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="24" height="24" stroke="none" />
          <rect x="0.5" y="0.5" width="23" height="23" fill="none" />
        </g>
        <g
          id="email_1"
          data-name="email 1"
          transform="translate(216.616 409.744)"
        >
          <g
            id="Group_160"
            data-name="Group 160"
            transform="translate(2 5.333)"
          >
            <path
              id="Vector"
              d="M19.764,6.611A2.163,2.163,0,0,1,18.1,7.39H1.661A2.163,2.163,0,0,1,0,6.611L7.935,0l.822.562a1.981,1.981,0,0,0,2.25,0L11.829,0Z"
              transform="translate(0.502 6.455)"
              fill="#f8b432"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M20.007.943,11.95,6.455l-.822.562a1.981,1.981,0,0,1-2.25,0l-.822-.562L0,.935A2.173,2.173,0,0,1,1.783,0H18.224A2.135,2.135,0,0,1,20.007.943Z"
              transform="translate(0.381 0)"
              fill="#d48e07"
            />
            <g id="Group" transform="translate(0 0.935)">
              <path
                id="Vector-3"
                data-name="Vector"
                d="M8.437,5.521.5,12.132A2.154,2.154,0,0,1,0,10.747V1.229A2.132,2.132,0,0,1,.381,0Z"
                transform="translate(0)"
                fill="#f8b432"
              />
              <path
                id="Vector-4"
                data-name="Vector"
                d="M8.437,1.22v9.519a2.154,2.154,0,0,1-.5,1.385L0,5.512,8.056,0A2.125,2.125,0,0,1,8.437,1.22Z"
                transform="translate(12.331 0.009)"
                fill="#f8b432"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const EmailIcon = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g id="Group_755" data-name="Group 755" transform="translate(-217 -410)">
        <g
          id="Rectangle_481"
          data-name="Rectangle 481"
          transform="translate(217 410)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="24" height="24" stroke="none" />
          <rect x="0.5" y="0.5" width="23" height="23" fill="none" />
        </g>
        <g
          id="email_1"
          data-name="email 1"
          transform="translate(216.616 409.744)"
        >
          <g
            id="Group_160"
            data-name="Group 160"
            transform="translate(2 5.333)"
          >
            <path
              id="Vector"
              d="M19.764,6.611A2.163,2.163,0,0,1,18.1,7.39H1.661A2.163,2.163,0,0,1,0,6.611L7.935,0l.822.562a1.981,1.981,0,0,0,2.25,0L11.829,0Z"
              transform="translate(0.502 6.455)"
              fill="#f8b432"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M20.007.943,11.95,6.455l-.822.562a1.981,1.981,0,0,1-2.25,0l-.822-.562L0,.935A2.173,2.173,0,0,1,1.783,0H18.224A2.135,2.135,0,0,1,20.007.943Z"
              transform="translate(0.381 0)"
              fill="#d48e07"
            />
            <g id="Group" transform="translate(0 0.935)">
              <path
                id="Vector-3"
                data-name="Vector"
                d="M8.437,5.521.5,12.132A2.154,2.154,0,0,1,0,10.747V1.229A2.132,2.132,0,0,1,.381,0Z"
                transform="translate(0)"
                fill="#f8b432"
              />
              <path
                id="Vector-4"
                data-name="Vector"
                d="M8.437,1.22v9.519a2.154,2.154,0,0,1-.5,1.385L0,5.512,8.056,0A2.125,2.125,0,0,1,8.437,1.22Z"
                transform="translate(12.331 0.009)"
                fill="#f8b432"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const ContactIcon = () => {
  return (
    <svg
      className="me-2"
      id="Group_4519"
      data-name="Group 4519"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
    >
      <g
        id="Rectangle_480"
        data-name="Rectangle 480"
        fill="#fff"
        stroke="#707070"
        stroke-width="1"
        opacity="0"
      >
        <rect width="28" height="28" stroke="none" />
        <rect x="0.5" y="0.5" width="27" height="27" fill="none" />
      </g>
      <g
        id="Asset_1_16"
        data-name="Asset 1 16"
        transform="translate(6.458 1.29)"
      >
        <g
          id="Group_561"
          data-name="Group 561"
          transform="translate(-5.984 -2.328)"
        >
          <path
            id="Vector"
            d="M.255.03C2.964-.284,5.807,1.9,6.446,4.889a6.22,6.22,0,0,1-4.1,7.04c-.236.083-.488.132-.723.2a.219.219,0,0,1-.2.066.838.838,0,0,0,.37.215A9.69,9.69,0,0,1,10,21.051c.034.611-.1.843-.791.843-2.995-.033-5.989,0-8.967,0l.017-.05C-.031,21.6,0,21.25,0,20.919V.956A1.363,1.363,0,0,1,.137.146.771.771,0,0,1,.255.03Z"
            transform="translate(13.014 4.125)"
            fill="#f6b333"
          />
          <path
            id="Vector-2"
            data-name="Vector"
            d="M8.382,12.2A6.2,6.2,0,0,1,3.5,5.685,6.209,6.209,0,0,1,8.987.1c.252-.033.5-.066.74-.1a.241.241,0,0,0,.017.116V.132a1.787,1.787,0,0,0-.084.892v20a1.616,1.616,0,0,1-.084.892c-2.995,0-5.989,0-8.984.033C0,21.947-.013,21.7,0,21.253a9.676,9.676,0,0,1,8.21-8.759C8.18,12.329,8.785,12.543,8.382,12.2Z"
            transform="translate(3.527 4.039)"
            fill="#f6b333"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M.723.281A.809.809,0,0,1,0,0H.538C.589.083.656.182.723.281Z"
            transform="translate(14.095 16.237)"
            fill="#88a8f7"
          />
          <path
            id="Vector-4"
            data-name="Vector"
            d="M.019,21.765V1.025C.019.678-.082.3.187,0q0,10.882.017,21.781A.7.7,0,0,0,.019,21.765Z"
            transform="translate(13.09 4.186)"
            fill="#f6b333"
          />
          <path
            id="Vector-5"
            data-name="Vector"
            d="M.168.016A1.015,1.015,0,0,1,.824.1.823.823,0,0,1,0,.314C.067.2.118.115.168.016Z"
            transform="translate(11.737 16.222)"
            fill="#afc4fe"
          />
        </g>
      </g>
    </svg>
  );
};

const PlusIconNoCircle = () => {
  return (
    <svg
      className="me-3"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g id="fluent:add-circle-20-regular" transform="translate(-1.667 -1.667)">
        <g id="Group" transform="translate(1.667 1.667)">
          <path
            id="Vector"
            d="M0,10A1.25,1.25,0,0,1,1.25,8.75h7.5V1.25a1.25,1.25,0,1,1,2.5,0v7.5h7.5a1.25,1.25,0,1,1,0,2.5h-7.5v7.5a1.25,1.25,0,1,1-2.5,0v-7.5H1.25A1.25,1.25,0,0,1,0,10Z"
            transform="translate(0 0)"
            fill="#2a5798"
          />
        </g>
      </g>
    </svg>
  );
};

const PlusIcon = () => {
  return (
    <svg
      className="me-3"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g id="fluent:add-circle-20-regular" transform="translate(-1.667 -1.667)">
        <g id="Group" transform="translate(1.667 1.667)">
          <path
            id="Vector"
            d="M0,10A1.25,1.25,0,0,1,1.25,8.75h7.5V1.25a1.25,1.25,0,1,1,2.5,0v7.5h7.5a1.25,1.25,0,1,1,0,2.5h-7.5v7.5a1.25,1.25,0,1,1-2.5,0v-7.5H1.25A1.25,1.25,0,0,1,0,10Z"
            transform="translate(0 0)"
            fill="#2a5798"
          />
        </g>
      </g>
    </svg>
  );
};

const PlusIconWhite = () => {
  return (
    <svg
      className="me-3"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g id="fluent:add-circle-20-regular" transform="translate(-1.667 -1.667)">
        <g id="Group" transform="translate(1.667 1.667)">
          <path
            id="Vector"
            d="M0,10A1.25,1.25,0,0,1,1.25,8.75h7.5V1.25a1.25,1.25,0,1,1,2.5,0v7.5h7.5a1.25,1.25,0,1,1,0,2.5h-7.5v7.5a1.25,1.25,0,1,1-2.5,0v-7.5H1.25A1.25,1.25,0,0,1,0,10Z"
            transform="translate(0 0)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
};

const GroupProfile = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g
        id="Group_4529"
        data-name="Group 4529"
        transform="translate(12940 -1064)"
      >
        <g
          id="Rectangle_1505"
          data-name="Rectangle 1505"
          transform="translate(-12940 1064)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="24" height="24" stroke="none" />
          <rect x="0.5" y="0.5" width="23" height="23" fill="none" />
        </g>
        <g
          id="Group_4527"
          data-name="Group 4527"
          transform="translate(-13254.703 780.484)"
        >
          <path
            id="Path_3072"
            data-name="Path 3072"
            d="M318.783,285h8.38c.1.079.089.193.091.3.011.491-.016.983.019,1.474,0,.225-.018.45-.018.675q0,8.422,0,16.845a1.19,1.19,0,0,1-.042.487.167.167,0,0,1-.054.061.548.548,0,0,1-.3.051q-4.383,0-8.766,0a.506.506,0,0,1-.316-.066.267.267,0,0,1-.07-.207c-.007-.123,0-.246,0-.369q0-8.456,0-16.912c0-.13,0-.26.006-.39.015-.191.077-.254.266-.269.15-.012.3,0,.451-.009.2-.01.255-.057.259-.261.009-.376,0-.753.005-1.129A.317.317,0,0,1,318.783,285Z"
            transform="translate(0 0)"
            fill="#f8b432"
          />
          <path
            id="Path_3075"
            data-name="Path 3075"
            d="M320,768.22q0-.617.007-1.233h9.1c.089,0,.178,0,.266.007a.154.154,0,0,1,.079.134,9.08,9.08,0,0,1,0,1,.251.251,0,0,1-.039.093Z"
            transform="translate(-2.203 -462.187)"
            fill="#e49600"
          />
          <path
            id="Path_3076"
            data-name="Path 3076"
            d="M547.964,766a3.17,3.17,0,0,1-.038-.794c-.008-.143,0-.287,0-.431l0-.015a.31.31,0,0,1,.26-.084c.27,0,.54-.009.81.009,1.223-.026,2.446-.005,3.669-.011.253,0,.506-.008.758.011.325-.02.65-.011.976-.009a.3.3,0,0,1,.26.087c.62,0,1.239.007,1.858,0,.151,0,.2.04.2.194-.01.347,0,.694,0,1.041Z"
            transform="translate(-220.76 -459.972)"
            fill="#e49600"
          />
          <path
            id="Path_3077"
            data-name="Path 3077"
            d="M549.1,345.78H548.03q0-8.841,0-17.681a3.074,3.074,0,0,1,.038-.345c.294,0,.588,0,.882-.011.136-.006.156.052.155.168,0,.684.006,1.368-.007,2.052,0,.189.057.222.23.221,1.738-.006,3.475,0,5.213-.007.158,0,.225.021.225.206q-.01,4.535-.005,9.071a.051.051,0,0,1-.07-.016.761.761,0,0,1-.058-.421q0-4.1,0-8.19c0-.515,0-.515-.521-.515h-4.454c-.082,0-.164,0-.246,0a.2.2,0,0,0-.215.22c0,.1,0,.205,0,.308q0,7.246,0,14.493C549.187,345.486,549.238,345.654,549.1,345.78Z"
            transform="translate(-220.865 -40.986)"
            fill="#f8b432"
          />
          <path
            id="Path_3078"
            data-name="Path 3078"
            d="M395.956,559.009c0,.233-.005.465,0,.7,0,.119-.023.172-.157.168-.307-.01-.616-.007-.923,0-.11,0-.158-.023-.157-.146.006-.492,0-.985,0-1.477,0-.109.042-.14.145-.139.315.005.629.006.944,0,.123,0,.15.05.147.159C395.953,558.517,395.956,558.763,395.956,559.009Z"
            transform="translate(-73.854 -261.892)"
            fill="#f2fefa"
          />
          <path
            id="Path_3079"
            data-name="Path 3079"
            d="M395.972,473.773c0,.239,0,.478,0,.717,0,.114-.033.159-.151.157-.314-.006-.628,0-.942,0-.1,0-.145-.033-.144-.141q.006-.737,0-1.475c0-.1.029-.144.139-.142q.481.009.962,0c.114,0,.137.047.135.147C395.969,473.281,395.972,473.527,395.972,473.773Z"
            transform="translate(-73.87 -180.17)"
            fill="#f2fefa"
          />
          <path
            id="Path_3080"
            data-name="Path 3080"
            d="M469.244,473.73c0-.232,0-.464,0-.7,0-.117.021-.173.156-.169.314.009.628.007.941,0,.109,0,.14.037.139.142q-.006.737,0,1.474c0,.107-.039.143-.144.142-.314,0-.628-.005-.942,0-.118,0-.154-.044-.151-.157C469.248,474.221,469.244,473.975,469.244,473.73Z"
            transform="translate(-145.314 -180.147)"
            fill="#f2fefa"
          />
          <path
            id="Path_3081"
            data-name="Path 3081"
            d="M469.261,558.989c0-.239,0-.479,0-.718,0-.107.021-.164.146-.161q.471.01.943,0c.124,0,.148.052.147.159q-.005.728,0,1.456c0,.1-.02.15-.135.147q-.482-.01-.964,0c-.112,0-.139-.044-.137-.146C469.265,559.482,469.261,559.235,469.261,558.989Z"
            transform="translate(-145.331 -261.891)"
            fill="#f2fefa"
          />
          <path
            id="Path_3082"
            data-name="Path 3082"
            d="M395.968,388.413c0,.239-.005.479,0,.718,0,.117-.037.155-.153.152q-.471-.009-.943,0c-.107,0-.142-.034-.141-.141q.007-.728,0-1.456c0-.113.031-.158.15-.156.314.006.629,0,.943,0,.105,0,.145.037.143.144C395.964,387.92,395.968,388.167,395.968,388.413Z"
            transform="translate(-73.866 -98.318)"
            fill="#f2fefa"
          />
          <path
            id="Path_3083"
            data-name="Path 3083"
            d="M470.478,388.43c0,.232,0,.465,0,.7,0,.115-.02.174-.155.17-.307-.009-.615-.006-.922,0-.107,0-.162-.02-.16-.145.006-.485,0-.97,0-1.455,0-.1.023-.153.136-.151.321,0,.642,0,.963,0,.112,0,.138.048.136.148C470.475,387.938,470.478,388.184,470.478,388.43Z"
            transform="translate(-145.315 -98.331)"
            fill="#f2fefa"
          />
          <path
            id="Path_3084"
            data-name="Path 3084"
            d="M395.97,644.527c0,.239,0,.478,0,.717,0,.116-.036.156-.152.153-.314-.006-.628-.006-.943,0-.106,0-.143-.033-.142-.141,0-.492,0-.984,0-1.475,0-.094.029-.135.128-.133.321,0,.642.006.963,0,.125,0,.146.056.144.162C395.967,644.049,395.97,644.288,395.97,644.527Z"
            transform="translate(-73.868 -343.914)"
            fill="#f2fefa"
          />
          <path
            id="Path_3085"
            data-name="Path 3085"
            d="M470.494,644.516c0,.239,0,.478,0,.717,0,.112-.029.158-.149.155-.314-.007-.628-.005-.942,0-.1,0-.146-.03-.145-.139q.006-.737,0-1.475c0-.115.053-.136.151-.135.307,0,.615.006.922,0,.124,0,.169.035.165.162C470.488,644.038,470.494,644.277,470.494,644.516Z"
            transform="translate(-145.331 -343.904)"
            fill="#f2fefa"
          />
          <path
            id="Path_3088"
            data-name="Path 3088"
            d="M578.452,402.477c0,.355,1.385.709,1.384,1.064h-5.819q0-7.63,0-15.26c0-.3,0-.3.3-.3h5.053c.271,0,.272,0,.272.273,0,1.934.081,6.529.137,10.344.031,2.06.054,3.9.054,4.946-.619-.11-4.852.084-4.825-1.29.008-.383,4.857-4.35,4.711-4.236-.851.661-.184,1.221,0,2.279s-2.492,1.754-1.481,2.108Z"
            transform="translate(-245.785 -98.747)"
            fill="#d48e07"
          />
          <path
            id="Path_3089"
            data-name="Path 3089"
            d="M614.071,558.97c0,.232,0,.464,0,.7,0,.127-.031.186-.171.182-.3-.008-.6-.007-.9,0-.127,0-.165-.047-.164-.168q.007-.717,0-1.433c0-.129.052-.164.171-.162.3.005.6.006.9,0,.127,0,.167.048.164.17C614.066,558.492,614.07,558.731,614.071,558.97Z"
            transform="translate(-283.01 -261.865)"
            fill="#fed17a"
          />
          <path
            id="Path_3091"
            data-name="Path 3091"
            d="M614.071,558.97c0,.232,0,.464,0,.7,0,.127-.031.186-.171.182-.3-.008-.6-.007-.9,0-.127,0-.165-.047-.164-.168q.007-.717,0-1.433c0-.129.052-.164.171-.162.3.005.6.006.9,0,.127,0,.167.048.164.17C614.066,558.492,614.07,558.731,614.071,558.97Z"
            transform="translate(-283.01 -258.127)"
            fill="#fed17a"
          />
          <path
            id="Path_3090"
            data-name="Path 3090"
            d="M614.1,473.8c0,.239,0,.479,0,.718,0,.113-.042.161-.156.16-.315,0-.629,0-.944,0-.094,0-.135-.04-.134-.136q0-.738,0-1.477c0-.1.036-.148.143-.146.314,0,.629,0,.943,0,.123,0,.149.057.147.164C614.1,473.32,614.1,473.559,614.1,473.8Z"
            transform="translate(-283.037 -180.197)"
            fill="#fed17a"
          />
        </g>
      </g>
    </svg>
  );
};

const Address = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20.333"
      height="23.333"
      viewBox="0 0 16.333 23.333"
    >
      <path
        id="Path_3582"
        data-name="Path 3582"
        d="M18.167,4A8.168,8.168,0,0,0,10,12.167c0,6.125,8.167,15.167,8.167,15.167s8.167-9.042,8.167-15.167A8.168,8.168,0,0,0,18.167,4Zm0,11.083a2.917,2.917,0,1,1,2.917-2.917A2.918,2.918,0,0,1,18.167,15.083Z"
        transform="translate(-10 -4)"
        fill="#f6b333"
      />
    </svg>
  );
};

const Description = () => {
  return (
    <svg
      className="me-2 description_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="22.667"
      height="17.333"
      viewBox="0 0 22.667 17.333"
    >
      <path
        id="Path_3580"
        data-name="Path 3580"
        d="M26.667,14.5,19.867,8H6.267A2.225,2.225,0,0,0,4,10.167V23.178a2.216,2.216,0,0,0,2.267,2.156L24.4,25.323a2.216,2.216,0,0,0,2.267-2.156ZM18.733,9.625l6.233,5.958H18.733Z"
        transform="translate(-4 -8)"
        fill="#f6b333"
      />
    </svg>
  );
};

const Courses = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="21.931"
      height="17.819"
      viewBox="0 0 21.931 17.819"
    >
      <g
        id="_2205242_college_course_degree_education_university_icon"
        data-name="2205242_college_course_degree_education_university_icon"
        transform="translate(0 -1)"
      >
        <path
          id="Path_3584"
          data-name="Path 3584"
          d="M0,6.483l10.965,5.483,9.595-4.8V18.819h1.371V6.483L10.965,1Z"
          transform="translate(0 0)"
          fill="#f6b333"
        />
        <path
          id="Path_3585"
          data-name="Path 3585"
          d="M3,7.059v6.087l6.853,3.427,6.853-3.427V7.059L9.853,10.486Z"
          transform="translate(1.112 2.246)"
          fill="#f6b333"
        />
      </g>
    </svg>
  );
};

const Students = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g id="Layer_2" data-name="Layer 2" transform="translate(-2 -2)">
        <path
          id="Path_3579"
          data-name="Path 3579"
          d="M12,9a6,6,0,0,0-5.91,5H2v2H4v6H6V16H18v6h2V16h2V14H17.91A6,6,0,0,0,12,9Z"
          fill="#f6b333"
        />
        <circle
          id="Ellipse_111"
          data-name="Ellipse 111"
          cx="3"
          cy="3"
          r="3"
          transform="translate(9 2)"
          fill="#f6b333"
        />
      </g>
    </svg>
  );
};

const Branches = () => {
  return (
    <svg
      className="me-2"
      id="XMLID_8_"
      xmlns="http://www.w3.org/2000/svg"
      width="22.041"
      height="21.838"
      viewBox="0 0 21.041 21.838"
    >
      <path
        id="XMLID_149_"
        d="M90.94,64.1,80.5,69.542v2.777h21.041V69.539Zm.1,6.144a1.492,1.492,0,1,1,1.492-1.492A1.494,1.494,0,0,1,91.035,70.244Z"
        transform="translate(-80.5 -64.1)"
        fill="#f4b947"
      />
      <path
        id="XMLID_137_"
        d="M115.81,482.333V483.8H95.5v-1.463h1.6V471.9H98.56v10.433h3.752V471.9h1.463v10.433h3.752V471.9h1.463v10.433h3.752V471.9h1.463v10.433Z"
        transform="translate(-95.5 -461.957)"
        fill="#f4b947"
      />
    </svg>
  );
};

const URL = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20.3"
      height="20.242"
      viewBox="0 0 20.3 20.242"
    >
      <g
        id="_5402394_internet_link_hyperlink_url_web_icon"
        data-name="5402394_internet_link_hyperlink_url_web_icon"
        transform="translate(-2.697 -2.747)"
      >
        <path
          id="Path_3586"
          data-name="Path 3586"
          d="M17.9,14.315a1.086,1.086,0,0,1-.764-1.855l2.313-2.313a2.182,2.182,0,0,0,0-3.088L17.9,5.511a2.247,2.247,0,0,0-3.088,0L12.5,7.824A1.091,1.091,0,0,1,10.96,6.3l2.313-2.313a4.473,4.473,0,0,1,6.175,0l1.538,1.538a4.364,4.364,0,0,1,0,6.175L18.662,14A1.091,1.091,0,0,1,17.9,14.315Z"
          transform="translate(0.731)"
          fill="#f6b333"
        />
        <path
          id="Path_3587"
          data-name="Path 3587"
          d="M8.6,22.262a4.364,4.364,0,0,1-3.088-1.276L3.977,19.448a4.364,4.364,0,0,1,0-6.175L6.3,10.96A1.091,1.091,0,0,1,7.828,12.5L5.515,14.811a2.182,2.182,0,0,0,0,3.088l1.549,1.549a2.247,2.247,0,0,0,3.088,0l2.313-2.313A1.091,1.091,0,1,1,14,18.662L11.69,20.975A4.364,4.364,0,0,1,8.6,22.262Z"
          transform="translate(0 0.726)"
          fill="#f6b333"
        />
        <path
          id="Path_3588"
          data-name="Path 3588"
          d="M8.912,16.941a1.091,1.091,0,0,1-.775-1.866l6.95-6.939a1.092,1.092,0,1,1,1.538,1.549l-6.95,6.939A1.091,1.091,0,0,1,8.912,16.941Z"
          transform="translate(0.466 0.462)"
          fill="#f6b333"
        />
      </g>
    </svg>
  );
};

const PinCode = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="23.354"
      height="23.354"
      viewBox="0 0 23.354 23.354"
    >
      <g id="location" transform="translate(0 0)">
        <path
          id="Path_3699"
          data-name="Path 3699"
          d="M22.669,10.993h-.753a10.262,10.262,0,0,0-9.556-9.556V.684a.684.684,0,0,0-1.368,0v.753a10.262,10.262,0,0,0-9.556,9.556H.684a.684.684,0,0,0,0,1.368h.753a10.262,10.262,0,0,0,9.556,9.556v.753a.684.684,0,0,0,1.368,0v-.753a10.262,10.262,0,0,0,9.556-9.556h.753a.684.684,0,0,0,0-1.368ZM12.361,20.545v-.7a.684.684,0,1,0-1.368,0v.7a8.909,8.909,0,0,1-8.184-8.184h.7a.684.684,0,1,0,0-1.368h-.7a8.909,8.909,0,0,1,8.184-8.184v.7a.684.684,0,1,0,1.368,0v-.7a8.909,8.909,0,0,1,8.184,8.184h-.7a.684.684,0,0,0,0,1.368h.7A8.909,8.909,0,0,1,12.361,20.545Z"
          fill="#f6b333"
        />
        <ellipse
          id="Ellipse_114"
          data-name="Ellipse 114"
          cx="1"
          cy="0.5"
          rx="1"
          ry="0.5"
          transform="translate(10.677 9.677)"
          fill="#f6b333"
        />
        <path
          id="Path_3700"
          data-name="Path 3700"
          d="M155.854,121a4.782,4.782,0,0,0-3.832,7.643l3.283,4.4a.684.684,0,0,0,1.1,0l3.283-4.4A4.782,4.782,0,0,0,155.854,121Zm0,6.842a2.053,2.053,0,1,1,2.053-2.053A2.055,2.055,0,0,1,155.854,127.842Z"
          transform="translate(-144.177 -115.481)"
          fill="#f6b333"
        />
      </g>
    </svg>
  );
};

const City = () => {
  return (
    <svg
      className="me-2"
      id="_352521_location_on_icon"
      data-name="352521_location_on_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
    >
      <path
        id="Path_3583"
        data-name="Path 3583"
        d="M0,0H28V28H0Z"
        fill="none"
      />
      <g id="map_1_" data-name="map (1)" transform="translate(3.5 3)">
        <path
          id="Path_3693"
          data-name="Path 3693"
          d="M32.128,272.066h-.942a.618.618,0,0,0-.568.374l-2.607,6.07,6.191-3.162A29.2,29.2,0,0,1,32.128,272.066Zm0,0"
          transform="translate(-26.863 -260.428)"
          fill="#f6b333"
        />
        <path
          id="Path_3694"
          data-name="Path 3694"
          d="M180.29,272.44a.618.618,0,0,0-.568-.374h-.942a33.032,33.032,0,0,1-3.836,5.528,1.856,1.856,0,0,1-2.8,0c-.075-.087-.469-.543-1.012-1.244l-1.116.57,4.222,4.214,8-4.148Zm0,0"
          transform="translate(-163.046 -260.428)"
          fill="#f6b333"
        />
        <path
          id="Path_3695"
          data-name="Path 3695"
          d="M.387,407.579l-.337.784a.617.617,0,0,0,.568.859H9.685a2.507,2.507,0,0,1,.362-.2L5.818,404.8Zm0,0"
          transform="translate(0 -387.722)"
          fill="#f6b333"
        />
        <path
          id="Path_3696"
          data-name="Path 3696"
          d="M309.592,422.68l-1.265-2.946-7.339,3.8h8.037a.617.617,0,0,0,.568-.859Zm0,0"
          transform="translate(-288.643 -402.04)"
          fill="#f6b333"
        />
        <path
          id="Path_3697"
          data-name="Path 3697"
          d="M242.177,121.413a.618.618,0,1,0-.618.616A.618.618,0,0,0,242.177,121.413Zm0,0"
          transform="translate(-231.059 -115.363)"
          fill="#f6b333"
        />
        <path
          id="Path_3698"
          data-name="Path 3698"
          d="M126.5,16.316c.208-.239,5.092-5.889,5.092-9.773,0-8.009-11.117-8.107-11.117,0,0,3.884,4.885,9.534,5.092,9.773a.619.619,0,0,0,.932,0ZM124.182,6.05A1.853,1.853,0,1,1,126.035,7.9,1.853,1.853,0,0,1,124.182,6.05Zm0,0"
          transform="translate(-115.535 0)"
          fill="#f6b333"
        />
      </g>
    </svg>
  );
};

const Globe = () => {
  return (
    <svg
      className="me-2"
      id="_352521_location_on_icon"
      data-name="352521_location_on_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="28"
      viewBox="0 0 28 28"
    >
      <path
        id="Path_3583"
        data-name="Path 3583"
        d="M0,0H28V28H0Z"
        fill="none"
      />
      <g id="world" transform="translate(4.346 2.497)">
        <g id="Group_6755" data-name="Group 6755" transform="translate(0.004)">
          <path
            id="Path_3690"
            data-name="Path 3690"
            d="M22.976,5.467l-.284.09-1.514.135-.428.683-.31-.1L19.235,5.19l-.175-.565-.234-.6-.757-.679-.894-.175-.021.409.875.854.428.5-.482.252-.392-.116L17,4.827l.02-.474-.771-.317L15.99,5.15l-.777.176.077.621,1.012.195.175-.993.835.123L17.7,5.5h.623l.426.854L19.881,7.5l-.083.446-.912-.116-1.575.8L16.177,9.987l-.148.6h-.407l-.759-.35-.737.35.183.777.321-.37.564-.018-.039.7.467.137.466.524.762-.214.87.137,1.01.272.5.059.855.971,1.651.971-1.068,2.04-1.127.524-.428,1.166-1.631,1.089-.174.628A9.49,9.49,0,0,0,22.976,5.467Z"
            transform="translate(-5.583 -1.252)"
            fill="#f6b333"
          />
          <path
            id="Path_3691"
            data-name="Path 3691"
            d="M10.6,17.444l-.692-1.283.635-1.324-.635-.19-.713-.716-1.58-.354-.524-1.1v.652H6.856L5.494,11.284V9.768l-1-1.623-1.585.283H1.844l-.537-.352.685-.543-.684.158A9.489,9.489,0,0,0,9.5,21.98,9.948,9.948,0,0,0,10.7,21.9l-.1-1.151s.436-1.71.436-1.768S10.6,17.444,10.6,17.444Z"
            transform="translate(-0.004 -2.976)"
            fill="#f6b333"
          />
          <path
            id="Path_3692"
            data-name="Path 3692"
            d="M4.953,3.064l1.688-.235L7.419,2.4l.875.252,1.4-.077.479-.753.7.115,1.7-.159.468-.515.659-.44.933.14.34-.051A9.471,9.471,0,0,0,3.6,3.455h0ZM11.325.945,12.3.411l.623.36-.9.687-.861.087-.388-.252Zm-2.874.078.428.178.561-.178.305.529-1.295.34-.622-.364S8.437,1.136,8.451,1.023Z"
            transform="translate(-1.423)"
            fill="#f6b333"
          />
        </g>
      </g>
    </svg>
  );
};

const Employees = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="28.906"
      height="17.081"
      viewBox="0 0 28.906 17.081"
    >
      <g
        id="_309041_users_group_people_icon"
        data-name="309041_users_group_people_icon"
        transform="translate(-1 -6)"
      >
        <g id="Group_6428" data-name="Group 6428" transform="translate(7.57 6)">
          <path
            id="Path_3575"
            data-name="Path 3575"
            d="M9.942,9.942A3.871,3.871,0,0,1,13.884,6a3.871,3.871,0,0,1,3.942,3.942,3.871,3.871,0,0,1-3.942,3.942A3.871,3.871,0,0,1,9.942,9.942Zm3.942,6.57C7.839,16.511,6,20.847,6,20.847v2.234H21.767V20.847S19.928,16.511,13.884,16.511Z"
            transform="translate(-6 -6)"
            fill="#f6b333"
          />
        </g>
        <g
          id="Group_6431"
          data-name="Group 6431"
          transform="translate(20.315 6)"
        >
          <g
            id="Group_6429"
            data-name="Group 6429"
            transform="translate(0.394)"
          >
            <circle
              id="Ellipse_108"
              data-name="Ellipse 108"
              cx="3.5"
              cy="3.5"
              r="3.5"
              transform="translate(-0.256 0.04)"
              fill="#f6b333"
            />
          </g>
          <g
            id="Group_6430"
            data-name="Group 6430"
            transform="translate(0 9.197)"
          >
            <path
              id="Path_3576"
              data-name="Path 3576"
              d="M19.379,13A6.116,6.116,0,0,0,15.7,14.051a8.107,8.107,0,0,1,4.2,4.2v.131h5.387V16.679A6.113,6.113,0,0,0,19.379,13Z"
              transform="translate(-15.7 -13)"
              fill="#f6b333"
            />
          </g>
        </g>
        <g
          id="Group_6434"
          data-name="Group 6434"
          transform="translate(20.315 6)"
        >
          <g
            id="Group_6432"
            data-name="Group 6432"
            transform="translate(0.394)"
          >
            <circle
              id="Ellipse_109"
              data-name="Ellipse 109"
              cx="3.5"
              cy="3.5"
              r="3.5"
              transform="translate(-0.256 0.04)"
              fill="#f6b333"
            />
          </g>
          <g
            id="Group_6433"
            data-name="Group 6433"
            transform="translate(0 9.197)"
          >
            <path
              id="Path_3577"
              data-name="Path 3577"
              d="M19.379,13A6.116,6.116,0,0,0,15.7,14.051a8.107,8.107,0,0,1,4.2,4.2v.131h5.387V16.679A6.113,6.113,0,0,0,19.379,13Z"
              transform="translate(-15.7 -13)"
              fill="#f6b333"
            />
          </g>
        </g>
        <g id="Group_6437" data-name="Group 6437" transform="translate(1 6)">
          <g
            id="Group_6435"
            data-name="Group 6435"
            transform="translate(2.628)"
          >
            <circle
              id="Ellipse_110"
              data-name="Ellipse 110"
              cx="3.5"
              cy="3.5"
              r="3.5"
              transform="translate(-0.175 0.04)"
              fill="#f6b333"
            />
          </g>
          <g
            id="Group_6436"
            data-name="Group 6436"
            transform="translate(0 9.197)"
          >
            <path
              id="Path_3578"
              data-name="Path 3578"
              d="M6.913,13a6.116,6.116,0,0,1,3.679,1.051,8.107,8.107,0,0,0-4.2,4.2v.131H1V16.679A6.113,6.113,0,0,1,6.913,13Z"
              transform="translate(-1 -13)"
              fill="#f6b333"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const Brand = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="21.661"
      height="15.961"
      viewBox="0 0 21.661 15.961"
    >
      <path
        id="Path_3592"
        data-name="Path 3592"
        d="M22.685,10.963A2.289,2.289,0,0,0,20.821,10L8.28,10.011A2.27,2.27,0,0,0,6,12.28v11.4a2.27,2.27,0,0,0,2.28,2.269l12.541.011A2.289,2.289,0,0,0,22.685,25l4.976-7.017Z"
        transform="translate(-6 -10)"
        fill="#f6b333"
      />
    </svg>
  );
};

const Ownership = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="22.868"
      height="22"
      viewBox="0 0 22.868 22"
    >
      <g
        id="_2216349_building_building_location_commercial_company_map_icon"
        data-name="2216349_building_building location_commercial_company_map_icon"
        transform="translate(-19.9 -19.1)"
      >
        <path
          id="Path_3593"
          data-name="Path 3593"
          d="M33.464,19.1H19.9v22H33.464ZM26.02,36.923H24.614V34.359H26.02Zm0-5.169H24.614V29.19H26.02Zm0-5.128H24.614V24.062H26.02Zm4.259,10.3H28.874V34.359H30.28Zm0-5.169H28.874V29.19H30.28Zm0-5.128H28.874V24.062H30.28Z"
          transform="translate(0 0)"
          fill="#f6b333"
        />
        <path
          id="Path_3594"
          data-name="Path 3594"
          d="M63.646,51.114V40.9H55.5V53.885h5.376A2.771,2.771,0,0,0,63.646,51.114ZM60.5,49.749H57.774V48.385H60.5Zm0-3.432H57.774V44.911H60.5Z"
          transform="translate(-20.878 -12.785)"
          fill="#f6b333"
        />
      </g>
    </svg>
  );
};

const Collegepic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36.259"
      height="36.937"
      viewBox="0 0 36.259 36.937"
    >
      <g id="Asset_1_6" data-name="Asset 1 6" opacity="0.2">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1" data-name="Layer 1">
            <path
              id="Vector"
              d="M16.645,36.449l.844-2.907a.568.568,0,0,0-.028-.4.581.581,0,0,0-.29-.286,35.069,35.069,0,0,1-3.816-1.88,19.632,19.632,0,0,1-7.286-8.079A18.877,18.877,0,0,1,4.1,14.832c-.03-1.869-.029-6.659-.022-10.076a.55.55,0,0,1,.039-.214.557.557,0,0,1,.119-.183.566.566,0,0,1,.181-.124.573.573,0,0,1,.216-.047h11.3a.575.575,0,0,0,.216-.047.568.568,0,0,0,.181-.125.558.558,0,0,0,.119-.184.552.552,0,0,0,.038-.215V.572a.556.556,0,0,0-.158-.4.573.573,0,0,0-.4-.173H.564A.577.577,0,0,0,.347.047.569.569,0,0,0,.164.172a.56.56,0,0,0-.12.184A.553.553,0,0,0,.006.572V2.3c0,2.976-.021,10.181.017,12.6a23.116,23.116,0,0,0,2.4,9.868A23.994,23.994,0,0,0,11.2,34.518a44.82,44.82,0,0,0,4.7,2.288.558.558,0,0,0,.457-.01.549.549,0,0,0,.184-.142.539.539,0,0,0,.107-.2Z"
              transform="translate(0)"
              fill="#f6b333"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M6.894,0A21.689,21.689,0,0,1,4.159,2.129,35.943,35.943,0,0,1,.342,4.069a.59.59,0,0,0-.29.3.6.6,0,0,0-.028.416l.846,3A.563.563,0,0,0,.976,8a.552.552,0,0,0,.183.149.542.542,0,0,0,.458.013A44.092,44.092,0,0,0,6.317,5.8,25.455,25.455,0,0,0,9.8,3.04Z"
              transform="translate(19.096 28.734)"
              fill="#2a5798"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M16.481,2.377V.59a.584.584,0,0,0-.158-.412.565.565,0,0,0-.4-.178H.55A.565.565,0,0,0,.156.18.584.584,0,0,0,0,.59V3.732a.586.586,0,0,0,.038.222.579.579,0,0,0,.119.19.568.568,0,0,0,.181.129.56.56,0,0,0,.216.049h11.3a.562.562,0,0,1,.392.179.581.581,0,0,1,.155.408c0,3.528,0,8.474-.022,10.4a19.994,19.994,0,0,1-1.967,8.32c-.242.509-.5,1-.776,1.479l2.967,3.1a25.111,25.111,0,0,0,1.457-2.64,24.485,24.485,0,0,0,2.4-10.186C16.5,12.879,16.489,5.453,16.481,2.377Z"
              transform="translate(19.769 0.081)"
              fill="#2a5798"
            />
            <path
              id="Vector-4"
              data-name="Vector"
              d="M25.733,22.741l-4.858-4.98-.813-.825L20,16.877a11.113,11.113,0,0,0,.768-1.348,10.7,10.7,0,0,0,1.051-4.657A10.912,10.912,0,0,0,5.217,1.6,11.09,11.09,0,0,0,3.436,2.957,10.871,10.871,0,0,0,.471,7.7,10.262,10.262,0,0,0,.153,9.053a10.09,10.09,0,0,0-.142,1.357c0,.158-.011.309-.011.461a11.3,11.3,0,0,0,.1,1.491c.024.195.059.4.11.645.04.19.084.391.138.6a.21.21,0,0,0,.017.057,10.775,10.775,0,0,0,1.113,2.669,11.006,11.006,0,0,0,.806,1.188c.243.317.477.572.692.8s.445.45.681.662a10.921,10.921,0,0,0,13.283.95l.035.035,5.663,5.8a2.164,2.164,0,1,0,3.093-3.027ZM18.319,10.875a7.4,7.4,0,0,1-14.794,0,4.208,4.208,0,0,1,.016-.447,7.216,7.216,0,0,1,.2-1.312,7.4,7.4,0,0,1,14.577,1.755Z"
              transform="translate(7.199 5.594)"
              fill="#2a5798"
            />
            <path
              id="Vector-5"
              data-name="Vector"
              d="M5.366,9.935c1.967-2.034,6.52-7.015,8.3-8.837,1.191-1.222,2.256-1.421,3.09-.608.862.844.66,1.994-.58,3.256-2.077,2.116-6.941,7.384-9.031,9.489-1.31,1.321-2.067,1.314-3.378,0C2.749,12.218,1.734,11.2.742,10.163c-.929-.986-.98-2.055-.186-2.837a1.879,1.879,0,0,1,2.7.236C3.97,8.261,4.6,9.06,5.366,9.935Z"
              transform="translate(13.166 6.9)"
              fill="#f6b333"
            />
          </g>
        </g>
      </g>
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
const RemoveRedIconBig = () => {
  return (
    <svg
      className="red_icon_red"
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
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

const EditWhiteIcon = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 33 33"
    >
      <g
        id="Group_6725"
        data-name="Group 6725"
        transform="translate(-183 -389)"
      >
        <g
          id="Rectangle_480"
          data-name="Rectangle 480"
          transform="translate(183 389)"
          fill="#fff"
          stroke="#fff"
          stroke-width="1"
          opacity="0"
        >
          <rect width="33" height="33" stroke="none" />
          <rect x="0.5" y="0.5" width="32" height="32" fill="none" />
        </g>
        <g id="fluent:edit-20-regular" transform="translate(190.014 396.015)">
          <g id="Group" transform="translate(0 0)">
            <path
              id="Vector"
              d="M13.148.951A3.254,3.254,0,0,1,17.9,5.389l-.152.164L6.519,16.784a2.34,2.34,0,0,1-.845.54l-.193.062L.74,18.679A.585.585,0,0,1,0,18.053l.019-.094,1.293-4.74a2.317,2.317,0,0,1,.465-.889l.137-.15L13.148.951Zm-1.005,2.66-9.4,9.4a1.169,1.169,0,0,0-.251.375l-.049.144L1.418,17.281l3.755-1.023a1.169,1.169,0,0,0,.279-.117l.125-.084.115-.1,9.4-9.4L12.143,3.611Zm4.781-1.833a2.085,2.085,0,0,0-2.808-.129l-.14.129L12.969,2.783l2.946,2.949,1.008-1.005a2.085,2.085,0,0,0,.129-2.808l-.129-.14Z"
              transform="translate(0 0)"
              fill="#fff"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const EditIcon = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 33 33"
    >
      <g
        id="Group_6725"
        data-name="Group 6725"
        transform="translate(-183 -389)"
      >
        <g
          id="Rectangle_480"
          data-name="Rectangle 480"
          transform="translate(183 389)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="33" height="33" stroke="none" />
          <rect x="0.5" y="0.5" width="32" height="32" fill="none" />
        </g>
        <g id="fluent:edit-20-regular" transform="translate(190.014 396.015)">
          <g id="Group" transform="translate(0 0)">
            <path
              id="Vector"
              d="M13.148.951A3.254,3.254,0,0,1,17.9,5.389l-.152.164L6.519,16.784a2.34,2.34,0,0,1-.845.54l-.193.062L.74,18.679A.585.585,0,0,1,0,18.053l.019-.094,1.293-4.74a2.317,2.317,0,0,1,.465-.889l.137-.15L13.148.951Zm-1.005,2.66-9.4,9.4a1.169,1.169,0,0,0-.251.375l-.049.144L1.418,17.281l3.755-1.023a1.169,1.169,0,0,0,.279-.117l.125-.084.115-.1,9.4-9.4L12.143,3.611Zm4.781-1.833a2.085,2.085,0,0,0-2.808-.129l-.14.129L12.969,2.783l2.946,2.949,1.008-1.005a2.085,2.085,0,0,0,.129-2.808l-.129-.14Z"
              transform="translate(0 0)"
              fill="#1c1b1b"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
const EyeViewIcon = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="24.569"
      height="24"
      viewBox="0 0 24.569 24"
    >
      <g
        id="_103796_view_icon"
        data-name="103796_view_icon"
        transform="translate(0 -0.285)"
      >
        <g id="background">
          <rect
            id="Rectangle_1906"
            data-name="Rectangle 1906"
            width="24"
            height="24"
            transform="translate(0.285 0.285)"
            fill="none"
          />
        </g>
        <g id="view" transform="translate(0 4.607)">
          <circle
            id="Ellipse_113"
            data-name="Ellipse 113"
            cx="5"
            cy="5"
            r="5"
            transform="translate(7.285 2.678)"
            fill="#2a5798"
          />
          <path
            id="Path_3686"
            data-name="Path 3686"
            d="M12.285,6C4.607,6,0,13.63,0,13.63s4.607,7.726,12.285,7.726,12.285-7.678,12.285-7.678S19.963,6,12.285,6Zm0,13.82c-6.718,0-10.365-6.142-10.365-6.142S5.566,7.536,12.285,7.536,22.65,13.678,22.65,13.678,19,19.82,12.285,19.82Z"
            transform="translate(0 -6)"
            fill="#2a5798"
          />
        </g>
      </g>
    </svg>
  );
};

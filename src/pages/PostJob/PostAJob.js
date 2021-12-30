import React from "react";
import "./PostAJob.scss";
import {
  Typography,
  Box,
  MenuItem,
  Button,
  Grid,
  TextField,
  List,
  ListItem,
  Container,
  Checkbox,
  Radio,
  Modal,
  Backdrop,
  InputAdornment,
  Link,
  Fade,
  Menu,
} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SchoolPlaceholder from "../../images/schl_logo_placeholder.svg";
import AddIcon from "@material-ui/icons/Add";
import SchoolSMLIMG from "../../images/profile_schl.png";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PostBG from "../../images/postajob_bg.svg";
import { withStyles } from "@material-ui/core/styles";
import NoCreditsModal from "../NoCredits/NoCredits";
import UsingCreditsModalJobPost from "../UsingCreditsModal/UsingCreditsModalJobPost";

require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function PostAJob() {
  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);

  const [selectedValueLooking1, setSelectedValueLooking1] = React.useState("a");

  const handleChangeLooking1 = (event) => {
    setSelectedValueLooking1(event.target.value);
  };

  const [openmodallater, setOpenModallater] = React.useState(false);

  const handleSaveLatereOpen = () => {
    setOpenModallater(true);
  };

  const handleSaveLaterClose = () => {
    setOpenModallater(false);
  };

  const [openmodalpostjob, setOpenModalpostjob] = React.useState(false);

  const handlepostjobOpen = () => {
    setOpenModalpostjob(true);
  };

  const handlepostjobClose = () => {
    setOpenModalpostjob(false);
  };

  const [openmodalNoCredits, setOpenModalNoCredits] = React.useState(false);

  const handleNoCreditsOpen = () => {
    setOpenModalNoCredits(true);
  };

  const handleNoCreditsClose = () => {
    setOpenModalNoCredits(false);
  };

  const [openmodalsuccess, setOpenModalsuccess] = React.useState(false);

  const handleSuccessOpen = () => {
    setOpenModalsuccess(true);
  };

  const handleSuccessClose = () => {
    setOpenModalsuccess(false);
  };

  const [openmodaljobpostsuccess, setOpenModaljobpostsuccess] =
    React.useState(false);

  const handlejobpostsuccessOpen = () => {
    setOpenModaljobpostsuccess(true);
  };

  const handlejobpostsuccessClose = () => {
    setOpenModaljobpostsuccess(false);
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openmodalNewJobPost, setOpenModalNewJobPost] = React.useState(false);

  const handleNewJobPostOpen = () => {
    setOpenModalNewJobPost(true);
  };

  const handleNewJobPostClose = () => {
    setOpenModalNewJobPost(false);
  };

  const [openmodalEditJobPost, setOpenModalEditJobPost] = React.useState(false);

  const handleEditJobPostOpen = () => {
    setOpenModalEditJobPost(true);
  };

  const handleEditJobPostClose = () => {
    setOpenModalEditJobPost(false);
  };

  const [openmodalAddLocation, setOpenModalAddLocation] = React.useState(false);

  const handleAddLocationOpen = () => {
    setOpenModalAddLocation(true);
  };

  const handleAddLocationClose = () => {
    setOpenModalAddLocation(false);
  };

  const [openmodalEditLocation, setOpenModalEditLocation] =
    React.useState(false);

  const handleEditLocationOpen = () => {
    setOpenModalEditLocation(true);
  };

  const handleEditLocationClose = () => {
    setOpenModalEditLocation(false);
  };

  const [openmodalJobDescp, setOpenModalJobDescp] = React.useState(false);

  const handleJobDescpOpen = () => {
    setOpenModalJobDescp(true);
  };

  const handleJobDescpClose = () => {
    setOpenModalJobDescp(false);
  };

  const [openmodalJobDescpEdit, setOpenModalJobDescpEdit] =
    React.useState(false);

  const handleJobDescpEditOpen = () => {
    setOpenModalJobDescpEdit(true);
  };

  const handleJobDescpEditClose = () => {
    setOpenModalJobDescpEdit(false);
  };

  const [openmodalOverwrite, setOpenModalOverwrite] = React.useState(false);

  const handleOverwriteOpen = () => {
    setOpenModalOverwrite(true);
  };

  const handleOverwriteClose = () => {
    setOpenModalOverwrite(false);
  };

  const [openmodalTemplateSave, setOpenModalTemplateSave] =
    React.useState(false);

  const handleTemplateSaveOpen = () => {
    setOpenModalTemplateSave(true);
  };

  const handleTemplateSaveClose = () => {
    setOpenModalTemplateSave(false);
  };

  const [openmodalTemplateSave2, setOpenModalTemplateSave2] =
    React.useState(false);

  const handleTemplateSave2Open = () => {
    setOpenModalTemplateSave2(true);
  };

  const handleTemplateSave2Close = () => {
    setOpenModalTemplateSave2(false);
  };

  const SkillsBtn = () => {
    const AddSkillsArea = (document.querySelector(
      ".addskillareadiv"
    ).style.display = "block");
    const SkillsBtn = (document.querySelector(".addskillsbtn").style.display =
      "none");
  };

  const OpenSelectDiv = () => {
    const SelectOptions = document.querySelector(".selectdiv2");
    const FakeInput = document.querySelector(".arrowinputarea");
    if (SelectOptions.style.display === "block") {
      SelectOptions.style.display = "none";
      FakeInput.style.transform = "translateY(-50%) rotate(-180deg)";
    } else {
      SelectOptions.style.display = "block";
      FakeInput.style.transform = "translateY(-50%) rotate(0deg)";
    }
  };
  const OpenSkillsDiv = () => {
    const SelectOptions = document.querySelector(".selectdiv3");
    if (SelectOptions.style.display === "block") {
      SelectOptions.style.display = "none";
    } else {
      SelectOptions.style.display = "block";
    }
  };
  const OpenTemplateDiv = () => {
    const SelectOptions = document.querySelector(".templatesavingoptions");
    const FakeInputTemmplate = document.querySelector(".arrowinputarea");
    if (SelectOptions.style.display === "block") {
      SelectOptions.style.display = "none";
      FakeInputTemmplate.style.transform = "translateY(-50%) rotate(-180deg)";
    } else {
      SelectOptions.style.display = "block";
      FakeInputTemmplate.style.transform = "translateY(-50%) rotate(0deg)";
    }
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
              className="darkbluecolor border8 lightbluecolorbtn"
              startIcon={<AddIcon />}
              onClick={handleNewJobPostOpen}
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
      <Box className="pagecontentarea postajobcontent">
        <Container maxWidth="lg">
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={12} className="mt-2 mb-2">
              <Grid
                container
                direction="row"
                className="postjobheader"
                justifyContent="space-between"
              >
                <Grid item md={6}>
                  <Typography variant="span" className="pagetitle">
                    Post a Job
                  </Typography>
                </Grid>
                <Grid item md={6}>
                  <img
                    src={BASE_URL + PostBG}
                    alt=""
                    className="align-right bg_img"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box component="div" className="formdiv">
                <Box component="div" className="appbar_tabpanel">
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                  >
                    <Grid item xs={12}>
                      <Box component="div" className="hiringheader dis_flex">
                        <Institution />
                        <Box
                          component="div"
                          className="cont fullwidth_100percent"
                        >
                          <Typography variant="span" className="block font24">
                            Hiring for
                            <Typography
                              variant="span"
                              className="fontweight700"
                            >
                              &nbsp;DPS School, Darjeeling
                            </Typography>
                          </Typography>
                          <Typography
                            variant="span"
                            className="darkcolortext mt-2 mb-2 block"
                          >
                            Looking for People within my Domain
                          </Typography>
                          <Box
                            component="div"
                            className="dis_flex hiringlistdiv"
                          >
                            <Box component="div" className="hiringlist">
                              <Typography variant="span" className="font14">
                                Job Category
                                <Typography
                                  variant="span"
                                  className="ms-3 fontweight700"
                                >
                                  Academic
                                </Typography>
                              </Typography>
                            </Box>
                            <Box component="div" className="hiringlist">
                              <Typography variant="span" className="font14">
                                Candidates Looking to Work in
                                <Typography
                                  variant="span"
                                  className="ms-3 fontweight700"
                                >
                                  School
                                </Typography>
                              </Typography>
                            </Box>
                            <Box component="div" className="hiringlist">
                              <Typography variant="span" className="font14">
                                Board
                                <Typography
                                  variant="span"
                                  className="ms-3 fontweight700"
                                >
                                  CBSE
                                </Typography>
                              </Typography>
                            </Box>
                            <Box component="div" className="hiringlist">
                              <Typography variant="span" className="font14">
                                Level{" "}
                                <Typography
                                  variant="span"
                                  className="ms-3 fontweight700"
                                >
                                  XI
                                </Typography>
                              </Typography>
                            </Box>
                            <Box component="div" className="hiringlist">
                              <Typography variant="span" className="font14">
                                Subject
                                <Typography
                                  variant="span"
                                  className="ms-3 fontweight700"
                                >
                                  Biology
                                </Typography>
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Button
                          startIcon={<EditIcon />}
                          className="marginautoright editbtn"
                          onClick={handleEditJobPostOpen}
                        ></Button>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                  >
                    <Grid item xs={12}>
                      <Box component="div" className="px-20">
                        <Typography variant="span" className="label font14">
                          Suggested Job Title
                        </Typography>
                        <TextField
                          disabled
                          fullWidth
                          classes={{ root: "textfielddisabled" }}
                          id="standard-disabled"
                          placeholder="Suggested Job Title"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Box component="div" className="row">
                    <Box component="div" className="checkboxarea px-20">
                      <input
                        type="checkbox"
                        className="customcheckbox top-1"
                        id="customjob"
                      />
                      <label for="customjob">I Want A Custom Job Title</label>
                    </Box>
                  </Box>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                    className="customtextboxarea"
                  >
                    <Grid item xs={12}>
                      <Box component="div" className="checkboxarea px-20">
                        <Typography variant="span" className="label font14">
                          Custom Job Title
                          <Typography
                            variant="span"
                            className="font12 darkcolortext inline-block"
                          >
                            ( This Job Title shall be visible to the Job Seekers
                            )
                          </Typography>
                        </Typography>
                        <TextField
                          fullWidth
                          classes={{ root: "textfieldnormal" }}
                          id="standard-normal"
                          placeholder="Custom Job Title"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Box component="div" className="px-20">
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      spacing={3}
                    >
                      <Grid item lg={6} md={6} xs={12}>
                        <Typography variant="span" className="label font14">
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
                      </Grid>
                      <Grid item lg={6} md={6} xs={12}>
                        <Typography variant="span" className="label font14">
                          Maximum Salary To Be Offered
                        </Typography>
                        <Box component="div" className="dis_flex">
                          <TextField
                            fullWidth
                            classes={{ root: "textfieldnormal_w_icon" }}
                            id="standard-normal"
                            placeholder="&#8377;0"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment>
                                  <Typography className="paicon fontweight500">
                                    lakhs
                                  </Typography>
                                </InputAdornment>
                              ),
                            }}
                          />
                          <TextField
                            fullWidth
                            classes={{ root: "textfieldnormal_w_icon" }}
                            id="standard-normal"
                            placeholder="&#8377;0"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment>
                                  <Typography className="paicon fontweight500">
                                    thousands
                                  </Typography>
                                </InputAdornment>
                              ),
                            }}
                          />
                          <Box component="div" className="align-center-flex">
                            <Typography className="paicon fontweight500">
                              P.A
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box component="div" className="px-20">
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      spacing={2}
                    >
                      <Grid item lg={4} md={4} xs={12}>
                        <Typography variant="span" className="label font14">
                          Employment Type
                        </Typography>
                        <Autocomplete
                          id="combo-box-demo"
                          className="BlueSelectDropdown"
                          options={emptype}
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
                      </Grid>
                      <Grid item lg={4} md={4} xs={12}>
                        <Typography variant="span" className="label font14">
                          Maximum Notice Period
                        </Typography>
                        <Autocomplete
                          id="combo-box-demo"
                          className="BlueSelectDropdown"
                          options={noticeperiod}
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
                      </Grid>
                      <Grid item lg={4} md={4} xs={12}>
                        <Typography variant="span" className="label font14">
                          Minimum Education Required
                        </Typography>
                        <Autocomplete
                          id="combo-box-demo"
                          className="BlueSelectDropdown"
                          options={education}
                          getOptionLabel={(option) => option.name}
                          classes={{
                            paper: "BlueAutoCompletePaper",
                            option: "BlueOptions",
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
                      </Grid>
                    </Grid>
                  </Box>
                  <Box component="div" className="vacancies_div px-20 mb-3">
                    <Box
                      component="div"
                      className="vacancies_header dis_flex mb-2"
                    >
                      <Typography variant="h6" className="me-4">
                        Vacancies
                      </Typography>
                      <Box
                        component="div"
                        className="dis_flex align-items-center"
                      >
                        <HandSign />
                        <Typography variant="span" className="font14">
                          You will be using 1 credit for this job post
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      component="div"
                      className="vacancies_bodyarea dis_flex"
                    >
                      <Box component="div" className="vacancieslist dis_flex">
                        <Box component="div" className="numdiv">
                          <Typography variant="span">1</Typography>
                        </Box>
                        <Box component="div" className="placediv">
                          <Typography variant="span">
                            Vacancy In
                            <br />
                            Kolkata, India
                          </Typography>
                        </Box>
                        <Box
                          component="div"
                          className="editarea marginautoright"
                        >
                          <Button
                            startIcon={<EditIconSml />}
                            onClick={handleEditLocationOpen}
                          ></Button>
                          <Button startIcon={<RemoveRedIconSml />}></Button>
                        </Box>
                      </Box>
                      <Box component="div" className="addlocations dis_flex">
                        <Button
                          startIcon={<AddSign />}
                          onClick={handleAddLocationOpen}
                        >
                          Add Locations
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    className="skillsrequired_div px-20 mb-3"
                  >
                    <Box
                      component="div"
                      className="skillsrequired_header dis_flex mb-2"
                    >
                      <Typography variant="h6">Skills Required</Typography>
                    </Box>
                    <Box
                      component="div"
                      className="skillsrequired_bodyarea dis_flex"
                    >
                      <Box component="div" className="selectedskills">
                        <Typography
                          variant="span"
                          className="me-2 font14 whitecolortext"
                        >
                          Reasoning
                        </Typography>
                        <Button className="close-btn">
                          <CloseBtn />
                        </Button>
                      </Box>
                      <Box component="div" className="selectedskills">
                        <Typography
                          variant="span"
                          className="me-2 font14 whitecolortext"
                        >
                          Aptitude
                        </Typography>
                        <Button className="close-btn">
                          <CloseBtn />
                        </Button>
                      </Box>
                      <Button
                        startIcon={<AddSign />}
                        className="addskillsbtn"
                        onClick={SkillsBtn}
                      >
                        Add Skills
                      </Button>

                      <Box
                        component="div"
                        className="pos-rel addskillareadiv none"
                        onClick={OpenSkillsDiv}
                      >
                        <input type="text" className="addskillsinputtext" />
                        <Box component="div" className="selectdiv3 font14">
                          <Box component="div" className="listcourses">
                            <ul>
                              <li>
                                <Tooltip
                                  title="ReasoningReasoningReasoningReasoningReasoning"
                                  placement="top-start"
                                  className="tooltiplist"
                                >
                                  <Button>
                                    ReasoningReasoningReasoningReasoningReasoning
                                  </Button>
                                </Tooltip>
                              </li>
                              <li>
                                <Button>Reasoning</Button>
                              </li>
                              <li>
                                <Button>Diploma</Button>
                              </li>
                              <li>
                                <Button>Others</Button>
                              </li>
                            </ul>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box component="div" className="jobdescp_div px-20 mb-3">
                    <Box
                      component="div"
                      className="jobdescp_header dis_flex mb-2"
                    >
                      <Typography variant="h6">Job Description</Typography>
                      <Button
                        className="marginautoright font12 editbtn"
                        onClick={handleJobDescpEditOpen}
                        startIcon={<EditBlue />}
                      >
                        Edit
                      </Button>
                    </Box>
                    <Box
                      component="div"
                      className="jobdesp_bodyarea dis_flex none"
                    >
                      <Button
                        className="adddescpbtn"
                        startIcon={<AddSign />}
                        onClick={handleJobDescpOpen}
                      >
                        Add Description
                      </Button>
                    </Box>
                    <Box component="div" className="jobdescptextdiv">
                      <Typography variant="span" className="font12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur bibendum malesuada odio. Donec dignissim, ante
                        sed pellentesque varius, est tellus gravida est, ut
                        pretium massa lacus eget libero. Etiam accumsan feugiat
                        placerat. Phasellus varius finibus magna, a iaculis
                        lectus finibus et. Donec rutrum dignissim dui
                        consectetur porttitor. Nulla tincidunt porta quam ut
                        vestibulum. Suspendisse vitae nisl id odio maximus
                        maximus. Praesent id nulla suscipit, condimentum orci
                        fringilla, lacinia nisl. Donec sagittis lorem a augue
                        mattis euismod. Donec malesuada, magna quis sagittis
                        elementum, leo velit suscipit nibh, vel elementum nibh
                        leo eu urna. Donec rutrum orci vitae ante mollis
                        interdum. Donec in tortor quis mauris lobortis lacinia.
                        Cras luctus posuere augue ac tempus. Nulla auctor erat
                        et venenatis faucibus. Phasellus sit amet quam mi.
                        Suspendisse auctor accumsan vulputate. Sed semper
                        malesuada justo quis gravida. In hac habitasse platea
                        dictumst. Nunc et nisl mollis, laoreet tortor vel,
                        hendrerit velit. Donec fringilla, leo id accumsan
                        sodales, nisi urna condimentum libero, eget ultrices
                        justo nunc id urna. Praesent nulla tortor, porttitor
                        vitae sem vel, facilisis ornare felis. Proin viverra
                        orci vel orci viverra fermentum. Etiam vehicula euismod
                        elit quis venenatis. Curabitur convallis, tortor quis
                        porta rutrum, magna erat tincidunt est, ut ultrices nibh
                        velit vel ligula. Cras aliquet vel tellus feugiat
                        lacinia. Nulla ac mollis justo, sed fringilla eros.
                      </Typography>
                    </Box>
                  </Box>

                  <Box component="div" className="px-20 buttonrow">
                    <Box component="div" className="totalcredits">
                      <Box component="div" className="dis_flex">
                        <Box
                          component="div"
                          className="marginautoright dis_flex align-items-center"
                        >
                          <HandSign />
                          <Typography variant="span" className="font14">
                            Total Credits Remaining: 5 | Total Credits that will
                            be used: 1
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      spacing={2}
                      className=""
                    >
                      <Grid item lg={4} md={4} xs={12}>
                        <Button
                          className="fullwidth_100percent viewbtn"
                          startIcon={<EyeIcon />}
                          onClick={handlepostingOpen}
                        >
                          Preview Job Posting
                        </Button>
                      </Grid>
                      <Grid item lg={4} md={4} xs={12}>
                        <Button
                          className="fullwidth_100percent savebtn"
                          onClick={handleSaveLatereOpen}
                        >
                          Save For Later
                        </Button>
                      </Grid>
                      <Grid item lg={4} md={4} xs={12}>
                        <Button
                          className="fullwidth_100percent postbtn"
                          onClick={handleNoCreditsOpen}
                        >
                          Post Job
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* New Job Post Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalNewJobPost}
        onClose={handleNewJobPostClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalNewJobPost}>
          <Box component="div" className="postjobmodal">
            <Box component="div" className="dis_flex">
              <Typography variant="span" className="fontweight700 font18">
                Post a Job
              </Typography>
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleNewJobPostClose();
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
              <Box
                component="div"
                className="candidateslooking opacity_half mt-3"
              >
                <Typography variant="span" className="label mb-2 block font14">
                  Candidates Looking to Work in
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={coaching}
                  disabled
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
                  className="BlueSelectDropdownwithcursor"
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
                      <TextField inputStyle={{ cursor: "none" }} {...params} />
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
                  className="BlueSelectDropdownwithcursor"
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
                  className="BlueSelectDropdownwithcursor"
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
                  className="BlueSelectDropdownwithcursor"
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
                  className="BlueSelectDropdownwithcursor"
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
                  className="BlueSelectDropdownwithcursor"
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
              <Box component="div" className="checkboxarea none">
                <FormControlLabel
                  control={<Checkbox name="checkedC" />}
                  label="Not in the List"
                />
                <TextField
                  fullWidth
                  classes={{ root: "textfieldnormal" }}
                  id="standard-normal"
                />
              </Box>
              <Box component="div" className="termdiv">
                <Box
                  component="div"
                  className="dis_flex align-items-center pt-2"
                >
                  <InfoIcon />
                  <Typography variant="span" className="font12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur bibendum malesuada odio. Donec dignissim, ante sed
                    pellentesque varius, est tellus gravida est, ut pretium
                    massa lacus eget libero.
                  </Typography>
                  <Link className="marginautoright font12">T&amp;C</Link>
                </Box>
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
                  handleNewJobPostClose();
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
                Edit Job Post
              </Typography>
              <Button
                className="marginautoright btn-close"
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
              <Box
                component="div"
                className="candidateslooking opacity_half mt-3"
              >
                <Typography variant="span" className="label mb-2 block font14">
                  Candidates Looking to Work in
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={coaching}
                  disabled
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
              <Box component="div" className="checkboxarea none">
                <FormControlLabel
                  control={<Checkbox name="checkedC" />}
                  label="Not in the List"
                />
                <TextField
                  fullWidth
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
      {/* Add Location Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalAddLocation}
        onClose={handleAddLocationClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalAddLocation}>
          <Box component="div" className="modalwithheadborder">
            <Box component="div" className="modal-head">
              <Box component="div" className="dis_flex">
                <Typography variant="span" className="font16">
                  Add Location
                </Typography>
                <Button
                  className="marginautoright btn-close"
                  onClick={(e) => {
                    handleAddLocationClose();
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
            <Box component="div" className="px-20 py-20 modal-body">
              <Box component="div" className="opacity_half">
                <label className="font12 mb-2 block">Country</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  defaultValue="India"
                  disabled
                  className="blueinputarea fullwidth_100percent"
                />
              </Box>
              <Box component="div" className="pos-rel">
                <label className="font12 mb-2 block">City</label>
                <Box
                  component="div"
                  className="fakeinputarea"
                  onClick={OpenSelectDiv}
                >
                  <FakeInputArrow />
                </Box>
                <Box component="div" className="selectdiv2 font14">
                  <Box component="div" className="inputselectsearch dis_flex">
                    <SrchIcon />
                    <input type="text" placeholder="Search" />
                  </Box>
                  <Box component="div" className="listcourses">
                    <ul>
                      <li>
                        <span>Kolkata</span>
                      </li>
                      <li>
                        <span>Mumbai</span>
                      </li>
                      <li>
                        <span>Delhi</span>
                      </li>
                      <li>
                        <span>Chennai</span>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
              <Box component="div">
                <label className="font12 mb-2 mt-3 block">
                  No. Of Vacancies Available
                </label>
                <input
                  type="text"
                  placeholder="Enter No. Of Vacancies"
                  className="blueinputarea fullwidth_100percent"
                />
              </Box>
              <Box
                component="div"
                className="dis_flex"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent border16 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleAddLocationClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit Location Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalEditLocation}
        onClose={handleEditLocationClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalEditLocation}>
          <Box component="div" className="modalwithheadborder">
            <Box component="div" className="modal-head">
              <Box component="div" className="dis_flex">
                <Typography variant="span" className="font16">
                  Edit Location
                </Typography>
                <Button
                  className="marginautoright btn-close"
                  onClick={(e) => {
                    handleEditLocationClose();
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
            <Box component="div" className="px-20 py-20 modal-body">
              <Box component="div" className="opacity_half">
                <label className="font12 mb-2 block">Country</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  defaultValue="India"
                  disabled
                  className="blueinputarea fullwidth_100percent"
                />
              </Box>
              <Box component="div" className="pos-rel">
                <label className="font12 mb-2 block">City</label>
                <Box
                  component="div"
                  className="fakeinputarea"
                  onClick={OpenSelectDiv}
                >
                  <Typography variant="span" className="font14">
                    Kolkata
                  </Typography>
                  <FakeInputArrow />
                </Box>
                <Box component="div" className="selectdiv2 font14">
                  <Box component="div" className="inputselectsearch dis_flex">
                    <SrchIcon />
                    <input type="text" placeholder="Search" />
                  </Box>
                  <Box component="div" className="listcourses">
                    <ul>
                      <li>
                        <span>Kolkata</span>
                      </li>
                      <li>
                        <span>Mumbai</span>
                      </li>
                      <li>
                        <span>Delhi</span>
                      </li>
                      <li>
                        <span>Chennai</span>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
              <Box component="div">
                <label className="font12 mb-2 mt-3 block">
                  No. Of Vacancies Available
                </label>
                <input
                  type="text"
                  placeholder="Enter No. Of Vacancies"
                  className="blueinputarea fullwidth_100percent"
                />
              </Box>
              <Box
                component="div"
                className="dis_flex"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent border16 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleEditLocationClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Job Description Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalJobDescp}
        onClose={handleJobDescpClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalJobDescp}>
          <Box component="div" className="modalwithheadbordermedium">
            <Box component="div" className="modal-head">
              <Box component="div" className="dis_flex">
                <Typography variant="span" className="font16">
                  Job Description
                </Typography>
                <Button
                  className="marginautoright btn-close"
                  onClick={(e) => {
                    handleJobDescpClose();
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
            <Box component="div" className="px-20 py-20 modal-body">
              <Box component="div" className="pos-rel">
                <Box component="div" className="fakeinputareatypeable">
                  <input
                    type="text"
                    id="TemplateDiv"
                    placeholder="Select Template"
                    onClick={OpenTemplateDiv}
                  />
                  <FakeInputArrow />
                </Box>
                <Box component="div" className="templatesavingoptions font14">
                  <Box component="div" className="listcourses">
                    <ul>
                      <li>
                        <span>XYZ</span>
                      </li>
                      <li>
                        <span>XYA</span>
                      </li>
                      <li>
                        <span>XYIBIB</span>
                      </li>
                      <li className="newtemplatesaving">
                        <Button startIcon={<AddPlusIcon />}>
                          Add New Template XYZ
                        </Button>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
              <Box component="div" className="mt-3">
                <textarea
                  cols="30"
                  rows="10"
                  className="bluetextarea"
                  placeholder="Type your Job Description"
                ></textarea>
              </Box>
              <Box component="div" className="dis_flex mb-3">
                <Box component="div" className="marginautoright">
                  <Typography variant="span" className="font14">
                    0/3000 Characters remaining
                  </Typography>
                </Box>
              </Box>
              <Box
                component="div"
                className="dis_flex"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent border16 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleJobDescpClose();
                    handleTemplateSaveOpen();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Save and Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit Job Description Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalJobDescpEdit}
        onClose={handleJobDescpEditClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalJobDescpEdit}>
          <Box component="div" className="modalwithheadbordermedium">
            <Box component="div" className="modal-head">
              <Box component="div" className="dis_flex">
                <Typography variant="span" className="font16">
                  Job Description
                </Typography>
                <Button
                  className="marginautoright btn-close"
                  onClick={(e) => {
                    handleJobDescpEditClose();
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
            <Box component="div" className="px-20 py-20 modal-body">
              <Box component="div" className="pos-rel">
                <Box component="div" className="fakeinputareatypeable">
                  <input
                    type="text"
                    id="TemplateDiv"
                    placeholder="Select Template"
                    onClick={OpenTemplateDiv}
                  />
                  <FakeInputArrow />
                </Box>
                <Box component="div" className="templatesavingoptions font14">
                  <Box component="div" className="listcourses">
                    <ul>
                      <li>
                        <span>XYZ</span>
                      </li>
                      <li>
                        <span>XYA</span>
                      </li>
                      <li>
                        <span>XYIBIB</span>
                      </li>
                      <li className="newtemplatesaving">
                        <Button startIcon={<AddPlusIcon />}>
                          Add New Template XYZ
                        </Button>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
              <Box component="div" className="mt-3">
                <textarea
                  cols="30"
                  rows="10"
                  className="bluetextarea"
                  placeholder="Type your Job Description"
                ></textarea>
              </Box>
              <Box component="div" className="dis_flex mb-3">
                <Box component="div" className="marginautoright">
                  <Typography variant="span" className="font14">
                    0/3000 Characters remaining
                  </Typography>
                </Box>
              </Box>
              <Box
                component="div"
                className="dis_flex"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent border16 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleJobDescpEditClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Update
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Overwrite Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalOverwrite}
        onClose={handleOverwriteClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalOverwrite}>
          <Box component="div" className="modalcontsmall2">
            <Box component="div" className="modal-body">
              <Box component="div" className="contentarea">
                <OverwriteIcon />
                <Typography
                  variant="span"
                  className="font16 block text-center mt-2"
                >
                  Do you want to overwrite the template "name goes here"
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="px-20 pt-3 modal-body">
              <Box
                component="div"
                className="dis_flex buttonareadiv"
                justifyContent="space-between"
              >
                <Button
                  className="border8 me-3 lightbluecolor"
                  onClick={(e) => {
                    handleOverwriteClose();
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
                    handleOverwriteClose();
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
      {/* Template Save Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalTemplateSave}
        onClose={handleTemplateSaveClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalTemplateSave}>
          <Box component="div" className="modalcontsmall2">
            <Box component="div" className="modal-body">
              <Box component="div" className="contentarea">
                <DocumentIcon />
                <Typography
                  variant="span"
                  className="font16 block mt-2 text-center"
                >
                  Do you want to save this template as XYZ?
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="px-20 pt-3 modal-body">
              <Box
                component="div"
                className="dis_flex buttonareadiv"
                justifyContent="space-between"
              >
                <Button
                  className="border8 me-3 lightbluecolor"
                  onClick={(e) => {
                    handleTemplateSaveClose();
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
                    handleTemplateSaveClose();
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
      {/* Template Save Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalTemplateSave2}
        onClose={handleTemplateSave2Close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalTemplateSave2}>
          <Box component="div" className="modalcontsmall">
            <Box component="div" className="modal-body">
              <Box component="div" className="contentarea">
                <Typography variant="span" className="font16">
                  Do you want to save this template?
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="px-20 pt-3 modal-body">
              <Box
                component="div"
                className="dis_flex buttonareadiv"
                justifyContent="space-between"
              >
                <Button
                  className="border8 me-3 lightbluecolor"
                  onClick={(e) => {
                    handleTemplateSave2Close();
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
                    handleTemplateSave2Close();
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
      {/* Preview Job Post */}
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
            <Box component="div" className="topmodalcont">
              <Typography className="heading_title" variant="span">
                Preview Post
              </Typography>
              <Box component="div" className="marginautoright dis_flex">
                <Box component="div" className="previewbtnarea">
                  <Button
                    className="transparentbtn noborder"
                    onClick={handlepostingClose}
                  >
                    <LeftArrow />
                  </Button>
                  <Typography variant="span">1 of 2</Typography>
                  <Button
                    className="transparentbtn noborder"
                    onClick={(e) => {
                      handlepostingClose();
                      handlepostingOpen2();
                    }}
                  >
                    <RightArrow />
                  </Button>
                </Box>
                <Box component="div">
                  <Button
                    className="btn-close"
                    onClick={(e) => {
                      handlepostingClose();
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
            </Box>
            <Box component="div" className="maindiv">
              <Box component="div" className="maincont">
                <Box component="div" className="imgarea">
                  <Box component="div" className="placeholderarea">
                    <Box component="div">
                      <img src={BASE_URL + SchoolPlaceholder} alt="" />
                    </Box>
                  </Box>
                  <JdBg />
                </Box>
                <Box component="div" className="title">
                  <Typography variant="span" className="schoolname">
                    DPS School, Darjeeling
                  </Typography>
                  <Typography variant="span" className="titleheading">
                    Primary School Teacher
                  </Typography>
                </Box>
                <Box component="div" className="iconreq2">
                  <List>
                    <ListItem>
                      <YearsIcon />
                      <Typography variant="span" className="iconspan">
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
                      <Typography variant="span" className="iconspan">
                        Full Time / Permanent
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <VacanciesIcon />
                      <Typography variant="span" className="iconspan">
                        5 Vacancies
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <SalaryIcon />
                      <Typography variant="span" className="iconspan">
                        B.Sc/B.Ed
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <LocationIcon />
                      <Typography variant="span" className="iconspan">
                        Kolkata, West Bengal
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
                <Box component="div" className="details">
                  <Box component="div" className="skillscont">
                    <Typography variant="span" className="subhead">
                      Skills Required
                    </Typography>
                    <List>
                      <ListItem className="skilltag">Reasoning</ListItem>
                      <ListItem className="skilltag">Apitutde</ListItem>
                      <ListItem className="skilltag">Problem Solving</ListItem>
                    </List>
                  </Box>
                  <Box component="div" className="details mt-4">
                    <Typography variant="span" className="subhead">
                      Job Description
                    </Typography>
                    <Typography variant="span" className="subsubtext">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant="span" className="subsubtext">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box component="div" className="previewbtnareabtm dis_flex">
                <Button
                  className="transparentbtn noborder"
                  onClick={handlepostingClose}
                >
                  <LeftArrow />
                </Button>
                <Typography variant="span">1 of 2</Typography>
                <Button
                  className="transparentbtn noborder"
                  onClick={(e) => {
                    handlepostingClose();
                    handlepostingOpen2();
                  }}
                >
                  <RightArrow />
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
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
            <Box component="div" className="topmodalcont">
              <Typography className="heading_title" variant="span">
                Preview Post
              </Typography>
              <Box component="div" className="marginautoright  dis_flex">
                <Box component="div" className="previewbtnarea">
                  <Button
                    className="transparentbtn noborder"
                    onClick={(e) => {
                      handlepostingOpen();
                      handlepostingClose2();
                    }}
                  >
                    <LeftArrow />
                  </Button>
                  <Typography variant="span">2 of 2</Typography>
                  <Button
                    className="transparentbtn noborder"
                    onClick={handlepostingClose2}
                  >
                    <RightArrow />
                  </Button>
                </Box>
                <Box component="div">
                  <Button
                    className="btn-close"
                    onClick={(e) => {
                      handlepostingClose2();
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
            </Box>
            <Box component="div" className="maindiv">
              <Box component="div" className="maincont">
                <Box component="div" className="imgarea">
                  <Box component="div" className="placeholderarea">
                    <Box component="div">
                      <img src={BASE_URL + SchoolPlaceholder} alt="" />
                    </Box>
                  </Box>
                  <JdBg />
                </Box>
                <Box component="div" className="title">
                  <Typography variant="span" className="schoolname">
                    DPS School, Durgapur
                  </Typography>
                  <Typography variant="span" className="titleheading">
                    Primary School Teacher
                  </Typography>
                </Box>
                <Box component="div" className="iconreq2">
                  <List>
                    <ListItem>
                      <YearsIcon />
                      <Typography variant="span" className="iconspan">
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
                      <Typography variant="span" className="iconspan">
                        Full Time / Permanent
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <VacanciesIcon />
                      <Typography variant="span" className="iconspan">
                        5 Vacancies
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <SalaryIcon />
                      <Typography variant="span" className="iconspan">
                        B.Sc/B.Ed
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <LocationIcon />
                      <Typography variant="span" className="iconspan">
                        Kolkata, West Bengal
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
                <Box component="div" className="details">
                  <Box component="div" className="details">
                    <Typography variant="span" className="subhead">
                      Job Description
                    </Typography>
                    <Typography variant="span" className="subsubtext">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant="span" className="subsubtext">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet.
                    </Typography>
                  </Box>
                  <Box component="div" className="skillscont mt-4">
                    <Typography variant="span" className="subhead">
                      Skills Required
                    </Typography>
                    <List>
                      <ListItem className="skilltag">Reasoning</ListItem>
                      <ListItem className="skilltag">Apitutde</ListItem>
                      <ListItem className="skilltag">Problem Solving</ListItem>
                    </List>
                  </Box>
                </Box>
              </Box>
              <Box component="div" className="previewbtnareabtm dis_flex">
                <Button
                  className="transparentbtn noborder"
                  onClick={(e) => {
                    handlepostingOpen();
                    handlepostingClose2();
                  }}
                >
                  <LeftArrow />
                </Button>
                <Typography variant="span">2 of 2</Typography>
                <Button className="transparentbtn noborder">
                  <RightArrow />
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Save for later */}
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
          <Box component="div" className="modalcontmid3">
            <Box component="div" className="dis_flex">
              <Typography
                variant="h6"
                id="transition-modal-title"
                className="fontweight700"
              >
                Save for Later
              </Typography>
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleSaveLaterClose();
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
            <Typography id="transition-modal-description" className="mb-2">
              Job Title
            </Typography>
            <TextField
              fullWidth
              classes={{ root: "textfieldnormal" }}
              id="standard-normal"
              placeholder="Job Title"
            />
            <Button
              className="fullwidth_100percent drkbluebtn"
              onClick={(e) => {
                handleSuccessOpen();
                handleSaveLaterClose();
              }}
              // onClose={handleSaveLaterClose}
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
      {/* Successfull msg modal */}
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
          <Box component="div" className="modalcontmid">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleSuccessClose();
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
            <Box component="div" className="successimg">
              <SuccessIcon />
            </Box>
            <Typography
              id="transition-modal-description"
              className="mb-2 text-center fontweight700 font20 block"
            >
              New Job Posting is successfully saved for later.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* Confirmation for posting th job */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalpostjob}
        onClose={handlepostjobClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <UsingCreditsModalJobPost />
      </Modal>

      {/* Dont have enough Credit Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalNoCredits}
        onClose={handleNoCreditsClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalNoCredits}>
          <NoCreditsModal />
        </Fade>
      </Modal>

      {/* Successfull job post modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodaljobpostsuccess}
        onClose={handlejobpostsuccessClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodaljobpostsuccess}>
          <Box component="div" className="modalcontsmall">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handlejobpostsuccessClose();
                }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <ClosegreyBtnSml />
              </Button>
            </Box>
            <Box component="div" className="successimg">
              <SuccessIcon />
            </Box>
            <Typography
              id="transition-modal-description"
              className="mb-2 text-center fontweight700 font20 block"
            >
              Job posted successfully
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default PostAJob;

const EditBlue = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g
        id="Group_6826"
        data-name="Group 6826"
        transform="translate(-184.62 -390.197)"
      >
        <g
          id="Rectangle_480"
          data-name="Rectangle 480"
          transform="translate(184.62 390.197)"
          fill="#2a5798"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="20" height="20" stroke="none" />
          <rect x="0.5" y="0.5" width="19" height="19" fill="none" />
        </g>
        <g id="fluent:edit-20-regular" transform="translate(186.944 393.072)">
          <g id="Group" transform="translate(0 0)">
            <path
              id="Vector"
              d="M10.64.77a2.633,2.633,0,0,1,3.847,3.591l-.123.132L5.275,13.582a1.893,1.893,0,0,1-.684.437l-.156.05L.6,15.115a.473.473,0,0,1-.6-.506l.015-.076L1.064,10.7a1.875,1.875,0,0,1,.377-.719l.111-.121L10.64.77ZM9.826,2.922l-7.606,7.6a.946.946,0,0,0-.2.3l-.04.116-.83,3.037,3.039-.828a.946.946,0,0,0,.226-.095l.1-.068.093-.08,7.6-7.607L9.826,2.922Zm3.869-1.483a1.687,1.687,0,0,0-2.273-.1l-.114.1-.814.814,2.384,2.386.816-.814a1.687,1.687,0,0,0,.1-2.273l-.1-.114Z"
              transform="translate(0 0)"
              fill="#2a5798"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const PostJobIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75.96"
      height="76.935"
      viewBox="0 0 75.96 76.935"
    >
      <g id="resume-and-cv" transform="translate(-1.3 -0.7)">
        <path
          id="Path_3731"
          data-name="Path 3731"
          d="M70.3,31.2h7.23V48.829H70.3Z"
          transform="translate(-12.944 -5.722)"
          fill="#dd8c36"
        />
        <path
          id="Path_3732"
          data-name="Path 3732"
          d="M15.136,44.036,7.581,80.35a2.622,2.622,0,0,1-2.6,2.112A2.7,2.7,0,0,1,2.3,79.782V31.2H9.53Z"
          transform="translate(-0.188 -5.722)"
          fill="#dd8c36"
        />
        <path
          id="Path_3733"
          data-name="Path 3733"
          d="M11.2,1.7H59.213V62.549H11.2Z"
          transform="translate(-1.857 -0.188)"
          fill="#ccd1dc"
        />
        <path
          id="Path_3734"
          data-name="Path 3734"
          d="M14.1,1.7H59.757V62.549H14.1Z"
          transform="translate(-2.401 -0.188)"
          fill="#dee1e7"
        />
        <path
          id="Path_3735"
          data-name="Path 3735"
          d="M77.173,51.793l-6.5,31.034-.081.487a2.622,2.622,0,0,1-2.6,2.112H5.6A2.779,2.779,0,0,0,8.2,83.4L15.755,47h16A2.5,2.5,0,0,1,34.2,49.437a2.394,2.394,0,0,0,2.437,2.437Z"
          transform="translate(-0.807 -8.686)"
          fill="#e69c4b"
        />
        <path
          id="Path_3736"
          data-name="Path 3736"
          d="M78.124,54.793,72.843,80.14a6.428,6.428,0,0,1-5.606,3.331H23.043A8.061,8.061,0,0,1,15,75.428a11.01,11.01,0,0,1,.162-1.625L20.2,50H31.9a2.5,2.5,0,0,1,2.437,2.437,2.358,2.358,0,0,0,2.356,2.356H78.124Z"
          transform="translate(-2.57 -9.248)"
          fill="#edab63"
        />
        <path
          id="Path_3737"
          data-name="Path 3737"
          d="M87.905,52.9l-.487,2.437H78.4l.487-2.437Z"
          transform="translate(-14.464 -9.792)"
          fill="#edab63"
        />
        <path
          id="Path_3738"
          data-name="Path 3738"
          d="M84.829,55.9,79.954,79.46A6.419,6.419,0,0,1,73.7,84.578H64.6a6.353,6.353,0,0,0,6.256-5.118L75.73,55.9Z"
          transform="translate(-11.875 -10.355)"
          fill="#f6bc7a"
        />
        <path
          id="Path_3739"
          data-name="Path 3739"
          d="M43.137,4.7H59.954a2.444,2.444,0,0,1,2.437,2.437V38.252a2.444,2.444,0,0,1-2.437,2.437H43.137A2.444,2.444,0,0,1,40.7,38.252V7.056A2.428,2.428,0,0,1,43.137,4.7Z"
          transform="translate(-7.391 -0.75)"
          fill="#f3f4f5"
        />
        <circle
          id="Ellipse_123"
          data-name="Ellipse 123"
          cx="10.399"
          cy="10.399"
          r="10.399"
          transform="translate(22.91 5.574)"
          fill="#f6b756"
        />
        <ellipse
          id="Ellipse_124"
          data-name="Ellipse 124"
          cx="8.287"
          cy="8.368"
          rx="8.287"
          ry="8.368"
          transform="translate(25.022 7.605)"
          fill="#fac77d"
        />
        <path
          id="Path_3740"
          data-name="Path 3740"
          d="M43.387,14.412v1.381a3.493,3.493,0,0,1-6.987,0V14.087A3.375,3.375,0,0,1,39.812,11a3.452,3.452,0,0,1,3.493,3.087C43.387,14.006,43.387,14.25,43.387,14.412Z"
          transform="translate(-6.585 -1.932)"
          fill="#7190c4"
        />
        <path
          id="Path_3741"
          data-name="Path 3741"
          d="M43.405,13.987a3.578,3.578,0,0,1-3.818,3.087A3.46,3.46,0,0,1,36.5,13.987,3.375,3.375,0,0,1,39.912,10.9,3.518,3.518,0,0,1,43.405,13.987Z"
          transform="translate(-6.603 -1.913)"
          fill="#89a3ce"
        />
        <path
          id="Path_3742"
          data-name="Path 3742"
          d="M45.636,27.91a10.263,10.263,0,0,1-12.836,0l.406-1.787.081-.325a6.12,6.12,0,0,1,11.942,0l.081.325Z"
          transform="translate(-5.909 -3.812)"
          fill="#7190c4"
        />
        <path
          id="Path_3743"
          data-name="Path 3743"
          d="M45.324,26.222a10.243,10.243,0,0,1-12.024,0l.081-.325a6.12,6.12,0,0,1,11.942,0Z"
          transform="translate(-6.003 -3.831)"
          fill="#89a3ce"
        />
        <path
          id="Path_3744"
          data-name="Path 3744"
          d="M49.322,16.735a11.216,11.216,0,0,0-22.422-.65v.569a11.217,11.217,0,0,0,11.211,11.13C46.641,27.865,49.4,20.229,49.322,16.735Zm-20.8,0A9.627,9.627,0,1,1,45.1,23.4l-.244-.731a6.95,6.95,0,0,0-3.981-4.793,4.287,4.287,0,0,0,1.544-3.25V13.242a4.27,4.27,0,1,0-8.53-.406v1.787a4.287,4.287,0,0,0,1.544,3.25,6.95,6.95,0,0,0-3.981,4.793l-.162.731a9.2,9.2,0,0,1-2.762-6.662ZM35.43,14.7V13.323A2.686,2.686,0,1,1,40.792,13V14.7a2.71,2.71,0,0,1-2.843,2.518A2.777,2.777,0,0,1,35.43,14.7Zm-2.843,9.911.406-1.544a5.3,5.3,0,0,1,6.337-3.981,5.5,5.5,0,0,1,3.981,3.981l.325,1.544c-1.056,1.056-3.656,1.706-5.524,1.706C36.568,26.24,33.4,25.347,32.587,24.616Z"
          transform="translate(-4.802 -0.843)"
          fill="#39426a"
        />
        <path
          id="Path_3745"
          data-name="Path 3745"
          d="M4.812,86.049A3.433,3.433,0,0,1,1.4,82.637V46.81A.768.768,0,0,1,2.212,46a.768.768,0,0,1,.812.812V82.555a1.848,1.848,0,0,0,3.656.406l7.555-36.314a.79.79,0,1,1,1.544.325L8.143,83.286a3.39,3.39,0,0,1-3.331,2.762Z"
          transform="translate(-0.019 -8.495)"
          fill="#39426a"
        />
        <path
          id="Path_3746"
          data-name="Path 3746"
          d="M53.446,42.725H19.812a.812.812,0,1,1,0-1.625H53.446a.812.812,0,1,1,0,1.625Z"
          transform="translate(-3.32 -7.579)"
          fill="#878c9f"
        />
        <path
          id="Path_3747"
          data-name="Path 3747"
          d="M53.446,37.825H19.812a.812.812,0,1,1,0-1.625H53.446a.812.812,0,1,1,0,1.625Z"
          transform="translate(-3.32 -6.66)"
          fill="#878c9f"
        />
        <path
          id="Path_3748"
          data-name="Path 3748"
          d="M77.016,42.62a1,1,0,0,0-.65-.325H65.4V25.478a.768.768,0,0,0-.812-.812H58.168V1.512A.768.768,0,0,0,57.356.7H9.343a.768.768,0,0,0-.812.812V24.747H2.112a.768.768,0,0,0-.812.812V74.141a.768.768,0,0,0,.812.812.768.768,0,0,0,.812-.812V26.291H8.53V65.124l-1.95,9.424a.863.863,0,0,0,.65.975.882.882,0,0,0,.975-.569L15.6,39.208H30.953a1.63,1.63,0,0,1,1.625,1.625A3.172,3.172,0,0,0,35.746,44H75.391L69.055,74.548a1.9,1.9,0,0,1-1.787,1.462H4.55a.812.812,0,0,0,0,1.625H67.267a3.545,3.545,0,0,0,3.412-2.762l6.58-31.521C77.179,43.108,77.179,42.783,77.016,42.62ZM63.774,26.291v16H58.168v-16ZM34.121,40.752a3.243,3.243,0,0,0-3.168-3.25h-16a.791.791,0,0,0-.812.65L10.155,57.487V2.325H56.544V42.376h-20.8a1.747,1.747,0,0,1-1.625-1.625Z"
          fill="#39426a"
        />
      </g>
    </svg>
  );
};

const DocumentIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33.65"
      height="44.176"
      viewBox="0 0 33.65 44.176"
    >
      <g id="google-docs" transform="translate(-61)">
        <path
          id="Path_3755"
          data-name="Path 3755"
          d="M64.883,44.176H90.767a3.887,3.887,0,0,0,3.883-3.883V12.942H85.59a3.887,3.887,0,0,1-3.883-3.883V0H64.883A3.887,3.887,0,0,0,61,3.883V40.293A3.887,3.887,0,0,0,64.883,44.176Zm5.177-25.971H85.59a1.294,1.294,0,0,1,0,2.588H70.059a1.294,1.294,0,0,1,0-2.588Zm0,5.177H85.59a1.294,1.294,0,0,1,0,2.588H70.059a1.294,1.294,0,0,1,0-2.588Zm0,5.177H85.59a1.294,1.294,0,1,1,0,2.588H70.059a1.294,1.294,0,1,1,0-2.588Zm0,5.177H80.413a1.294,1.294,0,0,1,0,2.588H70.059a1.294,1.294,0,0,1,0-2.588Z"
          fill="#f6b333"
        />
        <path
          id="Path_3756"
          data-name="Path 3756"
          d="M332.294,18.384h8.3l-9.6-9.6v8.3A1.3,1.3,0,0,0,332.294,18.384Z"
          transform="translate(-246.704 -8.031)"
          fill="#f6b333"
        />
      </g>
    </svg>
  );
};

const OverwriteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39.09"
      height="39.09"
      viewBox="0 0 39.09 39.09"
    >
      <g id="replace" transform="translate(0 0)">
        <path
          id="Path_3749"
          data-name="Path 3749"
          d="M175,9.822,167.63,2.491a1.144,1.144,0,0,0-.2-.156v7.688h7.729a1.137,1.137,0,0,0-.16-.2Zm0,0"
          transform="translate(-154.65 -2.157)"
          fill="#f6b333"
        />
        <path
          id="Path_3750"
          data-name="Path 3750"
          d="M20.69,26.4V10.164H11.638a1.145,1.145,0,0,1-1.145-1.145V.008H1.145A1.145,1.145,0,0,0,0,1.153V26.4A1.145,1.145,0,0,0,1.145,27.55h18.4A1.145,1.145,0,0,0,20.69,26.4Zm0,0"
          transform="translate(0 -0.007)"
          fill="#f6b333"
        />
        <path
          id="Path_3751"
          data-name="Path 3751"
          d="M416,161.061l-7.373-7.331a1.142,1.142,0,0,0-.2-.155v7.688h7.729a1.149,1.149,0,0,0-.16-.2Zm0,0"
          transform="translate(-377.25 -141.849)"
          fill="#2a5798"
        />
        <path
          id="Path_3752"
          data-name="Path 3752"
          d="M252.638,161.4a1.145,1.145,0,0,1-1.145-1.145v-9.011h-5.912V166.1a3.439,3.439,0,0,1-3.436,3.435H241v8.111a1.145,1.145,0,0,0,1.145,1.145h18.4a1.145,1.145,0,0,0,1.145-1.145V161.4Zm0,0"
          transform="translate(-222.601 -139.7)"
          fill="#2a5798"
        />
        <path
          id="Path_3753"
          data-name="Path 3753"
          d="M92.44,400.918a1.145,1.145,0,0,0-1.69,1.542H88.49a1.146,1.146,0,0,1-1.145-1.145v-2.252a1.145,1.145,0,0,0-2.29,0v2.252a3.439,3.439,0,0,0,3.436,3.435h2.26a1.145,1.145,0,0,0,1.69,1.542l1.877-1.878a1.145,1.145,0,0,0,0-1.619Zm0,0"
          transform="translate(-78.561 -367.538)"
          fill="#f6b333"
        />
        <path
          id="Path_3754"
          data-name="Path 3754"
          d="M254.694,5.71a1.145,1.145,0,0,0,1.69-1.542h2.26a1.146,1.146,0,0,1,1.145,1.145V7.565a1.145,1.145,0,0,0,2.29,0V5.313a3.439,3.439,0,0,0-3.436-3.435h-2.26a1.145,1.145,0,0,0-1.69-1.542l-1.877,1.877a1.145,1.145,0,0,0,0,1.619Zm0,0"
          transform="translate(-233.204 0)"
          fill="#2a5798"
        />
      </g>
    </svg>
  );
};

const HandSign = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="35.738"
      height="32.926"
      viewBox="0 0 35.738 32.926"
    >
      <g id="profile" transform="translate(-2 -4.75)">
        <path
          id="Path_3788"
          data-name="Path 3788"
          d="M5.359,52.272H2.51a.51.51,0,0,1-.51-.51V39.27a.51.51,0,0,1,.51-.51H5.359a2.394,2.394,0,0,1,2.389,2.394v8.729a2.394,2.394,0,0,1-2.389,2.389Zm0-1.021Z"
          transform="translate(0 -16.649)"
          fill="#2a5798"
        />
        <path
          id="Path_3789"
          data-name="Path 3789"
          d="M28.484,49.886H19.545a.51.51,0,1,1,0-1.021h8.939a1.353,1.353,0,1,0,0-2.706H23.7a.51.51,0,0,1-.408-.2,6.065,6.065,0,0,0-4.819-2.394h-6.7a.51.51,0,1,1,0-1.021h6.7a7.1,7.1,0,0,1,5.472,2.6h4.538a2.374,2.374,0,1,1,0,4.747Z"
          transform="translate(-4.533 -18.499)"
          fill="#2a5798"
        />
        <path
          id="Path_3790"
          data-name="Path 3790"
          d="M24.244,59.176a12.249,12.249,0,0,1-4.434-.831l-8.17-3.181a.51.51,0,0,1,.368-.949l8.168,3.18a11.231,11.231,0,0,0,9.189-.51l11.562-5.927-.041-.036a4.4,4.4,0,0,0-4.513-.98L30.191,52.1a.51.51,0,0,1-.332-.965l6.182-2.159a5.426,5.426,0,0,1,5.554,1.2l.562.51a.51.51,0,0,1-.117.822l-12.2,6.3A12.216,12.216,0,0,1,24.244,59.176Z"
          transform="translate(-4.576 -21.5)"
          fill="#2a5798"
        />
        <path
          id="Path_3791"
          data-name="Path 3791"
          d="M45.794,22.362H31.97a.51.51,0,0,1-.51-.51V5.26a.51.51,0,0,1,.51-.51H45.794a.51.51,0,0,1,.51.51V21.851A.51.51,0,0,1,45.794,22.362Z"
          transform="translate(-14.421)"
          fill="#f6b333"
        />
        <path
          id="Path_3792"
          data-name="Path 3792"
          d="M45.613,21.139H40.62a.51.51,0,0,1-.51-.51v-.863A1.761,1.761,0,0,1,41.866,18h2.5a1.761,1.761,0,0,1,1.756,1.761v.863a.51.51,0,0,1-.51.516Z"
          transform="translate(-18.656 -6.486)"
          fill="#fff"
        />
        <path
          id="Path_3793"
          data-name="Path 3793"
          d="M44.292,13.183A1.782,1.782,0,1,1,46.073,11.4,1.782,1.782,0,0,1,44.292,13.183Z"
          transform="translate(-19.83 -2.384)"
          fill="#fff"
        />
        <path
          id="Path_3794"
          data-name="Path 3794"
          d="M45.707,28.021H36.12a.51.51,0,1,1,0-1.021h9.587a.51.51,0,0,1,0,1.021Z"
          transform="translate(-16.453 -10.892)"
          fill="#fff"
        />
        <path
          id="Path_3795"
          data-name="Path 3795"
          d="M45.707,32.791H36.12a.51.51,0,1,1,0-1.021h9.587a.51.51,0,0,1,0,1.021Z"
          transform="translate(-16.453 -13.227)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

const AddSign = () => {
  return (
    <svg
      id="fluent:add-circle-20-regular"
      xmlns="http://www.w3.org/2000/svg"
      width="16.023"
      height="16.023"
      viewBox="0 0 16.023 16.023"
    >
      <g id="Group">
        <path
          id="Vector"
          d="M0,8.012a1,1,0,0,1,1-1H7.01V1a1,1,0,1,1,2,0V7.01h6.009a1,1,0,1,1,0,2H9.013v6.009a1,1,0,1,1-2,0V9.013H1a1,1,0,0,1-1-1Z"
          fill="#2a5798"
        />
      </g>
    </svg>
  );
};

const RightArrow = () => {
  return (
    <svg
      className="me-2 top-1"
      xmlns="http://www.w3.org/2000/svg"
      width="18.868"
      height="20"
      viewBox="0 0 18.868 36.16"
    >
      <g id="right-arrow" transform="translate(-115.325 0)">
        <path
          id="Path_3797"
          data-name="Path 3797"
          d="M118.234,36.16a.786.786,0,0,1-.557-1.343L134.416,18.08,117.678,1.343A.787.787,0,0,1,118.791.23l17.293,17.293a.786.786,0,0,1,0,1.112L118.791,35.929A.786.786,0,0,1,118.234,36.16Z"
          transform="translate(-2.122)"
          fill="#2a5798"
        />
      </g>
    </svg>
  );
};
const LeftArrow = () => {
  return (
    <svg
      className="leftarrowpreview ms-2 top-1"
      xmlns="http://www.w3.org/2000/svg"
      width="18.868"
      height="20"
      viewBox="0 0 18.868 36.16"
    >
      <g id="right-arrow" transform="translate(-115.325 0)">
        <path
          id="Path_3797"
          data-name="Path 3797"
          d="M118.234,36.16a.786.786,0,0,1-.557-1.343L134.416,18.08,117.678,1.343A.787.787,0,0,1,118.791.23l17.293,17.293a.786.786,0,0,1,0,1.112L118.791,35.929A.786.786,0,0,1,118.234,36.16Z"
          transform="translate(-2.122)"
          fill="#2a5798"
        />
      </g>
    </svg>
  );
};

const AddPlusIcon = () => {
  return (
    <svg
      id="Group_371"
      data-name="Group 371"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className="me-1"
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
          fill="#fff"
        />
      </g>
    </svg>
  );
};

const FakeInputArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="9.796"
      viewBox="0 0 16 9.796"
      className="arrowinputarea"
    >
      <g id="akar-icons:arrow-down" transform="translate(16) rotate(90)">
        <path
          id="Vector"
          d="M14.656,0H1.346A1.419,1.419,0,0,0,.4,2.4L7.05,9.382a1.293,1.293,0,0,0,1.9,0L15.6,2.4A1.416,1.416,0,0,0,14.656,0Z"
          transform="matrix(0, -1, 1, 0, 0, 16)"
          fill="#1c1b1b"
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

const EditIcon = () => {
  return (
    <svg
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

const EditIconSml = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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

const ClosegreyBtnSml = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
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
      width="79"
      height="79"
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

const coaching = [
  { name: "DPS School, Darjeeling", id: 1 },
  { name: "DPS School, Siliguri", id: 2 },
  { name: "DPS School, Durgapur", id: 3 },
];

const experience = [
  { name: "No Experience", id: 1 },
  { name: "3 Years", id: 2 },
  { name: "4 Years", id: 3 },
  { name: "5 Years", id: 4 },
  { name: "6 Years", id: 5 },
  { name: "7 Years", id: 6 },
  { name: "8 Years", id: 7 },
  { name: "9 Years", id: 8 },
];
const education = [
  { name: "Class 10", id: 1 },
  { name: "Class 12", id: 2 },
  { name: "Graduation/Diploma", id: 3 },
  { name: "5 Years", id: 4 },
  { name: "Masters", id: 5 },
  { name: "PhD", id: 6 },
  { name: "BSC", id: 7 },
];

const emptype = [
  { name: "Full Time", id: 1 },
  { name: "Internship", id: 2 },
  { name: "Part Time", id: 3 },
  { name: "Temporary/Leave Vacancy", id: 4 },
  { name: "Contractual", id: 5 },
  { name: "Ad hoc", id: 6 },
  { name: "Visiting", id: 7 },
];

const noticeperiod = [
  { name: "Immediate", id: 1 },
  { name: "15 Days", id: 2 },
  { name: "30 Days", id: 3 },
  { name: "45 Days", id: 4 },
  { name: "60 Days", id: 5 },
  { name: "75 Days", id: 6 },
  { name: "90 Days", id: 7 },
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
const RemoveRedIconSml = () => {
  return (
    <svg
      className="red_icon_red"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
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

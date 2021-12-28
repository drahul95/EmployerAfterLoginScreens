import React from "react";
import {
  Typography,
  Box,
  Button,
  AppBar,
  Tabs,
  Tab,
  List,
  ListItem,
  Link,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import PersonalProfileImg from "../../images/personalprofile.png";
import PropTypes from "prop-types";
import "./CandidateDetailsPopper.scss";
import CloseIcon from "@material-ui/icons/Close";

require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function CandidateDeatilsPopper() {
  const [open] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [valuePopper, setValue] = React.useState(0);

  const handleChangeOtherDetTab = (event, newValueOtherDet) => {
    setValue(newValueOtherDet);
  };

  const [openInvite, setOpenInvite] = React.useState(false);

  const handleOpenInvite = () => {
    setOpenInvite(true);
  };

  const handleCloseInvite = () => {
    setOpenInvite(false);
  };

  const [opensavemodal, setOpensavemodal] = React.useState(false);

  const handleOpensavemodal = (e) => {
    setOpensavemodal(true);
    e.stopPropagation();
  };

  const handleClosesavemodal = (e) => {
    setOpensavemodal(false);
    e.stopPropagation();
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Box component="div" className="personal_details">
        <Box component="div" className="closearea">
          <Box component="div" className="closediv">
            <Typography variant="span" className="font22 block fontweight700">
              Candidate Details
            </Typography>

            <CloseIcon className="marginautoright" />
          </Box>
        </Box>
        <Box component="div" className="detailsdiv">
          <Box component="div" className="detailsrow headingcontdiv">
            <Typography variant="span" className="heading">
              Personal Details
            </Typography>
            <Box component="div" className="buttongrp marginautoright">
              <Button
                startIcon={<InviteIconCand />}
                className="invitebtn"
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
                      Are you sure you want to Invite the candidate?
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
                className="lightbluecolor blackcolortext border8 pe-4 ps-4 savebtn"
                startIcon={<BMKIcon />}
                onClick={handleOpensavemodal}
              >
                Save
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="modal"
                open={opensavemodal}
                onClose={handleClosesavemodal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={opensavemodal}>
                  <div className="modalcontsmall">
                    <SaveBlueIcon />
                    <Typography variant="h6">
                      Are you sure you want to save the candidate?
                    </Typography>
                    <Box component="div" className="button_confirm_area">
                      <Button
                        className="lightbluecolor border8"
                        onClick={handleClosesavemodal}
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
          <Box component="div" className="detailsrow">
            <img
              src={BASE_URL + PersonalProfileImg}
              alt=""
              className="profileimg"
            />
            <Box component="div" className="Namediv">
              <Typography variant="span=" className="name">
                Oliver Queen
              </Typography>
              <Typography variant="span=" className="infotext">
                Chemistry Teacher, Kolkata Public School, Kolkata.
              </Typography>
              <Box component="div" className="otherdet">
                <Box component="div" className="detdiv">
                  <Typography variant="span=" className="title">
                    Email
                  </Typography>
                  <Typography variant="span=" className="subtext">
                    brucewayne@gmail.com
                  </Typography>
                </Box>
                <Box component="div" className="detdiv">
                  <Typography variant="span=" className="title">
                    Mobile Number
                  </Typography>
                  <Typography variant="span=" className="subtext">
                    8754764302
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box component="div" className="detailsrow otherdetareabot">
            <Box component="div" className="otherdet none mobshowdiv">
              <Box component="div" className="detdiv">
                <Typography variant="span=" className="title">
                  Email
                </Typography>
                <Typography variant="span=" className="subtext">
                  brucewayne@gmail.com
                </Typography>
              </Box>
              <Box component="div" className="detdiv">
                <Typography variant="span=" className="title">
                  Mobile Number
                </Typography>
                <Typography variant="span=" className="subtext">
                  8754764302
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="detdiv">
              <Typography variant="span=" className="title">
                Address
              </Typography>
              <Typography variant="span=" className="subtext">
                01-0279 Plot No. DD 257 Road, Street Number 279, Action Area I,
                Newtown, Kolkata, West Bengal - 700156, India.
              </Typography>
            </Box>
          </Box>
          <Box component="div" className="detailsrow">
            <Box component="div" className="detdiv">
              <Typography variant="span=" className="title">
                Gender
              </Typography>
              <Typography variant="span=" className="subtext">
                Male
              </Typography>
            </Box>
            <Box component="div" className="detdiv">
              <Typography variant="span=" className="title">
                Marital Status
              </Typography>
              <Typography variant="span=" className="subtext">
                Single
              </Typography>
            </Box>
            <Box component="div" className="detdiv">
              <Typography variant="span=" className="title">
                Date Of Birth
              </Typography>
              <Typography variant="span=" className="subtext">
                18th October, 1993
              </Typography>
            </Box>
          </Box>
          <Box component="div" className="langrow">
            <Typography variant="span=" className="title">
              Language Proficient
            </Typography>
            <Box component="div" className="langdiv">
              <Box component="div" className="detdiv">
                <Typography variant="span=" className="subtext">
                  English
                </Typography>
                <Box component="ul" className="reading">
                  <List>
                    <ListItem>
                      <Typography variant="span=" className="orangebtn">
                        Reading
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="span=" className="orangebtn">
                        Writing
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="span=" className="orangebtn">
                        Speaking
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box component="div" className="detdiv">
                <Typography variant="span=" className="subtext">
                  Hindi
                </Typography>
                <Box component="ul" className="reading">
                  <List>
                    <ListItem>
                      <Typography variant="span=" className="orangebtn">
                        Reading
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="span=" className="orangebtn">
                        Writing
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="span=" className="orangebtn">
                        Speaking
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box component="div" className="detailsrow">
            <Box component="div" className="detdiv">
              <Typography variant="span=" className="title">
                Professional Description
              </Typography>
              <Typography variant="span=" className="subtext">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
              </Typography>
            </Box>
          </Box>
          <Box component="div" className="socialrow">
            <Typography variant="span=" className="title">
              Social Media
            </Typography>
            <Box component="div" className="detdiv">
              <Box component="ul" className="socialul">
                <List>
                  <ListItem>
                    <LinkedInIcon />
                    <Link href="#" onClick={preventDefault}>
                      @barryalan
                    </Link>
                  </ListItem>
                  <ListItem>
                    <FaceBookIcon />
                    <Link href="#" onClick={preventDefault}>
                      @brucewayne1810
                    </Link>
                  </ListItem>
                  <ListItem>
                    <TwitterIcon />
                    <Link href="#" onClick={preventDefault}>
                      @bruce_wayne
                    </Link>
                  </ListItem>
                  <ListItem>
                    <InstaIcon />
                    <Link href="#" onClick={preventDefault}>
                      @roshinisharma_18120
                    </Link>
                  </ListItem>
                  <ListItem>
                    <YoutubeIcon />
                    <Link href="#" onClick={preventDefault}>
                      https://www.youtube.com/Chemistry
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
          <Box component="div" className="otherdetailstab">
            <AppBar position="static" className="divtabroot">
              <Tabs
                value={valuePopper}
                onChange={handleChangeOtherDetTab}
                aria-label="simple tabs example"
              >
                <Tab
                  label="Work Experience"
                  {...a11yProps(0)}
                  className="personaltab"
                />
                <Tab
                  label="Personal Details"
                  {...a11yProps(1)}
                  className="personaltab"
                />
                <Tab
                  label="Other Details"
                  {...a11yProps(2)}
                  className="personaltab"
                />
              </Tabs>
            </AppBar>
            <TabPanel value={valuePopper} index={0} className="workexptab">
              {/* Fresher Div Area */}
              {/* <Box component="div" className="fresherdiv mt-4 mb-4 block text-center">
                <FresherIcon />
                <Typography variant="span" className="font16 block">
                  Fresher
                </Typography>
              </Box> */}

              {/* No Data Div Area */}
              {/* <Box component="div" className="fresherdiv mt-4 mb-4 block text-center">
                <NotProvidedWorkExp />
                <Typography variant="span" className="font16 block">
                  Yet to be provided by the candidate
                </Typography>
              </Box> */}
              <Box component="div" className="tabdivcont">
                <Box component="div" className="tableft">
                  <Box component="div" className="conttab">
                    <Typography variant="span" className="num">
                      01
                    </Typography>
                    <List className="workareaul">
                      <ListItem>
                        <Typography variant="span" className="heading">
                          Chemistry Teacher
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="span" className="subtext">
                          Jan 2019 - Present
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="span" className="subtext">
                          Probation
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
                <Box component="div" className="tabright">
                  <Typography variant="span" className="heading">
                    Kolkata Public School, Kolkata
                  </Typography>
                  <Typography variant="span" className="subtext">
                    Key Responsibilities
                  </Typography>
                  <List className="workareaul">
                    <ListItem>
                      <Typography variant="span" className="subtext">
                        Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="span" className="subtext">
                        Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box component="div" className="tabdivcont">
                <Box component="div" className="tableft">
                  <Box component="div" className="conttab">
                    <Typography variant="span" className="num">
                      02
                    </Typography>
                    <List className="workareaul">
                      <ListItem>
                        <Typography variant="span" className="heading">
                          Chemistry Teacher
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="span" className="subtext">
                          Jan 2017 - Dec 2019
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="span" className="subtext">
                          Confirmed
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
                <Box component="div" className="tabright">
                  <Typography variant="span" className="heading">
                    Jain College Of Engineering, Mumbai
                  </Typography>
                  <Typography variant="span" className="subtext">
                    Key Responsibilities
                  </Typography>
                  <List className="workareaul">
                    <ListItem>
                      <Typography variant="span" className="subtext">
                        Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="span" className="subtext">
                        Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={valuePopper} index={1} className="eduexptab">
              {/* No Data Div Area */}
              {/* <Box component="div" className="fresherdiv mt-4 mb-4 block text-center">
                <NotProvidedPersonal />
                <Typography variant="span" className="font16 block">
                  Yet to be provided by the candidate
                </Typography>
              </Box> */}
              <Box component="div" className="tabdivcont">
                 
                <Box component="div" className="tableft">
                  <Box component="div" className="conttab">
                    <Typography variant="span" className="num">
                      01
                    </Typography>
                    <List className="workareaul">
                      <ListItem>
                        <Typography variant="span" className="heading">
                          Bachelors Of Sciencein Chemistry
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="span" className="subtext">
                          Jan 2019 - Dec 2021
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
                <Box component="div" className="tabright">
                  <Typography variant="span" className="heading">
                    Kolkata College Of Engineering, Kolkata
                  </Typography>
                  <Typography variant="span" className="subtext">
                    Bharathiar University
                  </Typography>
                  <Typography variant="span" className="subtext">
                    Grade ( Lorem Ipsum Lorem Ipsum Lorem Ipsum )
                  </Typography>
                  <Typography variant="span" className="subtext blackcolortext">
                    9.6/10
                  </Typography>
                </Box>
              </Box>
              <Box component="div" className="tabdivcont">
                <Box component="div" className="tableft">
                  <Box component="div" className="conttab">
                    <Typography variant="span" className="num">
                      02
                    </Typography>
                    <List className="workareaul">
                      <ListItem>
                        <Typography variant="span" className="heading">
                          Class 12th
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="span" className="subtext">
                          Mar 2019
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
                <Box component="div" className="tabright">
                  <Typography variant="span" className="heading">
                    Kolkata Higher Secondary School, Kolkata
                  </Typography>
                  <Typography variant="span" className="subtext">
                    State Board - Computer Science
                  </Typography>
                  <Typography variant="span" className="subtext">
                    Percentage
                  </Typography>
                  <Typography variant="span" className="subtext blackcolortext">
                    96%
                  </Typography>
                </Box>
              </Box>
              <Box component="div" className="tabdivcont">
                <Box component="div" className="tableft">
                  <Box component="div" className="conttab">
                    <Typography variant="span" className="num">
                      03
                    </Typography>
                    <List className="workareaul">
                      <ListItem>
                        <Typography variant="span" className="heading">
                          Class 10th
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="span" className="subtext">
                          April 2018
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
                <Box component="div" className="tabright">
                  <Typography variant="span" className="heading">
                    Kolkata Higher Secondary School, Kolkata
                  </Typography>
                  <Typography variant="span" className="subtext">
                    State Board
                  </Typography>
                  <Typography variant="span" className="subtext">
                    Percentage
                  </Typography>
                  <Typography variant="span" className="subtext blackcolortext">
                    96%
                  </Typography>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={valuePopper} index={2} className="otherexptab">
               {/* No Data Div Area */}
              {/* <Box component="div" className="fresherdiv mt-4 mb-4 block text-center">
                <NotProvidedPersonal />
                <Typography variant="span" className="font16 block">
                  Yet to be provided by the candidate
                </Typography>
              </Box> */}
              <Typography variant="span" className="heading_title">
                Professional Qualification
              </Typography>
              <Box component="div" className="tabdivcont">
                <Box component="div" className="tableft">
                  <Box component="div" className="conttab">
                    <Typography variant="span" className="num">
                      01
                    </Typography>
                    <List className="workareaul">
                      <ListItem>
                        <Typography variant="span" className="heading">
                          Chemistry Teacher
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="span" className="subtext">
                          Jan 2017 - Dec 2018
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
                <Box component="div" className="tabright">
                  <Typography variant="span" className="subtext">
                    Level
                  </Typography>
                  <Typography variant="span" className="subtext blackcolortext">
                    3rd level
                  </Typography>
                </Box>
              </Box>
              <Typography variant="span" className="heading_title">
                Certifications
              </Typography>
              <Box component="div" className="tabdivcont">
                <Box component="div" className="tableft">
                  <Box component="div" className="conttab">
                    <Typography variant="span" className="num">
                      01
                    </Typography>
                    <List className="workareaul">
                      <ListItem>
                        <Typography variant="span" className="heading">
                          Environmental Analytical Chemist
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="span" className="subtext">
                          Jan 2019 - Dec 2020
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
                <Box component="div" className="tabright">
                  <Typography variant="span" className="heading">
                    Jan 2019 - Dec 2020
                  </Typography>
                </Box>
              </Box>
              <Typography variant="span" className="heading_title">
                Skills
              </Typography>
              <Box component="ul" className="reading">
                <List>
                  <ListItem>
                    <Typography variant="span=" className="orangebtn">
                      Reading
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="span=" className="orangebtn">
                      Writing
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="span=" className="orangebtn">
                      Speaking
                    </Typography>
                  </ListItem>
                </List>
              </Box>
              <Typography variant="span" className="heading_title">
                Personal Achievements
              </Typography>
              <Box component="div" className="tabdivcont">
                <Box component="div" className="tableft">
                  <Box component="div" className="conttab">
                    <Typography variant="span" className="num">
                      01
                    </Typography>
                    <List className="workareaul">
                      <ListItem>
                        <Typography variant="span" className="heading">
                          Invented New Formulas
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="span" className="subtext">
                          12th Jan 2019
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
          </Box>
        </Box>
        <Box component="div" className="downloaddiv">
          <Box component="div" className="btndiv">
            <Button startIcon={<Resume />}>Download Resume</Button>
            <Button startIcon={<Profile />}>Download Profile</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default CandidateDeatilsPopper;

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

const NotProvidedPersonal = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="48.392" height="48.392" viewBox="0 0 48.392 48.392">
  <g id="Group_694" data-name="Group 694" transform="translate(0.999)">
    <g id="Rectangle_454" data-name="Rectangle 454" transform="translate(0.197 0.197)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0">
      <rect width="44" height="44" stroke="none"/>
      <rect x="0.5" y="0.5" width="43" height="43" fill="none"/>
    </g>
    <g id="chat" transform="translate(-0.999)">
      <path id="Path_4024" data-name="Path 4024" d="M338.068,10.869V7.179a7.089,7.089,0,1,0-14.177-.09v3.781h-.473A1.418,1.418,0,0,0,322,12.287V24.1a1.418,1.418,0,0,0,1.418,1.418H338.54a1.418,1.418,0,0,0,1.418-1.418V12.287a1.418,1.418,0,0,0-1.418-1.418ZM332.4,17.721v2.363a1.418,1.418,0,0,1-2.836,0V17.721a1.418,1.418,0,0,1,0-2.835H332.4a1.418,1.418,0,0,1,0,2.835Zm2.835-6.852h-8.506V7.088a4.253,4.253,0,1,1,8.506,0Z" transform="translate(-291.566 0.001)" fill="#2a5798"/>
      <g id="Group_7109" data-name="Group 7109" transform="translate(0 13.421)">
        <path id="Path_4025" data-name="Path 4025" d="M31.19,158.068H7.561a1.418,1.418,0,1,1,0-2.835h20.89a4.231,4.231,0,0,1-.853-2.552v-1.229H7.561a1.418,1.418,0,0,1,0-2.835H27.6V142H1.418A1.418,1.418,0,0,0,0,143.418v32.135a1.418,1.418,0,0,0,2.42,1L7.676,171.3H37.334a1.418,1.418,0,0,0,1.418-1.418V156.934H32.58A1.418,1.418,0,0,1,31.19,158.068Zm0,6.616H7.561a1.418,1.418,0,0,1,0-2.835H31.19a1.418,1.418,0,0,1,0,2.835Z" transform="translate(0 -142)" fill="#f6b333"/>
      </g>
    </g>
  </g>
</svg>

  );
}

const NotProvidedWorkExp = () => {
  return(
<svg xmlns="http://www.w3.org/2000/svg" width="103.864" height="93.809" viewBox="0 0 103.864 93.809">
  <g id="_18_Teacher" data-name="18 Teacher" transform="translate(-2.111 -8)">
    <path id="Path_4392" data-name="Path 4392" d="M55.772,72.5c-2.744,1.544-5.8,3.913-8.986,4.36-4.22.594-7.213-2.278-10.33-4.588H12.341A1.737,1.737,0,0,1,10.6,70.54V18.423a5.217,5.217,0,0,1,5.212-5.212H92.253a5.217,5.217,0,0,1,5.212,5.212v35.1c.088.13.187.25.268.385l4.944,8.241V13.212A5.217,5.217,0,0,0,97.465,8H10.6a5.217,5.217,0,0,0-5.212,5.212V74.1c-4.67.86-4.334,8.6.869,8.6h49.51Z" transform="translate(0)" fill="#2a5798"/>
    <path id="Path_4393" data-name="Path 4393" d="M63.266,48.235l-4.224,5.281c3.333.057,5.851-2.486,4.665-5.929C63.563,47.805,63.431,48.029,63.266,48.235Z" transform="translate(41.97 29.184)" fill="#f6b333"/>
    <rect id="Rectangle_2128" data-name="Rectangle 2128" width="19.109" height="24.321" rx="1" transform="translate(15.816 20.16)" fill="#2a5798"/>
    <path id="Path_4394" data-name="Path 4394" d="M40.347,18.474H24.712a1.738,1.738,0,0,1,0-3.474H40.347a1.738,1.738,0,0,1,0,3.474Z" transform="translate(15.425 5.16)" fill="#2a5798"/>
    <path id="Path_4395" data-name="Path 4395" d="M40.347,22.474H24.712a1.738,1.738,0,0,1,0-3.474H40.347a1.738,1.738,0,0,1,0,3.474Z" transform="translate(15.425 8.109)" fill="#2a5798"/>
    <path id="Path_4396" data-name="Path 4396" d="M40.347,26.474H24.712a1.738,1.738,0,0,1,0-3.474H40.347a1.738,1.738,0,0,1,0,3.474Z" transform="translate(15.425 11.058)" fill="#2a5798"/>
    <path id="Path_4397" data-name="Path 4397" d="M40.347,30.474H24.712a1.738,1.738,0,0,1,0-3.474H40.347a1.738,1.738,0,0,1,0,3.474Z" transform="translate(15.425 14.007)" fill="#2a5798"/>
    <path id="Path_4398" data-name="Path 4398" d="M54.679,18.444h-16a3.8,3.8,0,0,0-3.668,4.228,9.8,9.8,0,0,0,3.88,7.821,12.121,12.121,0,1,0,23.675,5.212,11.918,11.918,0,0,0,.152-3.685,3.656,3.656,0,0,0,1.825-3.153v-.56a9.874,9.874,0,0,0-9.863-9.863Z" transform="translate(24.236 7.7)" fill="#f6b333"/>
    <path id="Path_4399" data-name="Path 4399" d="M16.415,41.773l6.746-7.69-2.594-2.358c-4.43-3.683-10.493,3.943-6.532,7.887l2.276,1.876a1.661,1.661,0,0,0,.1.285Z" transform="translate(7.844 16.769)" fill="#f6b333"/>
    <path id="Path_4400" data-name="Path 4400" d="M92.173,49.865l-7.922-13.2a5.39,5.39,0,0,0-4.47-2.536H69.589a1.679,1.679,0,0,0-.955.3q-4.2,4.926-8.339.017a1.677,1.677,0,0,0-.99-.313H50.48a1.763,1.763,0,0,0-.973.3L35.87,42.1a1.726,1.726,0,0,1-1.65-.052L23.355,33.829l-7,7.975L32.187,53.531a5.306,5.306,0,0,0,5.333.313L48.743,47.52V77.556a5.227,5.227,0,0,0,5.212,5.212H74.8a5.227,5.227,0,0,0,5.212-5.212V75.32a11.2,11.2,0,0,1-5.368,3.693,8.266,8.266,0,0,1-7.864-2.794,7.925,7.925,0,0,1-1.245-8.76,17.772,17.772,0,0,1,3.578-4.107,1.725,1.725,0,0,1,.376-1.22L77.1,52.727l-.216-7.115,3.822,6.369a1.738,1.738,0,0,1-.139,1.987L73.175,63.1l7.4,7.4,11.437-14.3a5.445,5.445,0,0,0,.156-6.341Z" transform="translate(10.503 19.041)" fill="#f6b333"/>
    <path id="Path_4401" data-name="Path 4401" d="M47.421,54.263a4.145,4.145,0,0,0-.884,4.594,5.137,5.137,0,0,0,4.5,3.159,4.1,4.1,0,0,0,2.906-1.233l1.852-1.851-6.52-6.52Z" transform="translate(32.498 32.741)" fill="#f6b333"/>
  </g>
</svg>

  );
}
const FresherIcon = () =>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="199" height="178" viewBox="0 0 199 178">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_2163" data-name="Rectangle 2163" width="199" height="178" fill="#fff"/>
    </clipPath>
  </defs>
  <g id="Fresher" clip-path="url(#clip-path)">
    <path id="Path_4065" data-name="Path 4065" d="M199,156.633H0v.118H199Z" fill="#ebebeb"/>
    <path id="Path_4066" data-name="Path 4066" d="M194.688,164.251H179.025v.118h15.663Z" fill="#ebebeb"/>
    <path id="Path_4067" data-name="Path 4067" d="M138.565,165.533h-4.11v.118h4.11Z" fill="#ebebeb"/>
    <path id="Path_4068" data-name="Path 4068" d="M178.551,159.855h-9.074v.118h9.074Z" fill="#ebebeb"/>
    <path id="Path_4069" data-name="Path 4069" d="M27.163,160.65H6.738v.118H27.163Z" fill="#ebebeb"/>
    <path id="Path_4070" data-name="Path 4070" d="M34.37,160.65H31.377v.118H34.37Z" fill="#ebebeb"/>
    <path id="Path_4071" data-name="Path 4071" d="M88.4,162.647H44.1v.118H88.4Z" fill="#ebebeb"/>
    <path id="Path_4072" data-name="Path 4072" d="M94.017,135.531H2.7a2.7,2.7,0,0,1-2.7-2.7V4.4A2.706,2.706,0,0,1,2.7,1.7H94.017a2.706,2.706,0,0,1,2.7,2.7V132.829a2.7,2.7,0,0,1-2.7,2.7ZM2.7,1.822A2.587,2.587,0,0,0,.118,4.4V132.829A2.587,2.587,0,0,0,2.7,135.413H94.017a2.584,2.584,0,0,0,2.577-2.584V4.4a2.583,2.583,0,0,0-2.577-2.583Z" fill="#ebebeb"/>
    <path id="Path_4073" data-name="Path 4073" d="M196.3,135.531H104.983a2.7,2.7,0,0,1-2.7-2.7V4.4a2.706,2.706,0,0,1,2.7-2.7H196.3A2.705,2.705,0,0,1,199,4.4V132.829a2.7,2.7,0,0,1-2.7,2.7ZM104.983,1.822A2.583,2.583,0,0,0,102.4,4.4V132.829a2.585,2.585,0,0,0,2.578,2.584H196.3a2.586,2.586,0,0,0,2.582-2.584V4.4A2.586,2.586,0,0,0,196.3,1.822Z" fill="#ebebeb"/>
    <path id="Path_4074" data-name="Path 4074" d="M190.41,22.612a11.137,11.137,0,1,0-13.4,8.285A11.143,11.143,0,0,0,190.41,22.612Z" fill="#e0e0e0"/>
    <path id="Path_4075" data-name="Path 4075" d="M188.936,21.574a9.473,9.473,0,1,0-10.867,7.836A9.476,9.476,0,0,0,188.936,21.574Z" fill="#f0f0f0"/>
    <path id="Path_4076" data-name="Path 4076" d="M179.129,13.556v6.624L174.74,17.7" fill="#f0f0f0"/>
    <path id="Path_4077" data-name="Path 4077" d="M179.129,13.556v6.624L174.74,17.7" fill="none" stroke="#e0e0e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_4078" data-name="Path 4078" d="M43.724,27.31H11.273V86.272h32.45Z" fill="#e6e6e6"/>
    <path id="Path_4079" data-name="Path 4079" d="M41.516,29.642h-27.9V84.053h27.9Z" fill="#f0f0f0"/>
    <path id="Path_4080" data-name="Path 4080" d="M27.381,29.642,13.615,81.224V53.3l6.3-23.657Z" fill="#fafafa"/>
    <path id="Path_4081" data-name="Path 4081" d="M33.533,29.642,19.015,84.053H16.277L30.8,29.642Z" fill="#fafafa"/>
    <path id="Path_4082" data-name="Path 4082" d="M42.7,67.678H12.2v1.893H42.7Z" fill="#e6e6e6"/>
    <path id="Path_4083" data-name="Path 4083" d="M182.563,103.8s.747-4.915-2.838-8.071-3.267-5.03-2.246-5.275,1.972,2.91,3.547,3.785c0,0,.052-4.495-1.551-6.151s-2.441-5.919-.918-5.995,1.684,2.531,2,4.381a15.459,15.459,0,0,0,2.014,4.452s.331-4.022,1.367-5.678-1.726-5.441-.662-7.1,2.956,1.5,2.8,5.048-2.521,7.334-1.972,11.038c0,0,1.045-2.6,1.981-2.839s1.892-1.959,2.511-2.593,1.419,1.571,0,3.619-5.041,7.532-4.492,11.971Z" fill="#e6e6e6"/>
    <path id="Path_4084" data-name="Path 4084" d="M180.419,101.56l-1.191,7.376a3.751,3.751,0,0,0,3.7,4.338h1.253a3.748,3.748,0,0,0,3.7-4.338l-1.173-7.376Z" fill="#e6e6e6"/>
    <path id="Path_4085" data-name="Path 4085" d="M185.3,114.121h-2.734v42.952H185.3Z" fill="#e0e0e0"/>
    <path id="Path_4086" data-name="Path 4086" d="M175.6,114.121h-2.734v42.952H175.6Z" fill="#e6e6e6"/>
    <path id="Path_4087" data-name="Path 4087" d="M194.995,114.121h-2.733v42.952h2.733Z" fill="#e6e6e6"/>
    <path id="Path_4088" data-name="Path 4088" d="M196.621,111.377H171.24v4.571h25.381Z" fill="#e6e6e6"/>
    <path id="Path_4089" data-name="Path 4089" d="M100.155,178c50.639,0,91.69-2.4,91.69-5.356s-41.051-5.356-91.69-5.356-91.69,2.4-91.69,5.356S49.516,178,100.155,178Z" fill="#f5f5f5"/>
    <path id="Path_4090" data-name="Path 4090" d="M147.444,154.324V102.033h-5.2v52.291l-3.31,1.017v1.576h11.822v-1.576Z" fill="#2e353a"/>
    <path id="Path_4091" data-name="Path 4091" d="M81.239,102.033h-5.2v52.291l-3.31,1.017v1.576H84.549v-1.576l-3.31-1.017Z" fill="#2e353a"/>
    <g id="Group_7232" data-name="Group 7232" opacity="0.2">
      <path id="Path_4092" data-name="Path 4092" d="M147.444,108.183h-5.2v46.141l-3.31,1.017v1.576h11.822v-1.576l-3.31-1.017Z" fill="#fff" opacity="0.2"/>
      <path id="Path_4093" data-name="Path 4093" d="M81.239,108.183h-5.2v46.141l-3.31,1.017v1.576H84.549v-1.576l-3.31-1.017Z" fill="#fff" opacity="0.2"/>
    </g>
    <path id="Path_4094" data-name="Path 4094" d="M163.527,103.925V19.706H59.963v84.219Z" fill="#2e353a"/>
    <path id="Path_4095" data-name="Path 4095" d="M163.527,103.925V19.706H59.963v84.219Z" fill="#fff" opacity="0.2"/>
    <path id="Path_4096" data-name="Path 4096" d="M161.22,22.044H62.262v79.5H161.22Z" fill="#407bff"/>
    <path id="Path_4097" data-name="Path 4097" d="M161.22,22.044H62.262v79.5H161.22Z" fill="#fff" opacity="0.3"/>
    <path id="Path_4098" data-name="Path 4098" d="M73.436,29.169V50.7h34.289Z" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4099" data-name="Path 4099" d="M75.158,50.754v-1.76H73.4" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="0.79"/>
    <path id="Path_4100" data-name="Path 4100" d="M115.76,29.406h18.916" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4101" data-name="Path 4101" d="M115.76,33.191h10.4" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4102" data-name="Path 4102" d="M115.76,36.03h14.66" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4103" data-name="Path 4103" d="M115.76,39.342h12.295" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4104" data-name="Path 4104" d="M115.76,43.127H134.2" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4105" data-name="Path 4105" d="M115.76,46.439h17.97" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4106" data-name="Path 4106" d="M115.76,49.751h12.295" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4107" data-name="Path 4107" d="M137.041,78.612h12.768" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4108" data-name="Path 4108" d="M137.041,82.4h7.093" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4109" data-name="Path 4109" d="M137.041,85.236h9.931" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4110" data-name="Path 4110" d="M137.041,88.548h8.512" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4111" data-name="Path 4111" d="M72.254,84.763H85.022" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4112" data-name="Path 4112" d="M72.254,88.548h7.093" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4113" data-name="Path 4113" d="M72.254,91.387h9.931" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4114" data-name="Path 4114" d="M72.254,94.7h8.512" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4115" data-name="Path 4115" d="M140.824,36.03h12.3" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4116" data-name="Path 4116" d="M140.824,39.342h12.3" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4117" data-name="Path 4117" d="M140.824,42.654h8.512" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4118" data-name="Path 4118" d="M104.41,84.763h12.295" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4119" data-name="Path 4119" d="M104.41,88.075h12.295" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4120" data-name="Path 4120" d="M104.41,91.387h8.512" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4121" data-name="Path 4121" d="M72.254,63h36.413" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4122" data-name="Path 4122" d="M72.254,69.149h36.413" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4123" data-name="Path 4123" d="M72.254,75.3h36.413" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4124" data-name="Path 4124" d="M126.859,78.641a8.635,8.635,0,1,0-8.63-8.635A8.633,8.633,0,0,0,126.859,78.641Z" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="0.79"/>
    <path id="Path_4125" data-name="Path 4125" d="M126.873,61.343V70.1h8.749" fill="none" stroke="#263238" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_4126" data-name="Path 4126" d="M161.22,22.133H62.262v79.5H161.22Z" fill="#fff" opacity="0.6"/>
    <path id="Path_4127" data-name="Path 4127" d="M123.927,64.948l-7.306-4.258a14.491,14.491,0,0,1-3.485-.161c-1.892-.322-2.3-.345-2.071-1.831s-.086-3.478.473-3.69,4.544,1.476,5.234,2.612l7.373,2.64Z" fill="#b97964"/>
    <path id="Path_4128" data-name="Path 4128" d="M145.555,57.723V66.24s-1.816.6-4.072,1.23a32.081,32.081,0,0,1-7.4,1.419c-3.074-.151-13.478-5.555-13.478-5.555l1.892-3.605s11.35,3.87,12.768,3.591S145.555,57.723,145.555,57.723Z" fill="#f6b333"/>
    <path id="Path_4129" data-name="Path 4129" d="M145.554,61.882V66.24s-1.816.6-4.072,1.23A13.74,13.74,0,0,1,145.554,61.882Z" opacity="0.2"/>
    <path id="Path_4130" data-name="Path 4130" d="M147.464,88.047s-5.122,27.333-6.493,38.551c-1.788,14.639-9.094,36.053-9.094,36.053l2.922.757s10.3-18.2,12.3-34.572c8.181-16.735,8.843-37.34,8.843-37.34Z" fill="#b97964"/>
    <path id="Path_4131" data-name="Path 4131" d="M126.439,169.28a4.237,4.237,0,0,1,1.5-.383s1.793-1.06,3.575-5.167h2a1.646,1.646,0,0,1,1.537,1.1.911.911,0,0,1,.056.279,11.3,11.3,0,0,1-.151,1.443,39.474,39.474,0,0,1-1.173,4.731l-.335-.085.614-2.99c.2-1.018-.86-.033-1.357.989s-1.253,2.053-3.461,1.547C126.67,170.113,125.63,169.744,126.439,169.28Z" fill="#2e353a"/>
    <path id="Path_4132" data-name="Path 4132" d="M152.789,87.611s.634,27.8,1.617,39.063c1.277,14.667-1.442,37.155-1.442,37.155l3.012.133s6.318-19.933,4.9-36.37c4.544-18.065.946-38.363.946-38.363Z" fill="#b97964"/>
    <path id="Path_4133" data-name="Path 4133" d="M148.273,170.193a4.3,4.3,0,0,1,1.452-.544s1.669-1.244,2.993-5.521l1.991-.228a1.646,1.646,0,0,1,1.646.947,1.065,1.065,0,0,1,.09.269,11.741,11.741,0,0,1,0,1.453,39.571,39.571,0,0,1-.653,4.812l-.345-.052.288-3.038c.1-1.031-.86.062-1.239,1.131s-1.026,2.181-3.277,1.893C148.59,171,147.545,170.742,148.273,170.193Z" fill="#2e353a"/>
    <path id="Path_4134" data-name="Path 4134" d="M162.97,40.326s1.5.081,2.762,2.546-.317,5.2-.629,6.515-1.891,2.47.71,4.452,4.156,4.088,2.047,6.231.208,3.785-2.837,5.375-14.253-.79-15.672-3.866.293-5.408.383-6.331-1.8-1.86-2.275-4.859,1.949-3.653,2.275-5.025-1.192-3.1,0-6.023S162.81,35.793,162.97,40.326Z" fill="#2e353a"/>
    <path id="Path_4135" data-name="Path 4135" d="M170.523,81.257c-1.792.232-3.863-3.269-5.362-6.534-1.277-2.768-2.171-5.37-2.171-5.37l.946-2.669L166.4,59.72s1.73,2.408,4.327,11.578c.416,1.476.917,3.127,1.371,4.973a2.206,2.206,0,0,0,.411,1.3C172.51,78.958,172.675,80.978,170.523,81.257Z" fill="#f6b333"/>
    <path id="Path_4136" data-name="Path 4136" d="M165.127,74.723c-1.277-2.768-2.156-5.37-2.156-5.37l.945-2.669C164.569,68.53,165.548,71.875,165.127,74.723Z" opacity="0.2"/>
    <path id="Path_4137" data-name="Path 4137" d="M172.508,77.6c-.945.624-1.934.615-2.487-.525a5.865,5.865,0,0,1,.733-5.753c.416,1.476.9,3.128,1.362,4.973A2.09,2.09,0,0,0,172.508,77.6Z" opacity="0.2"/>
    <path id="Path_4138" data-name="Path 4138" d="M144.3,80.349s9.434,3.392,18.471,2.758c0,0-.818-11.166-5.547-13.153S144.3,70.805,144.3,80.349Z" fill="#f6b333"/>
    <path id="Path_4139" data-name="Path 4139" d="M144.3,80.349s9.434,3.392,18.471,2.758c0,0-.818-11.166-5.547-13.153S144.3,70.805,144.3,80.349Z" opacity="0.2"/>
    <path id="Path_4140" data-name="Path 4140" d="M145.652,81.144l15.606,1.348a55.53,55.53,0,0,1,1.66-11.469c.373-1.5.842-3.165,1.418-5.1.322-1.031.677-2.139,1.074-3.312.3-.9.619-1.864.974-2.877a46.277,46.277,0,0,0-6.479-1.566,49.688,49.688,0,0,0-7.008-.738c-3.036,0-6.526.317-6.526.317s-.5.118-.809,3.34A138.691,138.691,0,0,0,145.652,81.144Z" fill="#407bff"/>
    <path id="Path_4141" data-name="Path 4141" d="M145.71,83.486l15.606,1.287c.245-3.88.43-9.122,1.6-13.749.374-1.5.842-3.165,1.419-5.1.321-1.031.676-2.139,1.073-3.312.3-.9.62-1.864.974-2.877a46.3,46.3,0,0,0-6.478-1.566,49.717,49.717,0,0,0-7.009-.738c-3.036,0-6.526.317-6.526.317s-.5.118-.808,3.34A184.883,184.883,0,0,0,145.71,83.486Z" fill="#2e353a"/>
    <path id="Path_4142" data-name="Path 4142" d="M154.2,60.865c3.845-.473,5-2.139,5-2.139-2.445-2.3-.416-6.293-.416-6.293l-4.62.866a13,13,0,0,1,.18,1.949c.037,2.81-1.235,2.839-1.235,2.839C152.274,59.616,154.2,60.865,154.2,60.865Z" fill="#b97964"/>
    <path id="Path_4143" data-name="Path 4143" d="M154.166,53.3a13,13,0,0,1,.18,1.949,5.153,5.153,0,0,0,4.45-2.839Z" opacity="0.2"/>
    <path id="Path_4144" data-name="Path 4144" d="M156.715,40.345c-4.024-.222-5.438,1.864-5.959,5.995-.652,5.167.294,8.914,5.387,8.086C163.061,53.294,163.4,40.69,156.715,40.345Z" fill="#b97964"/>
    <path id="Path_4145" data-name="Path 4145" d="M153.372,46.259a8.383,8.383,0,0,1-1.263,1.6,1.106,1.106,0,0,0,1.036.516Z" fill="#a24e3f"/>
    <path id="Path_4146" data-name="Path 4146" d="M155.853,46.065c-.028.331.128.61.35.629s.421-.237.444-.568-.132-.61-.35-.629S155.877,45.734,155.853,46.065Z" fill="#2e353a"/>
    <path id="Path_4147" data-name="Path 4147" d="M156.389,45.521l-.7-.336S156,45.814,156.389,45.521Z" fill="#2e353a"/>
    <path id="Path_4148" data-name="Path 4148" d="M151.753,45.672c-.028.331.128.615.35.629s.421-.237.445-.563-.133-.615-.35-.629S151.8,45.346,151.753,45.672Z" fill="#2e353a"/>
    <path id="Path_4149" data-name="Path 4149" d="M152.273,45.133l-.695-.341S151.9,45.421,152.273,45.133Z" fill="#2e353a"/>
    <path id="Path_4150" data-name="Path 4150" d="M156.057,43.288a2.093,2.093,0,0,1,1.7.714" fill="none" stroke="#2e353a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.72"/>
    <path id="Path_4151" data-name="Path 4151" d="M153.13,42.956a1.89,1.89,0,0,0-1.622.241" fill="none" stroke="#2e353a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.72"/>
    <path id="Path_4152" data-name="Path 4152" d="M153.645,50a10.718,10.718,0,0,1,.392,1.419h.26c1.178-.057,1.707-.473,1.934-.913a1.55,1.55,0,0,0,.156-.7,1.511,1.511,0,0,0-.052-.407,5.559,5.559,0,0,1-2.293.582C153.8,49.992,153.645,50,153.645,50Z" fill="#2e353a"/>
    <path id="Path_4153" data-name="Path 4153" d="M154.043,49.968l.128.421a3.5,3.5,0,0,0,2.218-.6,1.6,1.6,0,0,0-.052-.407A5.563,5.563,0,0,1,154.043,49.968Z" fill="#fff"/>
    <path id="Path_4154" data-name="Path 4154" d="M154.3,51.411c1.177-.057,1.707-.473,1.934-.913a3.788,3.788,0,0,0-1.3.317A1.42,1.42,0,0,0,154.3,51.411Z" fill="#de5753"/>
    <path id="Path_4155" data-name="Path 4155" d="M160.744,47.371s-1.7-3.411-1.277-5.952c0,0-7.8-3.7-8.635,4.381,0,0-.383-7.234,6.545-7.012s6.341,10.343,2.6,13.163C159.982,51.951,161.794,49.5,160.744,47.371Z" fill="#2e353a"/>
    <path id="Path_4156" data-name="Path 4156" d="M160.039,48.185a1.769,1.769,0,0,1,1.991-1.509c1.239.2,1.693,2.8-1.442,3.246C160.138,49.982,159.912,49.538,160.039,48.185Z" fill="#b97964"/>
    <path id="Path_4157" data-name="Path 4157" d="M162.767,59.143s-4.516,3.667-8.725,3.605-5.675-4.788-5.675-4.788A24.04,24.04,0,0,1,162.767,59.143Z" fill="#b97964"/>
    <path id="Path_4158" data-name="Path 4158" d="M162.384,58.466s-7.419,13.281.383,24.641c0,0,1.06-14.01,3.627-23.387Z" fill="#f6b333"/>
    <path id="Path_4159" data-name="Path 4159" d="M148.774,57.416s-.066,9.406-1.419,12.9-3.073,10.035-3.073,10.035-1.3-15.656,1.258-22.616Z" fill="#f6b333"/>
    <path id="Path_4160" data-name="Path 4160" d="M159.467,41.419a9.2,9.2,0,0,0-5.636,0c-2.644,1.036-1.92,3.785-3.259,4.287" fill="none" stroke="#2e353a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_4161" data-name="Path 4161" d="M183.267,55.722l-1.239-.71-4.554,1.244-6.148-1.594-1.418,4.67s-.294,5.2,0,5.266,7.036.412,7.036.412l3.429-2.186Z" fill="#e0e0e0"/>
    <path id="Path_4162" data-name="Path 4162" d="M169.672,55.012l-2.719,10.773,8.394.941,5.793-1.6L184.1,55.012l-6.621,1.717Z" fill="#f6b333"/>
    <path id="Path_4163" data-name="Path 4163" d="M177.475,56.729l-2.128,10-8.394-.941,2.719-10.773Z" fill="#fff" opacity="0.4"/>
    <path id="Path_4164" data-name="Path 4164" d="M177.474,56.725l-2.128,10,5.793-1.6,2.955-10.116Z" fill="#f6b333" opacity="0.2"/>
    <path id="Path_4165" data-name="Path 4165" d="M170.107,76.483l3.921-7.495a14.363,14.363,0,0,1,0-3.492c.236-1.893.236-2.314,1.735-2.153s3.467-.251,3.7.3-1.263,4.613-2.364,5.351l-2.294,7.49Z" fill="#b97964"/>
    <path id="Path_4166" data-name="Path 4166" d="M168.826,80.6c2.483,2.11,5.32.3,6.9-5.777l-4.89-.629Z" fill="#f6b333"/>
    <path id="Path_4167" data-name="Path 4167" d="M171.1,72.864l-1,1.76,6.186.838V73.644Z" fill="#2e353a"/>
    <path id="Path_4168" data-name="Path 4168" d="M120.357,63.784l1.712,1.079,1.121-6.146-1.811-.085Z" fill="#2e353a"/>
    <path id="Path_4169" data-name="Path 4169" d="M145.709,83.485l-9.836,57.828s23.806,2.839,31.878,1.183c0,0,1.977-41.391-6.446-57.724Z" fill="#f6b333"/>
    <path id="Path_4170" data-name="Path 4170" d="M165.4,84.848l-9.817,57.832s23.806,2.839,31.878,1.178c0,0,1.977-41.39-6.446-57.723Z" fill="#fff" opacity="0.4"/>
    <path id="Path_4171" data-name="Path 4171" d="M113.775,58.069l-2.449-2.531c-1.466-1.524-3.448-3.525-5.424-5.536l-2.914-2.938-2.553-2.56-1.8-1.807-.506-.5a.392.392,0,0,0-.326-.033l.667-.672a.4.4,0,0,0,.033.326l.506.506,1.816,1.8,2.567,2.536,2.947,2.905c2.024,1.963,4.029,3.941,5.561,5.4l2.544,2.437Z" fill="#2e353a"/>
    <path id="Path_4172" data-name="Path 4172" d="M131.878,162.651s-2.5,5.233-3.935,6.246c0,0,1.93,1.15,3.935-1.42,2.6-3.312,3.234-2.389,3.234-2.389a9.236,9.236,0,0,0-.312-1.689C134.413,162.339,131.878,162.651,131.878,162.651Z" fill="#b97964"/>
    <path id="Path_4173" data-name="Path 4173" d="M153.271,162.609s-.709,1.94-1.655,4.069a9.189,9.189,0,0,1-1.891,2.971,2.558,2.558,0,0,0,2.525-.5c.884-1.031,2.407-4.731,4.1-4.324a3.9,3.9,0,0,0-.379-.866A11.545,11.545,0,0,0,153.271,162.609Z" fill="#b97964"/>
    <path id="Path_4174" data-name="Path 4174" d="M73.923,171.584l.383-58.783H70.461l.383,58.783Z" fill="#407bff"/>
    <path id="Path_4175" data-name="Path 4175" d="M70.844,171.584h3.079l.307-46.968.076-11.7H70.461l.076,11.7Z" fill="#fff" opacity="0.5"/>
    <path id="Path_4176" data-name="Path 4176" d="M74.306,112.915l-.076,11.828H70.537l-.076-11.828Z" opacity="0.2"/>
    <path id="Path_4177" data-name="Path 4177" d="M103.787,171.584,100.33,112.8H96.49l4.218,58.783Z" fill="#407bff"/>
    <path id="Path_4178" data-name="Path 4178" d="M100.707,171.584h3.079L100.537,116.4l-.208-3.487H96.484l.255,3.487Z" fill="#fff" opacity="0.5"/>
    <path id="Path_4179" data-name="Path 4179" d="M100.537,116.227h-3.8l-.255-3.312h3.845Z" opacity="0.2"/>
    <path id="Path_4180" data-name="Path 4180" d="M44.06,171.584,48.278,112.8h-3.84l-3.452,58.783Z" fill="#407bff"/>
    <path id="Path_4181" data-name="Path 4181" d="M44.06,171.584,48.023,116.4l.255-3.487H44.434l-.208,3.487-3.239,55.182Z" fill="#fff" opacity="0.3"/>
    <path id="Path_4182" data-name="Path 4182" d="M44.433,112.915h3.845l-.255,3.312h-3.8Z" opacity="0.2"/>
    <path id="Path_4183" data-name="Path 4183" d="M41.389,110.984h61.992v2.607a1.021,1.021,0,0,1-1.022,1.022H42.415a1.021,1.021,0,0,1-1.022-1.022v-2.607Z" fill="#407bff"/>
    <path id="Path_4184" data-name="Path 4184" d="M41.389,110.984h61.992v2.607a1.021,1.021,0,0,1-1.022,1.022H42.415a1.021,1.021,0,0,1-1.022-1.022v-2.607Z" fill="#fff" opacity="0.4"/>
    <path id="Path_4185" data-name="Path 4185" d="M103.376,110.984H41.389V112.8h61.987Z" opacity="0.2"/>
    <path id="Path_4186" data-name="Path 4186" d="M105.172,111.458H39.6a1.025,1.025,0,0,1,0-2.049h65.576a1.025,1.025,0,1,1,0,2.049Z" fill="#407bff"/>
    <path id="Path_4187" data-name="Path 4187" d="M105.172,111.458H39.6a1.025,1.025,0,0,1,0-2.049h65.576a1.025,1.025,0,1,1,0,2.049Z" fill="#fff" opacity="0.4"/>
    <path id="Path_4188" data-name="Path 4188" d="M74.855,102.624l-4.138,7.646" fill="none" stroke="#2e353a" stroke-miterlimit="10" stroke-width="2"/>
    <path id="Path_4189" data-name="Path 4189" d="M37.32,92.546s3.741-6.657,4.351-7.958,2.27-10.471,2.27-10.471a5.973,5.973,0,0,1-.3-1.358c0-.473.3-2.664.3-2.664s0-.175,1.182-.53,2.483-.828,2.6-.3-.18,4.2-.534,4.556a8.009,8.009,0,0,0-.757.946s-.993,9.775-1.447,11.218-4.18,9.113-4.18,9.113Z" fill="#e4897b"/>
    <path id="Path_4190" data-name="Path 4190" d="M54.959,100.651s9.222,4.3,10.555,4.836a26.865,26.865,0,0,0,5.377.719,5.813,5.813,0,0,1,1.338-.369c.473-.029,2.672.142,2.672.142s.18,0,.6,1.149.969,2.432.445,2.579-4.2.066-4.573-.27L71,109.106s-5.2,1.088-6.687.719-11.718-3.652-11.718-3.652Z" fill="#e4897b"/>
    <path id="Path_4191" data-name="Path 4191" d="M42.305,93.72A11.429,11.429,0,0,1,40.257,98.3c-2,2.839-4.809,4.684-5.571,1.765-1.159-4.41,3.755-9.936,3.755-9.936Z" fill="#f6b333"/>
    <path id="Path_4192" data-name="Path 4192" d="M42.306,93.72A11.429,11.429,0,0,1,40.258,98.3a2.148,2.148,0,0,1-.634-1.713C39.9,94.628,42.306,93.72,42.306,93.72Z" opacity="0.2"/>
    <path id="Path_4193" data-name="Path 4193" d="M52.2,90.412a5.205,5.205,0,0,1-1.561,2.512,6.227,6.227,0,0,1-4.043,1.59,5.768,5.768,0,0,1-4.01-1.49c-2.171-1.959-2.1-4.211-2.365-8.043s3.9-6.747,8.115-5.2S53.149,86.973,52.2,90.412Z" fill="#e4897b"/>
    <path id="Path_4194" data-name="Path 4194" d="M47.025,77.325s2.946-1.079,5.013.639,1.953,5.853,0,7.807c0,0,.534-.71-1-2.427A50.446,50.446,0,0,1,47.025,77.325Z" fill="#2e353a"/>
    <path id="Path_4195" data-name="Path 4195" d="M50.643,92.925a6.226,6.226,0,0,1-4.043,1.59,3.751,3.751,0,0,1,1.3-1.59A3.731,3.731,0,0,0,50.643,92.925Z" opacity="0.2"/>
    <path id="Path_4196" data-name="Path 4196" d="M51.4,155.616l-.5,3.137-.459,2.895H46.244l.364-3.7.345-3.549Z" fill="#e4897b"/>
    <path id="Path_4197" data-name="Path 4197" d="M50.2,160.006l-4.256-.264a.268.268,0,0,0-.3.236l-.416,3.359a.675.675,0,0,0,.168.495.677.677,0,0,0,.213.16.7.7,0,0,0,.258.065c1.485.066,2.2.023,4.072.127a35.74,35.74,0,0,0,5,.161c1.589-.151,1.39-1.722.7-1.793a10.486,10.486,0,0,1-4.79-2.285A1.07,1.07,0,0,0,50.2,160.006Z" fill="#2e353a"/>
    <path id="Path_4198" data-name="Path 4198" d="M51.508,160.735a4.511,4.511,0,0,1-1-.2.079.079,0,0,1-.044-.025.081.081,0,0,1-.022-.046.111.111,0,0,1,.01-.05.106.106,0,0,1,.032-.039c.123-.076,1.244-.743,1.7-.535a.336.336,0,0,1,.189.265.472.472,0,0,1-.137.473A1.026,1.026,0,0,1,51.508,160.735Zm.6-.714c-.246-.114-.894.165-1.352.416.671.175,1.168.185,1.357.024a.328.328,0,0,0,.085-.313.159.159,0,0,0-.028-.075A.164.164,0,0,0,52.109,160.021Z" fill="#407bff"/>
    <path id="Path_4199" data-name="Path 4199" d="M50.525,160.536a.033.033,0,0,1-.038,0,.094.094,0,0,1-.032-.029.1.1,0,0,1-.015-.042c0-.033,0-1.145.388-1.49a.469.469,0,0,1,.388-.1.34.34,0,0,1,.3.288c.057.417-.558,1.174-.946,1.377a.05.05,0,0,1-.024,0A.049.049,0,0,1,50.525,160.536Zm.615-1.476a.265.265,0,0,0-.1.015.245.245,0,0,0-.089.056,1.894,1.894,0,0,0-.322,1.183,1.855,1.855,0,0,0,.714-1.107c0-.052-.033-.118-.156-.137Z" fill="#407bff"/>
    <path id="Path_4200" data-name="Path 4200" d="M51.4,155.616l-.5,3.137-4.289-.809.345-3.549Z" opacity="0.2"/>
    <path id="Path_4201" data-name="Path 4201" d="M56.493,131.784c-1.944-2.56-6.971-3.866-11.014-4.514l-1.362,10.149c2.492.516,3.528,1.892,3.665,2.465.662,2.72-2.483,16.877-2.483,16.877l6.531,1.575S59.959,136.364,56.493,131.784Z" fill="#2e353a"/>
    <path id="Path_4202" data-name="Path 4202" d="M56.493,131.784c-1.944-2.56-6.971-3.866-11.014-4.514l-1.362,10.149c2.492.516,3.528,1.892,3.665,2.465.662,2.72-2.483,16.877-2.483,16.877l6.531,1.575S59.959,136.364,56.493,131.784Z" opacity="0.2"/>
    <path id="Path_4203" data-name="Path 4203" d="M63.221,155.616l-.5,3.137-.459,2.895H58.066l.364-3.7.345-3.549Z" fill="#e4897b"/>
    <path id="Path_4204" data-name="Path 4204" d="M62.024,160.006l-4.256-.264a.268.268,0,0,0-.3.236l-.416,3.359a.672.672,0,0,0,.619.715c1.485.066,2.2.023,4.072.128a35.9,35.9,0,0,0,5,.16c1.589-.151,1.39-1.722.7-1.793a10.476,10.476,0,0,1-4.79-2.285A1.067,1.067,0,0,0,62.024,160.006Z" fill="#2e353a"/>
    <path id="Path_4205" data-name="Path 4205" d="M63.331,160.735a4.509,4.509,0,0,1-1-.2.078.078,0,0,1-.044-.025.08.08,0,0,1-.022-.046.11.11,0,0,1,.01-.05.107.107,0,0,1,.032-.039c.123-.076,1.244-.743,1.7-.535a.336.336,0,0,1,.189.265.473.473,0,0,1-.137.473A1.026,1.026,0,0,1,63.331,160.735Zm.6-.714c-.246-.114-.894.165-1.352.416.671.175,1.168.185,1.357.024a.325.325,0,0,0,.084-.145.33.33,0,0,0,0-.168.159.159,0,0,0-.028-.075A.164.164,0,0,0,63.931,160.021Z" fill="#407bff"/>
    <path id="Path_4206" data-name="Path 4206" d="M62.347,160.536a.033.033,0,0,1-.019.006.033.033,0,0,1-.019-.006.092.092,0,0,1-.032-.029.1.1,0,0,1-.015-.042c0-.033,0-1.145.388-1.49a.469.469,0,0,1,.388-.1.34.34,0,0,1,.3.288c.057.417-.558,1.174-.946,1.377a.054.054,0,0,1-.047-.005Zm.615-1.476a.266.266,0,0,0-.1.015.246.246,0,0,0-.089.056,1.9,1.9,0,0,0-.322,1.183,1.854,1.854,0,0,0,.714-1.107c0-.052-.033-.118-.156-.137Z" fill="#407bff"/>
    <path id="Path_4207" data-name="Path 4207" d="M63.222,155.616l-.5,3.137-4.289-.809.345-3.549Z" opacity="0.2"/>
    <path id="Path_4208" data-name="Path 4208" d="M42.678,92.395c0,2.252-.26,4.391-1.65,5.394a26.453,26.453,0,0,0,6.356,4.021c2.464-1.741,1.324-3.184,1.324-3.184-2.152-1.183-1.48-3.937-.809-5.678,0,0-.53-.856-3.547-.866C43.032,92.054,42.678,92.395,42.678,92.395Z" fill="#e4897b"/>
    <path id="Path_4209" data-name="Path 4209" d="M31.069,124.833s-4.4,12.444,8.068,12.444,13.473-4.864,12.418-10.589Z" fill="#2e353a"/>
    <path id="Path_4210" data-name="Path 4210" d="M51.545,126.65s13.293.558,16.759,5.134-4.663,26.552-4.663,26.552l-6.531-1.575s3.589-14.994,2.237-16.934-8.7-2.058-18.632-2.579S51.545,126.65,51.545,126.65Z" fill="#2e353a"/>
    <path id="Path_4211" data-name="Path 4211" d="M39.8,97.42l1.225-2.9s7.07.251,9.217,3.473S39.8,97.42,39.8,97.42Z" fill="#f6b333"/>
    <path id="Path_4212" data-name="Path 4212" d="M54.221,101.848c.213,3.639,0,11.114-2.667,24.84l-20.486-1.855c.132-2.9,4.474-12.836,3.551-25.923a3.533,3.533,0,0,1,3.268-3.785h.123c1.007-.038,7.145,1.774,10.03,2.21,1.111.2,2.19.473,3.107.733a4.191,4.191,0,0,1,3.074,3.78Z" fill="#f6b333"/>
    <path id="Path_4213" data-name="Path 4213" d="M54.221,101.848c.213,3.639,0,11.114-2.667,24.84l-20.486-1.855c.132-2.9,4.474-12.836,3.551-25.923a3.533,3.533,0,0,1,3.268-3.785h.123c1.007-.038,7.145,1.774,10.03,2.21,1.111.2,2.19.473,3.107.733a4.191,4.191,0,0,1,3.074,3.78Z" opacity="0.2"/>
    <path id="Path_4214" data-name="Path 4214" d="M51.148,98.068c-2.251-.473-2.5,6.094-.861,7.986s10.357,3.312,10.357,3.312l1.617-5.914S55.087,98.919,51.148,98.068Z" fill="#f6b333"/>
    <path id="Path_4215" data-name="Path 4215" d="M41.794,92.163s-2.88-.79-4.218-6.974,4.554-8.942,11.222-7.6S52.212,88.473,46.4,92.163A6.976,6.976,0,0,1,41.794,92.163Z" fill="#2e353a"/>
    <path id="Path_4216" data-name="Path 4216" d="M49.078,87.143a3.1,3.1,0,0,0,1.248,1.893c.818.539,1.452-.284,1.419-1.344-.038-.946-.506-2.389-1.419-2.493S48.856,86.14,49.078,87.143Z" fill="#e4897b"/>
    <path id="Path_4217" data-name="Path 4217" d="M68.826,110.984V113a1.616,1.616,0,0,0,1.617,1.618h32.385a1.021,1.021,0,0,0,1.021-1.022v-2.607Z" fill="#407bff"/>
    <path id="Path_4218" data-name="Path 4218" d="M68.826,110.984V113a1.616,1.616,0,0,0,1.617,1.618h32.385a1.021,1.021,0,0,0,1.021-1.022v-2.607Z" fill="#fff" opacity="0.6"/>
    <path id="Path_4219" data-name="Path 4219" d="M103.849,110.984H68.826V112.8h35.023Z" opacity="0.2"/>
    <path id="Path_4220" data-name="Path 4220" d="M105.584,109.409H67.955a1.014,1.014,0,0,0-.392.078,1.022,1.022,0,0,0-.63.949,1.023,1.023,0,0,0,1.021,1.022h37.69a1.032,1.032,0,0,0,.759-.34,1.037,1.037,0,0,0,.258-.791,1.071,1.071,0,0,0-1.078-.918Z" fill="#407bff"/>
    <path id="Path_4221" data-name="Path 4221" d="M105.584,109.409H67.955a1.014,1.014,0,0,0-.392.078,1.022,1.022,0,0,0-.63.949,1.023,1.023,0,0,0,1.021,1.022h37.69a1.032,1.032,0,0,0,.759-.34,1.037,1.037,0,0,0,.258-.791,1.071,1.071,0,0,0-1.078-.918Z" fill="#fff" opacity="0.6"/>
    <path id="Path_4222" data-name="Path 4222" d="M41.146,171.584H44.1l.577-24.807.17-7.366H40.4l.17,7.366Z" fill="#407bff"/>
    <path id="Path_4223" data-name="Path 4223" d="M41.146,171.584H44.1l.577-24.807.17-7.366H40.4l.17,7.366Z" fill="#fff" opacity="0.4"/>
    <path id="Path_4224" data-name="Path 4224" d="M44.844,139.411l-.17,7.57h-4.1l-.17-7.57Z" opacity="0.2"/>
    <path id="Path_4225" data-name="Path 4225" d="M58.241,171.584l-1.868-31.653H52.51l2.615,31.653Z" fill="#407bff"/>
    <path id="Path_4226" data-name="Path 4226" d="M55.119,171.584h3.121L56.59,143.527l-.213-3.643H52.514l.3,3.643Z" fill="#fff" opacity="0.5"/>
    <path id="Path_4227" data-name="Path 4227" d="M52.514,139.884l.3,3.785H56.59l-.213-3.785Z" opacity="0.2"/>
    <path id="Path_4228" data-name="Path 4228" d="M30.118,171.584l2.615-31.653H28.87L27,171.584Z" fill="#407bff"/>
    <path id="Path_4229" data-name="Path 4229" d="M30.123,171.584l2.308-28.057.3-3.643H28.865l-.213,3.643L27,171.584Z" fill="#fff" opacity="0.5"/>
    <path id="Path_4230" data-name="Path 4230" d="M32.729,139.884l-.3,3.785H28.652l.213-3.785Z" opacity="0.2"/>
    <path id="Path_4231" data-name="Path 4231" d="M29.163,135.791H56.081a2.365,2.365,0,0,1,2.364,2.366v3.165H26.8v-3.165a2.365,2.365,0,0,1,2.365-2.366Z" fill="#f6b333"/>
    <path id="Path_4232" data-name="Path 4232" d="M39.21,105.344l-2.343.321,4.642,33.9,2.343-.321Z" fill="#407bff"/>
    <path id="Path_4233" data-name="Path 4233" d="M24.554,105.347l-2.343.321,4.642,33.9,2.343-.321Z" fill="#407bff"/>
    <g id="Group_7233" data-name="Group 7233" opacity="0.4">
      <path id="Path_4234" data-name="Path 4234" d="M39.21,105.344l-2.343.321,4.642,33.9,2.343-.321Z" fill="#fff" opacity="0.4"/>
    </g>
    <g id="Group_7234" data-name="Group 7234" opacity="0.4">
      <path id="Path_4235" data-name="Path 4235" d="M24.554,105.347l-2.343.321,4.642,33.9,2.343-.321Z" fill="#fff" opacity="0.4"/>
    </g>
    <path id="Path_4236" data-name="Path 4236" d="M59.008,138.55H26.232a.95.95,0,0,0-.951.951v.861a.951.951,0,0,0,.951.951H59.008a.951.951,0,0,0,.951-.951V139.5A.95.95,0,0,0,59.008,138.55Z" fill="#407bff"/>
    <path id="Path_4237" data-name="Path 4237" d="M59.008,138.55H26.232a.95.95,0,0,0-.951.951v.861a.951.951,0,0,0,.951.951H59.008a.951.951,0,0,0,.951-.951V139.5A.95.95,0,0,0,59.008,138.55Z" fill="#fff" opacity="0.6"/>
    <path id="Path_4238" data-name="Path 4238" d="M42.484,116.837H21.445L19.762,103.7H40.806Z" fill="#407bff"/>
    <path id="Path_4239" data-name="Path 4239" d="M42.484,116.837H21.445L19.762,103.7H40.806Z" fill="#fff" opacity="0.6"/>
  </g>
</svg>

  );
}

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

const BMKIcon = () => {
  return (
    <svg
      className="bmkicon-reg"
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

const SaveBlueIcon = () => {
  return (
    <svg
      className="save-blue"
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
            d="M0,3.327A3.327,3.327,0,0,1,3.327,0h9.315a3.327,3.327,0,0,1,3.327,3.327v17.3a.665.665,0,0,1-1.057.538L7.984,16.126,1.057,21.164A.665.665,0,0,1,0,20.626Zm3.327-2c-.529,0,2.274,15.931,1.9,16.305S1.331,2.8,1.331,3.327H14.638L7.593,14.766C7.707,14.683,5.7,3.6,5.84,3.6S8.262,14.683,8.376,14.766L2.656,1.64l.306-.309c0-.529.739.374.365,0s9.845,0,9.315,0Z"
          />
        </g>
      </g>
    </svg>
  );
};

const Resume = () => {
  return (
    <svg
      className="resumebtn"
      xmlns="http://www.w3.org/2000/svg"
      width="15.791"
      height="20.723"
      viewBox="0 0 15.791 20.723"
    >
      <defs></defs>
      <g transform="translate(-394.457 -348.75)">
        <path
          class="a"
          d="M408.515,369.472h-7.528a.786.786,0,0,1-.529-.851c.013-1.4,0-2.806,0-4.208a.82.82,0,0,0-.927-.934q-2.165,0-4.33,0a.669.669,0,0,1-.735-.7q0-6.009,0-12.018a1.962,1.962,0,0,1,.708-1.528,2.342,2.342,0,0,1,1.033-.476h12.3l.231.062a2,2,0,0,1,1.511,2.019q0,6.066,0,12.132c0,1.51.005,3.019,0,4.529a1.982,1.982,0,0,1-1.374,1.877C408.76,369.408,408.637,369.438,408.515,369.472Zm-6.2-10.172c.883,0,1.767,0,2.65,0a.679.679,0,0,0,.742-.743q0-.4,0-.809a1.264,1.264,0,0,0-.519-1.131,15.523,15.523,0,0,0-1.593-.768.353.353,0,0,0-.14-.009c-.748,0-1.5,0-2.245,0a.9.9,0,0,0-.332.067c-.372.156-.746.312-1.106.493a1.4,1.4,0,0,0-.812,1.258c-.012.276,0,.553,0,.829,0,.571.24.811.811.812Zm-2.225-6.2a2.248,2.248,0,1,0,2.253-2.247A2.244,2.244,0,0,0,400.091,353.1Zm2.26,8.06h-2.569c-.411,0-.823-.006-1.234,0a.647.647,0,0,0-.651.658.674.674,0,0,0,.765.674q3.681,0,7.362,0a1.219,1.219,0,0,0,.241-.022.645.645,0,0,0,.519-.594.656.656,0,0,0-.712-.718Q404.212,361.159,402.352,361.162ZM404.205,365c-.64,0-1.28,0-1.92,0a.668.668,0,1,0,.012,1.333c1.253,0,2.506,0,3.759,0a1.127,1.127,0,0,0,.141-.008.666.666,0,0,0-.113-1.326C405.458,365,404.832,365,404.205,365Z"
          transform="translate(-0.012)"
        />
        <path
          class="a"
          d="M399.073,637.569a3.747,3.747,0,0,1-.467-.341q-1.938-1.924-3.861-3.863a1.015,1.015,0,0,1-.273-.455.639.639,0,0,1,.632-.765q2.074-.01,4.147,0a.632.632,0,0,1,.631.635q.009,2.074,0,4.147a.684.684,0,0,1-.525.642Z"
          transform="translate(0 -268.097)"
        />
      </g>
    </svg>
  );
};

const Profile = () => {
  return (
    <svg
      className="profilebtn"
      xmlns="http://www.w3.org/2000/svg"
      width="18.313"
      height="20.201"
      viewBox="0 0 18.313 20.201"
    >
      <defs></defs>
      <g transform="translate(-366.692 -348.75)">
        <path
          class="a"
          d="M367.129,348.75H382a.705.705,0,0,1,.466.757q-.009,5.206,0,10.413v.238h-5.514c-.529,0-.746.215-.746.737q0,2.643,0,5.285v.239h-8.745c-.554,0-.763-.208-.763-.76q0-8.056-.005-16.112A.772.772,0,0,1,367.129,348.75Zm11.493,5.506a1.891,1.891,0,0,0-.274-2.5,1.852,1.852,0,0,0-3.012.876,1.826,1.826,0,0,0,.279,1.624,2.681,2.681,0,0,0-1.238,1.8,9.75,9.75,0,0,0-.067,1.433.605.605,0,0,0,.687.691h2.425c.624,0,1.249,0,1.873,0a.562.562,0,0,0,.613-.495,9.472,9.472,0,0,0-.025-1.475A2.712,2.712,0,0,0,378.622,354.256Zm-6.583,6.452c.723,0,1.447,0,2.17,0a.587.587,0,0,0,.645-.593.6.6,0,0,0-.651-.59c-.408,0-.815,0-1.223,0q-1.538,0-3.077,0a.592.592,0,0,0-.643.44.582.582,0,0,0,.59.741C370.579,360.712,371.309,360.708,372.039,360.708Zm0,2.535c.73,0,1.46.005,2.189,0a.586.586,0,0,0,.587-.8.608.608,0,0,0-.65-.379q-2.12,0-4.241,0a1.143,1.143,0,0,0-.177.013.589.589,0,0,0,.14,1.169C370.6,363.246,371.32,363.243,372.037,363.243Zm-.926-6.25c-.413,0-.827,0-1.24,0a.592.592,0,1,0,0,1.182q1.22.006,2.441,0a.592.592,0,1,0,0-1.182C371.912,356.991,371.512,356.993,371.111,356.993Zm-.019-2.532v0c-.407,0-.814,0-1.22,0a.59.59,0,1,0-.015,1.179c.827.009,1.653.005,2.48,0a.588.588,0,0,0,.055-1.174C371.959,354.448,371.525,354.462,371.092,354.462Zm0-1.365v0c.407,0,.814,0,1.22,0a.591.591,0,1,0,.019-1.179c-.827-.008-1.653,0-2.48,0a.578.578,0,0,0-.5.235.587.587,0,0,0-.059.615.525.525,0,0,0,.5.327C370.228,353.1,370.661,353.1,371.094,353.1Z"
        />
        <path
          class="a"
          d="M415.357,414.654a.683.683,0,0,1-.464-.757c.011-.189,0-.378,0-.592h.251c2.387,0,4.773,0,7.16,0a2.022,2.022,0,0,0,1.517-.625q2.431-2.451,4.881-4.882a1.985,1.985,0,0,0,.611-1.483q-.007-4.527,0-9.054V397a8.261,8.261,0,0,1,.858.006.564.564,0,0,1,.491.559c0,.072,0,.145,0,.217q0,8.038.005,16.075a.771.771,0,0,1-.437.8Z"
          transform="translate(-45.664 -45.702)"
        />
        <path
          class="a"
          d="M574.894,588.4l-4.632,4.632V588.4Z"
          transform="translate(-192.861 -227.041)"
        />
        <path
          class="a"
          d="M533.924,469.468a1.662,1.662,0,0,1,.794-1.747,1.547,1.547,0,0,1,1.729.054,1.649,1.649,0,0,1,.692,1.693Z"
          transform="translate(-158.422 -112.487)"
        />
        <path
          class="a"
          d="M553.357,420.189a.669.669,0,0,1-.677.673.676.676,0,0,1-.669-.665.668.668,0,0,1,.671-.682A.66.66,0,0,1,553.357,420.189Z"
          transform="translate(-175.57 -67.044)"
        />
      </g>
    </svg>
  );
};
const preventDefault = (event) => event.preventDefault();

const LinkedInIcon = () => {
  return (
    <svg
      className="linkedinicon iconrightspacing"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(-826 -990)">
        <path
          class="a"
          d="M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12Z"
          transform="translate(826 990)"
        />
        <g transform="translate(832.566 996.615)">
          <path
            class="b"
            d="M2.393,1.2a1.2,1.2,0,1,1-.35-.846,1.2,1.2,0,0,1,.35.846Zm.036,2.082H.036v7.49H2.429Zm3.781,0H3.829v7.49H6.186V6.839c0-2.19,2.854-2.393,2.854,0v3.931H11.4V6.025c0-3.691-4.224-3.554-5.217-1.741L6.21,3.279Z"
            transform="translate(0 0)"
          />
        </g>
      </g>
    </svg>
  );
};

const FaceBookIcon = () => {
  return (
    <svg
      className="facebookicon iconrightspacing"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <style></style>
      </defs>
      <g transform="translate(-987 -990)">
        <path
          class="a"
          d="M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12Z"
          transform="translate(987 990)"
        />
        <g transform="translate(996.234 996.653)">
          <g transform="translate(0)">
            <path
              class="b"
              d="M4.975,5.611H3.438v5.633H1.108V5.611H0V3.632H1.108V2.351A2.185,2.185,0,0,1,3.458,0L5.184.007V1.929H3.932a.474.474,0,0,0-.494.54V3.634H5.179Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const TwitterIcon = () => {
  return (
    <svg
      className="twittericon iconrightspacing"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(-1159 -989)">
        <path
          class="a"
          d="M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12Z"
          transform="translate(1159 989)"
        />
        <g transform="translate(1164 994)">
          <path
            class="b"
            d="M2.961,9.332A6.458,6.458,0,0,0,9.635,2.915,4.719,4.719,0,0,0,10.5,1.258a.257.257,0,0,0-.362-.3,1.1,1.1,0,0,1-.666.092A1.1,1.1,0,0,1,8.876.739,2.269,2.269,0,0,0,5.621.64,2.409,2.409,0,0,0,4.95,2.915,5.086,5.086,0,0,1,.581.832a.251.251,0,0,0-.437.14A5.647,5.647,0,0,0,2.827,6.835,3.926,3.926,0,0,1,.22,8.165a.263.263,0,0,0-.082.49A6.417,6.417,0,0,0,2.961,9.332Z"
            transform="translate(1.752 2.335)"
          />
        </g>
      </g>
    </svg>
  );
};

const InstaIcon = () => {
  return (
    <svg
      className="instaicon iconrightspacing"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(-1319 -988)">
        <path
          class="a"
          d="M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12Z"
          transform="translate(1319 988)"
        />
        <g transform="translate(1324 993)">
          <path
            class="b"
            d="M10.471,3.106a3.809,3.809,0,0,0-.244-1.293A2.689,2.689,0,0,0,8.69.277,3.853,3.853,0,0,0,7.415.032C6.854.007,6.676,0,5.252,0S3.645,0,3.088.032A3.854,3.854,0,0,0,1.813.277,2.687,2.687,0,0,0,.277,1.813,3.823,3.823,0,0,0,.033,3.088C.008,3.649,0,3.827,0,5.252S0,6.858.033,7.416A3.847,3.847,0,0,0,.277,8.692a2.689,2.689,0,0,0,1.536,1.535,3.841,3.841,0,0,0,1.275.262c.562.025.74.033,2.164.033s1.607,0,2.164-.033a3.844,3.844,0,0,0,1.275-.244,2.692,2.692,0,0,0,1.536-1.536,3.842,3.842,0,0,0,.244-1.276c.025-.561.033-.739.033-2.164s0-1.605-.034-2.164ZM5.248,7.946a2.7,2.7,0,1,1,1.907-.79,2.7,2.7,0,0,1-1.907.79Zm2.8-4.864a.629.629,0,1,1,.628-.629A.628.628,0,0,1,8.052,3.081Z"
            transform="translate(1.749 1.739)"
          />
          <path
            class="b"
            d="M3.5,1.752A1.752,1.752,0,1,1,1.752,0,1.752,1.752,0,0,1,3.5,1.752Z"
            transform="translate(5.244 5.236)"
          />
        </g>
      </g>
    </svg>
  );
};

const YoutubeIcon = () => {
  return (
    <svg
      className="youtubeicon iconrightspacing"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(12231 -5313)">
        <circle
          class="a"
          cx="12"
          cy="12"
          r="12"
          transform="translate(-12231 5313)"
        />
        <g transform="translate(2131.388 -11393.611)">
          <g class="b" transform="translate(-14356.388 16712.611)">
            <rect class="d" width="12" height="12" />
            <rect class="e" x="0.5" y="0.5" width="11" height="11" />
          </g>
          <g transform="translate(-14355.981 16714.697)">
            <path
              class="c"
              d="M10.959,1.231A1.4,1.4,0,0,0,9.974.244,32.768,32.768,0,0,0,5.6,0,33.98,33.98,0,0,0,1.22.226a1.431,1.431,0,0,0-.987.994A14.81,14.81,0,0,0,0,3.91,14.719,14.719,0,0,0,.227,6.6a1.4,1.4,0,0,0,.985.986,32.831,32.831,0,0,0,4.376.244,34.057,34.057,0,0,0,4.377-.225,1.406,1.406,0,0,0,.988-.985,14.743,14.743,0,0,0,.233-2.689,14.02,14.02,0,0,0-.227-2.7ZM4.477,5.592l0-3.353,2.91,1.68L4.477,5.592Z"
              transform="translate(0 0)"
            />
          </g>
        </g>
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

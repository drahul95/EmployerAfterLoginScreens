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
  Container,
  Menu,
  Fade,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddIcon from "@material-ui/icons/Add";
import SchoolSMLIMG from "../../images/profile_schl.png";
import PropTypes from "prop-types";
import Filter from "./Filter";
import SuggestedCandidateSection from "./SuggestedCandidateSection";
import Searchcandidateempty from "./Searchcandidateempty";

require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function SearchCandidate() {
  const [value, setValue] = React.useState(0);

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
      <Box className="pagecontentarea searchcandcontent">
        <Container maxWidth="lg">
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={12}>
              <Box component="div" className="searchareadiv BoxShadow">
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
                <Box component="div" className="fullwidth_100percent mt-4">
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                  >
                    <Grid item lg={6} md={6} xs={12}>
                      <Typography variant="span" className="label font14">
                        Hiring For
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
                          params.InputProps.placeholder = "Select Hiring For";
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
                        Search for my Job Posting (Optional)
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
                          params.inputProps.className = "noborderinput";
                          params.InputProps.className = "noBeforeAfter";
                          params.InputProps.placeholder =
                            "Select from my Job Posting";
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
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box component="div" className="tabstrcuturedefault">
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
                      className="appbar_btn"
                    />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} className="appbar_tabpanel">
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Grid item lg={3} md={12} xs={12}>
                      <Filter />
                    </Grid>
                    <Grid item lg={9} md={12} xs={12}>
                      <SuggestedCandidateSection />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} className="appbar_tabpanel">
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Grid item lg={3} md={12} xs={12}>
                      <Filter />
                    </Grid>
                    <Grid item lg={9} md={12} xs={12}>
                      <Searchcandidateempty />
                    </Grid>
                  </Grid>
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default SearchCandidate;

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

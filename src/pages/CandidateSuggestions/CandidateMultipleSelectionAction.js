import React from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Fade,
  Backdrop,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import UsingCreditsModalInvite from "../UsingCreditsModal/UsingCreditsModalInvite";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

function CandidateMultipleSelectionAction() {
  const [openInvite, setOpenInvite] = React.useState(false);

  const handleOpenInvite = (e) => {
    setOpenInvite(true);
    e.stopPropagation();
  };

  const handleCloseInvite = (e) => {
    setOpenInvite(false);
    e.stopPropagation();
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

  const [openremovemodal, setOpenremovemodal] = React.useState(false);

  const handleOpenremovemodal = (e) => {
    setOpenremovemodal(true);
    e.stopPropagation();
  };

  const handleCloseremovemodal = (e) => {
    setOpenremovemodal(false);
    e.stopPropagation();
  };

  const [openmodalpostjob, setOpenModalpostjob] = React.useState(false);

  const handlepostjobOpen = () => {
    setOpenModalpostjob(true);
  };

  const handlepostjobClose = () => {
    setOpenModalpostjob(false);
  };
  return (
    <>
      <Box component="div" className="dis_flex mt-3 multi-selection">
        <Box component="div" className="dis_flex opacity_half ">
          <Box component="div" className="buttondiv dis_flex">
            <Box component="div" className="">
              <Box component="div">
                
                <FormControlLabel control={<Checkbox
                  icon={<CircleUnchecked />}
                  checkedIcon={<CircleCheckedFilled />}
                />} label="Select All" />
              </Box>
            </Box>
            <Button
              startIcon={<InviteIconCand />}
              className="greencolor whitecolortext border8"
              onClick={handlepostjobOpen}
            >
              Invite Selected
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
                    Are you sure you want to Invite the selected candidate?
                  </Typography>
                  <Box component="div" className="button_confirm_area">
                    <Button
                      className="lightbluecolor border8"
                      onClick={handleCloseInvite}
                    >
                      No
                    </Button>
                    <Button
                      className="darkbluecolor whitecolortext border8"
                      onClick={(e) => {
                        handleCloseInvite();
                      }}
                    >
                      Yes
                    </Button>
                  </Box>
                </div>
              </Fade>
            </Modal>
            <Button
              startIcon={<SaveWhiteIcon />}
              className="darkbluecolor whitecolortext border8"
              onClick={handleOpensavemodal}
            >
              Save Selected
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
                    Are you sure you want to save the selected candidate?
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
            <Button
              startIcon={<RemoveIcon />}
              className="redcolor whitecolortext border8"
              onClick={handleOpenremovemodal}
            >
              Remove Selected
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className="modal"
              open={openremovemodal}
              onClose={handleCloseremovemodal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openremovemodal}>
                <div className="modalcontsmall">
                  <RemoveBg />
                  <Typography variant="h6">
                    Are you sure you want to remove the selected candidate?
                  </Typography>
                  <Box component="div" className="button_confirm_area">
                    <Button
                      className="lightbluecolor border8"
                      onClick={handleCloseremovemodal}
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
        <Box component="div" className="dis_flex sortbydiv marginautoright">
          <Box component="div" className="ms-2 mt-2">
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              startIcon={<SortIcon />}
              className="sortbybtn"
            >
              Sort By
            </Button>
          </Box>
          <Autocomplete
            id="combo-box-demo"
            className="WhiteSelectDropdown ms-2"
            options={sortby}
            getOptionLabel={(option) => option.name}
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
        <Fade in={openmodalpostjob}>
          <UsingCreditsModalInvite />
        </Fade>
      </Modal>
    </>
  );
}
export default CandidateMultipleSelectionAction;

const RemoveBg = () => {
  return (
    <svg
      className="remove_bg"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <defs></defs>
      <path
        class="a"
        d="M20,0A20,20,0,1,0,40,20,20.022,20.022,0,0,0,20,0Zm0,0"
      />
      <path
        class="b"
        d="M170.8,168.428a1.679,1.679,0,1,1-2.374,2.374l-5.045-5.046-5.045,5.046a1.679,1.679,0,0,1-2.374-2.374l5.045-5.045-5.045-5.045a1.679,1.679,0,1,1,2.374-2.374l5.045,5.045,5.045-5.045a1.679,1.679,0,0,1,2.374,2.374l-5.045,5.045Zm0,0"
        transform="translate(-143.383 -143.383)"
      />
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

const SortIcon = () => {
  return (
    <svg
      className="sort_icon"
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
const SaveWhiteIcon = () => {
  return (
    <svg
      className="save-white"
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

const RemoveIcon = () => {
  return (
    <svg
      className="remove_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <path
        class="a"
        d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,0"
      />
      <path
        class="b"
        d="M164.6,163.188a1,1,0,1,1-1.414,1.414l-3-3.005-3,3.005a1,1,0,0,1-1.414-1.414l3.005-3-3.005-3a1,1,0,0,1,1.414-1.414l3,3.005,3-3.005a1,1,0,0,1,1.414,1.414l-3.005,3Zm0,0"
        transform="translate(-148.184 -148.183)"
      />
    </svg>
  );
};
const sortby = [
  { name: "Profile Relevance", id: 1 },
  { name: "Relevant Experience", id: 2 },
  { name: "Min. Expected Salary", id: 3 },
  { name: "Notice Period", id: 4 },
  { name: "Number of Skills Matched", id: 5 },
];

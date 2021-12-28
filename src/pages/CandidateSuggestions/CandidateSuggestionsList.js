import React from "react";
import { Box, Popover, Modal, Backdrop, Button, Fade, Typography } from "@material-ui/core";
import CandidateDetailsPopper from "../CandidateDetailsPopper/CandidateDeatilsPopper";
import LockedCandidateDetailsPopper from "../LockedCandidateDetailsPopper/LockedCandidateDeatilsPopper";
import CandidateMultipleSelectionAction from "./CandidateMultipleSelectionAction";
import CandidateExcelDivArea from "./CandidateExcelDivArea";
import LockedCandidateCard from "../LockedCandidateCard/LockedCandidateCard";
import UnlockedCandidateCard from "../UnlockedCandidateCard/UnlockedCandidateCard";


function CandidateSuggestionsList() {
  const [open] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [iscandidat, setIscandidat] = React.useState(null);
  const [iscandidatlocked, setIscandidatlocked] = React.useState(null);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const [openInvite, setOpenInvite] = React.useState(false);

  const handleOpenInvite = (e) => {
    setOpenInvite(true);
    e.stopPropagation();
  };

  const handleCloseInvite = (e) => {
    setOpenInvite(false);
    e.stopPropagation();
  };

      

  return (
    <Box component="div" className="sugcandidiv">
      <CandidateExcelDivArea />
      <CandidateMultipleSelectionAction />
      {/* Unlock Candidate Area */}
      <Box
        component="div"
        className="sugscrolltabs"
        // onClick={(e) => setIscandidat(e.target)}
      >
        <UnlockedCandidateCard unlockcandidatepopper={(e) => setIscandidat(e.target)}/>
      </Box>

      {/* Lock Candidate Area */}
      <Box
        component="div"
        className="sugscrolltabs"
        // onClick={(e) => setIscandidat(e.target)}
      >
        <LockedCandidateCard lockedcandidatepopper={(e) => setIscandidatlocked(e.target)} />
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
      <Popover
        id="userProfile"
        open={Boolean(iscandidatlocked)}
        anchorEl={iscandidatlocked}
        onClose={(e) => setIscandidatlocked(null)}
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
        <LockedCandidateDetailsPopper />
      </Popover>
      {/* <Modal
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
                onClick={
                  handleCloseInvite
                }
              >
                No
              </Button>
              <Button className="darkbluecolor whitecolortext border8">
                Yes
              </Button>
            </Box>
          </div>
        </Fade>
      </Modal> */}
      {/* Confirmation for Unlocking the candidate */}
    </Box>
  );
}

export default CandidateSuggestionsList;
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
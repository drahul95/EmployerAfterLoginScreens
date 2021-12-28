import React from "react";
import {
  Typography,
  Box,
  MenuItem,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function CandidateMultipleSelectionAction() {
  const [openremovemodal2, setOpenremovemodal2] = React.useState(false);

  const handleOpenremovemodal2 = () => {
    setOpenremovemodal2(true);
  };

  const handleCloseremovemodal2 = () => {
    setOpenremovemodal2(false);
  };

  const [opendownload] = React.useState();

  const [opendownload2, setOpendownload2] = React.useState(false);
  const anchorRefdownload2 = React.useRef(null);

  const handleToggledownload2 = () => {
    setOpendownload2((prevOpen) => !prevOpen);
  };

  const handleClosedownload2 = (event) => {
    if (
      anchorRefdownload2.current &&
      anchorRefdownload2.current.contains(event.target)
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

  const [openProfileModal2, setOpenProfileModal2] = React.useState(false);

  const handleOpenProfileModal2 = () => {
    setOpenProfileModal2(true);
  };

  const handleCloseProfileModal2 = () => {
    setOpenProfileModal2(false);
  };

  const [openShortlist, setOpenShortlist] = React.useState(false);

  const handleOpenShortlist = () => {
    setOpenShortlist(true);
  };

  const handleCloseShortlist = () => {
    setOpenShortlist(false);
  };
  const [openHold, setOpenHold] = React.useState(false);

  const handleOpenHold = () => {
    setOpenHold(true);
  };

  const handleCloseHold = () => {
    setOpenHold(false);
  };
  return (
    <Box component="div" className="dis_flex mt-3">
      <Box component="div" className="top-2">
        <CloseIcon className="top-2" />
        <Typography variant="span" className="ms-2">
          2 Selected
        </Typography>
      </Box>
      <Box component="div" className="marginautoright buttondiv">
        <Button
          startIcon={<HoldSignIcon />}
          className="holdbtn2"
          onClick={handleOpenHold}
        >
          Hold
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modal"
          open={openHold}
          onClose={handleCloseHold}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openHold}>
            <div className="modalcontsmall">
              <HoldIconBg />
              <Typography variant="h6">
                Are you sure you want to Hold the selected candidate(s)?
              </Typography>
              <Box component="div" className="button_confirm_area">
                <Button
                  className="lightbluecolor border8"
                  onClick={handleCloseHold}
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
          startIcon={<ShortListIcon />}
          className="greencolor whitecolortext border8"
          onClick={handleOpenShortlist}
        >
          Shortlist
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modal"
          open={openShortlist}
          onClose={handleCloseShortlist}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openShortlist}>
            <div className="modalcontsmall">
              <Typography variant="h6">
                Are you sure you want to Shortlist the selected candidate(s)?
              </Typography>
              <Box component="div" className="button_confirm_area">
                <Button
                  className="lightbluecolor border8"
                  onClick={handleCloseShortlist}
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
          className="redcolor whitecolortext border8 pe-4 ps-4"
          endIcon={<RemoveIcon />}
          onClick={handleOpenremovemodal2}
        >
          Remove
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modal"
          open={openremovemodal2}
          onClose={handleCloseremovemodal2}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openremovemodal2}>
            <div className="modalcontsmall">
              <RemoveBg />
              <Typography variant="h6">
                Are you sure you want to remove the selected candidate(s)?
              </Typography>
              <Box component="div" className="button_confirm_area">
                <Button
                  className="lightbluecolor border8"
                  onClick={handleCloseremovemodal2}
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
                          <Box component="div" className="button_confirm_area">
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
      </Box>
    </Box>
  );
}
export default CandidateMultipleSelectionAction;

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
const HoldSignIcon = () => {
  return (
    <svg
      className="holdsignicon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(-348.75 -348.75)">
        <path
          class="a"
          d="M372.75,360.047v1.406c-.014.068-.029.136-.041.2-.133.767-.205,1.55-.406,2.3a11.948,11.948,0,0,1-9.509,8.612c-.444.075-.893.122-1.34.182h-1.406c-.154-.018-.307-.038-.461-.054a12.015,12.015,0,0,1-10.653-9.9c-.077-.444-.123-.893-.183-1.339v-1.406c.028-.222.058-.444.084-.667a11.994,11.994,0,0,1,9.895-10.45c.437-.074.879-.121,1.318-.18h1.406a1.645,1.645,0,0,0,.2.04,11.031,11.031,0,0,1,4.013,1.019,11.838,11.838,0,0,1,6.9,8.921C372.652,359.165,372.691,359.608,372.75,360.047Zm-1.972.708a10.028,10.028,0,1,0-10.045,10.023A10.048,10.048,0,0,0,370.778,360.755Z"
        />
        <path
          class="a"
          d="M559.077,473.447c0,1.145,0,2.291,0,3.436a1,1,0,0,1-.843,1.056.987.987,0,0,1-1.129-.847A.9.9,0,0,1,557.1,477q0-3.554,0-7.108a.956.956,0,0,1,.729-.928.991.991,0,0,1,1.247,1.025C559.081,471.141,559.077,472.294,559.077,473.447Z"
          transform="translate(-195.331 -112.69)"
        />
        <path
          class="a"
          d="M494.849,473.449c0,1.169.006,2.338,0,3.507a.979.979,0,0,1-1.251.963,1,1,0,0,1-.726-1.009c0-1.02,0-2.04,0-3.06,0-1.287,0-2.573,0-3.86a.992.992,0,0,1,1.248-1.024.978.978,0,0,1,.731,1C494.852,471.126,494.85,472.287,494.849,473.449Z"
          transform="translate(-135.114 -112.693)"
        />
      </g>
    </svg>
  );
};
const HoldIconBg = () => {
  return (
    <svg
      className="hold_bg"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <defs></defs>
      <g transform="translate(-357.767 -363.75)">
        <path
          class="a"
          d="M377.754,363.75a20,20,0,1,1-19.987,19.913A19.946,19.946,0,0,1,377.754,363.75Z"
          transform="translate(0 0)"
        />
        <path
          class="b"
          d="M406.935,396.664a16.314,16.314,0,1,1-16.311,16.317A16.318,16.318,0,0,1,406.935,396.664Z"
          transform="translate(-29.169 -29.219)"
        />
        <path
          class="a"
          d="M472.614,477.695c0-2.077.026-4.154-.009-6.23a1.976,1.976,0,0,1,2.158-2.163c.446.036.9,0,1.346.009a1.835,1.835,0,0,1,1.8,1.621,4.1,4.1,0,0,1,.038.545q0,6.23,0,12.459a2.22,2.22,0,0,1-.456,1.536,1.893,1.893,0,0,1-1.441.673c-.463.013-.926.006-1.389,0a1.922,1.922,0,0,1-2.051-2.056C472.61,481.96,472.614,479.827,472.614,477.695Z"
          transform="translate(-102.144 -93.97)"
        />
        <path
          class="a"
          d="M561.783,477.807q0,3.177,0,6.354a1.906,1.906,0,0,1-2.076,2.062c-.449,0-.9.011-1.346,0a1.882,1.882,0,0,1-1.886-1.912q-.01-6.522,0-13.045a1.855,1.855,0,0,1,1.865-1.878q.778-.015,1.557,0a1.852,1.852,0,0,1,1.882,1.9C561.79,473.458,561.783,475.632,561.783,477.807Z"
          transform="translate(-176.74 -94.043)"
        />
      </g>
    </svg>
  );
};
const ShortListIcon = () => {
  return (
    <svg
      className="shortlist"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(0 0)">
        <path
          class="a"
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Z"
          transform="translate(0 0)"
        />
        <path
          class="b"
          d="M11.576.265,4.939,6.194,1.777,3.132A1.089,1.089,0,0,0,.317,3.1.932.932,0,0,0,.282,4.467L4.174,8.214a1.1,1.1,0,0,0,.73.293,1.242,1.242,0,0,0,.73-.261l7.4-6.581A.9.9,0,0,0,13.07.3,1.134,1.134,0,0,0,11.576.265Z"
          transform="translate(5.317 7.747)"
        />
      </g>
    </svg>
  );
};

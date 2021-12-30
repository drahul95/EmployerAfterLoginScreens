import React from "react";
import { Typography, Box, Button, Backdrop } from "@material-ui/core";
function PauseJobPost() {
  const [openmodalPausejobPost, setOpenModalPausejobPost] = React.useState(false);

  const handlePausejobPostOpen = () => {
    setOpenModalPausejobPost(true);
  };

  const handlePausejobPostClose = () => {
    setOpenModalPausejobPost(false);
  };
  return (
    <Box component="div" className="modalcontsmall px-20 text-center">
      <PauseIcon />
      <Box component="div" className="maincontjobpost">
        <Typography
          variant="span"
          className="font16 block text-center line-height-1-5 mt-3 mb-2"
        >
          Are you sure you want<br/> to Pause this Job Post?
        </Typography>
        <Typography
          variant="span"
          className="font12 block text-center line-height-1-5 italic mb-3"
        >
          *Please note that you shall stop receiving applications if you Pause the Job Post
        </Typography>
        <Box component="div" className="buttonareadiv dis_flex">
          <Button
            className="border8 lightbluecolor blackcolortext me-3"
            onClick={(e) => {
              handlePausejobPostClose();
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
              handlePausejobPostClose();
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
  );
}
export default PauseJobPost;

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

const PauseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="mt-3"
    >
      <g
        id="Group_3995"
        data-name="Group 3995"
        transform="translate(-357.767 -363.75)"
      >
        <path
          id="Path_2997"
          data-name="Path 2997"
          d="M377.754,363.75a20,20,0,1,1-19.987,19.913A19.946,19.946,0,0,1,377.754,363.75Z"
          transform="translate(0 0)"
          fill="#f6b333"
        />
        <path
          id="Path_2998"
          data-name="Path 2998"
          d="M406.935,396.664a16.314,16.314,0,1,1-16.311,16.317A16.318,16.318,0,0,1,406.935,396.664Z"
          transform="translate(-29.169 -29.219)"
          fill="#fff"
        />
        <path
          id="Path_2999"
          data-name="Path 2999"
          d="M472.614,477.695c0-2.077.026-4.154-.009-6.23a1.976,1.976,0,0,1,2.158-2.163c.446.036.9,0,1.346.009a1.835,1.835,0,0,1,1.8,1.621,4.1,4.1,0,0,1,.038.545q0,6.23,0,12.459a2.22,2.22,0,0,1-.456,1.536,1.893,1.893,0,0,1-1.441.673c-.463.013-.926.006-1.389,0a1.922,1.922,0,0,1-2.051-2.056C472.61,481.96,472.614,479.827,472.614,477.695Z"
          transform="translate(-102.144 -93.97)"
          fill="#f6b333"
        />
        <path
          id="Path_3000"
          data-name="Path 3000"
          d="M561.783,477.807q0,3.177,0,6.354a1.906,1.906,0,0,1-2.076,2.062c-.449,0-.9.011-1.346,0a1.882,1.882,0,0,1-1.886-1.912q-.01-6.522,0-13.045a1.855,1.855,0,0,1,1.865-1.878q.778-.015,1.557,0a1.852,1.852,0,0,1,1.882,1.9C561.79,473.458,561.783,475.632,561.783,477.807Z"
          transform="translate(-176.74 -94.043)"
          fill="#f6b333"
        />
      </g>
    </svg>
  );
};

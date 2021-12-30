import React from "react";
import { Typography, Box, Button, Backdrop } from "@material-ui/core";
function RepostJobPost() {
  const [openmodalRepostjobPost, setOpenModalRepostjobPost] =
    React.useState(false);

  const handleRepostjobPostOpen = () => {
    setOpenModalRepostjobPost(true);
  };

  const handleRepostjobPostClose = () => {
    setOpenModalRepostjobPost(false);
  };

  const [openmodalEditJobPost, setOpenModalEditJobPost] = React.useState(false);

  const handleEditJobPostOpen = () => {
    setOpenModalEditJobPost(true);
  };

  return (
    <Box component="div" className="modalcontsmall px-20 text-center">
      <RepostIcon />
      <Box component="div" className="maincontjobpost">
        <Typography
          variant="span"
          className="font16 block text-center line-height-1-5 mt-3 mb-2"
        >
          Are you sure you want
          <br /> to Repost this Job Post?
        </Typography>
        <Box component="div" className="buttonareadiv dis_flex">
          <Button
            className="border8 lightbluecolor blackcolortext me-3"
            onClick={(e) => {
              handleRepostjobPostClose();
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
              handleRepostjobPostClose();
              handleEditJobPostOpen();
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
export default RepostJobPost;

const RepostIcon = () => {
  return (
    <svg
      id="Group_694"
      data-name="Group 694"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g
        id="Rectangle_454"
        data-name="Rectangle 454"
        fill="#fff"
        stroke="#707070"
        stroke-width="1"
        opacity="0"
      >
        <rect width="40" height="40" stroke="none" />
        <rect x="0.5" y="0.5" width="39" height="39" fill="none" />
      </g>
      <g
        id="Group_7135"
        data-name="Group 7135"
        transform="translate(-1674 -814)"
      >
        <g id="progress-arrows" transform="translate(1677 817)">
          <path
            id="Path_4031"
            data-name="Path 4031"
            d="M7.455,30.2a.6.6,0,0,1-.42-.169L.171,23.151a.585.585,0,0,1,0-.825l6.864-6.891a.588.588,0,0,1,.64-.126.577.577,0,0,1,.361.542v4.261h18.81a.946.946,0,0,0,.945-.942v-4.8a.6.6,0,0,1,.168-.416l4.593-4.611a.588.588,0,0,1,1,.416V20.189c0,3.724-1.968,5.69-5.689,5.69H8.037V29.62a.575.575,0,0,1-.361.536A.594.594,0,0,1,7.455,30.2Z"
            transform="translate(0 3.112)"
            fill="#f6b333"
          />
          <path
            id="Path_4032"
            data-name="Path 4032"
            d="M1.342,21.5a.595.595,0,0,1-.588-.587V10.49C.754,6.765,2.718,4.8,6.443,4.8H26.281V1.051a.6.6,0,0,1,.361-.543.589.589,0,0,1,.642.13l6.861,6.877a.587.587,0,0,1,0,.829L27.284,15.23a.576.576,0,0,1-.64.128.585.585,0,0,1-.361-.544V10.562H7.46a.94.94,0,0,0-.937.944v4.8a.591.591,0,0,1-.175.418l-4.6,4.606A.567.567,0,0,1,1.342,21.5Z"
            transform="translate(0.309 -0.464)"
            fill="#f6b333"
          />
        </g>
      </g>
    </svg>
  );
};

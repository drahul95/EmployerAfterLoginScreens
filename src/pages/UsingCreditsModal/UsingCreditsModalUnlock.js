import React from "react";
import {
  Typography,
  Box,
  Button,
  Backdrop,
  Modal,
  Fade,
} from "@material-ui/core";
function UsingCreditsModal() {
  const [openmodalunlockmodal, setOpenModalunlockmodal] = React.useState(false);

  const handleunlockmodalOpen = () => {
    setOpenModalunlockmodal(true);
  };

  const handleunlockmodalClose = () => {
    setOpenModalunlockmodal(false);
  };

  const [openmodalUnlockedSuccess, setOpenModalUnlockedSuccess] =
    React.useState(false);

  const handleUnlockedSuccessOpen = () => {
    setOpenModalUnlockedSuccess(true);
  };

  const handleUnlockedSuccessClose = () => {
    setOpenModalUnlockedSuccess(false);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalunlockmodal}
        onClose={handleunlockmodalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalunlockmodal}>
          <Box component="div" className="modalcontsmall pt-4 text-center">
            <UnlockedIcon />
            <Typography
              variant="span"
              id="transition-modal-description"
              className="mb-2 mt-3 font16 text-center block"
            >
              Are you sure you want to Unlock the selected candidate(s)?
            </Typography>
            <Box component="div" className="maincontjobpost">
              <Typography
                variant="span"
                className="font16 block mb-2 fontweight500"
              >
                Available Credits : 100.
              </Typography>
              <Typography
                variant="span"
                className="mb-2 font16 block fontweight500"
              >
                To Be Used :{" "}
                <Typography
                  variant="span"
                  className="fontweight700 me-1 ms-1 font16"
                >
                  80
                </Typography>
                .
              </Typography>
              <Typography variant="span" className="font14 italic block mb-3">
                (8 Candidates * 10 Credits each)
              </Typography>
              <Box
                component="div"
                className="dis_flex buttonareadiv"
                justifyContent="space-between"
              >
                <Button
                  className="border8 me-3 lightbluecolor"
                  onClick={(e) => {
                    handleunlockmodalClose();
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
                    handleunlockmodalClose();
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

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={openmodalUnlockedSuccess}
        onClose={handleUnlockedSuccessClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalUnlockedSuccess}>
          <Box component="div" className="modalcontmid px-20 text-center">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleUnlockedSuccessClose();
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
            <UnlockedIcon />
            <Box component="div" className="maincontjobpost">
              <Typography
                variant="span"
                className="font14 block text-center mt-3 mb-3"
              >
                Unlocked
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
export default UsingCreditsModal;

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

const UnlockedIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="62.26" height="70.483" viewBox="0 0 62.26 70.483">
  <g id="Group_694" data-name="Group 694" transform="translate(0.001 2.34)">
    <g id="Rectangle_454" data-name="Rectangle 454" transform="translate(0.13 1.598)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0">
      <rect width="62" height="62" stroke="none"/>
      <rect x="0.5" y="0.5" width="61" height="61" fill="none"/>
    </g>
    <g id="profile_1_" data-name="profile (1)" transform="translate(-0.001 -2.34)">
      <g id="Group_7063" data-name="Group 7063" transform="translate(1.175 1.175)">
        <path id="Path_4009" data-name="Path 4009" d="M89.087,9.882V70.967H39.749A2.357,2.357,0,0,1,37.4,68.618V9.882a2.357,2.357,0,0,1,2.349-2.349H86.738A2.357,2.357,0,0,1,89.087,9.882Z" transform="translate(-37.4 -7.533)" fill="#607d8b"/>
        <path id="Path_4010" data-name="Path 4010" d="M85.563,9.882V70.967H39.749A2.357,2.357,0,0,1,37.4,68.618V9.882a2.357,2.357,0,0,1,2.349-2.349H83.214A2.356,2.356,0,0,1,85.563,9.882Z" transform="translate(-37.4 -7.533)" fill="#f6b333"/>
        <path id="Path_4011" data-name="Path 4011" d="M144.943,65.471a15.271,15.271,0,0,1-15.271,15.271,14.5,14.5,0,0,1-1.762-.106,15.271,15.271,0,0,1,0-30.331,14.5,14.5,0,0,1,1.762-.106A15.271,15.271,0,0,1,144.943,65.471Z" transform="translate(-103.828 -44.326)" fill="#1566c0"/>
        <path id="Path_4012" data-name="Path 4012" d="M141.2,66.132A15.282,15.282,0,0,1,127.731,81.3H127.7c-.2-.024-.4-.047-.6-.082-.329-.047-.658-.106-.975-.176l-.423-.106c-.329-.082-.658-.176-.975-.282s-.634-.223-.94-.341c-.27-.106-.529-.223-.787-.341-.117-.059-.235-.106-.341-.165-.294-.141-.564-.294-.846-.446-.341-.2-.67-.411-1-.634A15.271,15.271,0,0,1,127.7,50.966,15.272,15.272,0,0,1,141.2,66.132Z" transform="translate(-103.614 -44.987)" fill="#2296f3"/>
        <path id="Path_4014" data-name="Path 4014" d="M324.826,350.042v12.922c0,3.893-3.617,7.048-8.08,7.048h-6.733c-4.462,0-8.08-3.156-8.08-7.048V350.042a1.269,1.269,0,0,1,1.347-1.175h20.2A1.269,1.269,0,0,1,324.826,350.042Z" transform="translate(-265.517 -301.878)" fill="#2a5798"/>
        <path id="Path_4015" data-name="Path 4015" d="M222.915,242.11a15.171,15.171,0,0,1-8.6,2.655,13.887,13.887,0,0,1-1.727-.106,15.246,15.246,0,0,0,8.881-4.252A3.358,3.358,0,0,1,222.915,242.11Z" transform="translate(-188.472 -208.349)" fill="#fdd834"/>
        <path id="Path_4016" data-name="Path 4016" d="M178.679,105.889v.975a1.9,1.9,0,0,1-1.339,1.844,6.336,6.336,0,0,1-3.3,4.217.559.559,0,0,0-.317.493v.493a1.1,1.1,0,0,0,.6.975l3.606,1.844c.071.035.141.071.2.106a15.247,15.247,0,0,1-8.881,4.252,5.854,5.854,0,0,1-.634-.082c-.329-.047-.658-.106-.975-.176l-.423-.106c-.329-.082-.658-.176-.975-.282s-.634-.223-.94-.341c-.27-.106-.529-.223-.787-.341-.117-.059-.235-.106-.341-.165-.294-.141-.564-.294-.846-.446-.341-.2-.67-.411-1-.634a3.172,3.172,0,0,1,1.5-1.809l3.771-1.856a1.12,1.12,0,0,0,.623-.987v-.446a.559.559,0,0,0-.317-.493,6.467,6.467,0,0,1-3.395-4.217,1.836,1.836,0,0,1-1.245-1.844v-.975a1.835,1.835,0,0,1,.916-1.715,9.983,9.983,0,0,1,.728-2.925,5.005,5.005,0,0,0,.4-2.949,8.481,8.481,0,0,1-.141-.975.191.191,0,0,1,.341-.141,5.485,5.485,0,0,0,1.116.975,5.915,5.915,0,0,0,3.783.881c.165-.012.341-.012.517-.012,3.888,0,6.32,1.48,6.743,5.145A1.9,1.9,0,0,1,178.679,105.889Z" transform="translate(-145.129 -84.78)" fill="#f6b333"/>
        <circle id="Ellipse_147" data-name="Ellipse 147" cx="2.349" cy="2.349" r="2.349" transform="translate(45.814 52.862)" fill="#f6b333"/>
      </g>
      <g id="Group_7064" data-name="Group 7064">
        <path id="Path_4017" data-name="Path 4017" d="M113.67,72.463a1.064,1.064,0,0,0,.125.093,16.366,16.366,0,0,0,18.712-.052h.008a16.446,16.446,0,1,0-18.845-.035Zm2.388-1.258a1.922,1.922,0,0,1,.434-.345l3.778-1.853a2.3,2.3,0,0,0,1.272-2.044v-.446a1.728,1.728,0,0,0-.971-1.547,5.271,5.271,0,0,1-2.782-3.47,1.175,1.175,0,0,0-.782-.814.712.712,0,0,1-.422-.724v-.975a.732.732,0,0,1,.291-.677,1.174,1.174,0,0,0,.619-.922,8.812,8.812,0,0,1,.633-2.566,6.526,6.526,0,0,0,.563-2.247,7.275,7.275,0,0,0,3.947.735c.137-.011.284-.011.431-.009,4.523,0,5.355,2.194,5.576,4.106a1.174,1.174,0,0,0,.617.9.724.724,0,0,1,.385.677v.975a.724.724,0,0,1-.511.722,1.175,1.175,0,0,0-.789.822,5.187,5.187,0,0,1-2.691,3.467,1.724,1.724,0,0,0-.966,1.544v.493a2.265,2.265,0,0,0,1.245,2.02l3.61,1.856a2.264,2.264,0,0,1,.532.383,13.979,13.979,0,0,1-14.019-.059v-.006Zm7.058-26.28a14.089,14.089,0,0,1,8.928,25,4.57,4.57,0,0,0-1.434-1.141l-3.57-1.774v-.117a7.39,7.39,0,0,0,3.416-4.242A3.091,3.091,0,0,0,132,59.962v-.975a3.068,3.068,0,0,0-1.1-2.393c-.47-2.692-2.261-5.639-7.831-5.639-.206,0-.411,0-.61.015a4.8,4.8,0,0,1-3.038-.686,4.364,4.364,0,0,1-.866-.751,1.365,1.365,0,0,0-1.6-.382,1.339,1.339,0,0,0-.822,1.368,9.657,9.657,0,0,0,.157,1.1,3.86,3.86,0,0,1-.325,2.272,10.929,10.929,0,0,0-.751,2.729,3.089,3.089,0,0,0-.988,2.372v.975a3.063,3.063,0,0,0,1.451,2.69A7.613,7.613,0,0,0,119.2,66.91l-3.8,1.862a4.367,4.367,0,0,0-1.292,1.083,14.088,14.088,0,0,1,9-24.93Z" transform="translate(-96.098 -36.703)" fill="#2a5798"/>
        <path id="Path_4018" data-name="Path 4018" d="M89.777,46.988H88.6V43.464a9.4,9.4,0,0,0-4.7-8.127V3.524A3.524,3.524,0,0,0,80.38,0H33.391a3.524,3.524,0,0,0-3.524,3.524V62.26a3.524,3.524,0,0,0,3.524,3.524h33.7a8.223,8.223,0,0,0,7.418,4.7h9.4a8.232,8.232,0,0,0,8.223-8.223V49.338a2.35,2.35,0,0,0-2.349-2.349Zm-3.524-3.524v3.524h-14.1V43.464a7.048,7.048,0,1,1,14.1,0ZM33.391,63.434a1.175,1.175,0,0,1-1.175-1.175V3.524a1.175,1.175,0,0,1,1.175-1.175H80.379a1.175,1.175,0,0,1,1.175,1.175V34.376a9.361,9.361,0,0,0-11.747,9.089v3.524H68.632a2.349,2.349,0,0,0-2.349,2.349V62.26a8.246,8.246,0,0,0,.094,1.175H33.391Zm50.512,4.7h-9.4a5.884,5.884,0,0,1-5.756-4.7h2.232a1.175,1.175,0,1,0,0-2.349H68.632V58.736h2.349a1.175,1.175,0,1,0,0-2.349H68.632V54.037h2.349a1.175,1.175,0,1,0,0-2.349H68.632v-2.35H89.777v2.349H87.428a1.175,1.175,0,0,0,0,2.349h2.349v2.349H87.428a1.175,1.175,0,1,0,0,2.349h2.349v2.349H87.428a1.175,1.175,0,1,0,0,2.349H89.66A5.884,5.884,0,0,1,83.9,68.133Z" transform="translate(-29.867)" fill="#2a5798"/>
        <path id="Path_4019" data-name="Path 4019" d="M366.2,384a3.516,3.516,0,0,0-1.175,6.832V393.4a1.175,1.175,0,1,0,2.349,0v-2.566A3.516,3.516,0,0,0,366.2,384Zm0,4.7a1.175,1.175,0,1,1,1.175-1.175A1.175,1.175,0,0,1,366.2,388.7Z" transform="translate(-316.861 -331.138)" fill="#fff"/>
        <path id="Path_4020" data-name="Path 4020" d="M181.671,307.2h-14.1a1.175,1.175,0,0,0,0,2.349h14.1a1.175,1.175,0,0,0,0-2.349Z" transform="translate(-147.605 -264.91)" fill="#2a5798"/>
        <path id="Path_4021" data-name="Path 4021" d="M180.5,392.533H167.575a1.175,1.175,0,1,0,0,2.349H180.5a1.175,1.175,0,0,0,0-2.349Z" transform="translate(-147.605 -338.496)" fill="#2a5798"/>
        <path id="Path_4022" data-name="Path 4022" d="M114.269,349.867H90.775a1.175,1.175,0,1,0,0,2.349h23.494a1.175,1.175,0,1,0,0-2.349Z" transform="translate(-81.377 -301.704)" fill="#2a5798"/>
        <rect id="Rectangle_1935" data-name="Rectangle 1935" width="7" height="8.223" transform="translate(54.13 38.766)" fill="#fff"/>
      </g>
    </g>
  </g>
</svg>

  );
};

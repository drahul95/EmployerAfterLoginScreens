import React from "react";
import { Box, Typography } from "@material-ui/core";
import CandBg from "../../images/candbg.svg";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Searchcandidateempty() {
  return (
    <Box component="div" className="pt-4 pb-4 text-center ">
      <img src={BASE_URL + CandBg} alt="" />
      <Typography variant="span" className="font22 block text-center mt-4">
        No Search Results Found
      </Typography>
    </Box>
  );
}
export default Searchcandidateempty;

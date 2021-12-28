import React from "react";
import { Box, Typography } from "@material-ui/core";
import SuggEmptyBg from "../../images/sug_empty.svg";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function CandidateSuggestionsEmpty() {
  return (
    <Box component="div" className="pt-4 pb-4 text-center ">
      <img src={BASE_URL + SuggEmptyBg} alt="" />
      <Typography variant="span" className="font22 block text-center mt-4">
        Sorry! No Results Found
      </Typography>
    </Box>
  );
}
export default CandidateSuggestionsEmpty;

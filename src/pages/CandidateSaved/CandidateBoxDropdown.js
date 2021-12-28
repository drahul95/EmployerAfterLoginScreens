import React from "react";
import "./CandidateSaved.scss";
import { Box, Button, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

function CandidateBoxDropdown() {
  return (
    <Box component="div" className="autocompdiv dis_flex mt-4">
      <Autocomplete
        id="combo-box-demo"
        className="WhiteSelectDropdown me-3"
        options={experience}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => {
          params.inputProps.className = "noborderinput";
          params.InputProps.className = "noBeforeAfter";
          params.InputProps.placeholder = "Institution";
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
      <Autocomplete
        id="combo-box-demo"
        className="WhiteSelectDropdown me-3"
        options={experience2}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => {
          params.inputProps.className = "noborderinput";
          params.InputProps.className = "noBeforeAfter";
          params.InputProps.placeholder = "Category";
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
      <Button
        className="redcolor whitecolortext border8 pe-4 ps-4"
        endIcon={<ResetIcon />}
      >
        Reset
      </Button>
      <Button
        className="greencolor whitecolortext border8 pe-4 ps-4 marginautoright"
        startIcon={<ExcelIcon />}
      >
        Excel Sheet
      </Button>
    </Box>
  );
}
export default CandidateBoxDropdown;
const ExcelIcon = () => {
  return (
    <svg
      className="excel_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20.361"
      height="19.674"
      viewBox="0 0 20.361 19.674"
    >
      <defs></defs>
      <g transform="translate(-348.75 -355.291)">
        <path
          class="a"
          d="M348.75,372.88V358.206c.034-.266.211-.364.453-.419,2.138-.486,4.273-.983,6.409-1.475,1.414-.325,2.826-.655,4.24-.977.63-.144.882.06.885.711,0,.212-.006.424,0,.636.009.195.075.257.269.27.079.005.159,0,.238,0H368.2c.113,0,.225,0,.338,0,.376.008.462.071.569.415v15.51c-.111.355-.191.414-.609.415q-3.618,0-7.235,0c-.52,0-.528.009-.529.538,0,.166,0,.331,0,.5a.575.575,0,0,1-.736.623c-.519-.068-1.035-.156-1.552-.235q-3.751-.576-7.5-1.153c-.57-.087-1.138-.181-1.708-.262C348.973,373.266,348.786,373.168,348.75,372.88Z"
          transform="translate(0 0)"
        />
        <path
          class="b"
          d="M415.157,471.61l1.656-2.648a2.089,2.089,0,0,1,.142-.215.417.417,0,0,1,.554-.094.423.423,0,0,1,.16.524,1.4,1.4,0,0,1-.109.189c-.6.96-1.2,1.922-1.8,2.877a.276.276,0,0,0,0,.349c.612.968,1.215,1.941,1.825,2.911a.5.5,0,0,1,.084.45.4.4,0,0,1-.318.271.393.393,0,0,1-.405-.154c-.076-.1-.139-.209-.206-.316l-1.568-2.509c-.084.034-.1.109-.141.168q-.771,1.228-1.537,2.458c-.032.051-.062.1-.1.15a.422.422,0,1,1-.716-.446c.222-.368.454-.731.682-1.1.386-.618.767-1.238,1.161-1.85a.332.332,0,0,0,.006-.422c-.609-.954-1.2-1.917-1.8-2.876a.55.55,0,0,1-.124-.349.409.409,0,0,1,.287-.371.4.4,0,0,1,.452.12,1.338,1.338,0,0,1,.123.18l1.568,2.509C415.066,471.477,415.1,471.53,415.157,471.61Z"
          transform="translate(-60.465 -107.288)"
        />
        <path
          class="b"
          d="M638.812,406.5c-.649,0-1.3,0-1.947,0-.133,0-.184-.028-.181-.173.009-.45.007-.9,0-1.351,0-.121.02-.173.159-.173q1.957.008,3.915,0c.119,0,.179.018.177.16q-.013.685,0,1.371c0,.138-.053.164-.175.163C640.111,406.5,639.461,406.5,638.812,406.5Z"
          transform="translate(-272.666 -46.887)"
        />
        <path
          class="b"
          d="M638.809,454.508c-.649,0-1.3,0-1.947,0-.131,0-.168-.039-.166-.168q.011-.685,0-1.371c0-.121.031-.158.155-.157q1.967.006,3.935,0c.118,0,.163.03.161.155q-.01.686,0,1.371c0,.132-.042.17-.17.169C640.12,454.505,639.464,454.508,638.809,454.508Z"
          transform="translate(-272.677 -92.352)"
        />
        <path
          class="b"
          d="M638.814,500.795c.649,0,1.3,0,1.948,0,.125,0,.175.029.172.165-.008.457-.006.914,0,1.371,0,.121-.038.16-.159.159q-1.967-.005-3.935,0c-.121,0-.159-.034-.157-.156.007-.45.009-.9,0-1.351,0-.146.032-.191.184-.189C637.515,500.8,638.164,500.795,638.814,500.795Z"
          transform="translate(-272.664 -137.784)"
        />
        <path
          class="b"
          d="M638.784,550.512c-.636,0-1.272-.006-1.908,0-.171,0-.208-.051-.2-.212.011-.444.008-.888,0-1.331,0-.125.039-.155.158-.154q1.967.006,3.935,0c.121,0,.16.037.158.158-.006.457-.007.914,0,1.371,0,.135-.048.167-.173.166C640.1,550.509,639.44,550.512,638.784,550.512Z"
          transform="translate(-272.655 -183.265)"
        />
        <path
          class="b"
          d="M638.814,596.794c.642,0,1.285,0,1.927,0,.143,0,.2.029.194.185-.011.45-.007.9,0,1.351,0,.121-.037.16-.158.16q-1.967-.005-3.935,0c-.12,0-.159-.032-.157-.156.007-.45.009-.9,0-1.351,0-.144.03-.192.184-.19C637.516,596.8,638.165,596.794,638.814,596.794Z"
          transform="translate(-272.665 -228.693)"
        />
        <path
          class="b"
          d="M638.784,646.511c-.636,0-1.272-.006-1.908,0-.17,0-.208-.05-.2-.211.011-.443.008-.888,0-1.331,0-.125.037-.155.157-.155q1.967.006,3.935,0c.12,0,.16.036.159.158-.006.457-.007.914,0,1.371,0,.135-.047.167-.173.166C640.1,646.508,639.44,646.511,638.784,646.511Z"
          transform="translate(-272.655 -274.174)"
        />
        <path
          class="b"
          d="M574.03,404.821c.371,0,.741,0,1.112,0,.111,0,.169.017.167.149-.007.463-.007.927,0,1.39,0,.126-.047.156-.163.155q-1.112-.006-2.224,0c-.113,0-.166-.022-.164-.151q.01-.695,0-1.39c0-.127.043-.156.16-.154C573.289,404.825,573.659,404.821,574.03,404.821Z"
          transform="translate(-212.13 -46.9)"
        />
        <path
          class="b"
          d="M574.03,452.807c.371,0,.741.006,1.112,0,.134,0,.169.043.167.17q-.009.675,0,1.35c0,.122-.024.177-.162.176q-1.112-.009-2.224,0c-.135,0-.166-.047-.164-.172.006-.457.007-.913,0-1.37,0-.126.042-.156.16-.154C573.288,452.811,573.659,452.807,574.03,452.807Z"
          transform="translate(-212.13 -92.342)"
        />
        <path
          class="b"
          d="M574.034,500.814c.364,0,.728.005,1.092,0,.133,0,.186.029.183.174-.009.45-.007.9,0,1.35,0,.126-.032.173-.167.172q-1.112-.009-2.224,0c-.118,0-.161-.032-.16-.156q.01-.695,0-1.39c0-.131.052-.151.164-.15C573.293,500.817,573.663,500.814,574.034,500.814Z"
          transform="translate(-212.13 -137.803)"
        />
        <path
          class="b"
          d="M574.03,548.82c.371,0,.741,0,1.112,0,.111,0,.169.016.167.149-.007.463-.007.927,0,1.39,0,.126-.046.156-.163.156q-1.112-.006-2.224,0c-.113,0-.166-.022-.164-.151q.01-.695,0-1.39c0-.126.042-.156.16-.154C573.289,548.824,573.659,548.82,574.03,548.82Z"
          transform="translate(-212.13 -183.264)"
        />
        <path
          class="b"
          d="M574.052,596.819c.364,0,.728,0,1.092,0,.124,0,.175.027.173.164-.008.457-.006.913,0,1.37,0,.118-.033.162-.156.161q-1.122-.007-2.244,0c-.109,0-.151-.03-.149-.145q.008-.7,0-1.41c0-.121.05-.141.154-.14C573.3,596.822,573.675,596.819,574.052,596.819Z"
          transform="translate(-212.138 -228.718)"
        />
        <path
          class="b"
          d="M574.018,646.5c-.364,0-.728-.005-1.092,0-.133,0-.167-.044-.165-.17q.009-.685,0-1.37c0-.124.038-.157.159-.156q1.112.007,2.224,0c.132,0,.17.039.168.168q-.01.685,0,1.37c0,.124-.043.159-.161.157C574.772,646.5,574.395,646.5,574.018,646.5Z"
          transform="translate(-212.132 -274.166)"
        />
      </g>
    </svg>
  );
};
const ResetIcon = () => {
  return (
    <svg
      className="reset_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16.905"
      height="19.89"
      viewBox="0 0 16.905 19.89"
    >
      <defs></defs>
      <path
        class="a"
        d="M428.76,678.33c.6-.349,1.147-.672,1.7-.99a1.066,1.066,0,0,0,.538-.669,1.011,1.011,0,0,0-.361-1.109.991.991,0,0,0-1.174-.095c-.6.332-1.184.682-1.774,1.025q-1.2.7-2.4,1.395a.731.731,0,0,0-.308,1.131q1.208,2.11,2.421,4.217a1.055,1.055,0,0,0,1.943-.231,1.059,1.059,0,0,0-.124-.851c-.332-.573-.659-1.15-1-1.755a6.377,6.377,0,1,1-7.373,7.427,6.226,6.226,0,0,1,1.072-4.835,1.563,1.563,0,0,0,.364-.768,1.06,1.06,0,0,0-.675-1.083,1.034,1.034,0,0,0-1.219.356,8.16,8.16,0,0,0-1.232,2.237,8.46,8.46,0,1,0,10-5.289C429.038,678.412,428.926,678.378,428.76,678.33Z"
        transform="translate(-418.626 -675.319)"
      />
    </svg>
  );
};

const experience = [
  { name: "Group", id: 1 },
  { name: "Institution", id: 2 },
  { name: "Group", id: 3 },
  { name: "Institution", id: 4 },
];
const experience2 = [
  { name: "Academic", id: 1 },
  { name: "Admin", id: 2 },
  { name: "Academic", id: 3 },
  { name: "Admin", id: 4 },
];

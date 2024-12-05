const donateBtn = (id) => document.getElementById(id);

const getInputValue = (id) => {
  const getValue = document.getElementById(id).value;
  const donateValue = parseFloat(getValue);
  return donateValue;
};

const getInnerTextValue = (id) => {
  const innerValue = document.getElementById(id).innerText;
  const floatValue = parseFloat(innerValue);
  return floatValue;
};

const getWaringMsg = (id) => document.getElementById(id);

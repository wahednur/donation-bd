donateBtn("noakhali-donate-btn").addEventListener("click", () => {
  const inputValue = getInputValue("noakhali-donation");
  const warnMsg = getWaringMsg("noakhali-warn");
  const currentBalance = getInnerTextValue("ca-balance");
  const currentFund = getInnerTextValue("noakhali-fund");
  if (isNaN(inputValue)) {
    warnMsg.classList.remove("hidden");
    return;
  } else if (inputValue <= 0) {
    warnMsg.classList.remove("hidden");
  } else {
    warnMsg.classList.add("hidden");
    document.getElementById("noakhali-fund").innerText =
      currentFund + inputValue;
    document.getElementById("ca-balance").innerText =
      currentBalance - inputValue;
    document.getElementById("modal").classList.remove("hidden");
  }
});

document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});

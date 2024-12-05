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
    const title = document.getElementById("noakhali-title").innerText;
    const submitDate = new Date();
    const tk = inputValue;
    historyFunc(title, inputValue, submitDate);
  }
});

document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});

document.getElementById("donation-btn").addEventListener("click", () => {
  document.getElementById("history").classList.add("hidden");
  document.getElementById("donation").classList.remove("hidden");
  document.getElementById("history-btn").classList.remove("active");
  document.getElementById("donation-btn").classList.remove("active");
});

document.getElementById("history-btn").addEventListener("click", () => {
  document.getElementById("history").classList.remove("hidden");
  document.getElementById("history-btn").classList.add("active");
  document.getElementById("donation").classList.add("hidden");
  document.getElementById("donation-btn").classList.add("active");
});

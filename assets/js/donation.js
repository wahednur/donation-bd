// Noakhali donation section start

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
    document.getElementById("noakhali-donation").value = "";
    historyFunc(title, inputValue, submitDate);
  }
});
// Noakhali donation section end

// Feni donation section start
donateBtn("feni-donate-btn").addEventListener("click", () => {
  const inputValue = getInputValue("feni-donation");
  const warnMsg = getWaringMsg("feni-warn");
  const currentBalance = getInnerTextValue("ca-balance");
  const currentFund = getInnerTextValue("feni-fund");
  if (isNaN(inputValue)) {
    warnMsg.classList.remove("hidden");
    return;
  } else if (inputValue <= 0) {
    warnMsg.classList.remove("hidden");
  } else {
    warnMsg.classList.add("hidden");
    document.getElementById("feni-fund").innerText = currentFund + inputValue;
    document.getElementById("ca-balance").innerText =
      currentBalance - inputValue;
    document.getElementById("modal").classList.remove("hidden");
    const title = document.getElementById("feni-title").innerText;
    const submitDate = new Date();
    const tk = inputValue;
    document.getElementById("feni-donation").value = "";
    historyFunc(title, inputValue, submitDate);
  }
});
// Feni donation section end

// Quota donation section start
donateBtn("quota-donate-btn").addEventListener("click", () => {
  const inputValue = getInputValue("quota-donation");
  const warnMsg = getWaringMsg("quota-warn");
  const currentBalance = getInnerTextValue("ca-balance");
  const currentFund = getInnerTextValue("quota-fund");
  if (isNaN(inputValue)) {
    warnMsg.classList.remove("hidden");
    return;
  } else if (inputValue <= 0) {
    warnMsg.classList.remove("hidden");
  } else {
    warnMsg.classList.add("hidden");
    document.getElementById("quota-fund").innerText = currentFund + inputValue;
    document.getElementById("ca-balance").innerText =
      currentBalance - inputValue;
    document.getElementById("modal").classList.remove("hidden");
    const title = document.getElementById("quota-title").innerText;
    const submitDate = new Date();
    const tk = inputValue;
    document.getElementById("quota-donation").value = "";
    historyFunc(title, inputValue, submitDate);
  }
});
// Quota donation section end

// Modal js start
document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});
// Modal js end

// Donation button active deactivate
document.getElementById("donation-btn").addEventListener("click", () => {
  document.getElementById("history").classList.add("hidden");
  document.getElementById("donation").classList.remove("hidden");
  document.getElementById("history-btn").classList.remove("active");
  document.getElementById("donation-btn").classList.remove("active");
});
// History button active deactivate
document.getElementById("history-btn").addEventListener("click", () => {
  document.getElementById("history").classList.remove("hidden");
  document.getElementById("history-btn").classList.add("active");
  document.getElementById("donation").classList.add("hidden");
  document.getElementById("donation-btn").classList.add("active");
});

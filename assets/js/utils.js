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

function historyFunc(title, tk, submitDate) {
  const parentDiv = document.getElementById("history-parent");
  const childItem = document.createElement("div");
  childItem.classList.add("bdr", "p-8");
  childItem.innerHTML = `<div class="flex flex-col gap-6">
  <h4 class="text-xl font-bold text-title">${tk} taka donated for ${title} </h4>
  <p class="text-body-text">Date: ${new Date(submitDate)}</p>
  </div>`;
  parentDiv.appendChild(childItem);
}

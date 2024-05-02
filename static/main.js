const userInput = document.getElementById("user-input");

document.querySelectorAll(".key-num").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (userInput.innerText === "NaN" || userInput.innerText === "0") {
      userInput.innerText = "";
    }
    userInput.innerText += e.target.textContent.trim();
  });
});

document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    let lastVal = userInput.innerText.slice(-1);

    if (!isNaN(parseInt(lastVal)) && e.target.textContent === "=") {
      userInput.innerText = eval(userInput.innerText);
    } else if (e.target.textContent === "C") {
      userInput.innerText = "0";
    } else if (e.target.textContent === "Del") {
      userInput.innerText = userInput.innerText.slice(0, -1);
    } else {
      if (!isNaN(parseInt(lastVal))) {
        userInput.innerText += e.target.textContent;
      }
    }
  });
});

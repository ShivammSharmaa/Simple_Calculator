let input = "";
const btns = document.querySelectorAll("button");

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      input = eval(input);
    } else if (e.target.innerHTML == "Reset") {
      input = "";
    } else if (e.target.innerHTML == "Del") {
      input = input.slice(0, -1);
    } else {
      input = input + e.target.innerHTML;
      document.querySelector("input").value = input;
    }
  });
});

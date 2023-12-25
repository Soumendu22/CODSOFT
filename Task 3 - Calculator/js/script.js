let area = document.getElementById("calculation-area");

let buttons = Array.from(document.getElementsByClassName("button"));

function timenew() {
  setTimeout(errorcode, 2000);
}
function errorcode() {
  area.innerText = "";
}
buttons.map((button) => {
  button.addEventListener("click", (buttonclick) => {
    switch (buttonclick.target.innerText) {
      case "=":
        try {
          area.innerText = eval(area.innerText);
        } catch {
          area.innerText = "Error";
          setTimeout(() => {
            area.innerText = "";
          }, 1200);
        }
        break;
      case "CE":
        area.innerText = "";
        break;
      case "DEL":
        if (area.innerText) {
          area.innerText = area.innerText.slice(0, -1);
        }
        break;
      case "±":
        area.innerText = "-" + area.innerText;
        break;
      case "√":
        let square;
        square = Math.sqrt(area.innerText);
        area.innerText = "";
        area.innerText += square;
        break;
      case "^":
        area.innerText += "**";
        break;
      default:
        area.innerText += buttonclick.target.innerText;
    }
  });
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Enter" || event.code === "NumpadEnter") {
    try {
      area.innerText = eval(area.innerText);
    } catch {
      area.innerText = "Error";
      setTimeout(() => {
        area.innerText = "";
      }, 1200);
    }
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Backspace") {
    area.innerText = area.innerText.slice(0, -1);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Delete") {
    area.innerText = "";
  }
});

window.addEventListener("keydown", (event) => {
  if (
    event.code === "NumpadAdd" ||
    (event.code === "Equal" && event.shiftKey)
  ) {
    area.innerText += "+";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "NumpadSubtract" || event.code === "Minus") {
    area.innerText += "-";
  }
});
window.addEventListener("keydown", (event) => {
  if (
    event.code === "NumpadMultiply" ||
    (event.code === "Digit8" && event.shiftKey)
  ) {
    area.innerText += "*";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "NumpadDivide" || event.code === "Slash") {
    area.innerText += "/";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "NumpadDecimal" || event.code === "Period") {
    area.innerText += ".";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "F9") {
    area.innerText = "-" + area.innerText;
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Digit6" && event.shiftKey) {
    area.innerText += "**";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Digit9" && event.shiftKey) {
    area.innerText += "(";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Digit0" && event.shiftKey) {
    area.innerText += ")";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad1" || event.code === "Digit1") {
    area.innerText += "1";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad2" || event.code === "Digit2") {
    area.innerText += "2";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad3" || event.code === "Digit3") {
    area.innerText += "3";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad4" || event.code === "Digit4") {
    area.innerText += "4";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad5" || event.code === "Digit5") {
    area.innerText += "5";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad6" || event.code === "Digit6") {
    area.innerText += "6";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad7" || event.code === "Digit7") {
    area.innerText += "7";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad8" || event.code === "Digit8") {
    area.innerText += "8";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad9" || event.code === "Digit9") {
    area.innerText += "9";
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad0" || event.code === "Digit0") {
    area.innerText += "0";
  }
});

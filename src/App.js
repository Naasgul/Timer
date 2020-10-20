import "./app.css";
import { createElement } from "./utils/elements";

export function createApp() {
  const app = createElement("div", {
    className: "app",
    children: [
      createElement("div", {
        className: "timer",
        innerText: "30",
      }),
      createElement("button", {
        classname: "startTimeButton",
        innerText: "Go!",
        onclick: () => {
          createCountdownTimer();
        },
      }),
    ],
  });

  function createCountdownTimer() {
    let sec = 30;
    const timer = setInterval(function () {
      document.querySelector(".timer").innerHTML = sec;
      sec--;
      if (sec < 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
  return app;
}

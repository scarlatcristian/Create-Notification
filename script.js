"use strict";

const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};

const createNotification = (message = null, type = null) => {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.classList.add(type ? type : getRandomType());

  if (notification.classList.contains("error"))
    notification.innerText = message ? message : `error: ${getRandomMessage()}`;

  if (notification.classList.contains("success"))
    notification.innerText = message
      ? message
      : `success: ${getRandomMessage()}`;

  if (notification.classList.contains("info"))
    notification.innerText = message ? message : `info: ${getRandomMessage()}`;

  toasts.appendChild(notification);
  setTimeout(() => {
    notification.style.transform = "translateX(20rem)";
    notification.style.opacity = 0;
    setTimeout(() => {
      notification.remove();
    }, 1000);
  }, 3000);
};

button.addEventListener("click", () => {
  createNotification();
});

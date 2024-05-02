import { color } from "./color";
export default function changeTheme(theme) {
  const body = document.querySelector("body");
  const p = document.querySelector("p");
  const a = document.querySelector("a");
  const header = document.querySelectorAll("h1, h2, h3, h4");
  const div = document.querySelector("div");
  const li = document.querySelector("li");

  if (theme === "dark") {
    body.classList.remove("body-light");
    a.style.color = color.darkFontColor;
    p.style.color = color.darkFontColor;
    div.style.color = color.darkFontColor;
    li.style.color = color.darkFontColor;
    for (let i = 0; i < header.length; i++) {
      header[i].style.color = color.darkHeaderColor;
    }
  } else {
    body.classList.add("body-light");
    a.style.color = color.lightFontColor;
    p.style.color = color.lightFontColor;
    div.style.color = color.lightFontColor;
    li.style.color = color.lightFontColor;
    for (let i = 0; i < header.length; i++) {
      header[i].style.color = color.lightHeaderColor;
    }
  }
}

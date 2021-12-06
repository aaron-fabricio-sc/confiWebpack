import style from "@stylus/style.styl";
import { HelloWorld } from "./components/HelloWorld.js";

import img from "./assets/img1.jpg";

alert(process.env.ALERTA);

const div = document.getElementById("img");
div.innerHTML = `<img src="${img} "/>`;

const num = [1, 2, 3],
  mostrar = () => {
    console.log(...num);
  };

console.log("holaa");

mostrar();
const app = document.getElementById("app");
let hello = new HelloWorld("javaScript");
app.innerHTML = `${hello.saludo()}`;

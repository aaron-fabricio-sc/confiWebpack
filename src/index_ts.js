import style from "./sass/style.scss";

import img from "./assets/img1.jpg";
const div = document.getElementById("img");
div.innerHTML = `<img src="${img} "/>`;

const num = [1, 2, 3],
  mostrar = () => {
    console.log(...num);
  };

console.log("holaa");

mostrar();

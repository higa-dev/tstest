/// <reference path="hoge.ts"/>

window.onload = function () {
  const target = document.getElementById('target');
  if (target) {
    target.innerHTML = String(new Hoge().hoge(10));
  }
}

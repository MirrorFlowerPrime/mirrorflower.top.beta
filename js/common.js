// let = document.getElementById('');
let body = document.querySelector("body");
let menutoggle_deta_3 = document.getElementById("menutoggle-deta-3");
let menutoggle_deta_3_phone = document.getElementById(
  "menutoggle-deta-3-phone"
);
// 菜单栏按钮
menutoggle_deta_3.onclick = function () {
  body.classList.toggle("toggle-beta-3");
};

// 手机端菜单栏按钮
menutoggle_deta_3_phone.onclick = function () {
  body.classList.toggle("toggle-beta-3-phone");
};

// 返回
function Beta_3_return_Js() {
  let body = document.querySelector("body");
  body.setAttribute("class", "toggle-beta-3");
}

// 个人介绍页面
function Beta_3_Personal_Js() {
  let body = document.querySelector("body");
  body.setAttribute("class", "toggle-beta-3 Beta-3-Personal-Js");
}

// 手机版个人介绍页面
function Beta_3_Personal_Js_phone() {
  let body = document.querySelector("body");
  body.setAttribute("class", "toggle-beta-3-phone Beta-3-Personal-Js-phone");
}

// 作品
function Beta_3_project_Js() {
  let body = document.querySelector("body");
  body.setAttribute("class", "toggle-beta-3 Beta-3-project-Js");
}

// 关于
function Beta_3_log_Js() {
  let body = document.querySelector("body");
  body.setAttribute("class", "toggle-beta-3 Beta-3-about-Js");
}

// 音乐
function Beta_3_Song_Js() {
  let body = document.querySelector("body");
  body.setAttribute("class", "toggle-beta-3 Beta-3-Song-Js");
}

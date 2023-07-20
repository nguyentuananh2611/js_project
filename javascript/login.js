"use strict";

const login_user = document.querySelector("#login_user");
const login_password = document.querySelector("#login_password");
const login = document.querySelector("#login");
const valiable = document.querySelector("#valiable");
const valiable_user = document.querySelector("#valiable_user");
const valiable_password = document.querySelector("#valiable_password");
const input_user = document.querySelector("#input_user");
const input_password  =document.querySelector("#input_password");
const closeButton = document.querySelector("#close");
// Luu du lieu vao storage
const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// Lay du lieu tu storage
const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
const data = getFromStorage("data") || [];

closeButton.addEventListener("click",()=>{
location.href = "index.html";
});
login.addEventListener("click",()=> {
const user = login_user.value;
const password = login_password.value;
let check = valiableForm(user,password);
if (check[0]==1 && check[1] == 1) {
  for(let i in data) {
    if (data[i].user  == user&& data[i].password == password ) {
      location.href = "index.html";
      saveToStorage("login",user);
      return;
    }
  }
   valiable.innerHTML = "Tài khoản hoặc mật khẩu không chính xác !";
   return;
}
});
let valiableForm = (user,password) => {
  let check = [0,0];
  if (user == "") {
    valiable_user.innerHTML ="Tài khoản không được để chống !";
    input_user.style.border = "1px solid red";
    check[0] = -1;
  } else if (user.length < 5 || user.length > 20) {
    
    valiable_user.innerHTML ="Tài khoản không ngắn hơn 5 ký tự và không dài hơn 20 ký tự !";
    input_user.style.border = "1px solid red";
    check[0] = -1;
  } else if (user.match(/[#$%^&*()<>?{}+=_^@!.,\-]/g) != null) {
    valiable_user.innerHTML ="Tài khoản không được có ký tự đặc biệt !";
    input_user.style.border = "1px solid red";
    check[0] = -1;
  } else {
    valiable_user.innerHTML ="";
    input_user.style.border = "1px solid blue";
    check[0] = 1;
  }
  if (password == "") {
    valiable_password.innerHTML ="Mật khẩu không được để chống !";
    input_password.style.border = "1px solid red";
    check[1] = -1;
  } else if (password.length <8) {
    valiable_password.innerHTML ="Mật khẩu phải từ 8 ký tự !";
    input_password.style.border = "1px solid red";
    check[1] = -1;
  } else if (password.match(/[#$%^&*()<>?{}+=_^@!.,\-]/g) != null) {
    valiable_password.innerHTML ="Mật khẩu không chứa ký tự đặc biệt !";
    input_password.style.border = "1px solid red";
    check[1] = -1;
  } else if (password.includes(" ")) {
    valiable_password.innerHTML ="Mật khẩu không chứa khoảng trắng !";
    input_password.style.border = "1px solid red";
    check[1] = -1;
  } else {
    valiable_password.innerHTML ="";
    input_password.style.border = "1px solid blue";
    check[1] = 1;
  }
  valiable.innerHTML ="";
  return check;
}
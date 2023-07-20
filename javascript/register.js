"use strict";

const register_user = document.querySelector("#register_user");
const register_password = document.querySelector("#register_password");
const register_password2 = document.querySelector("#register_password2");
const valiable_user  =document.querySelector("#valiable_user");
const valiable_password  =document.querySelector("#valiable_password");
const valiable_password2  =document.querySelector("#valiable_password2");
const logout  = document.querySelector("#logout");
const valiable = document.querySelector("#valiable");
const input_user =document.querySelector("#input_user");
const input_password =document.querySelector("#input_password");
const input_password2 =document.querySelector("#input_password2");
const closeButton = document.querySelector("#close");
// Luu du lieu vao storage
const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// Lay du lieu tu storage
const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
const data =  getFromStorage("data") || [];
closeButton.addEventListener("click",()=>{
location.href = "index.html";
});

logout.addEventListener("click",()=> {
const user_new = register_user.value;
const password = register_password.value;
const password2 = register_password2.value;
let acccount = {
  user: user_new,
  password: password,
  note: []
}
let check = valiableForm(user_new,password,password2);
console.log(check);
if (check[0] ==1 && check[1] == 1 && check[2] == 1) {

checkValiable(acccount,data);

} 
});
let checkValiable = (acccount,data)=> {
  if (data ===[]) {
    data.push(acccount);
    console.log(data);
    saveToStorage("data",data);
    location.href = "login.html";
    return;
  }
for (let i in data) {
  if (data[i].user == acccount.user) {
    valiable.innerHTML = "Tài khoản đã được sử dụng !";
   return;
  }
}

data.push(acccount);
console.log(data);
saveToStorage("data",data);
location.href = "login.html";
return;

}
let valiableUser = (user)=> {
 for (let i in data) {
  if (user.user == data[i].user) {
    return false;
  }
 }
return true;
}
let valiableForm = (user,password,password2) => {
    let check = [0,0,0];
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
    if (password2 == "") {
        valiable_password2.innerHTML ="Mật khẩu không được để chống !";
        input_password2.style.border = "1px solid red";
        check[2] = -1;
      } else if (password2.length <8) {
        valiable_password2.innerHTML ="Mật khẩu phải từ 8 ký tự !";
        input_password2.style.border = "1px solid red";
        check[2] = -1;
      } else if (password.match(/[#$%^&*()<>?{}+=_^@!.,\-]/g) != null) {
        valiable_password2.innerHTML ="Mật khẩu không chứa ký tự đặc biệt !";
        input_password2.style.border = "1px solid red";
        check[2] = -1;
      } else if (password2.includes(" ")) {
        valiable_password2.innerHTML ="Mật khẩu không chứa khoảng trắng !";
        input_password2.style.border = "1px solid red";
        check[2] = -1;
       } else if  (password != password2) {

        valiable_password2.innerHTML ="Mật khẩu nhập lại không đúng !";
        input_password2.style.border = "1px solid red";
        check[2] = -1;
      } else {
        valiable_password2.innerHTML ="";
        input_password2.style.border = "1px solid blue";
        check[2] = 1;
      }
      valiable.innerHTML ="";
      return check;
  }































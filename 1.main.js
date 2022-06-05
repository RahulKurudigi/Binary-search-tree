//Select single
// document.getElementById("my-form");
// document.querySelector(".container");

//Multiple
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerHTML = "Rahul";
// ul.lastElementChild.innerHTML = "<h1>Rahul</h1>";
// const ul = document.querySelector(".items");
// ul.firstElementChild.textContent = "Hello";
// ul.firstElementChild.style.color = "green";
// ul.children[1].innerHTML = "Rahul";
// ul.children[1].style.color = "yellow";

//Change Button styling
// const btn = document.querySelector(".btn");
// btn.style.background = "red";

//Click the button
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("click");
// });

//*********************************  Validation ***************************

// const myForm = document.querySelector("#my-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const userList = document.querySelector("#users");

// myForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (nameInput.value == "" || emailInput.value == "") {
//     msg.classList.add("error"); //Add error class style
//     msg.innerHTML = "Please enter all fields";
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     const li = document.createElement("li");
//     li.appendChild(
//       document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
//     );

//     userList.appendChild(li);
//     //Clear inputs
//     nameInput.value = "";
//     emailInput.value = "";
//   }
// });

//************************************   ********************************** */
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const btn = document.querySelector(".btn");
// const body = document.querySelector("body");

//addeventlistener => click, mouseover, mouseout
// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (nameInput.value == "" || emailInput.value == "") {
//     msg.innerHTML = "Please enter all fields";
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     console.log(nameInput.value, emailInput.value);
//   }
// });

const text = document;
console.log(document);

//DIFFERENT TARGETING METHODS IN DOM -->
const item1 = document.getElementById("heading");
console.log(item1);

const item2 = document.getElementsByClassName("list");
console.log(item2);

const item3 = document.getElementsByTagName("ol");
console.log(item3);

 console.log(item1.innerHTML);

//if it is in collection form -->
 console.log(item2[2].innerHTML);


//------------------------------------
// Create element: -->
const para = document.createElement("li");
console.log(para);
para.innerText = "This is the element we created.";

// Append to body: -->
const item4 = document.getElementById("olist");
item4.appendChild(para);
 item4.removeChild(para); 
//------------------------------------


//lOCAL STORAGE -->

// Store...
localStorage.setItem("Country", "India");
//                     key       value

// Retrieve...
const item = document.getElementById("country");
item.innerHTML = localStorage.getItem("Country");

//Functioning of local storage

// function clickCounter() {
//   if (localStorage.clickcount) {
//     localStorage.clickcount = Number(localStorage.clickcount) + 1;
//   } else {
//     localStorage.clickcount = 1;
//   }
//   document.getElementById("result").innerHTML =
//     "You have clicked the button " + localStorage.clickcount + " time(s).";
// }


//SESSION STORAGE -->

// function clickCounter() {
//     if (sessionStorage.clickcount) {
//       sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
//     } else {
//       sessionStorage.clickcount = 1;
//     }
//     document.getElementById("result").innerHTML =
//       "You have clicked the button " + sessionStorage.clickcount + " time(s).";
//   }


// Adding Event Listener -->

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
const task3Element = document.getElementById("task-3");

function noname() {
  alert("hello");
}

function username(name) {
  alert("hello " + name);
}

function userHobbies(hobby1, hobby2, hobby3) {
  alert("Your hobbies are " + hobby1 + hobby2 + hobby3);
}

userHobbies("walking ", "baking ", "snuggling ");
username("emily");

task3Element.addEventListener("click", noname);

task3Element.onclick = function username() {
  console.log("clicked");
};

const userHobbiesString = comi;

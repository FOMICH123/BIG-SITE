let move = 0;
let dist = 0;
let flatsContainer = document.querySelector("#flatsContainer");
let moreBtn = document.querySelector(".moreBtn");
let types = [
  ["flat (1).jpg", "Lermontova, 32", "3 guest", "2 beds"],
  ["flat (2).jpg", "Yesenin, 14", "2 guest", "1 beds"],
  ["flat (3).jpg", "Pushkina, 92", "1 guest", "1 beds"],
  ["flat (4).jpg", "Turgenev, 52", "2 guest", "2 beds"],
  ["flat (5).jpg", "Mayakovski, 37", "3 guest", "3 beds"],
  ["flat (6).jpg", "Tolstoi, 32", "3 guest", "2 beds"],
  ["flat (1).jpg", "Lermontova, 32", "3 guest", "2 beds"],
  ["flat (2).jpg", "Yesenin, 14", "2 guest", "1 beds"],
  ["flat (3).jpg", "Pushkina, 92", "1 guest", "1 beds"],
  ["flat (4).jpg", "Turgenev, 52", "2 guest", "2 beds"],
  ["flat (5).jpg", "Mayakovski, 37", "3 guest", "3 beds"],
  ["flat (6).jpg", "Tolstoi, 32", "3 guest", "2 beds"],
];
let leftBtn = document.querySelector(".leftBtn");
let slider = document.querySelector(".slider");
let rightBtn = document.querySelector(".rightBtn");
let pairs = document.querySelectorAll(".pair");
// console.log(pairs);
leftBtn.onclick = function () {
  dist -= 100;
  if (dist == -100) {
    dist = (slider.children.length - 1) * 100;
  }
  slider.style.transform = "translateX(-" + dist + "%)";
  console.log(dist);
};
rightBtn.onclick = function () {
  dist += 100;
  dist = dist % (slider.children.length * 100);
  slider.style.transform = "translateX(-" + dist + "%)";
  //   if (dist == 300) {
  //     dist = 0;
  //   }
};
let leftComm = document.querySelector(".leftComm");
let rightComm = document.querySelector(".rightComm");
rightComm.onclick = function () {
  let activePair = document.querySelector(".activePair");
  let nextPair;
  if (activePair == pairs[pairs.length - 1]) {
    nextPair = pairs[0];
  } else {
    nextPair = activePair.nextElementSibling;
  }
  activePair.classList.remove("activePair");
  setTimeout(function () {
    nextPair.classList.add("activePair");
  }, 500);
  // console.log("asd");
};
leftComm.onclick = function () {
  let prevPair;
  let activePair = document.querySelector(".activePair");
  if (activePair == pairs[0]) {
    prevPair = pairs[pairs.length - 1];
  } else {
    prevPair = activePair.previousElementSibling;
  }
  activePair.classList.remove("activePair");
  setTimeout(function () {
    prevPair.classList.add("activePair");
  }, 500);
};
moreBtn.onclick = function () {
  console.log("asdadasda");
  for (let i = 0; i < 3; i++) {
    console.log(i);
    let a = document.createElement("a");
    a.classList.add("flat");
    // a.innerHTML = types[move + i][1];
    let flatInfo = `
    <img src="${types[move + i][0]}  " alt="" />
    <div>
    <h2>${types[move + i][1]}</h2>
    <img src="man.png" alt="" />
    <p>${types[move + i][2]}</p>
    <img src="bed.svg" alt="" />
    <p>${types[move + i][3]}</p>
    </div>
    `;
    a.innerHTML = flatInfo;
    flatsContainer.insertBefore(a, moreBtn);
  }
  move += 3;
  if (move == types.length) {
    moreBtn.style.display = "none";
  }
};

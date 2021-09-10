///toggles
const change = document.getElementById("change");
const bg = document.querySelector(".light");
const inputBody = document.querySelector(".inputbod");
const container = document.querySelector(".container");
const items = document.querySelector(".items");

//changes
change.addEventListener("click", () => {
  if (bg.classList.contains("light")) {
    bg.classList.replace("light", "dark");
    change.src = "./images/icon-sun.svg";
    inputBody.classList.replace("inputbod", "inputbod-dark");
    container.classList.replace("container", "container-dark");
    items.classList.toggle("items-dark");
    console.log(text.classList);
  } else {
    bg.classList.replace("dark", "light");
    change.src = "./images/icon-moon.svg";
    inputBody.classList.replace("inputbod-dark", "inputbod");
    container.classList.replace("container-dark", "container");
    items.classList.replace("items-dark", "items");
    console.log(text.classList);
    //
  }
});

/////todo function
///input text value

const inputText = document.getElementById("textvalue");
///outside event for accesibility
const text = document.createElement("p");
text.setAttribute("class", "text");
///outside event for accesibility
const listBody = document.querySelector(".items");
inputText.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    //delete
    const remove = document.createElement("div");
    remove.setAttribute("class", "close");
    const img = document.createElement("img");
    img.src = "./images/icon-cross.svg";
    remove.appendChild(img);
    //circle
    const circle = document.createElement("div");
    circle.setAttribute("class", "round");
    ///paragraph element
    const text = document.createElement("p");
    text.setAttribute("class", "text");
    text.textContent = inputText.value;

    //item div element
    const item = document.createElement("div");
    item.setAttribute("class", "item");
    item.appendChild(circle);
    item.appendChild(text);
    item.appendChild(remove);
    item.addEventListener("mouseover", () => {
      remove.style.display = "block";
    });
    item.addEventListener("mouseleave", () => {
      remove.style.display = "none";
    });

    //parent div & adding function
    const listBody = document.querySelector(".items");

    if (inputText.value !== "") {
      listBody.appendChild(item);
      inputText.value = "";
    } else {
      alert("nothing yet");
    }

    ////item count
    const numItems = document.getElementById("num");
    numItems.textContent = items.childElementCount;
    //delete function
    remove.addEventListener("click", () => {
      listBody.removeChild(item);
      numItems.textContent = items.childElementCount;
    });

    //text cross
    const pic = document.createElement("img");
    pic.setAttribute("class", "pic");
    pic.src = "./images/icon-check.svg";
    const check = document.createElement("div");
    check.setAttribute("class", "remove");
    check.appendChild(pic);

    circle.addEventListener("click", () => {
      circle.appendChild(check);
      check.classList.toggle("active-text");
      if (check.classList.contains("active-text")) {
        text.classList.toggle("text-line");
      } else {
        text.classList.remove("text-line");
      }
    });

    const activeItems = document.querySelector(".active");
    activeItems.addEventListener("click", () => {
      if (text.classList.contains("text-line")) {
        item.style.display = "none";

        console.log("ehh");
      } else {
        return;
      }
    });

    const all = document.querySelector(".all");
    all.addEventListener("click", () => {
      item.style.display = "flex";
    });

    const completed = document.querySelector(".completed");
    completed.addEventListener("click", () => {
      if (!check.classList.contains("active-text")) {
        item.style.display = "none";
      }
    });

    const clear = document.querySelector(".clear-completed");
    clear.addEventListener("click", () => {
      if (text.classList.contains("text-line")) {
        listBody.removeChild(item);
      }
    });
  }
});

// const activeItems = document.querySelector(".active");
// activeItems.addEventListener("click", () => {
//   if (!text.classList.contains("text-line")) {
//     item.classList.toggle("nothing");
//     console.log("ehh");
//   } else {
//     console.log("mmh");
//   }
// });

var tab_links = document.getElementsByClassName("tab-links");
var tab_content = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tab_links) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tab_content) {
    tabcontent.classList.remove("active-tab");
  }
  // fix this !!!
  // const about_tablink = function () {
  //   var tab_links = document.getElementsByClassName("tab-links");
  //   tab_links.classList.add("active-link");
  // };
  // document.addEventListener("click", about_tablink);

  document.getElementById(tabname).classList.add("active-tab");
}

const side_menu = document.getElementById("side_menu");

function openmenu() {
  side_menu.style.right = "0";
}
function closemenu() {
  side_menu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxOjjr4KbadzWvlWZwko-ohS15m-2sm6m6KH-KNHie3OenWlACWK3w6R8Fhn8jVM6XwaQ/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementsById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

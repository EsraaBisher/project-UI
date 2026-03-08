//
function toggleItem(num) {
  let content = document.getElementById("content" + num);

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}




//
document.addEventListener("click", function (e) {
  if (e.target.closest(".div > div")) {
    let option = e.target.closest(".div > div");
    let group = option.parentElement;

    group.querySelectorAll("div").forEach(el => {
      el.classList.remove("active");
    });

    option.classList.add("active");
  }
});




//
document.querySelectorAll(".div > div").forEach(option => {
  option.addEventListener("click", function () {
    document.querySelector(".btn1").classList.add("active");
  });
});

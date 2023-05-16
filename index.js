const target = document.querySelector("nav");
let options = {
  root: document.querySelector("main"),
  rootMargin: "250px",
  threshold: 0.5
};
function handleIntersection(entries, options) {
  entries.map((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("sticky");
    } else {
      entry.target.classList.remove("sticky");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

observer.observe(target);

let per_page = 10;
let total = 100;
const percent_element = document.querySelector(".percent-scroll");
const load_more_button = document.querySelector(".load-more");
const per_page_element = document.querySelector(".per_page");
const total_element = document.querySelector(".total");

function handlePercent() {
  let percent = (per_page / total) * 100;
  percent_element.style.width = `${percent}%`;
  per_page_element.textContent = per_page;
  total_element.textContent = total;
}

load_more_button.addEventListener("click", () => {
  if (per_page < total) {
    per_page += 10;
  } else {
    document.querySelector(".scroll-bar").style.display = "none";
    document.querySelector(".show-page-count").style.display = "none";
    load_more_button.style.display = "none";
  }

  handlePercent();
});
handlePercent();

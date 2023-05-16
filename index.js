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

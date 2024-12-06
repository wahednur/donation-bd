const faqs = document.querySelectorAll(".faq-item");
const faqContent = document.querySelectorAll(".faq-content");
const icons = document.querySelectorAll(".faq-icon");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqContent.forEach((fac) => {
      fac.classList.add("hidden", "duration-500");
      fac.style.height = "0px";
      icons.forEach((icon) => {
        icon.classList.remove("rotate-180", "rotate-0");
      });
    });
    faq.children[1].classList.remove("hidden", "duration-500");
    faq.children[1].style.height = "100%";
    faq.children[1].style.transition = "all ease-in-out 0.5s";
    faq.children[0].children[1].classList.add("rotate-180", "duration-500");
  });
});

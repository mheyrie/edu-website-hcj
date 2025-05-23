//change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//show/hide faq answers
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    //change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

//current Year
document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
});

//hide/show mobile menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

//close mobile menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

//Courses details
const coursesContainer = document.querySelector(".courses__container");

const courses = Array.from({ length: 18 }, (_, index) => ({
  title: `Responsive Social Media UI Design ${index + 1} `,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates!`,
  image: `./images/course${index + 1}.jpg`,
}));

courses.forEach((course) => {
  const courseElement = document.createElement("article");
  courseElement.classList.add("course");
  courseElement.innerHTML = `
  <div class="course__image">
                    <img src="${course.image}" alt="">
                </div>
                <h4>${course.title}</h4>
                <p>${course.description}"</p>
                <a href="courses.html" class="btn btn-primary">Learn More</a>
  `;
  coursesContainer.appendChild(courseElement);
});

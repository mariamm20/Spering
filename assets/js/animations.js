const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

gsap.registerPlugin(ScrollTrigger);

const animations = [
  { target: "header", props: { opacity: 1 }, start: "top top" },
  {
    target: ".experience-img",
    props: { x: 800, opacity: 0, rotateZ: 0 },
    start: "-1000vh",
    end: "-600vh",
  },
  {
    target: ".experience-text",
    props: { opacity: 0, y: 50 },
    start: "-1200vh",
  },
  {
    target: ".category ",
    props: { opacity: 0, y: -800 },
    start: "-1200vh",
  },
  {
    target: ".about",
    props: { opacity: 0, x: -800 },
    start: "-1300vh",
  },
  {
    target: ".work-text h2",
    props: { opacity: 0, y: 50 },
    start: "-1300vh",
  },
  
  { target: ".freelance-div", props: { opacity: 0, y: 100 }, start: "-1600vh" },
  { target: ".work-img", props: { opacity: 0, y: -100 }, start: "-1600vh" },
  { target: ".testimonial", props: { opacity: 0, y: -100 }, start: "-1600vh" },
  { target: "footer", props: { opacity: 0, y: 100 }, start: "-1600vh" },
  




];

animations.forEach((animation) => {
  gsap.from(animation.target, {
    ...animation.props,
    scrollTrigger: {
      trigger: animation.target,
      scrub: 2,
      start: animation.start,
      end: animation.end || "center center",
    },
    ease: "none",
  });
});



const timeline = gsap.timeline({ defaults: { duration: .3 } });
timeline
.from("header .logo", { opacity: "0", ease: "none" })
  .from("header nav", { opacity: "0", ease: "none" })
  .from(".animate", { x: "-800", ease: "none" })
  .from(".hero-img .img-wrapper", { y: "-800", ease: "none" })


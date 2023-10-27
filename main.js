let pageRevealDelay = 2;
gsap.from(".contact a", 1.5, {
  top: "25px",
  ease: "power4.inOut",
  stagger: { amount: 0.1 },
  delay: pageRevealDelay + 0.2,
}),
  gsap.from(
    "h1",
    1.5,
    { y: 150, opacity: 0, ease: "power4.inOut", stagger: { amount: 0.1 } },
    "<"
  ),
  gsap.from(
    "p , #btn a",
    1.75,
    { y: 30, opacity: 0, ease: "power3.inOut", stagger: { amount: 0.25 } },
    "<"
  ),
  gsap.from(".loader-wrapper", 2, { ease: "power1.inOut", scale: 0.6 }),
  gsap.to(
    ".loader-wrapper, .pre-loader",
    1,
    { top: "-100%", ease: "power3.inOut", delay: 2 },
    "-=1"
  ),
  document.addEventListener("mousemove", function (e) {
    let a = e.clientX / window.innerWidth - 0.5,
      o = 100 * a,
      t = 50 * (e.clientY / window.innerHeight - 0.5),
      r = 25 * a;
    gsap.to(".bubbles", {
      x: o,
      y: t,
      rotationZ: r,
      ease: "power2.out",
      duration: 1.5,
    });
  });

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
});

// const blob = document.querySelector(".custom-cursor");

// window.onpointermove = (event) => {
//   const { clientX, clientY } = event;

//   blob.animate(
//     {
//       left: `${clientX}px`,
//       top: `${clientY}px`,
//     },
//     { duration: 250, fill: "forwards" }
//   );
// };

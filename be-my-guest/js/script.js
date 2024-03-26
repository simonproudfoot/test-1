const endVals = gsap.utils.wrap([10, 314, 12]);
const staggerSpeed = 0.2
const distance = 50
// gsap.from("#headingText, #textContent", {
//     y: distance, opacity: 0, duration: 1, stagger: 0.2 
// })
gsap.from("h1, p, ul, .logo, form", {
    delay: 0.2, y: distance, opacity: 0, duration: 0.6, stagger: staggerSpeed 
})
// gsap.from(".statBox__title", {
//     x: distance, opacity: 0, duration: 1, stagger: staggerSpeed, delay: 0.5
// })
// gsap.to('.statBox__counter', {
//     delay: 0.5,
//     textContent: endVals,
//     snap: { textContent: 1 },
//     stagger: staggerSpeed,
// });
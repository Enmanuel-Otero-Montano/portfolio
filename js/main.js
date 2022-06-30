const menu = document.getElementById("menu")
const hamburger = document.querySelectorAll(".hamburger-menu")
const nav = document.querySelector(".nav")
const inputSun = document.querySelector(".sun")
const inputMoon = document.querySelector(".moon")
const body = document.querySelector("body")
const overlay = document.querySelector(".body-overlay")
const navLinks = document.querySelectorAll(".nav-links")
const comingSoon = document.querySelectorAll(".coming-soon")
const logo = document.querySelector(".logo-container")
const yellowIcon = document.querySelectorAll(".yellow-icon")
const buttonLeft = document.querySelectorAll(".btn-left")
const buttonRight = document.querySelectorAll(".btn-right")

menu.addEventListener("click", ()=> {
    if(window.matchMedia("(min-width: 1024px)").matches){
        overlay.classList.toggle("body-overlay-show")
    }else{
        hamburger[0].classList.toggle("top")
        hamburger[1].classList.toggle("middle")
        hamburger[2].classList.toggle("botton")
        nav.classList.toggle("nav-hidden")
        overlay.classList.toggle("body-overlay-show")
    }
})

inputMoon.addEventListener("click", ()=> {
    if(inputMoon.checked == true)
    inputMoon.hidden = true
    inputSun.hidden = false
    body.classList.add("dark")
    for(const icon of yellowIcon){
        icon.classList.add("yellow-icon-dark")
    }
})

inputSun.addEventListener("click", ()=> {
    if(inputSun.checked == true)
    inputSun.hidden = true
    inputMoon.hidden = false
    body.classList.remove("dark")
    for(const icon of yellowIcon){
        icon.classList.remove("yellow-icon-dark")
    }
})

for(const navLink of navLinks) {
    navLink.addEventListener("click", ()=> {
        hamburger[0].classList.remove("top")
        hamburger[1].classList.remove("middle")
        hamburger[2].classList.remove("botton")
        nav.classList.add("nav-hidden")
        overlay.classList.remove("body-overlay-show")
    })
}

logo.addEventListener("click", ()=>{
    logo.classList.add("logo-container-hidden")
})

/* Functions */

setInterval(() => {
    comingSoonAnimation()
}, 3000);

const comingSoonAnimation = ()=> {
    for(const early of comingSoon) {
        early.classList.toggle("coming-soon-showing")
        early.nextElementSibling.classList.toggle("overlay-coming-soon-hidden")
    }
}

const numberOfImages = {
    class: "project-images-slide-first"
}

const buttonLeftArray = Array.from(buttonLeft)

const projects = {
    0: 0,
    1: 0,
    2: 0
}

for(const right of buttonRight){
    right.addEventListener("click", ()=>{
        let index = buttonRightArray.indexOf(right)
        projects.index = ++projects[index]
        if(projects[index] === 1 ){
            numberOfImages.class = "left-images-slide-first"
            if(right.parentElement.previousElementSibling.children[0].classList.contains("right-images-slide-second")){
                right.parentElement.previousElementSibling.children[0].classList.remove("right-images-slide-second")
                right.parentElement.previousElementSibling.children[1].classList.remove("right-images-slide-second")
                right.parentElement.previousElementSibling.children[2].classList.remove("right-images-slide-second")
            }else{
                right.parentElement.previousElementSibling.children[0].classList.add(`${numberOfImages.class}`)
                right.parentElement.previousElementSibling.children[1].classList.add(`${numberOfImages.class}`)
                right.parentElement.previousElementSibling.children[2].classList.add(`${numberOfImages.class}`)
            }
        }else if(projects[index] === 2){
            numberOfImages.class = "left-images-slide-second"
            if(right.parentElement.previousElementSibling.children[0].classList.contains("right-images-slide-first")){
                right.parentElement.previousElementSibling.children[0].classList.replace("right-images-slide-first", `${numberOfImages.class}`)
                right.parentElement.previousElementSibling.children[1].classList.replace("right-images-slide-first", `${numberOfImages.class}`)
                right.parentElement.previousElementSibling.children[2].classList.replace("right-images-slide-first", `${numberOfImages.class}`)
            }else{
                right.parentElement.previousElementSibling.children[0].classList.add(`${numberOfImages.class}`)
                right.parentElement.previousElementSibling.children[1].classList.add(`${numberOfImages.class}`)
                right.parentElement.previousElementSibling.children[2].classList.add(`${numberOfImages.class}`)
            }
            right.previousElementSibling.classList.remove("btn-disabled-opacity")
            right.previousElementSibling.disabled = false
            right.classList.add("btn-disabled-opacity")
            right.disabled = true
        }
    })
}

const buttonRightArray = Array.from(buttonRight)

for(const left of buttonLeft){
    left.addEventListener("click", ()=>{
        let index = buttonLeftArray.indexOf(left)
        projects.index = --projects[index]
        if(projects[index] === 1){
            numberOfImages.class = "right-images-slide-first"
            if(left.parentElement.previousElementSibling.children[0].classList.contains("left-images-slide-second")){
                left.parentElement.previousElementSibling.children[0].classList.replace("left-images-slide-second", `${numberOfImages.class}`)
                left.parentElement.previousElementSibling.children[1].classList.replace("left-images-slide-second", `${numberOfImages.class}`)
                left.parentElement.previousElementSibling.children[2].classList.replace("left-images-slide-second", `${numberOfImages.class}`) 
            }else{
                left.parentElement.previousElementSibling.children[0].classList.add(`${numberOfImages.class}`)
                left.parentElement.previousElementSibling.children[1].classList.add(`${numberOfImages.class}`)
                left.parentElement.previousElementSibling.children[2].classList.add(`${numberOfImages.class}`)
            }
        }else if(projects[index] === 0){
            numberOfImages.class = "right-images-slide-second"
            if(left.parentElement.previousElementSibling.children[0].classList.contains("left-images-slide-first")){
                left.parentElement.previousElementSibling.children[0].classList.replace("left-images-slide-first", `${numberOfImages.class}`)
                left.parentElement.previousElementSibling.children[1].classList.replace("left-images-slide-first", `${numberOfImages.class}`)
                left.parentElement.previousElementSibling.children[2].classList.replace("left-images-slide-first", `${numberOfImages.class}`)
            }else{
                left.parentElement.previousElementSibling.children[0].classList.add(`${numberOfImages.class}`)
                left.parentElement.previousElementSibling.children[1].classList.add(`${numberOfImages.class}`)
                left.parentElement.previousElementSibling.children[2].classList.add(`${numberOfImages.class}`)
            }
            left.nextElementSibling.classList.remove("btn-disabled-opacity")
            left.nextElementSibling.disabled = false
            left.disabled = true
            left.classList.add("btn-disabled-opacity")
        }
    })
}
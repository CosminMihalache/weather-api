localStorage.setItem("city","Bucuresti")

function setLocalStorage(city){
localStorage.setItem("city",city)
return localStorage.getItem("city")
}
document.addEventListener("scroll", function () {
    const viewportHeight = window.innerHeight;
    const scrollYPosition = window.scrollY;

    if (scrollYPosition > viewportHeight / 2) {
        document.querySelector(".material-symbols-outlined").classList.remove("hide");
        console.log(document.querySelector(".material-symbols-outlined").classList)
    } else {
        document.querySelector(".material-symbols-outlined").classList.add("hide");
    }
});


document.querySelector(".material-symbols-outlined").addEventListener("click",()=>{
    window.scroll(0, 0);
})

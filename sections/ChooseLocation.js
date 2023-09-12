
document.querySelector("strong").textContent=localStorage.getItem("city")?localStorage.getItem("city"):"Bucuresti"
document.querySelector(".bucharest").addEventListener("click",()=>{
document.querySelector("strong").textContent="Bucuresti"
})
document.querySelector(".oradea").addEventListener("click",()=>{
    document.querySelector("strong").textContent="Oradea"
    })
    document.querySelector(".timisoara").addEventListener("click",()=>{
        document.querySelector("strong").textContent="Timisoara"
        })
        document.querySelector(".arad").addEventListener("click",()=>{
            document.querySelector("strong").textContent="Arad"
            })
            document.querySelector(".sibiu").addEventListener("click",()=>{
                document.querySelector("strong").textContent="Sibiu"
                })
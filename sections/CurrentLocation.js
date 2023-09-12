





function Data(){
    const dataCurrent={}
    let city=localStorage.getItem("city")?localStorage.getItem("city"):"Bucuresti" ;
    
    async function getCurrentState(city){
        let city2=localStorage.getItem("city")?localStorage.getItem("city"):"Bucuresti"
      
     const  data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2==="Bucuresti"?" Bucharest" : city2 }&lang=ro&units=metric&appid=53f28917cbf7fc1adb76768c38edc16a`)
     .then((respons)=>respons.json())
     .then((data)=>data).catch(error=>console.error("Problem:"+error))
     console.log(data)
     stats=data.main
     console.log(stats)
     document.querySelector(".n-judet").textContent=` ${city2==="Arad" ? "Judetul Arad" :city2}`
     const temp=stats.temp
     const temp_real=stats.feels_like
     document.querySelector(".temp").textContent=`${Math.ceil(temp)}°C`
     document.querySelector(".real-feel").textContent=`${Math.ceil(temp_real)}°C`
     const wh=data.weather

function firstLetter(string){
    let fL=string[0].toUpperCase()
    return fL+string.slice(1)

}

     document.querySelector(".sky").textContent=`${firstLetter(wh[0].description)}`
     
     const speed=data.wind
     document.querySelector(".wind").textContent=`${Math.ceil(speed.speed)} km/h`

    
     
     let date=new Date()
     function weekDay(day){
        switch (day) {
            case 1: return"Luni"
                
                break;
                case 2:return"Marti"
                
                break;
                case 3:return "Miercuri"
                
                break;
                case 4: return "Joi"
                
                break;
                case 5: return"Vineri"
                
                break;
                case 6: return"Sambata"
                
                break;
                case 7: return"Duminica"
                
                break;
        
            default:
                break;
        }
     }
      function minutes(){
        if(date.getMinutes()<10){
            return `0${date.getMinutes()}`
        }
        else {
            return  `${date.getMinutes()}`
        }
      }
     document.querySelector(".zi-ora").textContent=`${weekDay(date.getDay())}, `
     document.querySelector(".clock").textContent=`  ${ date.getHours()}:${minutes()} `
     document.querySelector(".img").src=`${getWeatherIcon(wh[0].icon)}`
     console.log(wh[0].icon)


}
getCurrentState(city)

}
Data()




document.querySelectorAll(".dropdown-item").forEach((d)=>d.addEventListener("click",function Data(){

const cont=document.querySelectorAll(".rem")
cont.forEach((e)=>{
e.remove()
})


    let city=d.textContent;
    
    async function getCurrentState(city){
       let city2= setLocalStorage(city)
     const  data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&lang=ro&units=metric&appid=53f28917cbf7fc1adb76768c38edc16a`)
     .then((respons)=>respons.json())
     .then((data)=>data).catch(error=>console.error("Problem:"+error))
     console.log(data)
     stats=data.main
     console.log(stats)
     document.querySelector(".n-judet").textContent=`${city2==="Arad" ? "Judetul Arad" :city2}`
     const temp=stats.temp
     const temp_real=stats.feels_like
     document.querySelector(".temp").textContent=`${Math.ceil(temp)}°C`
     document.querySelector(".real-feel").textContent=`${Math.ceil(temp_real)}°C`
     const wh=data.weather
     document.querySelector(".sky").textContent=`${wh[0].description}`
     
     const speed=data.wind
     document.querySelector(".wind").textContent=`${Math.ceil(speed.speed)} km/h`


 
     let date=new Date()
     function weekDay(day){
        switch (day) {
            
                case 1:return"Luni"
                
                break;
                case 2:return"Marti"
                
                break;
                case 3:return "Miercuri"
                
                break;
                case 4: return "Joi"
                
                break;
                case 5: return"Vineri"
                
                break;
                case 6: return"Sambata"
                
                break;
                case 7: return"Duminica"
                
                break;
        
            default:
                break;
        }
     }
    
     function minutes(){
        if(date.getMinutes()<10){
            return `0${date.getMinutes()}`
        }
        else {
            return  `${date.getMinutes()}`
        }
      }
     document.querySelector(".zi-ora").textContent=`${weekDay(date.getDay())}, `
     document.querySelector(".clock").textContent=`  ${ date.getHours()}:${minutes()} `
     document.querySelector("img").src=`${getWeatherIcon(wh[0].icon)}`
     console.log(wh[0].icon)

}
getCurrentState(city)

weatherForecast(city)





}


))

getCurrentState('Bucharest')
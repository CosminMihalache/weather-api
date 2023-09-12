let forecastData={}
let i=0
async function weatherForecast(city){
    i=0
    let days_forecast=[]
  const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=53f28917cbf7fc1adb76768c38edc16a`).then((resolve)=>resolve.json()).then((data)=>data).catch(error=>console.error("Problem:"+error))



console.log(data)

function getCurrentDay(){
    day=new Date().getDay()
    return day
}
const currentDay=getCurrentDay()



const list=data.list
let days=[]
list.forEach((data)=>{
    

    c=data.dt_txt
day=parseInt(c.slice(8,10))
if(!days.find(i=>i===day)){
    days.push(day)
    
}})

days.pop()

day0=currentDay

list.forEach((data)=>{
    

    
dayInObject=''
if (!forecastData[dayInObject]) {
  
    if(day0>7){
        day0=1
    }
    switch (day0) {
        case 1:dayInObject="Luni"
            
            break;
            case 2:dayInObject="Marti"
            
            break;
            case 3:dayInObject="Miercuri"
            
            break;
            case 4:dayInObject="Joi"
            
            break;
            case 5:dayInObject="Vineri"
            
            break;
            case 6:dayInObject="Sambata"
            
            break;
            case 7:dayInObject="Duminica"
            
            break;
    
        default:
            break;
    }
    day0=day0+1
    if(dayInObject!=""){
        if(!forecastData[dayInObject]){
        console.log(i)
        if(days[i]!=undefined){
    forecastData[days[i]]=[dayInObject]
    i=i+1}
}}
   

}



})


for(let i in forecastData){
    console.log(forecastData)
}
console.log(days)
list.forEach((stringDay)=>{
    days.forEach((d)=>{
        
            m=stringDay.dt_txt
            if(d===parseInt(m.slice(8,10))){
                x=stringDay.main
                w=stringDay.weather
                if (!forecastData[d]) {
                    forecastData[d] = [];
                  }
                forecastData[d].push([Math.ceil(x.temp),m.slice(11,16),Math.ceil(x.feels_like),w[0].description,w[0].icon])
              
                
            }
            console.log(forecastData[d])
    })
    
})
console.log(forecastData)
const keys=Object.keys(forecastData)
const lastKey= keys[keys.length-1]
const lastDay=forecastData[lastKey]
lastDay.pop()
lastDay.pop()
console.log(lastDay)



for (let x in forecastData) {

    h=forecastData[x].slice()
    y=forecastData[x]
    console.log(h[0])
    h.shift()

    console.log(h)

   let hours= h.map((temp,ora,temp_reala,sky,png)=>{
    return`  
    <div class="hours rem">
    <div class="forecast-hour-item rem">
    <span class="hour-forecast item rem">${temp[1]}</span>
    <img class="rem" src="${getWeatherIcon(temp[4])}" alt="">
    <span class="grades-forecast rem item">
    ${temp[0]}°C</span>
      <span class="hours rem item">${temp[3]}</span>
      <span class="hours rem item2 "> Real feel:${temp[2]}°C</span>
  </div>
  </div>
`

   })
   
    days_forecast.push([`<h1 class="week-day rem">${y[0]}</h1>`,hours])
    
}
console.log( days_forecast)


for (let i=0 ;i<5;i++) {
    
    console.log(days_forecast[i][0])

    document.querySelector(".hours").insertAdjacentHTML('beforeend',days_forecast[i][0] );
    days_forecast[i][1].forEach((el)=>{
        document.querySelector(".hours").insertAdjacentHTML('beforeend',el )
    }
    )
  
}
console.log(days_forecast)
days_forecast.length = 0
forecastData={}
console.log(days_forecast)
}




weatherForecast('Bucharest')










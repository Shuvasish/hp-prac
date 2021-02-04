const apiKey = '337ad720c924c5c104eb4f1d29b02c4d';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';
const city = document.getElementById('city');
const search = document.getElementById('search_button');
const temp = `${apiBase}?q={city name}&appid={${apiKey}}`
let latitude;
let longitude;
let my;
const curLoc = navigator.geolocation.getCurrentPosition(function(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
     
    my = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=337ad720c924c5c104eb4f1d29b02c4d`;
//    console.log(latitude,longitude);
    fetch(my).then(res => res.json()).then(data=>{
        document.getElementById('show_city').textContent = `${data.city.name}`;
        document.getElementById('show_temperature').textContent = (data.list[0].main.temp-273.15).toFixed(2);
        document.getElementById('weather_status').textContent = data.list[0].weather[0].main;
//        console.log(data)
        
    }).catch('err');
    
});

search.addEventListener('click',function(e){
    e.preventDefault();
    const input = city.value;
//    console.log(input);
    
    my = `http://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=337ad720c924c5c104eb4f1d29b02c4d`;
//    console.log(my);
    fetch(my).then(res=>res.json()).then(data=>{
        if(data.cod==="404"){
            alert('please recheck your given city name!')
        }else{
            document.getElementById('show_city').textContent = `${data.city.name}`;
            document.getElementById('show_temperature').textContent = (data.list[0].main.temp-273.15).toFixed(2);
            document.getElementById('weather_status').textContent = data.list[0].weather[0].main;
        }
//        console.log(data);
    }).catch('error');
    
    
})

















//const getWeatherData = city => {
//    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
//    fetch(url)
//        .then(response => response.json())
//        .then(data => updateUI(data))
//}
//
//const searchBtn = document.getElementById('search_button');
//searchBtn.addEventListener('click', () => {
//    const inputCity = document.getElementById('city').value;
//    getWeatherData(inputCity)
//})
//
//const updateUI = data => {
//    document.getElementById('show_city').innerText = data.name || "Unknown Location!";
//    document.getElementById('show_temperature').innerText = data.main.temp;
//    document.getElementById('weather_status').innerText = data.weather[0].main;
//    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
//    document.getElementById('city').value = "";
//}
//
//getWeatherData('Dhaka');
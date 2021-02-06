const cntContainer = document.querySelector('.ct-container');
const details = document.querySelector('.details');
const openMap = function(coords,name){
    const map = L.map('map').setView(coords, 6);
        
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
        
        L.marker(coords)
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 80,
          minWidth: 50,
          autoClose: false,
          closeOnClick: false,
          className: ``,
        })
      )
      .setPopupContent(
        `${name}`
      )
      .openPopup();
}
const data = fetch('https://restcountries.eu/rest/v2/all').then(res => res.json()).then(data=>{
//    console.log(data);
    
    data.forEach(e=>{
        cntContainer.insertAdjacentHTML('beforeend',`
<div class="col-4 border my-target custom-height d-flex flex-column justify-content-center ">
    <h1 class="country-name  text-center">${e.name}</h1>
    <h3 class="text-center">${e.capital}</h3>
</div>
`);
    });
});

cntContainer.addEventListener('click',function(e){
    const country = e.target.closest('.my-target').querySelector('.country-name').textContent;
//    con   sole.log(country);
    const customApi = `https://restcountries.eu/rest/v2/name/${country}`
//    console.log(customApi);

    fetch(customApi).then(res=>res.json()).then(data=>{
        const countryDetails = data[0];
        console.log(countryDetails);
        const html = `
                <h1 class="country-name  text-center">${countryDetails.name}</h1>
                <div class="img-container">
                    <img src="${countryDetails.flag}" class="img img-fluid" alt="">
                </div>
                <h5 class="text-left ml-2 mt-4 mb-2">Capital: <span class="capital">${countryDetails.capital}</span></h5>

                <h5 class="text-left ml-2 my-2">Population: <span class="population">${countryDetails.population}</span></h5>

                <h5 class="text-left ml-2 my-2">Area: <span class="area">${countryDetails.area}</span></h5>

                <h5 class="text-left  ml-2 my-2">Language: <span class="language">${countryDetails.languages[0].name}</span></h5>
                <div class="bg-danger custom-height img-container">
                    <div class='custom-height' id="map"></div>
                </div>
`
//        console.log(html);
        
        details.innerHTML = html;
//        console.log(countryDetails.latlng);
        openMap(countryDetails.latlng,countryDetails.name);
        
    })
})
//-------------------------------------------------






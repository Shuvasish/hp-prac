const cntContainer = document.querySelector('.ct-container');
const details = document.querySelector('.details');

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
        
        const html = `
                <h1 class="country-name  text-center">${countryDetails.name}</h1>
                <div class="img-container">
                    <img src="${countryDetails.flag}" class="img img-fluid" alt="">
                </div>
                <h5 class="text-left ml-2 mt-4 mb-2">Capital: <span class="capital">${countryDetails.capital}</span></h5>

                <h5 class="text-left ml-2 my-2">Population: <span class="population">${countryDetails.population}</span></h5>

                <h5 class="text-left ml-2 my-2">Area: <span class="area">${countryDetails.area}</span></h5>

                <h5 class="text-left ml-2 my-2">Language: <span class="language">${countryDetails.languages[0].name}</span></h5>`
//        console.log(html);
        details.innerHTML = html;
    })
})
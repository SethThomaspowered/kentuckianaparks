//Trying to create search options by clicking on radio buttons.
const zipCodeCheck = document.getElementById('ZipCodeCheck'),
    cityCheck = document.getElementById('CityCheck'),
    countyCheck = document.getElementById('CountyCheck'),
    zip = document.getElementById('zipcode'),
    county = document.getElementById('county'),
    city = document.getElementById('city');


zipCodeCheck.addEventListener('click', function(){
    if (zipCodeCheck) {
        if (zip.classList.contains('d-none')) {
            zip.classList.remove('d-none');
        }
        else {
            zip.classList.add('d-none');
        }}})
countyCheck.addEventListener('click', function(){    
    if (countyCheck) {
        if (county.classList.contains('d-none')) {
            county.classList.remove('d-none');
    }else {
        county.classList.add('d-none');
}}
})
cityCheck.addEventListener('click', function(){    
    if (cityCheck) {
        if (city.classList.contains('d-none')) {
            city.classList.remove('d-none');
        }
        else {
            city.classList.add('d-none');
}}
})

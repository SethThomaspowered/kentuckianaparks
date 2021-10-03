const parkChecks = {
    zipCodeCheck : document.getElementById('ZipCodeCheck'),
    cityCheck : document.getElementById('CityCheck'),
    countyCheck : document.getElementById('CountyCheck')
}
for (check in parkChecks) {check.addEventListener('click', function(){
    const zip = document.getElementById('zipcode')
    if (zip.classList.contains('d-none')) {
        zip.classList.remove('d-none');
    }
    else {
        zip.classList.add('d-none');
    }
})}
const zipCodeCheck = document.getElementById('ZipCodeCheck')
zipCodeCheck.addEventListener('click', function(){
    const zip = document.getElementById('zipcode')
    if (zip.classList.contains('d-none')) {
        zip.classList.remove('d-none');
    }
    else {
        zip.classList.add('d-none');
    }
})
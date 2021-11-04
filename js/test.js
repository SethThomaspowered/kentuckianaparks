//Trying to create search options by clicking on radio buttons.
// const zipCodeCheck = document.getElementById('submit'),
//     zip = document.getElementById('zipcode'),
//     county = document.getElementById('county'),
//     city = document.getElementById('city');


// zipCodeCheck.addEventListener('click', function(){
//     if (app.searchParam) {
//         console.log(app.searchParam)
//         if (zip.classList.contains('d-none')) {
//             zip.classList.remove('d-none');
//         }
//         else {
//             zip.classList.add('d-none');
//         }}})
/*countyCheck.addEventListener('click', function(){    
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
})*/
// console.log(cities)
$(document).ready(function(){
  
    // var $terms =[
    //   'jefferson',
    //   'clark',
    //   'bullitt',
    //   'harrison',
    //   'floyd',
    //   'meade',
    //   'shelby',
    //   'oldham',
    //   'spencer',
    //   'hardin',
    //   'louisville',
    //   'new albany',
    //   'clarksville',
    //   'jeffersonville',
    //   'corydon'
    //    ].sort(),
    //    $return = [];
    var $terms =masterList.sort(),
       $return = [];
    function strInArray(str, strArray) {
      for (var j=0; j<strArray.length; j++) {
        if (strArray[j].match(str) && $return.length < 5) {
          var $h = strArray[j].replace(str, '<strong>'+str+'</strong>');
          $return.push('<li class="prediction-item"><span class="prediction-text">' + $h + '</span></li>');
        }
      }
    }
      
    function nextItem(kp) {
      if ( $('.focus').length > 0 ) {
        var $next = $('.focus').next(),
            $prev = $('.focus').prev();
      }
      
      if ( kp == 38 ) { // Up
      
        if ( $('.focus').is(':first-child') ) {
          $prev = $('.prediction-item:last-child');
        }
        
        $('.prediction-item').removeClass('focus');
        $prev.addClass('focus');
        
      } else if ( kp == 40 ) { // Down
      
        if ( $('.focus').is(':last-child') ) {
          $next = $('.prediction-item:first-child');
        }
        
        $('.prediction-item').removeClass('focus');
        $next.addClass('focus');
      }
    }
    
    $(function(){  
      $('#search-bar').keydown(function(e){
        $key = e.keyCode;
        if ( $key == 38 || $key == 40 ) {
          nextItem($key);
          return;
        }
        
        setTimeout(function() {
          var $search = $('#search-bar').val();
          $return = [];
          
          strInArray($search, $terms);
          
          if ( $search == '' || ! $('input').val ) {
            $('.output').html('').slideUp();
          } else {
            $('.output').html($return).slideDown();
          }
      
          $('.prediction-item').on('click', function(){
            $text = $(this).find('span').text();
            $('.output').slideUp(function(){
              $(this).html('');
            });
            $('#search-bar').val($text);
          });
          
          $('.prediction-item:first-child').addClass('focus');
          
        }, 50);
      });
    });
      
      $('#search-bar').focus(function(){
        if ( $('.prediction-item').length > 0 ) {
          $('.output').slideDown();
        }
        
        $('#searchform').submit(function(e){
          e.preventDefault();
          $text = $('.focus').find('span').text();
          $('.output').slideUp();
          $('#search-bar').val($text);
          $('input').blur();
        });
      });
      
      $('#search-bar').blur(function(){
        if ( $('.prediction-item').length > 0 ) {
          $('.output').slideUp();
        }
      });
    });
// const input = document.querySelector('#name');
// const form = document.querySelector('form');
// const submit = document.querySelector('#submitName');
// const remove = document.querySelector('#clear');
    
var storage = localStorage;
    
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   });
    
// submit.addEventListener('click', () => {
//   storage.setItem('name', input.value);
//     updateNameTitle();
//   });
    
//   remove.addEventListener('click', () => {
//     storage.removeItem('name');
//     updateNameTitle();
//   });
    
    
//     function updateNameTitle(){
//         const name = storage.getItem('name');
    
//     const h1 = document.querySelector('#title');
    
//     name ? h1.textContent = `Welcome ${name}` : h1.textContent = '';
//     }
let welcomeName = document.getElementById("welcome")
let dName= storage.getItem('name')
welcomeName.innerText = dName
storage.setItem("parks1", JSON.stringify(parks[1]));
let retrievedParks = storage.getItem('parks1');
console.log('retrieved Parks: ', JSON.parse(retrievedParks));
console.log(JSON.parse(retrievedParks).address)
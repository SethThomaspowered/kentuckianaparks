const app = new Vue ({
	el: '#app',
	data() {
		return {
			selectedPark: "CHEROKEE",
            selectedCity: "".toLowerCase(),
            selectedCounty: "".toLowerCase(),
            selectedZipCode: "",
            highlights: highlights,
            randomId: Math.floor((Math.random() * 290) + 1),
            parks: parks,
            searchParam: '',
            zipCodeCheck : document.getElementById('submit'),
            zip : document.getElementById('zipcode'),
            county : document.getElementById('county'),
            city : document.getElementById('city')
        }
	},
     methods: {
        
         }
     },
)

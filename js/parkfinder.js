const app = new Vue ({
	el: '#app',
	data() {
		return {
			selectedPark: "CHEROKEE",
            selectedCity: "",
            selectedCounty: "",
            selectedZipCode: "",
            highlights: highlights,
            randomId: Math.floor((Math.random() * 290) + 1),
            parks: parks,
        }
	},
     
})

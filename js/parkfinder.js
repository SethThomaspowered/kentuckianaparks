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
            search: 'walking',
            featuresList: ['disc golf', 'golf', 'walking', 'basketball']
        }
	},
    computed: {
        filteredList() {
          return this.featuresList.filter(feature => {
            return feature.toLowerCase().includes(this.search.toLowerCase())
          })
        }
    } 
})

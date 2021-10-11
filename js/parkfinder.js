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
<<<<<<< HEAD
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
=======
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
>>>>>>> f2cfa2920c6623bf94fe0cf797c45eae1ddeec28

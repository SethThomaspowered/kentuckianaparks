const app = new Vue ({
	el: '#app',
	data() {
		return {
			selectedPark: "CHEROKEE",
      highlights: highlights,
      randomId: Math.floor((Math.random() * 290) + 1),
      parks: parks,
      searchParam: '',
      search: '',
      featuresList: featuresList,
      masterList: masterList,
      }
	},
    computed: {
        filteredList() {
          return this.featuresList.filter(feature => {
            return feature.toLowerCase().includes(this.search.toLowerCase())
          })
        },
        searchedFeatures() {
          const searchFilter = highlight => {
            return highlight.parkName.toLowerCase().match(this.search.toLowerCase()) 
            || highlight.features.toLowerCase().match(this.search.toLowerCase());
          };
          
          results=_.filter(this.highlights, searchFilter);
          resultsArray=Array(results)
          return results;
        },
        searchedParks() {
          const searchFilter = park => {
            return park.city.toLowerCase().match(this.searchParam.toLowerCase())
            || park.county.toLowerCase().match(this.searchParam.toLowerCase())
            || park.zipCode.match(this.searchParam.toLowerCase());
          };
          
          results=_.filter(this.parks, searchFilter);
          resultsArray=Array(results)
          return results;
        },
        saveResults(e) { 
          //   for (let i = 0; i < parks.length; i++) {
          //     if (parks[i].visited || parks[i].favorite) {
          //       storage.setItem("parks" + parks[i].id, JSON.stringify(parks[i]));
          //   }
          // }
            console.log("This works");
          },
         
  },
})

const app = new Vue ({
	el: '#app',
	data() {
		return {
			selectedPark: "",
            selectedZipCode: 40202,
            parks: [
			{id: 1,	parkName: '35TH STREET', 	address: "814 SOUTH 35TH ST",	zipCode: "40211", visited: false,},
            {id: 2,	parkName: "CRESCENT HILL",	address: "3110 BROWNSBORO RD",	zipCode: "40206", visited: false,},
            {id: 3, parkName: "ALGONQUIN",	address: "1614 CYPRESS ST",	zipCode: "40210", visited: false,},
            {id: 4, parkName: "BELLEVUE",	address: "4711 BELLEVUE AVE",	zipCode: "40215", visited: false,},
            {id: 5, parkName: "BEN WASHER",	address: "519 WEST KENTUCKY ST",	zipCode: "40203", visited: false,},
            {id: 6, parkName: "BINGHAM",	address: " 160 CORAL AVE",	zipCode: "40206", visited: false,},
            {id: 7, parkName: "BRADLEY",	address: "2516 BRADLEY AVE",	zipCode: "40217", visited: false,},
            {id: 8, parkName: "BUECHEL",	address: "247 ALPHA AVE",	zipCode: "40218", visited: false,},
            {id: 9, parkName: "CAMP TAYLOR",	address: "4201 LEE AVE",	zipCode: "40213", visited: false,},
            {id: 10, parkName: "CANE RUN",	address: "4816 CANE RUN RD", zipCode: "40216", visited: false,},
            {id: 11, parkName: "CAPERTON SWAMP",	address: "3916 RIVER RD",	zipCode: "40207", visited: false,},
            {id: 12, parkName: "CENTRAL",	address: "1340 SOUTH FOURTH ST", zipCode: "40208", visited: false,},
            {id: 13, parkName: "CHICKASAW",	address: "1200 SOUTHWESTERN PKWY",	zipCode: "40211", visited: false,},
            {id: 14, parkName: "CLIFF",	address: "4666 CLIFF AVE",	zipCode: "40215", visited: false,},
            {id: 15, parkName: "CLIFTON", address: "133 NORTH CHARLTON ST",	zipCode: "40206", visited: false,},
            {id: 16, parkName: "CARRIE GAULBERT COX",	address: "3730 RIVER RD",	zipCode: "40207", visited: false,},
            {id: 17, parkName: "DOUGLASS",	address: "2305 DOUGLASS BLVD",	zipCode: "40205", visited: false,},
            {id: 18, parkName: "EASTOVER",	address: "118 SACRED HEART LN",	zipCode: "40206", visited: false,},
            {id: 19, parkName: "FAIRDALE MINI", address: "10714 WEST MANSLICK RD",	zipCode: "40118", visited: false,},
            {id: 20, parkName: "FLAGET FIELD",	address: "4425 GREENWOOD AVE",	zipCode: "40211", visited: false,},
            {id: 21, parkName: "GERMAN-PARISTOWN",	address: "1134 EAST KENTUCKY ST",	zipCode: "40204", visited: false,},
            {id: 22, parkName: "GNADINGER", address: "103 ELLISON AVE",	zipCode: "40204", visited: false,},
            {id: 23, parkName: "WILLIAM HARRISON",	address: "3232 OLEANDA AVE",	zipCode: "40215", visited: false,},
            {id: 24, parkName: "HOPEWELL",	address: "509 NORTH BIRCHWOOD AVE",	zipCode: "40206", visited: false,},
            {id: 25, parkName: "NELSON HORNBECK",	address: "709 FAIRDALE RD",	zipCode: "40118", visited: false,},
            {id: 26, parkName: "HOUNZ LANE",	address: "2300 HOUNZ LN",	zipCode: "40223", visited: false,},
            {id: 27, parkName: "IRISH HILL",	address: "1131 LEXINGTON RD",	zipCode: "40204", visited: false,},
            {id: 28, parkName: "LOUIS B. ISRAEL", address: "4708 SOUTH FIRST ST",	zipCode: "40214", visited: false,},
            {id: 29, parkName: "HAYS KENNEDY",	address: "7303 BEACHLAND BEACH RD",	zipCode: "40059", visited: false,},
            {id: 30, parkName: "KENNEDY COURT",	address: "225 KENNEDY AVE",	zipCode: "40206", visited: false,},
            {id: 31, parkName: "KLONDIKE",	address: "3809 KLONDIKE LN",	zipCode: "40218", visited: false,},
            {id: 32, parkName: "LAKE DREAMLAND", address: "4400 LAKE DREAMLAND RD",	zipCode: "40216", visited: false,},
            {id: 34, parkName: "SENECA GOLF COURSE",	 address: "2300 PEE WEE REESE RD",	zipCode: "40205", visited: false,},
            {id: 35, parkName: "CHARLES YOUNG",	address: "2721 LYTLE ST",	zipCode: "40212", visited: false,},
            {id: 36, parkName: "ROBERSON RUN",	address: "8205 JUDGE BLVD",	zipCode: "40219", visited: false,},
            {id: 37, parkName: "IROQUOIS GOLF COURSE",	address: "1501 RUNDILL RD",	zipCode: "40214", visited: false,},
            {id: 38, parkName: "NORFOLK ACRES",	address: "4300 CORAM WAY",	zipCode: "40218", visited: false,},
            {id: 39, parkName: "CALIFORNIA",	address: "1104 SOUTH 16TH ST",	zipCode: "40210", visited: false,},
            {id: 40, parkName: "SUN VALLEY GOLF COURSE", address: "6505 BETHANY LN",	zipCode: "40272", visited: false,},
            {id: 41, parkName: "LAPORTE",	address: "2529 BANK ST",	zipCode: "40212", visited: false,},
            {id: 42, parkName: "ELLIOT SQUARE",	address: "630 SOUTH 28TH ST",	zipCode: "40211", visited: false,},
            {id: 43, parkName: "EMERSON",	address: "1100 SYLVIA ST",	zipCode: "40217", visited: false,},
            {id: 44, parkName: "MCNEELY LAKE",	address: "10500 CEDAR CREEK RD",	zipCode: "40229", visited: false,},
            {id: 45, parkName: "BOONE SQUARE",	address: "1935 ROWAN ST",	zipCode: "40203", visited: false,},
            {id: 46, parkName: "OLD WALNUT / BEECHER",	address: "904 WEST MUHAMMAD ALI BLVD",	zipCode: "40203", visited: false,},
            {id: 47, parkName: "SLEVIN",	address: "341 NORTH 25TH ST",	zipCode: "40212", visited: false,},
            {id: 48, parkName: "RUSSELL LEE",	address: "3701 SOUTHERN AVE",	zipCode: "40211", visited: false,},	 	
            {id: 50, parkName: "DAVID ARMSTRONG EXTREME", address: "148 NORTH CLAY ST",	zipCode: "40202", visited: false,},
            {id: 51, parkName: "MAGNOLIA", address: "1407 SOUTH SECOND ST",	zipCode: "40208", visited: false,},
            {id: 52, parkName: "MEDORA",	address: "6210 PENDLETON RD",	zipCode: "40272", visited: false,},
            {id: 53, parkName: "MEMORIAL",	address: "971 SOUTH FOURTH ST",	zipCode: "40203", visited: false,},
            {id: 54, parkName: "G.G. MOORE",	address: "626 M ST",	zipCode: "40208", visited: false,},
            {id: 55, parkName: "PARKHILL",	address: "1703 SOUTH 13TH ST",	zipCode: "40210", visited: false,},
            {id: 56, parkName: "PATTERSON",	address: "1418 MORTON AVE",	zipCode: "40204", visited: false,},
            {id: 57, parkName: "PEEWEE",	address: "2913 KLONDIKE LN",	zipCode: "40218", visited: false,},
            {id: 58, parkName: "HUSTON QUIN",	address: "4105 SOUTH FIRST ST",	zipCode: "40214", visited: false,},
            {id: 59, parkName: "GINNY REICHARD",	address: "1001 FRANKLIN ST",	zipCode: "40206", visited: false,},
            {id: 60, parkName: "RIVERSIDE GARDENS",	address: "2899 LEES LN",	zipCode: "40216", visited: false,},
            {id: 61, parkName: "RIVERVIEW",	address: "8202 GREENWOOD RD",	zipCode: "40258", visited: false,},
            {id: 62, parkName: "RIVERSIDE, THE FARNSLEY-MOREMAN LANDING",	address: "7410 MOORMAN RD",	zipCode: "40272", visited: false,},
            {id: 63, parkName: "RUBEL", address: "667 BARRET AVE",	zipCode: "40204", visited: false,},
            {id: 64, parkName: "SHAWNEE",	address: "4501 WEST BROADWAY",	zipCode: "40211", visited: false,},
            {id: 65, parkName: "SHELBY",	address: "600 EAST OAK ST",	zipCode: 40203, visited: false,},
            {id: 66, parkName: "STORY AVENUE",	address: "1531 STORY AVE",	zipCode: 40206, visited: false,},
            {id: 67, parkName: "SYLVANIA",	address: "6650 SYLVANIA RD",	zipCode: 40258, visited: false,},
            {id: 68, parkName: "TWIN PARK",	address: "3145 RIVER RD",	zipCode: 40207, visited: false,},
            {id: 69, parkName: "TYLER",	address: "1501 CASTLEWOOD AVE",	zipCode: 40204, visited: false,},
            {id: 70, parkName: "WATTERSON LAKE",	address: "1714 SOUTH WHEATMORE DR",	zipCode: 40215, visited: false,},
            {id: 71, parkName: "WAYSIDE",	address: "3190 SOUTH THIRD ST",	zipCode: 40214, visited: false,},
            {id: 72, parkName: "WILLOW",	address:  "1402 WILLOW AVE",	zipCode: 40204, visited: false,},
            {id: 73, parkName: "GEORGE ROGERS CLARK",	address: "1024 THRUSTON AVE",	zipCode: 40217, visited: false,},
            {id: 74, parkName: "CHEROKEE",	address: "745 COCHRAN HILL RD",	zipCode: 40206, visited: false,},
            {id: 75, parkName: "JEFFERSON MEMORIAL FOREST",	address: "11311 MITCHELL HILL",	zipCode: 40118, visited: false,},
            {id: 76, parkName: "E. LELAND TAYLOR",	address: "317 NORTH 38TH ST",	zipCode: 40212, visited: false,},
            {id: 77, parkName: "SHAWNEE GOLF COURSE",	address: "460 NORTHWESTERN PKWY",	zipCode: 40212, visited: false,},
            {id: 78, parkName: "WILLIAM BRITT",	address: "2801 MAGAZINE ST",	zipCode: 40211, visited: false,},
            {id: 79, parkName: "PORTLAND WHARF",	address: "719 NORTH 32ND ST",	zipCode: 40212, visited: false,},
            {id: 80, parkName: "PORTLAND",	address: "640 NORTH 27TH ST",	zipCode: 40212, visited: false,},
            {id: 81, parkName: "WESTONIA",	 address: "2900 ROWAN ST",	zipCode: 40212, visited: false,},
            {id: 82, parkName: "HIGHVIEW",	address: "7201 OUTER LOOP",	zipCode: 40228, visited: false,},
            {id: 83, parkName: "SHEPPARD",	 address: "1601 MAGAZINE ST",	zipCode: 40203, visited: false,},
            {id: 84, parkName: "OKOLONA",	address: "1114 CLAY AVE",	zipCode: 40219, visited: false,},
            {id: 85, parkName: "CRESCENT HILL GOLF COURSE",	address: "3110 BROWNSBORO RD",	zipCode: 40206, visited: false,},
            {id: 86, parkName: "FARNSLEY",	address: "3100 WEDGEWOOD WAY", zipCode: 40220, visited: false,},
            {id: 87, parkName: "CROSBY",	address: "11500 CEDARDALE RD", zipCode: 40223, visited: false,},
            {id: 88, parkName: "VICTORY",	address: "1051 SOUTH 23RD ST", zipCode: 40210, visited: false,},
            {id: 89, parkName: "ST LOUIS",	address: "2023 ST LOUIS AVE", zipCode: 40210, visited: false,},
            {id: 90, parkName: "DES PRES",	address: "4709 LOWE RD", zipCode: 40220, visited: false,},
            {id: 91, parkName: "IVY COURT",	 address: "3245 LARKWOOD AVE", zipCode: 40212, visited: false,},
            {id: 92, parkName: "LONG RUN GOLF COURSE",	address: "1605 FLAT ROCK RD", zipCode: 40245, visited: false,},
            {id: 93, parkName: "SUN VALLEY",	address: "6505 BETHANY LN", zipCode: 40272, visited: false,},
            {id: 94, parkName: "CHARLIE VETTINER GOLF COURSE",	address: "10207 MARY DELL LN", zipCode: 40299, visited: false,},
            {id: 95, parkName: "WAVERLY",	 address: "4800 WAVERLY PARK RD", zipCode: 40214, visited: false,},
            {id: 96, parkName: "CHARLIE VETTINER",	address: "5550 CHARLIE VETTINER PARK RD", zipCode: 40299, visited: false,},
            {id: 97, parkName: "IROQUOIS",	address: "2120 RUNDILL RD", zipCode: 40214, visited: false,},
            {id: 98, parkname: "SENECA"	address: "3151 PEE WEE REESE RD",	zipCode: "40205", visited: false,},
            {id: 99, parkName: "CHEROKEE GOLF COURSE",	address: "2501 ALEXANDER RD",	zipCode: "40204", visited: false,},
            {id: 100,	parkName: "THURMAN HUTCHINS",	address: "3734 RIVER RD",	zipCode: "40207", visited: false,},
            {id: 101,	parkName: "BAXTER SQUARE",	address: "301 SOUTH 12TH ST",	zipCode: "40203", visited: false,},
            {id: 102,	parkName: "LONG RUN",	address: "1605 FLAT ROCK RD",	zipCode: "40245", visited: false,},
            {id: 103,	parkName: "AUBURNDALE",	address: "7260 SOUTHSIDE DR",	zipCode: "40214", visited: false,},
            {id: 104,	parkName: "BALLARD",	address: "525 CALDWELL ST",	zipCode: "40203", visited: false,},
            {id: 105,	parkName: "BERRYTOWN",	address: "1300 HEAFER RD",	zipCode: "40223", visited: false,},
            {id: 106,	parkName: "BLACK MUDD",	address: "1708 RANGELAND RD",	zipCode: "40219", visited: false,},
            {id: 107,	parkName: "BLUE LICK",	address: "4114 MUD LN",	zipCode: "40229", visited: false,},
            {id: 108,	parkName: "BOBBY NICHOLS GOLF COURSE",	 address: "4301 EAST PAGES LN",	zipCode: "40214", visited: false,},
            {id: 109,	parkName: "BRESLIN	1388 LEXINGTON RD",	zipCode: "40206", visited: false,},
            {id: 110,	parkName: "CHURCHILL	2649 HELM ST",	zipCode: "40209", visited: false,},
            {id: 111,	parkName: "FAIRMONT FALLS	9800 THIXTON LN",	zipCode: "40291", visited: false,},
            {id: 112,	parkName: "FARMAN	100 FARMAN CT",	zipCode: "40219", visited: false,},
            {id: 113,	parkName: "FERN CREEK	8703 FERNDALE RD",	zipCode: "40291", visited: false,},
            {id: 114,	parkName: "FISHERMAN'S	5607 OLD HEADY RD",	zipCode: "40299", visited: false,},
            {id: 115,	parkName: "JOE CREASON	1297 TREVILIAN WAY",	zipCode: "40213", visited: false,},
            {id: 116,	parkName: "LANNAN	901 NORTH 26TH ST",	zipCode: "40212", visited: false,},
            {id: 117,	parkName: "PETERSBURG	5008 EAST INDIAN TR",	zipCode: "40218", visited: false,},
            {id: 118,	parkName: "SOUTH CENTRAL	2400 COLORADO AVE",	zipCode: "40208", visited: false,},
            {id: 119,	parkName: "TOONERVILLE TROLLEY	218 EAST OAK ST",	zipCode: "40203", visited: false,},
            {id: 120,	parkName: "WYANDOTTE	1104 BEECHER ST",	zipCode: "40215", visited: false,},
            {id: 121,	parkName: "EVA BANDMAN	1701 RIVER RD",	zipCode: "40206", visited: false,},
            {id: 122,	parkName: "BEARGRASS CREEK GREENWAY AT IRISH HILL	2001 LEXINGTON RD",	zipCode: "40206", visited: false,},
            {id: 123,	parkName: "WILLIAM B. STANSBURY	2302 SOUTH THIRD ST",	zipCode: "40208", visited: false,},
            {id: 124,	parkName: "A.B. SAWYER	9300 WHIPPS MILL RD",	zipCode: "40242", visited: false,},
            {id: 125,	parkName: "LOCUST GROVE	561 BLANKENBAKER LANE",	zipCode: "40207", visited: false,},
            {id: 126,	parkName: "BEECHMONT TOT LOT	 205 WEST WELLINGTON AVE",	zipCode: "40214", visited: false,},
            {id: 127,	parkName: "CASTLEWOOD OPEN SPACE	1406 CASTLEWOOD AVE",	zipCode: "40204", visited: false,},
            {id: 128,	parkName: "CALIFORNIA LEISURE OPEN SPACE	963 DIXIE HWY",	zipCode: "40210", visited: false,},
            {id: 129,	parkName: "PARKLAND PLAYGROUND	3200 GREENWOOD AVE",	zipCode: "40211", visited: false,},
            {id: 130, parkName: "ROSE FARM",	address: "4500 ROSE FARM DR",	zipCode: "40258", visited: false,},
            {id: 131,	parkName: "WATSON LANE TRAILHEAD	7600 WATSON LN",	zipCode: "40272", visited: false,},
            {id: 132,	parkName: "SCHUFF LANE GREENWAY	SCHUFF LANE",	zipCode: "40205", visited: false,},
            {id: 133,	parkName: "CLIFTON HEIGHTS GREENWAY	620R N BIRCHWOOD AVE",	zipCode: "40206", visited: false,},
            {id: 134,	parkName: "CYRIL ALLGEIER COMMUNITY CENTER	4101 CADILLAC CT",	zipCode: "40213", visited: false,},
            {id: 135,	parkName: "BECKLEY CREEK PARK	1400 S BECKLEY STATION RD",	zipCode: "40223", visited: false,},
            {id: 136,	parkName: "PATRIOTS PEACE MEMORIAL	3742 UPPER RIVER RD",	zipCode: "40207", visited: false,},
            {id: 137,	parkName: "BUECHEL PARCEL	1029 SOUTHERN AVE",	zipCode: "40218", visited: false,},
            {id: 138,	parkName: "MAHONEY	10903 BRENTLINGER",	zipCode: "40291", visited: false,},
            {id: 139,	parkName: "PETERSON	15101 TAYLORSVILLE RD",	zipCode: "40023", visited: false,},
            {id: 140,	parkName: "JEFFERSON MEMORIAL PARCEL 22	13111 MEDORA RD",	zipCode: "40272", visited: false,},
            /*{id: 141,	parkName: "SOUTHERN PARKWAY	 	", visited: false,},
            {id: 142,	parkName: EASTERN PARKWAY	 	", visited: false,},
            {id: 143,	parkName: NORTHWESTERN PARKWAY	 	", visited: false,},
            {id: 144,	parkName: SOUTHWESTERN PARKWAY	 	", visited: false,},
            {id: 145,	parkName: ALGONQUIN PARKWAY	 	", visited: false,},*/
            {id: 146,	parkName: "POPE LICK PARK",	address: "4002 South Pope Lick Rd",	zipCode: "40299", visited: false,},
            {id: 147,	parkName: "TURKEY RUN",	address: "8203 Stout Rd",	zipCode: "40291", visited: false,},
            {id: 148,	parkName: "BROAD RUN",	address: "11551 Bardstown Rd",	zipCode: "40291", visited: false,},
            {id: 149,	parkName: "A.B. SAWYER GREENWAY",	address: "1100 FOREST BRIDGE RD"	zipCode: "40223", visited: false,},
            {id: 150,	parkName: "LOUISVILLE CHAMPIONS SOCCER",	address: "2100 RIVER RD",	zipCode: "40206", visited: false,},
            {id: 151,	parkName: "LOUISVILLE CHAMPIONS",	address: "2700 RIVER RD",	zipCode: "40206", visited: false,},
            {id: 152,	parkName: "GALVIN COURT	6100 GALVIN COURT",	zipCode: "40299", visited: false,},
            {id: 153,	parkName: "THE STRAND	6510 Echo Trail",	zipCode: "40299", visited: false,},
            {id: 154,	parkName: "QUAIL CHASE GOLF COURSE 	7000 COOPER CHAPEL ROAD",	zipCode: "40229", visited: false,},
            {id: 155,	parkName: "ARTHUR K. DRAUT PARK	4701 Bowling Blvd",	zipCode: "40207", visited: false,},
            {id: 156,	parkName: "Brown Park	1000 Browns Lane",	zipCode: "40207", visited: false,},
            {id: 157,	parkName: "Community Park	310 Ten Pin Lane",	zipCode: "40207", visited: false,},
            {id: 158,	parkName: "Warwick Park	521 Kentucky Ave",	zipCode: "40222", visited: false,},
            {id: 159,	parkName: "Hal Warheim Park	1832 Overlook Terrace",	zipCode: "40205", visited: false,},
            {id: 160,	parkName: "ROBSION Park	1 Robsion Park Dr",	zipCode: "40222", visited: false,},
            {id: 161,	parkName: "AUBURN PARK	9208 Auburn Ave",	zipCode: "40299", visited: false,},
            {id: 162,	parkName: "Jeffersontown Memorial Park	10707 Taylorsville Rd",	zipCode: "40299", visited: false,},
            {id: 163,	parkName: "David L Armstrong Recreation Center	3015 Bluebird Lane",	zipCode: "40299", visited: false,},
            {id: 164,	Skyview Park	2700 Watterson Trail	40299
            {id: 165,	Plainview Swim Center	10235 Timberwood Circle	40223
            {id: 166,	Waterfront Park	1101 River Rd	40206
            {id: 167	parkName: "Mount Washington  Community Park",	address: "176 Park View Ave",	zipCode: "40047", visited: false,},
            {id: 168,	parkName: "Lindsay Duvall Park	100 Newman Way",	zipCode: "40047", visited: false,},
            {id: 169,	parkName: "Frank Cornell Park	977 Waterford Rd",	zipCode: "40047", visited: false,},
            {id: 170,	parkName: "Maples Park	6826 W Hwy 22",	zipCode: "40014", visited: false,},
            {id: 171,	parkName: "Briar Hill Park",	address: "7400 E Orchard Gras Blvd",	zipCode: "40014", visited: false,},
            {id: 172,	parkName: "Wendell Moore Park	1551 Hwy 393	40031", visited: false,},
            {id: 173,	parkName: "Schamback Park	6617 Main St	40077", visited: false,},
            {id: 174,	parkName: "Peggy E. Baker Park	6887 Rte 2858	40014", visited: false,},
            {id: 175,	parkName: "Morgan Conservation Park	1200 Kentucky 524	40031", visited: false,},
            {id: 176,	parkName: "54 Acre Multi-Use Park	3930 Highway 146	40031", visited: false,},
            {id: 177,	parkName: "Celebration Park		", visited: false,},
            {id: 178,	parkName: "Creasey Mahan Nature Preserve	12501 Harmony Landing Rd	40026
            {id: 179,	parkName: "PeeWee Valley Central Park	105 Central Avenue	
            {id: 180,	parkName: "Walsh Park	600 North 4th St",	zipCode: "40031", visited: false,},
            {id: 181,	parkName: "Wilborn Park	201 Lakeshore Dr",	zipCode: "40031", visited: false,},
            {id: 182,	parkName: "Shirley's Arbor	3501 Woehrle Rd",	zipCode: "47130", visited: false,},
            {id: 183,	parkName: "Chapel Lake Park	5801 New Chapel Rd",	zipCode: "47130", visited: false,},
            {id: 184,	parkName: "Perrin Family Park	414 Perrin Ln",	zipCode: "47130", visited: false,},
            {id: 185,	parkName: "Glossbrenner Public Garden	191 W Chestnut St",	zipCode: "47130", visited: false,},
            {id: 186,	parkName: "Harmony Park	1710 E 10th St",	zipCode: "47130", visited: false,},
            {id: 187,	parkName: "Big 4 Station Park	Big Four Pedestrian Bridge",	zipCode: "47130", visited: false,},
            {id: 188,	parkName: "Jeffersonville Skate Park	2107 Middle Rd",	zipCode: "47130", visited: false,},
            {id: 189,	Shirley Hall Park	1203 Charlestown Pike",	zipCode: "47130", visited: false,},
            {id: 190,	Woehrle Athletic Complex	4200 Charlestown Pike",	zipCode: "47130", visited: false,},
                {id: 191,	Riverstage	100 W Riverside Dr",	zipCode: "47130", visited: false,},
                {id: 192,	Nachand Fieldhouse	601 E Court Ave	47130
                {id: 193,	Jeffersonville Aquatic Center	2107 Middle Rd	47130
                {id: 194,	Veterans Memorial Park	301 Mulberry St	47130
                {id: 195,	W.F. Throckmorton Park	44 Beechwood Rd	47130
                {id: 196,	Samuel G. Shannon Memorial Park	501 Crestview Ct	47130
                {id: 197,	Richard L. Vissing Park	2728 Vissing Park Rd	47130
                {id: 198,	Highland Dog Park	1300 Spruce Dr	47130
                {id: 199,	John Wilcoxson Park	44 Beechwood Rd	47130
                {id: 200,	Ricard B. Wathen Park	29 Regina Ave	47130
                {id: 201,	Luther F. Warder Park	109 E Court Ave	47130
                {id: 202,	Steamboat Park	320 Division St	47130
                {id: 203,	S. Harlan Vogt Park	133 E Park Pl	47130
                {id: 204,	Preservation Park	120 W Market St	47130
                {id: 205,	Port Fulton Park	201 W High St	47130
                {id: 206,	Poppy Park	2100 Poppy Pl	47130
                {id: 207,	Meadows Park	4503 Fallow Dr	47130
                {id: 208,	Lottie Oglesby Park	610 Martha Ave	47130
                {id: 209,	Kyle Vissing Park	22 Forest Dr	47130
                {id: 210,	Pamela J Inman Park	2128 Robin Ln	47130
                {id: 211,	Henry Landsen Park	201 E 15th St	47130
                {id: 212,	Gaither Park	1499 E 8th St	47130
                {id: 213,	Forest Park	140 Forest Dr	47130
                {id: 214,	James T. Duffy's Landing	2610 Utica Pike	47130
                {id: 215,	Connie Sellmer Park	1904 Oakridge Dr	47130
                {id: 216,	Bob Hedge Park	926 French St	47130
                21{id: 7	A,llison Brook Park	1701 Allison Ln	47130
                218	Ashland Park	430 E Riverside Dr	47129
                219	Beechwood Park	1200 Beechwood Dr	47129
                220	Cedar Park	1630 Horn St	47129
                221	Colgate Park	800 S Clark Blvd	47129
                222	Gaskell Park	1629 Briarwood Dr	47129
                223	Gateway Park	500 Little League Blvd	47129
                224	Lapping Park	2404 Greentree N	47129
                225	Lewis and Clark Park	1240 Harrison Ave	47129
                226	Parkwood Park	1415 Kilmer Way	47129
                227	Ray Lawrence Park	1021 Irving Dr	47129
                228	Anderson Park	 711 Hildreth St	47150
                229	Bicknell Park	315 Silver St	47150
                230	Billy Herman Park	600 Scribner Dr	47150
                231	Binford Park	1701 Graybrook Lane	47150
                232	Cannon Acres Soccer Field	1935 Budd Rd	47150
                233	Cherry Valley Golf Course		47150
                234	Divison Street	1728 Division St	47150
                235	Fairmont Park	1725 Abbie Dell	47150
                236	Griffin Recreation Center	1140 Griffin Street	47150
                237	Joe Kraft Park	500 W 7th St	47150
                238	Millerwood Park	1759 Millerwood Dr	47150
                239	New Albany Dog Park	1935 Budd Rd	47150
                240	Ritter Park	1218 Culbertson Ave	47150
                241	River Run Family Waterpark	224 W Daisy Ln	47150
                242	Sertoma Park	1315 Mill Ln	47150
                243	Silver Street Park	2043 Silver St	47150
                244	Valley View Golf Park	3748 Lawrence Banet Rd	47119
                245	Bicentennial Park	118 E Spring St	47150
                246	Riverfront Amphitheater	290 E Water St	47150
                247	Campbell Woodland Nature Trails	3500 Budd Rd	47150
                248	Galena-Lamb Park	6220 Highway 150	47119
                249	Garry E. Cavan Park	6485 Corydon Ridge Rd	47122
                250	Greenville Park	6455 Buttontown Rd	47124
                251	Herman Collier Park	3905 Fiske Ave	47150
                252	Letty Walter Park	5345 Saint Mary's Rd	47119
                253	Kevin Hammersmith Memorial Park	440 Lewis Endres Parkway	47150
                254	Sam Peden Community Park	3037 Grant Line Rd	47150
                255	Southern IN Sports Center	620 Park East Blvd	47150
                256	Falls of the Ohio State Park	201 W. Riverside Dr	47129
                257	Deam Lake State Recreation Area	1217 Deam Lake Rd off Hwy 60	47106
                258	Charlestown State Park	12500 Indiana 62	47111
                259	Clark State Forest	PO BOX 119	47126
                260	Harrison-Crawford State Forest	7240 Old Forest Road SW	47112
                261	O'Bannon Woods State Park	7234 Old Forest Road SW	47112
                262	Hayswood Nature Reserve	755 Hwy 135 NW	47112
                263	Rhoads Pool	2105 Poolside Dr NW	47112
                264	South Harrison	8750 South Harrison Park Dr SE	47135
                265	Buffalo Trace	1540 HWY 150 NE	47164
                266	Noe's 	12825 HWY 111 SE	47117
                267	Gresham	7570 Main St NE	47136
                268	Battle of Corydon	100 Old Hwy 135 SW	47112
                269	The Hubbard House	1553 Old State Rd 64 NE	47161
                270	Morvin's Landing	12982 Morvin's Landing Road	47142
                271	The Overlook Park	2397 Overlook Dr SW	47142
                272	Lebanon Junction Memorial Park	423 S Poplar St	40150
                273	Clear Creek Park	717 Burks Branch	40065
                274	Red Orchard Park	704 Kentucky St	40065
                275	Shelby Trails Park	5063 Aiken Road	40067
                276	Finchville Park	5311 Taylorsville Rd	40022
                277	Shelbyville Skate Park	1145 Washington St	40065
                278	Shelbyville Greeenway Trail	97 7th St	40065
                279	Lake Shelby Park and Campground	1433 Burks Branch Rd	40065
                280	Battletown Park	75 Lawson Creek Rd	40104
                281	Brandenburg Riverfront Park	Main Street	40108
                282	Buttermilk Falls Trail		40108
                283	Concordia Park		
                284	Dianna's Park	515 Broadway	40108
                285	Flaherty Community Park		
                286	Meade-Olin Park	163 Moremen Rd	40108
                287	Otter Creek Recreation Area		
                288	Wolf Creek Park		
                289	YMCA Camp Piomingo		
                290	Bernheim Arboretum and Research Forest	2075 Clermont Rd	40110},*/
			]
		}
	}
})
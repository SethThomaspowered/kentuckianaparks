const app = new Vue ({
	el: '#app',
	data() {
		return {
			parks: [
			{id: 1,	parkName: '35TH STREET', 	address: "814 SOUTH 35TH ST",	zipCode: 40211, visited: false,},
            {id: 2,	parkName: "CRESCENT HILL",	address: "3110 BROWNSBORO RD",	zipCode: 40206, visited: false,},
            {id: 3, parkName: "ALGONQUIN",	address: "1614 CYPRESS ST",	zipCode: 40210, visited: false,},
            {id: 4, parkName: "BELLEVUE",	address: "4711 BELLEVUE AVE",	zipCode: 40215, visited: false,},
            {id: 5, parkName: "BEN WASHER",	address: "519 WEST KENTUCKY ST",	zipCode: 40203, visited: false,},
            {id: 6, parkName: "BINGHAM",	address: " 160 CORAL AVE",	zipCode: 40206, visited: false,},
            {id: 7, parkName: "BRADLEY",	address: "2516 BRADLEY AVE",	zipCode: 40217, visited: false,},
            {id: 8, parkName: "BUECHEL",	address: "247 ALPHA AVE",	zipCode: 40218, visited: false,},
            {id: 9, parkName: "CAMP TAYLOR",	address: "4201 LEE AVE",	zipCode: 40213, visited: false,},
            {id: 10, parkName: "CANE RUN",	address: "4816 CANE RUN RD", zipCode: 40216, visited: false,},
            {id: 11, parkName: "CAPERTON SWAMP",	address: "3916 RIVER RD",	zipCode: 40207, visited: false,},
            {id: 12, parkName: "CENTRAL",	address: "1340 SOUTH FOURTH ST", zipCode: 40208, visited: false,},
            {id: 13, parkName: "CHICKASAW",	address: "1200 SOUTHWESTERN PKWY",	zipCode: 40211, visited: false,},
            {id: 14, parkName: "CLIFF",	address: "4666 CLIFF AVE",	zipCode: 40215, visited: false,},
            {id: 15, parkName: "CLIFTON", address: "133 NORTH CHARLTON ST",	zipCode: 40206, visited: false,},
            {id: 16, parkName: "CARRIE GAULBERT COX",	address: "3730 RIVER RD",	zipCode: 40207, visited: false,},
            {id: 17, parkName: "DOUGLASS",	address: "2305 DOUGLASS BLVD",	zipCode: 40205, visited: false,},
            {id: 18, parkName: "EASTOVER",	address: "118 SACRED HEART LN",	zipCode: 40206, visited: false,},
            {id: 19, parkName: "FAIRDALE MINI", address: "10714 WEST MANSLICK RD",	zipCode: 40118, visited: false,},
            {id: 20, parkName: "FLAGET FIELD",	address: "4425 GREENWOOD AVE",	zipCode: 40211, visited: false,},
            {id: 21, parkName: "GERMAN-PARISTOWN",	address: "1134 EAST KENTUCKY ST",	zipCode: 40204, visited: false,},
            {id: 22, parkName: "GNADINGER", address: "103 ELLISON AVE",	zipCode: 40204, visited: false,},
            {id: 23, parkName: "WILLIAM HARRISON",	address: "3232 OLEANDA AVE",	zipCode: 40215, visited: false,},
            {id: 24, parkName: "HOPEWELL",	address: "509 NORTH BIRCHWOOD AVE",	zipCode: 40206, visited: false,},
            {id: 25, parkName: "NELSON HORNBECK",	address: "709 FAIRDALE RD",	zipCode: 40118, visited: false,},
            {id: 26, parkName: "HOUNZ LANE",	address: "2300 HOUNZ LN",	zipCode: 40223, visited: false,},
            {id: 27, parkName: "IRISH HILL",	address: "1131 LEXINGTON RD",	zipCode: 40204, visited: false,},
            {id: 28, parkName: "LOUIS B. ISRAEL", address: "4708 SOUTH FIRST ST",	zipCode: 40214, visited: false,},
            {id: 29, parkName: "HAYS KENNEDY",	address: "7303 BEACHLAND BEACH RD",	zipCode: 40059, visited: false,},
            {id: 30, parkName: "KENNEDY COURT",	address: "225 KENNEDY AVE",	zipCode: 40206, visited: false,},
            {id: 31, parkName: "KLONDIKE",	address: "3809 KLONDIKE LN",	zipCode: 40218, visited: false,},
              /*  32,	KULMER RESERVE	17200 KULMER BEACH RD	40177
                33,	LAKE DREAMLAND	4400 LAKE DREAMLAND RD	40216
                34,	SENECA GOLF COURSE	 2300 PEE WEE REESE RD	40205
                35,	CHARLES YOUNG	2721 LYTLE ST	40212
                36,	ROBERSON RUN	8205 JUDGE BLVD	40219
                37,	IROQUOIS GOLF COURSE	1501 RUNDILL RD	40214
                38,	NORFOLK ACRES	 4300 CORAM WAY	40218
                39,	CALIFORNIA	1104 SOUTH 16TH ST	40210
                40,	SUN VALLEY GOLF COURSE	6505 BETHANY LN	40272
                41	LAPORTE	2529 BANK ST	40212
                42	ELLIOT SQUARE	630 SOUTH 28TH ST	40211
                43	EMERSON	1100 SYLVIA ST	40217
                44	MCNEELY LAKE	10500 CEDAR CREEK RD	40229
                45	BOONE SQUARE	1935 ROWAN ST	40203
                46	OLD WALNUT / BEECHER	904 WEST MUHAMMAD ALI BLVD	40203
                47	SLEVIN	341 NORTH 25TH ST	40212
                48	RUSSELL LEE	3701 SOUTHERN AVE	40211
                49	LONG RUN CEMETERY	 	
                50	DAVID ARMSTRONG EXTREME 	148 NORTH CLAY ST	40202
                51	MAGNOLIA	1407 SOUTH SECOND ST	40208
                52	MEDORA	6210 PENDLETON RD	40272 /*
                53	MEMORIAL	971 SOUTH FOURTH ST	40203
                54	G.G. MOORE	626 M ST	40208
                55	PARKHILL	1703 SOUTH 13TH ST	40210
                56	PATTERSON	1418 MORTON AVE	40204
                57	PEEWEE	2913 KLONDIKE LN	40218
                58	HUSTON QUIN	4105 SOUTH FIRST ST	40214
                59	GINNY REICHARD	1001FRANKLIN ST	40206
                60	RIVERSIDE GARDENS	2899 LEES LN	40216
                61	RIVERVIEW	8202 GREENWOOD RD	40258
                62	RIVERSIDE, THE FARNSLEY-MOREMAN LANDING	7410 MOORMAN RD	40272
                63	RUBEL	667 BARRETAVE	40204
                64	SHAWNEE	4501 WEST BROADWAY	40211
                65	SHELBY	600 EAST OAK ST	40203
                66	STORY AVENUE	1531 STORY AVE	40206
                67	SYLVANIA	6650 SYLVANIA RD	40258
                68	TWIN PARK	3145 RIVER RD	40207
                69	TYLER	1501 CASTLEWOOD AVE	40204
                70	WATTERSON LAKE	1714 SOUTH WHEATMORE DR	40215
                71	WAYSIDE	3190 SOUTH THIRD ST	40214
                72	WILLOW	 1402 WILLOW AVE	40204
                73	GEORGE ROGERS CLARK	1024 THRUSTON AVE	40217
                74	CHEROKEE	745 COCHRAN HILL RD	40206
                75	JEFFERSON MEMORIAL FOREST	11311 MITCHELL HILL	40118
                76	E. LELAND TAYLOR	 317 NORTH 38TH ST	40212
                77	SHAWNEE GOLF COURSE	460 NORTHWESTERN PKWY	40212
                78	WILLIAM BRITT	2801 MAGAZINE ST	40211
                79	PORTLAND WHARF	719 NORTH 32ND ST	40212
                80	PORTLAND	640 NORTH 27TH ST	40212
                81	WESTONIA	 2900 ROWAN ST	40212
                82	HIGHVIEW	7201 OUTER LOOP	40228
                83	SHEPPARD	 1601 MAGAZINE ST	40203
                84	OKOLONA	1114 CLAY AVE	40219
                85	CRESCENT HILL GOLF COURSE	3110 BROWNSBORO RD	40206
                86	FARNSLEY	3100 WEDGEWOOD WAY	40220
                87	CROSBY	11500 CEDARDALE RD	40223
                88	VICTORY	1051 SOUTH 23RD ST	40210
                89	ST LOUIS	2023 ST LOUIS AVE	40210
                90	DES PRES	4709 LOWE RD	40220
                91	IVY COURT	 3245 LARKWOOD AVE	40212
                92	LONG RUN GOLF COURSE	1605 FLAT ROCK RD	40245
                93	SUN VALLEY	6505 BETHANY LN	40272
                94	CHARLIE VETTINER GOLF COURSE	10207 MARY DELL LN	40299
                95	WAVERLY	 4800 WAVERLY PARK RD	40214
                96	CHARLIE VETTINER	5550 CHARLIE VETTINER PARK RD	40299
                97	IROQUOIS	2120 RUNDILL RD	40214
                98	SENECA	3151 PEE WEE REESE RD	40205
                99	CHEROKEE GOLF COURSE	2501 ALEXANDER RD	40204
                100	THURMAN HUTCHINS	3734 RIVER RD	40207
                101	BAXTER SQUARE	301 SOUTH 12TH ST	40203
                102	LONG RUN	1605 FLAT ROCK RD	40245
                103	AUBURNDALE	7260 SOUTHSIDE DR	40214
                104	BALLARD	525 CALDWELL ST	40203
                105	BERRYTOWN	1300 HEAFER RD	40223
                106	BLACK MUDD	1708 RANGELAND RD	40219
                107	BLUE LICK	4114 MUD LN	40229
                108	BOBBY NICHOLS GOLF COURSE	 4301 EAST PAGES LN	40214
                109	BRESLIN	1388 LEXINGTON RD	40206
                110	CHURCHILL	2649 HELM ST	40209
                111	FAIRMONT FALLS	9800 THIXTON LN	40291
                112	FARMAN	100 FARMAN CT	40219
                113	FERN CREEK	8703 FERNDALE RD	40291
                114	FISHERMAN'S	5607 OLD HEADY RD	40299
                115	JOE CREASON	1297 TREVILIAN WAY	40213
                116	LANNAN	901 NORTH 26TH ST	40212
                117	PETERSBURG	5008 EAST INDIAN TR	40218
                118	SOUTH CENTRAL	2400 COLORADO AVE	40208
                119	TOONERVILLE TROLLEY	218 EAST OAK ST	40203
                120	WYANDOTTE	1104 BEECHER ST	40215
                121	EVA BANDMAN	1701 RIVER RD	40206
                122	BEARGRASS CREEK GREENWAY AT IRISH HILL	2001 LEXINGTON RD	40206
                123	WILLIAM B. STANSBURY	2302 SOUTH THIRD ST	40208
                124	A.B. SAWYER	9300 WHIPPS MILL RD	40242
                125	LOCUST GROVE	561 BLANKENBAKER LANE	40207
                126	BEECHMONT TOT LOT	 205 WEST WELLINGTON AVE	40214
                127	CASTLEWOOD OPEN SPACE	1406 CASTLEWOOD AVE	40204
                128	CALIFORNIA LEISURE OPEN SPACE	963 DIXIE HWY	40210
                129	PARKLAND PLAYGROUND	3200 GREENWOOD AVE	40211
                130	ROSE FARM	4500 ROSE FARM DR	40258
                131	WATSON LANE TRAILHEAD	7600 WATSON LN	40272
                132	SCHUFF LANE GREENWAY	SCHUFF LANE	40205
                133	CLIFTON HEIGHTS GREENWAY	620R N BIRCHWOOD AVE	40206
                134	CYRIL ALLGEIER COMMUNITY CENTER	4101 CADILLAC CT	40213
                135	BECKLEY CREEK PARK	1400 S BECKLEY STATION RD	40223
                136	PATRIOTS PEACE MEMORIAL	3742 UPPER RIVER RD	40207
                137	BUECHEL PARCEL	1029 SOUTHERN AVE	40218
                138	MAHONEY	10903 BRENTLINGER	40291
                139	PETERSON	15101 TAYLORSVILLE RD	40023
                140	JEFFERSON MEMORIAL PARCEL 22	13111 MEDORA RD	40272
                141	SOUTHERN PARKWAY	 	
                142	EASTERN PARKWAY	 	
                143	NORTHWESTERN PARKWAY	 	
                144	SOUTHWESTERN PARKWAY	 	
                145	ALGONQUIN PARKWAY	 	
                146	POPE LICK PARK	4002 South Pope Lick Rd	40299
                147	TURKEY RUN	8203 Stout Rd	40291
                148	BROAD RUN	11551 Bardstown Rd	40291
                149	A.B. SAWYER GREENWAY	1100 FOREST BRIDGE RD	40223
                150	LOUISVILLE CHAMPIONS SOCCER	2100 RIVER RD	40206
                151	LOUISVILLE CHAMPIONS	2700 RIVER RD	40206
                152	GALVIN COURT	6100 GALVIN COURT	40299
                153	THE STRAND	6510 Echo Trail	40299
                154	QUAIL CHASE GOLF COURSE 	7000 COOPER CHAPEL ROAD	40229
                155	ARTHUR K. DRAUT PARK	4701 Bowling Blvd	40207
                156	Brown Park	1000 Browns Lane	40207
                157	Community Park	310 Ten Pin Lane	40207
                158	Warwick Park	521 Kentucky Ave	40222
                159	Hal Warheim Park	1832 Overlook Terrace	40205
                160	ROBSION Park	1 Robsion Park Dr	40222
                161	AUBURN PARK	9208 Auburn Ave	40299
                162	Jeffersontown Memorial Park	10707 Taylorsville Rd	40299
                163	David L Armstrong Recreation Center	3015 Bluebird Lane	40299
                164	Skyview Park	2700 Watterson Trail	40299
                165	Plainview Swim Center	10235 Timberwood Circle	40223
                166	Waterfront Park	1101 River Rd	40206
                167	Mount Washington  Community Park	176 Park View Ave	40047
                168	Lindsay Duvall Park	100 Newman Way	40047
                169	Frank Cornell Park	977 Waterford Rd	40047
                170	Maples Park	6826 W Hwy 22	40014
                171	Briar Hill Park	7400 E Orchard Gras Blvd	40014
                172	Wendell Moore Park	1551 Hwy 393	40031
                173	Schamback Park	6617 Main St	40077
                174	Peggy E. Baker Park	6887 Rte 2858	40014
                175	Morgan Conservation Park	1200 Kentucky 524	40031
                176	54 Acre Multi-Use Park	3930 Highway 146	40031
                177	Celebration Park		
                178	Creasey Mahan Nature Preserve	12501 Harmony Landing Rd	40026
                179	PeeWee Valley Central Park	105 Central Avenue	
                180	Walsh Park	600 North 4th St	40031
                181	Wilborn Park	201 Lakeshore Dr	40031
                182	Shirley's Arbor	3501 Woehrle Rd	47130
                183	Chapel Lake Park	5801 New Chapel Rd	47130
                184	Perrin Family Park	414 Perrin Ln	47130
                185	Glossbrenner Public Garden	191 W Chestnut St	47130
                186	Harmony Park	1710 E 10th St	47130
                187	Big 4 Station Park	Big Four Pedestrian Bridge	47130
                188	Jeffersonville Skate Park	2107 Middle Rd	47130
                189	Shirley Hall Park	1203 Charlestown Pike	47130
                190	Woehrle Athletic Complex	4200 Charlestown Pike	47130
                191	Riverstage	100 W Riverside Dr	47130
                192	Nachand Fieldhouse	601 E Court Ave	47130
                193	Jeffersonville Aquatic Center	2107 Middle Rd	47130
                194	Veterans Memorial Park	301 Mulberry St	47130
                195	W.F. Throckmorton Park	44 Beechwood Rd	47130
                196	Samuel G. Shannon Memorial Park	501 Crestview Ct	47130
                197	Richard L. Vissing Park	2728 Vissing Park Rd	47130
                198	Highland Dog Park	1300 Spruce Dr	47130
                199	John Wilcoxson Park	44 Beechwood Rd	47130
                200	Ricard B. Wathen Park	29 Regina Ave	47130
                201	Luther F. Warder Park	109 E Court Ave	47130
                202	Steamboat Park	320 Division St	47130
                203	S. Harlan Vogt Park	133 E Park Pl	47130
                204	Preservation Park	120 W Market St	47130
                205	Port Fulton Park	201 W High St	47130
                206	Poppy Park	2100 Poppy Pl	47130
                207	Meadows Park	4503 Fallow Dr	47130
                208	Lottie Oglesby Park	610 Martha Ave	47130
                209	Kyle Vissing Park	22 Forest Dr	47130
                210	Pamela J Inman Park	2128 Robin Ln	47130
                211	Henry Landsen Park	201 E 15th St	47130
                212	Gaither Park	1499 E 8th St	47130
                213	Forest Park	140 Forest Dr	47130
                214	James T. Duffy's Landing	2610 Utica Pike	47130
                215	Connie Sellmer Park	1904 Oakridge Dr	47130
                216	Bob Hedge Park	926 French St	47130
                217	Allison Brook Park	1701 Allison Ln	47130
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
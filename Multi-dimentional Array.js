//weapon-type-name-stats[price, magazine size, origin]
var weapon = [
	[	/*[0]*/	
		"Pistols", /*[0][0]*/
		["USP" /*[0][1][0]*/, "$200" /*[0][1][1]*/, "12", "Germany"],
		["P2000" /*[0][2][0]*/, "$200", "13", "Germany"],
		["Glock", "$200", "20", "Austria"],
		["P250", "$300", "12", "Switzerland"],
		["Deagle", "$700", "7", "Israel"],

	],
	[	/*[1]*/
		"Smgs", /*[1][0]*/
		["MAC-10" /*[1][1][0]*/, "$1050" /*[1][1][1]*/, "30", "United States"],
		["MP9", "$1250", "30", "United States"],
		["UMP45", "$1200", "25", "Germany"],
		["Bizon", "$1400", "64", "Russia"],
		["MP7", "$1700", "30", "Germany"],
		["P90", "$2350", "50", "Belgium"]
	],
	[	
		"Rifles",
		["Famas", "$2250", "25", "France"],
		["Galil", "$2000", "35", "Israel"],
		["M4", "$3100", "30", "United States"],
		["AK47", "$2700", "30", "Russia"],
		["Scout", "$1700", "10", "Austria"],
		["AWP", "$4750", "10", "United Kingdom"]
	]
];

var weapon = new Array();

weapon[0][0] = "Pistols";
weapon[0][1][0] = "USP";	weapon[0][2][0] = "P2000";
weapon[0][1][1] = "$200";	weapon[0][2][1] = "$200";
weapon[0][1][2] = "12";		weapon[0][2][2] = "13";
weapon[0][1][3] = "Germany"; weapon[0][2][3] = "Germany";

weapon[1][0] = "Smgs";
weapon[1][1][0] = "MAC-10";
weapon[1][1][1] = "$1050";
weapon[1][1][2] = "30";
weapon[1][1][3] = "United States";

weapon[2][0] = "Rifles";
weapon[2][1] = ["Famas", "$2250", "25", "France"],
weapon[2][2] = ["Galil", "$2000", "35", "Israel"],
weapon[2][3] = ["M4", "$3100", "30", "United States"],
weapon[2][4] = ["AK47", "$2700", "30", "Russia"],
weapon[2][5] = ["Scout", "$1700", "10", "Austria"],
weapon[2][6] = ["AWP", "$4750", "10", "United Kingdom"]

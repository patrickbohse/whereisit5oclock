//Created by Patrick Bohse
//timezones are split up to account for DST
//timezones for april to october
var time = new Date();
if(time.getUTCMonth>= 3 && time.getUTCMonth<=9){
	var timezones = {
		"-12": [
			"Fiji;FJ",
			"New Zealand;NZ",
			"Tuvalu;TV"
		],
		"-11": [
			"American Samoa,AS",
			"Samoa;SM",
			"Tonga;TO"
		],
		"-10": [
			"Hawaii, USA;US"
		],
		"-9": [
			"Gambier Islands;GI"
		],
		"-8": [
			"Alaska, USA;US"
		],
		"-7": [
			"Vancouver, Canada;CA",
			"Los Angeles, USA;US"
		],
		"-6": [
			"Colorado, USA;US",
			"Belize;BZ",
			"Costa Rica;CR",
			"Ecuador;EC",
			"El Salvador;SV",
			"Guatemala;GT",
			"Honduras;HN",
			"Nicaragua;NI"
		],
		"-5": [
			"Ontario, Canada;CA",
			"Mexico;MX",
			"Chicago, USA;US",
			"Colombia;CO",
			"Jamaica;JM",
			"Panama;PA",
			"Peru;PE"
		],
		"-4": [
			"Quebec, Canada;CA",
			"Cuba;CU",
			"Haiti;HT",
			"New York, USA;US",
			"Bolivia;BO",
			"Dominican Republic;DO",
			"Paraguay;PY",
			"Trinidad and Tobago;TT",
			"Puerto Rico;PR"
		],
		"-3": [
			"Nova Scotia, Canada;CA",
			"Chile;CL",
			"Greenland;GL",
			"Argentina;AR",
			"Brazil;BR"
		],
		"-2": [
			"Brazil;BR"
		],
		"-1": [
			"Cabo Verde;CV"
		],
		"0": [
			"Gambia;GM",
			"Ghana;GH",
			"Sierra Leone;SL",
			"Togo;TG"
		],
		"1": [
			"Ireland;IE",
			"Morocco;MA",
			"United Kingdom;GB",
			"Algeria;DZ",
			"Angola;AO",
			"Cameroon;CM",
			"Chad;TD",
			"Democratic Republic of the Congo;CD",
			"Gabon;GA",
			"Niger;NE",
			"Nigeria;NG",
			"Tunisia;TN"
		],
		"2": [
			"Albania;AL",
			"Austria;AT",
			"Belgium;BE",
			"Bosnia and Herzegovina;BA",
			"Croatia;HR",
			"Czech Republic;CZ",
			"Denmark, DK",
			"France;FR",
			"Germany;DE",
			"Hungary;HU",
			"Italy;IT",
			"Luxembourg;LU",
			"Macedonia;MK",
			"Montenegro;ME",
			"Namibia;NA",
			"Netherlands;NL",
			"Norway;NO",
			"Poland;PL",
			"Serbia;RS",
			"Slovakia;SK",
			"Slovenia;SI",
			"Spain;ES",
			"Sweden;SE",
			"Switzerland;CH",
			"Botswana;BW",
			"Burundi;BI",
			"Egypt;EG",
			"Libya;LY",
			"Malawi;MW",
			"Rwanda;RW",
			"South Africa;ZA",
			"Zambia;ZM",
			"Zimbabwe;ZW",
			"Sudan;SD"
		],
		"3": [
			"Bulgaria;BG",
			"Cyprus;CY",
			"Estonia;EE",
			"Finland;FI",
			"Greece;GR",
			"Israel;IL",
			"Jordan;JO",
			"Latvia;LV",
			"Lebanon;LB",
			"Lithuania;LT",
			"Palestine;PS",
			"Romania;RO",
			"Syria;SY",
			"Turkey;TR",
			"Ukraine;UA",
			"Belarus;BY",
			"Djibouti;DJ",
			"Ethiopia;ET",
			"Iraq;IQ",
			"Kenya;KE",
			"Kuwait;KW",
			"Madagascar;MG",
			"Qatar;QA",
			"Saudi Arabia;SA",
			"Somalia;SO",
			"Tanzania;TZ",
			"Uganda;UG",
			"Yemen;YE",
			"Moscow, Russia;RU"
		],
		"4": [
			"Armenia;AM",
			"Georgia;GE",
			"Oman;OM",
			"United Arab Emirates;AE"
		],
		"5": [
			"Kazakhstan;KZ",
			"Pakistan;PK",
			"Uzbekistan;UZ"
		],
		"6": [
			"Bangladesh;BD",
			"Kazakhstan;KZ"
		],
		"7": [
			"Cambodia;KH",
			"Indonesia;ID",
			"Mongolia;MN",
			"Thailand;TH",
			"Vietnam;VN"
		],
		"8": [
			"China;CN",
			"Indonesia;ID",
			"Malaysia;MY",
			"Mongolia;MN",
			"Philippines;PH",
			"Taiwan;TW"
		],
		"9": [
			"Indonesia;ID",
			"Japan;JP",
			"North Korea;KP",
			"South Korea;KR"
		],
		"10": [
			"Sydney, Austrailia;AU",
			"Tasmania, Austrailia;AU",
			"Papua New Guinea;PG",
			"Guam"
		],
		"11": [
			"Papa New Guinea;PG",
			"Solomon Islands;SB",
			"Vanuatu; VU"
		]
  }
}
//timezones for november to march
else{
	var timezones = {
		"-12": [
			"Tuvalu;TV"
		],
		"-11": [
			"Fiji;FJ",
			"New Zealand;NZ",
			"American Samoa,AS",
			"Tonga;TO"
		],
		"-10": [
			"Samoa;SM",
			"Hawaii, USA;US"
		],
		"-9": [
			"Alaska, USA;US",
			"Gambier Islands;GI"
		],
		"-8": [
			"Vancouver, Canada;CA",
			"Los Angeles, USA;US"
		],
		"-7": [
			"Colorado, USA;US"
		],
		"-6": [
			"Belize;BZ",
			"Ontario, Canada;CA",
			"Costa Rica;CR",
			"Ecuador;EC",
			"El Salvador;SV",
			"Guatemala;GT",
			"Honduras;HN",
			"Mexico;MX",
			"Nicaragua;NI",
			"Chicago, USA;US"
		],
		"-5": [
			"Quebec, Canada;CA",
			"Colombia;CO",
			"Cuba;CU",
			"Haiti;HT",
			"Jamaica;JM",
			"Panama;PA",
			"Peru;PE",
			"New York, USA;US"
		],
		"-4": [
			"Bolivia;BO",
			"Nova Scotia, Canada;CA",
			"Chile;CL",
			"Greenland;GL",
			"Dominican Republic;DO",
			"Trinidad and Tobago;TT",
			"Puerto Rico;PR"
		],
		"-3": [
			"Paraguay;PY",
			"Argentina;AR",
			"Brazil;BR"
		],
		"-2": [
			"Brazil;BR"
		],
		"-1": [
			"Cabo Verde;CV"
		],
		"0": [
			"Gambia;GM",
			"Ghana;GH",
			"Ireland;IE",
			"Morocco;MA",
			"Sierra Leone;SL",
			"Togo;TG",
			"United Kingdom;GB"
		],
		"1": [
			"Albania;AL",
			"Algeria;DZ",
			"Angola;AO",
			"Austria;AT",
			"Belgium;BE",
			"Bosnia and Herzegovina;BA",
			"Cameroon;CM",
			"Chad;TD",
			"Democratic Republic of the Congo;CD",
			"Croatia;HR",
			"Czech Republic;CZ",
			"Denmark, DK",
			"France;FR",
			"Gabon;GA",
			"Germany;DE",
			"Hungary;HU",
			"Italy;IT",
			"Luxembourg;LU",
			"Macedonia;MK",
			"Montenegro;ME",
			"Netherlands;NL",
			"Niger;NE",
			"Nigeria;NG",
			"Norway;NO",
			"Poland;PL",
			"Serbia;RS",
			"Slovakia;SK",
			"Slovenia;SI",
			"Spain;ES",
			"Sweden;SE",
			"Switzerland;CH",
			"Tunisia;TN"
		],
		"2": [
			"Namibia;NA",
			"Botswana;BW",
			"Bulgaria;BG",
			"Burundi;BI",
			"Cyprus;CY",
			"Egypt;EG",
			"Estonia;EE",
			"Finland;FI",
			"Greece;GR",
			"Israel;IL",
			"Jordan;JO",
			"Latvia;LV",
			"Lebanon;LB",
			"Lithuania;LT",
			"Libya;LY",
			"Malawi;MW",
			"Palestine;PS",
			"Romania;RO",
			"Rwanda;RW",
			"South Africa;ZA",
			"Syria;SY",
			"Ukraine;UA",
			"Zambia;ZM",
			"Zimbabwe;ZW",
			"Sudan;SD"
		],
		"3": [
			"Turkey;TR",
			"Belarus;BY",
			"Djibouti;DJ",
			"Ethiopia;ET",
			"Iraq;IQ",
			"Kenya;KE",
			"Kuwait;KW",
			"Madagascar;MG",
			"Qatar;QA",
			"Saudi Arabia;SA",
			"Somalia;SO",
			"Tanzania;TZ",
			"Uganda;UG",
			"Yemen;YE",
			"Moscow, Russia;RU"
		],
		"4": [
			"Armenia;AM",
			"Georgia;GE",
			"Oman;OM",
			"United Arab Emirates;AE"
		],
		"5": [
			"Kazakhstan;KZ",
			"Pakistan;PK",
			"Uzbekistan;UZ"
		],
		"6": [
			"Bangladesh;BD",
			"Kazakhstan;KZ"
		],
		"7": [
			"Cambodia;KH",
			"Indonesia;ID",
			"Mongolia;MN",
			"Thailand;TH",
			"Vietnam;VN"
		],
		"8": [
			"China;CN",
			"Indonesia;ID",
			"Malaysia;MY",
			"Mongolia;MN",
			"Philippines;PH",
			"Taiwan;TW"
		],
		"9": [
			"Indonesia;ID",
			"Japan;JP",
			"North Korea;KP",
			"South Korea;KR"
		],
		"10": [
			"Guam"
		],
		"11": [
			"Sydney, Austrailia;AU",
			"Tasmania, Austrailia;AU",
			"Papua New Guinea;PG",
			"Papa New Guinea;PG",
			"Solomon Islands;SB",
			"Vanuatu; VU"
		]
	}
}
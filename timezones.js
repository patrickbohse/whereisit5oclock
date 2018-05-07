//timezones for april to october
var timezones = {};
var time = new Date();
if(time.getUTCMonth()>=3 && time.getUTCMonth()<=9){
  timezones = {
    "-12": [
      "Baker Island",
      "Howland Island",
      "Fiji",
      "Kiribati",
      "Marshall Islands",
      "Nauru",
      "New Zealand",
      "Tuvalu",
      "Wake Island"
    ],
    "-11": [
      "American Samoa",
      "Kiribati",
      "Samoa",
      "Tonga"
    ],
    "-10": [
      "Hawaii",
      "Kirimati"
    ],
    "-9": [
      "Gambier Islands"
    ],
    "-8": [
      "Alaska"
    ],
    "-7": [
      "British Columbia",
      "Yukon",
      "Los Angeles"
    ],
    "-6": [
      "Alberta",
      "Colorado",
      "Belize",
      "Costa Rica",
      "Ecuador",
      "Galapagos Islands",
      "El Salvador",
      "Guatemala",
      "Honduras",
      "Nicaragua"
    ],
    "-5": [
      "Ontario",
      "Mexico",
      "Chicago",
      "Colombia",
      "Jamaica",
      "Panama",
      "Peru",
      "Cayman Islands"
    ],
    "-4": [
      "Quebec",
      "Cuba",
      "Haiti",
      "Turks and Caicos Islands",
      "New York",
      "Antigua and Barbuda",
      "Barbados",
      "Bolivia",
      "Dominican Republic",
      "Aruba",
      "Paraguay",
      "Trinidad and Tobago",
      "Anguilla",
      "Puerto Rico"
    ],
    "-3": [
      "Nova Scotia",
      "Chile",
      "Greenland",
      "Bermuda",
      "Argentina",
      "Brazil"
    ],
    "-2": [
      "South Georgia and the South Sandwich Islands"
    ],
    "-1": [
      "Cabo Verde"
    ],
    "0": [
      "Gambia",
      "Ghana",
      "Sierra Leone",
      "Togo"
    ],
    "1": [
      "Ireland",
      "Morocco",
      "United Kingdom",
      "Algeria",
      "Angola",
      "Cameroon",
      "Chad",
      "Democratic Republic of the Congo",
      "Gabon",
      "Niger",
      "Nigeria",
      "Tunisia"
    ],
    "2": [
      "Albania",
      "Austria",
      "Belgium",
      "Bosnia and Herzegovina",
      "Croatia",
      "Czech Republic",
      "Denmark",
      "France",
      "Germany",
      "Hungary",
      "Italy",
      "Liechtenstein",
      "Luxembourg",
      "Macedonia",
      "Malta",
      "Monaco",
      "Montenegro",
      "Namibia",
      "Netherlands",
      "Norway",
      "Poland",
      "San Marino",
      "Serbia",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Switzerland",
      "Gibraltar",
      "Vatican City",
      "Botswana",
      "Burundi",
      "Egypt",
      "Libya",
      "Malawi",
      "Mozambique",
      "Rwanda",
      "South Africa",
      "Zambia",
      "Zimbabwe",
      "Sudan"
    ],
    "3": [
      "Bulgaria",
      "Cyprus",
      "Estonia",
      "Finland",
      "Greece",
      "Israel",
      "Jordan",
      "Latvia",
      "Lebanon",
      "Lithuania",
      "Palestine",
      "Romania",
      "Syria",
      "Turkey",
      "Ukraine",
      "Bahrain",
      "Belarus",
      "Djibouti",
      "Ethiopia",
      "Iraq",
      "Kenya",
      "Kuwait",
      "Madagascar",
      "Qatar",
      "Saudi Arabia",
      "Somalia",
      "Tanzania",
      "Uganda",
      "Yemen",
      "Moscow"
    ],
    "4": [
      "Armenia",
      "Georgia",
      "Oman",
      "United Arab Emirates"
    ],
    "5": [
      "Kazakhstan",
      "Maldives",
      "Pakistan",
      "Uzbekistan"
    ],
    "6": [
      "Bangladesh",
      "Kazakhstan"
    ],
    "7": [
      "Cambodia",
      "Indonesia",
      "Laos",
      "Mongolia",
      "Thailand",
      "Vietnam"
    ],
    "8": [
      "China",
      "Indonesia",
      "Malaysia",
      "Mongolia",
      "Philippines",
      "Singapore",
      "Taiwan"
    ],
    "9": [
      "Indonesia",
      "Japan",
      "North Korea",
      "South Korea"
    ],
    "10": [
      "Sydney",
      "Tasmania",
      "Papua New Guinea",
      "Guam"
    ],
    "11": [
      "Papa New Guinea",
      "Solomon Islands",
      "Vanuatu"
    ]
  }
}
//timezones for november to march
else{  
  timezones = {
    "-12": [
      "Baker Island",
      "Howland Island",
      "Fiji",
      "Kiribati",
      "Marshall Islands",
      "Nauru",
      "New Zealand",
      "Tuvalu",
      "Wake Island"
    ],
    "-11": [
      "American Samoa",
      "Kiribati",
      "Samoa",
      "Tonga"
    ],
    "-10": [
      "Hawaii",
      "Kirimati"
    ],
    "-9": [
      "Alaska",
      "Gambier Islands"
    ],
    "-8": [
      "British Columbia",
      "Yukon",
      "Los Angeles"
    ],
    "-7": [
      "Alberta",
      "Colorado"
    ],
    "-6": [
      "Belize",
      "Ontario",
      "Costa Rica",
      "Ecuador",
      "Galapagos Islands",
      "El Salvador",
      "Guatemala",
      "Honduras",
      "Mexico",
      "Nicaragua",
      "Chicago"
    ],
    "-5": [
      "Quebec",
      "Colombia",
      "Cuba",
      "Haiti",
      "Jamaica",
      "Panama",
      "Peru",
      "Cayman Islands",
      "Turks and Caicos Islands",
      "New York"
    ],
    "-4": [
      "Antigua and Barbuda",
      "Barbados",
      "Bolivia",
      "Nova Scotia",
      "Chile",
      "Greenland",
      "Dominican Republic",
      "Aruba",
      "Trinidad and Tobago",
      "Anguilla",
      "Bermuda",
      "Puerto Rico"
    ],
    "-3": [
      "Paraguay",
      "Argentina"
    ],
    "-2": [
      "Brazil",
      "South Georgia and the South Sandwich Islands"
    ],
    "-1": [
      "Cabo Verde"
    ],
    "0": [
      "Gambia",
      "Ghana",
      "Ireland",
      "Morocco",
      "Sierra Leone",
      "Togo",
      "United Kingdom"
    ],
    "1": [
      "Albania",
      "Algeria",
      "Angola",
      "Austria",
      "Belgium",
      "Bosnia and Herzegovina",
      "Cameroon",
      "Chad",
      "Democratic Republic of the Congo",
      "Croatia",
      "Czech Republic",
      "Denmark",
      "France",
      "Gabon",
      "Germany",
      "Hungary",
      "Italy",
      "Liechtenstein",
      "Luxembourg",
      "Macedonia",
      "Malta",
      "Monaco",
      "Montenegro",
      "Netherlands",
      "Niger",
      "Nigeria",
      "Norway",
      "Poland",
      "San Marino",
      "Serbia",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Switzerland",
      "Tunisia",
      "Gibraltar",
      "Vatican City"
    ],
    "2": [
      "Namibia",
      "Botswana",
      "Bulgaria",
      "Burundi",
      "Cyprus",
      "Egypt",
      "Estonia",
      "Finland",
      "Greece",
      "Israel",
      "Jordan",
      "Latvia",
      "Lebanon",
      "Lithuania",
      "Libya",
      "Malawi",
      "Mozambique",
      "Palestine",
      "Romania",
      "Rwanda",
      "South Africa",
      "Syria",
      "Ukraine",
      "Zambia",
      "Zimbabwe",
      "Sudan"
    ],
    "3": [
      "Turkey",
      "Bahrain",
      "Belarus",
      "Djibouti",
      "Ethiopia",
      "Iraq",
      "Kenya",
      "Kuwait",
      "Madagascar",
      "Qatar",
      "Saudi Arabia",
      "Somalia",
      "Tanzania",
      "Uganda",
      "Yemen",
      "Moscow"
    ],
    "4": [
      "Armenia",
      "Georgia",
      "Oman",
      "United Arab Emirates"
    ],
    "5": [
      "Kazakhstan",
      "Maldives",
      "Pakistan",
      "Uzbekistan"
    ],
    "6": [
      "Bangladesh",
      "Kazakhstan"
    ],
    "7": [
      "Cambodia",
      "Indonesia",
      "Laos",
      "Mongolia",
      "Thailand",
      "Vietnam"
    ],
    "8": [
      "China",
      "Indonesia",
      "Malaysia",
      "Mongolia",
      "Philippines",
      "Singapore",
      "Taiwan"
    ],
    "9": [
      "Indonesia",
      "Japan",
      "North Korea",
      "South Korea"
    ],
    "10": [
      "Guam"
    ],
    "11": [
      "Sydney",
      "Tasmania",
      "Papua New Guinea",
      "Papa New Guinea",
      "Solomon Islands",
      "Vanuatu"
    ]
  }
}
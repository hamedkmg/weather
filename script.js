
async function getWeatherMach() {
    const response = await fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json");
    const weather = await response.json();
    console.log(weather.dataseries);
    return weather.dataseries;
}

async function getWeather(city) {
    const response = await fetch("http://www.7timer.info/bin/api.pl?lon=" + city.longitude + "&lat=" + city.latitude + "&product=civillight&output=json");
    let weather = await response.json();
    // console.log(weather.dataseries[0]);
    return weather.dataseries;
}

const weatherStatus = {
    clear: { name: 'Clear', icon: 'fa-sun', color: '#b6a42f', svg: 'sun' },
    pcloudy: { name: 'Partially cloudy', icon: 'fa-cloud-sun', color: '#a7b62f', svg: 'cloud-sun' },
    mcloudy: { name: 'Mostly Cloudy', icon: 'fa-cloud-sun', color: '#4f4f4f', svg: 'cloud-sun' },
    cloudy: { name: 'cloudy', icon: 'fa-cloud', color: '#808080', svg: 'cloud' },
    humid: { name: 'humid', icon: 'fa-smog', color: '#6f88d3', svg: 'smog' },
    lightrain: { name: 'Light Rain', icon: 'fa-cloud-rain', color: '#808080', svg: 'cloud-rain' },
    oshower: { name: 'Occasionaly shower', icon: 'fa-cloud-sun-rain', color: '#808080', svg: 'cloud-sun-rain' },
    ishower: { name: 'ishower', icon: 'fa-cloud-rain', color: '#808080', svg: 'cloud-rain' },
    lightsnow: { name: 'Light Snow', icon: 'fa-snowflake', color: '#9ca5bf', svg: 'snowflake' },
    rain: { name: 'rain', icon: 'fa-cloud-rain-heavy', color: '#808080', svg: 'cloud-rain-heavy' },
    snow: { name: 'snow', icon: 'fa-snowflake', color: '#9ca5bf', svg: 'snowflake' },
    rainsnow: { name: 'Rain Snow', icon: 'fa-cloud-meatball', color: '#9ca5bf', svg: 'cloud-meatball' },
}

let cities = {
    "Amsterdam": {
        "latitude": "52.367",
        "longitude": "4.904",
        "city": "Amsterdam",
        "country": "Netherlands"
    },
    "Ankara": {
        "latitude": "39.933",
        "longitude": "32.859",
        "city": "Ankara",
        "country": "Turkey"
    },
    "Åstorp": {
        "latitude": "56.134",
        "longitude": "12.945",
        "city": "Åstorp",
        "country": "Sweden"
    },
    "Athens": {
        "latitude": "37.983",
        "longitude": "23.727",
        "city": "Athens",
        "country": "Greece"
    },
    "Belfast": {
        "latitude": "54.597",
        "longitude": "-5.930",
        "city": "Belfast",
        "country": "Northern Ireland"
    },
    "Barcelona": {
        "latitude": "41.387",
        "longitude": "2.168",
        "city": "Barcelona",
        "country": "Spain"
    },
    "Berlin": {
        "latitude": "52.520",
        "longitude": "13.405",
        "city": "Berlin",
        "country": "Germany"
    },
    "Bern": {
        "latitude": "46.948",
        "longitude": "7.447",
        "city": "Bern",
        "country": "Switzerland"
    },
    "Bilbao": {
        "latitude": "43.263",
        "longitude": "-2.935",
        "city": "Bilbao",
        "country": "Spain"
    },
    "Brussels": {
        "latitude": "50.847",
        "longitude": "4.357",
        "city": "Brussels",
        "country": "Belgium"
    },
    "Bucharest": {
        "latitude": "47.497",
        "longitude": "19.040",
        "city": "Bucharest",
        "country": "Romania"
    },
    "Budapest": {
        "latitude": "59.329",
        "longitude": "18.068",
        "city": "Budapest",
        "country": "Hungary"
    },
    "Cardiff": {
        "latitude": "51.483",
        "longitude": "-3.168",
        "city": "Cardiff",
        "country": "Wales"
    },
    "Cologne": {
        "latitude": "50.937",
        "longitude": "6.96",
        "city": "Cologne",
        "country": "Germany"
    },
    "Copenhagen": {
        "latitude": "55.676",
        "longitude": "12.568",
        "city": "Copenhagen",
        "country": "Denmark"
    },
    "Cork": {
        "latitude": "51.898",
        "longitude": "-8.475",
        "city": "Cork",
        "country": "Ireland"
    },
    "Dublin": {
        "latitude": "53.349",
        "longitude": "-6.260",
        "city": "Dublin",
        "country": "Ireland"
    },
    "Edinburgh": {
        "latitude": "55.953",
        "longitude": "-3.188",
        "city": "Edinburgh",
        "country": "Scotland"
    },
    "Florence": {
        "latitude": "43.7696",
        "longitude": "11.255",
        "city": "Florence",
        "country": "Italy"
    },
    "Frankfurt": {
        "latitude": "50.110",
        "longitude": "8.682",
        "city": "Frankfurt",
        "country": "Germany"
    },
    "French Riviera": {
        "latitude": "43.254",
        "longitude": "6.637",
        "city": "French Riviera",
        "country": "France"
    },
    "Funchal": {
        "latitude": "32.650",
        "longitude": "-16.908",
        "city": "Funchal",
        "country": "Portugual"
    },
    "Gibraltar": {
        "latitude": "36.140",
        "longitude": "-5.353",
        "city": "Gibraltar",
        "country": "Gibraltar"
    },
    "Gothenburg": {
        "latitude": "57.708",
        "longitude": "11.974",
        "city": "Gothenburg",
        "country": "Sweden"
    },
    "Hamburg": {
        "latitude": "53.548",
        "longitude": "9.987",
        "city": "Hamburg",
        "country": "Germany"
    },
    "Helsinki": {
        "latitude": "60.169",
        "longitude": "24.938",
        "city": "Helsinki",
        "country": "Finland"
    },
    "Ibiza": {
        "latitude": "39.020",
        "longitude": "1.482",
        "city": "Ibiza",
        "country": "Spain"
    },
    "Kyiv": {
        "latitude": "50.450",
        "longitude": "30.523",
        "city": "Kyiv",
        "country": "Ukraine"
    },
    "Lillehammer": {
        "latitude": "61.115",
        "longitude": "10.466",
        "city": "Lillehammer",
        "country": "Norway"
    },
    "Lisbon": {
        "latitude": "38.722",
        "longitude": "-9.139",
        "city": "Lisbon",
        "country": "Portugual"
    },
    "London": {
        "latitude": "51.507",
        "longitude": "-0.127",
        "city": "London",
        "country": "England"
    },
    "Madrid": {
        "latitude": "40.416",
        "longitude": "-3.703",
        "city": "Madrid",
        "country": "Spain"
    },
    "Mallorca": {
        "latitude": "39.695",
        "longitude": "3.017",
        "city": "Mallorca",
        "country": "Spain"
    },
    "Manchester": {
        "latitude": "53.480",
        "longitude": "-2.242",
        "city": "Manchester",
        "country": "England"
    },
    "Marseille": {
        "latitude": "43.296",
        "longitude": "5.369",
        "city": "Marseille",
        "country": "France"
    },
    "Maspalomas": {
        "latitude": "27.760",
        "longitude": "-15.586",
        "city": "Maspalomas",
        "country": "Spain"
    },
    "Milan": {
        "latitude": "45.464",
        "longitude": "9.190",
        "city": "Milan",
        "country": "Italy"
    },
    "Munich": {
        "latitude": "48.135",
        "longitude": "11.582",
        "city": "Munich",
        "country": "Germany"
    },
    "Naples": {
        "latitude": "40.851",
        "longitude": "14.268",
        "city": "Naples",
        "country": "Italy"
    },
    "Oñati": {
        "latitude": "43.034",
        "longitude": "-2.417",
        "city": "Oñati",
        "country": "Spain"
    },
    "Oslo": {
        "latitude": "59.913",
        "longitude": "10.752",
        "city": "Oslo",
        "country": "Norway"
    },
    "Paris": {
        "latitude": "48.856",
        "longitude": "2.352",
        "city": "Paris",
        "country": "France"
    },
    "Prague": {
        "latitude": "50.075",
        "longitude": "14.437",
        "city": "Prague",
        "country": "Czech Republic"
    },
    "Reykjavík": {
        "latitude": "64.146",
        "longitude": "-21.942",
        "city": "Reykjavík",
        "country": "Iceland"
    },
    "Riga": {
        "latitude": "56.879",
        "longitude": "24.603",
        "city": "Riga",
        "country": "Latvia"
    },
    "Rome": {
        "latitude": "41.902",
        "longitude": "12.496",
        "city": "Rome",
        "country": "Italy"
    },
    "Santa Cruz das Flores": {
        "latitude": "39.453",
        "longitude": "-31.127",
        "city": "Santa Cruz das Flores",
        "country": "Portugual"
    },
    "Santa Cruz de Tenerife": {
        "latitude": "28.463",
        "longitude": "-16.251",
        "city": "Santa Cruz de Tenerife",
        "country": "Spain"
    },
    "Skye": {
        "latitude": "57.273",
        "longitude": "-6.215",
        "city": "Skye",
        "country": "Scotland"
    },
    "Sofia": {
        "latitude": "42.697",
        "longitude": "23.321",
        "city": "Sofia",
        "country": "Bulgaria"
    },
    "Stockholm": {
        "latitude": "59.329",
        "longitude": "18.068",
        "city": "Stockholm",
        "country": "Sweden"
    },
    "Tallinn": {
        "latitude": "59.437",
        "longitude": "24.753",
        "city": "Tallinn",
        "country": "Estonia"
    },
    "Vienna": {
        "latitude": "18.208",
        "longitude": "16.373",
        "city": "Vienna",
        "country": "Austria"
    },
    "Warsaw": {
        "latitude": "52.229",
        "longitude": "21.012",
        "city": "Warsaw",
        "country": "Poland"
    },
    "York": {
        "latitude": "53.961",
        "longitude": "-1.07",
        "city": "York",
        "country": "England"
    },
    "Zurich": {
        "latitude": "47.376",
        "longitude": "8.541",
        "city": "Zurich",
        "country": "Switzerland"
    }
}

function citiesList() {
    const citiesListSelect = document.querySelector('#citiesList');
    for (const city in cities) {
        const cityOption = document.createElement('option');
        cityOption.value = city;
        cityOption.text = city;
        citiesListSelect.append(cityOption);
    }
}

citiesList();

function readCSV() {
    let files = document.querySelector("#fileInput").files;
    if(files.length <= 0 ) {
        alert('please uplaod csv file');
        return "No file";
    }

    let file = files[0];

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
        let csvData = event.target.result;
        let rowData = csvData.split('\n');
        cities = csvArrayToObject(rowData, 2);
        console.log(cities);
        citiesList();
    }
}

function csvArrayToObject(array, objectKey) {
    let object = {};
    let headers = getCSVHeaders(array[0])
    for (let row = 1; row < array.length; row++) {
        let dataColumns = array[row].split(',');
        let item = {};
        for (let col = 0; col < dataColumns.length; col++) {
            item[headers[col]] = dataColumns[col];
        }
        object[dataColumns[objectKey]] = item;
    }

    return object;
}

function getCSVHeaders(headersTxt) {
    let headers = headersTxt.split(',');
    return headers;
}


let readCSVBtn = document.querySelector('#readCSVBtn');
let fileInput = document.querySelector('#fileInput');
readCSVBtn.addEventListener('click', readCSV);


function addTableRows(tableID, day) {
    const tr = document.createElement('tr');
    const thDate = document.createElement('th');
    thDate.innerHTML = day.date;

    const tdWeather = document.createElement('td');
    tdWeather.innerHTML = weatherStatus[day.weather].name;
    // const icon = document.createElement('i');
    // icon.classList.add('fa-solid');
    // icon.classList.add(weatherStatus[day.weather].icon);
    // icon.style.color = weatherStatus[day.weather].color;
    // tdWeather.appendChild(icon);

    const iconSVG = document.createElement('img');
    iconSVG.src = '/assets/fontawesome/svgs/solid/' + weatherStatus[day.weather].svg + '.svg';
    iconSVG.classList.add('mx-2');
    tdWeather.appendChild(iconSVG);

    const tdTemp = document.createElement('td');
    tdTemp.innerHTML = day.temp2m.min + "/" + day.temp2m.max

    tr.appendChild(thDate);
    tr.appendChild(tdWeather);
    tr.appendChild(tdTemp);

    const table = document.querySelector('#' + tableID + ' tbody');
    table.appendChild(tr);
}

function removeTableRows(tableID) {
    let tableBody = document.querySelector('#' + tableID + ' tbody');
    let numChildNodes = tableBody.childNodes.length;
    if (tableBody.hasChildNodes()) {
        for (let node = 0; node < numChildNodes; node++) {
            tableBody.removeChild(tableBody.childNodes[0]);
        }
    }
}


function selectCity() {

    const citiesList = document.getElementById('citiesList');
    document.getElementById('cityHeading').innerHTML = citiesList.value + ", "+cities[citiesList.value].country;
    getWeather(cities[citiesList.value])
        .then(function (weather) {
            removeTableRows('weatherTable');
            console.log(weather.length);
            for (let weatherDay = 0; weatherDay < weather.length; weatherDay++) {
                const day = weather[weatherDay];
                addTableRows('weatherTable', day);
                const table = document.getElementById('weatherTable');
            }
        }, function (err) {
            console.error(err);
        });
}


const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', selectCity);
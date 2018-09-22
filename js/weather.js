// Api keys:
// Apixu: 64dc2cdaa4134ccc8f8155504170704
// OpenWeatherMap: 4166380e507fe432b44c61d209829202
// AccuWeather: PZNgCByqDj6mg3jw9pYmTEWhiMzXeaG2
/// location key: http://dataservice.accuweather.com/locations/v1/cities/search?q=Berlin&apikey=PZNgCByqDj6mg3jw9pYmTEWhiMzXeaG2
//update: time when data was last updated, conditions: weather window.store.conditions, data: time, temp, rain
window.store = {data: []}
let owmURL = 'http://api.openweathermap.org/data/2.5/forecast?id=6545310&units=metric&APPID=4166380e507fe432b44c61d209829202'
let awURL = 'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/178087?metric=true&details=true&apikey=PZNgCByqDj6mg3jw9pYmTEWhiMzXeaG2'

//returns date string for given utc
function getDateString(utc) {
	let day = ""
	switch(getDayOfWeek(utc)){
		case 0: day = "Sonntag"
		break
		case 1: day = "Montag"
		break
		case 2: day = "Dienstag"
		break
		case 3: day = "Mittwoch"
		break
		case 4: day = "Donnerstag"
		break
		case 5: day = "Freitag"
		break
		case 6: day = "Samstag"
		break
	}
	return(day + ", " + ('0' + getDateFromUTC(utc).getDate()).slice(-2) + '.' + ('0' + (getDateFromUTC(utc).getMonth()+1)).slice(-2))
}

// draws titles and charts
function drawCharts() {
	$("#content").empty()
	for(let day = 0; day < window.store.data.length; day++){
		//title
		$("#content").append("<div class='day row'>" + "<h2 class='col-xs-offset-1'>" + getDateString(window.store.data[day][0].date) + "</h2></div>")
		//chart
		var vdat = new google.visualization.DataTable()

		vdat.addColumn("number", "Hour")
		vdat.addColumn("number", "Temperature")
		vdat.addColumn({type: "string", role: "annotation"})
		vdat.addColumn("number", "Rain")
		vdat.addColumn({type: "string", role: "annotation"})

		// find min/max values
		let minRain = Math.min.apply(Math, window.store.data[day].map((o) => {return o.rain;}))
		let maxRain = Math.max.apply(Math, window.store.data[day].map((o) => {return o.rain;}))
		let minTemp = Math.min.apply(Math, window.store.data[day].map((o) => {return o.temp;}))
		let maxTemp = Math.max.apply(Math, window.store.data[day].map((o) => {return o.temp;}))
		//number of annotations
		let maxTempSet = false
		let minTempSet = false
		let maxRainSet = false

		for(let i = 0; i < window.store.data[day].length; i++){
			// hour
			let hour = window.store.data[day][i].hour
			//temp and rain
			let t = window.store.data[day][i].temp
			let r = window.store.data[day][i].rain
			//annotation
			let anTemp = null
			let anRain = null
			if(t == maxTemp && !maxTempSet){
				anTemp = Math.round(t) + "°C"
				maxTempSet = true
			}else if(t == minTemp && !minTempSet){
				anTemp = Math.round(t) + "°C"
				minTempSet = true
			}
			if(r == maxRain && !maxRainSet){
				anRain = r + "mm"
				maxRainSet = true
			}
			// hour, temperature, annotation temperature, rain, rain annodation
			vdat.addRow([hour, t, anTemp, r, anRain])
		}


		var options = {
		  vAxis: {maxValue: 25},
		  legend: "none",
		  colors: ["#FF9900", "#3366CC"]
		}
		var container = document.getElementById('content').appendChild(document.createElement('div'))
		var chart = new google.visualization.AreaChart(container)
		chart.draw(vdat, options)
	}

	//set refresh time
	$("#refreshLabel").text("last refresh: " + new Date().toLocaleTimeString())
}

// returns date from utc timestamp
function getDateFromUTC(utc) {
	let d = new Date(0)
	d.setUTCSeconds(utc)
	return d
}
// returns the day of the week (0-6) from an utc timestamp
function getDayOfWeek(utc) {
	return getDateFromUTC(utc).getDay()
}

// load weather data OpenWeatherMap
function loadDataOWM(dat) {
	dat.list.forEach((period) => {
		let rain = period.rain
		// handle missing rain field
		if (rain.length) {
			rain = period.rain[0]
		} else {
			rain = 0
		}
		window.store.data.push({date: period.dt, temp: period.main.temp, rain: rain})
	})
}

// load weather data AccuWeather
function loadDataAW(dat) {
	dat.forEach((period) => {
		window.store.data.push({date: period.EpochDateTime, temp: period.Temperature.Value, rain: period.Rain.Value})
	})
}

// sort data and clean of duplicates
function cleanData() {
	window.store.data.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
	window.store.data = window.store.data.filter((period, index) => {
		if (index == window.store.data.length - 1) { // last one
			return true
		} else if(period.date != window.store.data[index+1].date) { // dates are not duplicate
			return true
		} else {
			return false
		}
	})
	// set of all weekdays
	let days = new Set()
	window.store.data.forEach((period) => {
		period.day = getDayOfWeek(period.date)
		days.add(period.day)
		period.hour = getDateFromUTC(period.date).getHours()
	})
	// organize data by day
	let data = window.store.data
	window.store.data = []
	let last_day = -1
	data.forEach((period) => {
		let this_day = period.day
		if (this_day == last_day) { // same day
			window.store.data[window.store.data.length - 1].push(period)
		} else { // new day
			window.store.data.push([period])
			last_day = this_day
		}
	})
}

$(window).resize(() => {
	//redraw after resize
	drawCharts()
})

// fetch weather data and display plots
function refresh() {
	let promises = []
	var owm;
	var aw;
	promises.push($.getJSON(owmURL, (response) => { owm = response }))
	promises.push($.getJSON(awURL, (response) => { aw = response }))
	promises.push(google.charts.load('current', {'packages':['corechart', 'table', 'bar']}))

	Promise.all(promises).then(() => {
		window.store.data = []
		loadDataOWM(owm)
		loadDataAW(aw)
		cleanData()
		drawCharts()
	})
}

$(document).ready(() => {
	//register event handler
	$("#refreshButton").click(() => {
		refresh()
	})
	refresh()
})

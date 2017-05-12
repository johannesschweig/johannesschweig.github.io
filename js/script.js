//update: time when data was last updated, conditions: weather window.store.conditions, data: time, temp, rain
window.store = {update: 0, data: [], conditions: []}
		
//send request to openweathermap
function getWeather(){
	let weatherURL = "https://api.apixu.com/v1/forecast.json?key=64dc2cdaa4134ccc8f8155504170704&q=Berlin&days=7";

	return $.getJSON(weatherURL, function(d){
	});
}

//returns date string for given date
function getDateString(date){
	let day = "";
	switch(date.getDay()){
		case 0: day = "Sonntag";
		break;
		case 1: day = "Montag";
		break;
		case 2: day = "Dienstag";
		break;
		case 3: day = "Mittwoch";
		break;
		case 4: day = "Donnerstag";
		break;
		case 5: day = "Freitag";
		break;
		case 6: day = "Samstag";
		break;
	}
	return(day + ", " + ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth()+1)).slice(-2));
}

//draws titles and charts
function drawCharts() {
	$("#content").empty();
	for(let day=0;day<7;day++){
		//title
		$("#content").append("<div class='day row'>" + "<h2 class='col-xs-offset-1'>" + getDateString(window.store.data[day][0].date) + "</h2><img height='36' src=" + window.store.conditions[day].conditionIcon + "></img></div>");
		//chart
		var vdat = new google.visualization.DataTable();
	
		vdat.addColumn("number", "Hour");
		vdat.addColumn("number", "Temperature");
		vdat.addColumn({type: "string", role: "annotation"})
		vdat.addColumn("number", "Rain");
		vdat.addColumn({type: "string", role: "annotation"})
		
		// find min/max values
		let minRain = Math.min.apply(Math, window.store.data[day].map(function(o){return o.rain;}));
		let maxRain = Math.max.apply(Math, window.store.data[day].map(function(o){return o.rain;}));
		let minTemp = Math.min.apply(Math, window.store.data[day].map(function(o){return o.temp;}));
		let maxTemp = Math.max.apply(Math, window.store.data[day].map(function(o){return o.temp;}));
		//number of annotations
		let maxTempSet = false;
		let minTempSet = false;
		let maxRainSet = false;
		
		for(let i=0;i<24;i++){
			//temp and rain
			let t = window.store.data[day][i].temp;
			let r = window.store.data[day][i].rain;
			//annotation
			let anTemp = null;
			let anRain = null;
			if(t == maxTemp && !maxTempSet){
				anTemp = Math.round(t) + "°C";
				maxTempSet = true;
			}else if(t == minTemp && !minTempSet){
				anTemp = Math.round(t) + "°C";
				minTempSet = true;
			}
			if(r == maxRain && !maxRainSet){
				anRain = r + "mm";
				maxRainSet = true;
			}
			vdat.addRow([i, t, anTemp, r, anRain]);
		}
	
		
		var options = {
		  vAxis: {maxValue: 25},
		  legend: "none",
		  colors: ["#FF9900", "#3366CC"]
		};
		var container = document.getElementById('content').appendChild(document.createElement('div'));
		var chart = new google.visualization.AreaChart(container);
		chart.draw(vdat, options);
	}
	
	//set refresh time
	$("#refreshLabel").text("last refresh: " + new Date().toLocaleTimeString() + ", last update: " + window.store.update.toLocaleTimeString());
}

//load weather data
function loadData(dat){
	//load weather data
	window.store.update = new Date(dat.current.last_updated);
	let i = 0; //index
	let lastDate;
	//fill array with window.store.data
	for(e in dat.forecast.forecastday){ //iterate days
		//weather window.store.conditions
		window.store.conditions.push({conditionLabel: dat.forecast.forecastday[e].day.condition.text, conditionIcon: "http://" + dat.forecast.forecastday[e].day.condition.icon});
		//hourly time, temp, rain
		for(h in dat.forecast.forecastday[e].hour){ //iterate hours
			let newDate = new Date(dat.forecast.forecastday[e].hour[h].time);

			let newRain = dat.forecast.forecastday[e].hour[h].precip_mm;
			let newTemp = dat.forecast.forecastday[e].hour[h].temp_c;
			
			if(!lastDate){
				lastDate = newDate;
				window.store.data.push([{date: newDate, temp: newTemp, rain: newRain}])
			}else if(lastDate.getDate()==newDate.getDate()){ //same day
				window.store.data[i].push({date: newDate, temp: newTemp, rain: newRain});
			}else if(lastDate.getDate()!=newDate.getDate()){ //not the same day --> next day
				lastDate = newDate;
				i = i +1;
				window.store.data.push([{date: newDate, temp: newTemp, rain: newRain}]);
			}
		}
	}
};

$(window).resize(function(){
	//redraw after resize
	drawCharts();
});

$(document).ready(function(){
	//load google charts
	google.charts.load('current', {'packages':['corechart']});
	//register event handler
	$("#refreshButton").click(function(){
		getWeather().always(function(dat){
			loadData(dat);
			drawCharts();
		});
	});
	//load weather data and draw charts
	getWeather().always(function(dat){
		loadData(dat);
		drawCharts();
	});
});


// regenrelation
// 0 = trocken
// 1 = Nieselregen, <0.1 mm/h
// 2 = Sprühregen, 0.1 mm/h
// 3 = leichter Landregen (gemeldet als leichter Regen), 0.4 mm/h
// 4 = mäßiger Landregen (gemeldet als Regen oder mäßiger Regen) 1.5 mm/h
// 5 = starker Landregen (gemeldet als starker Regen) 4 mm/h
// 6 = Schauerregen 10 mm/h
// 7 = Gewitterregen 35 mm/h
// 8 = Sturzregen 100 mm/h
// 9 = -meist nur als Hagelunwetter- 300 mm/h

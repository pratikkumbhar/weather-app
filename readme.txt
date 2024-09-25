//Colors for you site.

--text: #1d3557;
--background: #f1faee;
--primary: #457b9d;
--secondary: #a8dadc;
--accent: #e63946;

//google autocomplete api key
AIzaSyAuZ7iNBRv6-3u_VNeeEgL0SvQWF7WKkhE

//request url just enter name of city at the end you will get data

https://api.weatherapi.com/v1/current.json?key=bdc6d1ba112642c39ae155600242409&q=Paris

//response data will look like this.
{
"location": {
"name": "Paris",
"region": "Ile-de-France",
"country": "France",
"lat": 48.87,
"lon": 2.33,
"tz_id": "Europe/Paris",
"localtime_epoch": 1727193597,
"localtime": "2024-09-24 17:59"
},
"current": {
"last_updated_epoch": 1727192700,
"last_updated": "2024-09-24 17:45",
"temp_c": 17.3,
"temp_f": 63.1,
"is_day": 1,
"condition": {
"text": "Light rain",
"icon": "//cdn.weatherapi.com/weather/64x64/day/296.png",
"code": 1183
},
"wind_mph": 7.8,
"wind_kph": 12.6,
"wind_degree": 242,
"wind_dir": "WSW",
"pressure_mb": 1006,
"pressure_in": 29.71,
"precip_mm": 0.09,
"precip_in": 0,
"humidity": 83,
"cloud": 75,
"feelslike_c": 17.3,
"feelslike_f": 63.1,
"windchill_c": 16.1,
"windchill_f": 60.9,
"heatindex_c": 16.1,
"heatindex_f": 60.9,
"dewpoint_c": 13.3,
"dewpoint_f": 56,
"vis_km": 10,
"vis_miles": 6,
"uv": 4,
"gust_mph": 10.6,
"gust_kph": 17
}
}
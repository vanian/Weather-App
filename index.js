$(function() {

	var location = "http://ip-api.com/json";
	$.getJSON(location, function(data) {
		var lat = data.lat;
		var lon = data.lon;
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=5f7bcf238dc7056a7325948af9cb61be", function(data) {

			var icon = data.weather[0].icon;
			var icon_replace = $(".icon").attr("src");
			$(".city").html(data.name);
			var tempc = Math.round(((data.main.temp) - 273.15));
			var tempf = Math.round(tempc * 1.8 + 32);
			var description = data.weather[0].description;
			var cDescription = description.charAt(0).toUpperCase() + description.slice(1);

			$(".app").click(function() {
				$(".temperature").toggle();
			});

			// Adding data to the page
			$(".icon").attr("src", icon_replace.replace("#", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217538/" + icon + ".png"));
			$("#c").html(tempc + "°C");
			$("#f").html(tempf + "°F");
			$(".description").html(cDescription);
		})
	})
});
//to change background based on time - reusable code, has nothing to do with rest of the code

var d = new Date(),
	h = d.getHours(),
	i;
if (h > 5 && h < 12) {
	i = "http://cdn.pcwallart.com/images/mountain-sunrise-background-wallpaper-1.jpg";
	var greet = "Good Morning";

} else if (h < 15 && h > 12) {
	i = "http://photofiles.alphacoders.com/247/24716.jpg";
	var greet = "Good Afternoon"
} else if (h < 21 && h > 15) {
	i = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Sunset_in_Coquitlam.jpg";
	var greet = "Good Evening"

} else {
	i = "https://iso.500px.com/wp-content/uploads/2013/08/11834033-1170.jpeg";
	var greet = "Good Night";
}

document.body.style.background = "url(" + i + ")";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.getElementById('greetings').innerHTML = "<h1>" + greet + "</h1>";
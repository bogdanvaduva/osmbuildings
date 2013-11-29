<!DOCTYPE html>
<html>
<head>
<title>OSM Buildings - Here</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<style>
html, body {
  border: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#map {
  height: 100%;
}
</style>
<link rel="stylesheet" href="CSS">
<script src="http://api.maps.nokia.com/2.2.3/jsl.js"></script>
<script src="../dist/OSMBuildings-Here.js"></script>
</head>

<body>
<div id="map"></div>

<script>
nokia.Settings.set("appId", "_peU-uCkp-j8ovkzFGNU");
nokia.Settings.set("authenticationToken", "gBoUkAMoxoqIWfxWA5DuMQ");
var map = new nokia.maps.map.Display(document.getElementById('map'), {
  components: [
    new nokia.maps.map.component.Behavior(),
    new nokia.maps.map.component.ZoomBar()
  ],
  zoomLevel: 17,
  center: [52.50440, 13.33522]
});

var osmb = new OSMBuildings(map).loadData();
</script>
</body>
</html>
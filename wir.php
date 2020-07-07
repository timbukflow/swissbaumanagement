<!DOCTYPE html>
<!--[if IE 7]>	 <html class="no-js lt-ie9 lt-ie8" lang="de"><![endif]-->
<!--[if IE 8]>	 <html class="no-js lt-ie9" lang="de"><![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="de">
<!--<![endif]-->
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# place: http://ogp.me/ns/place#">
    <meta charset="utf-8">
    <title>Swiss Baumanagement</title>
    <meta name="description" content="Die Swiss Baumanagement AG ist ein Team von Bauexperten. Wir verstehen uns als kompetente Partner in komplexen Bauprojekten und realisieren Ihr Bauvorhaben.">
    <?php include 'head.php'; ?>
</head>
  
<body>
    <?php include 'header.php'; ?>
    <section class="container">
        <div class="gridtwo">
            <div class="gridcontainer">
                <div class="infoc">
                    <h1>
                        <span>Wir</span>
                        Die Swiss Baumanagement AG mit Sitz in St.Gallen blickt auf eine über 30 jährige Erfahrung im Bau- und Immobiliengewerbe zurück. Dabei richten wir unsere Kompetenz auf die Errichtung von Wohn – und Gewerbehäusern sowie Renovationen.<br><br>Was uns erfolgreich macht ist schnell erklärt. Wir sind davon überzeugt, dass Vertrauen die Grundvoraussetzung einer erfolgreichen Zusammenarbeit ist. Auf diese Maxime aufbauend, freuen wir uns jeden Tag aufs Neue, gemeinsam mit Ihnen und unseren Partnern, architektonisch anspruchsvollen und lebenswerten Wohnraum zu schaffen. Nach Kauf und Entwicklung eines Grundstücks organisiert und koordiniert die Swiss Baumanagement AG sämtliche Bauleistungen und begleitet die Architektenplanung bis hin zur Auftragserteilung für die Bauausführung.
                    </h1>
                </div>
            </div>
        </div>
        
         <div class="gridtwo">
            <div class="gridcontainer">
                <h1><span>Partner</span></h1>
                <h2 class="accTitle">
                    <a href="http://art-of-loft.ch/" target="_blank">Art of Loft
                        <img class="pfeil" src="img/pfeil.svg" width="30px" height="24px">
                    </a>
                </h2>
                <h2 class="accTitle">
                    <a href="http://www.adp-baumanagement.ch/" target="_blank">ADP Baumanagement
                        <img class="pfeil" src="img/pfeil.svg" width="30px" height="24px">
                    </a>
                </h2>
                <h2 class="accTitle">
                    <a href="http://hvkimmo.ch/" target="_blank">HVK Immobilien
                        <img class="pfeil" src="img/pfeil.svg" width="30px" height="24px">
                    </a>
                </h2>
                <h2 class="accTitle">
                    <a href="http://meierpartnerimmobilien.ch/" target="_blank">Meier &amp; Partner Immobilien
                        <img class="pfeil" src="img/pfeil.svg" width="30px" height="24px">
                    </a>
                </h2>              
            </div>
        </div>
        <div class="gridone">
            <div class="gridcontainer">
                <h1><span>Standort</span></h1>
                    <div class="description">
                        <h2 class="long">Flurhofstrasse 160 | 9000 St.Gallen</h2>
                    </div>
                    <div class="map long">
                        <div class="inview long"></div>
                        <div id="map"></div>
                    </div>
            </div>
        </div>
    </section>
    
    <script>
        function initMap() {
            var swissbaumanagement = {lat: 47.432370, lng: 9.405179}; 
            var map = new google.maps.Map(
                document.getElementById('map'), {
                    zoom: 14, 
                    center: swissbaumanagement,
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    styles: [
                        {"featureType": "administrative","elementType": "geometry","stylers":[{"visibility": "off"}]},
                        {"featureType": "landscape.man_made","elementType": "geometry.stroke","stylers": [{"color": "#c8c8c8"}]},
                        {"featureType": "poi","stylers": [{"visibility": "off"}]},
                        {"featureType": "road","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
                        {"featureType": "transit","stylers": [{"visibility": "off"}]}
                    ]
                });
            
            var icon = { 
                url: "img/marker.svg",
                scaledSize: new google.maps.Size(40, 40),
                origin: new google.maps.Point(0,0),
                anchor: new google.maps.Point(0, 0)
            }; 

            var marker = new google.maps.Marker({ 
                position: swissbaumanagement, 
                map: map, 
                icon: icon 
            });    
        }
    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQn8EflPEw6mWtOisyIfTdk3rnt2TfYCc&callback=initMap"
  type="text/javascript"></script>
    
    <?php include 'footer.php'; ?>    
    <?php include 'script.php'; ?>
    
</body>
</html>

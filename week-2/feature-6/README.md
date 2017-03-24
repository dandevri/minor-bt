# Feature 6.

## Demo
[Link to live demo](https://dandevri.github.io/minor-bt/week-2/feature-6/feature-6.html)

## Description of the Feature
Google Maps API allows you to display maps on your web site. The Google Maps JavaScript API is one of the most used API's. Most people used it during the funda project and i've played around with it but I wanted to see if I can provide a fallback if JavaScript was disabled.

## Fallback
After some googling I came across [this StackOverflow](https://stackoverflow.com/questions/21698889/image-fallback-when-there-is-no-internet-connection-to-load-google-map-canvas) page. After reading through the Google Developers page I noticed that there was a **Google Maps Static API** to embed a map image without JavaScript or dynamic page loading.

## Browser support
The Google Maps static API allows you to embed a Google Maps image on your web page without requiring JavaScript. It sends a image back with a standard HTTPrequest so it's supported in every browser. If the user has JavaScript enabled it will show the interactive map.

## Resources
[Google Developers](https://developers.google.com/maps/documentation/static-maps/intro)  
[Stack Overflow](https://stackoverflow.com/questions/21698889/image-fallback-when-there-is-no-internet-connection-to-load-google-map-canvas)

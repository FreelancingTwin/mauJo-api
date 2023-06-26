# [mauJo](https://maujo.netlify.app/)
## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#collaboration)
5. [Bugs](#bugs)
### General Info
***
A Cafe website I built for one I found on Instagram, just a passion project. Played with the Google Places API, and brushed up fundamentals with UI/UX, and CSS responsiveness.
[Alt link to website with different hosting provider, fonts work, google api still nil](http://maujo.surge.sh) 
### Screenshot
![Screenshot](https://github.com/FreelancingTwin/mauJo/blob/main/assets/screenshot.png)
## Technologies
***
A list of technologies used within the project:
* [Cors](https://www.npmjs.com/package/cors): Version 2.8.5 
* [Express](https://www.npmjs.com/package/express): Version 4.18.2
* [Node-fetch](https://www.npmjs.com/package/node-fetch): Version 3.3.1
* [DateRangePickerCalendarCssCdn](https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css)
*[DateRangePickerCalendarJSCdn](https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js): For the bookings Calendar css and behaviour
* [Jquery](https://cdn.jsdelivr.net/jquery/latest/jquery.min.js): Dependency for the DateRangePicker cdn, helps write behaviour.
* [MomentJs](https://cdn.jsdelivr.net/momentjs/latest/moment.min.js): Dependency for DateRangePicker, gives times.
* [ChartJs](https://cdn.jsdelivr.net/npm/chart.js): For the Bar Graphs.
* [GoogleMapsPlacesAPI](The Horror! Need help with debugging pls) 
* [FontAwesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css): Version 6.4.0. For Icons. 
## Installation
*** 
```
$ git clone git@github.com:FreelancingTwin/mauJo.git 
$ cd maujo
$ npm install
```
(Install live server VS code extension and) go live.

Side information: I can't seem to make the google api work in production env. Must be the hosting provider Netlify, but not sure. Please message me if you know why.
<!-- ## Collaboration -->
***
<!-- Give instructions on how to collaborate with your project.
> Maybe you want to write a quote in this part. 
> Should it encompass several lines?
> This is how you do it. -->

## Bugs
***
1. **Server won't fetch google api in production**
>So it works fine in development. When I host it, I have to change the fetch url to domain name. It kinda goes off. Around Lines 97 in main.js. HELPPPP! 
2. __Video tags won't autoplay on load sometimes__ 
>On some browsers* The video tags default to the poster. If you know fixes, I'm ears.
3. **Fonts won't get past CORS on Netlify**
>So, again, works in development, AND production, works with a different hosting provider 'surge'. visit ***maujo.surge.sh*** to see the supposed fonts. But doesn't work with netlify.

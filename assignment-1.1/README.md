# Investigate features

## Cookies

### What are cookies?

All websites and search engines use cookies. It allows sites you visit to recognize your computer and tailor your online experience. Cookies are little documents (text files) which stores your preferences. If you browse to the website again it will be able to retreive the cookie.


> Short bit of text that a browser sends to your website so that the website can remember you.  

> It is a small file that websites place on visitors' browsers.

The use of a cookie file has gotten a different form and meaning troughout the year. It's not just one file anymore it are databases, small plugins and web beacons are considered cookies.

### Types of cookies
* **First party cookies:** Back and forth between browser and website.
* **Third-party cookies / Tracker cookies:** Travels between browser and advertising company. It's redirects to a different site then you're visiting to mostly deliver ads that are relevant to you.

### Disabling
If you disable cookies websites won't be able to retrieve prior settings. Why should you disable cookies? Most people disable them because of privacy concers such as tracking cookies.

#### Chrome Settings
* In Chrome you can view, block and disable cookies. `chrome://settings/ > advanced settings > settings for content > all cookies`.
* Cookies are also stored on your macOS drive. `Navigate to [username] > library > application support > Chrome > Default Cookies` Chrome store those cookies in SQlite and you can view them with SQLite Database Browser.

### Security
A cookie doesn't store personal information such as number etc. but it stores the ID. It cannot run programs or access files on your hard drive and it is up to the creator of the website to determine which data is being stored in a cookie. Cookie are just a tool.

### The Law
The law of Telecommunications (EU) is introduced to give the user more control of the use of a cookie. A user has to give explicit permission to place a cookie. The website needs to show a clear and obvious Cookie statement which users need to accept before placing a cookie.

Websites can use cookies if they are only used for the effectiveness off the website.

### Pros cookies
* It can store information you may have to repeat many times, it fills out stuff for you. For example a filled out form or the basket in a webshop.
* Great for serving personalized content: for example related products.

### Cons cookies
* Privacy: The main concern for most users is privacy. Cookie enabled web browsers keep track of all the websites you have visited.

### Alternatives
* One way advertisers can track mobile users is by capturing the device’s unique identifier, which is either set or made available by the operating system to mobile apps.
* Universal logins allow users to log in to different sites and apps with an existing set of credentials, instead of creating a new username and password for that particular site or app. Companies that provide users with this kind of universal login are able to track them across a number of different sites, apps, and devices.
* Cookie tracking, a small file similar to that of a cookie, is stored in the HTML5 local storage on a user’s device.

**Resources**  
[Advertisement - What is a cookie? ](https://www.youtube.com/watch?v=I01XMRo2ESg)  
[Google - What is a cookie?](https://www.youtube.com/watch?v=I01XMRo2ESg)  
[Google - A look at cookies](https://www.youtube.com/watch?v=TBR-xtJVq7E)  
[Pros and Cons of Cookies](http://www.internetmarketinginc.com/blog/the-pros-and-cons-of-cookies-a-google-story/)  
[Cookie alternatives](http://clearcode.cc/2015/05/cookie-alternative-future-mobile-advertising/)

## LocalStorage

### What is localStorage?
localStorage has a strong similarity with Cookies. It stores application data in the users browser. Since HTML5 localStorage was introduced which is more secure and larger amounts of data can be stored without affecting website performance.

* localStorage: localStorage has no expiration time
* sessionStorage: data stored in sessionStorage gets cleared when the browsing session ends—that is, when the browser is closed.

### How does it work
The main problem with HTTP as the main transport layer of the Web is that it is stateless. This means that when you use an application and then close it, its state will be reset the next time you open it.

### Security
Of course, any powerful technology comes with the danger of people abusing it for darker purposes. Samy, the man behind the “Samy is my hero” MySpace worm, recently released a rather scary demo called Evercookie, which shows how to exploit all kind of techniques, including local storage, to store information of a user on their computer even when cookies are turned off. Use JavaScript store the data.

### Chrome Settings
Chrome provides the ability to block HTML5 LocalStorage as part of its cooking-blocking functionality.

### Difference from Cookies
* More storage
* Only client-side: Web storage data is not automatically transmitted to the server in every HTTP request, and a web server can't directly write to Web storage.
* Cookies are meant to be read by the server, localstorage is meant to be read by the client.

### Pros
* localStorage is mostly use with apps or hybrid apps to store the state of a app.
* localStorage is an implementation of the Storage Interface. It stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data - unlike cookie expiry.
* In terms of capabilities, cookies only allow you to store strings. sessionStorage and localStorage allow you to store JavaScript primitives but not Objects or Array
* used to store data in the browser between HTTP requests
* Web storage currently provides a better programmatic interface than cookies because it exposes an associative array data model where the keys and values are both strings.
* Local storage is per origin (per domain and protocol).


**Resources**  
[Mozilla Developer Network](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage)  
[Smashing Magazine](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/)  
[Pros and Cons](https://www.quora.com/What-are-the-pros-and-cons-of-using-an-HTML5-local-storage-vs-cookies)
[localStorage](https://stackoverflow.com/questions/3220660/local-storage-vs-cookies)

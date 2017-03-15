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

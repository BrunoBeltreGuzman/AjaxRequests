# AjaxRequests
Send Request with basic technologies JS Vanilla, Fetch, Axios and jQuery

# Requests:

**JS Vanilla**

The XMLHttpRequest object sends a request to a web server
or ActiveXObject("Microsoft.XMLHTTP") for old browsers
```javascript
const request = new XMLHttpRequest();
const request = new ActiveXObject("Microsoft.XMLHTTP");

//Send a Request
request.open(method, url, async);
```



**Fetch**

The Fetch API interface allows submitting requests in a simpler way.
```javascript
fetch("url", { setting })
       .then(function (response) {
              //get response and return text
       })
       .then(function (text) {
              //get text
       })
       .catch(function (error) {
              //handle error
       });
```
Since Fetch is based on async and await, this could also be done with an async and await function.



**Axios**

Requests can be made by passing the relevant config to axios.
```javascript
axios({ setting })
       .then(function (response) {
              //get response
       })
       .catch(function (error) {
              //handle error
       });
```
Axios tambien se basa en async y await, por lo que también se podría hacer con una función async y await.



**jQuery**

The jQuery library has a full set of Ajax capabilities. The functions and methods it contains allow us to load data from the server without the need to refresh the browser page.
```javascript
$.ajax("url", { setting });
```
A set of key / value pairs that configure the Ajax request. All settings are optional.



**AJAX permite que las páginas web se actualicen de forma asincrónica mediante el intercambio de datos con un servidor web detrás de escena. Esto significa que es posible actualizar partes de una página web, sin recargar toda la página.**

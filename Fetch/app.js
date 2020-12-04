const btnSendRequest = document.getElementById("btnSendRequest");
const message = document.getElementById("message");

function sendRequest() {
       /*
              GET(server?val1="value"&val2="value"&..)
       */
       fetch("server.php")
              .then(function (response) {
                     if (response.ok) {
                            return response.text();
                     } else {
                            throw "Error 404";
                     }
              })
              .then(function (text) {
                     console.log(text);
                     let datos = JSON.parse(text);
                     console.log(datos);
                     message.innerHTML = datos.response;
              })
              .catch(function (error) {
                     console.error("Error: " + error);
                     message.innerHTML = "Error: " + error;
              });
}

btnSendRequest.addEventListener("click", sendRequest);

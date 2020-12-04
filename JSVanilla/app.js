const btnSendRequest = document.getElementById("btnSendRequest");
const message = document.getElementById("message");

function sendRequest() {
    let request = null;
    if (XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open("GET", "server.php", true);

    request.addEventListener("load", function() {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.response);
            let datos = JSON.parse(request.response);
            console.log(datos);
            message.innerHTML = datos.response;
        } else {
            console.log("Error: " + request.status);
            message.innerHTML = "Error: " + request.status;
        }
    });

    request.send(request);
}

btnSendRequest.addEventListener("click", sendRequest);
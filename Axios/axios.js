/*
       Realización de una solicitud POST
*/
function sendRequest() {
       axios.post("server.php")
              .then(function (response) {
                     console.log(response);
                     console.log(response.data.data);
                     document.getElementById("message").innerHTML =
                            response.data.data;
              })
              .catch(function (error) {
                     console.log(error);
                     console.log(error.response);
                     console.log(error.response.statusText);
                     console.log(
                            "Error: " +
                                   error.response.status +
                                   " " +
                                   error.response.statusText
                     );
                     document.getElementById("message").innerHTML = error;
              });
}

document.getElementById("btn").addEventListener("click", sendRequest);

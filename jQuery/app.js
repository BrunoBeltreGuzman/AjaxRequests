$(document).ready(function () {
       $("#btnSendRequest").click(function () {
              $.ajax({
                     url: "server.php",
                     method: "GET",
                     dataType: "html", // or JSON
                     success: function (response) {
                            console.log(response);
                            let datos = JSON.parse(response);
                            console.log(datos);
                            $("#message").html(datos.response);
                     },
                     error: function (request, status, error) {
                            console.log("Request: " + request);
                            console.log("Status: " + status);
                            console.log("Error: " + error);
                     },
              });
       });
});

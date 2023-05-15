const string = {
    name: "La Plateforme_",
    address: "8 rue d'hozier",
    city: "Marseille",
    nb_staff: "11",
    creation:"2019"
    };

    function jsonValueKey(string) {

            let inputVal = $("#in").val();
  
            $("#exp").text(string[inputVal]); 
           
        }
            
    $(function () {
    
    $("button").click( function() {
        jsonValueKey(string);
    })
    });

/*## Exercise 2
Create a button
When the button is clicked, call the StarWars api for the first person. \
Print the person name in an **h1** tag. \
Print the person stats in a **table**:
* Height
* Weight
* Eye color
* Hair color

**URL:** https://swapi.dev/api/people/1 \
**NOTE:** JQuery will autmatically parse this call (js will not).*/

$(document).ready(function() {

    function starWars(starWarsResponse) {
        let newHeader1 = $(`<h1></h1>`).text(`${starWarsResponse.name}`);
        let personStats = $(` <table border = "1px">
            <tr>
                <th>Height</th>
                <th>Weight</th>
                <th>Eye Color</th>
                <th>Hair color</th>
            </tr>        
            <tr>
                <td>${starWarsResponse.height}</td>
                <td>${starWarsResponse.weight}</td>
                <td>${starWarsResponse.eye_color}</td>
                <td>${starWarsResponse.hair_color}</td>
            </tr>
            </table>`);
    $("#newDiv").append(newHeader1,personStats);
    }

    $("#myBtn").click(function() {

        $.ajax ( {
            method:"GET",
            url:"https://swapi.dev/api/people/1/",

            success: function (response) {                               
                starWars(response);
            },
            error:function (response) {
                console.log("Bad request");
            
            } 
        });
    });
});
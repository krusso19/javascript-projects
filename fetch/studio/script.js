//TODO: Add Your Code Below
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        console.log(response);

        //Access the JSON in the response
        const jsonPromise = response.json();
       
        jsonPromise.then(function(json) {
            // console.log(json);                   //Checking that the JSON is pulled correctly
            const container = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
                container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                `
            }

            
        });
    });     
});
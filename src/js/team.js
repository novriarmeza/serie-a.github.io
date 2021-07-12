function teamJSON(data) {
    data = JSON.parse(JSON.stringify(data).replace(/http:/g, 'https:'));
    document.getElementById("id-namaklub").innerHTML = data.name;
    document.getElementById("id-logo").src = data.crestUrl;
    document.getElementById("id-name").innerHTML = data.name;
    document.getElementById("id-website").innerHTML = data.website;
    document.getElementById("id-founded").innerHTML = data.founded;
    document.getElementById("id-clubColors").innerHTML = data.clubColors;
    document.getElementById("id-venue").innerHTML = data.venue;
    document.getElementById("id-preloader").innerHTML = '';
}

function playerJSON(data) {
    document.getElementById("id-nama").innerHTML = data.name;
    document.getElementById("id-firstName").innerHTML = data.firstName;
    if (data.lastName == null) {
        data.lastName = "-"
    }
    document.getElementById("id-lastName").innerHTML = data.lastName;
    document.getElementById("id-dateOfBirth").innerHTML = data.dateOfBirth;
    document.getElementById("id-countryOfBirth").innerHTML = data.countryOfBirth;
    document.getElementById("id-nationality").innerHTML = data.nationality;
    document.getElementById("id-position").innerHTML = data.position;
    document.getElementById("id-preloader").innerHTML = '';
}

function teamFav(data) {
    var dataTeamFavHtml = ''
    data.forEach(function (team) {
        dataTeamFavHtml += `
        <div class="col s12 m6 l6">
            <div class="card">
                <div class="card-content blue darken-1">
                    <div center-align>
                        <h5 class="center-align">
                            <span>  
                                <a class="white-text" href="./team.html?id=${team.id}">${team.name}</a>
                            </span>
                        </h5>          
                    </div>
                </div>
            </div>
        </div>
        `
    });

    document.getElementById("id-favorite-load").innerHTML = dataTeamFavHtml;
}

function playerFav(data) {
    var dataPlayerFavHtml = ''
    data.forEach(function (player) {
        dataPlayerFavHtml += `
        <div class="col s12 m6 l6">
            <div class="card">
                <div class="card-content blue darken-1">
                    <div center-align>
                        <h5 class="center-align">
                        <span> 
                            <a class="white-text" href="./player.html?id=${player.id}">${player.name}</a>
                        </span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>`
    });

    document.getElementById("id-favorite-load").innerHTML = dataPlayerFavHtml;
}


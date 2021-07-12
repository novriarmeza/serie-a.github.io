function resultDetailScheduleJSON(data) {
    var matchDay = data.match.matchday;
    var kickOff = convertDate(new Date(data.match.utcDate));
    var homeTeamName = data.match.homeTeam.name;
    var awayTeamName = data.match.awayTeam.name;
    // var wasit0 = data.match.referees[0].name;
    // var wasit1 = data.match.referees[1].name;
    // var wasit2 = data.match.referees[2].name;
    // var wasit3 = data.match.referees[3].name;
    // var wasit4 = data.match.referees[4].name;
    var venue = data.match.venue;

    document.getElementById("id-matchDay").innerHTML = `Matchday : ${matchDay}`;
    document.getElementById("id-kickOff").innerHTML = `Kick Off : ${kickOff}`;
    document.getElementById("id-homeTeamName").innerHTML = homeTeamName;
    document.getElementById("id-awayTeamName").innerHTML = awayTeamName;
    // document.getElementById("id-wasit0").innerHTML = wasit0;
    // document.getElementById("id-wasit1").innerHTML = wasit1;
    // document.getElementById("id-wasit2").innerHTML = wasit2;
    // document.getElementById("id-wasit3").innerHTML = wasit3;
    // document.getElementById("id-wasit4").innerHTML = wasit4;
    document.getElementById("id-venue").innerHTML = `Venue : ${venue}`;
    document.getElementById("id-preloader").innerHTML = '';
}

function matchFav(data) {
    var dataMatchFavHtml = ''
    data.forEach(function (match) {
    dataMatchFavHtml += `
    <div class="col s12 m6 l6">
        <div class="card">
            <div class="card-content">
                <div center-align>
                    <h5 class="center-align">Matchday </h5>
                    <div class="center-align">Kick Off : ${convertDate(new Date(match.match.utcDate))}</div>

                    <div class="row" style="margin:20px">
                        <div class="col s5 truncate right-align">
                            <span class="blue-text text-darken-2">  ${match.match.homeTeam.name}</span>
                        </div>
                        <div class="col s2 ">
                            VS
                        </div>
                        <div class="col s5 truncate left-align">
                            <span class="blue-text text-darken-2">  ${match.match.awayTeam.name}</span>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>`
    });
  
    document.getElementById("id-favorite-load").innerHTML = dataMatchFavHtml;
  }
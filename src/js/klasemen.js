function klasemenJSON(data) {
    var tableStandingsHTML = ''
    data.standings.forEach(function (standings) {
        var dataStandings = ''
        standings.table.forEach(function (dataTeam) {
            dataTeam = JSON.parse(JSON.stringify(dataTeam).replace(/http:/g, 'https:'));
            dataStandings += 
            `<tr>
                <td class="center-align">${dataTeam.position}</td>
                <td class="center-align">
                    <a href="./team.html?id=${dataTeam.team.id}">
                        <p class="hide-on-small-only">
                            <img class ="show-on-medium-and-up show-on-medium-and-down class-img-team-standings" src=${dataTeam.team.crestUrl}  alt="logo">
                            ${dataTeam.team.name}
                        </p>
                        <p class="hide-on-med-and-up">
                            <img src=${dataTeam.team.crestUrl}  alt="logo" class="class-img-team-standings">
                        </p>
                    </a>
                </td>
                <td class="center-align">${dataTeam.playedGames}</td>
                <td class="center-align">${dataTeam.points}</td>
            </tr>`
        });

        tableStandingsHTML += `
        <h6 class="class-bold mb-2">${convertDate(new Date(data.competition.lastUpdated))}</h6> 
        <div class="card">
            <div class="card-content">
                <table class="striped">
                    <thead>
                    <tr>
                        <th class="center-align">Position</th>
                        <th class="center-align">Team</th>
                        <th class="center-align">Played</th>
                        <th class="center-align">Points</th>
                    </tr>
                    </thead>
                    <tbody>` + dataStandings + `</tbody>
                </table>
            </div>
        </div>`
    });

    document.getElementById("klasemen-content").innerHTML = tableStandingsHTML;
}
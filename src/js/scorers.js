function scorersJSON(data) {
    var tableScorersHTML = ''
    var scorersHTML = ''
    data.scorers.forEach(function (dataScorers) {
        scorersHTML += 
        `<tr>
            <td class="center-align">${dataScorers.player.name}</td>
            <td class="center-align">${dataScorers.team.name}</td>
            <td class="center-align">${dataScorers.numberOfGoals}</td>
        </tr>`
        });

        tableScorersHTML += `
        <h6 class="class-bold mb-2">${convertDate(new Date(data.competition.lastUpdated))}</h6> 
        <div class="card">
            <div class="card-content">
                <table class=" striped">
                    <thead>
                    <tr>
                        <th class="center-align">Name</th>
                        <th class="center-align">Team</th>
                        <th class="center-align">Goals</th>
                    </thead>
                    <tbody>` + scorersHTML + `</tbody>
                </table>
            </div>
        </div>`
    

    document.getElementById("scorers-content").innerHTML = tableScorersHTML;
}
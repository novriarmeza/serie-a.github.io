let api_base_url = "https://api.football-data.org/v2/";
const id_liga = 2019;

//Standing
let  api_standings = `${api_base_url}competitions/${id_liga}/standings?standingType=TOTAL`;

//Schedule
let  api_schedule_next = `${api_base_url}competitions/${id_liga}/matches?status=SCHEDULED`;
let api_match = `${api_base_url}matches/`;

let api_team = `${api_base_url}teams/`;
let api_player = `${api_base_url}players/`;
let api_scorers = `${api_base_url}competitions/${id_liga}/scorers`;

let fetchApi = url => {
  return fetch(url, {
    // method: 'GET',
    headers: {
      'X-Auth-Token': '8c0f6757fe6a4900bd4acd94bed2e4e5'
    }
  });
}

function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}

function json(response) {
    return response.json();
}

function error(error) {
    console.log("Error : " + error);
}

//klasemen
function getKlasemen() {
    if ('caches' in window) {
        caches.match(api_standings).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    klasemenJSON(data);
                });
            }
        });
    }

    fetchApi(api_standings)
        .then(status)
        .then(json)
        .then(function (data) {
            klasemenJSON(data)
        })
        .catch(error);
}

//Top Score
function getScorers() {
    if ('caches' in window) {
        caches.match(api_scorers).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    scorersJSON(data);
                });
            }
        });
    }

    fetchApi(api_scorers)
        .then(status)
        .then(json)
        .then(function (data) {
            scorersJSON(data)
        })
        .catch(error);
}

//Schedule 
function getScheduleLeague() {
    return new Promise(function (resolve, reject) {

        if ('caches' in window) {
            caches.match(api_schedule_next).then(function (response) {
                if (response) {
                    response.json().then(function (data) {
                        resultScheduleJSON(data);
                        resolve(data);
                    });
                }
            });
        }

        fetchApi(api_schedule_next)
            .then(status)
            .then(json)
            .then(function (data) {
                resultScheduleJSON(data);
                resolve(data);
            })
            .catch(error);
    });
}


function getDetailScheduleById() {
    return new Promise(function (resolve, reject) {
        var urlParams = new URLSearchParams(window.location.search);
        var idParam = urlParams.get("id");
        if ('caches' in window) {
            caches.match(api_match + idParam).then(function (response) {
                if (response) {
                    response.json().then(function (data) {
                        console.log(data);
                        resultDetailScheduleJSON(data);
                        resolve(data)
                    });
                }
            });
        }
        fetchApi(api_match + idParam)
            .then(status)
            .then(json)
            .then(function (data) {
                resultDetailScheduleJSON(data);
                resolve(data);
            })
            .catch(error);
    });
}

//END Schedule

function getTeam() {
    return new Promise(function (resolve, reject) {
        var urlParams = new URLSearchParams(window.location.search);
        var idParam = urlParams.get("id");
        var dataSquadHTML = ''
        var tableSquadHTML = ''
        if ("caches" in window) {
            caches.match(api_team + idParam).then(function (response) {
                if (response) {
                    response.json().then(function (data) {
                        teamJSON(data)
                        data.squad.forEach(function (squad, index) {

                            dataSquadJSON = squad;
                            dataSquadHTML += `
                            <tr>
                                <td><a href="./player.html?id=${squad.id}"> ${squad.name}</a></td>
                                <td >${squad.position}</td>
                            </tr>`
                        });
                        tableSquadHTML += 
                        `<table>
                            <tbody> ${dataSquadHTML}  </tbody>
                        </table>`
                        document.getElementById("squad").innerHTML = tableSquadHTML;
                        resolve(data);
                    });
                }
            });
        }

        fetchApi(api_team + idParam)
            .then(status)
            .then(json)
            .then(function (data) {
                teamJSON(data)
                dataTeamJSON = data;
                data.squad.forEach(function (squad, index) {
                   
                    dataSquadJSON = squad;
                    dataSquadHTML += `
                    <tr>
                        <td>${index+1}. </td>
                        <td><a href="./player.html?id=${squad.id}"> ${squad.name}</a></td>
                        <td>${squad.position}</td>
                    </tr>`
                });
                tableSquadHTML += `
                <table>
                    <thead>
                        <tr>
                            <td class="class-font-bold">No</td>
                            <td class="class-font-bold">Name</td>
                            <td class="class-font-bold">Position</td>
                        </tr>
                    </thead>
                    <tbody> ${dataSquadHTML}  </tbody>
                </table>`

                document.getElementById("squad").innerHTML = tableSquadHTML;
                resolve(data);
            })
            .catch(error);
    });
}

function getPlayer() {
    return new Promise(function (resolve, reject) {
        var urlParams = new URLSearchParams(window.location.search);
        var idParam = urlParams.get("id");
        if ('caches' in window) {
            caches.match(api_player + idParam).then(function (response) {
                if (response) {
                    response.json().then(function (data) {
                        playerJSON(data);
                        resolve(data)
                    });
                }
            });
        }
        fetchApi(api_player + idParam)
            .then(status)
            .then(json)
            .then(function (data) {
                playerJSON(data);
                resolve(data);
            })
            .catch(error);
    });
}


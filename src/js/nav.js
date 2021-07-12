document.addEventListener("DOMContentLoaded", function() {
    //activate sidebar nav
    var elems = document.querySelectorAll(".sidenav");
    var typefavorite = '';
    M.Sidenav.init(elems);
    loadNav();

    function loadNav() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4) {
                if(this.status != 200) return;

                //muat daftar tautan
                document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
                    elm.innerHTML = xhttp.responseText;
                });

                //daftarkan event listener untuk setiap tautan menu
                document.querySelectorAll(".sidenav a, .topnav a").forEach(function(elm) {
                    elm.addEventListener("click", function(event) {
                        //tutup sidenav
                        var sidenav = document.querySelector(".sidenav");
                        M.Sidenav.getInstance(sidenav).close();

                        //muat konten halaman yang dipanggil
                        page = event.target.getAttribute("href").substr(1);
                        loadPage(page);
                    });
                });
            }
        };
        xhttp.open("GET", "nav.html", true);
        xhttp.send();
    }

    var page = window.location.hash.substr(1);
    setupPage(page);

    function setupPage(page) {
        if (page == "" || page == "#") {
          page = "home";
        } else if (page === "favorite" || page === "fav-team") {
          page = "favorite";
          typefavoritee = "team";
        } else if (page === "fav-player") {
          page = "favorite";
          typefavoritee = "player";
        } else if (page === "fav-match") {
          page = "favorite";
          typefavoritee = "match";
        }
        return page;
      }

    //load page content
    var page = window.location.hash.substr(1);
    if(page == "") page = "home";
    loadPage(page);

    function loadPage() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            var content = document.querySelector("#body-content");
            if(this.readyState == 4) {
                if (page === "home") {
                    getKlasemen();
                } else if (page == "standings") {
                    getKlasemen();
                } else if (page == "schedule") {
                    getScheduleLeague();
                } else if (page == "scorers") {
                    getScorers();
                } else if (page == "favorite") {
                    readDataFavHtml(typefavorite);
                } else {
                    typefavorite = "";
                }
                if(this.status == 200) {
                    content.innerHTML = xhttp.responseText;
                } else if (this.status == 404) {
                    content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
                } else {
                    content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
                }
            }
        };
        xhttp.open("GET", "src/pages/" + page + ".html", true);
        xhttp.send();
    }
});
function formatAMPM(date) {
    var jam = date.getHours();
    var menit = date.getMinutes();
    var ampm = jam >= 24 ? 'AM' : 'PM';
    jam = jam % 12;
    jam = jam ? jam : 12;
    menit = menit < 10 ? '0' + menit : menit;
    var strTime = jam + ':' + menit + ' ' + ampm;
    return strTime;
}

var convertDate = date => {
    const namaBulan = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return `${date.getDate()} ${namaBulan[date.getMonth()]} ${date.getFullYear()} ${formatAMPM(date)}`
}
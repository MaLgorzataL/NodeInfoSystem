var os = require('os');

var setTimeinfo = function () {
    var time = os.uptime; console.log('ilosc sekund'+time);
    var tabTime = [];
    tabTime[0] = Math.floor(time /3600); console.log('ilosc godzin'+tabTime[0]);// ilość godzin 
    tabTime[1] = Math.floor((time - tabTime[0]*3600)/60); // ilość minut po odliczeniu godzin
    tabTime[2] = time - tabTime[0]*3600 - tabTime[1]*60; // ilość sekund po odliczeniu godzin i minut
    console.log('Uptime: ~', (time / 60).toFixed(0), 'min');
    console.log('Uptime: ~',tabTime[0],'godz.' ,tabTime[1] , 'minut', tabTime[1], 'sekund');
 }
exports.changeTimeinfo = setTimeinfo;

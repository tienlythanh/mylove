var showday = document.querySelector('#day');
var showhour = document.querySelector('#hour');
var showminute = document.querySelector('#minute');
var showsecond = document.querySelector('#second');
var pause_btn = document.querySelector('#pause');
var loading = document.querySelector('.loading');

window.onload = ()=>{
    setTimeout(()=>{
        loading.style.display = 'none';
    },1000);
}

var OldDay = new Date("July 10, 2019 13:00:00").getTime();

var x = setInterval(()=>{
    var now = new Date().getTime();
    
    var distance = now - OldDay;

    var day = Math.floor(distance/(24*60*60*1000));
    showday.innerHTML = day;

    var hour = Math.floor((distance%(24*60*60*1000))/(60*60*1000));
    Show(hour, showhour);

    var minute = Math.floor((distance%(60*60*1000))/(60*1000));
    Show(minute, showminute);

    var second = Math.floor((distance%(60*1000))/(1000));
    Show(second, showsecond);
},1000);

function Show(value ,text){
    value <= 9 ? text.innerHTML = '0' + value : text.innerHTML = value;
}
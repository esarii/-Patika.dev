let userName = prompt("Please enter your name");

let names = document.getElementById("myName");

names.innerHTML = userName;

function showTime(){

    let dateTimeNow = new Date();
    let hours = dateTimeNow.getHours();
    let minutes = dateTimeNow.getMinutes();
    let seconds = dateTimeNow.getSeconds();

    let dayOfWeek = dateTimeNow.getDay();
    let weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let dayOfWeekText = weekdays[dayOfWeek];

    let clock = document.getElementById("myClock");
    
    clock.innerHTML = `${hours}:${minutes}:${seconds} ${dayOfWeekText}`;

}

setInterval(showTime, 1000);

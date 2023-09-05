//Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!


const eventDate = new Date("Sep 6, 2023 09:30:00").getTime();


let x = setInterval(function() {

    let nowTime = new Date().getTime();
    
    const countDown = eventDate - nowTime;
    let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    
    document.querySelector("div").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";
    
    if (countDown < 0) {
        clearInterval(x);
        document.querySelector("div").innerHTML = "è ora di correggere";
    }
}, 1000);


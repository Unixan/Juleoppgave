function calendarView() {
  let html = "";
  html += generateDoors();
  model.site.innerHTML = html;
}

function taskView(currentDay){
    if(!checkDate(currentDay)){
        alert("Det er for tidlig for denne luken")
      calendarView()
      return
    }
    let html = 
    model.days[currentDay-1].taskDescription 
    + "<br>" 
    + model.days[currentDay-1].task 
    + "<br>"
    + `<input type='text' onkeydown="if (event.code === 'Enter') submitAnswer(this.value, ${currentDay-1})"> <br>`
    + "<p>Skriv inn løsningsforslag i inputfelt og trykk 'enter' for å svare</p>" 
    + `<button onclick="calendarView()">Tilbake</button>`;
    if (model.days[currentDay-1].correct) html += "<p>Riktig!</p>"
    else html += "<p>Du har ikke svart riktig enda </p>"
    model.site.innerHTML = html;
}

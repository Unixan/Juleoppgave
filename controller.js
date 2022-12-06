function generateDoors() {
  let doors = "";
  let doorClass = "";
  let calendar = "";
  for (let i = 0; i < model.days.length; i++) {
    let doorRandom = model.door[i];
    doorClass = whatBackground(doorRandom);
    doors += `
        <div class="${doorClass} door" onclick="taskView(${doorRandom})">${doorRandom}</div>
    `;
  }
  calendar = `<div class="calendar">` + doors + `</div>`;
  return calendar;
}
function submitAnswer(userInput, dayToCheck) {
  console.log(model.days, userInput);
  if (userInput == model.days[dayToCheck].answer) {
    model.days[dayToCheck].correct = true;
  }
  taskView(dayToCheck + 1);
}

function checkDate(doorDate) {
  todaysDate = new Date();
  day = String(todaysDate.getDate()).padStart(2, "0");
  month = String(todaysDate.getMonth() + 1).padStart(2, "0");
  legalDate = false;
  if (month != "12") {
    legalDate = false;
    return legalDate;
  }
  if (day >= doorDate) {
    legalDate = true;
    return legalDate;
  } else if (day < doorDate) {
    legalDate = false;
    return legalDate;
  }
}

const whatBackground = (date) => {
  let convertToFuckyVucky = date - 1;
  if (checkDate(date)) {
    if (model.days[convertToFuckyVucky].correct) return "background-solved";
    return "background-un-solved";
  }
  return "background-not-available";
};

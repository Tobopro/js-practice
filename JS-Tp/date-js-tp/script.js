const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
];

let date = Date.now();
date = new Date(date);


function getDayWeek() {
    const dateWeek = date.getDay();
    return dateWeek;
}

const currentDay = getDayWeek();
console.log(currentDay, days[currentDay])

//2eme

let dateFormat = date.toLocaleDateString("fr-FR");
dateFormat = dateFormat.replaceAll('/', '-');
console.log(dateFormat)

//3eme

const date1 = new Date("2022-02-01");
const date2 = new Date("2022-02-02");
let secondDate1 = date1.getTime();
let secondDate2 = date2.getTime();
secondDate1 = ((((secondDate1 / 60) / 60) / 60) / 24)
secondDate2 = ((((secondDate2 / 60) / 60) / 60) / 24)

function calculateSpace(secondDate1, secondDate2) {
    if (secondDate1 > secondDate2) {
        spaceTime = (secondDate1 - secondDate2) / 24;
    } else {
        spaceTime = (secondDate2 - secondDate1) / 24;
    }
    console.log(spaceTime);

}
calculateSpace(secondDate1, secondDate2);




//4
date = Date.now();
date = new Date(date);
console.log(date);
let yearNow = date.getFullYear();
console.log(date);
let birthDate = new Date('20:12:2023')


function calculateBirthday(birthdate, nbyears) {

    let yearOfBirthDate = birthDate.getFullYear();
    let dayOf = birthDate.getDay();
    let monthOf = birthDate.getMonth();
    let result = yearOfBirthDate + nbyears;
    let resulteDate = dayOf + monthOf + result;
    console.log(resulteDate);
    return resulteDate;

}

calculateBirthday(birthDate, 5);
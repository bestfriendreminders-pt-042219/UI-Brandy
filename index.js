//header class
const siteContent = {
    "nav": {
        "nav-item-1": "Home",
        "nav-item-2": "About",
        //"img-src": "img/logo.png"
    },
    "title": {
        "h1": "Better Friends Reminders",
        "p1-content": "Let this be the last time you forget!",
        "button": "Login",
      //"img-src": "img/header-img.png"
    },
    "main-content": {
        "birthdays-h4":"Birthdays",
        "birthdays-content": "How many Birthdays do we forget on a daily basis? How many times do we try and remember things and just simply can't? How many feelings have you hurt by forgetting to call a loved one on the day they entered life?",
        "anniversary-h4":"Anniversaries",
        "anniversary-content": "OH NO. Looks whose sleeping on the couch...all because of forgetting an anniversary. How are you supposed to remember the first time you guys shared an ice cream? Who remembers that? Well not to worry we have a reminder just for that too!",
      //"middle-img-src": "img/mid-page-accent.jpg",
        "dn-h4":"Date Nights",
        "dn-content": "Need a Date night? Can't function because you just need a break from life? With our reminders you can set aside time for just this. A little bit of fun a little bit of crazy. Don't forget to suprise them a t least once a month!",
        "appointments-h4":"Important Appointments",
        "appointments-content": "Doc just called and it looks like they can't fit you in for another 4 months because you missed the last appointment for your foot fungus. Guess you can't go to the beach with your family this weekend. Guess you can't go to the beach with your fami ",
        "se-h4":"Social Events",
        "se-content": "It's PARTAY time! No but seriously how many parties have you missed this month alone because your plate is just too full?? Time to live it up and let live and just enjoy a couple drinks. Dont forget a DD.",
        "vacations-h4":"Family Vacations",
        "vacations-content": "Whose ready to go to Spain?? With this APP you will just never forget. We provide daily reminders and even a customized minutely reminders just for vacays!! So that you don't forget why you can't beat up that annoying co-worker.",
    },
    "footer": {
        "copyright" : "Copyright Better Friend Reminders"
    },
};
//Header AREA
let varH1 = document.getElementsByTagName('h1')[0];
varH1.innerText = siteContent['title']['h1'];

let p1 = document.getElementsByTagName('p')[0];
p1.innerText = siteContent['title']['p1-content'];
//Button Area
let varButton = document.getElementsByTagName('button')[0];
varButton.innerText = siteContent['title']['button'];
//NAV AREA
let nav = document.getElementsByTagName('a')[0];
nav.innerText = siteContent['nav']['nav-item-1'];
nav.style.color = '#532516';

let navii = document.getElementsByTagName('a')[1];
navii.innerText = siteContent['nav']['nav-item-2'];
navii.style.color = '#532516';


//main content

let bDays = document.getElementsByTagName('h4')[0];
bDays.innerText = siteContent['main-content']['birthdays-h4'];

let bdContent = document.getElementsByTagName('p')[1];
bdContent.innerText = siteContent['main-content']['birthdays-content']

let ann = document.getElementsByTagName('h4')[1];
ann.innerText = siteContent['main-content']['anniversary-h4'];

let aContent = document.getElementsByTagName('p')[2];
aContent.innerText = siteContent['main-content']['anniversary-content'];

let dateNight = document.getElementsByTagName('h4')[2];
dateNight.innerText = siteContent['main-content']['dn-h4'];

let dnContent = document.getElementsByTagName('p')[3];
dnContent.innerText = siteContent['main-content']['dn-content'];

let appt = document.getElementsByTagName('h4')[3];
appt.innerText = siteContent['main-content']['appointments-h4'];

let apptContent = document.getElementsByTagName('p')[4];
apptContent.innerText = siteContent['main-content']['appointments-content'];

let sEvents = document.getElementsByTagName('h4')[4];
sEvents.innerText = siteContent['main-content']['se-h4'];

let seContent = document.getElementsByTagName('p')[5];
seContent.innerText = siteContent['main-content']['se-content'];

let vacay = document.getElementsByTagName('h4')[5];
vacay.innerText = siteContent['main-content']['vacations-h4'];

let vContent = document.getElementsByTagName('p')[6];
vContent.innerText = siteContent['main-content']['vacations-content'];

//footer class
let CR = document.getElementsByTagName('p')[7];
CR.innerText = siteContent['footer']['copyright'];

// //about pages
// const aboutContent = {
//     "nav": {
//         "nav-item-3": "Home",
//         "nav-item-4": "About",
//         //"img-src": "img/logo.png"
//     },
//     "about-title": {
//         "a1": "Better Friends Reminders",
//         "p2-content": "Meet the Designers!",
//       //"img-src": "img/header-img.png"
//     },
//     "about-main": {
//         "robertUI-h4":"Robert Kulp",
//         "rUI-content": "The most innovative UI on the team",
//         "gregFE-h4":"Anniversaries",
//         "gFE-content": "FRONT END MASTERMIND.",
//       //"middle-img-src": "img/mid-page-accent.jpg",
//         "bFE-h4":"Date Nights",
//         "bFE-content": "LOVES REACT.",
//         "lBE-h4":"Important Appointments",
//         "lBE-content": "The BOSS WOMAN",
//     },
//     "footer": {
//         "copyright" : "Copyright Better Friend Reminders"
//     },
// }

// let aH1 = document.getElementsByTagName('h1')[0];
// aH1.innerText = aboutContent['about-title']['a1'];

// //ABOUT JS - nav BAR
// let naviii = document.getElementsByTagName('a')[0];
// naviii.innerText = aboutContent['nav']['nav-item-3'];
// naviii.style.color = '#532516';

// let naviv = document.getElementsByTagName('a')[1];
// naviv.innerText = aboutContent['nav']['nav-item-4'];
// naviv.style.color = '#532516';

// //ABOUT CONTENT

// let robUI = document.getElementsByTagName('h4')[0];
// robUI.innerText = aboutContent['about-main']['robertUI-h4'];

// let robContent = document.getElementsByTagName('p')[0];
// robContent.innerText = aboutContent['about-main']['rUI-content']

// let gFE = document.getElementsByTagName('h4')[1];
// gFE.innerText = aboutContent['about-main']['gregFE-h4'];

// let gContent = document.getElementsByTagName('p')[1];
// gContent.innerText = aboutContent['about-main']['gFE-content'];

// let bFE = document.getElementsByTagName('h4')[2];
// bFE.innerText = aboutContent['about-main']['bFE-h4'];

// let bContent = document.getElementsByTagName('p')[2];
// bContent.innerText = aboutContent['about-main']['bFE-content'];

// let leila = document.getElementsByTagName('h4')[3];
// leila.innerText = aboutContent['about-main']['lBE-h4'];

// let lContent = document.getElementsByTagName('p')[3];
// lContent.innerText = aboutContent['about-main']['lBE-content'];
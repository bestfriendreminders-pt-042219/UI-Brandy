//header class
const siteContent = {
    "nav": {
        "nav-item-1": "Home",
        "nav-item-2": "About",
        //"img-src": "img/logo.png"
    },
    "title": {
        "h1": "Better Friends Reminders",
        "button": "Login",
      //"img-src": "img/header-img.png"
    },
    "main-content": {
        "birthdays-h4":"Birthdays",
        "birthdays-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "anniversary-h4":"Anniversaries",
        "anniversary-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      //"middle-img-src": "img/mid-page-accent.jpg",
        "dn-h4":"Date Nights",
        "dn-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "appointments-h4":"Important Appointments",
        "appointments-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "se-h4":"Social Events",
        "se-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vacations-h4":"Family Vacations",
        "vacations-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "footer": {
        "copyright" : "Copyright Better Friend Reminders"
    },
};
//Header AREA
let varH1 = document.getElementsByTagName('h1')[0];
varH1.innerText = siteContent['title']['h1'];
//Button Area
let varButton = document.getElementsByTagName('button')[0];
varButton.innerText = siteContent['title']['button'];
//NAV AREA
let nav = document.getElementsByTagName('a')[0];
nav.innerText = siteContent['nav']['nav-item-1'];
nav.style.color = 'green';

let navii = document.getElementsByTagName('a')[1];
navii.innerText = siteContent['nav']['nav-item-2'];
navii.style.color = 'green';

//main content

let bDays = document.getElementsByTagName('h4')[0];
bDays.innerText = siteContent['main-content']['birthdays-h4'];

let bdContent = document.getElementsByTagName('p')[0];
bdContent.innerText = siteContent['main-content']['birthdays-content']

let ann = document.getElementsByTagName('h4')[1];
ann.innerText = siteContent['main-content']['anniversary-h4'];

let aContent = document.getElementsByTagName('p')[1];
aContent.innerText = siteContent['main-content']['anniversary-content'];

let dateNight = document.getElementsByTagName('h4')[2];
dateNight.innerText = siteContent['main-content']['dn-h4'];

let dnContent = document.getElementsByTagName('p')[2];
dnContent.innerText = siteContent['main-content']['dn-content'];

let appt = document.getElementsByTagName('h4')[3];
appt.innerText = siteContent['main-content']['appointments-h4'];

let apptContent = document.getElementsByTagName('p')[3];
apptContent.innerText = siteContent['main-content']['appointments-content'];

let sEvents = document.getElementsByTagName('h4')[4];
sEvents.innerText = siteContent['main-content']['se-h4'];

let seContent = document.getElementsByTagName('p')[4];
seContent.innerText = siteContent['main-content']['se-content'];

let vacay = document.getElementsByTagName('h4')[5];
vacay.innerText = siteContent['main-content']['vacations-h4'];

let vContent = document.getElementsByTagName('p')[5];
vContent.innerText = siteContent['main-content']['vacations-content'];

//footer class
let CR = document.getElementsByTagName('p')[6];
CR.innerText = siteContent['footer']['copyright'];

//about pages
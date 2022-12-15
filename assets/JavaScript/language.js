//The use of an api is to much in this case, also, i don't see the point of API's. 
let skills = document.getElementById('skills');
let languages = document.getElementById('languagesISpeak');
let dutch = document.getElementById('dutch');
let english = document.getElementById('english');
let norwegian = document.getElementById('norwegian');
let myLocation = document.getElementById('location');
let Personal = document.getElementById('Personal');
let Socials = document.getElementById('Socials');

let path = 'assets/textfiles/aboutme.html';

function ShowTextFromFile() {
    fetch(path)
        .then(response => response.text())
        .then(text => document.getElementById('contentAboutMe').innerHTML = text)
}

ShowTextFromFile(path);
function ToNorsk() {
    skills.innerHTML = "mine ferdigheter:";
    languages.innerHTML = "språk jeg snakker:";
    dutch.innerHTML = "Nederlansk";
    english.innerHTML = "Engelsk";
    norwegian.innerHTML = "Norsk (læring)";
    myLocation.innerHTML = "Nederland";
    Personal.innerHTML = "personlig";
    Socials.innerHTML = "sosiale medier";

    path = 'assets/textfiles/ommeg.html';
    ShowTextFromFile(path);
}

function ToDutch() {
    skills.innerHTML = "Mijn vaardigheden:";
    languages.innerHTML = "Talen die ik spreek:";
    dutch.innerHTML = "Nederlands";
    english.innerHTML = "Engels";
    norwegian.innerHTML = "Noors (Aan het leren)";
    myLocation.innerHTML = "Nederland";
    Personal.innerHTML = "Persoonlijk";
    Socials.innerHTML = "Sociaale media";

    path = 'assets/textfiles/overmij.html';
    ShowTextFromFile(path);
}

function ToEnglish() {
    skills.innerHTML = "Skills:";
    languages.innerHTML = "Languages i speak:";
    dutch.innerHTML = "Dutch";
    english.innerHTML = "English";
    norwegian.innerHTML = "Norwegian (Learning)";
    myLocation.innerHTML = "The Netherlands";
    Personal.innerHTML = "Personal";
    Socials.innerHTML = "Socials";

    path = 'assets/textfiles/aboutme.html';
    ShowTextFromFile(path);
}
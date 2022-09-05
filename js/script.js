//Connect to mySQL for database to keep and generate ideas
const category=["Artificial Intelligence", "Esport", "Automotive", "Architecture", "Wholesale", "Retail", "Blockchain", "Virtual Reality", "3D Printing", "Stock Market"];
const feature =["Geolocation", "Augmented Reality", "Building Information Modelling", "Eco-friendliness", "Immersive interface", "Images", "Live Chat", "Knowledge Base or FAQ", "subscriptions", "Facial Recognition", "Blog", ];
const userType=["Gamers", "Farmers", "Corporate Employees", "Students", "Architects", "Entrepreneurs", "retail", "Beginners", "Celebrities", "Restaurant Owners", "Athlete", "Dentist", "Barbers", "Runners", "Shoppers"];


const getRandomNumber = (max) =>
Math.floor(Math.random() * max);

const getCategory = () =>
`${category[getRandomNumber(category.length)]}`;

const getFeature = () =>
`${feature[getRandomNumber(feature.length)]}`;

const getUserType = () =>
`${userType[getRandomNumber(userType.length)]}`;


const setCategory= () => {
document.getElementById('getACategory').innerText = getCategory();
}
const setFeature= () => {
document.getElementById('getAFeature').innerText = getFeature();
}
const setUserType= () => {
document.getElementById('getAUserType').innerText = getUserType();
}


document.getElementById('generatorCategory').addEventListener('click', setCategory);
document.getElementById('generatorFeature').addEventListener('click', setFeature);
document.getElementById('generatorUserType').addEventListener('click', setUserType);


//Card flip

/* const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
}); */

function playCards(){

function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];
    
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
    }

    return cards;
}

var myDeck = new deck();
console.log(myDeck);

window.onload = function() {

for(var i=0; i < myDeck.length; i++){
    div = document.createElement('div');
    div.className = 'card';

    if(myDeck[i].suit == 'Diamonds'){
        var ascii_char = '♦';
    } else {
        var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
    }

    div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
    document.body.appendChild(div);
}

}
function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

myDeck = shuffle(myDeck);

}
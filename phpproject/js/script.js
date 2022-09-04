//Connect to mySQL for database to keep and generate ideas
/* const projectIdeas=["robot", "Esport", "demo", "automotive", "Architecture", "Wholesale", "retail"];


const getRandomNumber = (max) =>
Math.floor(Math.random() * max);

const getRandomName = () =>
`${projectIdeas[getRandomNumber(projectIdeas.length)]}`;


const setRandomProject= () => {
document.getElementById('getARandomName').innerText = getRandomName();
}
document.getElementById('generator').addEventListener('click', setRandomProject);

setRandomProject();
 */

//Card flip

const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});
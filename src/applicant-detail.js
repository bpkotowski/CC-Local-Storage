
// create json variable from local storage and return item back to js object

const json = window.localStorage.getItem('applicant'); //1

// console.log('JSON', json); //2

const hydrate = JSON.parse(json);//4

// console.log('Js Object', hydrate);//5

const tvShowNode = document.getElementById('tv-show'); //6
const abilityNode = document.getElementById('ability');//7
const lastNameNode = document.getElementById('last-name');//8

tvShowNode.textContent = hydrate.tvShow;//9
abilityNode.textContent = hydrate.ability;//10
lastNameNode.textContent = hydrate.lastName;//11



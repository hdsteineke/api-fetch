// import functions
import { getPokedex } from './fetch-utils.js';
// grab DOM elements
const template = document.querySelector('#template');
const selector = document.querySelector('#api');
const list = document.querySelector('#list');
loadPokedex();

async function loadPokedex() {
    const pokedex = await getPokedex();
    list.classList.add('pokemon');

    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h6');
        
        name.textContent = 'Name: ' + pokemon.pokemon;

        type.textContent = 'Type: ' + pokemon.type;
        image.src = pokemon.url_image;
        image.alt = pokemon.pokedex;

        list.appendChild(clone);
    }
}


// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

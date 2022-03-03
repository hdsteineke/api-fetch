export async function getPokedex() {
    let url='https://pokedex-alchemy.herokuapp.com/api/pokedex';

    const resp = await fetch(url)
    const json = await response.json();
    return json.results;
}

export async function getStarWarsPeople() {
    let url = 'https://swapi.dev/api/planets';

    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;


}
import { charactersAdapter } from "../adapters/characterAdapter";

async function getCharacters() {
  try {
    const response = await fetch("https://dragonball-api.com/api/characters");
    const data = await response.json();
    
    const charactersArray = data.items
    const adapted = charactersAdapter(charactersArray);
    return adapted;
  } catch (error) {
    console.error(error);
    return [];
  }
}


export default getCharacters;

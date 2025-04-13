import { Character } from "../adapters/characterAdapter";
import getCharacters from "../services/getCharacters";
import { getPlanetForCharacter } from "../services/characterPlanetMap";
import "./planetPopup";

class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    async render() {
        if (this.shadowRoot) {
            const characters: Character[] = await getCharacters();
            console.log(characters);

            this.shadowRoot.innerHTML = `
            <style>
                .card {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    justify-content: center;
                }
                .card-item {
                    width: 350px;
                    height: 450px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    padding: 10px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .card-item img {
                    height: 200px;
                    object-fit: cover;
                    border-radius: 5px;
                }
                .card-item h2 {
                    margin: 10px 0;
                    font-size: 16px;
                    text-align: center;
                }
                .card-item p {
                    font-size: 18px;
                    text-align: center;
                    overflow: hidden;
                }
                .card-item button {
                    margin-top: 10px;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                }
                .card-item button:hover {
                    background-color: #000;
                    color: #fff;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
            </style>
            <div class="card">
                ${characters.map(character => `
                    <div class="card-item">
                        <img src="${character.image}" alt="${character.name}">
                        <h1>${character.name}</h1>
                        <p>Raza: ${character.race}</p>
                        <p>Afiliación: ${character.affiliation}</p>
                        <button class="planet-btn" data-character="${character.name}">Ver planeta</button>
                    </div>
                `).join('')}
            </div>
            `;

            // Add event listeners to all planet buttons
            const planetButtons = this.shadowRoot.querySelectorAll('.planet-btn');
            planetButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const characterName = (e.target as HTMLElement).getAttribute('data-character') || '';
                    const planetName = getPlanetForCharacter(characterName);
                    
                    // Create the planet popup
                    const planetPopup = document.createElement('planet-popup');
                    planetPopup.setAttribute('data-planet', planetName);
                    document.body.appendChild(planetPopup);
                });
            });
        }
    }
}

export default Card;
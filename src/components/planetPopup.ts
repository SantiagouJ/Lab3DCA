import { Planet } from "../adapters/planet";
import getPlanets from "../services/getPlanets";

class PlanetPopup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        if (this.hasAttribute('data-planet')) {
            this.render();
        }
    }

    static get observedAttributes() {
        return ['data-planet'];
    }

    attributeChangedCallback() {
        if (this.shadowRoot) {
            this.render();
        }
    }

    async render() {
        if (this.shadowRoot) {
            const planetName = this.getAttribute('data-planet') || '';
            const planets: Planet[] = await getPlanets();
            const planet = planets.find(p => p.name === planetName);

            if (!planet) {
                this.shadowRoot.innerHTML = `
                <div class="planet-not-found">
                    <p>Planeta no encontrado</p>
                </div>`;
                return;
            }

            this.shadowRoot.innerHTML = `
            <style>
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .planet-popup {
                    background-color: white;
                    width: 80%;
                    max-width: 600px;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    position: relative;
                }
                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background-color: #f44336;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    font-size: 16px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .planet-popup img {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                }
                .planet-popup h2 {
                    font-size: 24px;
                    margin: 15px;
                    text-align: center;
                }
                .planet-popup p {
                    padding: 0 20px 20px;
                    line-height: 1.5;
                }
               
            </style>
            <div class="overlay">
                <div class="planet-popup">
                    <button class="close-btn">×</button>
                    <img src="${planet.image}" alt="${planet.name}">
                    <h2>${planet.name}</h2>
                    <p>${planet.description}</p>
                </div>
            </div>
            `;

            const closeBtn = this.shadowRoot.querySelector('.close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.remove();
                });
            }

            // Close popup when clicking outside
            const overlay = this.shadowRoot.querySelector('.overlay');
            if (overlay) {
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        this.remove();
                    }
                });
            }
        }
    }
}

customElements.define('planet-popup', PlanetPopup);
export default PlanetPopup; 
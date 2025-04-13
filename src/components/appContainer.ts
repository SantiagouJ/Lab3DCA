class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
                .app-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f5f7fa;
                    border-radius: 12px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                }
                h1 {
                    font-size: 3.5rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                    color: #ff5722;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                    letter-spacing: 2px;
                    text-align: center;
                }
                h2 {
                    font-size: 2rem;
                    margin-bottom: 30px;
                    color: #333;
                    position: relative;
                    padding-bottom: 10px;
                }
                h2::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80px;
                    height: 4px;
                    background-color: #ff9800;
                    border-radius: 2px;
                }
                card-component {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                    width: 100%;
                }
                @media (max-width: 768px) {
                    h1 {
                        font-size: 2.5rem;
                    }
                    h2 {
                        font-size: 1.5rem;
                    }
                }
            </style>
            
            <div class="app-container">
                <h1>Dragon Ball</h1>
                <h2>Personajes</h2>
                <card-component></card-component>
            </div>
            `;
        }
    }
}

export default AppContainer;


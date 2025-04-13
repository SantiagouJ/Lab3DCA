const characterPlanetMap: Record<string, string> = {
    "Goku": "Tierra",
    "Vegeta": "Vegeta",
    "Piccolo": "Namek",
    "Bulma": "Tierra",
    "Freezer": "Freezer No. 79",
    "Zarbon": "Freezer No. 79",
    "Dodoria": "Freezer No. 79",
    "Ginyu": "Freezer No. 79",
    "Celula": "Tierra",
    "Gohan": "Tierra"
};

export const getPlanetForCharacter = (characterName: string): string => {
    return characterPlanetMap[characterName] || "Tierra"; 
};

export default characterPlanetMap; 
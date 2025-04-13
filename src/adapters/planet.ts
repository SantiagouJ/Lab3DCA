export type Planet = {
    name: string;
    description: string;
    image: string;
}

export const planetAdapter = (planet: Planet) => {
    return {
        name: planet.name,
        description: planet.description,
        image: planet.image,
    }
}

export const planetsAdapter = (planets: Planet[]) => {
    return planets.map(planet => planetAdapter(planet));
}
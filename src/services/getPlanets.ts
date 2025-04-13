import { planetsAdapter } from "../adapters/planet";

async function getPlanets() {
    try {
        const response = await fetch("https://dragonball-api.com/api/planets");
        const data = await response.json();

        const planetsArray = data.items
        const adapted = planetsAdapter(planetsArray);
        console.log(adapted);
        return adapted;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default getPlanets;


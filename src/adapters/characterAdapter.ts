export type Character = {
    name: string;
    image: string;
    description: string;
    affiliation: string;
    race: string;
}

export const characterAdapter = (character: Character) => {
    return {
        name: character.name,
        image: character.image,
        description: character.description,
        affiliation: character.affiliation,
        race: character.race,
    }
}

export const charactersAdapter = (characters: Character[]) => {
    return characters.map(character => characterAdapter(character));
}


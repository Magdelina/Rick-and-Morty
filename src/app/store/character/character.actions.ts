import { createAction, props } from "@ngrx/store";
import { Character } from "src/app/models/character";

export const getCharacters = createAction(
    '[Character Page] get characters'
);

export const getCharactersSuccess = createAction(
    '[Character Page] get characters success',
    props<{ characters: Character[] }>()
);

export const getCharactersFail = createAction(
    '[Character Page] get characters fail'
);

export const getCharacter = createAction(
    '[Character Profile] get character',
    props<{ characterId: number }>()
);
export const getCharacterSuccess = createAction(
    '[Character Profile] get character success',
    props<{ character: Character }>()
);

export const getCharacterFail = createAction(
    '[Character Profile] get characters fail'
);







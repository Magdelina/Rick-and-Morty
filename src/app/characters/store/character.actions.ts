import { createAction, props } from "@ngrx/store";
import { characterResponse } from "src/app/Models/characterResponse.model";

export const GET_CHARACTERS = '[character page] get characters';
export const GET_CHARACTERS_SUCCESS = '[character page] get characters success';

export const GET_CHARACTER = '[user-profile] get character';
export const GET_CHARACTER_SUCCESS = '[user-profile] get character success';


export const getCharacters = createAction(GET_CHARACTERS);
export const getCharactersSuccess = createAction(GET_CHARACTERS_SUCCESS,
    props<{ characters: characterResponse[] }>()
);



export const getCharacter = createAction(GET_CHARACTER,
    props<{ Index: string }>()
);
export const getCharacterSuccess = createAction(GET_CHARACTER_SUCCESS,
    props<{ character: characterResponse }>()
);







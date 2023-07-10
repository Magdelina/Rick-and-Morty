import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as characterReducer from './character.reducers';
import { CharacterState } from "./character.reducers";

export const selectCharacterState =
    createFeatureSelector<characterReducer.CharacterState>('characters');


export const getAllCharacters = createSelector(
    selectCharacterState,
    (state: CharacterState) => state.charaterList
);

export const getAllCharactersSorted = createSelector(
    selectCharacterState,
    (state: CharacterState) => {
        return state.charaterList
    }
);

export const getOneCharacter = createSelector(
    selectCharacterState,
    (state: CharacterState) => state.character
);

export const getOneCharacterSorted = createSelector(
    selectCharacterState,
    (state: CharacterState) => {
        return state.character
    }
);




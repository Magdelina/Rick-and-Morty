import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as characterReducer from './character.reducers';
import { CharacterState } from "./character.reducers";
import { Character } from "src/app/models/character";

export const selectCharacterState =
    createFeatureSelector<characterReducer.CharacterState>('characters');

export const selectCharacterList = createSelector(
    selectCharacterState,
    (state: CharacterState) => state.charaterList,
);

export const selectCharacterListSorted = createSelector(
    selectCharacterState,
    (state: CharacterState) => [...state.charaterList].sort(
        (a: Character, b: Character) => a.name > b.name ? 1 : -1),
);

export const selectIsCharacterListLoading = createSelector(
    selectCharacterState,
    (state: CharacterState) => state.isCharacterListLoading,
);

export const selectCharactersListError = createSelector(
    selectCharacterState,
    (state: CharacterState) => state.errorMessage,
);

export const selectCharacter = createSelector(
    selectCharacterState,
    (state: CharacterState) => state.character,
);

export const selectOneCharacter = createSelector(
    selectCharacterState,
    (state: CharacterState) => {
        return state.character
    });

export const selectIsCharacterLoading = createSelector(
    selectCharacterState,
    (state: CharacterState) => state.isCharacterLoading,
);

export const selectCharacterError = createSelector(
    selectCharacterState,
    (state: CharacterState) => state.errorMessage,
);

export const selectIsCharacterLoadingAndHasNoErrors = createSelector(
    selectCharacterState,
    (state: CharacterState) => {
        return !state.isCharacterLoading && !state.errorMessage
    }
);

export const selectCharacterEpisodesSorted = createSelector(
    selectCharacterState,
    (state: CharacterState) => [...state.character.episodes].sort(
        (a,b) => a > b ? 1: -1)
);
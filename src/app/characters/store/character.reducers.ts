import { characterResponse } from "src/app/Models/characterResponse.model";
import * as CharacterActions from './character.actions';
import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";


export interface CharacterState extends EntityState<characterResponse> {
    loading: boolean;
    charaterList: characterResponse[];
    characterId: string;
    character: characterResponse;
    errorMessage: string;
}

export const adapter: EntityAdapter<characterResponse> = createEntityAdapter<characterResponse>
    ({ selectId: (characters) => characters.id });

export const initialState: CharacterState = adapter.getInitialState({
    loading: true,
    charaterList: [],
    characterId: '',
    character: {} as characterResponse,
    errorMessage: ''
});

export const characterReducer = createReducer(
    initialState,
    on(CharacterActions.getCharacters, (state) => {
        return {
            ...state,
            loading: true,
            charaterList: []
        }
    }),
    on(CharacterActions.getCharactersSuccess, (state, { characters }) => {
        return {
            ...state,
            loading: false,
            charaterList: characters
        }
    }),
    on(CharacterActions.getCharacter, (state) => {
        return {
            ...state,
            loading: true,
        }
    }),
    on(CharacterActions.getCharacterSuccess, (state, { character }) => {
        return {
            ...state,
            loading: false,
            character: character
        }
    })
);

export const { selectAll } = adapter.getSelectors();

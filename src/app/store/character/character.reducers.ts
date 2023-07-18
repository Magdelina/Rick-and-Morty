import { Character } from "src/app/models/character";
import * as CharacterActions from './character.actions';
import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface CharacterState extends EntityState<Character> {
    isCharacterListLoading: boolean;
    isCharacterLoading: boolean;
    charaterList: Character[];
    character: Character;
    errorMessage: any;
    isErrorPresent: boolean;
}

export const adapter: EntityAdapter<Character> = createEntityAdapter<Character>
    ({ selectId: (characters) => characters.id });

export const initialState: CharacterState = adapter.getInitialState({
    isCharacterListLoading: true,
    isCharacterLoading: true,
    charaterList: [],
    character: {} as Character,
    errorMessage: null,
    isErrorPresent: false
});

export const characterReducer = createReducer(
    initialState,
    // on(CharacterActions.getCharacters, (state) => ({
    //     ...state,
    //     isCharacterListLoading: true,
    //     charaterList: []
    // })),
    on(CharacterActions.getCharacters, (state) => {
        return {
            ...state,
            isCharacterListLoading: true,
            charaterList: [],
            isErrorPresent: false
        }
    }),
    on(CharacterActions.getCharactersSuccess, (state, { characters }) => {
        return {
            ...state,
            isCharacterListLoading: false,
            charaterList: characters,
            isErrorPresent:false
        }
    }),
    on(CharacterActions.getCharactersFail, (state) => {
        return {
            ...state,
            isCharacterListLoading: false,
            isErrorPresent: true
        }
    }),
    on(CharacterActions.getCharacter, (state, { characterId }) => {
        return {
            ...state,
            isCharacterLoading: true,
            isErrorPresent: false,
            errorMessage: '',
            character: {
                id: characterId
            } as Character
        }
    }),
    on(CharacterActions.getCharacterSuccess, (state, { character }) => {
        return {
            ...state,
            isCharacterLoading: false,
            isErrorPresent: false,
            errorMessage: '',
            character: character
        }
    }),
    on(CharacterActions.getCharacterFail, (state) => {
        return {
            ...state,
            isCharacterLoading: false,
            isErrorPresent: true,
            
        }
    }
    )
);
export const { selectAll } = adapter.getSelectors();

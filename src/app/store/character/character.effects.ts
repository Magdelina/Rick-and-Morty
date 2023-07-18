import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {  catchError, concatMap, map, of } from "rxjs";
import * as CharacterActions from './character.actions';
import { Character } from "src/app/models/character";
import { characterService } from "src/app/services/character.services";

@Injectable()
export class characterEfects {

    constructor(
        private actions$: Actions,
        private characterServices: characterService
    ) { }

    // '[Character Page] get characters'
    getCharacters$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CharacterActions.getCharacters),
            concatMap(() =>
                this.characterServices.getCharacters().pipe(
                    map((characterList: Character[]) => {
                        return CharacterActions.getCharactersSuccess({ characters: characterList })
                    }),
                    catchError((error) => {
                        return of(
                            CharacterActions.getCharactersFail()
                        )
                    }))
            )
        )
    }
    );

    // '[Character Profile] get character'
    getCharacter$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CharacterActions.getCharacter),
            concatMap(({ characterId }) =>
                this.characterServices.getCharacter(characterId).pipe(
                    map((character: Character) => {
                        return CharacterActions.getCharacterSuccess({ character: character })
                    }),
                    catchError((error) => {
                        return of(
                            CharacterActions.getCharacterFail(),
                        )
                    }))
            )
        );
    })

}




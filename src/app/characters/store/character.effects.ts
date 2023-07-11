import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, concatMap, mergeMap } from "rxjs";
import * as CharacterActions from './character.actions';
import { characterService } from "../character.services";
import { characterResponse } from "src/app/Models/characterResponse.model";
import { Store } from "@ngrx/store";
import { spinnerAction } from "src/app/spinner/spinner.actions";

@Injectable()
export class characterEfects {
    constructor(
        private actions$: Actions,
        private characterServices: characterService,
        private readonly store: Store
    ) { }

    getCharacters$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CharacterActions.getCharacters),
            concatMap(action =>
                this.characterServices.getCharacters().pipe(
                    mergeMap(response => {
                        return [
                        spinnerAction({status: false}),
                            CharacterActions.getCharactersSuccess({ characters: response })
                        ];
                    })
                ))
        );
    })

    getCharacter$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CharacterActions.getCharacter),
            concatMap(action =>
                this.characterServices.getCharacter(action.Index).pipe(
                    mergeMap((response: characterResponse) => {
                        return [
                            spinnerAction({ status: false }),
                            CharacterActions.getCharacterSuccess({ character: response })
                        ];
                    })
                ))
        );
    })

}




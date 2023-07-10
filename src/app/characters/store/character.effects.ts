import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, concatMap } from "rxjs";
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
                    map(response => {
                        this.store.dispatch(spinnerAction({ status: false }));
                        return CharacterActions.getCharactersSuccess({ characters: response });
                    })
                ))
        );
    })

    getCharacter$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CharacterActions.getCharacter),
            concatMap(action =>
                this.characterServices.getCharacter(action.Index).pipe(
                    map((response: characterResponse) => {
                        this.store.dispatch(spinnerAction({ status: false }));
                        return CharacterActions.getCharacterSuccess({ character: response });
                    })
                ))
        );
    })

}




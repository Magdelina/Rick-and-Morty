import { createReducer, on } from "@ngrx/store";
import { spinnerAction } from "./spinner.actions";
import { getCharactersSuccess } from "../characters/store/character.actions";

export interface SpinnerState {
    showLoading: boolean;

}

export const initialState: SpinnerState = {
    showLoading: false,
};

const _spinnerReducer = createReducer(initialState,
    on(spinnerAction, (state, action) => {
        return {
            state,
            showLoading: action.status
        };
    }),
    on(getCharactersSuccess, (state, action) => {
        return {
            state,
            showLoading: false
        };
    })
)

export function SpinnerReducer(state, action) {
    return _spinnerReducer(state, action);
}

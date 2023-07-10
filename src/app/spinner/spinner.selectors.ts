import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SpinnerState } from "./spinner.reducers";

export const spinnerState = 'spinner';


const getSpinnerState = createFeatureSelector<SpinnerState>(spinnerState);

export const getLoading = createSelector(getSpinnerState, state => {
    return state.showLoading;
});


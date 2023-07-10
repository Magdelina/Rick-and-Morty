import { createAction, props } from "@ngrx/store";

export const SPINNER_ACTION = '[spinner state] spinner component';

export const spinnerAction = createAction
    (SPINNER_ACTION, props<{ status: boolean }>())


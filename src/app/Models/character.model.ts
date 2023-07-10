import { characterResponse } from "./characterResponse.model";

export interface Character {
    info?: {
        count: number,
        pages: number,
        next: string | null;
        prev: string | null;
    }
    results?: characterResponse[];


}

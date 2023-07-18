import { Character } from "./character";

export interface CharacterInfoResponse {
    info?: {
        count: number,
        pages: number,
        next: string | null;
        prev: string | null;
    }
    results?: Character[];
}

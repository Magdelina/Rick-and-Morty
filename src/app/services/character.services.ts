import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Character } from '../models/character';
import { CharacterInfoResponse } from '../models/characterInfoResponse';

@Injectable({
    providedIn: 'root'
})

export class characterService {
    constructor(private http: HttpClient) { }

    getCharacters(): Observable<Character[]> {
        return this.http.get<CharacterInfoResponse>(
            "https://rickandmortyapi.com/api/character")
            .pipe(
                map((data: CharacterInfoResponse) => {
                    return data?.results as Character[];
                })
            );
    }

    getCharacter(characterId: number): Observable<Character> {
        return this.http.get<Character>(
            `${"https://rickandmortyapi.com/api/character"}/${characterId}`
        );
    }
}


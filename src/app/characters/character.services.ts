import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Character } from '../Models/character.model';
import { characterResponse } from '../Models/characterResponse.model';

@Injectable({
    providedIn: 'root'
})

export class characterService {
    constructor(private http: HttpClient) { }

    getCharacters() {
        return this.http.get<Character>("https://rickandmortyapi.com/api/character")
            .pipe(
                map((data) => {
                    const characters: characterResponse[] = [];

                    return data?.results;
                })
            );
    }

    getCharacter(index: string) {
        return this.http.get<characterResponse>(`${"https://rickandmortyapi.com/api/character"}/${index}`);
    }
}


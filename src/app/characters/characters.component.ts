import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { characterResponse } from '../Models/characterResponse.model';
import { getAllCharactersSorted } from './store/character.selector';
import { getCharacters } from './store/character.actions';
import { Router } from '@angular/router';
import { spinnerAction } from '../spinner/spinner.actions';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: characterResponse[];
  allCharacters$: Observable<characterResponse[]>;
  showLoading: Observable<boolean>;

  constructor(
    private readonly store: Store,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.store.dispatch(spinnerAction({ status: true }));
    this.store.dispatch(getCharacters());
    this.allCharacters$ = this.store.select(getAllCharactersSorted);
    this.store.select(getAllCharactersSorted).subscribe((c) => {
      this.characters = c;
    })
  }

  gettingCharacter(Index: string) {
    this.router.navigateByUrl('/' + Index);
  }
}











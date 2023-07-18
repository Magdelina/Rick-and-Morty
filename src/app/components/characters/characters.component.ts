import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';
import { getCharacters } from '../../store/character/character.actions';
import { Router } from '@angular/router';
import { selectCharacterListSorted, selectCharactersListError, selectIsCharacterListLoading } from 'src/app/store/character/character.selector';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters$: Observable<Character[]>;
  isCharactersLoading$: Observable<boolean>;
  showLoading$: Observable<boolean>;
  isError$: Observable<string>;

  constructor(
    private readonly store: Store,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.store.dispatch(getCharacters());
    this.isCharactersLoading$ = this.store.select(selectIsCharacterListLoading);
    this.characters$ = this.store.select(selectCharacterListSorted);
    this.isError$ = this.store.select(selectCharactersListError);
  }

  gettingCharacter(Index: string) {
    this.router.navigateByUrl('/' + Index);
  }
}











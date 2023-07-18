import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Character } from '../../models/character';
import { getCharacter } from '../../store/character/character.actions';
import { selectCharacterError, selectIsCharacterLoading, selectOneCharacter } from 'src/app/store/character/character.selector';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.css']
})
export class CharacterProfileComponent implements OnInit {

  character$: Observable<Character>;
  character: Character;
  showLoading$: Observable<boolean>;
  isCharacterLoading$: Observable<boolean>;
  isError$: Observable<string>;
  isNoErrorAndLoading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private readonly store: Store,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.cdr.detectChanges();
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.store.dispatch(getCharacter({ characterId: id }))
    }
    this.isCharacterLoading$ = this.store.select(selectIsCharacterLoading);
    this.store.select(selectOneCharacter).subscribe((c) => {
      this.character = c;
    })
    this.isError$ = this.store.select(selectCharacterError);

  }

  isTrue(a: any): void {
    a();
  }

  isFalse(): void { }
}

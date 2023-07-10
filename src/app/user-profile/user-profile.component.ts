import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { characterResponse } from '../Models/characterResponse.model';
import { getOneCharacterSorted } from '../characters/store/character.selector';
import { spinnerAction } from '../spinner/spinner.actions';
import { getCharacter } from '../characters/store/character.actions';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name: string;
  subscription: Subscription;
  character: characterResponse;
  showLoading: Observable<boolean>;
  constructor(private route: ActivatedRoute,
    private readonly store: Store,
    private cdr: ChangeDetectorRef
  ) {
  }
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.store.dispatch(getCharacter({ Index: id }))
    }
    this.store.dispatch(spinnerAction({ status: true }));
    this.cdr.detectChanges();
    this.store.select(getOneCharacterSorted).subscribe((c) => {
      this.character = c;
    })
  }




}




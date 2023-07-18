import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CharactersComponent } from './components/characters/characters.component';
import { AppRoutingModule } from './app-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { characterEfects } from './store/character/character.effects';
import { characterReducer } from './store/character/character.reducers';
import { MapsComponent } from './components/maps/maps.component';
import {CharacterProfileComponent } from './components/character-profile/character-profile.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
     CharactersComponent,
    HeaderComponent,
     MapsComponent,
     SpinnerComponent,
     CharacterProfileComponent,
     ErrorHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzCardModule,
    HttpClientModule,
    StoreModule.forRoot({ characters: characterReducer }),
    EffectsModule.forRoot([characterEfects]),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

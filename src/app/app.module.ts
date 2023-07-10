import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CharactersComponent } from './characters/characters.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MapsComponent } from './user-profile/maps/maps.component';
import { SpinnerComponent } from './spinner/spinner/spinner.component';
import { characterEfects } from './characters/store/character.effects';
import { characterReducer } from './characters/store/character.reducers';
import { SpinnerReducer } from './spinner/spinner.reducers';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    UserProfileComponent,
    HeaderComponent,
    MapsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzCardModule,
    HttpClientModule,
    StoreModule.forRoot({ characters: characterReducer, spinner: SpinnerReducer }),
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

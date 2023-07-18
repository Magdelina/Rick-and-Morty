import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterProfileComponent } from './components/character-profile/character-profile.component'; 

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: ':id', component: CharacterProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

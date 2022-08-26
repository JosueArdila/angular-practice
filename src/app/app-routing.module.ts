import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { MainComponent } from './components/main/main.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'rick-and-morty',
    component: RickAndMortyComponent,
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

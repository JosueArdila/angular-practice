import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CharacterComponent } from './components/character/character.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    CharacterComponent,
    RickAndMortyComponent,
    CharacterListComponent,
    AddCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

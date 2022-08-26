import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})
export class RickAndMortyComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private rickAndMortyService : RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() : void {
    this.rickAndMortyService.getCharacters()
    .subscribe(data => 
      this.characters = data
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  // get only 4 character to show in cards
  private api: string = 'https://rickandmortyapi.com/api/character/1,2,3,50'; 

  constructor(
    private httpClient: HttpClient
  ) { }

  getCharacters() : Observable<Character[]>{
    return this.httpClient.get<Character[]>(this.api);
  }


}




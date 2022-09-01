import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  characters: string[] = [];
  text: string = '';

  constructor(    
  ) { }

  saveCharacter( argument: string ) {    
    
    if (this.characters.length === 8) {
      alert('Is not posible to add more characters, only 8 chararters')
      return;
    }
    this.characters.push(`( ${this.index()} ) => ${argument}`);
    alert('character was aggregated correctly!, the description is ' + argument);
  }

  private index(): number {
    return this.characters.length + 1;
  }
}

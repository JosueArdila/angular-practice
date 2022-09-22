import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  characters: string[] = [];
  text: string = '';

  // practice using ViewChild
  // Tip, the operator ! let us avoid to inicialize the component like the next example
  @ViewChild('txtEnterValue') txtEnterValue !: ElementRef<HTMLInputElement>;  

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

  ingresar() {
    console.log(this.txtEnterValue.nativeElement.value);  
    this.txtEnterValue.nativeElement.value = '';
  }
}

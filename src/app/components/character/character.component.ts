import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters: string[] = [];
  charactersForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFormCharacter();
  }

  createFormCharacter() {
    this.charactersForm = this.formBuilder.group({
      character: [null, [Validators.required]]
    });
  }

  isValidFieldDatosCharacterForm(field: string): boolean {
    return this.isValidFieldOfFormGeneral(this.charactersForm, field);
  }

  isValidFieldOfFormGeneral(form: FormGroup, field: string): boolean {
    return (
      (form.get(field)?.dirty || form.get(field)?.touched) as boolean &&
      form.get(field)?.invalid as boolean
    );
  }

  save() {
    const character: string = this.charactersForm.get('character')?.value;
    
    if (this.characters.length === 8) {
      alert('Is not posible to add more characters, only 8 chararters')
      return;
    }
    this.characters.push('(' + this.index() + ') => ' +  character);
    alert('character was aggregated correctly!, the description is ' + character);
  }

  private index(): number {
    return this.characters.length + 1;
  }
}

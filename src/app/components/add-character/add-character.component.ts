import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  charactersForm: FormGroup;
  // EventEmitter<xxxxx> here is posible to pass any type of argument,  e.g. object or primitive types! 
  @Output('character') character: EventEmitter<string> = new EventEmitter();

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

  organizeCharacter() {
    const character: string = this.charactersForm.get('character')?.value;
    this.character.emit( character );
  }

}

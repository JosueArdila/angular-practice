import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @Input("data") characters: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDeleteIndex: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  onDeleteCharacter(id?: string): void {
    if( !id ) return;
    this.onDeleteIndex.emit(id);
  }




}

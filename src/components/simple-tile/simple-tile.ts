import { TileGameProvider } from './../../providers/tile-game/tile-game';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TileModel } from '../../app/models/tile-model';

/**
 * Generated class for the SimpleTileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'simple-tile',
  templateUrl: 'simple-tile.html'
})
export class SimpleTileComponent {

  @Input() tile: TileModel;
  @Output() tap: EventEmitter<TileModel> = new EventEmitter();

  constructor(public game: TileGameProvider) {
    console.log('Hello SimpleTileComponent Component');
  }

}

import { Injectable } from '@angular/core';
import { TileModel } from '../../app/models/tile-model';

/*
  Generated class for the TileGameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TileGameProvider {

  tiles: TileModel[];

  constructor() {
    console.log('Hello TileGameProvider Provider');
  }

  newGame() {
    this.tiles = [];
    for (let index = 0; index < 25; index++) {
      const tile = new TileModel();
      tile.name = 'T'+index;
      tile.state = 'hidden';
      this.tiles.push(tile);
    }
  }



}

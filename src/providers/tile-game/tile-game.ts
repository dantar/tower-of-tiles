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
    ['sword', 'shield', 'gold bag', 'armour', 'chest', 'orc', 'dragon', 'torch', 'rope', 'troll', 'door']
    .forEach(name => {
      this.tiles.push(TileModel.hiddenTile(name));
      this.tiles.push(TileModel.hiddenTile(name));
    });
    this.shuffle(this.tiles);
  }

  shuffle(vector: any[]) {
    for (let index = 0; index < vector.length; index++) {
      const move = Math.floor(Math.random() * (vector.length - index));
      vector.push(vector[move]);
      vector.splice(move, 1);
    }
  }

}

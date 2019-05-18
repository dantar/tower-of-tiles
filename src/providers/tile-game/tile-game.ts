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
  gameset: string = 'Tarini';

  tilesets: {[id: string]: string[]} = {
    'Avventura': ['sword2.png', 'armor.png', 'shield_semi.png', 'potion3.png', 'helmet2.png', 'tome.png', 
      'document.png', 'axeDouble2.png', 'leather2.png', 'Boots.png', 'bow2.png', 'hammer2.png'],
    'Tarini': ['daniele-01.jpg', 'irene-01.jpg', 'matteo-01.jpg', 'damiano-01.jpg', 'valentina-01.jpg', 'rachele-01.jpg',
      'daniele-02.jpg', 'irene-02.jpg', 'matteo-02.jpg', 'damiano-02.jpg', 'valentina-02.jpg', 'rachele-02.jpg',]
  };


  constructor() {
    console.log('Hello TileGameProvider Provider');
    this.newGame();
  }

  changeSet(setname: string) {
    this.gameset = setname;
  }

  newGame() {
    this.tiles = [];
    this.tilesets[this.gameset].forEach(name => {
      this.tiles.push(TileModel.hiddenTile(this.gameset + '/' + name));
      this.tiles.push(TileModel.hiddenTile(this.gameset + '/' + name));
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

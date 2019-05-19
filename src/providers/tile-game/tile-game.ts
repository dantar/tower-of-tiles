import { Injectable } from '@angular/core';
import { TileModel, TileSetModel } from '../../app/models/tile-model';

/*
  Generated class for the TileGameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TileGameProvider {


  tileset: TileSetModel;
  tiles: TileModel[];

  tilesets: TileSetModel[];


  constructor() {
    console.log('Hello TileGameProvider Provider');
    this.tilesets = [];
    this.tilesets.push({
      name: 'Tarini',
      folder: 'assets/tarini',
      backfilename: 'assets/tarini/back.jpg',
      filenames: [
        'assets/tarini/daniele-01.jpg',
        'assets/tarini/irene-01.jpg',
        'assets/tarini/matteo-01.jpg',
        'assets/tarini/damiano-01.jpg',
        'assets/tarini/valentina-01.jpg',
        'assets/tarini/rachele-01.jpg',
        'assets/tarini/daniele-02.jpg',
        'assets/tarini/irene-02.jpg',
        'assets/tarini/matteo-02.jpg',
        'assets/tarini/damiano-02.jpg',
        'assets/tarini/valentina-02.jpg',
        'assets/tarini/rachele-02.jpg',
      ],
    });
    this.changeSet(this.tilesets[0]);
  //   'Avventura': ['sword2.png', 'armor.png', 'shield_semi.png', 'potion3.png', 'helmet2.png', 'tome.png', 
  //     'document.png', 'axeDouble2.png', 'leather2.png', 'Boots.png', 'bow2.png', 'hammer2.png'],
  //   'Tarini': ['daniele-01.jpg', 'irene-01.jpg', 'matteo-01.jpg', 'damiano-01.jpg', 'valentina-01.jpg', 'rachele-01.jpg',
  //     'daniele-02.jpg', 'irene-02.jpg', 'matteo-02.jpg', 'damiano-02.jpg', 'valentina-02.jpg', 'rachele-02.jpg',]
  //   this.newGame();
  }

  changeSet(set: TileSetModel) {
    this.tileset = set;
    this.newGame();
  }

  newGame() {
    this.tiles = [];
    this.tileset.filenames.forEach(filename => {
      this.tiles.push(TileModel.hiddenTile(filename));
      this.tiles.push(TileModel.hiddenTile(filename));
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

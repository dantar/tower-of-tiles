import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TileModel } from '../../app/models/tile-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tiles: TileModel[];

  constructor(public navCtrl: NavController) {
    this.tiles = [];
    for (let index = 0; index < 25; index++) {
      const tile = new TileModel();
      tile.name = 'T'+index;
      tile.state = 'hidden';
      this.tiles.push(tile);
    }
  }

  tapTile(tile: TileModel) {
    tile.state = 'shown';
  }

}

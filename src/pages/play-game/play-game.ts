import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TileModel } from '../../app/models/tile-model';
import { TileGameProvider } from '../../providers/tile-game/tile-game';

/**
 * Generated class for the PlayGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play-game',
  templateUrl: 'play-game.html',
})
export class PlayGamePage {

  tiles: TileModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private game: TileGameProvider) {
    this.tiles = this.game.tiles;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayGamePage');
  }

  tapTile(tile: TileModel) {
    tile.state = 'shown';
  }


}

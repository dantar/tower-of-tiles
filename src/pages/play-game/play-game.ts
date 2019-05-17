import { SettingsProvider } from './../../providers/settings/settings';
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
  first: TileModel = null;
  second: TileModel = null;
  state: 'search-first'|'search-second'|'match-found'|'no-match' = 'search-first';

  constructor(public navCtrl: NavController, public navParams: NavParams, private game: TileGameProvider,
    private settings: SettingsProvider) {
    this.tiles = this.game.tiles;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayGamePage');
  }

  private searchFirst(tile: TileModel) {
    if (tile.state === 'hidden') {
      tile.state = 'shown';
      this.first = tile;
      this.state = 'search-second';
    }
  }

  private searchSecond(tile: TileModel) {
    if (tile.state === 'hidden') {
      tile.state = 'shown';
      this.second = tile;
      if (this.second.name === this.first.name) {
        this.state = 'match-found';
      } else {
        this.state = 'no-match';
      }
    };
  }

  private matchFound(tile: TileModel) {
    if (tile.state==='shown') {
      tile.state = 'gone';
    }
    if (this.first.state === 'gone' && this.second.state === 'gone') {
      this.state = 'search-first';
    }
  }

  private noMatch(tile: TileModel) {
    if (tile.state==='shown') {
      tile.state = 'hidden';
    }
    if (this.first.state === 'hidden' && this.second.state === 'hidden') {
      this.state = 'search-first';
    }
  }

  tapTile(tile: TileModel) {
    switch (this.state) {
      case 'search-first':
        this.searchFirst(tile);
        break;
      case 'search-second':
        this.searchSecond(tile);
        break;
      case 'match-found':
        this.matchFound(tile);
        break;
      case 'no-match':
        this.noMatch(tile);
        break;
    }
  }

  tileRowsOf(howmany: number): TileModel[][] {
    const result = [];
    let index = 0;
    while (index < this.tiles.length) {
      result.push(this.tiles.slice(index, index+howmany));
      index += howmany;
    }
    return result;
  }

}

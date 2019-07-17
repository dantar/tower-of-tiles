import { SoundManagerProvider } from './../../providers/sound-manager/sound-manager';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, private game: TileGameProvider,
    private settings: SettingsProvider, private sound: SoundManagerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayGamePage');
  }

  private filterTiles(state: string): TileModel[] {
    return this.game.tiles.filter(tile => tile.state === state);
  }

  private searchNext(tile: TileModel) {
    if (tile.state === 'hidden') {
      this.sound.play('flip');
      tile.state = 'shown';
      this.game.score += 1;
      if (this.filterTiles('shown').length === 2) {
        const shown = this.filterTiles('shown');
        if (shown.length === shown.filter(t => t.name === tile.name).length) {
          this.game.state = 'match-found';
        } else {
          this.game.state = 'no-match';
        }
      }
    }
  }

  private matchFound(tile: TileModel) {
    if (tile.state==='shown') {
      this.sound.play('match');
      tile.state = 'gone';
    }
    if (this.filterTiles('shown').length == 0) {
      if (this.noMoreTiles()) {
        this.sound.play('applause');
        this.game.state = 'won';
      } else {
        this.game.state = 'search-next';
      }
    }
  }

  private noMoreTiles(): boolean {
    return this.filterTiles('gone').length === this.game.tiles.length;
  }

  private noMatch(tile: TileModel) {
    if (tile.state==='shown') {
      this.sound.play('flip');
      tile.state = 'hidden';
    }
    if (this.filterTiles('shown').length === 0) {
      this.game.state = 'search-next';
    }
  }

  tapTile(tile) {
    const s = this.game.state;
    switch (s) {
      case 'search-next':
        this.searchNext(tile);
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
    while (index < this.game.tiles.length) {
      result.push(this.game.tiles.slice(index, index+howmany));
      index += howmany;
    }
    return result;
  }

}

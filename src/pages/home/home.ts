import { TileGameProvider } from './../../providers/tile-game/tile-game';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public game: TileGameProvider) {
  }

}

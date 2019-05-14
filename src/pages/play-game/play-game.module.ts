import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayGamePage } from './play-game';

@NgModule({
  declarations: [
    PlayGamePage,
  ],
  imports: [
    IonicPageModule.forChild(PlayGamePage),
  ],
})
export class PlayGamePageModule {}

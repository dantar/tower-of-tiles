import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';

/*
  Generated class for the SoundManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SoundManagerProvider {

  enableMusic = true;
  enableSound = true;

  constructor(private nativeAudio: NativeAudio) {
    console.log('Hello SoundManagerProvider Provider');
  }

  init() {
    this.nativeAudio.preloadComplex('pizzicato', 'assets/mp3/pizzicato.mp3', 1, 1, 0).then(
      (event) => {
        console.log('pizzicato preload ok', event);
        this.nativeAudio.loop('pizzicato').then(
          (event) => {
            console.log('pizzicato loop ok', event);
            this.loopMusic();
          },
          (event) => {
            console.log('pizzicato loop error', event);
          }
        );
      }, (event) => {
        console.log('pizzicato preload error', event);
      }
    );
    this.nativeAudio.preloadSimple('applause', 'assets/mp3/applause.mp3').then(
      (event) => {
        console.log('applause preload ok', event);
      }, (event) => {
        console.log('applause preload error', event);
      }
    );
    this.nativeAudio.preloadSimple('flip', 'assets/mp3/flip.mp3').then(
      (event) => {
        console.log('applause preload ok', event);
      }, (event) => {
        console.log('applause preload error', event);
      }
    );
    this.nativeAudio.preloadSimple('match', 'assets/mp3/match.mp3').then(
      (event) => {
        console.log('applause preload ok', event);
      }, (event) => {
        console.log('applause preload error', event);
      }
    );
  }

  loopMusic() {
    if (!this.enableMusic) {
      return;
    }
    this.nativeAudio.loop('pizzicato').then(
      (event) => {
        console.log('pizzicato loop ok', event);
      },
      (event) => {
        console.log('pizzicato loop error', event);
      }
    );
  }

  play(sound: string) {
    this.nativeAudio.play(sound).then(
      (event) => {
        console.log(sound + ' play ok', event);
      },
      (event) => {
        console.log(sound + ' play error', event);
      }
    );
  }

}

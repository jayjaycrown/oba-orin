import { Injectable } from '@angular/core';
import { Music } from '../music-list/music.model';

@Injectable({
  providedIn: 'root'
})
export class MusicserviceService {

  // tslint:disable-next-line: variable-name
  private _music: Music[] = [
    new Music(
      'm1',
      'The Other Side',
      'Ruelle',
      'assets/img/cignifi_app.png',
    ),
    new Music(
      'm2',
      'Save Me',
      'remy Zero',
      'assets/img/preview.png',
    ),
    new Music(
      'm3',
      'Everybody Knows',
      'Sigrid',
      'assets/img/ous_system.png',
    ),
  ];
  constructor() { }
  get music() {
    return [...this._music];
  }
}

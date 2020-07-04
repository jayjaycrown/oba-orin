import { Component, OnInit } from '@angular/core';
import { MusicserviceService } from '../music-list/musicservice.service';
import { Music } from '../music-list/music.model';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.page.html',
  styleUrls: ['./music-list.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class MusicListPage implements OnInit {

  musiclist: Music[];

  constructor(private musicService: MusicserviceService) { }

  ngOnInit() {
    this.musiclist = this.musicService.music;
    console.log(this.musiclist);
  }

}

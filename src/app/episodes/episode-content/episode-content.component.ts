import { Component, OnInit, Input } from '@angular/core';
import { Episodes } from 'src/app/interfaces/episodes';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-episode-content',
  templateUrl: './episode-content.component.html',
  styleUrls: ['./episode-content.component.scss'],
})
export class EpisodeContentComponent implements OnInit {
  @Input() episode: Episodes;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log(this.episode.instagram);
  }
  onDeleteEpisodes(id) {
    return this.dataService.deleteEpisodes(id);
  }
}

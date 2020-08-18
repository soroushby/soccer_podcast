import { Episodes } from './../../interfaces/episodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-episodes',
  templateUrl: './add-episodes.component.html',
  styleUrls: ['./add-episodes.component.scss'],
})
export class AddEpisodesComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  episodeForm: any;
  ngOnInit(): void {
    this.episodeForm = this.fb.group({
      name: [''],
      date: [''],
      topic: [''],
      duration: [''],
      guests: [''],
      soundCloud: [''],
      instagram: [''],
    });
  }
}

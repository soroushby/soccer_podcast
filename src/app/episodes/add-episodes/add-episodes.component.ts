import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-episodes',
  templateUrl: './add-episodes.component.html',
  styleUrls: ['./add-episodes.component.scss'],
})
export class AddEpisodesComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}

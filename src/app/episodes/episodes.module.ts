import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { AddEpisodesComponent } from './add-episodes/add-episodes.component';
import { LoadEpisodesComponent } from './load-episodes/load-episodes.component';


@NgModule({
  declarations: [EpisodesComponent, AddEpisodesComponent, LoadEpisodesComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }

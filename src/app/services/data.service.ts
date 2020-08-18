import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Episodes } from '../interfaces/episodes';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  episodesData: Episodes[];
  constructor(private db: AngularFirestore) {}

  postEpisodes(name, date, topic, duration, guests, soundCloud, instagram) {
    return this.db.collection('episodes').add({
      name: name,
      date: date,
      topic: topic,
      duration: duration,
      guests: guests,
      soundCloud: soundCloud,
      instagram: instagram,
    });
  }
}

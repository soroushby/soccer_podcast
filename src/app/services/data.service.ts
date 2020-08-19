import { Episodes } from './../interfaces/episodes';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  getEpisodes(): Observable<Episodes[]> {
    return this.db
      .collection('episodes')
      .snapshotChanges()
      .pipe(
        map((data) =>
          data.map((data) => {
            return {
              id: data.payload.doc.id,
              ...(data.payload.doc.data() as Episodes),
            };
          })
        )
      );
  }

  deleteEpisodes(id) {
    return this.db.collection('episodes').doc(id).delete();
  }
}
// map((data) =>
//   data.map(
//     (data) =>
//       <Episodes>{
//         id: data.payload.doc.id,
//         ...(data.payload.doc.data() as Episodes),
//       }
//   )
// )

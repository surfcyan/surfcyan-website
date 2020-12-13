import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  constructor(private db: AngularFireDatabase) { }

  postContactUs(obj) {
    return this.db.object('contact-us/'+this.db.createPushId()).set(obj)
  }

}

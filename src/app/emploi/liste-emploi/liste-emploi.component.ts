import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-liste-emploi',
  templateUrl: './liste-emploi.component.html',
  styleUrls: ['./liste-emploi.component.css']
})
export class ListeEmploiComponent implements OnInit {
	
  offres_db: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.offres_db = db.collection('emplois').valueChanges();
  }

  ngOnInit() {
  }

}

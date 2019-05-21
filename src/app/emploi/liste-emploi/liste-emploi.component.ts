import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-liste-emploi',
  templateUrl: './liste-emploi.component.html',
  styleUrls: ['./liste-emploi.component.css']
})
export class ListeEmploiComponent implements OnInit {
	
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('emplois').valueChanges();
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/emploi/offre.service';
import { Offre } from 'src/app/emploi/offre.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-liste-emploi',
  templateUrl: './liste-emploi.component.html',
  styleUrls: ['./liste-emploi.component.css']
})
export class ListeEmploiComponent implements OnInit {
	
  /*offres_db: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.offres_db = db.collection('emplois').valueChanges();
  }*/

  offres: Offre[];
  constructor(private offreService: OffreService) { }
  ngOnInit() {
	
	this.offreService.getOffres().subscribe(data => {
	      this.offres = data.map(e => {
		return {
		  id: e.payload.doc.id,
		  ...e.payload.doc.data()
		} as Offre;
	      })
	    });
	  }

	delete(id: string) {
	    this.offreService.deleteOffre(id);
	  }

}

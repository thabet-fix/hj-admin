import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Offre } from 'src/app/emploi/offre.model';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private firestore: AngularFirestore) { }

	getOffres() {
	    return this.firestore.collection('emplois').snapshotChanges();
	  }

	createOffre(offre: Offre){
	    return this.firestore.collection('emplois').add(offre);
	}

	updateOffre(offre: Offre){
	    //delete offre.id;
	    this.firestore.doc('emplois/' + offre.id).update(offre);
	}

	deleteOffre(offreId: string){
		    this.firestore.doc('emplois/' + offreId).delete();
		}


}

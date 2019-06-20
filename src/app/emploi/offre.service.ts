import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Offre } from 'src/app/emploi/offre.model';

@Injectable({
  providedIn: 'root'
})
export class OffreService {


  constructor(private firestore: AngularFirestore) { }

	getOffres() {
	    return this.firestore.collection('emplois').snapshotChanges();
	  }

	getOffreId(offreId: string) {
		/*
		let offre1;
		this.firestore.doc('emplois/'+ offreId).ref.get().then(
		(documentSnapshot) => {
	  		offre1 = documentSnapshot.data();
			
		});
		//return (offre1);
		*/
		
	}


	createOffre(offre: Offre){
	    return this.firestore.collection('emplois').add(offre);
	}

	updateOffre(offre: Offre){
	var offreId = offre.id
	    delete offre.id;
	    this.firestore.doc('emplois/' + offreId).update(offre);
	}

	deleteOffre(offreId: string){
		    this.firestore.doc('emplois/' + offreId).delete();
	}


}

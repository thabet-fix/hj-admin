import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Profil } from './profil.model';


@Injectable()
export class ProfilService{
    
    constructor(private afs: AngularFirestore) {
    }

    tmpIdProfil: any;
    docProfilId: string ="9mQqf5rqAOapKkdb0D3o";
    profilsLocalTmp : Profil[];
    profilsChanged = new Subject<Profil[]>();
    profilLocalTmp : Profil[];
    profilChanged = new Subject<Profil[]>();

    getProfil(){
        return this.afs.collection<any>('utilisateurs', ref => ref.where('id', '==', this.docProfilId))
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ 
                    $key: action.payload.doc.id, 
                    ...action.payload.doc.data() 
                }));
            })
            .subscribe(
                (response: Profil[]) => {
                    this.profilLocalTmp = response;
                    this.profilChanged.next([...this.profilLocalTmp]);
                }
            );
            
    }

    getProfilDev(){
        return this.afs.collection<any>('utilisateurs', ref => ref.where('id', '==', 'QR7DZXIdfsdgdhsdfgsdfhfAt22'))
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ 
                    $key: action.payload.doc.id, 
                    ...action.payload.doc.data() 
                }));
            })
            .subscribe(
                (response: Profil[]) => {
                    this.profilLocalTmp = response;
                    this.profilChanged.next([...this.profilLocalTmp]);
                }
            );
            
    }

    setDocProfilId(id: any){
        this.docProfilId = id; // On n'utilise plus l'id d'authentification, on utilise le key de document profil
    }

    getDocProfilId(){
        return this.docProfilId; // On n'utilise plus l'id d'authentification, on utilise le key de document profil
    }

    creerProfil(nom_profil:any, email: any, id: any){
        const listeProfils = this.afs.collection<any>('utilisateurs');
        listeProfils.add({nom_profil: nom_profil, email: email, id: id });
        this.tmpIdProfil = id; // On retourne l'id utilisée par l'autentification pour l'utiliser après pour getProfil()
    }

    connecterProfil(id: string){
        this.tmpIdProfil = id; // On retourne l'id utilisée par l'autentification pour l'utiliser après pour getProfil()
    }

    modifierProfil(profil: Profil){
        return this.afs.collection('utilisateurs').doc(this.getDocProfilId()).update(profil)
    }

}
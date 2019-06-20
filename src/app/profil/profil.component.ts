import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfilService } from './profil.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Profil } from './profil.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor( private profilService: ProfilService, private storage: AngularFireStorage) { }

  @ViewChild('formProfil') formProfil: NgForm;
  profil: Profil;
  tmpProfil: Profil;
  etatChange: boolean = false;

  ngOnInit() {
    this.profilService.profilChanged.subscribe(
      datas => {
        this.profil = datas[0];
        this.tmpProfil = datas[0];
      }
    );
    this.profilService.getProfilDev();
  }

  onChangeInput(event){
    this.etatChange = true;
  }

  modifierProfil(){
    console.log(this.profil);
    this.profilService.modifierProfil(this.profil);
  }

}

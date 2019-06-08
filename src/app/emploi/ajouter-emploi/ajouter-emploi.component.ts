import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/emploi/offre.service';
import { Offre } from 'src/app/emploi/offre.model';

@Component({
  selector: 'app-ajouter-emploi',
  templateUrl: './ajouter-emploi.component.html',
  styleUrls: ['./ajouter-emploi.component.css']
})
export class AjouterEmploiComponent implements OnInit {

  constructor(private offreService: OffreService) { }

  ngOnInit() {
  }

		submitOffre (form){
	        const formValue = form.value;
		
		const newOffre: Offre = { 
			titre: formValue['offre-titre'], 
			secteur: formValue['offre-secteur'], 
			lieu: formValue['offre-lieu']
		};
		    
		this.offreService.createOffre(newOffre);
		form.reset();
		
	  }

}

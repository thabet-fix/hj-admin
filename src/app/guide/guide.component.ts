import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guideParPriorites = [
    'Technologie',
    'Niveau d\'éducation',
    'Niveau d\'expérience',
    'Le plus proche',
    'Type de temps',
    'Type de contrat',
    'Rénumération',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.guideParPriorites, event.previousIndex, event.currentIndex);
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmploiComponent } from './ajouter-emploi.component';

describe('AjouterEmploiComponent', () => {
  let component: AjouterEmploiComponent;
  let fixture: ComponentFixture<AjouterEmploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEmploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

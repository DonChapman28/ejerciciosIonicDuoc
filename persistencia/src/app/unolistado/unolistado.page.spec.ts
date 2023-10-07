import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnolistadoPage } from './unolistado.page';

describe('UnolistadoPage', () => {
  let component: UnolistadoPage;
  let fixture: ComponentFixture<UnolistadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnolistadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

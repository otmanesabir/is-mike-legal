import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryLogLineComponent } from './history-log-line.component';

describe('HistoryLogLineComponent', () => {
  let component: HistoryLogLineComponent;
  let fixture: ComponentFixture<HistoryLogLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryLogLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryLogLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

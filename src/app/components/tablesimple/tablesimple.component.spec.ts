import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesimpleComponent } from './tablesimple.component';

describe('TablesimpleComponent', () => {
  let component: TablesimpleComponent;
  let fixture: ComponentFixture<TablesimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

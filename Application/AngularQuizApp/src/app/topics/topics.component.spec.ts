import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TopicsComponent } from './topics.component';

describe('TopicsComponent', () => {
  let component: TopicsComponent;
  let fixture: ComponentFixture<TopicsComponent>;
  let html: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ TopicsComponent ],
    })
    .compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(TopicsComponent);
        component = fixture.componentInstance;
        html = fixture.debugElement;
        fixture.detectChanges;
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});



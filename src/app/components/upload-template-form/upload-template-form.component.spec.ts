import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTemplateFormComponent } from './upload-template-form.component';

describe('UploadTemplateFormComponent', () => {
  let component: UploadTemplateFormComponent;
  let fixture: ComponentFixture<UploadTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadTemplateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

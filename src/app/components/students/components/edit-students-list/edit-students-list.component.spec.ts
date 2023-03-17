// import { InjectionToken } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
// import { SharedModule } from 'src/app/shared/shared.module';
// import { EditStudentsListComponent } from './edit-students-list.component';

// describe('EditStudentsListComponent', () => {
//   let MAT_DIALOG_DATA = new InjectionToken<any>('MAT_DIALOG_DATA');

//   let component: EditStudentsListComponent;
//   let fixture: ComponentFixture<EditStudentsListComponent>;
//   let dialog: MatDialog;
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ EditStudentsListComponent ],
//       imports: [
//         MAT_DIALOG_DATA,
//       ],
//       providers: [
//         SharedModule,
//         { provide: MatDialogRef, useValue: {} },
//         { provide: MAT_DIALOG_DATA, useValue: {} }
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(EditStudentsListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   beforeEach(() => {
//     dialog = TestBed.inject(MatDialog);
//     let dialogRef = dialog.open(EditStudentsListComponent);

//     component = dialogRef.componentInstance;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

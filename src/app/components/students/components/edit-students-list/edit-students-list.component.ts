import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Student } from 'src/app/models/student';
import { DataService } from 'src/app/services/data.service';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-edit-students-list',
  templateUrl: './edit-students-list.component.html',
  styleUrls: ['./edit-students-list.component.css']
})
export class EditStudentsListComponent {
  editForm: FormGroup;

  constructor(
    private dialogRef : MatDialogRef<EditStudentsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    public dataService: DataService,
  ){
    this.editForm = new FormGroup({
      name : new FormControl(data.name),
      lastName: new FormControl(data.lastName),
      age : new FormControl(data.age),
      commission: new FormControl(data.commission),
      isActive : new FormControl(data.isActive)
    })
  }
  newFormSubmit(){
    this.data = this.editForm.value
  }
  closeDialog(){
    this.dialogRef.close(this.data)

  }
}

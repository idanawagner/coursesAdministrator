import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-edit-students-list',
  templateUrl: './edit-students-list.component.html',
  styleUrls: ['./edit-students-list.component.css']
})
export class EditStudentsListComponent {
  editForm: FormGroup
  constructor(
    private dialogRef : MatDialogRef<EditStudentsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    
  ){
    this.editForm = new FormGroup({
      name : new FormControl(data.name),
      age : new FormControl(data.age),
      isActive : new FormControl(data.isActive)
    })
  }

}

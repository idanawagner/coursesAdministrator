import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/models/student';


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
    private router: Router
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
    this.dialogRef.close(this.data)
  }
  // closeDialog(){
  //   this.router.navigate(['students'])
  // }
}

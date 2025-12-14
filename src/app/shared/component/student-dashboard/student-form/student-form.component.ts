import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from 'src/app/shared/models/student';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { StudentService } from 'src/app/shared/service/student.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  isInEditMode:boolean=false
@ViewChild('studentForm') studentForm!:NgForm
editedObj!:Istudent
private _uuid=inject(UuidService);
private _studentSer=inject(StudentService);
private _snackbarSer=inject(SnackbarService)
  constructor() { }

  ngOnInit(): void {
    this._studentSer.editObj$.subscribe(res=>{
      this.isInEditMode=true
       this.editedObj=res;
       this.studentForm.form.patchValue(this.editedObj)
    })
  }
studentAdd(){
if(this.studentForm.valid){
  let studentObj={
    ...this.studentForm.value,
    id:this._uuid.Uuid()
  }
  this.studentForm.reset()
this._studentSer.addStudent(studentObj)
.subscribe({
  next:res=>{
    this._snackbarSer.openSnackBar('Student added successfully !')
  },
  error:err=>{
    this._snackbarSer.openSnackBar('Something went wrong while posting the data !')
  }

})
}else{
  alert('Add all the field first to add')
}
}

updateStd(){
  if(this.studentForm.valid){
    let updatedObj:Istudent={
      ...this.studentForm.value,
      id:this.editedObj.id
    }
    this.isInEditMode=false;
    this._studentSer.stdUpdateFlag$.next('')
    this.studentForm.reset()
    this._studentSer.updatStd(updatedObj)
    .subscribe({
      next:res=>{
        this._snackbarSer.openSnackBar('Student updated successfully')
      },
      error:err=>{
        this._snackbarSer.openSnackBar('Something went wrong while updating student !')
      }
    })
  
  }else{
    alert('Fill up all the field to update')
  }
}
}

import { Component, inject, OnInit } from '@angular/core';
import { Istudent } from 'src/app/shared/models/student';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
studentArr:Array<Istudent>=[]

  private _studentService=inject(StudentService);
  private _snackbarSer=inject(SnackbarService)
  constructor() { }

  ngOnInit(): void {
    this._studentService.fetchAllStudent()
    .subscribe({
      next:res=>{
        this.studentArr=res
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  trackById(index:number,student:Istudent){
    return student.id
  }

  removeStd(id:string){
this._studentService.removeStd(id)
.subscribe({
  next:res=>{
    this._snackbarSer.openSnackBar('Student removed successfully !')
  },
  error:err=>{
    this._snackbarSer.openSnackBar('Something went wrong while deleting the student !')
  }
})
  }

  editStd(editedObj:Istudent){
   this._studentService.editObj$.next(editedObj)
  }
}

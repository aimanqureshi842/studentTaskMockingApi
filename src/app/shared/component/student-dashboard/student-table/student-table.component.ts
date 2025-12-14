import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Istudent } from 'src/app/shared/models/student';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { StudentService } from 'src/app/shared/service/student.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
studentArr:Array<Istudent>=[]
editedId!:string
  private _studentService=inject(StudentService);
  private _snackbarSer=inject(SnackbarService)
  constructor(private _matDialog:MatDialog) { }

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
    this._studentService.stdUpdateFlag$.subscribe(res=>{
      this.editedId=res
    })
  }
  trackById(index:number,student:Istudent){
    return student.id
  }

  removeStd(id:string){
let matDialogConfig=new MatDialogConfig();
matDialogConfig.width='450px';
matDialogConfig.maxWidth='90%';
matDialogConfig.data=`Are you sure you want to remove this student with id ${id}`

let matDialogRef=this._matDialog.open(GetconfirmComponent,matDialogConfig)

matDialogRef.afterClosed()
.subscribe(res=>{
  if(res){
    this._studentService.removeStd(id)
    .subscribe({
      next:data=>{
        this._snackbarSer.openSnackBar('This student removed successfully !')
      },
      error:err=>{
        this._snackbarSer.openSnackBar(err)
      }
    })
  }
})

// this._studentService.removeStd(id)
// .subscribe({
//   next:res=>{
//     this._snackbarSer.openSnackBar('Student removed successfully !')
//   },
//   error:err=>{
//     this._snackbarSer.openSnackBar('Something went wrong while deleting the student !')
//   }
// })
  }

  editStd(editedObj:Istudent){

    this.editedId=editedObj.id
   this._studentService.editObj$.next(editedObj)
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ipost } from 'src/app/shared/models/posts';
import { PostService } from 'src/app/shared/service/post.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  postArr:Array<Ipost>=[]
  editedId!:string
  constructor(
    private _matDialog:MatDialog
  ) { }

  private _postSer=inject(PostService);
  private _snackbarSer=inject(SnackbarService)

  ngOnInit(): void {
  this._postSer.fetchAllPost()
  .subscribe({
    next:res=>{
      this.postArr=res;
    }
  })
  this._postSer.editedIdFlag$.subscribe(res=>{
    this.editedId=res
  })
  }

  removePost(id:string){
let matConfig=new MatDialogConfig()
matConfig.width='400px';
matConfig.maxWidth='90%';
matConfig.data=`Are you sure you want to remove this post with id ${id} `
// matConfig.disableClose=true;

let matDialogRef=this._matDialog.open(GetconfirmComponent,matConfig);

matDialogRef.afterClosed()
.subscribe(res=>{
if(res){
  this._postSer.removePost(id)
  .subscribe({
    next:data=>{
      this._snackbarSer.openSnackBar(data.message)
    },
    error:err=>{
      this._snackbarSer.openSnackBar(err)
    }
  })
}
})
// this._postSer.removePost(id)
// .subscribe({
//   next:res=>{
// this._snackbarSer.openSnackBar(res.message)
//   },
//   error:err=>{
//     this._snackbarSer.openSnackBar(err)
//   }
// })
  }

  editPost(post:Ipost){
    this.editedId=post.id
this._postSer.posts$.next(post)
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Ipost } from 'src/app/shared/models/posts';
import { PostService } from 'src/app/shared/service/post.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  postArr:Array<Ipost>=[]
  constructor() { }

  private _postSer=inject(PostService);
  private _snackbarSer=inject(SnackbarService)

  ngOnInit(): void {
  this._postSer.fetchAllPost()
  .subscribe({
    next:res=>{
      this.postArr=res;
    }
  })
  }

  removePost(id:string){
this._postSer.removePost(id)
.subscribe({
  next:res=>{
this._snackbarSer.openSnackBar(res.message)
  },
  error:err=>{
    this._snackbarSer.openSnackBar(err)
  }
})
  }

  editPost(post:Ipost){
this._postSer.posts$.next(post)
  }
}

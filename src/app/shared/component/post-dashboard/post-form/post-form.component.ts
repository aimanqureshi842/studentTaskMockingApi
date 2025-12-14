import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipost } from 'src/app/shared/models/posts';
import { PostService } from 'src/app/shared/service/post.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @ViewChild('postForm') postForm!: NgForm
  isInEditMode: boolean = false;
  editedPost!: Ipost

  private _postSer = inject(PostService);
  private _uuidSer = inject(UuidService);
  private _snackbarSer = inject(SnackbarService)
  constructor() { }

  ngOnInit(): void {
    this._postSer.posts$.subscribe({
      next: res => {
        this.isInEditMode = true
        this.editedPost = res;
        this.postForm.form.patchValue(this.editedPost)
      }
    })
  }
  addPost() {
    if (this.postForm.valid) {
      let newObj = {
        ...this.postForm.value,
        id: this._uuidSer.Uuid()
      }
      this.postForm.reset();
      this._postSer.addPost(newObj)
        .subscribe({
          next: res => {
            this._snackbarSer.openSnackBar(res.message)
          },
          error: err => {
            this._snackbarSer.openSnackBar(err)
          }
        })
    } else {
      alert('Fill up the all fileds to add !')
    }
  }

  updatePost() {
    if (this.postForm.valid) {
      let updatedPost = {
        ...this.postForm.value,
        id: this.editedPost.id
      }
      this.isInEditMode = false;
      this._postSer.editedIdFlag$.next('')
      this._postSer.updatePost(updatedPost)
        .subscribe({
          next: res => {
            this._snackbarSer.openSnackBar(res.message)
          },
          error: err => {
            this._snackbarSer.openSnackBar(err)
          }
        })
      this.postForm.reset();

    } else {
      alert('Fill all the field to update !')
    }
  }
}

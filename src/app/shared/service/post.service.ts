import { inject, Injectable } from '@angular/core';
import { IgenericObservableType, Ipost } from '../models/posts';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 posts:Array<Ipost> = [
  {
    id: 'p1',
    title: 'Angular Basics',
    content: 'Angular is a framework used to build fast and scalable web applications.'
  },
  {
    id: 'p2',
    title: 'Components',
    content: 'Components control a part of the user interface in an Angular application.'
  },
  {
    id: 'p3',
    title: 'Modules',
    content: 'Modules are used to organize an Angular application into logical blocks.'
  },
  {
    id: 'p4',
    title: 'Services',
    content: 'Services contain reusable business logic and help in data sharing.'
  },
  {
    id: 'p5',
    title: 'Routing',
    content: 'Routing allows navigation between different views or pages.'
  },
  {
    id: 'p6',
    title: 'RxJS Subject',
    content: 'Subject is used for multicasting data to multiple subscribers.'
  },
  {
    id: 'p7',
    title: 'BehaviorSubject',
    content: 'BehaviorSubject stores the latest value and emits it to new subscribers.'
  },
  {
    id: 'p8',
    title: 'ReplaySubject',
    content: 'ReplaySubject replays a fixed number of past values to new subscribers.'
  },
  {
    id: 'p9',
    title: 'Directives',
    content: 'Directives are used to manipulate the DOM in Angular applications.'
  },
  {
    id: 'p10',
    title: 'Pipes',
    content: 'Pipes transform data before displaying it in the view.'
  }
];

  constructor() {

   }
 posts$:Subject<Ipost>=new Subject();
 editedIdFlag$:Subject<string>=new Subject<string>();
fetchAllPost():Observable<Ipost[]>{
 return of(this.posts) 
}

addPost(newPost:Ipost):Observable<IgenericObservableType<Ipost>>{
  this.posts.unshift(newPost)
  return of({
    status:'success',
    message:'New post added successfully !',
    data:newPost
  })
}

removePost(id:string):Observable<IgenericObservableType<string>>{
    let getIndex=this.posts.findIndex(post=>post.id===id);
    this.posts.splice(getIndex,1);
  return of({
    status:'success',
    message:`post with id "${id}" removed successfully !`,
    data:id
  })
}

updatePost(updatedPost:Ipost):Observable<IgenericObservableType<Ipost>>{
  let getIndex=this.posts.findIndex(post=>post.id===updatedPost.id);
  this.posts[getIndex]=updatedPost;
  return of({
    status:'success',
    message:'Post updated successfully !',
    data:updatedPost
  })
}
}

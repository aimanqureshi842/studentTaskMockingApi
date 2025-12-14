import { Injectable } from '@angular/core';
import { Istudent } from '../models/student';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 students:Istudent[] = [
  {
    id: 'S001',
    fullName: 'Aiman Khan',
    contact: 9876543210,
    email: 'aimankhan@gmail.com'
  },
  {
    id: 'S002',
    fullName: 'Rahul Sharma',
    contact: 9123456780,
    email: 'rahul.sharma@gmail.com'
  },
  {
    id: 'S003',
    fullName: 'Neha Verma',
    contact:9988776655,
    email: 'neha.verma@gmail.com'
  }
];

  constructor() { }
editObj$:Subject<Istudent>=new Subject()
stdUpdateFlag$:Subject<string>=new Subject<string>()
fetchAllStudent():Observable<Istudent[]>{
  return of(this.students)
}

addStudent(newObj:Istudent):Observable<Istudent>{
  this.students.unshift(newObj);
  return of(newObj)
}

removeStd(id:string):Observable<string>{
    let getIndex=this.students.findIndex(std=>std.id===id);
    this.students.splice(getIndex,1)
  return of(id)
}

updatStd(updatedObj:Istudent):Observable<Istudent>{
  let getIndex=this.students.findIndex(std=>std.id===updatedObj.id);
  this.students[getIndex]=updatedObj;
  return of(updatedObj)
}
}

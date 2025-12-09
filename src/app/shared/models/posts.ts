export interface Ipost {
  id: string;
  title: string;
  content: string;
}

export interface IgenericObservableType<T>{
     status:string,
    message:string,
    data:T
}
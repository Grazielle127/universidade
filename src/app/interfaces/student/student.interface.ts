import { User } from './../user/user.interface';
export interface Student extends User{

  course:string;
  semester: string;

}



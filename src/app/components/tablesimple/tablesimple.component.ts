import { Component, OnInit } from '@angular/core';
import { mockStudents } from 'src/app/mocks/students/mock.student'
import { Student} from'src/app/interfaces/student/student.interface'

@Component({
  selector: 'app-tablesimple',
  templateUrl: './tablesimple.component.html',
  styleUrls: ['./tablesimple.component.css']
})
export class TablesimpleComponent implements OnInit {

  students:any[]= mockStudents

  displayedColumns: string[] = ['id', 'name', 'age', 'course', 'semester',];

  constructor() { }

  ngOnInit(): void {
  }
  onclick(reaction: string){
    this.choosereaction()[reaction]()
  }
  create(){
    console.log('create')
  }
  edit(){
console.log('edit')
  }
  remove(){
console.log('remove')
  }


  choosereaction(): any {
    return {
      create: this.create,
      edit: this.edit,
      remove: this.remove,
    }
  }


}

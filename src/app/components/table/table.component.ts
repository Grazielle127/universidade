import { Student } from './../../interfaces/student/student.interface';
import { Component, OnInit } from '@angular/core';
import {mockStudents} from 'src/app/mocks/students/mock.student'



const ELEMENT_DATA: Student[] = mockStudents

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'course', 'semester', 'edit', 'remove'];
  dataSource = ELEMENT_DATA;
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

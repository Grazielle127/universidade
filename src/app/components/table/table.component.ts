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

}

import { Student } from './../../interfaces/student/student.interface';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-forms-students',
  templateUrl: './forms-students.component.html',
  styleUrls: ['./forms-students.component.css'],
})
export class FormsStudentsComponent implements OnInit {
  @Output() send = new EventEmitter();
  @Input() receberEstudante!: Student
  student = { name: '', age:0, course: '', semester: '', id: 11 };
  isupdate!: boolean
  constructor() {}

  salvar() {
    this.send.emit(this.student)
  }

  ngOnInit(): void {
    if(this.receberEstudante){
      this.isupdate = true
      this.student.name = this.receberEstudante.name
      this.student.age = this.receberEstudante.age
      this.student.course = this.receberEstudante.course
      this.student.semester = this.receberEstudante.semester
      this.student.id = this.receberEstudante.id

    }
  }
}

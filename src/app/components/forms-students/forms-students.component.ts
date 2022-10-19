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
  student: any = { name: '', age:0, course: '', semester: '',};
  isupdate!: boolean
  constructor() {}

  salvar() {
    this.send.emit(this.student)
  }

  ngOnInit(): void {
    if(this.receberEstudante){
      this.isupdate = true
      this.student = {...this.receberEstudante, id: this.receberEstudante.id}
    }
  }
}

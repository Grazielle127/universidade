import { Student } from './../../interfaces/student/student.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogStudentsComponent } from './../dialog-students/dialog-students.component';
import { Component, OnInit } from '@angular/core';
import { mockStudents } from 'src/app/mocks/students/mock.student';

@Component({
  selector: 'app-tablesimple',
  templateUrl: './tablesimple.component.html',
  styleUrls: ['./tablesimple.component.css'],
})
export class TablesimpleComponent implements OnInit {
  students: any[] = mockStudents;

  displayedColumns: string[] = ['id', 'name', 'age', 'course', 'semester'];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  /*
 - função
  function limpar(){

  }
-Metodo so existem dentro de clases
   selecionar(){

   }
- Variavel tipo number
   var int= 1;

- Constante do tipo String
   const nome = "ana" ;

- Propriedade do tipo undefined
   students

-Propriedade com interface  do tipo lista undefined
  students: any[]

-Variavel do tipo objeto Literal
  var peso = {}

-Metodo com Parametro (assinatura p/ o metodo)
  selecionar(num1){

  }

  selecionar(num1,num2,num3)
declaracao do metodo digitar
digitar(){

}

chamada do metodo digitar
  digitar()

  referencia ao metodo digitar
  digitar
*/

  onclick(reaction: string, student: Student | null) {
    this.choosereaction()[reaction](student);
  }
  create() {

    this.dialog
      .open(DialogStudentsComponent)
      .afterClosed()
      .subscribe( (resposta) =>{
        var lastId = this.students[this.students.length-1].id
        lastId++
      this.students.push({id:lastId, ...resposta});
      });
  }
  edit(student: Student) {
    this.dialog.open(DialogStudentsComponent, {
      data: student

    }).afterClosed()
    .subscribe( (resposta) =>{
      const index = this.getIndex(this.students, resposta.id)
      if (index >= 0) {


       this.students[index] = resposta
      }


    });

  }
  remove(student: Student) {


    const index = this.getIndex(this.students, student.id);
    if (index >= 0) {
      this.students.splice(index, 1);
    }

  }
  filtro(students: Student[], id: number) {
    return students.filter(function (student) {
      return student.id == id;
    });
  }
  getIndex(students: Student[], id: number) {
    return students.findIndex(function (student) {
      return student.id == id;
    });
  }

  choosereaction(): any {
    return {
      create: (student: Student | null) => this.create(),
      edit: (student: Student) => this.edit(student),
      remove: (student: Student) => this.remove(student),
    };
  }
}

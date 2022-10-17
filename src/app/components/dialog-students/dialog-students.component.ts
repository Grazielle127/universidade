import { Student } from './../../interfaces/student/student.interface';
import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-students',
  templateUrl: './dialog-students.component.html',
  styleUrls: ['./dialog-students.component.css']
})
export class DialogStudentsComponent implements OnInit {

  constructor(
    private dialogref: MatDialogRef<DialogStudentsComponent>,
   @Inject(MAT_DIALOG_DATA)  public data: Student  ) { }

  onsend(event: any ){
    this.dialogref.close(event)

  }
  ngOnInit(): void {
  }

}

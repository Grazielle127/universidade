import { TranslateHeaderTablePipe } from './pipe/headertable/headertable.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TablesimpleComponent } from './components/tablesimple/tablesimple.component';
import { DialogStudentsComponent } from './components/dialog-students/dialog-students.component';
import { FormsStudentsComponent } from './components/forms-students/forms-students.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  entryComponents:[DialogStudentsComponent],



  declarations: [

    AppComponent,
    TableComponent,
    TablesimpleComponent,
    TranslateHeaderTablePipe,
    FormsStudentsComponent,
    DialogStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

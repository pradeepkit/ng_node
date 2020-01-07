import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsFeaturedComponent } from './students-featured/students-featured.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsDetailComponent } from './students-detail/students-detail.component';
import { StudentsRecentComponent } from './students-recent/students-recent.component';
import { CategoriesComponent } from './categories/categories.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [StudentsFeaturedComponent, StudentsListComponent, StudentsDetailComponent, StudentsRecentComponent, CategoriesComponent, StudentCreateComponent, StudentEditComponent, StudentListComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    StudentsFeaturedComponent
  ],

})
export class StudentsModule { }

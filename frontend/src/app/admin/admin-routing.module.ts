/* import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { } */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';

import { AuthGuard } from '../auth/auth.guard';
// import { StudentsListComponent } from '../students/students-list/students-list.component';
import { StudentListComponent } from '../students/student-list/student-list.component';
import { StudentCreateComponent } from '../students/student-create/student-create.component';
import { StudentEditComponent } from '../students/student-edit/student-edit.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
      path: '',
      children: [
        { path: 'blogs', component: ManageBlogsComponent },
        { path: 'students', component: StudentListComponent },
        { path: 'categories', component: ManageCategoriesComponent },
        { path: 'pages', component: ManagePagesComponent },
        { path: '', component: AdminDashboardComponent },
        { path: 'student/create', component: StudentCreateComponent },
        // { path: 'students/edit/:id', component: StudentEditComponent},
        { path: 'student/list', component: StudentListComponent }
      ],
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

 }

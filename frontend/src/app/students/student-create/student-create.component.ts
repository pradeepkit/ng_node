import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentsService } from '../../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  data: any;

  constructor(public studentService: StudentsService, public router: Router) {
    // this.data = new Student();

  }

  ngOnInit() {
  }

  submitForm() {
    this.studentService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['admin/student/list']);
    });

  }

}

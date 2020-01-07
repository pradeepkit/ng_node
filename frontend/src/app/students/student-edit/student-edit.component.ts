import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  @Input() std_id: any;
  @Output() outputDataToParent = new EventEmitter();

  id: any;
  // data: Student;
  data:any;
  // @Input() fileTypeParent: string;
  // @Output() outputDataToParent = new EventEmitter<any>();

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: StudentsService
  ) {
    // this.data = new Student();
  }

  ngOnInit() {
    if(this.activatedRoute.snapshot.params["id"]){
      this.id = this.activatedRoute.snapshot.params["id"];
      console.log('id', this.id);
      this.find_id(this.id);
    }else{
      this.id = this.std_id;
      this.find_id(this.id);
    }

  }

  find_id(id){
    console.log('id', id);
    this.id = id;
    //get item details using id
    this.apiService.getItem(id).subscribe(response => {
      console.log(response);
      const temp = response;
      if(temp.data){
        this.data = temp.data;
        console.log('data',temp );
      }else{
        console.log('res', response);
      }

    })
  }

  update(data) {
    console.log('update', data);
    this.apiService.updateItem(data._id, data).subscribe(response => {
      console.log(response);
      this.SendDataToParent(response);
      this.router.navigate(['admin/student/list']);
    })
  }

  SendDataToParent(selector) {

    console.log('hay Edit')
    this.outputDataToParent.emit(selector);
   /*  this.docRepoService
      .linkfileService(selector, fileTypeParent)
      .subscribe(res => {
        // console.log("res>>>>>>>>>>>>>>>>>>>>>>>>>", res);
        // this.outputDataToParent.emit(res);

      }); */
  }



}

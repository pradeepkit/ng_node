
import { Component, OnInit, TemplateRef } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [BsModalService]
})
export class StudentListComponent implements OnInit {
  modalRef: BsModalRef;

  studentsData: any;
  std_id: any;

  constructor(
    public apiService: StudentsService,
    private modalService: BsModalService,
  ) {
    this.studentsData = [];
  }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.studentsData = response;
    })
  }


  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      this.getAllStudents();
    });
  }

 /*  editStudent(id){
    console.log('hello', id);
  } */

  editStudent(template: TemplateRef<any>, std_id: any) {
    this.std_id = std_id;
    let config = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-lg container'
       // my-modal
    };
    this.modalRef = this.modalService.show(template, Object.assign({}, config));
    return false;
  }

  closeDocument_file_Model() {
    this.modalRef.hide();
    this.modalRef = null;
  }

  getOutputVal(selector){
    console.log('selector', selector);

  }
}

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
providers:[StudentService ]

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentData: any = []

  constructor(public _studentData: StudentService) { }

  ngOnInit(): void {
    this.studentData = this._studentData.data
  }

  displayedColumns: string[] = ['StudentId', 'Name', 'Class', 'RollNo', 'Math', 'English', 'Hindi', 'Science', 'Drawing', 'Total'];


}

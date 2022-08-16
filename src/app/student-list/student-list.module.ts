import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';



@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule
  ]
})
export class StudentListModule { }
data = [
  { StudentId: 1, FirstName: "fname1", MiddleName: "", LastName: "lname1", Class: "12", RollNo: 10, Math: 56, English: 34, Hindi: 56, Science: 90, Drawing: 67 },
  { StudentId: 2, FirstName: "fname2", MiddleName: "", LastName: "lname2", Class: "19", RollNo: 15, Math: 90, English: 23, Hindi:34, Science: 23, Drawing: 89 },
  { StudentId: 3, FirstName: "fname3", MiddleName: "mname3", LastName: "lname3", Class: "9", RollNo: 78, Math: 84, English: 78, Hindi: 45, Science: 65, Drawing: 90 },
  { StudentId: 4, FirstName: "fname4", MiddleName: "", LastName: "lname4", Class: "8", RollNo: 20, Math: 34, English: 78, Hindi: 23, Science: 45, Drawing: 45 },
  { StudentId: 5, FirstName: "fname5", MiddleName: "", LastName: "lname5", Class: "6", RollNo: 30, Math: 67, English: 90, Hindi: 23, Science: 95, Drawing: 34 },
  { StudentId: 6, FirstName: "fname6", MiddleName: "mname6", LastName: "lname6", Class: "8", RollNo: 56, Math: 56, English: 34, Hindi: 56, Science: 38, Drawing: 67 },
  { StudentId: 7, FirstName: "fname7", MiddleName: "", LastName: "lname7", Class: "9", RollNo: 78, Math: 78, English: 23, Hindi: 77, Science: 67, Drawing: 90 },
  { StudentId: 8, FirstName: "fname8", MiddleName: "", LastName: "lname8", Class: "11", RollNo: 78, Math: 34, English: 23, Hindi: 95, Science: 56, Drawing: 23 },
  { StudentId: 9, FirstName: "fname9", MiddleName: "mname9", LastName: "lname9", Class: "11", RollNo: 78, Math: 25, English: 12, Hindi: 36, Science: 78, Drawing: 56},
  { StudentId: 10, FirstName: "fname10", MiddleName: "", LastName: "lname10", Class: "12", RollNo: 30, Math: 45, English: 45, Hindi: 74, Science: 90, Drawing: 67 },
]
}

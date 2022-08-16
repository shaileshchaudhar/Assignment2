import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  ngOnInit(): void {
  }

  fname: string = ""
  mname: string = ""
  lname: string = ""
  dept: String = ""
  gender: string = ""
  dob: string = ""
  address1: string = ""
  address2: string = ""
  Pincode: number = 0

  openDialog(ngform: NgForm) {
    ngform.invalid ? alert("Please check the errors") : this.dialog.open(DialogSuccess);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-box.html',
})

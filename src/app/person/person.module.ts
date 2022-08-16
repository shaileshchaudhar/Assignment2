import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class PersonModule { }

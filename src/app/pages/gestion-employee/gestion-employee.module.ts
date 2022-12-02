import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEmployeeRoutingModule } from './gestion-employee-routing.module';
import { GestionEmployeeComponent } from './gestion-employee.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DepartmentService } from '../../services/department.service';
import { EmployeeService } from '../../services/employee.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GestionEmployeeComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    GestionEmployeeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[EmployeeService, DepartmentService]
})
export class GestionEmployeeModule { }

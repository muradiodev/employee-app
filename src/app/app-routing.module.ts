import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

const routes: Routes = [
  { path: '', component: EmployeeTableComponent },
  { path: 'employees', component: EmployeeTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

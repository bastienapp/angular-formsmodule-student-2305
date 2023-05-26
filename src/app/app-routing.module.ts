import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {
    path: 'student', component: StudentFormComponent
  },
  {
    path: 'student/:name', component: StudentDetailsComponent
  },
  {
    path: '', redirectTo: '/student', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

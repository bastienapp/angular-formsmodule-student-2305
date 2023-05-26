import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  nameValue: string = ""

  constructor(private router: Router) { }

  onStudentSearch(): void {
    // faire la redirection vers /student/:name
    this.router.navigate(["/student", this.nameValue])
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentName: string | null = ""

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentName = this.activatedRoute.snapshot.paramMap.get("name");
  }
}
